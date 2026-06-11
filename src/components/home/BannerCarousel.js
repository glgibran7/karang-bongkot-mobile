import { useState } from "react";

import { Dimensions, View } from "react-native";

import Carousel from "react-native-reanimated-carousel";

import BannerCard from "./BannerCard";

import { banners } from "../../mock/banner";

const width = Dimensions.get("window").width;

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={4000}
        width={width - 32}
        height={180}
        data={banners}
        scrollAnimationDuration={1000}
        onSnapToItem={setIndex}
        renderItem={({ item }) => <BannerCard item={item} />}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 12,
          gap: 8,
        }}
      >
        {banners.map((_, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              backgroundColor: index === i ? "#0EA5E9" : "#D1D5DB",
            }}
          />
        ))}
      </View>
    </View>
  );
}
