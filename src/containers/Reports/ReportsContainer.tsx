import { useQuery } from '@tanstack/react-query';
import { fetchReports } from 'services/apis/reportsApi';
import type { ApiResponse, Report } from 'types';
import { Card } from 'components/Card';
import { useAppSelector } from 'utils/hooks';

export function ReportsContainer() {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['reports', 'list'],
    queryFn: fetchReports,
  });

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h2 style={{ margin: 0 }}>Reports</h2>
      {isLoading && <Card title="Loading">Loading…</Card>}
      {isError && <Card title="Error">Failed to fetch</Card>}
      {data.map((r: Report) => (
        <Card key={r.id} title={r.title}>
          <div>ID: {r.id}</div>
          <div>Value: {r.value}</div>
          <div>Updated: {new Date(r.updatedAt).toLocaleString()}</div>
        </Card>
      ))}
    </div>
  );
}

export default ReportsContainer;
