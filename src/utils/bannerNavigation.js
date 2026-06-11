import { router } from "expo-router";

export function navigateBanner(banner) {
  switch (banner.actionType) {
    case "agenda":
      router.push(`/agenda/${banner.actionId}`);
      break;

    case "berita":
      router.push(`/berita/${banner.actionId}`);
      break;

    case "pengumuman":
      router.push(`/pengumuman/${banner.actionId}`);
      break;

    default:
      break;
  }
}
