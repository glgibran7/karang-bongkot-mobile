import * as ImagePicker from "expo-image-picker";

import { Image, TouchableOpacity, View } from "react-native";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function AppImagePicker({ value, onChange }) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      onChange(result.assets[0]);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <AppCard>
        {value ? (
          <Image
            source={{
              uri: value.uri,
            }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 12,
            }}
          />
        ) : (
          <View
            style={{
              paddingVertical: 30,
              alignItems: "center",
            }}
          >
            <AppText>Pilih Foto Bukti</AppText>
          </View>
        )}
      </AppCard>
    </TouchableOpacity>
  );
}
