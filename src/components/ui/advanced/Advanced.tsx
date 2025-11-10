import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Dialog,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import {Close, DarkMode, LightMode, Logout, Notifications, Search, Translate,} from '@mui/icons-material';

// ============ CommandPalette Component ============
export interface Command {
    id: string;
    label: string;
    icon?: React.ReactNode;
    action: () => void;
    keywords?: string[];
}

export interface CommandPaletteProps {
    commands: Command[];
    open: boolean;
    onClose: () => void;
    placeholder?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
                                                                  commands,
                                                                  open,
                                                                  onClose,
                                                                  placeholder = 'Type a command or search...',
                                                              }) => {
    const [search, setSearch] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const filteredCommands = React.useMemo(() => {
        if (!search) return commands;

        const lowerSearch = search.toLowerCase();
        return commands.filter((cmd) => {
            const labelMatch = cmd.label.toLowerCase().includes(lowerSearch);
            const keywordMatch = cmd.keywords?.some((kw) => kw.toLowerCase().includes(lowerSearch));
            return labelMatch || keywordMatch;
        });
    }, [commands, search]);

    React.useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
            e.preventDefault();
            filteredCommands[selectedIndex].action();
            onClose();
            setSearch('');
        } else if (e.key === 'Escape') {
            onClose();
            setSearch('');
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {position: 'absolute', top: '20%', m: 0},
            }}
        >
            <Box sx={{p: 2}}>
                <TextField
                    fullWidth
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search/>
                            </InputAdornment>
                        ),
                        endAdornment: search && (
                            <InputAdornment position="end">
                                <IconButton size="small" onClick={() => setSearch('')}>
                                    <Close/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <List sx={{maxHeight: 400, overflow: 'auto'}}>
                {filteredCommands.length === 0 ? (
                    <ListItem>
                        <ListItemText
                            primary="No results found"
                            secondary="Try a different search term"
                        />
                    </ListItem>
                ) : (
                    filteredCommands.map((cmd, index) => (
                        <ListItem
                            key={cmd.id}
                            button
                            selected={index === selectedIndex}
                            onClick={() => {
                                cmd.action();
                                onClose();
                                setSearch('');
                            }}
                            onMouseEnter={() => setSelectedIndex(index)}
                        >
                            {cmd.icon && <Box sx={{mr: 2}}>{cmd.icon}</Box>}
                            <ListItemText primary={cmd.label}/>
                        </ListItem>
                    ))
                )}
            </List>

            <Box sx={{p: 1, bgcolor: 'action.hover', display: 'flex', gap: 1, fontSize: '0.75rem'}}>
                <Typography variant="caption">↑↓ Navigate</Typography>
                <Typography variant="caption">Enter Select</Typography>
                <Typography variant="caption">Esc Close</Typography>
            </Box>
        </Dialog>
    );
};

// ============ NotificationCenter Component ============
export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: Date;
    read?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
    action?: {
        label: string;
        onClick: () => void;
    };
}

export interface NotificationCenterProps {
    notifications: Notification[];
    onMarkAsRead?: (id: string) => void;
    onMarkAllAsRead?: () => void;
    onClear?: (id: string) => void;
    onClearAll?: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
                                                                          notifications,
                                                                          onMarkAllAsRead,
                                                                          onClear,
                                                                          onClearAll,
                                                                      }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const unreadCount = notifications.filter((n) => !n.read).length;

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getNotificationColor = (type?: string) => {
        switch (type) {
            case 'success':
                return 'success.main';
            case 'warning':
                return 'warning.main';
            case 'error':
                return 'error.main';
            default:
                return 'info.main';
        }
    };

    return (
        <>
            <IconButton onClick={handleOpen} color="inherit">
                <Badge badgeContent={unreadCount} color="error">
                    <Notifications/>
                </Badge>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {width: 360, maxHeight: 480},
                }}
            >
                <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant="h6">Notifications</Typography>
                    {unreadCount > 0 && onMarkAllAsRead && (
                        <Typography
                            variant="caption"
                            color="primary"
                            sx={{cursor: 'pointer'}}
                            onClick={() => {
                                onMarkAllAsRead();
                                handleClose();
                            }}
                        >
                            Mark all as read
                        </Typography>
                    )}
                </Box>

                <Divider/>

                {notifications.length === 0 ? (
                    <Box sx={{p: 4, textAlign: 'center'}}>
                        <Typography variant="body2" color="text.secondary">
                            No notifications
                        </Typography>
                    </Box>
                ) : (
                    <List sx={{p: 0}}>
                        {notifications.map((notification) => (
                            <React.Fragment key={notification.id}>
                                <ListItem
                                    sx={{
                                        bgcolor: notification.read ? 'transparent' : 'action.hover',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{display: 'flex', width: '100%', mb: 1}}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                bgcolor: getNotificationColor(notification.type),
                                                mr: 1,
                                                mt: 0.5,
                                            }}
                                        />
                                        <Box sx={{flex: 1}}>
                                            <Typography variant="subtitle2">{notification.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {notification.message}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {notification.timestamp.toLocaleString()}
                                            </Typography>
                                        </Box>
                                        {onClear && (
                                            <IconButton
                                                size="small"
                                                onClick={() => onClear(notification.id)}
                                            >
                                                <Close fontSize="small"/>
                                            </IconButton>
                                        )}
                                    </Box>

                                    {notification.action && (
                                        <Typography
                                            variant="caption"
                                            color="primary"
                                            sx={{cursor: 'pointer', mt: 1}}
                                            onClick={() => {
                                                notification.action?.onClick();
                                                handleClose();
                                            }}
                                        >
                                            {notification.action.label}
                                        </Typography>
                                    )}
                                </ListItem>
                                <Divider/>
                            </React.Fragment>
                        ))}
                    </List>
                )}

                {notifications.length > 0 && onClearAll && (
                    <>
                        <Divider/>
                        <Box sx={{p: 1, textAlign: 'center'}}>
                            <Typography
                                variant="caption"
                                color="error"
                                sx={{cursor: 'pointer'}}
                                onClick={() => {
                                    onClearAll();
                                    handleClose();
                                }}
                            >
                                Clear all notifications
                            </Typography>
                        </Box>
                    </>
                )}
            </Menu>
        </>
    );
};

// ============ ThemeToggle Component ============
export interface ThemeToggleProps {
    mode: 'light' | 'dark';
    onChange: (mode: 'light' | 'dark') => void;
    size?: 'small' | 'medium' | 'large';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
                                                            mode,
                                                            onChange,
                                                            size = 'medium',
                                                        }) => {
    const handleToggle = () => {
        onChange(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <LightMode fontSize={size} sx={{opacity: mode === 'light' ? 1 : 0.5}}/>
            <Switch
                checked={mode === 'dark'}
                onChange={handleToggle}
                inputProps={{'aria-label': 'toggle theme'}}
            />
            <DarkMode fontSize={size} sx={{opacity: mode === 'dark' ? 1 : 0.5}}/>
        </Box>
    );
};

// ============ LanguageSelector Component ============
export interface Language {
    code: string;
    label: string;
    flag?: string;
}

export interface LanguageSelectorProps {
    languages: Language[];
    currentLanguage: string;
    onChange: (languageCode: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
                                                                      languages,
                                                                      currentLanguage,
                                                                      onChange,
                                                                  }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (code: string) => {
        onChange(code);
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleOpen} color="inherit">
                <Translate/>
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        selected={lang.code === currentLanguage}
                        onClick={() => handleSelect(lang.code)}
                    >
                        {lang.flag && <span style={{marginRight: 8}}>{lang.flag}</span>}
                        {lang.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

// ============ UserMenu Component ============
export interface UserMenuProps {
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
    menuItems?: Array<{
        label: string;
        icon?: React.ReactNode;
        onClick: () => void;
        divider?: boolean;
    }>;
    onLogout?: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
                                                      user,
                                                      onLogout,
                                                  }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleOpen} sx={{p: 0}}>
                <Avatar src={user.avatar} alt={user.name}>
                    {user.name.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {minWidth: 200},
                }}
            >
                <Box sx={{px: 2, py: 1.5}}>
                    <Typography variant="subtitle2">{user.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                        {user.email}
                    </Typography>
                </Box>

                <Divider/>


                {onLogout && (
                    <>
                        <Divider/>
                        <MenuItem
                            onClick={() => {
                                onLogout();
                                handleClose();
                            }}
                        >
                            <Box sx={{mr: 2, display: 'flex'}}>
                                <Logout/>
                            </Box>
                            Logout
                        </MenuItem>
                    </>
                )}
            </Menu>
        </>
    );
};

/**
 * Advanced components examples:
 *
 * @example
 * ```tsx
 * <CommandPalette
 *   open={paletteOpen}
 *   onClose={() => setPaletteOpen(false)}
 *   commands={[
 *     { id: '1', label: 'Go to Dashboard', action: () => navigate('/') },
 *     { id: '2', label: 'New Project', icon: <Add />, action: () => {} }
 *   ]}
 * />
 *
 * <NotificationCenter
 *   notifications={[
 *     { id: '1', title: 'New message', message: 'You have a new message', timestamp: new Date() }
 *   ]}
 *   onMarkAsRead={(id) => {}}
 * />
 *
 * <ThemeToggle mode={theme} onChange={setTheme} />
 *
 * <LanguageSelector
 *   languages={[
 *     { code: 'en', label: 'English', flag: '🇺🇸' },
 *     { code: 'es', label: 'Spanish', flag: '🇪🇸' }
 *   ]}
 *   currentLanguage={lang}
 *   onChange={setLang}
 * />
 *
 * <UserMenu
 *   user={{ name: 'John Doe', email: 'john@example.com' }}
 *   onLogout={() => console.log('Logout')}
 * />
 * ```
 */

