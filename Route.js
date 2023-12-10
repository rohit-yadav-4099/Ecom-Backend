const route = require("express").Router();

const {data} = require("./data")

route.get("/all",data)

module.exports={route}