import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';


const dateString = (date) => {
    if (date == null) { return ''; }
    const str = date.toDate().toISOString();
    return str.split('T')[0];
}

class MemoDetailScreen extends React.Component {
    state = {
        memo: {},
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo:params.memo });
    }

    returnMemo(memo) {
        this.setState({ memo });
    }

    render() {
        const { memo } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View>
                            <Text style={styles.memoHeaderTitle}>{memo.body ? memo.body.substring(0,10) : ''}</Text>
                            <Text style={styles.memoHeaderDate}>{dateString(memo.created_on)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton name="pencil"
                color="white" style={styles.editButton}
                onPress={() => { this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 73,
        backgroundColor: '#f56262',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    memoBody: {
        lineHeight: 22,
        fontSize: 20,
    },
    editButton: {
        top: 48,
    },
});

export default MemoDetailScreen;