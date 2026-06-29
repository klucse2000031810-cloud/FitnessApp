import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './LanguageContext';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';
import DietPlannerScreen from './DietPlannerScreen';
import MealTrackerScreen from './MealTrackerScreen';
import WorkoutScreen from './WorkoutScreen';
import TaskManagerScreen from './TaskManagerScreen';
import StepCounterScreen from './StepCounterScreen';
import RewardsScreen from './RewardsScreen';
import WellbeingScreen from './WellbeingScreen';
import HomeScreen from './HomeScreen';
import LanguageScreen from './LanguageScreen';
import TrainerScreen from './TrainerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
          <Stack.Screen name="DietPlanner" component={DietPlannerScreen} options={{ headerShown: true }} />
          <Stack.Screen name="MealTracker" component={MealTrackerScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: true }} />
          <Stack.Screen name="TaskManager" component={TaskManagerScreen} options={{ headerShown: true }} />
          <Stack.Screen name="StepCounter" component={StepCounterScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Rewards" component={RewardsScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Wellbeing" component={WellbeingScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Trainer" component={TrainerScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}