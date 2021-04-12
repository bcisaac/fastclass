import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const getCourseNumber = course => (
    course.id.slice(1)
)

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
courseButton: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#B9B7BD',
},
courseText:{
    color: '#EEEDE7',
    fontSize: 12,
    textAlign: 'center',
},
});

  export default Course;
