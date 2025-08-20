import {
  Flex,
  Text,
  IconButton,
  Box,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useBreakpointValue
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  BellIcon,
  ChevronDownIcon
} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

const Header = ({ onOpen }) => {
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard Overview';
      case '/analytics':
        return 'Analytics & Insights';
      case '/settings':
        return 'Application Settings';
      case '/calendar':
        return 'Calendar';
      case '/messages':
        return 'Messages';
      case '/reports':
        return 'Reports';
      default:
        return 'Dashboard';
    }
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p="4"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      shadow="sm"
      zIndex="sticky"
      position="sticky"
      top="0"
    >
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        variant="ghost"
      />
      <Text fontSize="2xl" fontWeight="bold" color="brand.500" display={{ base: 'none', md: 'block' }}>
        {getPageTitle()}
      </Text>
      <Box>
        <IconButton aria-label="Notifications" icon={<BellIcon />} variant="ghost" mr="2" />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
            <Avatar size="sm" name="John Doe" src="https://bit.ly/dan-abramov" mr="2" />
            John Doe
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
