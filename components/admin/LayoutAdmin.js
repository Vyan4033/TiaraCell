import Side from "./SidebarAdmin";

const Layout = ({children}) => {
    return(
        <div>
            <Side>
                {children}
            </Side>
        </div>
    )
}
export default Layout