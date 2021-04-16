import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { getCourseTerm, getCourseNumber, hasConflict, terms } from './utils/courses';
import CourseSelector from './CourseSelector'
import TermSelector from './TermSelector'

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Spring');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return(
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default CourseList;