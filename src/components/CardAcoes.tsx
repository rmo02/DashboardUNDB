import { Heading, HStack, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { AcoesDTO } from "../dtos/AcoesDTO";

type Props = {
    data:AcoesDTO;
}

export function CardAcoes({data}: Props){
  const limit = 4;

    return (
        <VStack bg="#1F242D" pt={5} pb={5} px={8} borderRadius={10} marginY={2}>
        <HStack justifyContent="space-between">
          <Heading fontFamily="bold" color="gray.250">
            {data.symbol}
          </Heading>
        </HStack>
        <Text color="gray.250">{data.longName}</Text>
        <HStack justifyContent="space-between" mt={5}>
          <Text color="gray.250">R$ {data.regularMarketPrice}</Text>
          <HStack alignItems="center" justifyContent="center">
            {
              data.regularMarketChangePercent < 0
              ? <AntDesign name="caretdown" size={20} color="red" />
              : <AntDesign name="caretup" size={20} color="green" />
            }

            <Text color="gray.250">{data.regularMarketChangePercent.toLocaleString()}%</Text>
          </HStack>
        </HStack>
      </VStack>
    )
}