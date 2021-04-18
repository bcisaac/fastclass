import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { terms } from './utils/course';

const TermButton = ({term, setSelectedTerm, isActive}) => (
  <TouchableOpacity style={styles[isActive ?'termButtonActive' : 'termButton']}
      onPress={() => setSelectedTerm(term)}>
      <Text style={styles.termText}>{term}</Text>
  </TouchableOpacity>
);
  
const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
  <View style={styles.termSelector}>
      { 
        terms.map(term => (
            <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
            isActive={term === selectedTerm}
            />
        ))
      }
  </View>
);

/* 
Ivory: #EEEDE7
Gray: #868B8E
Pewter: #B9B7BD
Scallop Seashell: #E7D2CC
  Darker: #F0B4A9
*/

const termButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 40,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};
const styles = StyleSheet.create({
  termSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  termButton: {
    ...termButtonBase,
    backgroundColor: '#E7D2CC',
  },
  termButtonActive: {
    ...termButtonBase,
    backgroundColor: '#F0B4A9',
  },
  termText: {
    color: '#EEEDE7',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default TermSelector;