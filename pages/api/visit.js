let visitCounts = {};

export default function handler(req, res) {
  const { website } = req.query;

  if (!visitCounts[website]) {
    visitCounts[website] = 0;
  }

  visitCounts[website] += 1;

  res.status(200).json({ website, visits: visitCounts[website] });
}
