/**
 * Web-compatible Splash Screen
 */
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

interface SplashProps {
  navigation?: any;
}

const SplashScreen = (props: SplashProps) => {
  useEffect(() => {
    // Navigate to signup instead of chat for web demo
    setTimeout(() => {
      if (props.navigation) {
        props.navigation.replace("signup");
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🚀</Text>
      </View>
      <Text style={styles.title}>Bhanupro</Text>
      <Text style={styles.subtitle}>Web Preview Mode</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default SplashScreen;