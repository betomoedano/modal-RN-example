import * as React from 'react';
import {Text, Modal, View, Button, Switch} from 'react-native';

export default function MyModal({isModalOpen, isDarkMode, setIsModalOpen}) {
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState(false);
  const [switch3, setSwitch3] = React.useState(false);

  const modalOptions = [
    {
      title: '💡 Tips',
      value: switch1,
      setSwitch: setSwitch1,
    },
    {
      title: '🌕 Set dark mode',
      value: switch2,
      setSwitch: setSwitch2,
    },
    {
      title: '✈️ Airplane mode',
      value: switch3,
      setSwitch: setSwitch3,
    },
  ];

  const modalContainerStyle = {
    flex: 1,
    justifyContent: 'flex-end',
  };
  const modalStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    alignItems: 'center',
    margin: 20,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  };
  const titleStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };
  const optionTextStyle = {
    fontSize: 18,
    fontWeight: '500',
    color: isDarkMode ? 'white' : 'black',
  };
  const optionContainer = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  };

  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
        <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Set your settings</Text>
            {modalOptions.map((option, index) => {
              return (
                <View style={optionContainer} key={index}>
                  <Text style={optionTextStyle}>{option.title}</Text>
                  <Switch
                    value={option.value}
                    onValueChange={option.setSwitch}
                  />
                </View>
              );
            })}
            <Button
              title="Close and save"
              onPress={() => setIsModalOpen(!setIsModalOpen)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
