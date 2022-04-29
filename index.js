const express = require("express")
const path = require("path");
const app = express()

// app.get("/", function (req, res) {
//     res.send("ok")
// })

app.listen(process.env.PORT || 5000)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../CSS')))


app.use(express.static("dist"))
app.get('/', (req, res) => res.sendFile('dist/main.html', { root: __dirname }));
app.get('/', (req, res) => res.sendFile('CSS/main.css', { root: __dirname }));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../dist/main.html'))
// })
