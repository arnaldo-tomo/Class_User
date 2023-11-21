import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Services from './services';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
export default function App() {
  const [userData, setUserData] = useState(null);
  const { width, height } = Dimensions.get('screen')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Services.getUser();
        setUserData(data.products);
      } catch (error) {
        console.error('Error fetching data in Home:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ width: width, height: height }}>

        <StatusBar style="light" />
        <ImageBackground style={{ width: width, height: height }} source={require('./assets/pi.jpg')} >
          {/* <BlurView tint='light' intensity={1} style={{ width: width, height: height }} > */}
          {userData == null ?
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 50, padding: 10, justifyContent: 'center', alignItems: 'center' }}>Carregando....</Text> :

            <FlatList data={userData} numColumns={1}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => Services.set(item, item.id)} key={item.id} style={{ padding: 20, paddingTop: 20, paddingBottom: 20, }}>
                  {!item.thumbnail ?
                    <Text>Carregando Imagen</Text>
                    :
                    <Image source={{ uri: item.thumbnail }} style={{ width: 200, height: 200, overflow: 'visible', resizeMode: 'contain' }}></Image>
                  }
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }} >{item.title}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.description}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.price}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.discountPercentage}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.rating}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.stock}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.brand}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }} >{item.category}</Text>
                </TouchableOpacity>

              }
            />
          }
          {/* <LinearGradient
              style={{
                height: height,
                width: width,
              }}

              colors={['rgba(0,0,0,80)', 'transparent']}
              start={{ x: 0.1, y: 1 }}
              end={{ x: 0.1, y: 0.8 }}
            >

            </LinearGradient> */}
          {/* </BlurView> */}
        </ImageBackground>
      </SafeAreaView>
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
