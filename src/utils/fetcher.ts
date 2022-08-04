const fetcher = (url: string) =>
  fetch(url, { credentials: 'include' }).then((r) => r.json());

export default fetcher;
