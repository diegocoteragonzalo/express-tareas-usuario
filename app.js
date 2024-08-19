let express = require("express")
let app = express()


let tasks = require("./data/tasks")
let users = require("./data/users")


let routerTasks = require("./routers/routerTasks")
let routerUsers = require("./routers/routerUsers")

app.use("/tasks", routerTasks)

app.use("/users", routerUsers)

app.get("/", (req, res) => res.send("¡Funciona!"))


app.listen(8081, () => {
	console.log("Server running in port 8081")
})
