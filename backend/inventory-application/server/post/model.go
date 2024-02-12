package post

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	CreatedAt   time.Time          `bson:"created_at"`
	UpdatedAt   time.Time          `bson:"updated_at"`
	Title       string             `bson:"title"`
	Content     string             `bson:"content"`
	ID          primitive.ObjectID `bson:"_id"`
	IsPublished bool               `bson:"is_published"`
}

type NewPost struct {
	Title       string `form:"title" json:"title" xml:"title"  binding:"required"`
	Content     string `form:"content" json:"content" xml:"content"  binding:"required"`
	IsPublished bool   `form:"is_published" json:"is_published" xml:"is_published"  binding:"-"`
}
