// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        // Here you can implement real signup logic (e.g., with Firebase or an API)
        if (username && password) {
            alert('Account created successfully!');
            navigation.navigate('Login');
        } else {
            setError('Please fill in both fields');
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Sign Up" onPress={handleSignUp} />
            {error && <Text style={styles.errorText}>{error}</Text>}
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
    input: {
        width: '80%',
        height: 50,
        marginVertical: 10,
        paddingLeft: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default SignUpScreen;
