import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Services from './services';
export default function App() {
  const [userData, setUserData] = useState(null);
  const { width, height } = Dimensions.get('screen')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Services.getUser();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data in Home:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground style={{ width: width, height: height }} source={require('./assets/pi.jpg')}>
        <BlurView tint='dark' intensity={100} style={{ width: width, height: height }} >

          {userData == null ?
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 50, padding: 10, justifyContent: 'center', alignItems: 'center' }}>Carregando....</Text> :
            <FlatList data={userData} numColumns={1}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => Services.set(item, item.id)}>
                  <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 50, padding: 10 }} key={item.id} >Codigo:{item.id}</Text>
                </TouchableOpacity>
              }
            />
          }

        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
