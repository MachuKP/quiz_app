import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProp {
  children: string | JSX.Element | JSX.Element[];
  handleClick: () => void;
  disableable?: boolean;
  validate?: boolean;
}

const Button = ({children, handleClick, disableable, validate}: ButtonProp) => {
  const disableStyle = (!validate && disableable) && {backgroundColor: '#808080'}
  return (
    <TouchableOpacity
      disabled={disableable && !validate}
      style={[styles.button, disableStyle]}
      onPress={handleClick}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#3370ff',
    padding: 12,
    borderRadius: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
