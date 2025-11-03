import api from 'services/api';
import type { ApiResponse } from 'types';

export interface SalesSummary { total: number; month: string }

export async function fetchSalesSummary() {
  const res = await api.get<ApiResponse<SalesSummary>>('/mocks/sales-summary.json');
  return res.data.data;
}

