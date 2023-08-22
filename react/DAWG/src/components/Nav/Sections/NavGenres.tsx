import { useEffect, useState } from "react";
import NavSection from "./NavSection";
import { getGenres, getPlatforms } from "../../../util";
import NavLink from "../NavLink";

export default function NavGenreList() {
	const [isLoading, setLoading] = useState(true);
	const [genres, setGenres] = useState<RawgGenreResponse | null>(null);

	useEffect(() => {
		async function fetchData() {
			caches.open("misc").then(async function (cache) {
				const response = await cache.match("https://api.rawg.io/api/genres");
				if (response) {
					const result = await response.json();
					setGenres(result);
				} else {
					try {
						const result = await getGenres();
						cache.put("https://api.rawg.io/api/genres", result);
						if (result.ok) {
							const genresFetch = await result.json();
							setGenres(genresFetch);
						}
					} catch (err) {
						console.error(err);
					}
				}
				setLoading(false);
			});
		}
		fetchData();
	}, []);

	return (
		<NavSection title="Genres">
			{isLoading ? (
				<div>Loading...</div>
			) : genres ? (
				genres.results.map((genre) => (
					<NavLink key={genre.id} href={`/genre/${genre.slug}`}>
						{genre.name}
					</NavLink>
				))
			) : (
				<div>No Genres Found</div>
			)}
		</NavSection>
	);
}
