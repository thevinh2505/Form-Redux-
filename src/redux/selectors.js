// reselect
import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;

export const todoListSelector = (state) => state.todoList;

export const statusFilterSelector = (state) => state.filters.status;

export const priorityFilterSelector = (state) => state.filters.priority;

// export const todoListSelector = (state) => {
// 	const todoRemaining = state.todoList.filter((todo) => {
// 		return todo.name
// 			.toUpperCase()
// 			.includes(state.filters.search.toUpperCase().trim());
// 	});
// 	console.log(state.filters.search);
// 	console.log(todoRemaining);
// 	return todoRemaining;
// };

export const todoRemainingSelector = createSelector(
	//status: all completed todo
	//completed: false true
	todoListSelector,

	searchTextSelector,
	statusFilterSelector,
	priorityFilterSelector,
	(todoList, search, status, priority) => {
		return todoList.filter((todo) => {
			if (status === "All") {
				return priority.length
					? priority.includes(todo.priority)
					: todo.name
							.toUpperCase()
							.includes(search.toUpperCase().trim());
			}
			return (
				todo.name.toUpperCase().includes(search.toUpperCase().trim()) &&
				(status === "Completed" ? todo.completed : !todo.completed) && (priority.length?priority.includes(todo.priority):true)
			);
		});
	}
);
