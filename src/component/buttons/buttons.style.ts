import {StyleSheet} from 'react-native';

export const outline = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export const button = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginRight: 10,
  },
});
