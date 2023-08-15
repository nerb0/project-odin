export {};

declare global {
	type CVSkill = {
		id: string | number;
		name: string;
	};

	type CVEducation = {
		id: string | number;
		visible: boolean;
		start: Date;
		end: Date | "present";
		address: string;
		university: string;
		degree: string;
	};

	type CVExperience = {
		id: string | number;
		start: Date;
		end: Date | "present";
		visible: boolean;
		position: string;
		summary: string[];
		company: string;
		address: string;
	};

	type CVBioDetails = {
		name: string;
		email: string;
		phone_number: string;
		address: string;
	};

	type CVResume = {
		bio: CVBioDetails;
		education: CVEducation[];
		experiences: CVExperience[];
		skills: CVSkill[];
	};
	type CVActions =
		| "ADD_EXP"
		| "CHANGE_EXP"
		| "DELETE_EXP"
		| "ADD_SKILL"
		| "DELETE_SKILL"
		| "CHANGE_SKILL"
		| "CHANGE_BIO";
	type CVDispatchAction = {
		type: CVActions;
		payload: unknown;
	};
}
