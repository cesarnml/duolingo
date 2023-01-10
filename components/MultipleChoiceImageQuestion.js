import { Text, View } from 'react-native'
import Button from './Button'
import ImageOption from './ImageOption'
import styles from '../App.styles'

const MultipleChoiceImageQuestion = ({ question, selectedOption, setSelectedOption, onPress }) => {
  const { question: prompt, options } = question

  return (
    <>
      <Text style={styles.title}>{prompt}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <ImageOption
            key={option.id}
            id={option.id}
            image={option.image}
            text={option.text}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </View>
      <Button text='Check' onPress={onPress} disabled={!selectedOption} />
    </>
  )
}
export default MultipleChoiceImageQuestion
