import Product from './Product';

const App = () => (
  <>
    <Product
      image="https://upload2.bikepointsc.com.br/g/g46072_1.jpg"
      title="Bicycle"
      description="A red new bicycle"
      price="$300"
      contact="arthurborges.dev@gmail.com"
    />
    <Product
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/1632px-Microsoft-Xbox-360-E-wController.jpg"
      title="XBOX 360"
      description="An old XBOX to play games"
      price="$200"
      contact="babede.dev@gmail.com"
    />
    <Product
      image="https://thumbs.dreamstime.com/b/retro-television-16221664.jpg"
      title="Tube Television"
      description="A state of the art old TV"
      price="$100"
      contact="fulano.dev@gmail.com"
    />
  </>
);

export default App;
