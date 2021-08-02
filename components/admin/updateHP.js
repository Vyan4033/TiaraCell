//@ts-check

import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";

const UpdateHP = () => {
    const [_id, setId] = useState('');
    const [_namahp, setNamahp] = useState('');
    const [_hargahp, setHargahp] = useState('');

    const router = useRouter()
    const {id, namahp, hargahp} = router.query

    useEffect(() => {
        if(typeof id == 'string'){
            setId(id)
        }
        if(typeof namahp == 'string'){
            setNamahp(namahp)
        }
        if(typeof hargahp == 'string'){
            setHargahp(hargahp)
        }
    },[id, namahp, hargahp, id])

    const submitHandler = async (e) =>{
        e.preventDefault()
        try {
            const res = await fetch('/api/Update-HP', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    namahp: _namahp,
                    hargahp: _hargahp,
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/Data-HP')

        } catch (e) {
            throw Error(e.message)

        }
    }
    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h2 className="text-center">Update Type Handphone</h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "id"
                            type = "text"
                            placeholder = "ID"
                            value = {_id}
                            onChange = {(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "nama"
                            type = "text"
                            placeholder = "Type Hanphone"
                            value = {_namahp}
                            onChange = {(e) => setNamahp(e.target.value)}
                        />
                        <label htmlFor="nama">Type Handphone</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "harga"
                            type = "text"
                            placeholder = "Harga Handphone"
                            value = {_hargahp}
                            onChange = {(e) => setHargahp(e.target.value)}
                        />
                        <label htmlFor="harga">Harga Handphone</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Update Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateHP
 
