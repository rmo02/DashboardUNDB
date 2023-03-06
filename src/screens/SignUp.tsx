import { useNavigation } from "@react-navigation/native";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";
import LogoSVG from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o email').email('Email inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  confirm_password: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'A confirmação de senha não confere')
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.navigate("signIn");
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleSignUp (data:FormDataProps) {
    console.log(data);
  }


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={5} pb={16}>
        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="lg" fontFamily="bold">
            Dashboard LTDA
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="lg" fontFamily="medium" mb={6}>
            Crie sua conta
          </Heading>

          <Controller 
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Nome"
              value={value}
              errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Email"
              keyboardType="email-address" 
              value={value}
              errorMessage={errors.email?.message}
              />
            )}
          />


          <Controller 
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry
              value={value}
              errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name='confirm_password'
            render={({field:{onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Confirme a senha"
              secureTextEntry
              value={value}
              errorMessage={errors.confirm_password?.message}
              />
            )}
          />


          <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)}/>
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
