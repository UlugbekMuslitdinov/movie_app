import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt=""/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodILike = [
  {
    'id': 1,
    'name': 'Borsche',
    'image': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fprimebeef.ru%2Fimages%2Fcms%2Fdata%2F3-501.jpg&f=1&nofb=1',
    'rating': 4.5,
  },
  {
    'id': 2,
    'name': 'Shaurma',
    'image': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fprimebeef.ru%2Fimages%2Fcms%2Fdata%2F3-501.jpg&f=1&nofb=1',
    'rating': 4.6,
  },
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
