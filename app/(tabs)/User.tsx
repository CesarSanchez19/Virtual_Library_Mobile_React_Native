import React from 'react'
import { View } from 'react-native'
import UserProfile from '../UserProfile'

export default function User() {
  // Datos del usuario en el padre
  const [firstName] = React.useState('Cesar David')
  const [lastName]  = React.useState('Sanchez Trejo')
  const [email]     = React.useState('cesar.sanchez@email.com')
  const [role]      = React.useState('Administrador')

  return (
    <View style={{ padding: 20, backgroundColor: '#F4E7E1', flex: 1 }}>
      <UserProfile
        firstName={firstName}
        lastName={lastName}
        email={email}
        role={role}
      />
    </View>
  )
}
