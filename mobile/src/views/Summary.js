// Main contains the main page with all of the features.

import {
    Header,
    View,
    Text,
    StyleSheet
} from 'react-native'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Summary</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',  
      marginBottom: '20%',
    },
    headerWrapper: {
      width: '80%',
      alignItems: 'start',
    },
    headerText: {
      fontSize: '20rem'
    }
  })

export default Main