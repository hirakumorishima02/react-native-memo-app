import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput style={styles.input} value="Email" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} title="Login" onPress={() => {}}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 8,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default LoginScreen;