
import { authRepository } from '@/src/data/repositories/auth/auth-repository';
import { useLoadingStore } from '@/src/shared/hooks/use-loading';
import { Session, User } from '@supabase/supabase-js';
import * as Network from 'expo-network';
import { router } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  session: Session | null;
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  const { setIsLoading } = useLoadingStore();

  useEffect(() => {
    const checkNetworkAndSession = async () => {
      setIsLoading(true);

      const networkState = await Network.getNetworkStateAsync();
      const isConnected = networkState.isConnected ?? false;

      const session = await authRepository.getSession();

      if (session) {
        if (!isConnected) {
          // User is offline - sign out
          await authRepository.signOut();
          setSession(null);
          router.replace('/(auth)/login');
        } else {
          setSession(session);
          router.replace('/(tabs)');
        }
      } else {
        router.replace('/(auth)/login');
      }
      setIsLoading(false);
    };

    checkNetworkAndSession();

    const { data: subscription } = authRepository.onAuthStateChange((newSession) => {
      setSession(newSession);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);



  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        isAuthenticated: !!session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
