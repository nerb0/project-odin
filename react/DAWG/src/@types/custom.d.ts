type ESRBRating =
	| "everyone"
	| "everyone-10-plus"
	| "teen"
	| "mature"
	| "adults-only"
	| "rating-pending";

type RawgESRBRatingText =
	| "Everyone"
	| "Everyone 10+"
	| "Teen"
	| "Mature"
	| "Adults Only"
	| "Rating Pending";

type GameYears = {
	year: number;
	count: number;
	nofollow: boolean;
};

type FilterYears = {
	from: number;
	to: number;
	filter: string;
	decade: number;
	years: GameYears[];
	nofollow: boolean;
	count: number;
};

type RawgGameResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: RawgGame[];
	filters: {
		years: FilterYears[];
	};
	description: string;
	seo_title: string;
	seo_description: string;
	seo_keywords: string;
	seo_h1: string;
	noindex: false;
	nofollow: false;
	nofollow_collections: string[];
};
type RawgESRBRating = {
	id: number;
	name: RawgESRBRatingText;
	slug: ESRBRating;
};

type RawgGameScreenshot = {
	id: number;
	image: string;
};

type RawgGameTag = {
	id: number;
	name: string;
	slug: string;
	language: string;
	games_count: number;
	image_background: string;
};

type RawgGameStore = {
	id: number;
	store: {
		id: number;
		name: string;
		slug: string;
		domain: string;
		games_count: numbe;
		image_background: string;
	};
};

type RawgGameGenre = {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
};

type RawgGamePlatform = {
	id: number;
	name: string;
	slug: string;
};

type RawgGamePlatformRelease = RawgGamePlatform & {
	image: string | null;
	year_end: number | null;
	year_start: number | null;
	games_count: number;
	image_background: string;
};

type RawgGamePlatformDetail = {
	platform: RawgGamePlatformRelease;
	released_at: string | null;
	requirements_en: RawgGamePlatformRequirements | null;
	requirements_ru: RawgGamePlatformRequirements | null;
};

type RawgGameAddedStatus = {
	yet: number;
	owned: number;
	beaten: number;
	toplay: number;
	dropped: number;
	playing: number;
};

type RawgGameRating = {
	id: number;
	title: string;
	count: number;
	percent: number;
};

type RawgGameParentPlatform = {
	platform: RawgGamePlatform;
};

type RawgGame = {
	id: number;
	slug: string;
	name: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: RawgGameRating[];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: RawgGameAddedStatus;
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: null;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: RawgGamePlatformDetail[];
	parent_platforms: RawgGameParentPlatform[];
	genres: RawgGameGenre[];
	stores: RawgGameStore[];
	clip: string | null;
	tags: RawgGameTag[];
	esrb_rating: RawgESRBRating;
	short_screenshots: RawgGameScreenshot[];
};

type RawgPlatformDetail = {
	id: number;
	games_count: number;
	image: string | null;
	image_background: string;
	name: string;
	slug: string;
	year_end: number | null;
	year_start: number | null;
};

type RawgPlatform = {
	id: number;
	name: string;
	slug: string;
	platforms: RawgPlatformDetail[];
};

type RawgPlatformResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: RawgPlatform[];
};

type RawgGenreGameDetail = {
	id: number;
	slug: string;
	name: string;
	added: number;
};

type RawgGenre = {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	games: RawgGenreGameDetail[];
};

type RawgGenreResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: RawgGenre[];
};

type CartItem = {
	id: number;
	name: string;
	slug: string;
	image: string;
	quantity: number;
};
