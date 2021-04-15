import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';

import CourseList from './components/CourseList';

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

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
      <CourseList courses = {schedule.courses} />
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

export default App
