import { router } from "expo-router";

export function navigateNotification(item) {
  switch (item.type) {
    case "agenda":
      router.push(`/agenda/${item.referenceId}`);
      break;

    case "pengumuman":
      router.push(`/pengumuman/${item.referenceId}`);
      break;

    case "berita":
      router.push(`/berita/${item.referenceId}`);
      break;

    case "surat":
      router.push(`/surat/${item.referenceId}`);
      break;

    case "aduan":
      router.push(`/aduan/${item.referenceId}`);
      break;

    default:
      break;
  }
}
