import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
	addTechToFavouriteList,
	removeTechFromFavouriteList,
} from "../../redux/tech/actions";

const ItemPage = () => {
	const [oneTech, setOneTech] = useState();
	const { id } = useParams();
	const dispatch = useDispatch();
	const techList = useSelector((state) => state.tech.tech);

	useEffect(() => {
		const oneTech = techList.filter((tech) => tech.id === Number(id));
		setOneTech(oneTech[0]);
	}, [techList, id]);
	return (
		<>
			{oneTech && (
				<>
					<h1>{oneTech.title}</h1>
					<p>Цена $ {oneTech.price}</p>
					<button
						onClick={
							oneTech.favourite !== true
								? () => dispatch(addTechToFavouriteList(oneTech.id))
								: () => dispatch(removeTechFromFavouriteList(oneTech.id))
						}
					>
						{oneTech.favourite === true
							? "Удалить из избранного"
							: "В избранное"}
					</button>
				</>
			)}
		</>
	);
};
export default ItemPage;
