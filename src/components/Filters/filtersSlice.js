const initialState = {
	search: "",
	status: "All",
	priority: [],
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "filters/searchFilter":
			return {
				...state,
				search: action.payload,
			};
		case "filters/statusFilter":
			return {
				...state,
				status: action.payload,
			};

		case "filters/priorityFilter":
			return {
				...state,
				priority: action.payload,
			};
		default:
			return state;
	}
};

export default filtersReducer;
