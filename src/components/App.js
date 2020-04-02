import React, { Component } from 'react';

    //Saya meng-import komponen home disini
    import Home from './Home/Home.js';
    import './App.css';
    import Header from '../shared/components/layout/Header';
    import Footer from '../shared/components/layout/Footer';
    import Content from '../shared/components/layout/Content';

    class App extends Component {
      render() {
        return (
          <div className="App">
            <Header title="Selamat datang di Firman Mardiyanto Blog" />

            {/* Dibawah sini saya meletakan komponen Home */}
            <Content>
            <Home />
            </Content>
            <Footer />
          </div>
        );
      }
    }

    export default App;