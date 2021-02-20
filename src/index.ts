import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { People } from './Entities/People';

const app = express();

app.use(express.json());

createConnection({
  type: 'mysql',
  database: 'nodejs_mysql',
  username: 'root',
  password: 'mysql123',
  logging: true,
  synchronize: true,
  entities: [People],
});

app.get('/', (req: Request, res: Response) => {
  People.find().then((data) => {
    res.json({
      message: 'Configure TypeScript in a NodeJS / ExpressJS API ',
      data,
    });
  });
});

app.post('/', (req: Request, res: Response) => {
  People.insert(req.body).then((data) => {
    res.status(201).json({
      message: 'Configure TypeScript in a NodeJS / ExpressJS API ',
      data,
    });
  });
});

app.get('/:id', (req: Request, res: Response) => {
  People.findOne({
    id: +req.params.id,
  }).then((data) => {
    res.status(201).json({
      message: 'Configure TypeScript in a NodeJS / ExpressJS API ',
      data,
    });
  });
});

app.put('/:id', (req: Request, res: Response) => {
  People.update(
    {
      id: +req.params.id,
    },
    req.body
  ).then((data) => {
    res.status(201).json({
      message: 'Configure TypeScript in a NodeJS / ExpressJS API ',
      data,
    });
  });
});

app.delete('/:id', (req: Request, res: Response) => {
  People.delete({
    id: +req.params.id,
  }).then((data) => {
    res.status(201).json({
      message: 'Configure TypeScript in a NodeJS / ExpressJS API ',
      data,
    });
  });
});

app.listen(3003, (): void => {
  console.log('Server is running on 3003');
});
