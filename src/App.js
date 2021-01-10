import './App.scss';
import Menu from './components/menu/Menu'; //render menu-component 
import Main from './components/main/Main'; //render main-component for main content in body 
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Menu /> 
      <Main /> 
      <Footer /> 
    </div>
  );
}

export default App;
