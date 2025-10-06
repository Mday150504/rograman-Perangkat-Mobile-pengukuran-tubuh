import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [imt, setImt] = useState(null);
  const [kategori, setKategori] = useState('');

  const hitungIMT = () => {
    if (berat && tinggi) {
      const tMeter = parseFloat(tinggi) / 100; // ubah cm ke meter
      const hasil = parseFloat(berat) / (tMeter * tMeter);
      setImt(hasil.toFixed(2));

      if (hasil < 18.5) {
        setKategori('Kurus');
      } else if (hasil >= 18.5 && hasil < 24.9) {
        setKategori('Normal');
      } else if (hasil >= 25 && hasil < 29.9) {
        setKategori('Berat Badan Berlebih');
      } else {
        setKategori('Obesitas');
      }
    } else {
      setImt(null);
      setKategori('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Indeks Massa Tubuh (IMT)</Text>
      <Text style={styles.subtitle}>M. Dai Misbah - Tugas Individu Pertemuan 3</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Berat Badan (Kg)"
        keyboardType="numeric"
        value={berat}
        onChangeText={setBerat}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan Tinggi Badan (Cm)"
        keyboardType="numeric"
        value={tinggi}
        onChangeText={setTinggi}
      />

      <TouchableOpacity style={styles.button} onPress={hitungIMT}>
        <Text style={styles.buttonText}>Hitung IMT</Text>
      </TouchableOpacity>

      {imt && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>IMT: {imt}</Text>
          <Text style={styles.kategori}>Kategori: {kategori}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F1FAEE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#457B9D',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#1D3557',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E63946',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#A8DADC',
    borderRadius: 12,
    alignItems: 'center',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  kategori: {
    fontSize: 18,
    marginTop: 5,
    color: '#457B9D',
  },
});

export default App;
