import { useContext, createContext, useState, useEffect } from "react";

import { firebase, auth } from "../services/firebase.service";

type User = {
  id: string,
  name: string,
  email: string,
  avatar: string
}

type AuthContextData = {
  isSigned: boolean,
  user: User  | null,
  signIn: () => Promise<void>,
  signOut: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState< User | null>(null);

  useEffect(() => {
    const authStateUnsubscriber = auth.onAuthStateChanged( user => {
      if (user) {
        setUser({
          id: user.uid,
          name: user.displayName as string,
          email: user.email as string,
          avatar: user.photoURL as string
        });
      }
    });

    return authStateUnsubscriber();
  }, []);

  async function signIn () {
    const authResult = await auth.signInWithPopup(provider);

    if (authResult.user) {
      setUser({
        id: authResult.user.uid,
        name: authResult.user.displayName as string,
        email: authResult.user.email as string,
        avatar: authResult.user.photoURL as string
      });
    }

    console.log(authResult);
  }

  async function signOut () {
    const signOuted = await auth.signOut();
    setUser(null);
    console.log(signOuted);
  }

  return (
    <AuthContext.Provider
      value={{
        isSigned: Boolean(user),
        user,
        signIn,
        signOut
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthContextProvider, useAuth }