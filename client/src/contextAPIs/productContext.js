import React from "react";

const CreateProductStateContext = React.createContext(undefined);
const CreateProductDispatchContext = React.createContext(undefined);

function ProductProvider({ children }) {

  const [productData, setProductData] = React.useState([]);

  const handleProductChange = (temp) => {
    setProductData(temp);
    // debugger
  }

  return (

    <CreateProductStateContext.Provider value={{ productData }}>
      <CreateProductDispatchContext.Provider value={{ handleProductChange }}>
        {children}
      </CreateProductDispatchContext.Provider>
    </CreateProductStateContext.Provider>
  );
}

const useCreateProductStateContext = () => {
  const context = React.useContext(CreateProductStateContext);

  if (context === undefined) {
    throw Error("useProductContext must be inside userProvider")
  }

  return context;
};

const useCreateProductDispatchContext = () => {
  const context = React.useContext(CreateProductDispatchContext);

  if (context === undefined) {
    throw Error("useProductContext must be inside userProvider")
  }

  return context;
};

const useProductContext = () => {
  return [useCreateProductStateContext(), useCreateProductDispatchContext()]
}


export { ProductProvider, useCreateProductStateContext, useCreateProductDispatchContext, useProductContext };