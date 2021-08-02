//@ts-check

import { useState } from "react";
import Link from 'next/link'
const CreateMerk = () => {

    const [id, setId] = useState('');
    const [namahp, setNamahp] = useState('');
    const [hargahp, setHargahp] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/Create-HP", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    namahp,
                    hargahp,
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h2 className="text-center">Tambah Data Handphone</h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "id"
                            type = "text"
                            placeholder = "ID"
                            value = {id}
                            onChange = {(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "namahp"
                            type = "text"
                            placeholder = "Nama Handphone"
                            value = {namahp}
                            onChange = {(e) => setNamahp(e.target.value)}
                        />
                        <label htmlFor="nama">Nama Handphone</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "hargahp"
                            type = "text"
                            placeholder = "Harga"
                            value = {hargahp}
                            onChange = {(e) => setHargahp(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Tambah
                        </button>
                        <Link href="/admin/Data-HP">
                            <a className="btn btn-primary">Kembali</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMerk;
