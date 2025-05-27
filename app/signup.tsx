import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CrearUsuario() {

  // Ruta para manejar el estado del usuario y contraseña
  const router = useRouter();

  // Estado para manejar los campos de entrada

  // Estaddo para manejar el campo de nombre de usuario
  const [userName, setUserName] = React.useState('');

  // Estado para manejar el campo de Nombre Personal (Nombre Real) del usuario
  const [nameFull, setNameFull] = React.useState('');

  // Estado para manejar el campo de Apellido del usuario
  const [lastName, setLastName] = React.useState('');

  // Estado para manejar el campo de correo electrónico del usuario
  const [email, setEmail] = React.useState('');

  // Estado para manejar el campo de teléfono del usuario
  const [phone, setPhone] = React.useState('');

  // Estado para manejar el campo de contraseña del usuario
  const [password, setPassword] = React.useState('');

  // Estado para manejar el campo de confirmación de contraseña del usuario
  const [confirmPassword, setConfirmPassword] = React.useState('');
  
  const registrase = () => {
    if (
      userName === '' ||
      nameFull === '' ||
      lastName === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('Favor de completar todos los campos');
    } else {
      // Aquí la condición corregida:
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
      } else {
        router.push('/(tabs)/Dashboard');
      }
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.contendorPrincipal}>
        {/* Header Section mejorado */}
        <View style={styles.headerSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>👋</Text>
          </View>
          <Text style={styles.titulo}>BIENVENIDO/A</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitulo}>Crear nueva cuenta de usuario</Text>
          <Text style={styles.linkText}>
            Si ya tiene una cuenta, por favor.              
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={styles.linkTextBold}>
                {"\n"}Iniciar sesión aquí
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <View style={styles.cardContent}>
            {/* Primera fila - Usuario */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>👤 Nombre de Usuario</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input} 
                  placeholder="Cree un nombre de usuario" 
                  placeholderTextColor="#999"
                  value={userName}
                  onChangeText={setUserName}
                />
                <Text style={styles.inputIcon}>👤</Text>
              </View>
            </View>

              <View style={[styles.inputGroup]}>
                <Text style={styles.label}>🏷️ Nombre</Text>
                <View style={styles.inputContainer}>
                  <TextInput 
                    style={[styles.input]}
                    placeholder="Ingrese su nombre" 
                    placeholderTextColor="#999"
                    value={nameFull}
                    onChangeText={setNameFull}
                  />
                  <Text style={styles.inputIconSmall}>🏷️</Text>
                </View>
              </View>

              <View style={[styles.inputGroup]}>
                <Text style={styles.label}>📝 Apellido</Text>
                <View style={styles.inputContainer}>
                  <TextInput 
                    style={[styles.input]} 
                    placeholder="Ingrese su apellido" 
                    placeholderTextColor="#999" 
                    value={lastName}
                    onChangeText={setLastName}
                  />
                  <Text style={styles.inputIconSmall}>📝</Text>
                </View>
              </View>

            {/* Tercera fila - Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>📧 Correo electrónico</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su correo electrónico"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.inputIcon}>📧</Text>
              </View>
            </View>

            {/* Cuarta fila - Teléfono */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>📱 Teléfono</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input}
                  placeholder="Ingrese su número telefónico"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
                <Text style={styles.inputIcon}>📱</Text>
              </View>
            </View>

              <View style={[styles.inputGroup]}>
                <Text style={styles.label}>🔒 Contraseña</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input]}
                    placeholder="Cree una contraseña segura"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Text style={styles.inputIcon}>🔒</Text>
                </View>
              </View>

              <View style={[styles.inputGroup]}>                
                <Text style={styles.label}>🔐 Confirmar Contraseña</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input]}
                    placeholder="Repita su contraseña"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <Text style={styles.inputIconSmall}>🔐</Text>
                </View>
              </View>


            {/* Botón de registro */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={registrase} style={styles.button1}>
                <Text style={styles.buttonIcon}>✨</Text>
                <Text style={styles.buttonText}>Crear Cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Decorative footer */}
        <View style={styles.footerDecoration}>
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.decorativeCircle3} />
          <View style={styles.decorativeCircle4} />
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
    marginTop: 60,
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 155, 69, 0.15)',
    borderRadius: 45,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'rgba(255, 155, 69, 0.3)',
    shadowColor: '#FF9B45',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  iconText: {
    fontSize: 35,
  },
  titulo: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 10,
  },
  divider: {
    width: 100,
    height: 4,
    backgroundColor: '#FF9B45',
    marginVertical: 12,
    borderRadius: 2,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#D5451B',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linkText: {
    textAlign: 'center', 
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D5451B',
    marginTop: 13,
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
    marginBottom: 25,
  },
  cardContent: {
    padding: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfWidth: {
    width: '48%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 8,
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
    paddingHorizontal: 18,
    paddingVertical: 15,
    paddingRight: 50,
    borderWidth: 2,
    borderColor: 'rgba(213, 69, 27, 0.2)',
    shadowColor: '#D5451B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    color: '#333',
  },
  smallInput: {
    paddingHorizontal: 15,
    paddingRight: 40,
    fontSize: 15,
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontSize: 16,
    opacity: 0.7,
  },
  inputIconSmall: {
    position: 'absolute',
    right: 13,
    top: 16,
    fontSize: 14,
    opacity: 0.7,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  button1: {
    backgroundColor: '#FF9B45',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    minWidth: 240,
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
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerDecoration: {
    position: 'relative',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 155, 69, 0.1)',
    top: -20,
    left: 30,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(213, 69, 27, 0.1)',
    top: 0,
    right: 60,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(82, 28, 13, 0.1)',
    bottom: -10,
    left: '40%',
  },
  decorativeCircle4: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 155, 69, 0.08)',
    bottom: 20,
    right: '30%',
  },
});