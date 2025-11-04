import { Container, Stack, Typography, Divider, Button, Card } from 'components/ui';
import { ExamplePageWrapper } from './ExamplePage.styled';

export function ExamplePage() {
  return (
    <ExamplePageWrapper>
      <Container>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Component Examples</Typography>
            <Typography variant="body1">
              Simple examples of UI components
            </Typography>
          </Stack>

          <Divider />

          <Card>
            <Stack spacing={3}>
              <Typography variant="h4">Buttons</Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
              </Stack>
            </Stack>
          </Card>

          <Card>
            <Stack spacing={3}>
              <Typography variant="h4">More Examples</Typography>
              <Typography variant="body1">
                Visit the Storybook for complete component documentation and interactive examples.
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </ExamplePageWrapper>
  );
}

export default ExamplePage;

