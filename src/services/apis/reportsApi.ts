import api from 'services/api';
import type { ApiResponse, Report } from 'types';

export async function fetchReports() {
  const res = await api.get<ApiResponse<Report[]>>('/mocks/reports.json');
  return res.data.data;
}

