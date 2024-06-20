// pages/api/art/[image].js

import { join } from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { image } = req.query;
  const imagePath = join(process.cwd(), 'public', 'art', `${image}.jpg`);
  
  // Check if the file exists
  if (fs.existsSync(imagePath)) {
    // Serve the file
    const fileStream = fs.createReadStream(imagePath);
    fileStream.pipe(res);
  } else {
    // Return 404 if the file doesn't exist
    res.status(404).end();
  }
}
