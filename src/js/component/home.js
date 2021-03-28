import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div className="container text-center mt-5">
			<h1>ejemplos Props</h1>
			<Card title={"REACT"} body={"ejemplos usando React Hooks"} />
			<Card
				title={"Javascript"}
				body={"otro ejercicio usando React Hooks"}
			/>
			<Card title={"Cecilio"} body={"otro ejercicio usando a Javier"} />
		</div>
	);
}
