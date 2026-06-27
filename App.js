import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';
import DietPlannerScreen from './DietPlannerScreen';
import MealTrackerScreen from './MealTrackerScreen';
import WorkoutScreen from './WorkoutScreen';
import TaskManagerScreen from './TaskManagerScreen';
import StepCounterScreen from './StepCounterScreen';
import RewardsScreen from './RewardsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DietPlanner" component={DietPlannerScreen} />
        <Stack.Screen name="MealTracker" component={MealTrackerScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="TaskManager" component={TaskManagerScreen} />
        <Stack.Screen name="StepCounter" component={StepCounterScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}