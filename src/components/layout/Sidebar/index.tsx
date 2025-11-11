import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useState} from 'react';
import {SidebarContainer, SidebarFooter, SidebarHeader} from './Sidebar.styled';

export interface SidebarItem {
    label: string;
    icon?: React.ReactNode;
    path?: string;
    onClick?: () => void;
    badge?: number | string;
}

export interface SidebarProps {
    open: boolean;
    onClose: () => void;
    items?: SidebarItem[];
    width?: number;
    variant?: 'permanent' | 'persistent' | 'temporary';
    title?: string;
    footer?: React.ReactNode;
}

const defaultItems: SidebarItem[] = [
    {label: 'Home', icon: <HomeIcon/>, path: '/'},
    {label: 'Dashboard', icon: <DashboardIcon/>, path: '/dashboard'},
    {label: 'Users', icon: <PeopleIcon/>, path: '/users'},
    {label: 'Settings', icon: <SettingsIcon/>, path: '/settings'},
];

const Sidebar = ({
                     open,
                     onClose,
                     items = defaultItems,
                     width = 260,
                     variant = 'temporary',
                     title = 'Menu',
                     footer,
                 }: SidebarProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemClick = (index: number, item: SidebarItem) => {
        setSelectedIndex(index);

        if (item.onClick) {
            item.onClick();
        } else if (item.path) {
            window.location.href = item.path;
        }

        // Close sidebar on mobile after selection (only for temporary variant)
        if (variant === 'temporary') {
            onClose();
        }
    };

    return (
        <SidebarContainer>
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
                        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                    },
                }}
            >
                <SidebarHeader>
                    <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    {variant === 'temporary' && (
                        <IconButton onClick={onClose} aria-label="close sidebar">
                            <ChevronLeftIcon/>
                        </IconButton>
                    )}
                </SidebarHeader>

                <Divider/>

                <List sx={{flexGrow: 1, pt: 1}}>
                    {items.map((item, index) => (
                        <ListItemButton
                            key={item.label}
                            selected={selectedIndex === index}
                            onClick={() => handleItemClick(index, item)}
                            sx={{
                                mx: 1,
                                borderRadius: 1,
                                '&.Mui-selected': {
                                    backgroundColor: (theme) => theme.palette.action.selected,
                                    '&:hover': {
                                        backgroundColor: (theme) => theme.palette.action.selected,
                                    },
                                },
                            }}
                        >
                            {item.icon && (
                                <ListItemIcon sx={{minWidth: 40}}>
                                    {item.icon}
                                </ListItemIcon>
                            )}
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.875rem',
                                    fontWeight: selectedIndex === index ? 600 : 400,
                                }}
                            />
                            {item.badge && (
                                <Box
                                    sx={{
                                        backgroundColor: 'error.main',
                                        color: 'error.contrastText',
                                        borderRadius: '12px',
                                        px: 1,
                                        py: 0.25,
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        minWidth: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {item.badge}
                                </Box>
                            )}
                        </ListItemButton>
                    ))}
                </List>

                {footer && (
                    <>
                        <Divider/>
                        <SidebarFooter>
                            {footer}
                        </SidebarFooter>
                    </>
                )}
            </Drawer>
        </SidebarContainer>
    );
};

export default Sidebar;
