import usersPromise from './fecthPromise.js';
import sortArray from './sortArray.js';
import createUsers from './insertArrayByMapToConstractor.js';
import {
  renderUsers,
  renderError,
  renderUsersTable2
} from './render.js';

async function getPromise(promise) {
  try {
    const data = await promise;
    const sorted = sortArray(data, "name");
    const users = createUsers(sorted);
    renderUsers(users);
    renderUsersTable2(users);
  } catch (error) {
    renderError(error);
  }
}

getPromise(usersPromise());