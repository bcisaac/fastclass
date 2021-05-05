import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {firebase} from './utils/firebase';

import UserContext from './UserContext';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import RegisterScreen from './screens/RegisterScreen';



const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) => (
  user && user.uid
  ? <Button title="Logout" color="#C9CAD8"
      onPress={() => firebase.auth().signOut()}
    />
  : <Button title="SignIn" color="#C9CAD8"
      onPress={() => navigation.navigate('RegisterScreen')}
    />
);

const App = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = snap => {
        setUser({ uid:auth.uid, ...snap.val() });
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return (
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name="ScheduleScreen"
              component={ScheduleScreen}
              options={{ title: 'Schedule'}}
              options={({navigation}) => ({
                title: "Schedule",
                headerRight: () => (
                  <SignInButton navigation={navigation} user={user} />
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
            component={RegisterScreen}
            options={{ title: 'Login'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;