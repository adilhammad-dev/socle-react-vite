import { IconButton } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from 'theme/useColorMode';
import { FaMoon, FaSun } from 'react-icons/fa';

/**
 * ColorModeToggle Component
 * 
 * A button component that allows users to toggle between light and dark modes.
 * Uses Chakra UI's useColorMode hook and displays appropriate icons.
 * 
 * @example
 * ```tsx
 * <ColorModeToggle />
 * ```
 */
export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);
  const label = useColorModeValue('Switch to dark mode', 'Switch to light mode');

  return (
    <IconButton
      aria-label={label}
      icon={icon}
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
    />
  );
};

export default ColorModeToggle;

