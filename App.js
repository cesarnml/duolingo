import { useState } from 'react'
import { View } from 'react-native'
import styles from './App.styles'
import questions from './assets/data/imageMultipleChoiceQuestions'
import MultipleChoiceImageQuestion from './components/MultipleChoiceImageQuestion'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]
  console.log('outside:', currentQuestionIndex)
  const { question, options } = currentQuestion

  const onButtonPress = () => {
    const touchedOption = options.find((option) => option.id === selectedOption)
    if (touchedOption.correct) {
      console.log('currentQuestionIndex:', currentQuestionIndex)
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
      <MultipleChoiceImageQuestion
        question={question}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onButtonPress={onButtonPress}
      />
    </View>
  )
}

export default App
