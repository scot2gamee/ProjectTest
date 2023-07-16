import type {StyleProp, ViewStyle, KeyboardType} from 'react-native';

export interface ILabelInput {
  style?: StyleProp<ViewStyle>;
  label?: string;
  onChangeTextMask?: (
    masked: string,
    unmasked: string,
    obfuscated: string,
  ) => void;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  onFocus?: (label: string) => void;
  value: any;
  placeholder?: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  errors?: IInputErrors[];
  editable?: boolean;
  maxLength?: number;
  mask?: any[];
  multiline?: boolean;
  borderColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  height?: number | undefined;
  required?: boolean;
  success?: IInputSuccess;
  errorMessageStyle?: React.CSSProperties | object;
  successMessageStyle?: React.CSSProperties | object;
  errorContainerStyle?: React.CSSProperties | object;
  successContainerStyle?: React.CSSProperties | object;
}

export interface IInputErrors {
  errorMessage: string;
}

export interface IInputSuccess {
  successMessage: string;
}
