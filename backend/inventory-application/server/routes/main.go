package routes

import (
	"inventory-application/server/post"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Setup(router_group *gin.RouterGroup, db *mongo.Database) {
	posts := router_group.Group("/post")

	router_group.GET("/posts", post.GetAll(db))
	router_group.POST("/posts", post.CreateMany(db))
	router_group.DELETE("/posts", post.DeleteMany(db))
	router_group.PUT("/posts", post.UpdateMany(db))
	posts.GET("/:id", post.GetOne(db))
	posts.POST("/:id", post.CreateOne(db))
	posts.DELETE("/:id", post.DeleteOne(db))
	posts.PUT("/:id", post.UpdateOne(db))
}
