import {StyleSheet, Text, View} from 'react-native';

interface TitleProp {
    children: string | JSX.Element | JSX.Element[]
}

const Title = ({children}: TitleProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Title;
