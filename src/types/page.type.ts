export interface TPage<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface TPageCriteria {
  pageSize: number;
  pageNumber: number;
}
