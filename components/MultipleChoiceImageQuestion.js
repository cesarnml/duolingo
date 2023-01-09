import { Text, View } from 'react-native'
import Button from './Button'
import ImageOption from './ImageOption'
import styles from '../App.styles'

const MultipleChoiceImageQuestion = ({ question, options, selectedOption, setSelectedOption, onButtonPress }) => {
  return (
    <>
      <Text style={styles.title}>{question}</Text>
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
      <Button text='Check' onPress={onButtonPress} disabled={true} />
    </>
  )
}
export default MultipleChoiceImageQuestion
