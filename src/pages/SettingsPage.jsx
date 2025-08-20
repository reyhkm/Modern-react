import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Button,
  Stack,
  Textarea,
  Select
} from '@chakra-ui/react';
import DashboardCard from '../components/DashboardCard';

const SettingsPage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="6" color="gray.700">Application Settings</Heading>
      <Stack spacing={6}>
        <DashboardCard title="General Settings">
          <FormControl id="site-name" mb="4">
            <FormLabel>Site Name</FormLabel>
            <Input defaultValue="Modern Chakra Dashboard" />
          </FormControl>
          <FormControl id="site-description" mb="4">
            <FormLabel>Site Description</FormLabel>
            <Textarea defaultValue="A modern and responsive dashboard application." />
          </FormControl>
          <FormControl display="flex" alignItems="center" mb="4">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable Email Alerts
            </FormLabel>
            <Switch id="email-alerts" defaultChecked />
          </FormControl>
          <Button colorScheme="brand">Save General Settings</Button>
        </DashboardCard>

        <DashboardCard title="User Management">
          <FormControl id="default-role" mb="4">
            <FormLabel>Default New User Role</FormLabel>
            <Select placeholder="Select role" defaultValue="viewer">
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </Select>
          </FormControl>
          <FormControl display="flex" alignItems="center" mb="4">
            <FormLabel htmlFor="registration-open" mb="0">
              Allow New User Registration
            </FormLabel>
            <Switch id="registration-open" defaultChecked />
          </FormControl>
          <Button colorScheme="brand">Update User Settings</Button>
        </DashboardCard>

        <DashboardCard title="Notification Preferences">
          <FormControl display="flex" alignItems="center" mb="4">
            <FormLabel htmlFor="push-notifications" mb="0">
              Push Notifications
            </FormLabel>
            <Switch id="push-notifications" defaultChecked />
          </FormControl>
          <FormControl display="flex" alignItems="center" mb="4">
            <FormLabel htmlFor="sms-notifications" mb="0">
              SMS Notifications
            </FormLabel>
            <Switch id="sms-notifications" />
          </FormControl>
          <Button colorScheme="brand">Save Notification Preferences</Button>
        </DashboardCard>
      </Stack>
    </Box>
  );
};

export default SettingsPage;
