import React, {Component} from 'react';

//Saya mengimport css Home.js dibawah sini
import './Home.css';

export default class Home extends Component {
    constructor() {
        //Kita perlu mendefinisikan super() diawal untuk mengakses this construktor
        super();
        this.state = {
            name: 'Firman Mardiyanto',
            smt: 'NOOB '
        };
    }
    //disini kita akan merubah this.state.name setelah waktu yang kita tentukan
    componentDidMount() {
        setTimeout(() => {
            this.setState({smt: '2 (genap) '});
        }, 1000);
    }
    render() {
        // kita akan merubah nilai disini (kalau pake script ini di render nanti
        // scriptnya jalan infinityu setiap 1000ms, dan akan membuat app jadi berjalan
        // terus (dampak ke perfomance). kalau mau sekali pake componenDidMount di luar
        // render
        /*
        setTimeout(() => {
            this.setState({
                name: 'Rabella Rigustama Az Zahra' //Nanti dia merubah isi dari name setelah 1000 ms
            });
        }, 1000);
        */
        console.log('Name =', this.state.smt); //ganti gera smt-na ku name. tingali na konsol.. murudullll. wkwk
        //Style objek disini
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        };
        return (
            <div className="Home">
                <h1>Hallo !!</h1>

                <p>
                    Selamat datang di blogger saya, saya {this.state.name}, saya mahasiswa semester {this.state.smt}
                    di Politeknik TEDC Bandung. Silahkan kalau mau berkunjung ke halaman Facebook
                    saya di
                    <a href="http://www.facebook.com/firman.mardiyanto">
                        sini..</a>
                </p>
                <button style={buttonStyle}>Klik Saya</button>
            </div>
        );
    }
}