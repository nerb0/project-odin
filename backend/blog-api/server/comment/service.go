package comment

import (
	"fmt"
	"inventory-application/server/post"
	"inventory-application/server/session"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	COMMENT_COUNT_PER_FETCH int64 = 50
)

func GetOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func GetAll(post_db *mongo.Collection, comment_db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		param_id := ctx.Param("post_id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid post id.",
			})
			return
		}
		filter := bson.M{
			"post_id": post_id,
		}
		last_id := ctx.Query("last_id")
		if last_id != "" {
			id, err := primitive.ObjectIDFromHex(last_id)
			if err != nil {
				ctx.JSON(http.StatusBadGateway, gin.H{
					"status":  "fail",
					"message": "Invalid request.",
				})
				return
			}
			filter["_id"] = bson.M{"$lt": id}
		}

		cursor, err := comment_db.Find(ctx, filter, &options.FindOptions{
			Sort:  bson.M{"created_at": -1},
			Limit: ToInt64(COMMENT_COUNT_PER_FETCH),
		})
		if err != nil {
			ctx.JSON(http.StatusBadGateway, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		var comments []Comment
		err = cursor.All(ctx, &comments)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		if comments == nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Unable to find any comments.",
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"status": "ok",
			"data": gin.H{
				"comments": comments,
			},
			"message": "Comments fetched successfully.",
		})
	}
}

func CreateOne(post_db *mongo.Collection, comment_db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		var new_comment NewComment
		param_id := ctx.Param("post_id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid post id.",
			})
			return
		}

		var post post.Post
		err = post_db.FindOne(ctx, bson.M{"_id": post_id}).Decode(&post)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": fmt.Sprintf("Unable to find post with id %s", param_id),
			})
			return
		}

		if err = ctx.ShouldBindJSON(&new_comment); err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Invalid request from user.",
			})
			return
		}
		ctx_user, user_exists := ctx.Get("user")
		if user_exists {
			user, ok := ctx_user.(*session.UserAuthenticationClaims)
			if ok {
				if session.AuthenticateUserCredentials(user) {
					new_comment.Author = os.Getenv("BLOG_AUTHOR_NAME")
				}
			}
		}
		new_comment.PostID = post_id
		new_comment.UpdatedAt = time.Now()
		new_comment.CreatedAt = time.Now()

		result, err := comment_db.InsertOne(ctx, &new_comment)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": "Unable to create comment.",
			})
			return
		}

		var comment Comment
		err = comment_db.FindOne(ctx, bson.M{"_id": result.InsertedID}).Decode(&comment)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"status": "ok",
			"data": gin.H{
				"comment": comment,
			},
			"message": "Comment is created successfully.",
		})
	}
}

func DeleteOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func UpdateOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
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

func ToInt64(limit int64) *int64 {
	return &limit
}
