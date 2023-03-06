export const getApi = (url: string) => {
  return fetch(url).then(res => res.json());
};
