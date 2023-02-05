const express = require("express")
const RoleModel = require("../modals/roleModel")

const addRole = async (req, res) => {

  try {
    const newrole = await RoleModel.create({
      role_id: req.body.role_id,
      role_name: req.body.role_name,
      description: req.body.description
    })
    res.status(200).json(newrole)

  } catch (error) {
    res.status(401).json(error)
  }

}


const getAllRole = async (req, res) => {
  try {
    const getroles = await RoleModel.find()
    res.status(201).json({ getroles })
  } catch (error) {
    res.status(401).json(error)
  }
}

module.exports = { addRole, getAllRole }