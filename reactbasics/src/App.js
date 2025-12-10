
function App() {
  const name="React";
  const namechange=()=>{
    const names=["Earn","Give","Grow"]
  const number=Math.floor(Math.random()*3)
  return names[number];
  }
  return (
    <div className="App">
      <h1>{name} Basics</h1>
      <h1>Let's {namechange()} money</h1>
      
    </div>
  );
}

export default App;
