import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';

class SignupScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })], });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(() => {
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Signup
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
                <TouchableHighlight
                    style={styles.button}
                    title="Signup"
                    underlayColor="#C70F56"
                    onPress={() => {}}
                    onPress={this.handleSubmit.bind(this)}
                >
                    <Text style={styles.buttonTitle}>Signup</Text>
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

export default SignupScreen;