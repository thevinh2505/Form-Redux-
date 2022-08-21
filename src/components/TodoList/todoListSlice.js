const initialState = [
	{
		id: 1,
		name: "di ia",
		completed: false,
		priority: "High",
	},
	{
		id: 2,
		name: "di i",
		completed: true,
		priority: "Medium",
	},
];

const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return [ ...state,  action.payload ];

		default:
			return state;
	}
};

export default todoListReducer;
