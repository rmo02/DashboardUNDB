import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
};

export function Button({title, variant = 'solid', ...rest}: Props){
    return (
        <ButtonNativeBase 
        w="full"
        h={14}
        bg={variant === "outline" ? "transparent": "violet.700"}
        borderWidth={variant === "outline" ? 1 : 0}
        borderColor="purple.700"
        rounded='sm'
        _pressed={{
            bg: variant === "outline" ? "dark.450" :"purple.700"
        }}
        {...rest}>
            <Text color={variant === "outline" ? "violet.500" : "white"} 
            fontFamily="medium" 
            fontSize='sm'>
                {title}
            </Text>
        </ButtonNativeBase>
    )
}