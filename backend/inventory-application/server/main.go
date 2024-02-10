package main

import (
	"fmt"
	"inventory-application/server/routes"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "3000"
	}

	db := setup_db()
	server := gin.Default()

	api_routes := server.Group("/")
	routes.Setup(api_routes, db)

	err := server.Run(fmt.Sprintf(":%s", PORT))

	if err != nil {
		fmt.Println("Unable to start server: ", err)
	} else {
		fmt.Printf("Server running on http://localhost:%s\n", PORT)
	}
}
