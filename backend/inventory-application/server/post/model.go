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

type NewPostOne struct {
	UpdatedAt   time.Time `bson:"updated_at"`
	CreatedAt   time.Time `bson:"created_at"`
	Title       string    `form:"title" json:"title" xml:"title" bson:"title" binding:"required"`
	Content     string    `form:"content" json:"content" xml:"content"  bson:"content" binding:"required"`
	IsPublished bool      `form:"is_published" json:"is_published" xml:"is_published" bson:"is_published" binding:"-"`
}

type UpdatePostOne struct {
	UpdatedAt   time.Time `bson:"updated_at"`
	Title       string    `form:"title" json:"title" xml:"title" bson:"title,omitempty" binding:"-"`
	Content     string    `form:"content" json:"content" xml:"content" bson:"content,omitempty" binding:"-"`
	IsPublished bool      `form:"is_published" json:"is_published" xml:"is_published" bson:"is_published,omitempty" binding:"-"`
}

type UpdatePostMany struct {
	Title       string             `form:"title" json:"title" xml:"title" bson:"title,omitempty" binding:"-"`
	Content     string             `form:"content" json:"content" xml:"content" bson:"content,omitempty" binding:"-"`
	IsPublished bool               `form:"is_published" json:"is_published" xml:"is_published" bson:"is_published,omitempty" binding:"-"`
	ID          primitive.ObjectID `form:"id" json:"id" xml:"id" bson:"id" binding:"required"`
}
