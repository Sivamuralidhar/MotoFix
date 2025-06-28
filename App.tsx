/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Icon from 'react-native-vector-icons/FontAwesome';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import SplashScreen from './SplashScreen';
import SignupScreen from './SignupScreen';
import ChatScreen from './Screens/ChatScreen';
function Track() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Icon name="rocket" size={30} color="#900" />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen options={{ headerShown: false }} name="splash" component={SplashScreen} /> 
         <Stack.Screen options={{ headerShown: false }} name="signup" component={SignupScreen} />
                  <Stack.Screen options={{ headerShown: false }} name="chat" component={ChatScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
