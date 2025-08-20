import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid
} from '@chakra-ui/react';
import DashboardCard from '../components/DashboardCard';

const AnalyticsPage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="6" color="gray.700">Analytics & Insights</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <DashboardCard title="Traffic Overview">
          <Text>Total Visitors: <Text as="span" fontWeight="bold">15,000</Text></Text>
          <Text>Page Views: <Text as="span" fontWeight="bold">45,000</Text></Text>
          <Box mt="4" bg="gray.100" h="120px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Traffic Chart Placeholder</Text>
          </Box>
        </DashboardCard>

        <DashboardCard title="User Demographics">
          <Stack spacing={2}>
            <Text>Age 18-24: 25%</Text>
            <Text>Age 25-34: 40%</Text>
            <Text>Age 35-50: 20%</Text>
            <Text>50+: 15%</Text>
          </Stack>
        </DashboardCard>

        <DashboardCard title="Conversion Rates">
          <Text>Sales Conversion: <Text as="span" fontWeight="bold">3.5%</Text></Text>
          <Text>Signup Conversion: <Text as="span" fontWeight="bold">8.2%</Text></Text>
          <Box mt="4" bg="gray.100" h="120px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Conversion Funnel Placeholder</Text>
          </Box>
        </DashboardCard>

        <DashboardCard title="Top Performing Pages">
          <Stack spacing={2}>
            <Text>1. /products/new (1,200 views)</Text>
            <Text>2. /blog/latest (950 views)</Text>
            <Text>3. /about-us (780 views)</Text>
          </Stack>
        </DashboardCard>

        <DashboardCard title="Geographic Distribution">
          <Box mt="4" bg="gray.100" h="120px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Map Placeholder</Text>
          </Box>
        </DashboardCard>
      </SimpleGrid>
    </Box>
  );
};

export default AnalyticsPage;
