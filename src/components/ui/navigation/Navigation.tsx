
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Tabs as MuiTabs,
  Tab as MuiTab,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Pagination as MuiPagination,
  Stepper as MuiStepper,
  Step,
  StepLabel,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Menu as MenuIcon,
  NavigateNext,
} from '@mui/icons-material';

// ============ Navbar Component ============
export interface NavbarProps {
  title?: string;
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  elevation?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  logo,
  actions,
  onMenuClick,
  showMenuButton = true,
  elevation = 1,
}) => {
  return (
    <AppBar position="sticky" elevation={elevation}>
      <Toolbar>
        {showMenuButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {logo && <Box sx={{ mr: 2 }}>{logo}</Box>}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        {actions}
      </Toolbar>
    </AppBar>
  );
};

// ============ Sidebar Component ============
export interface SidebarItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  open?: boolean;
  onClose?: () => void;
  variant?: 'permanent' | 'persistent' | 'temporary';
  width?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  open = true,
  onClose,
  variant = 'temporary',
  width = 240,
}) => {
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={item.onClick}
              selected={item.active}
              disabled={item.disabled}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

// ============ Tabs Component ============
export interface Tab {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  orientation?: 'horizontal' | 'vertical';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  variant = 'standard',
  orientation = 'horizontal',
}) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      variant={variant}
      orientation={orientation}
      aria-label="tabs"
    >
      {tabs.map((tab) => (
        <MuiTab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          disabled={tab.disabled}
          icon={tab.icon as React.ReactElement | undefined}
          iconPosition={tab.icon ? "start" : undefined}
        />
      ))}
    </MuiTabs>
  );
};

// ============ Breadcrumbs Component ============
export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = <NavigateNext fontSize="small" />,
}) => {
  return (
    <MuiBreadcrumbs separator={separator} aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Typography key={index} color="text.primary">
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.href || '#'}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

// ============ Pagination Component ============
export interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
  size?: 'small' | 'medium' | 'large';
  showFirstButton?: boolean;
  showLastButton?: boolean;
  disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
  size = 'medium',
  showFirstButton = true,
  showLastButton = true,
  disabled = false,
}) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={handleChange}
      size={size}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      disabled={disabled}
      color="primary"
    />
  );
};

// ============ Stepper Component ============
export interface StepItem {
  label: string;
  description?: string;
  optional?: boolean;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  orientation = 'horizontal',
}) => {
  return (
    <MuiStepper activeStep={activeStep} orientation={orientation}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel
            optional={
              step.optional ? (
                <Typography variant="caption">Optional</Typography>
              ) : null
            }
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

// ============ BottomNav Component ============
export interface BottomNavItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  value: string;
  onChange: (value: string) => void;
  showLabels?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  value,
  onChange,
  showLabels = true,
}) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels={showLabels}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      {items.map((item) => (
        <BottomNavigationAction
          key={item.value}
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
};

/**
 * Navigation components examples:
 *
 * @example
 * ```tsx
 * <Navbar
 *   title="My App"
 *   onMenuClick={() => setDrawerOpen(true)}
 *   actions={<IconButton><Notifications /></IconButton>}
 * />
 *
 * <Sidebar
 *   items={[
 *     { label: 'Home', icon: <Home />, onClick: () => navigate('/') },
 *     { label: 'Settings', icon: <Settings />, onClick: () => navigate('/settings') }
 *   ]}
 *   open={drawerOpen}
 *   onClose={() => setDrawerOpen(false)}
 * />
 *
 * <Tabs
 *   tabs={[
 *     { label: 'Tab 1', value: '1' },
 *     { label: 'Tab 2', value: '2' }
 *   ]}
 *   value={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */

