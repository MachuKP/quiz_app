import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {store} from './store/store';
import {Provider} from 'react-redux';

import LeaderBoardPage from './pages/LeaderboardPage';
import QuizPage from './pages/QuizPage';

function App(): React.JSX.Element {
  const [page, setPage] = useState('quiz');
  const handleClickReset = () => {
    setPage('quiz');
  };
  const handleClickSubmit = () => {
    setPage('leaderboard');
  };
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.layout}>
          {page === 'quiz' ? (
            <QuizPage onSubmit={handleClickSubmit} />
          ) : (
            <LeaderBoardPage onClick={handleClickReset} />
          )}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 20,
  },
});

export default App;
