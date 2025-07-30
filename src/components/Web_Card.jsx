import '../css/Web_Card.css';


const Web_Card = () => {
    return (
        <section>
        <input className="sr-only" id="card-1" type="radio" name="panel" defaultChecked />
        <input className="sr-only" id="card-2" type="radio" name="panel" />
        <input className="sr-only" id="card-3" type="radio" name="panel" />

        <article id="article-1">
            <header>
            <h2>Every Note Tells A Story</h2>
            <label htmlFor="card-2">&#10539;</label>
            </header>
            <div>
            <img src="/music1.png" alt="watch tower" />
            <div className="poem">
                <p>
                Traditional Music carries the soul of cultures across generations.<br />
                Our platform bridges the gap between oral tradition and digital<br />
                preservation, ensuring these precious melodies continue<br />
                to inspire future musicians.
                </p>
                
            </div>
            </div>
        </article>

        <article id="article-2">
            <header>
            <h2>Why We Exist</h2>
            <label htmlFor="card-3">&#10539;</label>
            </header>
            <div>
            <img src="/music2.png" alt="forest mist" />
            <div className="poem">
                <p>
                Passed down through generations by voice and memory, precious  <br/> melodies risk
                being lost forever as communities disperse and oral <br /> 
                traditions fade. 
                
                </p>
                <p>
                Our platform serves as a digital sanctuary where these musical<br/>
                treasures can be preserved, shared, and celebrated. We believe that<br/>
                every traditional song, every ancient rhythm, and every cultural melody <br/>
                deserves to be heard by future generations.
                </p>
               
            </div>
            </div>
        </article>

        <article id="article-3">
            <header>
            <h2>Founder's Story</h2>
            <label htmlFor="card-1">&#10539;</label>
            </header>
            <div>
            <img src="/music3.png" alt="computer" />
            <div className="poem">
                <p>
                As a first-generation musician whose grandmother's lullabies were never <br/>
                written down, I understand the pain of losing musical heritage. <br/>
                
                </p>
                <p>
                This platform was born from a simple yet powerful realization: we have <br/>
                the technology to ensure no traditional song is ever truly lost again.
                </p>
                
            </div>
            </div>
        </article>
        </section>

    );
};

export default Web_Card;