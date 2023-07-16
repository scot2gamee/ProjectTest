import React, {memo, useRef} from 'react';
import type {CSSProperties} from 'react';
import {Text, View} from 'react-native';
import type {
  NativeSyntheticEvent,
  LayoutChangeEvent,
  TextLayoutEventData,
} from 'react-native';
import {Fonts} from '../../../assets/fonts';

interface ITextProps {
  children?: React.ReactNode;
  style?: React.CSSProperties | object;
  testId?: string;
  color?: string;
  size?: number;
  limit?: number;
  language?: 'th' | 'en';
  textAlign?: 'auto' | 'left' | 'right' | 'center';
  mr?: number;
  ml?: number;
  mb?: number;
  mt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  pt?: number;
  loading?: boolean;
  numberOfline?: number;
  onTextLayout?: (e: NativeSyntheticEvent<TextLayoutEventData>) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress?: () => void;
}

interface ITextComponent {
  props: ITextProps;
  font: string;
}

const scale = (style?: React.CSSProperties, size?: number) => {
  return {
    fs: size ?? style?.fontSize ?? 16,
  };
};

const TextComponent = ({props, font}: ITextComponent) => {
  const styleLayout = {
    marginRight: props.mr,
    marginLeft: props.ml,
    marginTop: props.mt,
    marginBottom: props.mb,
    paddingRight: props.pr,
    paddingLeft: props.pl,
    paddingTop: props.pt,
    paddingBottom: props.pb,
  };

  return (
    <Text
      onTextLayout={props?.onTextLayout}
      onLayout={props.onLayout}
      onPress={props?.onPress}
      numberOfLines={props.limit}
      ellipsizeMode="tail"
      style={[
        props.style,
        {
          ...styleLayout,
          ...props,
          fontSize: scale(props.style, props.size).fs,
          color: props.color,
          fontFamily: font,
          textAlign: props.textAlign,
        },
      ]}
      testID={props.testId}>
      {props.children}
    </Text>
  );
};

export const TextFontRG = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptRegular,
  }),
);

export const TextFontMD = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptMedium,
  }),
);

export const TextFontSM = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptSemiBold,
  }),
);

export const TextFontBold = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptBold,
  }),
);

export const TextFontLight = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptLight,
  }),
);

export const TextFontExtra = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptExtraBold,
  }),
);

export const TextFontThin = memo((props: ITextProps) =>
  TextComponent({
    props,
    font: Fonts.PromptThin,
  }),
);
