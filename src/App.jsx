import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/aboutProds/ItemListContainer';
import Cart from './components/cart/Cart';
import Footer from './components/Footer';
                        

function App() {
  
  return (
    <div className="App bg-black bg-gradient-to-b from-neutral-600 h-screen w-screen ">
      <NavBar />
      <ItemListContainer />

      <Footer />
    </div>
  );
}

export default App;
