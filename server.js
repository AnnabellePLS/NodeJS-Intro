const express = require("express");
const app = express();
const PORT = 3001;

const indexRouter = require('./routes/index'); 

app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`Test server runnin on port ${PORT}`);
});
console.log('test');