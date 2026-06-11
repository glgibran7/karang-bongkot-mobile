export function getAduanTracking(status) {
  return {
    submitted: true,

    verified: status === "process" || status === "done",

    processing: status === "process" || status === "done",

    finished: status === "done",
  };
}
