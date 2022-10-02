import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'

const NewEntry = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                // value={this.state.value}
                onChangeText={text=>this.setState({value:text})}
                multiline={true}
                numberOfLines={4}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: '50%',
        width: 300,
        backgroundColor: 'pink'
    }
  })

export default NewEntry