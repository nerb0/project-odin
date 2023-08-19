import { useEffect, useState } from "react";
import NavSection from "./NavSection";
import { getPlatforms } from "../../../util";
import NavLink from "../NavLink";

export default function NavPlatformList() {
	const [isLoading, setLoading] = useState(true);
	const [platforms, setPlatforms] = useState<RawgPlatformResponse | null>(null);

	useEffect(() => {
		async function fetchData() {
			caches.open("misc").then(async function (cache) {
				const response = await cache.match(
					"https://api.rawg.io/api/platforms/parents"
				);
				if (response) {
					const result = await response.json();
					setPlatforms(result);
				} else {
					try {
						const result = await getPlatforms();
						cache.put("https://api.rawg.io/api/platforms/parents", result);
						if (result.ok) {
							const platformFetch = await result.json();
							setPlatforms(platformFetch);
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
		<NavSection title="Platforms">
			{isLoading ? (
				<div>Loading...</div>
			) : platforms ? (
				platforms.results.map((platform) => (
					<NavLink href={`#${platform.slug}`}>{platform.name}</NavLink>
				))
			) : (
				<div>No Platforms Found</div>
			)}
		</NavSection>
	);
}
