import { useSegments, router } from "expo-router";
import React from "react";

const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: (value: boolean) => {},
});

export const useAuth = () => React.useContext(AuthContext);

function useProtectedRoute(isAuth: boolean) {
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !isAuth &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.push("/(auth)/sign-in");
    } else if (isAuth && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.push("/(home)/(tabs)/");
    }
  }, [isAuth, segments]);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  useProtectedRoute(isAuth);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
