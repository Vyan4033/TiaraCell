//@ts-check

import { db } from "../../db-lib/db"

const handler = async (req, res) => {
    const {id, namahp, hargahp} = req.body
    try{
        if(!id || !namahp || !hargahp){
            return res
            .status(400)
            .json({message : 'Isian tidak boleh kosong'})
        }
        const results = await db.query(
            `UPDATE hp set id = ?, namahp = ?, hargahp = ? WHERE id = ?`,
            [id, namahp, hargahp, id]
        )
        
        return res.json(results)
    } 
    catch (e) {
        res.status(500).json({messaage : e.message})
    }
}
export default handler;
