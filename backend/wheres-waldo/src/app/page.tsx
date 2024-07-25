import dbConnect from "@/lib/db";
import Board from "@/lib/models/Board";
import { MenuBoardList, BoardModel } from "@/components/MenuBoard";
import { Header } from "@/components/Header";

export default async function Home() {
	await dbConnect();
	const server_boards = await Board.find({}, { "items.coordinates": 0 });
	const boards: BoardModel[] = server_boards.map((board) =>
		board.toJSON({ flattenMaps: true, flattenObjectIds: true }),
	);

	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-between p-24">
				<MenuBoardList boards={boards} />
			</main>
		</>
	);
}
