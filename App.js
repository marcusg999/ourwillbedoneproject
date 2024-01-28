import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { launchCamera } from 'react-native-camera';

const App = () => {
  const [will, setWill] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAddBeneficiary = () => {
    // Implement logic to add a beneficiary
  };

  const handleRecordVideo = async () => {
    try {
      const { uri } = await launchCamera({ mediaType: 'video' });
      // Implement logic to save the video URI
    } catch (e) {
      console.error('Error recording video:', e);
    }
  };

  const handleSaveWill = () => {
    // Implement logic to save the will
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Type Your Will</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Type your will here..."
              value={will}
              onChangeText={text => setWill(text)}
            />
            <Button title="Save Will" onPress={handleSaveWill} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Record Video Will</Text>
            <Button title="Record Video" onPress={handleRecordVideo} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Add Beneficiary</Text>
            <Button title="+" onPress={() => 
            Alert.alert("Want to add a Beneficiary? This cannot be undone without MFA.", "Click to create Beneficiary profile ", [
              { text: "Yes", onPress: () => console.log ("Yes")},
              {text: "No" , onPress: () => console.log ("No")}
            ])
            } />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default App;