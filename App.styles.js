import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },
  optionsContainer: {},
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 10,

    width: '50%',
    height: '50%',
  },
  optionImage: {
    width: 100,
    height: 100,
  },
  optionText: {},
})

export default styles
