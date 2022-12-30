const express = require('express')
const tasksModel = require("../models/tasks")
const tasksRoute = express.Router()

tasksRoute.get("/", async (req, res)=>{
    const data = await tasksModel.findAll();

    res.json({status: 200, data: data});
})

tasksRoute.post("/create", async (req, res)=>{
    const data = await tasksModel.create(req.body);

    res.json({ status: 200, data});
})


tasksRoute.get("/:id", async (req, res) => {
    const data = await tasksModel.findOne({
      where: {
        id: req.params.id
      }
    })
  
    res.json({ status: 200, data })
  })
  
  tasksRoute.put("/:id", async (req, res) => {
    const data = await tasksModel.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data });
  })
  
  tasksRoute.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
  
    tasksModel.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json({ status: 200, data });
    });
  })



module.exports = tasksRoute