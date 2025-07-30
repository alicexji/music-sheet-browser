
import '../App.css';

function About() {
  return (
    <div className="container py-5 fade-in">
      <h1 className="text-center mb-4">About Vincent's Sheet Library</h1>
      <p className="lead text-center mb-5">
        A curated digital collection of music scores, designed for cello enthusiasts.
      </p>
      <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '600px' }}>
        <li className="list-group-item">Search by title or composer</li>
        <li className="list-group-item">Preview images of each score</li>
        <li className="list-group-item">Live download tracking</li>
      </ul>
      <p className="mt-5 text-center">Thanks for visiting. Happy playing!</p>
    </div>
  );
}
export default About;