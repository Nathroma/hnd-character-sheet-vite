import "./App.scss";
import StatBlock from "./components/mainAttribut/MainAttribute";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <div className="testBlock">
        <StatBlock statTitle="FORCE"/>
      </div>
      {/* <div className="mainAttribute">
        <MainAttribute attributeName="FOR" />
        <MainAttribute attributeName="DEX" />
        <MainAttribute attributeName="CON" />
        <MainAttribute attributeName="INT" />
        <MainAttribute attributeName="SAG" />
        <MainAttribute attributeName="CHA" />
      </div>
      <div className="secondarySkill">
        <SecondarySkill skillName="Acrobatie" attribute="DEX" />
        <SecondarySkill skillName="Athletisme" attribute="STR" />
      </div> */}
    </div>
  );
}

export default App;
