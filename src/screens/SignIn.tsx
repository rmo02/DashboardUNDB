import { useNavigation } from "@react-navigation/native";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";
import LogoSVG from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={5} pb={16}>
        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="lg" fontFamily="bold">
            Dashboard LTDA
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="lg" fontFamily="medium" mb={6}>
            Acesse sua conta
          </Heading>

          <Input placeholder="Email" keyboardType="email-address" />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text mb={3} color="white" fontSize="sm" fontFamily="medium">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccount}/>
        </Center>
      </VStack>
    </ScrollView>
  );
}
