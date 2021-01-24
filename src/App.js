
function Food({name, picture}){
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture} alt=""/>
    </div>
  );
}

const foodILike = [
  {
    'name': 'Borsche',
    'image': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fprimebeef.ru%2Fimages%2Fcms%2Fdata%2F3-501.jpg&f=1&nofb=1',
  },
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
