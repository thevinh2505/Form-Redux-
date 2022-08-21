import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFillterAction, searchFilterAction, statusFilterAction } from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
	// dispatch
	const dispatch = useDispatch();
	// STATE
	const [searchText, setSearchText] = useState("");

	const [status, setStatus] = useState("All");

	const [priority,setPriority]=useState([])

	const handleSearch = (e) => {
		setSearchText(e.target.value);
		dispatch(searchFilterAction(e.target.value));
	};

	const handleSelectStatus = (e) => {
		console.log(e.target.value);
		setStatus(e.target.value);
		dispatch(statusFilterAction(e.target.value));
	};

	const handlePriority=(value)=>{
		setPriority(value);
		dispatch(priorityFillterAction(value))
	}
	return (
		<Row justify="center">
			<Col span={24}>
				<Typography.Paragraph
					style={{
						fontWeight: "bold",
						marginBottom: 3,
						marginTop: 10,
					}}
				>
					Search
				</Typography.Paragraph>
				<Search
					placeholder="input search text"
					value={searchText}
					onChange={handleSearch}
				/>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph
					style={{
						fontWeight: "bold",
						marginBottom: 3,
						marginTop: 10,
					}}
				>
					Filter By Status
				</Typography.Paragraph>
				<Radio.Group onChange={handleSelectStatus} value={status}>
					<Radio value="All">All</Radio>
					<Radio value="Completed">Completed</Radio>
					<Radio value="Todo">To do</Radio>
				</Radio.Group>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph
					style={{
						fontWeight: "bold",
						marginBottom: 3,
						marginTop: 10,
					}}
				>
					Filter By Priority
				</Typography.Paragraph>

				<Select
					mode="multiple"
					allowClear
					placeholder="Please select"
					style={{ width: "100%" }}
					onChange={handlePriority}
					value={priority}
				>
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
			</Col>
		</Row>
	);
}
