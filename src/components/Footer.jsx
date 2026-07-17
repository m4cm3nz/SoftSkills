import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p><strong>BONUS</strong></p>
            <p><a href="https://open.spotify.com/playlist/0DiWavqHARAsZ2xRYIuxDe?si=xgupcv-MSTGiSSh1XycE3g" target="_blank" rel="noopener noreferrer">My soft skills Spotify playlist</a></p>
            <br />
            <p><strong>Who am I?</strong></p>
            <p>Software developer. I believe adaptability beats any framework &mdash; this page is my case for it.</p>
            <br />
            <p>Rafael Mac Menz</p>
            <p>
                <a href="https://github.com/m4cm3nz" target="_blank" rel="noopener noreferrer">GitHub</a>
                {' · '}
                <a href="https://www.linkedin.com/in/m4cm3nz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {' · '}
                <a href="https://twitter.com/m4cm3nz" target="_blank" rel="noopener noreferrer">Twitter</a>
                {' · '}
                <a href="https://buymeacoffee.com/rmcmenzc" target="_blank" rel="noopener noreferrer">&#9749; Buy me a coffee</a>
            </p>
        </footer>
    );
}

export default Footer;
