import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Admin',
  email: 'nzb329@163.com',
  avatar: './assets/images/avatar.jpg',
};

export const guest: User = {
  id: null,
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg',
};
