//@ts-check

import Link from 'next/link'

const DataHP = ({data}) => {
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
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link href="/pemesananhp">
                                            <button className = "btn btn-primary">Pesan</button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataHP
