import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../config/firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [userAccount, setUserAccount] = useState(null);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('xxxx', userAccount);
            if (currentUser) setUserAccount(currentUser)
            else setUserAccount(null)
        });
    }, []);

    return(
        <AuthContext.Provider value = {{ userAccount, signup, login, logout }}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    );
};