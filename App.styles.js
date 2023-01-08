import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    marginBottom: 20,
  },

  optionsContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },

  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 10,

    width: '48%',
    height: '48%',

    alignItems: 'center',
  },

  optionImage: {
    flex: 1,
    width: '100%',
  },

  optionText: {},
})

export default styles
