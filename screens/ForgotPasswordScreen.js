import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
            />
            <Button title="Submit" onPress={() => alert('Password reset link sent!')} />
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
    title: {
        fontSize: 24,
        marginBottom: 20,
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
});

export default ForgotPasswordScreen;
