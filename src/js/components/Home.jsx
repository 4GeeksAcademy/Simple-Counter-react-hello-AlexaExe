import React from "react";

//include images into your bundle
import  {Panel} from "./Panel";

//create your first component
const Home = ({count}) => {

	return (
		
		<div id="fondo" className="row d-flex">
			<Panel className="fondoCuadro" contador = {Math.floor(count/10000)%10}/>
			<Panel contador = {Math.floor(count/1000)%10}/>
			<Panel contador = {Math.floor(count/100)%10}/>
			<Panel contador = {Math.floor(count/10)%10}/>
			<Panel contador = {Math.floor(count/1)%10}/>
			
          
		</div>
	);
};

export default Home;