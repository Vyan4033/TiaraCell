//@ts-check

import { useDataHP } from "../../db-lib/swr-fetch";
import Link from 'next/link'
import { mutate } from "swr";
import  Router from "next/router";

const DataHP = () => {
    const {data, error} = useDataHP();
    
    if(error) {
        return <div>Error Loading</div>
    }
    if(!data) {
        return <div>Loading</div>
    }
    console.log(data)
    async function HapusDataHP(id){
        let res = await fetch(`/api/Delete-HP?id=${id}`,{ method : 'DELETE'})
        let json = await res.json()
        if(!res.ok) throw Error(json.message)
        mutate('/api/Delete-HP')
        alert('Data berhasil dihapus')
        Router.push('/admin/Data-HP')
        
    }
    return (
        <div className="container w-75 mx-auto py-4">
            <h3 className="font-bold text-center">Data Paket</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Type Handphone</th>
                        <th className="text-center">Harga Handphone</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((cell, idx) => (
                            <tr key={idx}>
                                <td className="text-center">
                                    {cell.id}
                                </td>
                                <td className="text-center">
                                    {cell.namahp}
                                </td>
                                <td className="text-center">
                                    {cell.hargahp}
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/admin/Update-HP?
                                        &id=${cell.id}
                                        &namahp=${cell.namahp}
                                        &hargahp=${cell.hargahp}`}
                                        >
                                            <button className = "btn btn-primary">Edit</button>
                                        </Link>
                                        <button
                                            className = "btn btn-danger"
                                            value={cell.id}
                                            onClick={(e) => HapusDataHP(e.target.value)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center">
                <Link href="/admin/Create-HP">
                    <a className="btn btn-primary">Tambah Data</a>
                </Link>
            </div>
        </div>
    )
}

export default DataHP
