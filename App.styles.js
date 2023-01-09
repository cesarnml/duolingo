import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 50,
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

  optionContainerSelected: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 10,

    width: '48%',
    height: '48%',

    alignItems: 'center',
    backgroundColor: '#DDF4FE',
    borderColor: '#81D5FE',
  },
  optionImage: {
    flex: 1,
    width: '100%',
  },

  optionText: {},

  optionTextSelected: {
    color: '#40BEF7',
    fontWeight: 'bold',
  },

  buttonContainer: {
    backgroundColor: '#58CC02',
    height: 50,
    marginVertical: 25,

    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#57A600',
  },

  disabledContainer: {
    backgroundColor: 'lightgrey',
    borderColor: 'grey',
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
  },
})

export default styles
