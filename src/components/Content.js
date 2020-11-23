import React from 'react';
import darwin from '../assets/darwin.jpg'
import mystique from '../assets/mystique.jpg'
import helix from '../assets/helix.jpg'

function Content() {
    return (
        <card>
            <blockquote>
                <p>&ldquo;It is not the strongest of the species that survives, nor the most intelligent; it is the one most adaptable to change.&rdquo;</p>
            </blockquote>
            <p>This quote is attributed to Charles Darwin. Although <a href="https://quoteinvestigator.com/2014/05/04/adapt/">he never said or wrote this</a>, it summarizes the central idea about the importance of adaptability for survival of species.</p>
            <br />
            <p>If it serves well for species survival, it can fit in business world.</p>
            <p>Change happens frequently in business, so being able to accept it and adapt is a valuable ability.</p>
            <p>Adaptability requires a number of other soft skills. Discover which reading the article <a href="https://www.thebalancecareers.com/important-adaptability-skills-4768260">"Important Adaptability Skills for Workplace Success"</a></p>
            <br />
            <p>if none of the above helped you make up your mind about my favorite soft skill, check out these superheroes with powers of adaptation. Maybe you&rsquo;ll identify yourself with one of them.</p>
            <div className="heros">
                <span>
                    <a href="https://en.wikipedia.org/wiki/Mystique_(comics)">
                        <img src={mystique} />
                    Mystique
                    </a>
                </span>
                <span>
                    <a href="https://en.wikipedia.org/wiki/Darwin_(Marvel_Comics)">
                        <img src={darwin} />
                        Darwin
                    </a>
                </span>
                <span>
                    <a href="https://en.wikipedia.org/wiki/Helix_(Marvel_Comics)">
                        <img src={helix} />
                        Helix
                    </a>
                </span>
            </div>
            <br />
            <p>No deal? Read more about other soft skills and choose you favorite one</p>
            <p><a href="https://blog.hubspot.com/marketing/soft-skills">https://blog.hubspot.com/marketing/soft-skills</a></p>
            <p>Or discover your soft skills taking the test below.</p>
            <p><a href="https://www.jobpersonality.co.uk/soft-skills-test">https://www.jobpersonality.co.uk/soft-skills-test</a></p>
            <br />
            <p>But remember, if you don't have all the skills, you can always adapt yourself.</p>
        </card>
    );
}

export default Content;