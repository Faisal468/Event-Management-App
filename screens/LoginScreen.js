import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState(''); // Ensure username can be set
    const [password, setPassword] = useState(''); // Ensure password can be set
    const [error, setError] = useState('');

    // Animation states
    const fadeAnim = new Animated.Value(0); // Initial opacity 0
    const translateY = new Animated.Value(50); // Initial position

    // Start animation on component mount
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.timing(translateY, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleLogin = () => {
        // Basic validation
        if (username === 'user' && password === 'password') {
            navigation.navigate('EventList');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleForgotPassword = () => {
        // Navigate to ForgotPasswordScreen
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.loginBox, { opacity: fadeAnim, transform: [{ translateY }] }]}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.forgotPasswordText}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>


                {/* Forgot Password link */}
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {error && <Text style={styles.errorText}>{error}</Text>}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loginBox: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        marginVertical: 10,
        paddingLeft: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    forgotPasswordText: {
        color: '#4CAF50',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default LoginScreen;
