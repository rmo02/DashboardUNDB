import {
  Center,
  CheckIcon,
  FormControl,
  Select,
  Text,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Dashboard } from "../components/Dashboard";
import { ScreenHeader } from "../components/ScreenHeader";

type IBGEUFResponse = {
  id: number;
  sigla: string;
  nome: string;
};

export function Dash() {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);

  async function fetchUfs() {
    try {
      const response = await api.get("v1/localidades/estados");
      setUfs(response.data);
    } catch (error) {
      console.log("Não foi possivel pegar os Ufs");
    }
  }

  useEffect(() => {
    fetchUfs();
  }, []);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Dashboard" />
      <VStack px={5}>
        {/* <FormControl w="2/4" maxW="300" isRequired isInvalid>
          <FormControl.Label color="white">UF</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="UF"
            placeholder="UF"
            placeholderTextColor="white"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            {ufs.map((uf) => (
              <Select.Item
                color="white"
                key={uf.id}
                label={uf.nome}
                value={uf.sigla}
              />
            ))}
          </Select>
        </FormControl> */}
        <Dashboard />
      </VStack>
    </VStack>
  );
}
