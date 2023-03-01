import { Center, Heading, ScrollView, Text, useToast, VStack } from "native-base";
import { ScreenHeader } from "../components/ScreenHeader";
import { UserPhoto } from "../components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import { useState } from "react";

export function Profile() {
  const [ userPhoto, setUserPhoto ] = useState('https://github.com/rmo02.png');

  const toast = useToast();


    async function handleUserPhotoSelect() {
      try {
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          aspect: [4, 4],
          allowsEditing: true
        });
  
        if (photoSelected.canceled) {
          return;
        }
  
        if(photoSelected.assets[0].uri){
          setUserPhoto(photoSelected.assets[0].uri);
        }
      } catch (error) {
        console.log(error)
      }



    }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: userPhoto}}
            alt="Foto do usuário"
            size={33}
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="white" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome" />

          <Input bg="gray.600" placeholder="ramon@email.com" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="white" fontSize="md" mb={2}>Alterar senha</Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />

          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />

          <Input
            bg="gray.600"
            placeholder="Confirme nova senha"
            secureTextEntry
          />

          <Button 
            title="Atualizar"
            mt={4}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
