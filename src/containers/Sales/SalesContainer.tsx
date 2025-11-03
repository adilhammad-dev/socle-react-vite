import { useQuery } from '@tanstack/react-query';
import { fetchSalesSummary } from 'services/apis/salesApi';
import type { ApiResponse } from 'types';
import { Card } from 'components/Card';

interface SalesSummary { total: number; month: string }

export function SalesContainer() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sales', 'summary'],
    queryFn: fetchSalesSummary,
    staleTime: 60_000,
  });

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h2 style={{ margin: 0 }}>Sales</h2>
      {isLoading && <Card title="Loading">Loading…</Card>}
      {isError && <Card title="Error">Failed to fetch</Card>}
      {data && (
        <Card title={`Sales - ${data.month}`}>
          <div>Total: {data.total}</div>
        </Card>
      )}
    </div>
  );
}

export default SalesContainer;
