package comment

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Comment struct {
	CreatedAt time.Time          `bson:"created_at" json:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at" json:"updated_at"`
	Message   string             `bson:"message" json:"message" xml:"message" form:"message" binding:"required"`
	Author    string             `bson:"author,omitempty" json:"author" xml:"author" form:"author"`
	PostID    primitive.ObjectID `bson:"post_id" json:"post_id" xml:"post_id" form:"post_id"`
	ID        primitive.ObjectID `bson:"_id" json:"_id,omitempty" xml:"_id,omitempty" form:"_id,omitempty" binding:"-"`
}

type NewComment struct {
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
	Message   string             `bson:"message" json:"message" xml:"message" form:"message" binding:"required"`
	Author    string             `bson:"author,omitempty" json:"author" xml:"author" form:"author"`
	PostID    primitive.ObjectID `bson:"post_id"`
}
