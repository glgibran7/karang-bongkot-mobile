import * as DocumentPicker from "expo-document-picker";

import { TouchableOpacity } from "react-native";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function AppFilePicker({ value, onChange }) {
  const handlePick = async () => {
    const result = await DocumentPicker.getDocumentAsync();

    if (!result.canceled) {
      onChange(result.assets[0]);
    }
  };

  return (
    <TouchableOpacity onPress={handlePick}>
      <AppCard>
        <AppText>{value ? value.name : "Pilih File"}</AppText>
      </AppCard>
    </TouchableOpacity>
  );
}
