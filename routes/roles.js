const express = require('express')
const rolesModel = require("../models/roles")
const rolesRoute = express.Router()

rolesRoute.get("/", async (req, res)=>{
    const data = await rolesModel.findAll();

    res.json({status: 200, data: data});
})

rolesRoute.post("/create", async (req, res)=>{
    const data = await rolesModel.create(req.body);

    res.json({ status: 200, data});
})


rolesRoute.get("/:id", async (req, res) => {
    const data = await rolesModel.findOne({
      where: {
        id: req.params.id
      }
    })
  
    res.json({ status: 200, data })
  })
  
  rolesRoute.put("/:id", async (req, res) => {
    const data = await rolesModel.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data });
  })
  
  rolesRoute.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
  
    rolesModel.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json({ status: 200, data });
    });
  })



module.exports = rolesRoute