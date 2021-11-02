import axios from "axios";

export const get = async <T extends Object>(url: string): Promise<T|null> => {
  return axios
    .get(url)
    .then(
      (response) => {
        return response.data;
      },

      (reject) => {
        return null;
      }
    )
    .catch((error) => {
      return error;
    });
};
