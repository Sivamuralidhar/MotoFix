import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Appearance } from 'react-native';
import App from '../Screens/BaseScreens/App';
import i18n from '../i18n';
const ThemeContext = createContext();

export const getColorScheme = {
    light: { 
        primary: '#3b82f6',
        background: '#ffffff',
        card: '#ffffff',
        text: '#111827',
        border: '#e2e8f0',
        notification: '#f56565',
        error: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        gray: '#6b7280',
        lightGray: '#f3f4f6',
      }, 
    dark: {
        primary: '#3b82f6',
        background: '#111827',
        card: '#1f2937',
        text: '#f3f4f6',
        border: '#374151',
        notification: '#f56565',
        error: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        gray: '#9ca3af',
        lightGray: '#374151',
      }, 
  };
  


export const ThemeProvider = ({ children }) => {
  const systemColorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(systemColorScheme || 'light');
  useEffect(()=>{
    AsyncStorage.getItem('userTheme').then((val)=>{ 
      if(val)
        setTheme(val||'light')
    })

  },[])

  const toggleTheme = () => {
    AsyncStorage.setItem('userTheme',(theme === 'light' ? 'dark' : 'light'))
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme:theme, toggleTheme:toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  ); 
};

export const useTheme = () => useContext(ThemeContext);

export const withGlobalContext = (Component) => {
  return (props) => {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
};
export default function MainTheme() {
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
           <App></App>
        </ThemeProvider>
      </I18nextProvider>
    );
  }

 