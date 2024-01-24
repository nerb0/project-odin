import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		virtuals: {
			url: {
				get: function () {
					// We don't use an arrow function as we'll need the this object
					return `/catalog/genre/${this._id}`;
				},
			},
		},
	}
);

export default mongoose.model("Genre", GenreSchema);
