import {
  Box,
  Grid,
  GridItem,
  StatGroup,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Button,
  Stack
} from '@chakra-ui/react';
import {
  SettingsIcon,
  ChatIcon,
  InfoIcon
} from '@chakra-ui/icons';

import DashboardCard from '../components/DashboardCard';
import StatCard from '../components/StatCard';
import ProgressCard from '../components/ProgressCard';
import ActivityFeed from '../components/ActivityFeed';

const DashboardPage = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      }}
      gap={6}
    >
      <GridItem colSpan={{ base: 1, lg: 2 }}>
        <DashboardCard title="Sales Overview">
          <StatGroup>
            <StatCard
              label="Today's Sales"
              number="$1,234"
              helpText="2.3% from yesterday"
              type="increase"
            />
            <StatCard
              label="Monthly Revenue"
              number="$25,678"
              helpText="12.5% from last month"
              type="increase"
            />
            <StatCard
              label="Annual Profit"
              number="$150,000"
              helpText="8.1% from last year"
              type="increase"
            />
          </StatGroup>
          <Box mt="4" bg="gray.100" h="150px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Chart Placeholder (e.g., Line Chart)</Text>
          </Box>
        </DashboardCard>
      </GridItem>

      <GridItem>
        <ProgressCard />
      </GridItem>

      <GridItem>
        <DashboardCard title="New Users">
          <Flex align="center" mb="4">
            <CircularProgress value={60} color="teal.400" size="80px">
              <CircularProgressLabel>60%</CircularProgressLabel>
            </CircularProgress>
            <Box ml="4">
              <Text fontSize="xl" fontWeight="bold">+150</Text>
              <Text color="gray.500">New users this week</Text>
            </Box>
          </Flex>
          <Button colorScheme="brand" size="sm" mt="2">View All Users</Button>
        </DashboardCard>
      </GridItem>

      <GridItem>
        <ActivityFeed />
      </GridItem>

      <GridItem>
        <DashboardCard title="Quick Actions">
          <Stack spacing="3">
            <Button leftIcon={<SettingsIcon />} colorScheme="blue" variant="outline" size="sm">Manage Settings</Button>
            <Button leftIcon={<ChatIcon />} colorScheme="green" variant="outline" size="sm">Send Message</Button>
            <Button leftIcon={<InfoIcon />} colorScheme="purple" variant="outline" size="sm">Generate Report</Button>
          </Stack>
        </DashboardCard>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 2, lg: 3 }}>
        <DashboardCard title="Recent Orders">
          <Box overflowX="auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Order ID</th>
                  <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Customer</th>
                  <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Amount</th>
                  <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>#1001</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Alice Johnson</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>$250.00</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Delivered</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>#1002</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Bob Williams</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>$120.50</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Pending</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>#1003</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Charlie Brown</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>$500.00</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Shipped</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </DashboardCard>
      </GridItem>
    </Grid>
  );
};

export default DashboardPage;
