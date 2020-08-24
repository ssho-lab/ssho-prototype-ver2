import * as React from 'react';
import 'react-native-gesture-handler';

import {
  NavigationContainer,
  createSwitchNavigator,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TagSelectScreen from '../src/screens/TagSelect/TagSelectScreen';
import LogInScreen from '../src/screens/LoginScreen';
import SwipeScreen from '../src/screens/Swipe/SwipeScreen';
import CardSettingScreen from '../src/screens/CardSettingScreen';
import HomeScreen from '../src/screens/Home/HomeScreen';

const Home = createStackNavigator();

const state = {
  isLoggedIn: true,
};

function HomeNavigator() {
  return (
    <Home.Navigator>
      {state.isLoggedIn ? ( // 로그인을 한 상태
        <Home.Screen name="S-Sho" component={MainStackNavigator} />
      ) : (
        // 로그인을 하지 않은 상태
        <Home.Screen name="Auth" component={AuthNavigator} />
      )}
    </Home.Navigator>
  );
}

const Auth = createStackNavigator();

function AuthNavigator() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="LogIn" component={LogInScreen} />
    </Auth.Navigator>
  );
}

const Main = createStackNavigator();

function MainStackNavigator() {
  return (
    <Main.Navigator>
      <Main.Screen name="Tab" component={TabNavigator} />
      <Main.Screen name="CardSetting" component={CardSettingScreen} />
    </Main.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="TagSelect" component={TagSelectScreen} />
      <Tab.Screen name="Swipe" component={SwipeScreen} />
    </Tab.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
