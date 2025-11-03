import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReports } from 'services/apis/reportsApi';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { setReports } from 'services/slices/reportsSlice';
import type { ApiResponse, Report } from 'types';
import { Button, Card, MiniChart } from './components';
import { formatCurrency } from 'utils/helpers';

export function DashboardContainer() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((s) => s.reports);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['reports', 'summary'],
    queryFn: fetchReports,
    staleTime: 1000 * 30,
  });

  useEffect(() => {
    if (data) dispatch(setReports(data));
  }, [data, dispatch]);

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Dashboard</h2>
        <Button onClick={() => refetch()} variant="secondary">Refresh</Button>
      </div>

      {isLoading && <Card title="Loading">Fetching data…</Card>}
      {isError && <Card title="Error">Could not load data</Card>}

      {!isLoading && !isError && (
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {items.map((r: Report) => (
            <Card key={r.id} title={r.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{formatCurrency(r.value)}</strong>
                <small>{new Date(r.updatedAt).toLocaleDateString()}</small>
              </div>
              <div style={{ marginTop: 8 }}>
                <MiniChart title="Last 7 days" data={Array.from({ length: 7 }, (_, i) => ({ x: new Date(Date.now() - i * 86400000).toISOString(), y: r.value * Math.random() }))} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardContainer;
