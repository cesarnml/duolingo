import { Pressable, Text } from 'react-native'
import styles from '../App.styles'
import PropTypes from 'prop-types'

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      style={[styles.buttonContainer, , disabled ? styles.disabledContainer : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText]}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  text: 'Submit',
  onPress: () => {},
  disabled: false,
}

export default Button
