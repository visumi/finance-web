const fetcher = (url: string, credentials: {}) =>
  fetch(url, credentials).then((r) => r.json());

export default fetcher;
