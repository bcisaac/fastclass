import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';

import CourseList from './components/CourseList';

const schedule = {
  "title": "CS Courses for 2020-2021",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title = {schedule.title} />
      <CourseList courses = {schedule.courses} />
    </SafeAreaView>
  );
}

const Banner = ({title}) => (
  <Text style  = {styles.bannerStyle}>{title}</Text>
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
