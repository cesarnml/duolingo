import { useState } from 'react'
import { View } from 'react-native'
import styles from './App.styles'
import questions from './assets/data/openEndedQuestions'
import OpenEndedQuestion from './components/OpenEndedQuestion'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  const onCheckPress = (e, answer) => {
    if (currentQuestion.answer.toLowerCase().trim() === answer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        alert('You win')
        setCurrentQuestionIndex(0)
      }
    } else {
      alert('Wrong. Try again')
    }
  }

  const onButtonPress = () => {
    const touchedOption = options.find((option) => option.id === selectedOption)
    if (touchedOption.correct) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        alert('You win!')
        setCurrentQuestionIndex(0)
        setSelectedOption(null)
      }
    } else {
      alert('Wrong')
    }
  }

  return (
    <View style={styles.root}>
      <OpenEndedQuestion question={currentQuestion} onPress={onCheckPress} />
    </View>
  )
}

export default App
