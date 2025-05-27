import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [user, setUser] = useState('');
  const [pw, setPw] = useState('');

  const login = () => {
    if (user === '' || pw === '') {
      alert('Favor de completar todos los campos');
    } else {
      if (user === 'admin' && pw === '123') {
        router.push('/(tabs)/Dashboard');
      } else {
        alert('Usuario y contraseña incorrectos');
      }
    }
  };

  const router = useRouter();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.contendorPrincipal}>
        {/* Header Section con diseño mejorado */}
        <View style={styles.headerSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>📚</Text>
          </View>
          <Text style={styles.titulo}>Bienvenido a la libreria virtual</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitulo}>
            Inicie sesión para continuar
          </Text>
          <Text style={styles.linkText}>
            ¿No tienes una cuenta de usuario?
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.linkTextBold}>
                {"\n"}Registrarte aquí
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <View style={styles.cardContent}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>👤 Usuario</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su nombre de usuario"
                  placeholderTextColor="#999"
                  value={user}
                  onChangeText={setUser}
                />
                <Text style={styles.inputIcon}>👤</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>🔒 Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su contraseña"
                  placeholderTextColor="#999"
                  value={pw}
                  onChangeText={setPw}
                  secureTextEntry={true}
                />
                <Text style={styles.inputIcon}>🔒</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={login} style={styles.button1}>
                <Text style={styles.buttonIcon}>🚀</Text>
                <Text style={styles.buttonText}>
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Decorative footer */}
        <View style={styles.footerDecoration}>
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.decorativeCircle3} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#F4E7E1',
    flex: 1,
  },
  contendorPrincipal: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 155, 69, 0.15)',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'rgba(255, 155, 69, 0.3)',
    shadowColor: '#FF9B45',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  iconText: {
    fontSize: 40,
  },
  titulo: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 15,
    lineHeight: 40,
  },
  divider: {
    width: 120,
    height: 4,
    backgroundColor: '#FF9B45',
    marginVertical: 15,
    borderRadius: 2,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 22,
    color: '#D5451B',
    fontWeight: '600',
    marginBottom: 15,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#D5451B',
    marginTop: 10,
  },
  linkTextBold: {
    color: '#521C0D',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginHorizontal: 5,
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 155, 69, 0.2)',
    marginBottom: 30,
  },
  cardContent: {
    padding: 35,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 10,
    color: '#D5451B',
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#FAFAFA',
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 18,
    paddingRight: 55,
    borderWidth: 2,
    borderColor: 'rgba(213, 69, 27, 0.2)',
    shadowColor: '#D5451B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    color: '#333',
  },
  inputIcon: {
    position: 'absolute',
    right: 18,
    top: 18,
    fontSize: 18,
    opacity: 0.7,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  button1: {
    backgroundColor: '#FF9B45',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 30,
    minWidth: 220,
    elevation: 8,
    shadowColor: '#FF9B45',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerDecoration: {
    position: 'relative',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 155, 69, 0.1)',
    top: -30,
    left: 40,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(213, 69, 27, 0.1)',
    top: 10,
    right: 70,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(82, 28, 13, 0.1)',
    bottom: 10,
    left: '50%',
    marginLeft: -35,
  },
});