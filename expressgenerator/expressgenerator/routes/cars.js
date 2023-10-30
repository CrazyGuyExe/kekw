const express = require("express");
const router = express.Router();

/*
CRUD = 
Create  
Read 
Update 
Delete 
*/

/**
 * Get all Cars
 * URL: /cars
 * Method: GET
 */
router.get("/:id", (req, res) => {
  res.send(`Car: ${req.params.id}`);
});

/**
 * Get Car by ID
 * URL: /cars/:id
 * Method: GET
 */
router.get("/", (req, res) => {
  res.send("GET ALL CARS");
});
/**
 * Create Car
 * URL: /cars
 * Method: POST
 */
router.post("/", (req, res) => {
  res.send("Created car");
});
/**
 * Update Cars
 * URL: cars/:id
 * Method: PUT
 */
router.put("/:id", (req, res) => {
  res.send(`Updated Car: ${req.params.id}`);
});
/**
 * Patch Car - aktualizaje urcitou vlastnost/skupinu vlastnosti drogy
 * URL: /cars/:id
 * Method: PATCH
 */
router.patch("/:id", (req, res) => {
  res.send(`Patched Car: ${req.params.id}`);
});
/**
 * Delete Car
 * URL: /cars/:id
 * Method: DELETE
 */
router.delete("/:id", (req, res) => {
  res.send(`Deleted Car: ${req.params.id}`);
});

module.exports = router;
