import React, { createContext, useState, useContext } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import client from '../apolloClient';

interface AuthContextType {
    auth: any;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<any>(null);

    const login = async (email: string, password: string) => {
        const result = await client.mutate({
            mutation: gql`
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
            user {
              id
              email
            }
          }
        }
      `,
            variables: { email, password },
        });
        setAuth(result.data.login);
    };

    const logout = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
