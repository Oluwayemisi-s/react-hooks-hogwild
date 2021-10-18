import React, {useState} from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	const [filteredPigs, setFilteredPigs] = useState("All")

	function handleChange(e){
		console.log(e.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<Filter handleChange = {handleChange}/>
			<PigContainer hogs = {hogs} />
		</div>
	);
}

export default App;
