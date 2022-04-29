const express = require("express")
const path = require("path");
const app = express()

app.get("/", function (req, res) {
    res.send("ok")
})

app.listen(process.env.PORT || 5000)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../dist')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/main.html'))
})
