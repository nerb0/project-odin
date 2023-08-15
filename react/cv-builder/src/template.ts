import { subMonths, subYears } from "date-fns";
import uniqid from "uniqid";

export const cvTemplate: CVResume = {
	bio: {
		name: "Test Demo 123",
		email: "test@example.com",
		phone_number: "1234567890",
		address: "123 Fake Street",
	},
	education: [
		{
			id: uniqid(),
			start: subYears(new Date(), 4),
			end: "present",
			degree: "Bachelor in Test Demo",
			university: "Test University",
			address: "123 Fake Street",
			visible: true,
		},
		{
			id: uniqid(),
			start: subYears(new Date(), 8),
			end: subYears(new Date(), 4),
			degree: "Bachelor in Hidden",
			university: "Hidden University",
			address: "123 Fake Street",
			visible: false,
		},
	],
	skills: [
		{ id: uniqid(), name: "HTML" },
		{ id: uniqid(), name: "CSS" },
		{ id: uniqid(), name: "Javascript" },
		{ id: uniqid(), name: "Typescript" },
		{ id: uniqid(), name: "Node.js" },
		{ id: uniqid(), name: "React" },
		{ id: uniqid(), name: "Express" },
		{ id: uniqid(), name: "PHP" },
	],
	experiences: [
		{
			id: uniqid(),
			company: "Demo LLC",
			start: subYears(new Date(), 3),
			end: "present",
			position: "Backend Developer",
			summary: [
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
			],
			visible: true,
			address: "341 Fake Street"
		},
		{
			id: uniqid(),
			company: "Another Demo LLC",
			start: subYears(new Date(), 6),
			end: subMonths(subYears(new Date(), 3), 4),
			position: "Software Engineer",
			summary: [
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
				"Created a lorem ipsum asdasdsdfgopasdg asdifop iewr djsfpv iaop iaopri asdvapsodif sar ofsadf.",
			],
			visible: true,
			address: "341 Fake Street"
		},
	],
};
