import {Text, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from './button.styles';
import {IButtonProps} from './button.props';

const Button = ({text, textStyles, buttonStyles, onPress}: IButtonProps) => {
  const styles = createStyles();
  return (
    <Pressable style={[styles.container, buttonStyles]} onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
