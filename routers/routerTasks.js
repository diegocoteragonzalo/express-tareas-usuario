let express = require("express")
let routerTasks = express.Router()
let tasks = require("../data/tasks")


routerTasks.get("/", (req, res) => {
	let text = req.query.text
	if(text != undefined) {
		let taskWithText = tasks.filter( task => task.text.indexOf(text) != -1)
		res.send(taskWithText)
		return
	}
	res.send(tasks)
})


routerTasks.get("/:id", (req, res) => {
	let id = req.params.id
	let task = tasks.find( (t) => t.id == id )
	
	if(task == undefined) {
		res.send("Error")
		return
	}
	res.send(task)	
})


module.exports = routerTasks