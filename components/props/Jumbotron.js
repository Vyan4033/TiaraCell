export default function jumbotron(props){
    return(
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">{props.judul}</h1>
                    <p className="lead fw-normal">{props.isi}</p>
                    <a className="btn btn-primary" href="../jenis.js">{props.link}</a>
                </div>
            </div>
        </div>
    )
}