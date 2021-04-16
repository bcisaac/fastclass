import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const getCourseNumber = course => (
    course.id.slice(1)
)

const Course = ({course, isSelected, select, isDisabled}) => (
  <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']}
      onPress={() => { if (!isDisabled) select(course); }}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);
  
/* 
Ivory: #EEEDE7
  Ivory Disabled: #E2DED0
Gray: #868B8E
Pewter: #B9B7BD
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
    backgroundColor: '#E2DED0'
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
