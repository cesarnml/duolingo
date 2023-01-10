import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import Button from './Button'
import { useState, useEffect } from 'react'
import mascot from '../assets/images/mascot.png'

const styles = StyleSheet.create({
  openEndedQuestionContainer: {},
  promptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mascotImage: {
    width: '30%',
    aspectRatio: 3 / 4,
  },
  textInput: {},
})

const OpenEndedQuestion = ({ question, onPress }) => {
  const { text: prompt, answer } = question

  const [currentAnswer, setCurrentAnswer] = useState('')
  console.log('currentAnswer:', currentAnswer)

  useEffect(() => {
    setCurrentAnswer('')
  }, [prompt])

  return (
    <View style={styles.openEndedQuestionContainer}>
      <View style={styles.promptContainer}>
        <Image source={mascot} style={styles.mascotImage} resizeMode='contain' />
        <Text>{prompt}</Text>
      </View>
      <TextInput
        value={currentAnswer}
        onChangeText={setCurrentAnswer}
        placeholder='Enter response.'
        style={styles.textInput}
        textAlign='left'
      />
      <Button text='Check' onPress={(e) => onPress(e, currentAnswer.toLowerCase().trim())} disabled={!currentAnswer} />
    </View>
  )
}
export default OpenEndedQuestion
