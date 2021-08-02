import Link from 'next/link'
export default function homePage(){
    return(
        <div>
            <header className="blog-header py-3 bg-warning">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-15 text-center pt-1">
                            <h2 className="blog-header-logo text-dark">Tiara Cell</h2>
                    </div>
                </div>
            </header>
            <div className="nav-scroller py-1 mb-2 bg-dark">
                <nav className="nav d-flex justify-content-center">
                    <Link href="/"><a className="p-2 link-secondary" >Home</a></Link>
                    <Link href="/user/DataHP"><a className="p-2 link-secondary" >Type Hp</a></Link>
                    <Link href="/user/pemesananhp"><a className="p-2 link-secondary" >Pemesanan</a></Link>
                    <Link href="/admin/Data-HP"><a className="p-2 link-secondary" >Admin</a></Link>

                </nav>
            </div>
        </div>
    )
}
