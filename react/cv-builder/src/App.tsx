import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import { CVContext } from "./contexts/CVContext";
import { cvTemplate } from "./template";

function App() {
	const [cvInfo, setCVInfo] = useState<CVResume>(cvTemplate);
	return (
		<CVContext.Provider value={{ info: cvInfo, cvHandler: setCVInfo }}>
			<div className="grid grid-cols-[4fr_5fr] h-screen min-h-[800px]">
				<Form />
				<Resume />
			</div>
		</CVContext.Provider>
	);
}

export default App;
