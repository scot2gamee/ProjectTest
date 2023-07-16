import React from 'react';
import type {ViewStyle} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {button} from './buttons.style';
import {Colors} from '../../styles';
import {TextFontSM} from '../text';

export interface IButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  fontColor?: string;
  backgroundColor?: string;
  text?: string;
  testId?: string;
  fullScreen?: boolean;
  radius?: number;
  radiusColor?: string;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  isOutline?: boolean;
  icon?: React.ReactNode;
  fontSize?: number;
  isRightIcon?: boolean;
}

const colorSet = ({
  fontColor,
  disabled,
}: {
  fontColor?: string;
  disabled?: boolean;
}) => {
  if (disabled) return Colors.OutlintBorder;
  return fontColor;
};

const Button = (props: IButtonProps) => {
  const {
    onPress,
    children,
    isOutline,
    fontColor = Colors.black,
    backgroundColor = Colors.white,
    text,
    testId,
    fullScreen,
    radius = 0,
    disabled = false,
    style,
    radiusColor,
    fontSize = 18,
    isRightIcon = false,
  } = props;

  const outlineStyle = isOutline
    ? {
        borderColor: radiusColor ? radiusColor : Colors.OutlintBorder,
        backgroundColor: Colors.Transparent,
        borderWidth: 1,
      }
    : {};

  const buttonStyle = {
    backgroundColor: disabled ? backgroundColor : backgroundColor,
    color: disabled ? fontColor : fontColor,
    width: fullScreen ? '100%' : 'auto',
    borderRadius: radius,
    opacity: disabled ? 0.4 : 1,
    ...outlineStyle,
    ...style,
  };

  const renderText = props.icon ? (
    <View style={button.iconContainer}>
      {isRightIcon && props.icon}
      <TextFontSM
        style={button.buttonText}
        size={fontSize}
        color={colorSet({fontColor, disabled})}>
        {text}
      </TextFontSM>
      {!isRightIcon && props.icon}
    </View>
  ) : (
    <TextFontSM size={fontSize} color={colorSet({fontColor, disabled})}>
      {text}
    </TextFontSM>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[button.container, buttonStyle]}
      onPress={onPress}
      testID={testId}
      disabled={disabled}>
      {text ? renderText : <View>{children}</View>}
    </TouchableOpacity>
  );
};

export default Button;
