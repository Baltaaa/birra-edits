import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/aboutProds/ItemListContainer';
import DataFetched from './components/aboutProds/dataFetched/DataFetched.jsx';
                        

function App() {
  
  return (
    <div className="App bg-black h-screen w-screen overflow-y-hidden">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
