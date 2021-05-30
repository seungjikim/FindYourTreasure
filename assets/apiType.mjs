export function getUserRequest(params) {
  getUserRequest.prototype.getType = function () {
    return "getUserRequest";
  };
  const { id, ...resParams } = params;
  return {
    url: "statuses/user_timeline",
    params: {
      screen_name: id,
      ...resParams,
    },
  };
}