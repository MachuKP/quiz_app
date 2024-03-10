import {FlatList, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';
import {useAppSelector} from '../store/store';
import {useEffect, useState} from 'react';

interface LeaderboardProp {
  onClick: () => void;
}

const LeaderBoardPage = ({onClick}: LeaderboardProp) => {
  const {dataLeaderboard} = useAppSelector(state => state.quizData);
  const [sortedScore, setSortedScore] = useState<number[]>([]);
  useEffect(() => {
    sortLeaderboard();
  }, []);

  const sortLeaderboard = () => {
    let temp = [...dataLeaderboard];
    temp.sort((a, b) => {
      return b - a;
    });
    setSortedScore(temp)
  };

  return (
    <View style={styles.container}>
      <Title>LeaderBoardPage</Title>
      <FlatList
        data={sortedScore}
        renderItem={({item, index}) => (
          <View key={index} style={styles.scoreItem}>
            <Text style={styles.scoreText}>{item}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button handleClick={onClick}>Retry</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10
  }
});

export default LeaderBoardPage;
