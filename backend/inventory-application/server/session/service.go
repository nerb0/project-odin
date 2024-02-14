package session

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func HandleLogin(ctx *gin.Context) {
	var user_credentials UserAuthentication

	if err := ctx.ShouldBindJSON(&user_credentials); err != nil {
		log.Println(err.Error())
		ctx.JSON(http.StatusBadRequest, gin.H{
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Invalid request from user.",
		})
		return
	}

	if user_credentials.Password != os.Getenv("BLOG_PASSWORD") || user_credentials.Username != os.Getenv("BLOG_USERNAME") {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Incorrect username or password.",
		})
		return
	}

	token, err := CreateJWT(&UserAuthenticationClaims{
		user_credentials,
		jwt.RegisteredClaims{},
	})
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Unable to log in user. Please try again.",
		})
		return
	}

	const COOKIE_EXPIRY = 60 /*sec*/ * 60 /*min*/ * 24 /*hour*/ * 7 /*day*/
	ctx.SetCookie("let_him_cookie", token, COOKIE_EXPIRY, "/", ctx.Request.URL.Path, false, true)
	ctx.JSON(http.StatusOK, gin.H{
		"data": gin.H{
			"authenticated": true,
		},
		"message": "You have successfully logged in.",
	})
}

func VerifyUser(ctx *gin.Context) {
	var user interface{}
	user, user_exists := ctx.Get("User")
	if !user_exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"data": gin.H{
				"authenticated": false,
			},
			"message": "You are not logged in.",
		})
	}

	if user.(UserAuthentication).Username != os.Getenv("BLOG_USERNAME") || user.(UserAuthentication).Password != os.Getenv("BLOG_PASSWORD") {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Invalid credentials.",
		})
		return
	}

	ctx.JSON(http.StatusUnauthorized, gin.H{
		"data": gin.H{
			"authenticated": true,
		},
		"message": "User is logged in.",
	})
}
