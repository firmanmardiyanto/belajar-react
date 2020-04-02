import React, {Component} from 'react';

//Saya mengimport css Home.js dibawah sini
import './Home.css';

export default class Home extends Component {
    render(){
        //Style objek disini
        const buttonStyle ={
            backgroundColor: 'gray',
            border:'1px solid black'
        };
        return (
        <div className="Home">
        <h1>Hallo !!</h1>

        <p>
            Selamat datang di blogger saya, saya Firman Mardiyanto, saya mahasiswa semester noop di Politeknik TEDC Bandung. Silahkan kalau mau berkunjung ke halaman Facebook saya di <a href="http://www.facebook.com/firman.mardiyanto">sini..</a>
        </p>
        <button style={buttonStyle}>Klik Saya</button>
        </div>
        );
}
}