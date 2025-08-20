import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Button
} from '@chakra-ui/react';
import {
  CloseIcon,
  CalendarIcon,
  ChatIcon,
  InfoIcon,
  SettingsIcon,
  ViewIcon, // Dashboard
  EditIcon // New: for Forms page
} from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa'; // Import FaUserAlt for user icon
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Dashboard', icon: ViewIcon, path: '/' },
    { name: 'Analytics', icon: InfoIcon, path: '/analytics' },
    { name: 'Users', icon: FaUserAlt, path: '/users' }, // Use FaUserAlt
    { name: 'Forms', icon: EditIcon, path: '/forms' }, // New Nav Item
    { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
    { name: 'Messages', icon: ChatIcon, path: '/messages' },
    { name: 'Reports', icon: InfoIcon, path: '/reports' },
    { name: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="full"
      w={{ base: 'full', md: '250px' }}
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      _dark={{ bg: 'gray.900', borderColor: 'gray.700' }}
      zIndex="sticky"
      transform={{ base: isOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'translateX(0)' }}
      transition="transform 0.3s ease-in-out"
      pt="4"
      pb="4"
      px="4"
      shadow={{ base: 'lg', md: 'none' }}
    >
      <Flex justify="space-between" align="center" mb="8" display={{ base: 'flex', md: 'none' }}>
        <Text fontSize="2xl" fontWeight="bold" color="brand.500">Dashboard</Text>
        <IconButton
          aria-label="Close menu"
          icon={<CloseIcon />}
          onClick={onClose}
          variant="ghost"
        />
      </Flex>
      <Stack spacing="4">
        {navItems.map((item) => (
          <Button
            key={item.name}
            as={NavLink}
            to={item.path}
            leftIcon={<item.icon />}
            variant="ghost"
            justifyContent="flex-start"
            size="lg"
            colorScheme="brand"
            _activeLink={{
              bg: 'brand.50',
              color: 'brand.600',
              fontWeight: 'bold',
              _dark: { bg: 'brand.800', color: 'brand.100' }
            }}
            onClick={onClose} // Close sidebar on mobile after navigation
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
