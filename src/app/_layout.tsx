import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack, type ExternalPathString, type RelativePathString } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "../core/theme/theme.provider";
import { AuthProvider } from '../ui/auth/view-models/useAuth';
import { LoadingOverlay } from "../ui/shared/components/LoadingOverlay";

type ExpoRouterPath = RelativePathString | ExternalPathString;

const queryClient = new QueryClient();

function MainLayout() {

  return (
    <>
      <Stack screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      {/* <SplashScreenProvider> */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MainLayout />
          <LoadingOverlay />
        </AuthProvider>

      </QueryClientProvider>
      {/* </SplashScreenProvider> */}
    </ThemeProvider>
  )
}