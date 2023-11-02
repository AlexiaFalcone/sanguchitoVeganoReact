import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a Sanguchito Vegano"/>
    </div>
    
  )
}

export default App;
