
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import MainRoutes from './routes/MainRouter';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div>
      <CartProvider>
        < MainRoutes />
      </CartProvider>
    </div>

  )
}

export default App;
