import { HeaderApp } from "./components/header";
import { ListProduct } from "./components/productlist";
import "./asset/style.css"

const App = () => {
  return (
    <div className="container">
      <HeaderApp/>
      <ListProduct/>
    </div>
  );
}

export default App;