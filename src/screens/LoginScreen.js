import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { NavigationActions, StackActions } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';
import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: true,
    }

    async componentDidMount() {
        const email = await SecureStore.getItemAsync('email');
        const password = await SecureStore.getItemAsync('password');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ isLoading: false });
            this.navigateToHome();
        })
        .catch();
    }

    navigateToHome() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })], });
        this.props.navigation.dispatch(resetAction);
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            SecureStore.setItemAsync('email', this.state.email);
            SecureStore.setItemAsync('password', this.state.password);
            this.navigateToHome();
        })
        .catch();
    }

    handlePress() {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading text="Loading..." isLoading={this.state.isLoading} />
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({ email: text }); }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Email Adress"
                />

                <TextInput
                  style={styles.input}
                  value={this.state.password}
                  onChangeText={(text) => { this.setState({ password: text }); }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Password"
                  secureTextEntry
                />

                <TouchableHighlight style={styles.button} title="Login" onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
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
    signup: {
        marginTop: 16,
        alignSelf: 'center',
    },
    signupText: {
        fontSize: 16,
    }
});

export default LoginScreen;