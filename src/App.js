import React from 'react';
import Header from './components/Header';
import Intro from './components/intro/Intro';
import Content from './components/Content';
import Meaning from './components/meaning/Meaning';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-content">
            <Header></Header>
            <Intro></Intro>
            <Meaning></Meaning>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

export default App;