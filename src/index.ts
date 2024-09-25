import express from "express";
const PORT: number = 8080;
const app = express();

const todos = [
	{
		id: 1,
		title: "Todo 1",
		description: "This is todo 1",
		completed: false,
	},
	{
		id: 2,
		title: "Todo 2",
		description: "This is todo 2",
		completed: false,
	},
	{
		id: 3,
		title: "Todo 3",
		description: "This is todo 3",
		completed: false,
	},
	{
		id: 4,
		title: "Todo 4",
		description: "This is todo 4",
		completed: false,
	},
	{
		id: 5,
		title: "Todo 5",
		description: "This is todo 5",
		completed: false,
	},
];

app.get("/todos", (req, res) => {
	const randomTodos = [];
	for (let i = 0; i < 5; i++) {
		if (Math.random() > 0.5) {
			randomTodos.push(todos[i]);
		}
	}
	res.json({
		todos: randomTodos,
	});
});

function getRandomNumber(max: any) {
	return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
	res.json({
		network: getRandomNumber(10),
		jobs: getRandomNumber(10),
		messaging: getRandomNumber(10),
		notifications: getRandomNumber(10),
	});
});

app.listen(PORT, () => console.log(`server is runnig pn PORT ${PORT}`));
