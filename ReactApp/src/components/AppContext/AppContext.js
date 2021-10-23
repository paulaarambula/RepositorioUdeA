import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextComponent = (props) => {
  const [products, setProducts] = useState([]);

  const objeto = {
    products,
    setProducts,
  };

  return <AppContext.Provider value={objeto}>{props.children}</AppContext.Provider>;
};

export default AppContextComponent;