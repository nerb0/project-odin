import { startGameSession } from "@/app/actions";
import { GameBoard } from "@/components/GameBoard";
import { Header } from "@/components/Header";
import dbConnect from "@/lib/db";
import { BoardModel } from "@/lib/models/Board";
import GameSession, { GameSessionModel } from "@/lib/models/GameSession";

export default async function BoardGame({
	params: { gameId },
}: {
	params: { gameId: string };
}) {
	await dbConnect();

	const session = await GameSession.findById(gameId, {
		"board.items.coordinates": 0,
	});
	if (!session) return <div>Unable to find game session.</div>;
	await startGameSession(session.id);

	const serverSession = session.toJSON({
		flattenMaps: true,
		flattenObjectIds: true,
	}) as GameSessionModel;

	return (
		<>
			<Header board={serverSession.board as BoardModel} />
			<main className="flex items-center justify-center">
				<GameBoard
					board={serverSession.board as BoardModel}
					session={serverSession}
				/>
			</main>
		</>
	);
}
