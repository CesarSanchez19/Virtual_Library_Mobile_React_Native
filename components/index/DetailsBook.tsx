// components/DetailsBook.tsx
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Card, Chip, Divider, Surface } from "react-native-paper";
import booksData from "../../data/books.json";

type Params = { titulo: string };

export default function DetailsBook(props: any) {
  const { titulo } = useLocalSearchParams<Params>();
  const bookData = booksData.Books.find((b) => b.titulo === titulo);

  if (!bookData) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Libro no encontrado.</Text>
      </View>
    );
  }

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    const stars = Array(full).fill("★");
    if (half) stars.push("☆");
    return [...stars, ...Array(5 - stars.length).fill("☆")].join("");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: `Detalles de ${bookData.titulo}`,
          headerStyle: { backgroundColor: "#521C0D" },
          headerTintColor: "#F4E7E1",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Surface style={styles.headerCard} elevation={4}>
          <View style={styles.headerContent}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: bookData.imagen }} style={styles.bookImage} resizeMode="cover" />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{bookData.calificacion}</Text>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.bookTitle}>{bookData.titulo}</Text>
              <Text style={styles.bookAuthor}>{bookData.autores.join(", ")}</Text>
              <View style={styles.starsContainer}>
                <Text style={styles.stars}>{renderStars(bookData.calificacion)}</Text>
                <Text style={styles.ratingValue}>({bookData.calificacion}/5)</Text>
              </View>
            </View>
          </View>
        </Surface>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Géneros</Text>
            <View style={styles.genreContainer}>
              {bookData.genero.map((g, i) => (
                <Chip key={i} style={styles.genreChip} mode="flat">
                  {g}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>{bookData.descripcion}</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content >
            <Text style={styles.sectionTitle}>Información del Libro</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Año:</Text>
              <Text style={styles.infoValue}>{bookData.año_edicion}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>ISBN:</Text>
              <Text style={styles.infoValue}>{bookData.ISBN || "N/A"}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Páginas:</Text>
              <Text style={styles.infoValue}>{bookData.numero_paginas}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Idioma:</Text>
              <Text style={styles.infoValue}>{bookData.idioma === "es" ? "Español" : bookData.idioma}</Text>
            </View>
          </Card.Content>
        </Card>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4E7E1" },
  error: { margin: 20, fontSize: 18, color: "#D5451B" },
  headerCard: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    marginTop: 40,
  },
  headerContent: { flexDirection: "row", padding: 20 },
  imageContainer: { position: "relative", marginRight: 20 },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 12,
    elevation: 8,
  },
  ratingBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#FF9B45",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  ratingText: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
  titleContainer: { flex: 1, justifyContent: "center" },
  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#521C0D",
    marginBottom: 8,
    lineHeight: 30,
  },
  bookAuthor: {
    fontSize: 18,
    color: "#D5451B",
    marginBottom: 12,
    fontStyle: "italic",
  },
  starsContainer: { flexDirection: "row", alignItems: "center" },
  stars: { fontSize: 20, marginRight: 8 },
  ratingValue: { fontSize: 16, color: "#521C0D", fontWeight: "600" },
  card: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: "#FFF",
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#521C0D",
    marginBottom: 16,
  },
  genreContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  genreChip: { backgroundColor: "#FF9B45" },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#521C0D",
    textAlign: "justify",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    
  },
  infoLabel: { fontSize: 16, fontWeight: "600", flex: 1, color: "#521C0D" },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
    color: "#D5451B",
  },
  divider: { backgroundColor: "#F4E7E1", height: 1  },
  actionContainer: { margin: 16, gap: 12 },
  bottomSpace: { height: 20,  },
});
