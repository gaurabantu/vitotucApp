
import React, { useState,useEffect} from 'react';
import { View, Image, StyleSheet, TouchableOpacity,StatusBar,ScrollView } from 'react-native';
import ImageView from 'react-native-image-viewing';
import FastImage from 'react-native-fast-image';
import CustomToolbar from './CustomToolbar'


function App() : JSX.Element {
 
    useEffect(() => {
      console.log("my message print ")
     // SplashScreen.hide();
    }, []);

  const images = [
    require('./assets/vc1.jpeg'),
    require('./assets/vc2.jpeg'),
    require('./assets/vc3.jpeg'),
    require('./assets/vc4.jpeg'),
    require('./assets/vc5.jpeg'),
    require('./assets/vc6.jpeg'),
    require('./assets/vc7.jpeg'),
    require('./assets/vc8.jpeg'),
    require('./assets/vc9.jpeg'),
    require('./assets/vc10.jpeg'),
    require('./assets/vc11.jpeg'),
    require('./assets/vc12.jpeg'),
    require('./assets/vc13.jpeg'),
    require('./assets/vc14.jpeg'),
    require('./assets/vc16.jpeg'),
    require('./assets/vc15.jpeg'),
    require('./assets/vc18.jpeg'),
    require('./assets/vc19.jpeg'),
    require('./assets/vc20.jpeg'),
    require('./assets/vc21.jpeg'),
    require('./assets/vc22.jpeg'),
    require('./assets/vc23.jpeg'),
    require('./assets/vc24.jpeg')
  ];
  const [visible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const renderItem = (item:any, index:number) => (
    <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
      <FastImage source={item} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
  const handleImagePress = (index:number) => {
    setIndex(index);
    setIsVisible(true);
  };

  return (
    <View  style={{ flex: 1 }}>
       <StatusBar backgroundColor="#64B5F6" />
       <CustomToolbar></CustomToolbar>
       <ScrollView contentContainerStyle={styles.container}>
     
     {images.map(renderItem)}
     <ImageView
       images={images}
       imageIndex={index}
       visible={visible}
       swipeToCloseEnabled={false} 
       onRequestClose={() => setIsVisible(false)}
     />
   </ScrollView>
    </View>
  
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
   
  },
  image: {
    width: 150,
    height: 150,
    margin: 8,
    borderRadius: 8,
  },
});



export default App;
