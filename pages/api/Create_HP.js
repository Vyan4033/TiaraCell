//@ts-check

import {db} from '../../db-lib/db'

const handler = async(req,res) => {
    const {id, namahp, hargahp} = req.body
    try{
        if(!id || !namahp || !hargahp){
            return res
            .status(400)
            .json({message : "Input harus diisi semua"})
        }
        const results = await db.query(
            `INSERT INTO hp (id, namahp, hargahp)
            VALUES (?,?,?,?)`,
            [id, namahp, hargahp]
        )
        await db.end
        return res.json(results)
    }
    catch(e){
	res.status(500).json({message : e.message});
    }
}

export default handler