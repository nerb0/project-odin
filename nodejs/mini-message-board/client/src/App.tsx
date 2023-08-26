import { WithId } from "mongodb";
import { Fragment, useEffect, useRef, useState } from "react";
import { corsFetch } from "./utils";

function App() {
	const [data, setData] = useState<WithId<BoardMessage>[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const messagesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		async function getMessages() {
			setLoading(true);
			setError("");
			await new Promise((resolve) => setTimeout(resolve, 1000));
			try {
				const response = await corsFetch("messages");
				if (response.ok) {
					const body = (await response.json()) as APIResponse<
						WithId<BoardMessage>[]
					>;
					if (body.status == "ok") {
						setData(body.data);
						messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight);
					} else throw new Error(body.error);
				} else
					throw new Error(`ERROR ${response.status}: ${response.statusText}`);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		if (loading) getMessages();
	}, []);

	return (
		<div className="bg-gray-700">
			<div className="px-64 py-10 text-slate-800 h-screen min-h-[900px] min-w-screen flex">
				<div
					className="bg-slate-600 p-2 flex flex-col flex-1 rounded-md shadow-lg relative overflow-clip">
					<h1 className="font-extrabold italic text-4xl mb-4 text-white">
						Mini Message Board
					</h1>
					{loading && (
						<div className="flex-1 flex justify-center items-center">
							<span className="text-6xl font-extrabold animate-pulse text-white">
								Loading...
							</span>
						</div>
					)}
					{!loading && error && (
						<div className="flex-1 flex justify-center items-center">
							<span className="text-lg font-extrabold text-white px-4 py-1 rounded-md bg-red-700">
								{error}
							</span>
						</div>
					)}
					{!loading && !error && data && (
						<Fragment>
							<div
								className="flex flex-col flex-1 overflow-scroll gap-y-2 [scrollbar-color:white_transparent]"
								ref={messagesRef}
							>
								{data.map((board, i) => (
									<div
										className="flex flex-col rounded-md bg-slate-200 max-w-md w-fit p-2"
										key={i}
									>
										<div className="w-fit font-bold text-sm">{board.user}</div>
										<div className="w-fit">{board.message}</div>
									</div>
								))}
								{data.map((board, i) => (
									<div
										className="flex flex-col rounded-md bg-slate-200 max-w-md w-fit p-2"
										key={i}
									>
										<div className="w-fit font-bold text-sm">{board.user}</div>
										<div className="w-fit">{board.message}</div>
									</div>
								))}
							</div>
							<form
								action="http://localhost:3000/messages/new"
								method="POST"
								className="flex text-lg text-white mt-4"
							>
								<div className="flex flex-col flex-1">
									<input
										className="rounded-tl-md px-2 py-1 bg-slate-700 focus:z-50 hover:bg-slate-800/90"
										placeholder="Username"
										maxLength={50}
										type="text"
										name="username"
										required
									/>
									<input
										className="rounded-bl-md px-2 py-1 bg-slate-700 focus:z-50 hover:bg-slate-800/90"
										placeholder="Message"
										maxLength={250}
										type="text"
										name="message"
										required
									/>
								</div>
								<input type="checkbox" checked name="redirect" hidden />
								<button className="px-14 py-1 bg-slate-800 hover:bg-slate-900 text-white text-xl font-bold rounded-r-md">
									Send
								</button>
							</form>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
