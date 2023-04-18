import axios from "axios";

export const axiosGetConfig = async (url: string, userToken: string) => {
  return axios({
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};
