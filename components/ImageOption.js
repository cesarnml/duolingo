import { View, Text, Image } from 'react-native'
import styles from '../App.styles'

const baseUrl = 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/'
const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: `${baseUrl}${image}`,
        }}
        resizeMode='contain'
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  )
}
export default ImageOption
