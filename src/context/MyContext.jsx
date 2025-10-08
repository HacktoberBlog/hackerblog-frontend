import { createContext, useContext, useState, useCallback } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileFetched, setProfileFetched] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  const updateUserProfile = useCallback((profile) => {
    setUserProfile(profile);
    setError(null);
    setProfileFetched(true);
  }, []);

  const setAuthenticatedState = useCallback((authenticated) => {
    setIsAuthenticated(authenticated);
    localStorage.setItem('isAuthenticated', authenticated.toString());
  }, []);

  const setLoadingState = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  const setErrorState = useCallback((errorMessage) => {
    setError(errorMessage);
    setProfileFetched(true);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearUserProfile = useCallback(() => {
    setUserProfile(null);
    setProfileFetched(false);
    setError(null);
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  }, []);

  return (
    <MyContext.Provider
      value={{
        userProfile,
        isLoading,
        error,
        profileFetched,
        isAuthenticated,
        updateUserProfile,
        setLoadingState,
        setErrorState,
        clearError,
        clearUserProfile,
        setAuthenticatedState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
