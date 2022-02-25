import './App.css';
import NavBar from './components/NavBar';
// import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return (
    <div className="App bg-slate-900 h-screen w-screen">
      <NavBar />
      <ItemListContainer greeting='Bienvenido/a! Elegi tu birra favorita!' />

    </div>
  );
}

export default App;
