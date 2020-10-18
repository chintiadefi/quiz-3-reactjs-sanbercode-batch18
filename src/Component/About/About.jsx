import React from 'react'
import {Link} from "react-router-dom";

function About() {
    return(
        <React.Fragment>
        <div style={{padding: "10px", border: "1px solid #ccc"}}>
            <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
                <li><strong style={{width: "100px"}}>Nama:</strong> Chintia Devi</li>
                <li><strong style={{width: "100px"}}>Email:</strong> chintiadevi98@gmail.com</li> 
                <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows</li>
                <li><strong style={{width: "100px"}}>Akun Gitlab:</strong> https://github.com/chintiadefi</li> 
                <li><strong style={{width: "100px"}}>Akun Telegram:</strong> juniordevv</li> 
            </ol>
        </div>
        <br/>
        <br/>
        <Link to="/"><button>kembali ke index</button></Link>
        </React.Fragment>
    );
}

export default About