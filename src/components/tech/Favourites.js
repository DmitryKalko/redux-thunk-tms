import { useDispatch, useSelector } from "react-redux";
import { removeTechFromFavouriteList } from "../../redux/tech/actions";

import FavouriteItem from "./FavouriteItem";


const Favourites = () => {
	const techList = useSelector((state) => state.tech.tech);
	const dispath = useDispatch();

	const favouritesTech = techList.filter((tech) => tech.favourite === true);

	const handleClick = (id) => {
		dispath(removeTechFromFavouriteList(id));
	};

	const oneFavTech = favouritesTech.map((tech) => {
		return <FavouriteItem key={tech.id} {...tech} onClick={handleClick} />;
	});
	return (
			<table style={{ border: "solid", borderCollapse: "collapse" }}>
				<thead>
					<tr>
						<td style={{ border: "solid", textAlign: "center" }}>
							Наименование
						</td>
						<td style={{ border: "solid", textAlign: "center" }}>Цена</td>
						<td style={{ border: "solid", textAlign: "center" }}>★</td>
					</tr>
				</thead>
				<tbody>{oneFavTech}</tbody>
			</table>
	);
};
export default Favourites;
