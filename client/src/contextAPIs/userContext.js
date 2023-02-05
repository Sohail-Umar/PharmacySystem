import React from "react";

const CreateUserStateContext = React.createContext(undefined);
const CreateUserDispatchContext = React.createContext(undefined);

function UserProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = React.useState(false);

  const handleUserAuthChange = (isAuthenticated) => {
    setisAuthenticated(isAuthenticated);
  };

  return (
    <CreateUserStateContext.Provider value={isAuthenticated}>
      <CreateUserDispatchContext.Provider value={{ handleUserAuthChange }}>
        {children}
      </CreateUserDispatchContext.Provider>
    </CreateUserStateContext.Provider>
  );
}

const useCreateUserStateContext = () => {
  const context = React.useContext(CreateUserStateContext);

  if (context === undefined) {
    throw Error("useUserContext must be inside userProvider");
  }

  return context;
};

const useCreateUserDispatchContext = () => {
  const context = React.useContext(CreateUserDispatchContext);

  if (context === undefined) {
    throw Error("useUserContext must be inside userProvider");
  }

  return context;
};

const useUserContext = () => {
  return [useCreateUserStateContext(), useCreateUserDispatchContext()];
};

export {
  UserProvider,
  useCreateUserStateContext,
  useCreateUserDispatchContext,
  useUserContext,
};
