import { createContext, useState } from "react";
import PropTypes from "prop-types";
// Create the Context
export const UserContext = createContext();

// Create a Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Add PropTypes validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
};
