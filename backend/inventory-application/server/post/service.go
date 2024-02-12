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
		err = db.FindOne(ctx, bson.D{{Key: "_id", Value: post_id}}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": fmt.Sprintf("Unable to find post with id %s", post_id),
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
		var new_post NewPost

		if err := ctx.ShouldBindJSON(&new_post); err != nil {
			log.Println(err.Error())
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Invalid request from user.",
			})
			return
		}

		result, err := db.InsertOne(ctx, bson.D{
			{Key: "title", Value: new_post.Title},
			{Key: "content", Value: new_post.Content},
			{Key: "is_published", Value: new_post.IsPublished},
			{Key: "created_at", Value: time.Now()},
			{Key: "updated_at", Value: time.Now()},
		})
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": "Unable to insert post.",
			})
			return
		}

		var post Post
		err = db.FindOne(ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(&post)
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

func CreateMany(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
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

func DeleteMany(db *mongo.Collection) func(ctx *gin.Context) {
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

func UpdateMany(db *mongo.Collection) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}
