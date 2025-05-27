import { Stack } from "expo-router";

export default function RootLayout() {
  return (    
  <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#096B68',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* Rutas de los componentes */}
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="signup" options={{ headerShown: false}} />
      {/* Asignar la barra de navegacion de la aplicacion */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
  </Stack>)
}