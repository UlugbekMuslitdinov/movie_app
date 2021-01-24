
function Food({name}){
  return (<h3>I love eating {name}</h3>);
}

function App() {
  return (
    <div>
      Priveе
      <Food name="Borsche" />
      <Food name="Soup" />
      <Food name="Beef" />
    </div>
  );
}

export default App;
