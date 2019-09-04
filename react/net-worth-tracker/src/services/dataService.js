import uuid from "uuid";

function getService(url) {
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

function postService(url, id, category, description = "", value = 0.0) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      category: category,
      description: description,
      value: value
    })
  });
}

function putService(url, id, category, description, value) {
  return fetch(url + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: category,
      description: description,
      value: value
    })
  }).then(res => {
    return res;
  });
}

function deleteService(url, id) {
  return fetch(url + "/" + id, {
    method: "DELETE"
  }).then(res => {
    return res;
  });
}

function postCurrencyService(url, currency) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      currency: currency
    })
  });
}

function putCurrencyService(url, id, currency) {
  return fetch(url + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      currency: currency
    })
  }).then(res => {
    return res;
  });
}

function populate(assetUrl, liabilityUrl, currencyUrl) {
  postService(assetUrl, uuid.v1(), "Cash and Investments", "Chequing", 2000);
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Savings for Taxes",
    4000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Rainy Day Fund",
    506
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Savings for Fun",
    5000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Savings for Travel",
    400
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Savings for Personal Development",
    200
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Investment 1",
    5000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Investment 2",
    60000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Investment 3",
    30000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Investment 4",
    50000
  );
  postService(
    assetUrl,
    uuid.v1(),
    "Cash and Investments",
    "Investment 5",
    24000
  );
  postService(assetUrl, uuid.v1(), "Long Term Assets", "Primary Home", 455000);
  postService(assetUrl, uuid.v1(), "Long Term Assets", "Second Home", 1564321);
  postService(assetUrl, uuid.v1(), "Long Term Assets", "Other", 0);

  postService(
    liabilityUrl,
    uuid.v1(),
    "Short Term Liabilities",
    "Credit Card 1",
    4342
  );
  postService(
    liabilityUrl,
    uuid.v1(),
    "Short Term Liabilities",
    "Credit Card 2",
    322
  );
  postService(liabilityUrl, uuid.v1(), "Long Term Debt", "Mortage 1", 250999);
  postService(liabilityUrl, uuid.v1(), "Long Term Debt", "Mortage 2", 632634);
  postService(
    liabilityUrl,
    uuid.v1(),
    "Long Term Debt",
    "Line of Credit",
    10000
  );
  postService(
    liabilityUrl,
    uuid.v1(),
    "Long Term Debt",
    "Investment Loan",
    10000
  );
  postService(liabilityUrl, uuid.v1(), "Long Term Debt", "Student Loan", 0);
  postService(liabilityUrl, uuid.v1(), "Long Term Debt", "Car Loan", 0);
  postCurrencyService(currencyUrl, "CAD");
}

export {
  getService,
  postService,
  putService,
  deleteService,
  postCurrencyService,
  putCurrencyService,
  populate
};
