import { executeQuery } from "../config/database.js";

const getAllMahasiswa = (req,res) => {
    let sql = "SELECT * FROM tb_mahasiswa";
    executeQuery(sql,[])
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(404).json(err))
}
const getMahasiswaByNim = (req,res) => {
    const {nim} = req.params
    let sql = "SELECT * FROM tb_mahasiswa WHERE nim = ?";
    
    executeQuery(sql,[nim])
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(404).json(err))
}

const insertMahasiswa = (req,res) => {
    const {nama_mahasiswa,nim,kelas} = req.body;
    let insert = "INSERT INTO tb_mahasiswa (nama_mahasiswa,nim,kelas) VALUES(?,?,?)";

    executeQuery(insert,[nama_mahasiswa,nim,kelas])
        .then(()=>res.status(201).json({"message":"Data berhasil ditambahkan"}))
        .catch((err)=>res.status(400).json(err))
}

const updateMahasiswa = async (req,res) => {
    const {id} = req.params;
    const {nama_mahasiswa,nim,kelas} = req.body;
    let update = "UPDATE tb_mahasiswa SET nama_mahasiswa = ?,nim = ? ,kelas = ? WHERE id_mahasiswa = ?"

    let selectid = "SELECT * FROM tb_mahasiswa WHERE id_mahasiswa = ?";

    try{
        let dataId = await executeQuery(selectid,[id]);
        if(dataId.length > 0) {
            dataId = await executeQuery(update,[nama_mahasiswa,nim,kelas,id])
            res.status(200).json({"message":"Data berhasil diupdate"})
        }else {
            res.status(400).json("Data not found")
        }
    }catch(err) {
        res.statu(400).json(err)
    }
}

const deleteMahasiswa = (req,res) => {
    const {nim} = req.params
    let sql = "DELETE FROM tb_mahasiswa WHERE nim = ?";
    
    executeQuery(sql,[nim])
        .then(()=>res.status(200).json({"message":"Data berhasil dihapus"}))
        .catch((err)=>res.status(400).json(err))
}


export {getAllMahasiswa,getMahasiswaByNim,insertMahasiswa,updateMahasiswa,deleteMahasiswa}