import { View, Text, Image, StyleSheet } from 'react-native'
import heart from '../assets/images/heart.png'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBarContainer: {
    height: 15,
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginRight: 10,
  },
  progressBarEmpty: {},
  progressBarFull: {
    height: 15,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  scoreContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  heart: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  lives: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const Header = ({ lives, progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFull, { width: `${progress}%` }]} />
      </View>
      <View style={styles.scoreContainer}>
        <Image source={heart} style={styles.heart} resizeMode='contain' />
        <Text style={styles.lives}>{lives}</Text>
      </View>
    </View>
  )
}
export default Header
