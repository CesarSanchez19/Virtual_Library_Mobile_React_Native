// components/Book.tsx
import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text
} from "react-native";
import { Card, Title, Chip, TouchableRipple } from "react-native-paper";
import { useRouter } from "expo-router";

interface BookItem {
  titulo: string;
  imagen: string;
  autores: string[];
  genero: string[];
  año_edicion: number;
  idioma: string;
}

interface BookProps {
  books: BookItem[];
}

export default function Book({ books }: BookProps) {
  const router = useRouter();

  // Si no hay libros que mostrar...
  if (books.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}> No se encontraron libros.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.titulo}
        numColumns={1}
        // --- Estas dos líneas corrigen el nesting error ---
        nestedScrollEnabled={true}
        scrollEnabled={false}
        // --------------------------------------------------
        renderItem={({ item, index }) => (
          <Card
            style={[
              styles.card,
              { marginTop: index === 0 ? 20 : 16, elevation: 0, shadowOpacity: 0 }
            ]}
            elevation={4}
            onPress={() => {
              router.push({
                pathname: "/detailsbook",
                params: { titulo: item.titulo }
              });
            }}
          >
            <View style={styles.cardHeader}>
              <Chip mode="flat" style={styles.bookChip} textStyle={styles.chipText} compact>
                📖 Libro
              </Chip>
              <View style={styles.decorativeDots}>
                <View style={[styles.dot, { backgroundColor: "#FF9B45" }]} />
                <View style={[styles.dot, { backgroundColor: "#D5451B" }]} />
                <View style={[styles.dot, { backgroundColor: "#521C0D" }]} />
              </View>
            </View>

            <View style={styles.imageContainer}>
              <Card.Cover source={{ uri: item.imagen }} style={styles.image} resizeMode="cover" />
              <View style={styles.imageOverlay} />
            </View>

            <Card.Content style={styles.cardContent}>
              <View style={styles.titleContainer}>
                <Title style={styles.title} numberOfLines={2}>
                  {item.titulo}
                </Title>
                <View style={styles.readingIndicator}>
                  <Text style={styles.readingText}>📄 Disponible</Text>
                </View>
              </View>

              <TouchableRipple
                onPress={() => {
                  router.push({
                    pathname: "/detailsbook",
                    params: { titulo: item.titulo }
                  });
                }}
                rippleColor="rgba(0, 0, 0, .08)"
              >
                <View style={styles.cardFooter}>
                  <View style={styles.footerLine} />
                  <Text style={styles.footerText}>Toca para ver detalles</Text>
                  <View style={styles.footerLine} />
                </View>
              </TouchableRipple>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8 },  // quitamos flex:1 para que mida sólo su contenido
  emptyContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    fontSize: 18,
    color: "#521C0D",
    fontStyle: "italic"
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: "#FF9B45",
    overflow: "hidden",
    marginBottom: 26,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
    backgroundColor: "#F4E7E1",
  },
  bookChip: { backgroundColor: "#D5451B", borderRadius: 20 },
  chipText: { color: "white", fontSize: 12, fontWeight: "bold" },
  decorativeDots: { flexDirection: "row", gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  imageContainer: {
    position: "relative",
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
  },
  image: { height: 320, borderRadius: 16 },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  cardContent: { padding: 20, paddingTop: 16, backgroundColor: "#F4E7E1" },
  titleContainer: { marginBottom: 16 },
  title: {
    textAlign: "center",
    color: "#521C0D",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
    marginBottom: 12,
  },
  readingIndicator: {
    alignSelf: "center",
    backgroundColor: "#FF9B45",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
  },
  readingText: { color: "white", fontSize: 12, fontWeight: "bold" },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 12,
  },
  footerLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#FF9B45",
    borderRadius: 1,
  },
  footerText: {
    color: "#D5451B",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "600",
  },
});
