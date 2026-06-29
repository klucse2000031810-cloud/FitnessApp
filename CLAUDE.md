# CLAUDE.md — FitnessApp Project Context

This file gives a new agent full context about the FitnessApp project that has been built so far, including the user's environment, decisions made, and current state.

---

## 👤 User Profile

- **Name:** Manjunath Reddy
- **Office email:** 2421312@cognizant.com
- **Experience level:** No coding experience — needs step-by-step guidance, one step at a time
- **Location:** Works from office (restricted network) and home
- **Device:** Windows laptop

---

## 🌐 Environment & Constraints

- **Office network** blocks most external websites and sign-ins (Supabase, Firebase, etc. cannot be accessed from office)
- **Home WiFi** is available and works for most things
- **Mobile hotspot** has been used successfully to push to GitHub when office network blocks it
- **VS Code** is pre-installed on office laptop
- User does NOT have admin rights to install software freely at office — but Node.js, Git, and npm were already available
- **Phone:** Used for Expo Go testing and accessing external services (Supabase, Google AI Studio)

---

## ✅ What's Already Installed

| Tool | Version |
|---|---|
| Node.js | v22.17.1 |
| npm | 10.9.2 |
| Git | 2.51.0 (Windows) |
| VS Code | Already installed |
| Expo Go | Installed on phone |

---

## 📁 Project Location

```
C:\Users\2421312\FitnessApp
```

---

## 🐙 GitHub Repository

- **URL:** https://github.com/klucse2000031810-cloud/FitnessApp
- **Branch:** main
- **Status:** Active, all screens pushed successfully
- Git identity is auto-configured as `Manjunath Reddy <2421312@cognizant.com>`

### How to push code
Always use these three commands in sequence:
```bash
git add .
git commit -m "Your message here"
git push origin main
```

If GitHub is blocked by office network, switch laptop to **phone's mobile hotspot** and retry.

---

## 🗄️ Supabase (Database & Auth)

- **Project URL:** https://fjrfwfhnqxapnjwfoira.supabase.co
- **Publishable Key:** sb_publishable_390hpd2FXIXd9hc-FMa2aQ_GX2oj9bf
- **Secret Key:** sb_secret_Kmp2LjMqfut3u8qL-13cNA-iyBGwKeH *(keep safe, don't share publicly)*
- **Supabase config file:** `supabase.js` in project root

### supabase.js content
```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fjrfwfhnqxapnjwfoira.supabase.co';
const supabaseKey = 'sb_publishable_390hpd2FXIXd9hc-FMa2aQ_GX2oj9bf';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Database Tables Created
- **profiles** table with columns: `id`, `name`, `age`, `gender`, `height`, `weight`, `goal` (all text type, RLS enabled)

---

## 🤖 Google Gemini AI

- **API Key:** AQ.Ab8RN6JyPtBx1T1un4t3qcquGLKSDR1TbkudzoWbhmhRHVkX6g
- **Model used:** `gemini-pro`
- **Package:** `@google/generative-ai`
- Used in: `DietPlannerScreen.js` and `WellbeingScreen.js`

---

## 📦 Tech Stack

| Layer | Tool | Package |
|---|---|---|
| App Framework | React Native + Expo | `create-expo-app` |
| Database & Auth | Supabase | `@supabase/supabase-js` |
| AI Assistant | Google Gemini | `@google/generative-ai` |
| Navigation | React Navigation | `@react-navigation/native`, `@react-navigation/stack` |
| Food Scanning | Open Food Facts API | (fetch, no package needed) |
| Step Tracking | Expo Sensors | `expo-sensors` |
| Camera | Expo Camera | `expo-camera`, `expo-barcode-scanner` |
| Screen Safety | React Native Safe Area | `react-native-screens`, `react-native-safe-area-context` |

---

## 📱 App Screens Built

All screens are complete and pushed to GitHub.

| Screen File | Route Name | Description |
|---|---|---|
| `LoginScreen.js` | `Login` | Email/password login via Supabase auth. On success navigates to `Home` |
| `SignUpScreen.js` | `SignUp` | New user registration via Supabase auth |
| `ProfileScreen.js` | `Profile` | Collects name, age, gender, height, weight, goal. Saves to Supabase `profiles` table |
| `DietPlannerScreen.js` | `DietPlanner` | AI-generated weekly diet plan using Gemini API |
| `MealTrackerScreen.js` | `MealTracker` | Food search by barcode using Open Food Facts API. Tracks daily calories/protein/fat/carbs |
| `WorkoutScreen.js` | `Workout` | Lists workout videos from Supabase `workouts` storage bucket |
| `TaskManagerScreen.js` | `TaskManager` | Add/complete/delete tasks with progress bar |
| `StepCounterScreen.js` | `StepCounter` | Step count using `expo-sensors` Pedometer. Shows calories, distance, goal progress |
| `RewardsScreen.js` | `Rewards` | Coin system, streak tracker, 1-year gift progress, achievement badges |
| `WellbeingScreen.js` | `Wellbeing` | Mood check-in with Gemini AI support messages. Mood history tracker |
| `HomeScreen.js` | `Home` | Dashboard grid linking to all screens |

---

## 🗺️ Current App.js (Navigation)

```javascript
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
import WellbeingScreen from './WellbeingScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DietPlanner" component={DietPlannerScreen} />
        <Stack.Screen name="MealTracker" component={MealTrackerScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="TaskManager" component={TaskManagerScreen} />
        <Stack.Screen name="StepCounter" component={StepCounterScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="Wellbeing" component={WellbeingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## ✅ Completed Phases

- [x] Phase 1 — Project setup, Node/Git/GitHub
- [x] Phase 2 — Supabase auth, Login, SignUp, Profile screens
- [x] Phase 3 — AI Diet Planner (Gemini)
- [x] Phase 4 — Meal Tracker + Food Scanner (Open Food Facts)
- [x] Phase 5 — Workout Video Library (Supabase Storage)
- [x] Phase 6 — Task Manager
- [x] Phase 7 — Step Counter (expo-sensors)
- [x] Phase 8 — Rewards & Coins System
- [x] Phase 9 — Mental Wellbeing (Gemini AI mood support)
- [x] Home Dashboard connecting all screens

---

## ⏳ Remaining Phases

- [ ] Phase 10 — Multilingual support (Hindi, Tamil, Telugu, etc. via react-i18next)
- [ ] Phase 11 — Trainer Marketplace + Razorpay payments
- [ ] Phase 12 — UI Themes + Age-based Action Figure characters
- [ ] Phase 13 — Testing, bug fixes, App Store / Play Store upload

---

## 📲 Testing Status

- **Expo Go** is installed on user's phone
- App has **not been successfully tested on phone yet**
- Attempts made: LAN mode (`--lan`), tunnel mode (`--tunnel`), localhost, manual URL entry
- All failed with "Something went wrong" in Expo Go
- **Next thing to try:** Connect laptop to phone's mobile hotspot, then run `npx expo start --lan` and scan QR code
- The app IP shown by Metro: `exp://192.168.0.108:8081`

---

## 💡 How to Guide This User

- Give instructions **one step at a time** — never show multiple steps at once
- Always end with **"Tell me what you see! 👍"** to confirm before proceeding
- When the user says "then" or "done", give the next single step
- If there's an error, ask them to paste the full error message
- Use simple language — no technical jargon without explanation
- Be encouraging and patient
- When pushing to GitHub, always give all 3 git commands one at a time
- If office network blocks GitHub, remind user to switch to phone hotspot

---

## 🚀 How to Run the App

```bash
cd C:\Users\2421312\FitnessApp
npx expo start --lan
```

Then scan QR code with Expo Go app on phone (phone and laptop must be on same network).
