
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Blog from './paginas/Blog';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
import ProductoDetalle from './paginas/ProductoDetalle';
import Eventos from './paginas/Eventos';

function App() {
 
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='blog' element={<Blog/>}/>
              <Route path='eventos' element={<Eventos/>}/>
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path='productos' element={<Productos/>} />
              <Route path='*' element={<NoPage/>} />
          </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
