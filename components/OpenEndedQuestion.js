import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import Button from './Button'
import { useState, useEffect } from 'react'
import mascot from '../assets/images/mascot.png'

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  questionTextContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
  },

  questionText: {
    fontSize: 16,
  },

  mascotImage: {
    width: '30%',
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    borderColor: 'lightgrey',
    fontSize: 16,
    padding: 10,
  },
})

const OpenEndedQuestion = ({ question, onPress }) => {
  const { text, answer } = question

  const [currentAnswer, setCurrentAnswer] = useState('')

  useEffect(() => {
    setCurrentAnswer('')
  }, [text])

  return (
    <>
      <Text style={styles.title}>Translate this sentence.</Text>
      <View style={styles.questionContainer}>
        <Image source={mascot} style={styles.mascotImage} resizeMode='contain' />
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>{text}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        value={currentAnswer}
        onChangeText={setCurrentAnswer}
        placeholder='Enter response.'
        selectTextOnFocus
        multiline
      />
      <Button text='Check' onPress={(e) => onPress(e, currentAnswer.toLowerCase().trim())} disabled={!currentAnswer} />
    </>
  )
}
export default OpenEndedQuestion
