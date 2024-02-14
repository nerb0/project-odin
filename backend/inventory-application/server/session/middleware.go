package session

import (
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

		ctx.Set("User", claims)
		ctx.Next()
		return
	}

	ctx.Next()
}
