import { Center, FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import api from "../api/api";
import { CardAcoes } from "../components/CardAcoes";
import { HomeHeader } from "../components/HomeHeader";
import { AcoesDTO } from "../dtos/AcoesDTO";

export function Home() {
  const [acoes, setAcoes] = useState<AcoesDTO[]>([]);

  async function fetchAcoes() {
    try {
      const response = await api.get("/quote/PETR4,MGLU3,FNAM11,CASH3,BBDC4,HAPV3,B3SA3,ITUB4,VALE3,CVCB3,ITSA4,AMER3,ABEV3,ASAI3,RENT3");
      setAcoes(response.data["results"]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAcoes();
  }, []);
  return (
    <VStack flex={1}>
      <HomeHeader />
      <VStack marginX={3} flex={1}>
        <FlatList
          data={acoes}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => <CardAcoes data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}
