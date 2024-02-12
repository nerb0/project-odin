package routes

import (
	"inventory-application/server/post"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Setup(router_group *gin.RouterGroup, db *mongo.Database) {
	posts := router_group.Group("/post")

	post_coll := db.Collection("posts")
	router_group.GET("/posts", post.GetAll(post_coll))
	router_group.POST("/posts", post.CreateMany(post_coll))
	router_group.DELETE("/posts", post.DeleteMany(post_coll))
	router_group.PUT("/posts", post.UpdateMany(post_coll))
	posts.POST("/", post.CreateOne(post_coll))
	posts.GET("/:id", post.GetOne(post_coll))
	posts.DELETE("/:id", post.DeleteOne(post_coll))
	posts.PUT("/:id", post.UpdateOne(post_coll))
}
