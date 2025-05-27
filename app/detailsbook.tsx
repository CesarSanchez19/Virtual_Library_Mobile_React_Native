// /app/detailsbook.tsx
import React from "react";
import { useLocalSearchParams } from "expo-router";
import DetailsBook from "../components/index/DetailsBook";

export default function Page() {
  const { titulo } = useLocalSearchParams();

  return (
    <DetailsBook
      titulo={titulo}
    />
  );
}
