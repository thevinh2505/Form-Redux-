import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { addTodoAction } from "../../redux/actions";
import { todoRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
	// Dispatch
	const dispatch = useDispatch();

	// STATE
	const [name, setName] = useState("");
	const [priority, setPriority] = useState("Medium");

	// SELECTORS
	const todoList = useSelector(todoRemainingSelector);

	const handleInputChange = (e) => {
		setName(e.target.value);
	};
	const handleSelectChange = (value) => {
		setPriority(value);
	};
	const handleAddTodo = () => {
		dispatch(
			addTodoAction({
				id: uuidv4(),
				name: name,
				priority: priority,
				completed: false,
			})
		);
		setName("");
		setPriority("Medium");
	};
	return (
		<Row style={{ height: "calc(100% - 40px)" }}>
			<Col
				span={24}
				style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
			>
				{/* <Todo name="Learn React" prioriry="High" />
				<Todo name="Learn Redux" prioriry="Medium" />
				<Todo name="Learn JavaScript" prioriry="Low" /> */}

				{todoList.map((todo) => {
					return (
						<Todo
							id={todo.id}
							key={todo.id}
							name={todo.name}
							prioriry={todo.priority}
							completed={todo.completed}
						/>
					);
				})}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: "flex" }} compact>
					<Input value={name} onChange={handleInputChange} />
					<Select value={priority} onChange={handleSelectChange}>
						<Select.Option value="High" label="High">
							<Tag color="red">High</Tag>
						</Select.Option>
						<Select.Option value="Medium" label="Medium">
							<Tag color="blue">Medium</Tag>
						</Select.Option>
						<Select.Option value="Low" label="Low">
							<Tag color="gray">Low</Tag>
						</Select.Option>
					</Select>
					<Button type="primary" onClick={handleAddTodo}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
