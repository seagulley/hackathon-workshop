// Main contains the main page with all of the features.

import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import CalendarPicker from '../components/CalendarPicker.js'
import NewEntry from '../components/NewEntry'

const DiaryView = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.root}>
          <View style={styles.calendar}>
            <CalendarPicker />
          </View>
          <View style={styles.container}>
              <Text>Write an entry for (date)</Text>
              <NewEntry />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',  
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