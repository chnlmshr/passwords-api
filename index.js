const http = require("http");
const { passwords } = require("./passwords");

const server = http.createServer(async function (req, res) {
    // set the request route
    if (req.url === "/" && req.method === "GET") {
        // response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        // esponse
        const passes = passwords(20);
        res.end(JSON.stringify({ data: passes, timestamp: Date.now().toString() }));
    }

    // if no route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// port setup

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Gracefully generating passwords on ${PORT}`);
});