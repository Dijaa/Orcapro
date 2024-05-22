import { Text, View } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import SelectExistingMachinesInput from "../../../../components/SelectExistingMachinesInput";
import  { SelectButton }  from "../../../../components/PrimaryButton";
import HeaderBackPlus from "../../../../components/Headers/HeaderBackPlus";


export default function SelectExistent(title) {
    return (
        <View className="items-center flex-1 mt-20"> 
                <HeaderBackPlus title={"Criar Orçamento"}/>
                <SearchBar />
                <SelectExistingMachinesInput />
                <SelectExistingMachinesInput />
                <SelectButton />
        </View>
    );
}