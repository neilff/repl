const createTypes = (base, types) => types.reduce((acc, type) => ({
  ...acc,
  [type]: `APP/${ base }/${ type }`,
}), {});

export default createTypes;