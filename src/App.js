import "./App.css";
import BodyComponent from "./Components/body";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Content />
      <div className="wrapper">
        <Sidenav />
        <BodyComponent />
      </div>
    </div>
  );
}

export default App;
