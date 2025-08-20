import {
  Stack,
  Text
} from '@chakra-ui/react';
import DashboardCard from './DashboardCard';

const ActivityFeed = () => (
  <DashboardCard title="Recent Activity">
    <Stack spacing="3">
      <Text fontSize="sm"><Text as="b">John Doe</Text> updated a task.</Text>
      <Text fontSize="sm"><Text as="b">Jane Smith</Text> added a new project.</Text>
      <Text fontSize="sm"><Text as="b">Admin</Text> reviewed reports.</Text>
      <Text fontSize="sm"><Text as="b">System</Text> backup completed.</Text>
      <Text fontSize="sm"><Text as="b">User A</Text> logged in.</Text>
    </Stack>
  </DashboardCard>
);

export default ActivityFeed;
