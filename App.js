import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route}  from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import Cart from './Pages/Cart'


function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Routes path='/' element={<Shop/>}/>
                <Routes path='/bath-soap' element={<ShopCategory category="bath-soap"/>}/>
                <Routes path='/candle-supplies' element={<ShopCategory category="candle-supplies"/>}/>
                <Routes path='/colorants' element={<ShopCategory category="colorants"/>}/>
                <Routes path='/deteragents' element={<ShopCategory category="deteragents"/>}/>
                <Route path='/Product' element={<Product/>}>
                    <Route path=':productId' element={<Product/>}/>
                </Route>
                <Routes path='/Cart' element={<Cart/>}/>
                

            </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;