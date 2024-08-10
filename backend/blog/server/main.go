package main

import (
	"fmt"
	"inventory-application/server/routes"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	// session.GenerateKey()
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "3000"
	}

	db := setup_db()
	server := gin.Default()

	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("ALLOWED_ORIGIN")},
		AllowMethods:     []string{"PUT", "GET", "DELETE", "POST"},
		AllowHeaders:     []string{"Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization", "accept", "origin", "Cache-Control", "X-Requested-With"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           24 * 7 * time.Hour,
	}))
	api_routes := server.Group("/")
	routes.Setup(api_routes, db)

	err := server.Run(fmt.Sprintf(":%s", PORT))

	if err != nil {
		fmt.Println("Unable to start server: ", err)
	} else {
		fmt.Printf("Server running on http://localhost:%s\n", PORT)
	}
}
