import Head from '../user/Head'

const LayoutUser = ({children}) => {
    return(
        <div>
            <Head/>
            {children}
        </div>
    )
}

export default LayoutUser