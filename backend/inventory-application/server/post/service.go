package post

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetOne(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		post_id := ctx.Param("id")
		if post_id == "" {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"message": "Invalid post id",
			})
			return
		}

		var post Post
		err := db.Collection("posts").FindOne(ctx, bson.D{{Key: "_id", Value: post_id}}).Decode(&post)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusAccepted, gin.H{
			"data":    post,
			"message": "Post fetched successfully.",
		})
	}
}

func GetAll(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		cursor, err := db.Collection("posts").Find(ctx, bson.D{})
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

func CreateOne(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func CreateMany(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func DeleteOne(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func DeleteMany(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func UpdateOne(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}

func UpdateMany(db *mongo.Database) func(ctx *gin.Context) {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"TODO": "Not implemented yet.",
		})
	}
}
