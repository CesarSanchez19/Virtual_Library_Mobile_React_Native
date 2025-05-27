import { StyleSheet, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper'

export default function Form() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = () => {
    // Validar que todos los campos estén llenos
    if (!titulo.trim() || !autor.trim() || !descripcion.trim()) {
      Alert.alert(
        'Campos Vacíos',
        'Por favor, completa todos los campos.',
        [{ text: 'OK' }]
      )
      return
    }

    // Mostrar mensaje de éxito
    Alert.alert(
      '¡Éxito!',
      'Se envió la respuesta correctamente',
      [
        {
          text: 'OK',
          onPress: () => {
            // Limpiar formulario
            setTitulo('')
            setAutor('')
            setDescripcion('')
          }
        }
      ]
    )
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>📚 Recomienda un Libro</Title>
          <Paragraph style={styles.subtitle}>
            Comparte tu libro favorito con nuestra comunidad
          </Paragraph>

          <TextInput
            label="Título del libro"
            value={titulo}
            onChangeText={setTitulo}
            mode="outlined"
            style={styles.input}
            outlineColor="#FF9B45"
            activeOutlineColor="#D5451B"
            theme={{ colors: { onSurfaceVariant: '#521C0D' } }}
          />

          <TextInput
            label="Autor"
            value={autor}
            onChangeText={setAutor}
            mode="outlined"
            style={styles.input}
            outlineColor="#FF9B45"
            activeOutlineColor="#D5451B"
            theme={{ colors: { onSurfaceVariant: '#521C0D' } }}
          />

          <TextInput
            label="¿Por qué lo recomiendas?"
            value={descripcion}
            onChangeText={setDescripcion}
            mode="outlined"
            multiline
            numberOfLines={4}
            style={styles.input}
            outlineColor="#FF9B45"
            activeOutlineColor="#D5451B"
            theme={{ colors: { onSurfaceVariant: '#521C0D' } }}
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Enviar Respuesta
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E7E1',
  },
  scrollContent: {
    flex: 1,                     
    justifyContent: 'center',   
    alignItems: 'center',        
    padding: 20,                
  },
  card: {
    maxWidth: 400,
    width: 340,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#521C0D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardContent: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#521C0D',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#D5451B',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#D5451B',
    borderRadius: 12,
    paddingVertical: 6,
    marginTop: 16,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
})