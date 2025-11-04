
import { Container, Grid, Stack, Typography, Divider, Card, Box } from 'components/ui';
import { Input, TextArea, Select, Checkbox, Radio, Switch, Slider, DatePicker, FileUpload, SearchField } from 'components/ui';

interface FormViewProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textAreaValue: string;
  onTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  selectValue: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  checkboxChecked: boolean;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  radioValue: string;
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  switchChecked: boolean;
  onSwitchChange: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  sliderValue: number;
  onSliderChange: (e: Event, value: number | number[]) => void;
  dateValue: string;
  onDateChange: (value: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

/**
 * FormView - Pure presentational component for form elements showcase
 */
export function FormView({
  inputValue,
  onInputChange,
  textAreaValue,
  onTextAreaChange,
  selectValue,
  onSelectChange,
  checkboxChecked,
  onCheckboxChange,
  radioValue,
  onRadioChange,
  switchChecked,
  onSwitchChange,
  sliderValue,
  onSliderChange,
  dateValue,
  onDateChange,
  searchValue,
  onSearchChange,
}: FormViewProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Form Elements
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Comprehensive form controls with validation and accessibility
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Text Inputs */}
      <Card title="Text Inputs" sx={{ mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Input
                label="Text Input"
                placeholder="Enter text"
                value={inputValue}
                onChange={onInputChange}
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                fullWidth
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                fullWidth
              />
              <Input
                label="Number"
                type="number"
                placeholder="Enter number"
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Input
                label="With Error"
                placeholder="Required field"
                error
                helperText="This field is required"
                fullWidth
              />
              <Input
                label="Disabled"
                placeholder="Disabled input"
                disabled
                fullWidth
              />
              <Input
                label="Required"
                placeholder="Required field"
                required
                fullWidth
              />
              <SearchField
                value={searchValue}
                onChange={onSearchChange}
                placeholder="Search..."
                fullWidth
              />
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* TextArea & Select */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="TextArea">
            <Stack spacing={2}>
              <TextArea
                label="Description"
                placeholder="Enter description"
                value={textAreaValue}
                onChange={onTextAreaChange}
                rows={4}
                fullWidth
              />
              <TextArea
                label="Auto-resize"
                placeholder="This textarea auto-resizes"
                minRows={2}
                maxRows={6}
                fullWidth
              />
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Select">
            <Stack spacing={2}>
              <Select
                label="Country"
                options={[
                  { label: 'United States', value: 'us' },
                  { label: 'Canada', value: 'ca' },
                  { label: 'United Kingdom', value: 'uk' },
                  { label: 'Australia', value: 'au' },
                ]}
                value={selectValue}
                onChange={onSelectChange}
                fullWidth
              />
              <Select
                label="With Placeholder"
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
                placeholder="Choose an option"
                fullWidth
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Checkboxes & Radio */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Checkboxes & Switch">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Checkbox</Typography>
                <Checkbox
                  label="Accept terms and conditions"
                  checked={checkboxChecked}
                  onChange={onCheckboxChange}
                />
                <Checkbox
                  label="Subscribe to newsletter"
                />
                <Checkbox
                  label="Disabled checkbox"
                  disabled
                />
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>Switch</Typography>
                <Switch
                  label="Enable notifications"
                  checked={switchChecked}
                  onChange={onSwitchChange}
                />
                <Switch
                  label="Dark mode"
                  color="primary"
                />
                <Switch
                  label="Disabled switch"
                  disabled
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Radio Buttons">
            <Stack spacing={2}>
              <Radio
                label="Choose your plan"
                options={[
                  { label: 'Free Plan', value: '1' },
                  { label: 'Pro Plan', value: '2' },
                  { label: 'Enterprise Plan', value: '3' },
                ]}
                value={radioValue}
                onChange={onRadioChange}
                />
              <Radio
                label="Horizontal layout"
                options={[
                  { label: 'Yes', value: 'yes' },
                  { label: 'No', value: 'no' },
                ]}
                row
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Slider & Date Picker */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Slider">
            <Stack spacing={3}>
              <Box>
                <Slider
                  label="Volume"
                  value={sliderValue}
                  onChange={onSliderChange}
                  min={0}
                  max={100}
                />
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  Value: {sliderValue}
                </Typography>
              </Box>

              <Box>
                <Slider
                  label="Price Range"
                  value={[20, 80]}
                  min={0}
                  max={100}
                  marks
                />
              </Box>

              <Box>
                <Slider
                  label="With Steps"
                  value={50}
                  min={0}
                  max={100}
                  step={10}
                  marks
                  valueLabelDisplay="on"
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Date Picker & File Upload">
            <Stack spacing={3}>
              <DatePicker
                label="Birth Date"
                value={dateValue}
                onChange={onDateChange}
                fullWidth
              />
              <DatePicker
                label="Event Date"
                min={new Date().toISOString().split('T')[0]}
                fullWidth
              />
              <FileUpload
                label="Upload Document"
                accept=".pdf,.doc,.docx"
                maxSize={5}
                onChange={(files) => console.log('Files:', files)}
              />
              <FileUpload
                label="Upload Images"
                accept="image/*"
                multiple
                maxSize={10}
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Form Example */}
      <Card title="Complete Form Example">
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Input label="First Name" placeholder="John" required fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Last Name" placeholder="Doe" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Input label="Email" type="email" placeholder="john@example.com" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextArea label="Message" placeholder="Your message" rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Checkbox label="I agree to the terms and conditions" />
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </Container>
  );
}

