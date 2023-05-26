import fs from 'fs';
import { Router } from 'express';

const router = Router();

const extractFilename = (file: string) => {
  return file.split('.').shift();
};

fs.readdir(__dirname, (err, files) => {
  files.filter(file => {
    const filename = extractFilename(file);
    if (filename !== 'index') {
      import(`./${filename}`).then((moduleRouter) => {
        router.use(`/${filename}`, moduleRouter.router);
      });
    };
  });
});

export default router;