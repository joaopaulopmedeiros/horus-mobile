import React from "react";
import { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import auth from '../services/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadStorageAuthData() {
            try {
                const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
                const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
    
                if(storagedUser && storagedToken) {
                    api.defaults.header.Authorization = `Bearer ${storagedToken}`
                    setUser(JSON.parse(storagedUser));
                }
            } catch {
                console.log('AuthProvider: No items found')
            }
        }

        loadStorageAuthData();
    }, []);

    async function login() {
        try {
            const response = await auth.login();
            setUser(response.user);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
            await AsyncStorage.setItem('@RNAuth:token', response.token);
        } catch {
            console.warn('AuthProvider: Unhandled promise on login');
        }
    }

    async function logout() {
        try {
            await AsyncStorage.clear();
            setUser(null);
        } catch {
            console.warn('AuthProvider: Unhandled promise on logout');
        }
    }

    return (
        <AuthContext.Provider value={{loggedIn: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
