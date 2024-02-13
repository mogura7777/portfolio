/** @format */

export default async function handler(req, res) {
  const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.GOURMET_API_KEY}&format=json&large_area=Z011`;
  let url = defaultEndpoint;
  if (typeof req.query.keyword !== undefined) {
    url = `${url}&keyword=${req.query.keyword}`;
  }

  if (typeof req.query.start !== undefined) {
    url = `${url}&start=${req.query.start}`;
  }

  url = encodeURI(url);
  const result = await fetch(url);
  const users = await result.json();
  res.status(200).json(users);
  // res.json(result.body);
}
