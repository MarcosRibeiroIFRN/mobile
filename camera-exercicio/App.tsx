import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture, CameraPictureOptions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Sharing from 'expo-sharing';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
  
    return <View><Text>Solicitando permissão da câmera...</Text></View>;
  }

  if (!permission.granted) {
  
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Permissão da câmera é necessária.</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const options: CameraPictureOptions = { quality: 1, base64: false, skipProcessing: true };
      const capturedPhoto = await cameraRef.current.takePictureAsync(options);
      if (capturedPhoto) {
        setPhoto(capturedPhoto);
      }
    }
  }

  async function share() {
    if (photo && await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(photo.uri);
    } else {
      alert('Compartilhamento não disponível neste dispositivo');
    }
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <>
          <Image source={{ uri: photo.uri }} style={styles.preview} />
          <Button title="Compartilhar" onPress={share} />
          <Button title="Tirar outra" onPress={() => setPhoto(null)} />
        </>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Trocar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>📸</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 32,
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000080',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
