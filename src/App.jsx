import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/aboutProds/ItemListContainer';
// import Cart from './components/cart/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/aboutProds/ItemDetailContainer'
                        

function App() {

  return (
    <BrowserRouter>

    <div className="App bg-black bg-gradient-to-b  h-screen w-screen ">
      <NavBar />
      
      <Routes >
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categorys/:categoriaId' element={<ItemListContainer />}/>
        <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>

    {/* alternativa general de ruta */}
        <Route path='/*' element={ <Navigate to='/' replace />}/>
      </Routes>
      
      <Footer />

    </div>
    </BrowserRouter>
  
  )
}

export default App;
