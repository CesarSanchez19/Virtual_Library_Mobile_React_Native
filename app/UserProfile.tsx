import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useRouter } from 'expo-router'

export default function UserProfile(props: any) {

  const router = useRouter();

  const getInitials = () => {
    const first = props.firstName?.charAt(0) || ''
    const last = props.lastName?.charAt(0) || ''
    return `${first}${last}`.toUpperCase()
  }

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí", style: "destructive",  onPress: () => router.push('/') }
      ]
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.initials}>{getInitials()}</Text>
        </View>

        {/* User Info */}
        <Text style={styles.name}>
          {props.firstName} {props.lastName}
        </Text>
        
        <Text style={styles.email}>
          {props.email}
        </Text>
        
        <View style={styles.roleTag}>
          <Text style={styles.role}>{props.role}</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E7E1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    width: '100%',
    maxWidth: 350,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF9B45',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#D5451B',
  },
  initials: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 6,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#D5451B',
    marginBottom: 12,
    textAlign: 'center',
  },
  roleTag: {
    backgroundColor: '#F4E7E1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF9B45',
    marginBottom: 20,
  },
  role: {
    fontSize: 14,
    color: '#521C0D',
    fontWeight: '600',
  },
  logoutBtn: {
    backgroundColor: '#D5451B',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})