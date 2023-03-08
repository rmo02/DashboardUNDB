import { Heading, HStack, Text, VStack } from "native-base";
import { NewsDTO } from "../dtos/NewsDTO";

type Props = {
  data: NewsDTO;
}

export function CardNews({data}: Props) {
  return (
    <VStack
    bg="gray.500"
    alignItems="center"
    p={2}
    pr={4}
    rounded="md"
    mb={3}
  >
    <Heading fontSize="lg" color="white" fontFamily="bold">
      {data.titulo}
    </Heading>
    <Text fontSize="sm" color="gray.200" numberOfLines={2}>
      {data.introducao}
    </Text>
  </VStack>
  );
}
