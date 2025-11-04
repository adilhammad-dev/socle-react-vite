import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Button, Badge, Chip, Tooltip, Box } from 'components/ui';
import { Star, Favorite, Mail } from '@mui/icons-material';

/**
 * Basic View - Pure presentational component for basic elements showcase
 */
export function BasicView() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Basic Elements
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Fundamental UI building blocks for your application
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Buttons */}
      <Card title="Buttons" sx={{ mb: 3 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" gutterBottom>Variants</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Sizes</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>States</Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" fullWidth>Full Width</Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>With Icons</Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="primary" startIcon={<Star />}>Start Icon</Button>
              <Button variant="primary" endIcon={<Favorite />}>End Icon</Button>
            </Stack>
          </Box>
        </Stack>
      </Card>

      {/* Typography */}
      <Card title="Typography" sx={{ mb: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="body1">Body 1 - Regular text for paragraphs</Typography>
          <Typography variant="body2">Body 2 - Smaller text for secondary content</Typography>
          <Typography variant="caption">Caption - Very small text</Typography>
        </Stack>
      </Card>

      {/* Badges & Chips */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card title="Badges">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Standard Badges</Typography>
                <Stack direction="row" spacing={3}>
                  <Badge content={5} color="error">
                    <Mail />
                  </Badge>
                  <Badge content={10} color="primary">
                    <Star />
                  </Badge>
                  <Badge content={99} color="success">
                    <Favorite />
                  </Badge>
                </Stack>
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>Dot Badges</Typography>
                <Stack direction="row" spacing={3}>
                  <Badge variant="dot" color="success">
                    <Star />
                  </Badge>
                  <Badge variant="dot" color="error">
                    <Mail />
                  </Badge>
                  <Badge variant="dot" color="warning">
                    <Favorite />
                  </Badge>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Chips">
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" gutterBottom>Filled Chips</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Error" color="error" />
                  <Chip label="Warning" color="warning" />
                </Stack>
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>Outlined Chips</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Outlined" variant="outlined" />
                  <Chip label="Deletable" variant="outlined" onDelete={() => alert('Deleted!')} />
                  <Chip label="Clickable" variant="outlined" onClick={() => alert('Clicked!')} />
                </Stack>
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>With Icons</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Favorite" icon={<Favorite />} color="error" />
                  <Chip label="Star" icon={<Star />} color="warning" />
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Tooltips & Dividers */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Card title="Tooltips">
            <Stack spacing={2}>
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
                <Tooltip title="Bottom placement" placement="bottom" arrow>
                  <Button variant="outline">Bottom</Button>
                </Tooltip>
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Dividers">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Horizontal</Typography>
                <Divider />
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>With Text</Typography>
                <Divider text="OR" textAlign="center" />
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>Vertical (in flex)</Typography>
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" />}>
                  <Typography>Item 1</Typography>
                  <Typography>Item 2</Typography>
                  <Typography>Item 3</Typography>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

