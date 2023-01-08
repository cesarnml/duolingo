import { View, Text } from 'react-native'
import styles from './App.styles'
import ImageOption from './components/ImageOption'
import data from './assets/data/oneQuestionWithOption'

const App = () => {
  const { question, options } = data
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <ImageOption key={option.id} image={option.image} text={option.text} />
        ))}
      </View>
    </View>
  )
}

export default App
