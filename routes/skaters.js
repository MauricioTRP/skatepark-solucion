import { Router } from "express";
import { createSkater, deleteStaker, getSkaters, updateSkater } from "../models/skaters.js";
import * as db from "../db/db.js"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const result = await getSkaters()

    res.json({
      skaters: result.rows
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
})

router.post("/", async (req, res) => {
  try {
    const data = req.body
    
    // Agregar photo
    const result = await createSkater(data)

    res.json({
      message: 'Success',
      skater: result.rows[0]
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    })
    console.error(error)
  }
})

router.put("/", async (req, res) => {
  try {
    const result = await updateSkater(data)

    res.json({
      message: 'Updated skater',
      skater: result.rows[0]
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    })
    console.error(error)
  }
})

router.delete("/", async (req, res) => {
  try {
    const data = req.query
    const result = await deleteStaker(data)

    res.json({
      message: `Deleted user with mail ${email}`
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    })
    console.error(error)
  }
})

export { router }