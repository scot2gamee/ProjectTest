import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors, SizeFonts} from '../../styles';
import type {ILabelInput} from './input.type';
import {Fonts} from '../../../assets/fonts';

const TextFontInput = (props: ILabelInput) => {
  return (
    <TextInput
      style={[styles.container, props.style]}
      onChangeText={props?.onChange}
      onBlur={props?.onBlur}
      value={props?.value}
      onFocus={() => props.onFocus?.(props.label ?? '')}
      placeholder={props?.placeholder}
      keyboardType={props?.keyboardType}
      secureTextEntry={props?.secureTextEntry}
      textContentType="oneTimeCode"
      autoCorrect={false}
      placeholderTextColor={Colors.gray}
      editable={props?.editable}
      maxLength={props?.maxLength}
      multiline={props?.multiline}
      textAlignVertical={props.multiline ? 'top' : 'center'}
    />
  );
};

export default TextFontInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 13,
    paddingLeft: 13,
    color: Colors.black,
    fontFamily: Fonts.PromptRegular,
    fontSize: SizeFonts.l,
  },
});
