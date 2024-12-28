const express = require("express");
const app = express();
app.use(express.json());
let hostname = "localhost";
let port = 3000;
app.use(express.static("public"));

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, `public/index.html`));
});


