import { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './App.styles'
import data from './assets/data/oneQuestionWithOption'
import Button from './components/Button'
import ImageOption from './components/ImageOption'
import MultipleChoiceImageQuestion from './components/MultipleChoiceImageQuestion'

const App = () => {
  const { question, options } = data
  const [selectedOption, setSelectedOption] = useState(null)

  const onButtonPress = () => {
    console.warn('Pressed')
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
