const initialState = {
	users: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USERS":
			return { ...state, users: action.payload };

		default:
			return state;
	}
};

export default usersReducer;