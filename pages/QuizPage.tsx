import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
//component
import Button from '../components/Button';
import Question from '../components/Question';
import Title from '../components/Title';
//data
import question from '../data/Question.json';
import correctedAnswer from '../data/Anwser.json';
//utils
import {shuffleArray} from '../utils/helper';
//store
import {useAppDispatch, useAppSelector} from '../store/store';
import {addScore, setValidate} from '../store/slices/quizSlice';

interface QuizProp {
  onSubmit: () => void;
}

const QuizPage = ({onSubmit}: QuizProp) => {
  const {questions} = question;
  const {answer} = correctedAnswer;
  const questionAnswer = useRef<{[key: string]: string}>({});
  const dispatch = useAppDispatch();
  const {validateSubmit} = useAppSelector(state => state.quizData);

  useEffect(() => {
    setupQuestionAnswer();
  }, []);

  const setupQuestionAnswer = () => {
    const temp: {[key: string]: string} = {};
    for (let i = 0; i < questions.length; i++) {
      temp[questions[i].key] = '';
    }
    questionAnswer.current = temp;
  };

  const onAnswerQuestion = (quiz: string, ans: string) => {
    questionAnswer.current[quiz] = ans;
    checkValidateQuiz();
  };

  const checkValidateQuiz = () => {
    for (const key in questionAnswer.current) {
      if (!questionAnswer.current[key]) {
        return;
      }
    }
    dispatch(setValidate(true));
  };

  const calculateScore = () => {
    let score = 0;
    for (const key in answer) {
      if (answer[key as keyof object] === questionAnswer.current[key]) {
        score++;
      }
    }
    dispatch(addScore(score));
  };

  const submitQuestion = () => {
    calculateScore();
    questionAnswer.current = {};
    dispatch(setValidate(false));
    onSubmit();
  };

  const questionNode = React.useMemo(
    () => (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={shuffleArray(questions)}
        renderItem={({item, index}) => (
          <Question
            question={item.question}
            quizKey={item.key}
            choices={shuffleArray(item.choices)}
            index={index}
            handleAnswer={onAnswerQuestion}
          />
        )}
        keyExtractor={item => item.key}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Title>Quiz</Title>
      {questionNode}
      <View style={styles.buttonContainer}>
        <Button
          handleClick={submitQuestion}
          disableable={true}
          validate={validateSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default QuizPage;
