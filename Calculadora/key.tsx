// Key.tsx
import React from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

interface KeyProps {
  label: string;
  onClick: () => void;
}

export default function Key({ label, onClick }: KeyProps) {
  return (
    <TouchableHighlight onPress={onClick} style={styles.button}>
      <ImageBackground
        source={{
          uri: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/38092_3AE22983E1CA775F.jpeg?w=1200&h=900&crop=0',
        }}
        style={styles.background}
        imageStyle={styles.imageStyle}
        resizeMode="cover"
      >
        <Text style={styles.label}>{label}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const { width } = Dimensions.get('window');
const buttonSize = width / 4 - 15;

const styles = StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  label: {
    fontSize: 26,
    color: 'red',
    fontWeight: 'bold',
  },
});
