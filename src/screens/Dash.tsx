import { Center, Text, VStack } from "native-base";
import { Dashboard } from "../components/Dashboard";
import { ScreenHeader } from "../components/ScreenHeader";

export function Dash(){
    return(
        <VStack flex={1}>
            <ScreenHeader title="Dashboard" />
            <VStack px={5}>
            <Dashboard />
            </VStack>
        </VStack>
    )
}