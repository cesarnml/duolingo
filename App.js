import { useState } from 'react'
import { View } from 'react-native'
import styles from './App.styles'
import questions from './assets/data/allQuestions'
import FillInTheBlankQuestion from './components/FillInTheBlankQuestion'
import Header from './components/Header'
import MultipleChoiceImageQuestion from './components/MultipleChoiceImageQuestion'
import OpenEndedQuestion from './components/OpenEndedQuestion'

const App = () => {
  const [lives, setLives] = useState(5)
  const [selectedOption, setSelectedOption] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  const onFillCheck = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        alert('You win')
      }
    } else {
      if (lives > 1) {
        setLives((prev) => prev - 1)
        alert('Wrong answer. Try again')
      } else {
        alert('Game over')
        setSelectedOption(null)
        setCurrentQuestionIndex(0)
        setLives(5)
      }
    }
  }

  const onOpenCheck = (e, answer) => {
    if (currentQuestion.answer.toLowerCase().trim() === answer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        alert('You win')
        setCurrentQuestionIndex(0)
      }
    } else {
      if (lives > 1) {
        setLives((prev) => prev - 1)
        alert('Wrong answer. Try again')
      } else {
        setSelectedOption(null)
        setCurrentQuestionIndex(0)
        setLives(5)
        alert('Game over')
      }
    }
  }

  const onMultipleCheck = () => {
    const touchedOption = currentQuestion.options.find((option) => option.id === selectedOption)
    if (touchedOption.correct) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        alert('You win!')
        setCurrentQuestionIndex(0)
        setSelectedOption(null)
        setLives(5)
      }
    } else {
      if (lives > 1) {
        setLives((prev) => prev - 1)
        alert('Wrong answer. Try again')
      } else {
        alert('Game over')
        setSelectedOption(null)
        setCurrentQuestionIndex(0)
        setLives(5)
      }
    }
  }

  return (
    <View style={styles.root}>
      <Header lives={lives} progress={(currentQuestionIndex / questions.length) * 100} />
      {currentQuestion.type === 'FILL_IN_THE_BLANK' && (
        <FillInTheBlankQuestion question={currentQuestion} onPress={onFillCheck} />
      )}
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <MultipleChoiceImageQuestion
          question={currentQuestion}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          onPress={onMultipleCheck}
        />
      )}
      {currentQuestion.type === 'OPEN_ENDED' && <OpenEndedQuestion question={currentQuestion} onPress={onOpenCheck} />}
    </View>
  )
}

export default App
