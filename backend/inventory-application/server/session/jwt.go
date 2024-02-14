package session

import (
	"crypto/ed25519"
	"encoding/base64"
	"fmt"
	"os"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/ssh"
)

func DecodeJWT(jwtString string) (*UserAuthenticationClaims, error) {
	token, err := jwt.ParseWithClaims(jwtString, &UserAuthenticationClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodEd25519); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		public_key, err := base64.StdEncoding.DecodeString(os.Getenv("JWT_PUBLIC_KEY"))
		if err != nil {
			return nil, err
		}
		return ed25519.PublicKey(public_key), nil
	})
	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*UserAuthenticationClaims); ok {
		return claims, nil
	}

	return nil, err
}

func CreateJWT(claims *UserAuthenticationClaims) (string, error) {
	token := jwt.NewWithClaims(&jwt.SigningMethodEd25519{}, claims)
	privateKey, err := ssh.ParseRawPrivateKey([]byte(os.Getenv("JWT_PRIVATE_KEY")))
	if err != nil {
		return "", err
	}

	return token.SignedString(privateKey)
}
