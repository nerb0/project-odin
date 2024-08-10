package session

import (
	"errors"
	"log"

	"github.com/gin-gonic/gin"
)

func DecodeSession(ctx *gin.Context) {
	cookie, err := ctx.Cookie("let_him_cookie")
	if err == nil {
		claims, err := DecodeJWT(cookie)
		if err != nil {
			log.Println(err.Error())
			ctx.Next()
			return
		}

		ctx.Set("user", claims)
		ctx.Next()
		return
	}

	ctx.Next()
}

func RequireUser(ctx *gin.Context) {
	ctx_user, user_exists := ctx.Get("user")
	if !user_exists {
		ctx.Error(errors.New("invalid credentials"))
		ctx.Next()
		return
	}

	user, ok := ctx_user.(*UserAuthenticationClaims)
	if !ok {
		ctx.Error(errors.New("invalid credentials"))
		ctx.Next()
		return
	}

	if !AuthenticateUserCredentials(user) {
		ctx.Error(errors.New("invalid credentials"))
		ctx.Next()
		return
	}

	ctx.Next()
}
