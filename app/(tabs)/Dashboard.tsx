// Dashboard.tsx
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { 
  Searchbar, 
  Button, 
  Menu, 
  Provider as PaperProvider,
  MD3LightTheme,
  Card,
  Divider
} from 'react-native-paper'
import Book from '@/components/index/book'
import booksData from '../../data/books.json'

const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#D5451B',
    secondary: '#FF9B45',
    surface: '#F4E7E1',
    background: '#F4E7E1',
    onSurface: '#521C0D',
    onBackground: '#521C0D',
  },
}

export default function Dashboard() {
  // 1. Todos los libros
  const [allBooks] = useState(
    booksData.Books.map(b => ({
      titulo: b.titulo,
      imagen: b.imagen,
      autores: b.autores,
      genero: b.genero,
      año_edicion: b.año_edicion,
      idioma: b.idioma
    }))
  )
  
  // 2. Libros a mostrar según búsqueda/filtro
  const [displayedBooks, setDisplayedBooks] = useState(allBooks)

  const [searchQuery, setSearchQuery] = useState('')
  const [menuVisible, setMenuVisible] = useState(false)
  const [filterType, setFilterType] = useState<'Título'|'Ascendente'|'Descendente'|'Autor'|'Género'|'Año'|'Idioma'>('Título')

  const handleFilterSelect = (filter: typeof filterType) => {
    setFilterType(filter)
    setMenuVisible(false)
  }

  useEffect(() => {
    // Filtrar por título (ignore case)
    let filtered = allBooks.filter(book =>
      book.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Ordenar según filterType
    switch (filterType) {
      case 'Ascendente':
        filtered.sort((a, b) => a.titulo.localeCompare(b.titulo))
        break
      case 'Descendente':
        filtered.sort((a, b) => b.titulo.localeCompare(a.titulo))
        break

      // 'Título' deja el orden según apareció en el JSON
    }

    setDisplayedBooks(filtered)
  }, [searchQuery, filterType])

  return (
    <PaperProvider theme={customTheme}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Card style={styles.welcomeCard}>
            <Card.Content style={styles.welcomeContent}>
              <View style={styles.titleContainer}>
                <Text style={styles.mainIcon}>📚</Text>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.mainTitle}>BiblioDSM</Text>
                  <Text style={styles.subtitle}>Tu biblioteca virtual TIDSM51</Text>
                </View>
              </View>
              
              <Divider style={styles.headerDivider} />
              
              <Text style={styles.description}>
                Descubre tu próxima gran lectura. Explora miles de libros, 
                encuentra nuevos autores y sumérgete en historias fascinantes.
              </Text>
            </Card.Content>
          </Card>
        </View>

        {/* Search and Filter Section */}
        <View style={styles.searchSection}>
          <Card style={styles.searchCard}>
            <Card.Content style={styles.searchContent}>
              <Text style={styles.searchTitle}>🔍 Buscar Libros</Text>
              
              <View style={styles.searchContainer}>
                <Searchbar
                  placeholder="Buscar los libros por título"
                  onChangeText={setSearchQuery}
                  value={searchQuery}
                  style={styles.searchbar}
                  iconColor={customTheme.colors.primary}
                  inputStyle={styles.searchInput}
                />
              </View>

              {/* Filter Status */}
              <View style={styles.filterStatus}>
                <Text style={styles.filterStatusText}>
                  📊 Ordenado por: <Text style={styles.filterStatusValue}>{filterType}</Text>
                </Text>
                <Menu
                  visible={menuVisible}
                  onDismiss={() => setMenuVisible(false)}
                  anchor={
                    <Button
                      mode="contained"
                      onPress={() => setMenuVisible(true)}
                      style={styles.filterButton}
                      icon="filter-variant"
                      labelStyle={styles.filterButtonText}
                    >
                      Filtrar
                    </Button>
                  }
                  contentStyle={styles.menuContent}
                >
                  <Menu.Item onPress={() => handleFilterSelect('Ascendente')} title="A-Z (Ascendente)" titleStyle={styles.menuItemTitle} />
                  <Menu.Item onPress={() => handleFilterSelect('Descendente')} title="Z-A (Descendente)" titleStyle={styles.menuItemTitle} />

                </Menu>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Books Section */}
        <View style={styles.booksSection}>
          <Card style={styles.booksCard}>
            <Card.Content style={styles.booksContent}>
              <View style={styles.booksSectionHeader}>
                <Text style={styles.booksTitle}>📖 Catálogo de Libros</Text>
                <Text style={styles.booksSubtitle}>Explora nuestra colección completa</Text>
              </View>
              
              <Divider style={styles.booksDivider} />
              
              {/* Le pasamos la lista filtrada/ordenada */}
              <Book books={displayedBooks} />
            </Card.Content>
          </Card>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E7E1',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  welcomeCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#FF9B45',
  },
  welcomeContent: {
    padding: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  mainIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  titleTextContainer: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#D5451B',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  headerDivider: {
    backgroundColor: '#FF9B45',
    height: 3,
    marginVertical: 16,
    borderRadius: 2,
  },
  description: {
    fontSize: 16,
    color: '#521C0D',
    lineHeight: 24,
    textAlign: 'justify',
    opacity: 0.9,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#FF9B45',
  },
  searchContent: {
    padding: 20,
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  searchbar: {
    flex: 1,
    backgroundColor: '#F4E7E1',
    borderRadius: 30,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#FF9B45',
  },
  searchInput: {
    color: '#521C0D',
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#D5451B',
    borderRadius: 30,
    paddingHorizontal: 8,
    width: 100,
    elevation: 3,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 8,
    marginTop: 8,
  },
  menuItemTitle: {
    color: '#521C0D',
    fontSize: 14,
  },
  filterStatus: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F4E7E1',
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#FF9B45',
  gap: 12

  },
  filterStatusText: {
    color: '#521C0D',
    fontSize: 14,
    textAlign: 'center',
  },
  filterStatusValue: {
    fontWeight: 'bold',
    color: '#D5451B',
  },
  booksSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  booksCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#521C0D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#FF9B45',
  },
  booksContent: {
    padding: 20,
  },
  booksSectionHeader: {
    marginBottom: 16,
  },
  booksTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#521C0D',
    marginBottom: 4,
  },
  booksSubtitle: {
    fontSize: 14,
    color: '#D5451B',
    fontStyle: 'italic',
  },
  booksDivider: {
    backgroundColor: '#FF9B45',
    height: 2,
    marginBottom: 20,
    borderRadius: 1,
  },
  bottomSpacing: {
    height: 30,
  },
})