package session

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

const COOKIE_EXPIRY = 60 * 60 * 24 * 14 /* 14 days*/

func HandleLogout(ctx *gin.Context) {
	if len(ctx.Errors.Errors()) > 0 {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"status":  "fail",
			"message": ctx.Errors.Errors()[0],
		})
		return
	}

	ctx.SetCookie("let_him_cookie", "", 0, "/#/admin", "", false, true)
	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data": gin.H{
			"loggedOut": true,
		},
		"message": "You have successfully logged in.",
	})
}

func HandleLogin(ctx *gin.Context) {
	var user_credentials UserAuthentication

	if err := ctx.ShouldBindJSON(&user_credentials); err != nil {
		log.Println(err.Error())
		ctx.JSON(http.StatusBadRequest, gin.H{
			"status": "fail",
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Invalid request from user.",
		})
		return
	}

	if user_credentials.Password != os.Getenv("BLOG_PASSWORD") || user_credentials.Username != os.Getenv("BLOG_USERNAME") {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"status": "fail",
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
			"status": "fail",
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Unable to log in user. Please try again.",
		})
		return
	}

	ctx.SetCookie("let_him_cookie", token, COOKIE_EXPIRY, "/#/admin", "", false, true)
	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data": gin.H{
			"authenticated": true,
		},
		"message": "You have successfully logged in.",
	})
}

func VerifyUser(ctx *gin.Context) {
	ctx_user, user_exists := ctx.Get("user")
	if !user_exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"status": "fail",
			"data": gin.H{
				"authenticated": false,
			},
			"message": "User is not logged in.",
		})
		return
	}

	user, ok := ctx_user.(*UserAuthenticationClaims)
	if !ok {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"status": "fail",
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Invalid credentials.",
		})
		return
	}

	if !AuthenticateUserCredentials(user) {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"status": "fail",
			"data": gin.H{
				"authenticated": false,
			},
			"message": "Invalid credentials.",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data": gin.H{
			"authenticated": true,
		},
		"message": "User is logged in.",
	})
}
