const addPlaceholderIfOdd = (items) => {
  if (items.length % 2 !== 0) {
    return [...items, { isPlaceholder: true, id: "placeholder" }];
  }
  return items;
};
export default addPlaceholderIfOdd;
