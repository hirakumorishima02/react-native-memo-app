import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from '../components/MemoList';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name='plus' onPress={() => { this.props.navigation.navigate('MemoEdit'); }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#DDD',
    },
});

export default MemoListScreen;