package routes

import (
	"inventory-application/server/post"
	"inventory-application/server/session"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Setup(router_group *gin.RouterGroup, db *mongo.Database) {
	router_group.Use(session.DecodeSession)
	auth := router_group.Group("/auth")
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

	auth.POST("/verify", func(ctx *gin.Context) {
		cookie, err := ctx.Cookie("let_him_cookie")
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"message": "No credentials provided.",
			})
			return
		}

		claims, err := session.DecodeJWT(cookie)
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"message": err.Error(),
			})
			return
		}
		if claims.Username != os.Getenv("BLOG_USERNAME") || claims.Password != os.Getenv("BLOG_PASSWORD") {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"message": "Incorrect username or password.",
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"data": gin.H{
				"authenticated": true,
			},
			"message": "User is authenticated.",
		})
	})

	auth.POST("/login", session.HandleLogin)
}
