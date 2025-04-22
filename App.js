// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from './screens/LoginScreen';
import EventListScreen from './screens/EventListScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import PaymentScreen from './screens/PaymentScreen';
import SignUpScreen from './screens/SignUpScreen'; // Import SignUp screen
import ProfileScreen from './screens/ProfileScreen'; // Import ProfileScreen
import CallUs from './components/CallUs';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Define all screens here */}
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="EventList" component={EventListScreen} />
                <Stack.Screen name="EventDetail" component={EventDetailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} /> 

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
