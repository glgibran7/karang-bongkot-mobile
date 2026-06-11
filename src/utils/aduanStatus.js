export function getAduanStatus(status) {
  switch (status) {
    case "pending":
      return {
        label: "Menunggu",
        type: "warning",
      };

    case "process":
      return {
        label: "Ditindaklanjuti",
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
