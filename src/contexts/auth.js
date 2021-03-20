import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        async function loadStorageAuthData() {
            try {
                const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
                const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
    
                if(storagedUser && storagedToken) {
                    api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
                    setUser(JSON.parse(storagedUser));
                }
            } catch {
                console.log('AuthProvider: No items found')
            }
        }

        loadStorageAuthData();
    }, []);

    async function signin(guest) {
        try {
            const response = await api.post('/auth/login', guest);
            const { user, access_token } = response.data;
  
            setUser(user);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user));
            await AsyncStorage.setItem('@RNAuth:token', access_token);

            Alert.alert(
                "Sucesso",
                "Usuário autenticado!",
                [
                    { text: "OK", onPress: () => {}}
                ],
                { cancelable: false }
            );
            
        } catch {
            console.log('AuthProvider: Unhandled exception on login');            
            Alert.alert(
                "Erro",
                "E-mail ou senha não conferem!",
                [
                    { text: "OK", onPress: () => {}}
                ],
                { cancelable: false }
            );
        }
    }

    async function signout() {
        try {
            await AsyncStorage.clear();
            setUser(null);
        } catch {
            console.log('AuthProvider: Unhandled exception on logout');
        }
    }

    async function signup(guest) {
        console.log(guest, user)
        
        const response = await api.post('/auth/register', guest);
        const { user, access_token } = response.data;
        
        console.log(guest, user)
        setUser(user);
        
        api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user));
        await AsyncStorage.setItem('@RNAuth:token', access_token);
    }

    return (
        <AuthContext.Provider value={{loggedIn: !!user, user, signin, signout, signup}}>
            {children}
        </AuthContext.Provider>
    );
}
