package post

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		param_id := ctx.Param("id")
		post_id, err := primitive.ObjectIDFromHex(param_id)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Invalid post id.",
			})
		}

		var post Post
		err = db.FindOne(ctx, bson.M{"_id": post_id}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": fmt.Sprintf("Unable to find post with id %s", param_id),
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    post,
			"message": "Post fetched successfully.",
		})
	}
}

func GetAll(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		cursor, err := db.Find(ctx, bson.D{})
		if err != nil {
			ctx.JSON(http.StatusBadGateway, gin.H{
				"message": err.Error(),
			})
			return
		}

		var posts []Post
		err = cursor.All(ctx, &posts)
		if err != nil {
			ctx.JSON(http.StatusBadGateway, gin.H{
				"message": err.Error(),
			})
			return
		}

		if posts == nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Unable to find any posts",
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    posts,
			"message": "Posts fetched successfully.",
		})
	}
}

func CreateOne(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		var new_post NewPostOne

		if err := ctx.ShouldBindJSON(&new_post); err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Invalid request from user.",
			})
			return
		}
		new_post.UpdatedAt = time.Now()
		new_post.CreatedAt = time.Now()

		result, err := db.InsertOne(ctx, &new_post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": "Unable to insert post.",
			})
			return
		}

		var post Post
		err = db.FindOne(ctx, bson.M{"_id": result.InsertedID}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
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
