package post

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	created_at   time.Time
	updated_at   time.Time
	author       string `bson:"omitempty"`
	title        string
	content      string
	_id          primitive.ObjectID
	is_published bool
}
