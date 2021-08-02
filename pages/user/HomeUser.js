//@ts-check

import Jumbotron from "../../components/props/Jumbotron";
import Layout from "../../components/user/Layout";
export default function homeUser(){
    let jumbo = {judul : "Tiara Cell", 
                isi : "Kami adalah sebuah usaha yang membantu setiap orang yang hendak ingin membeli Handphone. Kami juga merekomendasikan beberapa handphone yang menurut kami berkualitas baik dengan harga terjangkau dan juga memiliki spesifikasi yang baik.",
                link : "Lanjutkan"}
    return(
        <div className="container">
            <Layout>
                <Jumbotron judul = {jumbo.judul} isi = {jumbo.isi} link = {jumbo.link}/>
            </Layout>
        </div>
    )
}