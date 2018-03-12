import { SortByModel } from '../models/sortBy.model';

export const doSort = (items, sortBy) => {
  if (!sortBy || !sortBy.field  || ['ASC', 'DESC'].indexOf(sortBy.direction) < 0) {
    return;
  }

  items.sort((a: {}, b: {}) => {
    const field = sortBy.field;
    [a , b] = sortBy.direction === 'ASC' ? [a, b] : [b, a];
    return a[field] > b[field] ? 1 : -1;
  });
};
