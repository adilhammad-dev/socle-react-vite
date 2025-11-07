export interface TError {
  status: number;
  data: { detail: string; message: string };
}
