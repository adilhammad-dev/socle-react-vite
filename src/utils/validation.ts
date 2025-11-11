export const isDefined = (value: any): boolean => {
  return !isUndefined(value);
};

export const isUndefined = (
  value: string | null | undefined | number | boolean | Date | Record<any, any>,
): boolean => {
  return (
    value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim() === '')
  );
};
