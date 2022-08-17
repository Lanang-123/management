import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

// `

const Mahasiswa = () => {
    const [mahasiswa,setMahasiswa] = useState([]);
    const [aksi,setAksi] = useState({
        tambah:false,
        edit:false
    })

    useEffect(()=>{
        getAllMahasiswa();
    },[])

    const getAllMahasiswa = async () => {
        const response = await axios.get("http://localhost:8000/mahasiswa")
        const dataMhs = response.data;
        setMahasiswa(dataMhs)
    }

    const deleteMhs = async(nim) => {
        try {
            await axios.delete(`http://localhost:8000/mahasiswa/${nim}`)
            getAllMahasiswa();
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="container mx-auto">
       <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">

                <div className="overflow-hidden">
                    <Link to={'/tambahmahasiswa'}>
                    <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out my-5">Tambah
                    </button>
                    </Link>
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-800">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                No
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Nama 
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                NIM
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Kelas
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Handle
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map((data,i)=>(
                            <tr className="bg-white border-b" key={data.id_mahasiswa}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap ">
                                    {data.nama_mahasiswa}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                    {data.nim}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                    {data.kelas}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap flex gap-3 justify-center">
                                    <Link to={`/edit/${data.id_mahasiswa}/${data.nim}`}>
                                        <button type="button" class="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Edit</button>
                                    </Link>
                                    <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={()=>deleteMhs(data.nim)}>Hapus</button>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mahasiswa