import mac from "../../assets/mac.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projectspage">
      <div className="flip-card">
        <img src={mac} alt="Projet1" className="ordinateur" />
        <div className="cardbody">
          <p>Title : Tattoo Shop</p>
          <p>Date : Septembre 2022</p>
          <p>Langages : HTML, CSS, Javascript</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
      <div className="flip-card">
        <img src={mac} alt="Projet2" className="ordinateur" />
        <div className="cardbody">
          <p>Title : Rent A Planet</p>
          <p>Date : Décembre 2022</p>
          <p>Langages : REACT, EXPRESS, NODE.JS</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
      <div className="flip-card">
        <img src={mac} alt="Projet3" className="ordinateur" />
        <div className="cardbody">
          <p>Title : Ligne Bleue - La Poste</p>
          <p>Date : Février 2023</p>
          <p>Langages : REACT, EXPRESS, NODE.JS</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
      <div className="flip-card">
        <img src={mac} alt="Projet4" className="ordinateur" />
        <div className="cardbody">
          <p>Title : Hackaton 1</p>
          <p>Date : Novembre 2022</p>
          <p>Langages : REACT, EXPRESS, NODE.JS</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
      <div className="flip-card">
        <img src={mac} alt="Projet5" className="ordinateur" />
        <div className="cardbody">
          <p>Title : Hackaton 2</p>
          <p>Date : Janvier 2022</p>
          <p>Langages : REACT, EXPRESS, NODE.JS</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
      <div className="flip-card">
        <img src={mac} alt="Projet6" className="ordinateur" />
        <div className="cardbody">
          <p>Title : PortFolio</p>
          <p>Date : Février 2023</p>
          <p>Langages : CSS, REACT</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="cardfooter">
          <button type="button">Show Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
