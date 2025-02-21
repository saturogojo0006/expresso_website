import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const visitorSchema = new mongoose.Schema({
  name: String,
  count: Number,
});

const Visitor = mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema);

mongoose.connect(MONGO_URI);

export default async function handler(req, res) {
  try {
    let visitors = await Visitor.findOne({ name: "visits" });

    if (!visitors) {
      const beginCount = new Visitor({
        name: "visits",
        count: 1,
      });

      await beginCount.save();
      res.status(200).json({ count: 1 });
    } else {
      visitors.count += 1;
      await visitors.save();
      res.status(200).json({ count: visitors.count });
    }
  } catch (err) {
    console.error("Error fetching visitor count:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}