import './App.scss';
import Menu from './components/menu/Menu';
import Main from './components/main/Main'; 
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
