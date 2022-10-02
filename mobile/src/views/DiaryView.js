// Main contains the main page with all of the features.

import {
    Header,
    View,
    Text,
    StyleSheet
} from 'react-native'
import CalendarPicker from '../components/CalendarPicker.js'
// import NewEntry from '../components/NewEntry'

const DiaryView = () => {
    return (
      <View style={styles.root}>
        <View style={styles.calendar}>
          <CalendarPicker />
        </View>
        <View style={styles.container}>
            <Text>Summary</Text>
            {/* <NewEntry /> */}
        </View>
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
    },
    calendar: {
      flex: 1,
      marginTop: 40
    },
    root: {
      flex: 1,
    }
  })

export default DiaryView