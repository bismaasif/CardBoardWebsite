import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Category from './Pages/Category/Category';
import Home from './Component/Home/Home';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import ProductDes from './Component/ProductDes/ProductDes';
import Authentication from './Pages/Authentication/Authentication';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/category" component={Category} exact/>
      <Route path="/categoryproduct/:category" component={CategoryProduct} exact/>
      <Route path="/productdes/:id" component={ProductDes} exact/>
      <Route path="/auth" component={Authentication} exact/>
    </Switch>
    </>

  );
}

export default App;
