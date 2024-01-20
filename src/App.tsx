import "./App.css";

function App() {
  const name = "Shadman Shakib Alvi";
  const nameArr = name.split("");

  return (
    <div className="main">
      {/* <div className="box-1"></div> */}
      {/* <div className="box-2"></div> */}
      {/* <button className="btn">Hover Me</button> */}
      {/* <div className="loading">
        <div className="glass"></div>
        <div className="box"></div>
      </div> */}
      {/* <div className="card">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod iusto doloremque exercitationem quam, reiciendis vel vero. Veritatis dolorum eaque, rerum exercitationem voluptatum vitae aspernatur, commodi eos nemo suscipit cupiditate!</p>
      </div> */}

      <div className="container">
        {nameArr.map((item, i) => (
          <span className="alphabet" style={{ transitionDelay: `${i * 30}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
