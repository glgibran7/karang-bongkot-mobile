export function getSuratStatus(status) {
  switch (status) {
    case "pending":
      return {
        label: "Menunggu Verifikasi",
        type: "warning",
      };

    case "process":
      return {
        label: "Diproses",
        type: "primary",
      };

    case "done":
      return {
        label: "Selesai",
        type: "success",
      };

    default:
      return {
        label: status,
        type: "primary",
      };
  }
}
