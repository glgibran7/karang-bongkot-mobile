import { TouchableOpacity } from "react-native";

import { ImageBackground, View } from "react-native";

import AppText from "../ui/AppText";

import { navigateBanner } from "../../utils/bannerNavigation";

export default function BannerCard({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigateBanner(item)}>
      <ImageBackground
        source={{
          uri: item.image,
        }}
        imageStyle={{
          borderRadius: 20,
        }}
        style={{
          height: 180,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            padding: 16,
            borderRadius: 20,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        >
          <AppText
            color="#fff"
            size="small"
            style={{
              marginBottom: 6,
            }}
          >
            {item.actionType.toUpperCase()}
          </AppText>
          <AppText color="#fff" weight="700" size="title">
            {item.title}
          </AppText>

          <AppText
            color="#fff"
            style={{
              marginTop: 4,
            }}
          >
            {item.subtitle}
          </AppText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
