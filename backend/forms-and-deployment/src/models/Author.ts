import { DateTime } from "luxon";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
	{
		first_name: { type: String, required: true, maxLength: 100 },
		family_name: { type: String, required: true, maxLength: 100 },
		date_of_birth: { type: Date },
		date_of_death: { type: Date },
	},
	{
		virtuals: {
			date_of_birth_yyyy_mm_dd: {
				get: function () {
					return this.date_of_birth
						? DateTime.fromJSDate(this.date_of_birth).toISODate()
						: "";
				},
			},
			name: {
				get: function () {
					// To avoid errors in cases where an author does not have either a family name or first name
					// We want to make sure we handle the exception by returning an empty string for that case
					let fullname = "";
					if (this.first_name && this.family_name) {
						fullname = `${this.family_name}, ${this.first_name}`;
					}

					return fullname;
				},
			},
			url: {
				get: function () {
					// We don't use an arrow function as we'll need the this object
					return `/catalog/author/${this._id}`;
				},
			},
			lifespan: {
				get: function () {
					const birth = this.date_of_birth
						? DateTime.fromJSDate(this.date_of_birth).toLocaleString(
								DateTime.DATE_MED
						  )
						: "";
					const death = this.date_of_death
						? DateTime.fromJSDate(this.date_of_death).toLocaleString(
								DateTime.DATE_MED
						  )
						: "";
					return `${birth} - ${death}`;
				},
			},
		},
	}
);

export default mongoose.model("Author", AuthorSchema);
