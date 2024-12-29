import {
  NextFunction,
  Request, Response,
  Router,
} from 'express';
import {
  createUser, login,
} from '../controllers/users';
import NotFoundError from '../errors/not-found-error';
import auth from '../middlewares/auth';
import { validateAuthentication, validateUserBody } from '../middlewares/validatons';
import cardRouter from './cards';
import userRouter from './users';

const router = Router();

var cors = require('cors');
let corsOptions = {
  origin : ['http://localhost:3000', 'http://localhost:8080'],
  credentials: true,
  exposedHeaders: ['jwt']
};
router.use(cors(corsOptions));

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateAuthentication, login);
router.get('/health', (_req, res) => {
  res.status(200).send('Ok');
});

router.use('/users', auth, userRouter);
router.use('/cards', auth, cardRouter);

router.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError('Маршрут не найден'));
});

export default router;
