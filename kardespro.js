const randomColorRGB = require('random-color-rgb')
const express = require("express");
const app = express();

app.get("/api/rastgele/rgb", (req,res) => {
//bolede yapmak olur
//const kardes = randomColorRGB({max: 100});
//res.json(kardes);
res.json(randomColorRGB({max: 100}));

});
