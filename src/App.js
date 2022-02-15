import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./data";

function App() {
  const travelDatas = Data.map((data) => {
    return (<Card 
      id = {data.id}
      item ={data}
    />)
  })
  return (
    <div className="App">
      <Header />
      <>
      {travelDatas}
      </>
    </div>
  );
}

export default App;
