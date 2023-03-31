import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portafolio from './Portafolio/Portafolio';
import Test from './Test';
import Inicio from './Inicio';
import Landing from './Portafolio/Landing';
import Test2 from './Test2';
import Portafolio2 from './Portafolio/Portafolio2';
import Portafolio3 from './Portafolio/Portafolio3';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  	<React.StrictMode>

		<BrowserRouter>

			<Routes>

				<Route path="/" element={<App />} /> 

				<Route path="/Test" element={<Test />} /> 

				<Route path="/Test2" element={<Test2 />} /> 

				<Route path="/Test3" element={<Portafolio2 />} /> 

				<Route path="/Test4" element={<Portafolio3 />} /> 

				<Route path="/Inicio" element={<Inicio />} /> 

				<Route path="/Landing" element={<Landing />} />

			</Routes>
			
		</BrowserRouter>

  	</React.StrictMode>,

)
