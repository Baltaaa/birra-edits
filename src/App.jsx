import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/aboutProds/ItemListContainer';
                        

function App() {
  
  return (
    <div className="App bg-black h-screen w-screen">
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
