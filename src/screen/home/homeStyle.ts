import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: Colors.white,
    height: 80,
    alignItems: 'center',
    ...Colors.shadow,
  },
  textName: {
    fontSize: 18,
    color: '#000000',
  },
  buttonAdd: {
    marginTop: 10,
  },
  checkContainer: {
    width: '20%',
    height: '100%',
    backgroundColor: Colors.Orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCheck: (check: boolean) => ({
    width: 35,
    height: 35,
    backgroundColor: Colors.white,
    borderRadius: 3,
    opacity: check ? 1 : 0.3,
  }),
  titleContainer: {
    width: '60%',
    paddingHorizontal: 10,
  },
  buttonDelete: {
    width: '20%',
    alignItems: 'center',
  },
});
