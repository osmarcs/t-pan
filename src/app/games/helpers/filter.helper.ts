export const doFilter = (items, filterBy) => {
  if (
    !filterBy ||
    !filterBy.value ||
    !filterBy.field ||
    !items ||
    !items.length
  ) {
    return items;
  }
  const  filterValue = filterBy.value.toLowerCase();
  return items.filter(item => {
    let itemField = item[filterBy.field] + '';
    itemField = itemField.toLowerCase();
    return itemField.includes(filterValue);
  });
};
