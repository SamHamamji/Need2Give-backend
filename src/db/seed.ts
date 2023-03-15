import db from '.';
import { AccountTable } from './AccountTable';

const accounts: Omit<AccountTable, 'id'>[] = [{
  email: 'dummy@blobmail.org',
  username: 'lemon boy',
  phone_number: '03 123 123',
}, {
  email: 'dummy2@blobmail.org',
  username: 'juno',
  phone_number: '07 987 987',
}, {
  email: 'dummy3@blobmail.org',
  username: 'Paul',
  phone_number: '01 159 159',
}];

async function seed() {
  await db.insertInto('account').values(accounts).executeTakeFirst();
  db.destroy();
}

seed();
