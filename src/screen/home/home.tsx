import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './homeStyle';
import {useSelector, useDispatch} from 'react-redux';
import {todoAdd, todoDelete, todoToggled} from '../../reduxs/todos/todos.slice';
import {TextFontExtra, TextFontRG} from '../../component/text';
import {Colors, SizeFonts} from '../../styles';
import TextFontInput from '../../component/inputs/textFontInput';
import Button from '../../component/buttons/button';
const Home = () => {
  const [text, setText] = useState<string>('');
  const data = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const addData = (text: string, id: number): void => {
    let initialPayload = {
      id,
      name: text,
      completed: false,
    };
    dispatch(todoAdd(initialPayload));
    setText('');
  };
  console.log(data.todo);

  return (
    <View style={styles.container}>
      <TextFontExtra size={SizeFonts.h4} color={Colors.black}>
        Todos
      </TextFontExtra>
      <TextFontInput
        style={styles.input}
        value={text}
        onChange={e => setText(e)}
        placeholder={'Add Todo..'}
      />
      <Button
        onPress={() => addData(text, data.todo.length)}
        radius={5}
        backgroundColor={Colors.gray1}
        text={'Add A To Do'}
        fontSize={SizeFonts.l}
        fontColor={Colors.white}
        style={styles.buttonAdd}
      />
      <FlatList
        data={data.todo}
        renderItem={({item}) => {
          return (
            <View style={styles.listContainer}>
              <View style={styles.checkContainer}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(todoToggled(item));
                  }}
                  style={styles.buttonCheck(item.completed)}
                />
              </View>
              <View style={styles.titleContainer}>
                <TextFontRG
                  size={SizeFonts.h4}
                  color={item.completed ? Colors.gray1 : Colors.black}>
                  {item.name}
                </TextFontRG>
              </View>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => {
                  dispatch(todoDelete(item));
                }}>
                <TextFontRG size={SizeFonts.l} color={Colors.red}>
                  {'Delete'}
                </TextFontRG>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
