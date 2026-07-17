import React from 'react';
import darwin from '../assets/darwin.jpg';
import mystique from '../assets/mystique.jpg';
import helix from '../assets/helix.jpg';

const heroes = [
    { name: 'Mystique', image: mystique, wiki: 'https://en.wikipedia.org/wiki/Mystique_(comics)' },
    { name: 'Darwin', image: darwin, wiki: 'https://en.wikipedia.org/wiki/Darwin_(Marvel_Comics)' },
    { name: 'Helix', image: helix, wiki: 'https://en.wikipedia.org/wiki/Helix_(Marvel_Comics)' },
];

function Content() {
    return (
        <section className="card content">
            <blockquote>
                <p>&ldquo;It is not the strongest of the species that survives, nor the most intelligent; it is the one most adaptable to change.&rdquo;</p>
            </blockquote>
            <p>This quote is attributed to Charles Darwin. Although <a href="https://quoteinvestigator.com/2014/05/04/adapt/" target="_blank" rel="noopener noreferrer">he never said or wrote this</a>, it summarizes the central idea about the importance of adaptability for the survival of species.</p>
            <br />
            <p>And if it works for the survival of species, it works for the business world too.</p>
            <p>Change happens frequently in business, so being able to accept it and adapt is a valuable ability.</p>
            <p>Adaptability requires a number of other soft skills. Want the business case? Read the Harvard Business Review article <a href="https://hbr.org/2011/07/adaptability-the-new-competitive-advantage" target="_blank" rel="noopener noreferrer">"Adaptability: The New Competitive Advantage"</a>.</p>
            <br />
            <p>If none of the above helped you make up your mind about my favorite soft skill, check out these superheroes with powers of adaptation (yes, one of them is literally named Darwin). Maybe you&rsquo;ll identify with one of them.</p>
            <div className="heros">
                {heroes.map(({ name, image, wiki }) => (
                    <span key={name}>
                        <a href={wiki} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt={name} />
                            {name}
                        </a>
                    </span>
                ))}
            </div>
            <br />
            <p>Still not convinced? Read about other soft skills and pick your favorite:</p>
            <p><a href="https://www.themuse.com/advice/soft-skills-definition-examples" target="_blank" rel="noopener noreferrer">themuse.com/advice/soft-skills-definition-examples</a></p>
            <p>Or discover your own soft skills by taking the test below:</p>
            <p><a href="https://jobpersonality.co.uk/soft-skills-test" target="_blank" rel="noopener noreferrer">jobpersonality.co.uk/soft-skills-test</a></p>
            <br />
            <p>But remember, if you don't have all the skills, you can always adapt yourself.</p>
        </section>
    );
}

export default Content;
