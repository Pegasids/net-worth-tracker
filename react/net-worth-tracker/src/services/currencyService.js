function getRateService(baseCurrency, targetcurrency) {
  const API_KEY = "da7206fd550763dbb6279f77ac5f8b3a&symbols";
  return fetch(
    "http://data.fixer.io/api/latest?access_key=" +
      API_KEY +
      "=" +
      targetcurrency +
      "&format=1"
  )
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

export { getRateService };
