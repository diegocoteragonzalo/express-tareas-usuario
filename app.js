let express = require("express")
let app = express()


app.get("/", (req, res) => res.send("¡Funciona!"))


let tasks = [
	{ id:1, text:"tarea 1"},
	{ id:2, text:"tarea 2"},
	{ id:3, text:"tarea 3"}
]


let users = [
	{ id:1, email:"user1@correo.com", password:"pass1" },
	{ id:2, email:"user2@correo.com", password:"pass2" },
	{ id:3, email:"user3@correo.com", password:"pass3" }
]


app.get("/tasks", (req, res) => {
	res.send(tasks)
})


app.get("/tasks/:id", (req, res) => {
	let id = req.params.id
	let task = tasks.find( (t) => t.id == id )
	
	if(task == undefined) {
		res.send("Error")
		return
	}
	res.send(task)	
})


app.get("/users", (req, res) => {
	res.send(users)
})


app.get("/users/:id", (req, res) => {
	let id = req.params.id
	let user = users.find( (t) => t.id == id )
	
	if(user == undefined) {
		res.send("Error")
		return
	}
	res.send(user)	
})


app.listen(8081, () => {
	console.log("Server running in port 8081")
})
