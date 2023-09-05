import { Cat } from '../entities/cat.entity';
import { Dog } from '../entities/dog.entity';

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: Cat,
  },
  {
    provide: 'DOGS_REPOSITORY',
    useValue: Dog,
  },
];
