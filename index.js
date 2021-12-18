const express = require("express"),
    cors = require("cors"),
    app = express(),
    { passwords } = require("./passwords");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    try {
        const passes = passwords(50);
        res.send({ data: passes, timestamp: Date.now().toString() });
    } catch (error) {
        res.send({ error: error });
    }
});

// port setup
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on 5000");
});