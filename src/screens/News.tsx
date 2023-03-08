import {
  Box,
  Center,
  CheckIcon,
  Divider,
  FlatList,
  FormControl,
  Heading,
  Select,
  Text,
  VStack,
} from "native-base";
import api from "../api/api";
import { ScreenHeader } from "../components/ScreenHeader";
import { useCallback, useEffect, useState } from "react";
import { CardNews } from "../components/CardNews";
import { NewsDTO } from "../dtos/NewsDTO";

export function News() {
  const [news, setNews] = useState<NewsDTO[]>([]);

  async function fetchNew() {
    try {
      const response = await api.get("v3/noticias/?qtd=10");
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
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CardNews 
            data={item}
            />
          )}
        />

      </VStack>
    </VStack>
  );
}
