
import {
  Container as MuiContainer,
  Grid as MuiGrid,
  Stack as MuiStack,
  Box as MuiBox,
  Paper as MuiPaper,
} from '@mui/material';
import type {
  ContainerProps as MuiContainerProps,
  GridProps as MuiGridProps,
  StackProps as MuiStackProps,
  BoxProps as MuiBoxProps,
  PaperProps as MuiPaperProps,
} from '@mui/material';

// ============ Container Component ============
export interface ContainerProps extends MuiContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  ...props
}) => {
  return (
    <MuiContainer maxWidth={maxWidth} {...props}>
      {children}
    </MuiContainer>
  );
};

// ============ Grid Component ============
export interface GridProps extends MuiGridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number | 'auto';
  sm?: number | 'auto';
  md?: number | 'auto';
  lg?: number | 'auto';
  xl?: number | 'auto';
  spacing?: number;
}

export const Grid: React.FC<GridProps> = ({
  children,
  container = false,
  item = false,
  spacing = 2,
  ...props
}) => {
  return (
    <MuiGrid container={container} item={item} spacing={container ? spacing : undefined} {...props}>
      {children}
    </MuiGrid>
  );
};

// ============ Stack Component ============
export interface StackProps extends MuiStackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: number;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'column',
  spacing = 2,
  alignItems,
  justifyContent,
  ...props
}) => {
  return (
    <MuiStack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </MuiStack>
  );
};

// ============ Box Component ============
export interface BoxProps extends MuiBoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

// ============ Spacer Component ============
export interface SpacerProps {
  size?: number | string;
  direction?: 'horizontal' | 'vertical';
}

export const Spacer: React.FC<SpacerProps> = ({
  size = 16,
  direction = 'vertical',
}) => {
  const isVertical = direction === 'vertical';
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  return (
    <Box
      sx={{
        width: isVertical ? '100%' : sizeValue,
        height: isVertical ? sizeValue : '100%',
      }}
    />
  );
};

// ============ Section Component ============
export interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  py?: number;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  bgColor,
  py = 6,
  fullWidth = false,
}) => {
  return (
    <Box
      component="section"
      sx={{
        py,
        bgcolor: bgColor,
        width: '100%',
      }}
    >
      <Container maxWidth={fullWidth ? false : 'lg'}>
        {(title || subtitle) && (
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            {title && (
              <Box
                component="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {title}
              </Box>
            )}
            {subtitle && (
              <Box
                component="p"
                sx={{
                  fontSize: '1.125rem',
                  color: 'text.secondary',
                }}
              >
                {subtitle}
              </Box>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

// ============ ScrollArea Component ============
export interface ScrollAreaProps {
  children: React.ReactNode;
  maxHeight?: number | string;
  horizontal?: boolean;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  maxHeight = 400,
  horizontal = false,
}) => {
  return (
    <Box
      sx={{
        maxHeight: horizontal ? 'none' : maxHeight,
        maxWidth: horizontal ? maxHeight : 'none',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderRadius: 4,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 4,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

// ============ Paper Component ============
export interface PaperProps extends MuiPaperProps {
  children: React.ReactNode;
  elevation?: number;
  variant?: 'elevation' | 'outlined';
}

export const Paper: React.FC<PaperProps> = ({
  children,
  elevation = 1,
  variant = 'elevation',
  ...props
}) => {
  return (
    <MuiPaper elevation={elevation} variant={variant} {...props}>
      {children}
    </MuiPaper>
  );
};

/**
 * Layout components examples:
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <Grid container spacing={3}>
 *     <Grid item xs={12} md={6}>
 *       <Card>Content</Card>
 *     </Grid>
 *     <Grid item xs={12} md={6}>
 *       <Card>Content</Card>
 *     </Grid>
 *   </Grid>
 * </Container>
 *
 * <Stack direction="row" spacing={2} justifyContent="space-between">
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </Stack>
 *
 * <Section title="Features" subtitle="What we offer">
 *   <Grid container spacing={3}>
 *     ...feature cards
 *   </Grid>
 * </Section>
 *
 * <ScrollArea maxHeight={300}>
 *   <List items={longList} />
 * </ScrollArea>
 *
 * <Paper elevation={2} sx={{ p: 3 }}>
 *   <Typography>Content in paper</Typography>
 * </Paper>
 * ```
 */

