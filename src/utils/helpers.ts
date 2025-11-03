export const formatCurrency = (value: number, currency = 'USD') =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);

export const formatDate = (iso: string) => new Date(iso).toLocaleString();

