import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NabvarExample from './layouts/nabvar';
import Home from './components/home';
import About from'./components/about';
import Services from './components/services';
import Customers from './components/customers';
import News from './components/news';
import Innovation from'./components/innovation';
import Contact from './components/contact';
import Footer from './layouts/footer';



function App() {
  return (
    <div className='ccontenedor'>
       
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<NabvarExample/> }>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='services' element={<Services/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='news' element={<News/>} />
            <Route path='innovation' element={<Innovation/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='*' element={<Navigate replace to="/"/>} />
          </Route>
         </Routes>
        </BrowserRouter>
      </header>
      <body className='App_Main'> 
   

      </body>
    </div>
    </div>
    
  );
}

export default App;
