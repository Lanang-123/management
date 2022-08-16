import express from "express";
import {
    deleteMahasiswa,
    getAllMahasiswa, getMahasiswaByNim, insertMahasiswa, updateMahasiswa
} from "../controllers/MahasiswaControllers.js"



const router = express.Router();

router.get("/",getAllMahasiswa);
router.get("/:nim",getMahasiswaByNim)
router.post("/",insertMahasiswa)
router.patch("/:id",updateMahasiswa)
router.delete("/:nim",deleteMahasiswa)
export default router