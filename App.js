
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import readStory from './screens/readStory';
import writeStory from './screens/writeStory';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/> 
  );
}}
const TabNavigator = createBottomTabNavigator({
  readStory:{screen:readStory},
  writeStory:{screen:writeStory}
},{
  defaultNavigationOptions:({
    navigation
  })=>({
   
  })
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
