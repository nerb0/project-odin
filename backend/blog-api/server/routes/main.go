package routes

import (
	"inventory-application/server/comment"
	"inventory-application/server/post"
	"inventory-application/server/session"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Setup(router_group *gin.RouterGroup, db *mongo.Database) {
	router_group.Use(session.DecodeSession)
	auth := router_group.Group("/auth")
	posts := router_group.Group("/post")
	// comments := router_group.Group("/comments")

	post_coll := db.Collection("posts")
	router_group.GET("/posts", post.GetAll(post_coll))
	router_group.POST("/posts", session.RequireUser, session.RequireUser, post.CreateMany(post_coll))
	router_group.DELETE("/posts", session.RequireUser, post.DeleteMany(post_coll))
	router_group.PUT("/posts", session.RequireUser, post.UpdateMany(post_coll))
	posts.POST("", session.RequireUser, post.CreateOne(post_coll))
	posts.GET("/:post_id", post.GetOne(post_coll))
	posts.DELETE("/:post_id", session.RequireUser, post.DeleteOne(post_coll))
	posts.PUT("/:post_id", session.RequireUser, post.UpdateOne(post_coll))

	comment_coll := db.Collection("comments")
	posts.GET("/:post_id/comments", comment.GetAll(post_coll, comment_coll))
	posts.POST("/:post_id/comment", comment.CreateOne(post_coll, comment_coll))

	auth.POST("/verify", session.VerifyUser)
	auth.POST("/login", session.HandleLogin)
	auth.POST("/logout", session.HandleLogout)
}
