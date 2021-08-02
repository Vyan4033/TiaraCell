//@ts-check

import LayoutUser from "../../components/user/Layout";
import TypeHP from "../../components/user/TypeHP"
import { useDataHP } from "../../db-lib/swr-fetch";
const Data = () => {
    const {data, error} = useDataHP();
    if(error) {
        return <div>Error Loading</div>
    }
    if(!data) {
        return <div>Loading</div>
    }
    console.log(data)
    return(
        <div>
            <LayoutUser>
                <TypeHP data={data}/>
            </LayoutUser>
        </div>
    )
}
export default Data
 
