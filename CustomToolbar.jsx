/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';


const CustomToolbar = () => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.title}>Viotic PharmaCeuticals</Text>
      {/* <View style={styles.actions}>
        <TouchableOpacity onPress={() => console.log('Item 1 pressed')}>
          <Text style={styles.actionText}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Item 2 pressed')}>
          <Text style={styles.actionText}>Item 2</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56, // Adjust the height as needed
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight:'900'
  },
  actions: {
    flexDirection: 'row',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default CustomToolbar;
