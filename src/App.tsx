import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/actions/productActions";
import NavigationRoutes from "./Routes";

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log("🚀 ~ file: App.tsx:10 ~ App ~ product:", product);

  return <NavigationRoutes />;
}

export default App;
