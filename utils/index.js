export const IsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const fetcher = (url) => fetch(url).then((res) => res.json());
