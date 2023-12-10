const express = require("express");

const cors = require("cors");
const { Data } = require("./data");
const {route} = require("./Route")
const app = express();

app.use(express.json());
app.use(cors({
  origin:"*"
}));

app.use("/dataapi",route)

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject()
  delete result.password
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await user.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user" });
    }
  } else {
    res.send({ result: "No user" });
  }
});

app.get("/all",(req, res)=>{
  res.send(Data)
  console.log(Data);
})

app.listen(4099, () => {
  console.log("Server Starting..");
});