import { TouchableOpacity, Text, View } from "react-native";
import { StyledComponent } from "nativewind";

export function SkipButton({ ...rest  }) {
    return (
        <View className="flex-1 justify-end mb-10">
        <StyledComponent component={TouchableOpacity} {...rest}>
            <TouchableOpacity className="h-9 bg-white border-2 border-inputWeaknessColor w-20 rounded-md ml-60 mb-64 items-center justify-center">
                <Text className="text-textColor font-medium font-Principal text-md">
                    Pular
                </Text>
            </TouchableOpacity>
        </StyledComponent>
        </View>
    )
}