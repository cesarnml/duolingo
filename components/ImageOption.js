import PropTypes from 'prop-types'
import { Image, Text, View, Pressable } from 'react-native'
import styles from '../App.styles'

const baseUrl = 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/'

const ImageOption = ({ id, image, text, selectedOption, setSelectedOption }) => {
  const isSelected = id === selectedOption
  return (
    <Pressable
      style={isSelected ? styles.optionContainerSelected : styles.optionContainer}
      onPress={(e) => {
        setSelectedOption(id)
      }}
    >
      <Image
        source={{
          uri: `${baseUrl}${image}`,
        }}
        resizeMode='contain'
        style={styles.optionImage}
      />
      <Text style={isSelected ? styles.optionTextSelected : styles.optionText}>{text.toUpperCase()}</Text>
    </Pressable>
  )
}

ImageOption.propsTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

ImageOption.defaultProps = {
  text: 'Default',
}

export default ImageOption
