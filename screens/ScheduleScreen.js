import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';

import UserContext from './UserContext';
import CourseList from './components/CourseList';
import CourseEditScreen from './CourseEditScreen';

const ScheduleScreen = ({navigation}) => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const user = useContext(UserContext)
  const canEdit = user && user.role === 'admin'

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php'

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Banner title = {schedule.title} />
      <CourseList courses = {schedule.courses} view={view}/>
    </SafeAreaView>
  );
};

const Banner = ({title}) => (
  <Text style  = {styles.bannerStyle}>{title || '[loading...]'}</Text>
);

/* 
  Ivory: #EEEDE7
  Gray: #868B8E
  Pewter: #B9B7BD
  Scallop Seashell: #E7D2CC
    Darker: #F0B4A9
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDE7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  bannerStyle: {
    fontFamily: 'Georgia',
    color: '#F0B4A9',
    fontSize:32,
  },
});

export default ScheduleScreen
