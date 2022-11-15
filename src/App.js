import { Route, Routes } from "react-router-dom";

import TechPage from "./components/tech/TechPage";
import FavouritePage from "./components/tech/FavouritePage";
import ItemPage from "./components/tech/ItemPage";

import Menu from "./components/header/Menu"; ///
import UsersPage from "./components/users/UsersPage"; ///

const App = () => {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<TechPage />} />
				<Route path='/favourite' element={<FavouritePage />} />
				<Route path='/tech/:id' element={<ItemPage />} />
				
				<Route path='/users' element={<UsersPage />} /> 
			</Routes>
		</>
	);
};
export default App;
