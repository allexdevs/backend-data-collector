var app = require("./app");
var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

app.listen(port);