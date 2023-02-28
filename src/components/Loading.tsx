import { Center, Spinner } from "native-base";

export function Loading() {
    return (
        <Center bg='secondary.100' flex={1}>
            <Spinner />
        </Center>
    )
}