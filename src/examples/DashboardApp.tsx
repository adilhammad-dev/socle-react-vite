import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from 'components/ui/theme';
import {
  // Layout
  Container,
  Grid,
  Stack,
  Box,
  Paper,
  // Basic
  Button,
  Typography,
  Chip,
  Tooltip,
  // Navigation
  Navbar,
  Sidebar,
  Tabs,
  Breadcrumbs,
  // Data Display
  Card,
  List,
  Table,
  Timeline,
  // Feedback
  Alert,
  Toast,
  // Visualization
  ChartWrapper,
  Gauge,
  // Advanced
  NotificationCenter,
  ThemeToggle,
  UserMenu,
  CommandPalette,
} from 'components/ui';
import {
  Dashboard,
  Settings,
  People,
  Assessment,
  ShoppingCart,
  Check,
} from '@mui/icons-material';

function DashboardApp() {
  // State management
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showToast, setShowToast] = React.useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

  // Keyboard shortcut for command palette
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mock data
  const notifications = [
    {
      id: '1',
      title: 'New Order',
      message: 'You have received a new order #1234',
      timestamp: new Date(),
      type: 'success' as const,
      read: false,
    },
    {
      id: '2',
      title: 'System Update',
      message: 'System maintenance scheduled for tonight',
      timestamp: new Date(Date.now() - 3600000),
      type: 'info' as const,
      read: false,
    },
  ];

  const salesData = [
    { label: 'Jan', value: 4200, color: '#2563eb' },
    { label: 'Feb', value: 5100, color: '#3b82f6' },
    { label: 'Mar', value: 4800, color: '#60a5fa' },
    { label: 'Apr', value: 6200, color: '#93c5fd' },
    { label: 'May', value: 7100, color: '#2563eb' },
    { label: 'Jun', value: 6800, color: '#3b82f6' },
  ];

  const recentOrders = [
    { id: '1', primary: 'Order #1234', secondary: 'John Doe - $125.00', icon: <ShoppingCart /> },
    { id: '2', primary: 'Order #1235', secondary: 'Jane Smith - $89.50', icon: <ShoppingCart /> },
    { id: '3', primary: 'Order #1236', secondary: 'Bob Johnson - $234.00', icon: <ShoppingCart /> },
  ];

  const tableData = [
    { id: '1', product: 'Product A', sales: 142, revenue: '$14,200', status: 'Active' },
    { id: '2', product: 'Product B', sales: 98, revenue: '$9,800', status: 'Active' },
    { id: '3', product: 'Product C', sales: 67, revenue: '$6,700', status: 'Low Stock' },
  ];

  const sidebarItems = [
    { label: 'Dashboard', icon: <Dashboard />, active: true, onClick: () => {} },
    { label: 'Analytics', icon: <Assessment />, onClick: () => {} },
    { label: 'Customers', icon: <People />, onClick: () => {} },
    { label: 'Settings', icon: <Settings />, onClick: () => {} },
  ];

  const commands = [
    { id: '1', label: 'Go to Dashboard', icon: <Dashboard />, action: () => console.log('Dashboard') },
    { id: '2', label: 'View Analytics', icon: <Assessment />, action: () => console.log('Analytics') },
    { id: '3', label: 'Manage Users', icon: <People />, action: () => console.log('Users') },
  ];

  const timelineData = [
    {
      id: '1',
      title: 'Order Placed',
      description: 'Customer placed order #1234',
      time: '2 hours ago',
      icon: <Check />,
      color: 'success' as const,
    },
    {
      id: '2',
      title: 'Payment Received',
      description: 'Payment of $125.00 confirmed',
      time: '1 hour ago',
      icon: <Check />,
      color: 'success' as const,
    },
  ];

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />

      {/* Command Palette */}
      <CommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
      />

      {/* Navbar */}
      <Navbar
        title="Dashboard"
        onMenuClick={() => setDrawerOpen(true)}
        actions={
          <Stack direction="row" spacing={2} alignItems="center">
            <ThemeToggle mode={themeMode} onChange={setThemeMode} />
            <NotificationCenter
              notifications={notifications}
              onMarkAsRead={() => {}}
              onClear={() => {}}
            />
            <UserMenu
              user={{
                name: 'John Doe',
                email: 'john@example.com',
              }}
              onLogout={() => console.log('Logout')}
            />
          </Stack>
        }
      />

      {/* Sidebar */}
      <Sidebar
        items={sidebarItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="temporary"
      />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Breadcrumbs */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => {} },
              { label: 'Dashboard' },
            ]}
          />
        </Box>

        {/* Alert */}
        <Box sx={{ mb: 3 }}>
          <Alert severity="info" title="Welcome Back!">
            You have 3 new notifications and 2 pending tasks.
          </Alert>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Total Revenue
                </Typography>
                <Typography variant="h4">$45,231</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="+12.5%" size="small" color="success" />
                  <Typography variant="caption" color="text.secondary">
                    vs last month
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Orders
                </Typography>
                <Typography variant="h4">1,234</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="+8.2%" size="small" color="success" />
                  <Typography variant="caption" color="text.secondary">
                    vs last month
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Customers
                </Typography>
                <Typography variant="h4">892</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="+15.3%" size="small" color="success" />
                  <Typography variant="caption" color="text.secondary">
                    vs last month
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Stack spacing={2}>
                <Typography variant="body2" color="text.secondary">
                  Performance
                </Typography>
                <Gauge value={87} max={100} size={120} color="success" />
              </Stack>
            </Card>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Paper sx={{ mb: 3 }}>
          <Tabs
            tabs={[
              { label: 'Overview', value: 'overview' },
              { label: 'Analytics', value: 'analytics' },
              { label: 'Reports', value: 'reports' },
            ]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </Paper>

        {/* Charts and Data */}
        <Grid container spacing={3}>
          {/* Sales Chart */}
          <Grid item xs={12} md={8}>
            <ChartWrapper
              type="bar"
              title="Monthly Sales"
              data={salesData}
              height={350}
            />
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={4}>
            <Card title="Recent Orders">
              <List items={recentOrders} dense dividers />
            </Card>
          </Grid>

          {/* Data Table */}
          <Grid item xs={12} md={8}>
            <Table
              columns={[
                { id: 'product', label: 'Product', sortable: true },
                { id: 'sales', label: 'Sales', align: 'right', sortable: true },
                { id: 'revenue', label: 'Revenue', align: 'right' },
                {
                  id: 'status',
                  label: 'Status',
                  format: (value: string) => (
                    <Chip
                      label={value}
                      size="small"
                      color={value === 'Active' ? 'success' : 'warning'}
                    />
                  ),
                },
              ]}
              rows={tableData}
              sortable
              pagination
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Grid>

          {/* Timeline */}
          <Grid item xs={12} md={4}>
            <Card title="Recent Activity">
              <Timeline items={timelineData} />
            </Card>
          </Grid>
        </Grid>

        {/* Actions */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Tooltip title="Download Report">
            <Button variant="primary" onClick={() => setShowToast(true)}>
              Generate Report
            </Button>
          </Tooltip>
          <Button variant="outline">Export Data</Button>
          <Button variant="ghost">View More</Button>
        </Box>
      </Container>

      {/* Toast Notification */}
      <Toast
        open={showToast}
        message="Report generated successfully!"
        severity="success"
        onClose={() => setShowToast(false)}
      />
    </ThemeProvider>
  );
}

export default DashboardApp;

