import {type ReactNode} from 'react';
import {DialogActions, DialogContent, IconButton, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {DialogTitleContainer, StyledDialog} from './Modal.styled';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    actions?: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    showCloseButton?: boolean;
}
 
const Modal = ({
                   open,
                   onClose,
                   title,
                   children,
                   actions,
                   maxWidth = 'sm',
                   fullWidth = true,
                   showCloseButton = true,
               }: ModalProps) => {
    return (
        <StyledDialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            {title && (
                <DialogTitleContainer>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    {showCloseButton && (
                        <IconButton
                            aria-label="close"
                            onClick={onClose}
                            sx={{color: (theme) => theme.palette.grey[500]}}
                        >
                            <CloseIcon/>
                        </IconButton>
                    )}
                </DialogTitleContainer>
            )}

            <DialogContent dividers>
                {children}
            </DialogContent>

            {actions && (
                <DialogActions>
                    {actions}
                </DialogActions>
            )}
        </StyledDialog>
    );
};

export default Modal;

