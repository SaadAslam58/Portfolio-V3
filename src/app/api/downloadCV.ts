// pages/api/downloadCV.ts
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve('.', 'public/your-cv.pdf');
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=your-cv.pdf');
  res.send(fileBuffer);
}
