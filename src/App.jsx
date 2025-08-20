import { useState } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
  useBreakpointValue
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage'; // New import
import FormsPage from './pages/FormsPage'; // New import

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" minH="100vh">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      {isOpen && isMobile && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          w="full"
          h="full"
          bg="blackAlpha.600"
          zIndex="overlay"
          onClick={onClose}
        />
      )}
      <Flex
        flex="1"
        ml={{ base: '0', md: '250px' }}
        direction="column"
        transition="margin-left 0.3s ease-in-out"
      >
        <Header onOpen={onOpen} />
        <Box as="main" p={{ base: '4', md: '6' }} flex="1">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/users" element={<UsersPage />} /> {/* New Route */}
            <Route path="/forms" element={<FormsPage />} /> {/* New Route */}
            {/* Add more routes here as needed */}
          </Routes>
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
