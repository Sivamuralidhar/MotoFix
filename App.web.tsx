/**
 * Web version of the React Native App
 * Some features may be limited in web environment
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import SignupScreen from './SignupScreen';

// Web-compatible version without native-only features
function WebChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Screen</Text>
      <Text style={styles.subtitle}>
        Voice features and native integrations are not available in web preview.
        Please use a mobile device or emulator for full functionality.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Web Preview Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="splash" 
          component={SplashScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="signup" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="chat" 
          component={WebChatScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}