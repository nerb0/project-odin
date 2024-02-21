package session

import "os"

func AuthenticateUserCredentials(user *UserAuthenticationClaims) bool {
	return user.Password == os.Getenv("BLOG_PASSWORD") && user.Username == os.Getenv("BLOG_USERNAME")
}
