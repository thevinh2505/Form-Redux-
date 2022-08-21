export const addTodoAction = (todo) => {
	return { type: "todoList/addTodo", payload: todo };
};

export const searchFilterAction=(data)=>{
	return{
		type:"filters/searchFilter",
		payload:data,
	}
}

export const statusFilterAction=(data)=>{
	return{
		type:"filters/statusFilter",
		payload:data
	}
}

export const priorityFillterAction=(array)=>{
	return{
		type:"filters/priorityFilter",
		payload:array,
	}
}