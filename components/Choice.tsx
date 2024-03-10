import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ChoiceType} from './Question';

interface ChoiceProp {
  selected: boolean;
  choiceData: ChoiceType;
  clickChoice: (key: string) => void;
}

const Choice = ({selected, choiceData, clickChoice}: ChoiceProp) => {
  const onPress = () => clickChoice(choiceData.key);
  return (
    <TouchableOpacity style={styles.choice} onPress={onPress}>
      <View style={styles.outerRadio}>
        {selected ? <View style={styles.innerRadio} /> : null}
      </View>
      <View style={styles.label}>
        <Text>{choiceData.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  choice: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  outerRadio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3370ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  innerRadio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#3370ff',
  },
  label: {
    justifyContent: 'center',
  },
});

export default Choice;
