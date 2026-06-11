export function getNofikasiType(type) {
  switch (type) {
    case "surat":
      return {
        label: "Surat",
        type: "warning",
      };

    case "pengumuman":
      return {
        label: "Pengumuman",
        type: "secondary",
      };

    case "agenda":
      return {
        label: "Agenda",
        type: "success",
      };

    default:
      return {
        label: "Unknown",
        type: "primary",
      };
  }
}
