import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Services from './services';
const { width, height } = Dimensions.get('screen')
export default function App() {

  useEffect(() => {
    Services.getUser
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground style={{ width: width, height: height }} source={require('./assets/pi.jpg')}>
        <BlurView tint='dark' intensity={100} style={{ width: width, height: height }} >

        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
