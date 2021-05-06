import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserContext from './screens/UserContext';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen'
import CourseEditScreen from './screens/CourseEditScreen';
import { registerRootComponent } from 'expo';
import RegisterScreen from './screens/RegisterScreen';
import {firebase} from './utils/firebase';


const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) => (
  user && user.uid
  ? <Button title="Logout" color="#E7D2CC"
      onPress={() => firebase.auth().signOut()}
    />
  : <Button title="SignIn" color="#E7D2CC"
      onPress={() => navigation.navigate('RegisterScreen')}
    />
);

const App = () => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return (
      <UserContext.Provider value={auth}>
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name="ScheduleScreen"
              component={ScheduleScreen}
              options={({navigation}) => ({
                title: 'Schedule',
                headerRight: () => (
                  <SignInButton navigation={navigation} user={auth} />
              ),
            })}
            />
            
            <Stack.Screen name="CourseDetailScreen"
              component={CourseDetailScreen}
              options={{ title: 'Course Details'}} 
            />

            <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}}
            />

            <Stack.Screen name="RegisterScreen" 
              component={RegisterScreen} />

          </Stack.Navigator>
        </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;