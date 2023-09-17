import './App.scss';
import {Route, Routes,} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Articles from './components/Articles';
import Cv from './components/Cv';
import ArticleCard from './components/ArticleCard';

function App() {
  return (

    <Routes>
    <Route path='/' element ={<Layout/>}>
    <Route index element ={<Home/>} />
    <Route path='/articles'  element ={<Articles/>} />
    <Route path='/cv'  element ={<Cv/>} />
    <Route path='/ArticleCard'  element ={<ArticleCard/>} />
    </Route>
  </Routes>
  );
}

export default App;
