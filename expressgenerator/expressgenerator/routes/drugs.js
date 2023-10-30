const express = require("express");
const router = express.Router();

const drugsCotroller = require("../controllers/drugs");


/*
CRUD = 
Create  
Read 
Update 
Delete 
*/

/**
 * Get all drugs
 * URL: /drugs
 * Method: GET
 */
router.get("/:id", drugsCotroller.getDrugById );

/**
 * Get drug by ID
 * URL: /drugs/:id
 * Method: GET
 */
router.get("/", drugsCotroller.getAllDrugs);
/**
 * Create drug
 * URL: /drugs
 * Method: POST
 */
router.post("/", drugsCotroller.createDrug);
/**
 * Update drugs
 * URL: drugs/:id
 * Method: PUT
 */
router.put("/:id", drugsCotroller.putDrug);
/**
 * Patch drug - aktualizaje urcitou vlastnost/skupinu vlastnosti drogy
 * URL: /drugs/:id
 * Method: PATCH
 */
router.patch("/:id", drugsCotroller.patchDrug);
/**
 * Delete drug
 * URL: /drugs/:id
 * Method: DELETE
 */
router.delete("/:id", drugsCotroller.delDrugs);

module.exports = router;
