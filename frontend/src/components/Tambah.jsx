import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Tambah = () => {
    const [nama_mahasiswa,setNama] = useState("");
    const [nim,setNim] = useState("");
    const [kelas,setKelas] = useState("");
    const navigate = useNavigate()

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setInputs(values=>({...values,[name]:value}))

    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/mahasiswa',{
                nama_mahasiswa,
                nim,
                kelas
        })
            navigate("/mahasiswa")
        }catch(err) {
            console.log(err)
        }
       
    }

    return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-10">
        <h1 className="text-3xl font-semibold text-blue-500 my-9 text-center">Tambah Mahasiswa</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
                <label for="nama" className="form-label inline-block mb-2 text-gray-700">Nama</label>
                <input type="text" className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nama_mahasiswa" name="nama_mahasiswa"
                placeholder="Masukkan nama..." value={nama_mahasiswa} onChange={(e)=>setNama(e.target.value)}/>
            </div>
            <div className="form-group mb-6">
            <label for="nim" className="form-label inline-block mb-2 text-gray-700">NIM</label>
            <input type="number" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nim" name="nim" value={nim} onChange={(e)=>setNim(e.target.value)}
                />
            </div>
           <div className="form-group mb-6">
                <label for="kelas" className="form-label inline-block mb-2 text-gray-700">Kelas</label>
                <div class="flex flex-col justify-start">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="kelas" id="kelasA" value="A"
                       onChange={(e)=>setKelas(e.target.value)} />
                        <label class="form-check-label inline-block text-gray-800" for="kelasA">A</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="kelas" id="kelasB" value="B"
                        onChange={(e)=>setKelas(e.target.value)} />
                        <label class="form-check-label inline-block text-gray-800" for="kelasB">B</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="kelas" id="kelasC" value="C" onChange={(e)=>setKelas(e.target.value)} />
                        <label class="form-check-label inline-block text-gray-800" for="kelasC">C</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="
            w-full 
            block
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Submit</button>
        </form>
    </div>

    )
}

export default Tambah;