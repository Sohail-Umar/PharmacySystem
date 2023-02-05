import React from "react";

const CreateCartStateContext = React.createContext(undefined);
const CreateCartDispatchProvider = React.createContext(undefined);

function CartProvider({ children }) {

  const [cartData, setCartData] = React.useState();

  const handleCartChange = (temp) => {
    setCartData(temp);
    // console.log("contextdata: ", temp)
    // debugger
  }

  return (

    <CreateCartStateContext.Provider value={{ cartData }}>
      <CreateCartDispatchProvider.Provider value={{ handleCartChange }}>
        {children}
      </CreateCartDispatchProvider.Provider>
    </CreateCartStateContext.Provider>
  );
}

const useCreateCartStateContext = () => {
  const context = React.useContext(CreateCartStateContext);

  if (context === undefined) {
    throw Error("useProductContext must be inside userProvider")
  }

  return context;
};

const useCreateCartDispatchProvider = () => {
  const context = React.useContext(CreateCartDispatchProvider);

  if (context === undefined) {
    throw Error("useProductContext must be inside userProvider")
  }

  return context;
};

const useProductContext = () => {
  return [useCreateCartStateContext(), useCreateCartDispatchProvider()]
}


export {
  CartProvider, useCreateCartStateContext,
  useCreateCartDispatchProvider, useProductContext
};