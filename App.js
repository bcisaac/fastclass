import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const CourseList = ({courses}) => (
  <ScrollView>
    <View style={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </View>
  </ScrollView>
);

const getCourseNumber = course => (
  course.id.slice(1)
);

const Course = ({course}) => (
  <TouchableOpacity style={styles.courseButton}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
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
    fontFamily: "Garamond",
    color: '#868B8E',
    fontSize:32,
  },
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseButton: {
    flex: 1, borderRadius: 5,
    justifyContent: 'center',
    alignnItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#F0B4A9',
  },
  courseText:{
    color: '#EEEDE7',
    fontSize: 12,
    textAlign: 'center'
  },
});

export default App
