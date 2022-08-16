import { createPool } from "mysql";

const db = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_mahasiswa"
})

db.getConnection((err)=>{
    if(err) throw err;
    console.log("Database berhasil terkoneksi");
})

const executeQuery = (query,arraParams) => {
    return new Promise ((resolve,rejected)=>{
        try{
            db.query(query,arraParams,(err,data) => {
                if(err){
                    rejected(err);
                }
             resolve(data);
            });
        }catch(err) {
            rejected(err);
        }
    })
}

export {executeQuery}