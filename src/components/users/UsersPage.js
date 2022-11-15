import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../../services/users";

const UsersPage = () => {
	const dispath = useDispatch();
	const users = useSelector((state) => state.users.users);

	useEffect(() => {
		dispath(fetchUsers());// диспатчим тот самый асинхронный action
	}, []);

	return (
		<>
			{users &&
				users.map((user) => (
					<>
						{user.name}
						<br />
					</>
				))}
		</>
	);
};
export default UsersPage;
