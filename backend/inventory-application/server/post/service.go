package post

import (
	"fmt"
	"inventory-application/server/session"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	POST_LIST_TEXT_COUNT_LIMIT int64 = 1000
	POST_COUNT_PER_PAGE        int64 = 10
)

func GetOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		param_id := ctx.Param("id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid post id.",
			})
		}

		var post Post
		err = db.FindOne(ctx, bson.M{"_id": post_id}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": fmt.Sprintf("Unable to find post with id %s", param_id),
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    post,
			"status":  "ok",
			"message": "Post fetched successfully.",
		})
	}
}

func GetAll(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		var query PostGetAllQuery
		var page int64 = 1
		filter := bson.M{
			"is_published": true,
		}

		ctx_user, user_exists := ctx.Get("user")
		if user_exists {
			user, ok := ctx_user.(*session.UserAuthenticationClaims)
			if ok {
				if session.AuthenticateUserCredentials(user) {
					filter = bson.M{}
				}
			}
		}

		err := ctx.ShouldBindQuery(&query)
		if err == nil {
			if query.Page > 0 {
				page = query.Page
			}
		}

		cursor, err := db.Find(ctx, filter, &options.FindOptions{
			Sort:  bson.M{"created_at": -1},
			Limit: ToInt64(POST_LIST_TEXT_COUNT_LIMIT),
			Skip:  ToInt64((page - 1) * POST_COUNT_PER_PAGE),
		})
		if err != nil {
			ctx.JSON(http.StatusBadGateway, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		var posts []Post
		err = cursor.All(ctx, &posts)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		if posts == nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Unable to find any posts",
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"status":  "ok",
			"data":    posts,
			"message": "Posts fetched successfully.",
		})
	}
}

func CreateOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		if len(ctx.Errors.Errors()) > 0 {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": ctx.Errors.Errors()[0],
			})
			return
		}
		var new_post NewPostOne

		if err := ctx.ShouldBindJSON(&new_post); err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid request from user.",
			})
			return
		}
		new_post.UpdatedAt = time.Now()
		new_post.CreatedAt = time.Now()

		result, err := db.InsertOne(ctx, &new_post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": "Unable to insert post.",
			})
			return
		}

		var post Post
		err = db.FindOne(ctx, bson.M{"_id": result.InsertedID}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"data":    post,
			"message": "Post is created successfully.",
		})
	}
}

func DeleteOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		param_id := ctx.Param("id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid post id.",
			})
		}

		var post Post
		err = db.FindOneAndDelete(ctx, bson.M{"_id": post_id}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": fmt.Sprintf("Unable to find post with id %s", param_id),
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    post,
			"message": "Post deleted successfully.",
		})
	}
}

func UpdateOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		param_id := ctx.Param("id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Invalid post id.",
			})
			return
		}

		var new_data UpdatePostOne
		if err := ctx.ShouldBindJSON(&new_data); err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid request from user.",
			})
			return
		}
		new_data.UpdatedAt = time.Now()

		_, err = db.UpdateOne(ctx, bson.M{"_id": post_id}, bson.M{"$set": new_data})
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": fmt.Sprintf("Unable to find post with id %s", param_id),
			})
			return
		}

		var post Post
		err = db.FindOne(ctx, bson.M{"_id": post_id}).Decode(&post)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": "Unable to retrieve post update.",
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    post,
			"message": "Post updated successfully.",
		})
	}
}

func CreateMany(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func UpdateMany(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func DeleteMany(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

type PostGetAllQuery struct {
	Page int64 `json:"page,omitempty"`
}

func ToInt64(limit int64) *int64 {
	return &limit
}
