import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from 'components/ui/theme';
import {
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  Button,
  Badge,
  Chip,
  Tooltip,
  Input,
  TextArea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  SearchField,
  Card,
  List,
  Alert,
  ProgressBar,
  Spinner,
  Skeleton,
  ChartWrapper,
  Gauge,
} from 'components/ui';
import { Star, Favorite, Mail, Settings } from '@mui/icons-material';

/**
 * Component Showcase
 * Demonstrates all UI components in one place
 */
export function ComponentShowcase() {
  const [sliderValue, setSliderValue] = React.useState(50);
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');
  const [selectValue, setSelectValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  const chartData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 48 },
    { label: 'Apr', value: 65 },
  ];

  const listItems = [
    { id: '1', primary: 'Item 1', secondary: 'Description', icon: <Star /> },
    { id: '2', primary: 'Item 2', secondary: 'Description', icon: <Favorite /> },
    { id: '3', primary: 'Item 3', secondary: 'Description', icon: <Mail /> },
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          UI Component Showcase
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All 58 components in one place for easy reference
        </Typography>

        {/* Basic Elements */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Basic Elements
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card title="Buttons">
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="primary" size="small">Small</Button>
                  <Button variant="primary" size="large">Large</Button>
                  <Button variant="primary" loading>Loading</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card title="Typography">
                <Stack spacing={2}>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="body1">Body 1 text</Typography>
                  <Typography variant="body2">Body 2 text</Typography>
                  <Typography variant="caption">Caption text</Typography>
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card title="Badges & Chips">
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2}>
                    <Badge content={5} color="error">
                      <Mail />
                    </Badge>
                    <Badge content={10} color="primary">
                      <Settings />
                    </Badge>
                    <Badge variant="dot" color="success">
                      <Star />
                    </Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="Default" />
                    <Chip label="Primary" color="primary" />
                    <Chip label="Success" color="success" />
                    <Chip label="Error" color="error" />
                    <Chip label="Deletable" onDelete={() => {}} />
                    <Chip label="Clickable" onClick={() => {}} />
                  </Stack>
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card title="Tooltips">
                <Stack direction="row" spacing={2}>
                  <Tooltip title="Default tooltip">
                    <Button variant="outline">Hover me</Button>
                  </Tooltip>
                  <Tooltip title="Top placement" placement="top" arrow>
                    <Button variant="outline">Top</Button>
                  </Tooltip>
                  <Tooltip title="Right placement" placement="right" arrow>
                    <Button variant="outline">Right</Button>
                  </Tooltip>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Form Elements */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Form Elements
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card title="Text Inputs">
                <Stack spacing={2}>
                  <Input label="Text Input" placeholder="Enter text" />
                  <Input label="Email" type="email" placeholder="Enter email" />
                  <Input label="Password" type="password" />
                  <Input label="With Error" error helperText="This field is required" />
                  <TextArea label="Text Area" placeholder="Enter long text" rows={3} />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card title="Select & Search">
                <Stack spacing={2}>
                  <Select
                    label="Select Option"
                    options={[
                      { label: 'Option 1', value: '1' },
                      { label: 'Option 2', value: '2' },
                      { label: 'Option 3', value: '3' },
                    ]}
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                  />
                  <SearchField
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Search..."
                  />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Checkbox & Switch">
                <Stack spacing={2}>
                  <Checkbox
                    label="Checkbox option"
                    checked={checkboxChecked}
                    onChange={(e, checked) => setCheckboxChecked(checked)}
                  />
                  <Switch
                    label="Switch option"
                    checked={switchChecked}
                    onChange={(e, checked) => setSwitchChecked(checked)}
                  />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Radio Buttons">
                <Radio
                  options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                  ]}
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Slider">
                <Slider
                  value={sliderValue}
                  onChange={(e, value) => setSliderValue(value as number)}
                  min={0}
                  max={100}
                />
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  Value: {sliderValue}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Feedback */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Feedback Components
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Alert severity="success" title="Success">
                  This is a success alert with a title!
                </Alert>
                <Alert severity="info">
                  This is an informational alert.
                </Alert>
                <Alert severity="warning">
                  This is a warning alert.
                </Alert>
                <Alert severity="error">
                  This is an error alert.
                </Alert>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Progress Bar">
                <Stack spacing={2}>
                  <ProgressBar value={75} showLabel />
                  <ProgressBar value={50} color="success" />
                  <ProgressBar variant="indeterminate" />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Spinner">
                <Stack spacing={2} alignItems="center">
                  <Spinner size="small" />
                  <Spinner size="medium" />
                  <Spinner size="large" />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card title="Skeleton">
                <Stack spacing={1}>
                  <Skeleton variant="text" count={3} />
                  <Skeleton variant="rectangular" height={60} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Data Display */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Data Display
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card title="Card Example" subtitle="With subtitle">
                This is a card component with various content.
                Cards are containers for related content.
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card title="List Example">
                <List items={listItems} dividers />
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Visualization */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Visualization
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <ChartWrapper
                type="bar"
                title="Bar Chart Example"
                data={chartData}
                height={300}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Gauge
                  value={85}
                  max={100}
                  label="Performance"
                  color="success"
                  size={200}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ChartWrapper
                type="line"
                title="Line Chart Example"
                data={chartData}
                height={300}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <ChartWrapper
                type="pie"
                title="Pie Chart Example"
                data={chartData}
                height={300}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body2" color="text.secondary">
            UI Component Library - 58 Components
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Built with React + TypeScript + Material-UI
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ComponentShowcase;

