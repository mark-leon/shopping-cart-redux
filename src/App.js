import { Provider } from "react-redux";
import { ShoppingCart } from "./pages";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ShoppingCart></ShoppingCart>
      </div>
    </Provider>
  );
}

export default App;
