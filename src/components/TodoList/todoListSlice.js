const initialState = [
	{
		id: 1,
		name: "Learn Javascript",
		completed: false,
		priority: "High",
	},
	{
		id: 2,
		name: "Learn React",
		completed: true,
		priority: "Medium",
	},
];

const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return [...state, action.payload];

		case "todoList/toggleTodoStatus":
			return state.map((item) => {
				return item.id === action.payload
					? { ...item, completed: !item.completed }
					: item;
			});
			
		default:
			return state;
	}
};

export default todoListReducer;
