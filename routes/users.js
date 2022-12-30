const express = require('express')
const userModel = require("../models/users")
const userRoute = express.Router()

userRoute.get("/", async (req, res)=>{
    const data = await userModel.findAll();

    res.json({status: 200, data: data});
})

userRoute.post("/create", async (req, res)=>{
    const data = await userModel.create(req.body);

    res.json({ status: 200, data});
})


userRoute.get("/:id", async (req, res) => {
    const data = await userModel.findOne({
      where: {
        id: req.params.id
      }
    })
  
    res.json({ status: 200, data })
  })
  
  userRoute.put("/:id", async (req, res) => {
    const data = await userModel.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data });
  })
  
  userRoute.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
  
    userModel.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json({ status: 200, data });
    });
  })



module.exports = userRoute