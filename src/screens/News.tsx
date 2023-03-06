import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  Text,
  VStack,
} from "native-base";
import api from "../api/api";
import { ScreenHeader } from "../components/ScreenHeader";
import { useCallback, useEffect, useState } from "react";
import { CardNews } from "../components/CardNews";
import { NewsDTO } from "../dtos/NewsDTO";

export function News() {
  const [news, setNews] = useState<NewsDTO>([]);

  async function fetchNew() {
    try {
      const response = await api.get("/noticias/?qtd=10");
      setNews(response.data["items"]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNew();
  }, []);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Notícias" />

      <VStack px={3}>
        <FlatList
          marginBottom={105}
          marginTop={1}
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <VStack
              bg="gray.500"
              alignItems="center"
              p={2}
              pr={4}
              rounded="md"
              mb={3}
            >
              <Heading fontSize="lg" color="white" fontFamily="bold">
                {item.titulo}
              </Heading>
              <Text fontSize="sm" color="gray.200" numberOfLines={2}>
                {item.introducao}
              </Text>
            </VStack>
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}
