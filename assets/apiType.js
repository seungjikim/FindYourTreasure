const getUserRequest = function (params) {
  // user id를 입력받아서 GET statuses/user_timeline api를 호출할 수 있도록 하는 타입
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

exports.getUserRequest = getUserRequest;