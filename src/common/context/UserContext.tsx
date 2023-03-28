import React, { createContext, useState, FC, ReactNode } from "react";

export const UserContext = createContext({
  state: {
    isLoggedIn: false,
  },
  funcs: {
    handeLoggedIn: () => {},
    handleLoggedOff: () => {},
  },
});

type UserStateContextProps = {
  children: ReactNode;
};

const UserStateContext: FC<UserStateContextProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handeLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const handleLoggedOff = () => {
    setIsLoggedIn(false);
  };

  const state = {
    isLoggedIn,
  };
  const funcs = {
    handeLoggedIn,
    handleLoggedOff,
  };
  return (
    <UserContext.Provider value={{ state, funcs }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStateContext;
