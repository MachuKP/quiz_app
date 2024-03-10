import {FlatList, StyleSheet, Text, View} from 'react-native';
import Choice from './Choice';
import {useState} from 'react';
import { shuffleArray } from '../utils/helper';

export interface ChoiceType {
  key: string;
  label: string;
}

interface QuestionProp {
  question: string;
  quizKey: string;
  index: number;
  choices: ChoiceType[];
  handleAnswer: (quiz: string, ans: string) => void;
}

const Question = ({question, quizKey, index, choices, handleAnswer}: QuestionProp) => {
  const [answer, setAnswer] = useState('');

  const handleClickChoice = (key: string) => {
    setAnswer(key);
    handleAnswer(quizKey, key)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {index + 1}. {question}
      </Text>
      <FlatList
        data={choices}
        renderItem={({item}) => (
          <Choice
            selected={answer === item.key}
            choiceData={item}
            clickChoice={handleClickChoice}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Question;
