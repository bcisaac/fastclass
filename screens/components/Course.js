import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const getCourseNumber = course => (
    course.id.slice(1)
)

const Course = ({course, isSelected, select, isDisabled, view}) => (
  <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']}
      onPress={() => { if (!isDisabled) select(course); }}
      onLongPress={() => view(course)}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);
  
/* 
Ivory: #EEEDE7
  Ivory Disabled: #E2DED0
Pewter: #B9B7BD
  Gray: #868B8E
  Purple Pewter: #C9CAD8

Scallop Seashell: #E7D2CC
  Darker: #F0B4A9
*/
const courseButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};
const styles = StyleSheet.create({
  courseButtonSelected: {
    ...courseButtonBase,
    backgroundColor: '#868B8E',
  },
  courseButtonDisabled: {
    ...courseButtonBase,
    backgroundColor: '#C9CAD8'
  },
  courseButton: {
    ...courseButtonBase,
    backgroundColor: '#B9B7BD',
  },
  courseText:{
      color: '#EEEDE7',
      fontSize: 12,
      textAlign: 'center',
  },
});

export default Course;
