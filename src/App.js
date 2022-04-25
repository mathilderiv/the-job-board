import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />

        <div className="Title">
          <Title h1={"The Job Board"} />
        </div>
      </div>
      <div className="Container">
        <div className="Jobs">
          <Jobs
            color="red-border"
            title={"Full Time Sales Associate - Sydney"}
            contractType={"CDI"}
            country={"Australie"}
            city={"Sydney"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="green-border"
            title={"Agent de sécurité - Pantin"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="yellow-border"
            title={"Responsable d'Atelier (H/F)"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="lightblue-border"
            title={"Chef de Projets"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="lightpink-border"
            title={"Développeur React.js"}
            contractType={"CDI"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="red-border"
            title={"Sales Associate Stockholm"}
            contractType={"CDI"}
            country={"Suède"}
            city={"Stockholm"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="green-border"
            title={"Vendeur/se - Crans Montana"}
            contractType={"CDI"}
            country={"suisse"}
            city={"Crans-Montana"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="yellow-border"
            title={"CRM & Data Quality Analyst"}
            contractType={"CDI"}
            country={"USA"}
            city={"New-York"}
          />
        </div>

        <div className="Jobs">
          <Jobs
            color="lightblue-border"
            title={"Infirmier"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>
      </div>

      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Mathilde RIVERA</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
