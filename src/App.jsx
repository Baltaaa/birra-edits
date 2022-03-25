import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/aboutProds/ItemListContainer';
// import Cart from './components/cart/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/aboutProds/ItemDetailContainer'
import CartContextProvider from './context/cartContext';
import CartPage from './components/cart/CartPage';
// import CartSlider from './components/cart/CartSlider';


function App() {

  return (
    
    <CartContextProvider >

    <BrowserRouter >

    <div style={{backgroundColor: '#252520', direction: 'ltr'}} className="App  bg-gradient-to-b  h-max w-screen overflow-y-auto relative ">
      <NavBar />
      
      <Routes >
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categorys/:categorysId' element={<ItemListContainer />}/>
        <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartPage />} />

    {/* alternativa general de ruta */}
        <Route path='/*' element={ <Navigate to='/' replace />}/>
      </Routes>
      
      <Footer className='' />

    </div>
    </BrowserRouter>
  
    </CartContextProvider>
  )
}

export default App;
