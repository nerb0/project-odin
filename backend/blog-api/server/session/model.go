package session

import "github.com/golang-jwt/jwt/v5"

type UserAuthentication struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type UserAuthenticationClaims struct {
	UserAuthentication
	jwt.RegisteredClaims
}
