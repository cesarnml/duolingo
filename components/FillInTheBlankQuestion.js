import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Button from './Button'

const blank = '____'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignContent: 'stretch',

    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  parts: {
    flexDirection: 'row',
  },
  part: {
    marginRight: 20,
  },
  pressablePart: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  options: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 'auto',
  },
  optionContainer: {
    marginRight: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  optionText: {},
  blankOption: {
    marginRight: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
})

const FillInTheBlankQuestion = ({ question, onPress }) => {
  const correctAnswers = question.parts.map((part) => (part.isBlank ? part.text : null))

  const [answers, setAnswers] = useState(Array.from({ length: question.parts.length }).fill(null))

  const handlePress = (option) => {
    const nextBlankIndex = answers.findIndex((answer, index) => answer === null && correctAnswers[index] !== null)
    const copyAnswers = [...answers]
    copyAnswers[nextBlankIndex] = option
    setAnswers(copyAnswers)
  }

  const handleReset = (answerToReset) => {
    const answerIndex = answers.findIndex((answer) => answer === answerToReset)
    const copyAnswers = [...answers]
    copyAnswers[answerIndex] = null
    setAnswers(copyAnswers)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill in the blanks.</Text>
      <View style={styles.parts}>
        {question.parts.map((part, index) => {
          return (
            <View key={part.text} style={styles.part}>
              <Text>
                {part.isBlank ? (
                  answers[index] ? (
                    <Pressable onPress={() => handleReset(answers[index])} style={styles.pressablePart}>
                      <Text>{answers[index]}</Text>
                    </Pressable>
                  ) : (
                    <Text>{blank}</Text>
                  )
                ) : (
                  part.text
                )}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.options}>
        {question.options.map((option) => {
          return answers.includes(option) ? (
            <View key={option} style={styles.blankOption}>
              <Text>{blank}</Text>
            </View>
          ) : (
            <Pressable key={option} style={styles.optionContainer} onPress={() => handlePress(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          )
        })}
      </View>
      <Button
        text='Check'
        onPress={() => onPress(JSON.stringify(correctAnswers) === JSON.stringify(answers))}
        disabled={correctAnswers.filter((value) => value).length !== answers.filter((v) => v).length}
      />
    </View>
  )
}
export default FillInTheBlankQuestion
