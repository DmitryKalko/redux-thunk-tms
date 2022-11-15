import axios from "axios";
import { addUsers } from "../redux/users/actions";

export const fetchUsers = () => {  // по сути эта функция это асинхронный action
	// это функция которая возвращает функцию, которая параметром принимает dispatch
	return function (dispatch) {
		axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
			const users = response.data;
      dispatch(addUsers(users));
			// воспользуемся диспатчем который пришел сюда как параметр
			// диспатчим action creater который возвращает action добавления юзеров
		});
	};
};
