import { useEffect, useState } from "react";
import GameGridCard from "../components/Game/GridCard";
import Navbar from "../components/Nav/Navbar";
import { formatGameList, getTrendingGameList } from "../util";
import Layout from "../components/Layout";
import GameList from "../components/Game/Gamelist";

function Home() {
	const [data, setData] = useState<RawgGameResponse | null>(null);
	const [games, setGames] = useState<RawgGame[][] | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await getTrendingGameList();
			setData(response);
			setGames(formatGameList(response.results as RawgGame[]));
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<Layout>
			<h3 className="text-4xl font-extrabold">Hot and Trending Games</h3>
			{loading && <div>Loading....</div>}
			{!loading && (
				<div className="grid grid-cols-4 gap-6 pt-5 pb-32 justify-center">
					{!games ? <div>No games found.</div> : <GameList data={games} />}
				</div>
			)}
		</Layout>
	);
}

export default Home;
