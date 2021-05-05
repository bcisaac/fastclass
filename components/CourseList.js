import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { getCourseTerm, terms } from '../utils/course';
import CourseSelector from './CourseSelector'
import TermSelector from './TermSelector'

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Spring');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return(
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <CourseSelector courses={termCourses} view={view} />
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