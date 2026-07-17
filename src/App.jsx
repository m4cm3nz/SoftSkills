import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Content from './components/Content';
import Meaning from './components/Meaning';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main className="app-content">
                <Intro />
                <Meaning />
                <Content />
                <Footer />
            </main>
        </>
    );
}

export default App;
