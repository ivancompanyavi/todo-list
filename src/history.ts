import { createHashHistory } from 'history';

let history: any;

export function getHistory() {
  if (!history) {
    history = createHashHistory();
  }
  return history;
}

export default getHistory;
