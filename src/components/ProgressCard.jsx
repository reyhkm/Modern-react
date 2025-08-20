import {
  Text,
  Progress,
  Stack
} from '@chakra-ui/react';
import DashboardCard from './DashboardCard';

const ProgressCard = () => (
  <DashboardCard title="Tasks Progress">
    <Text mb="2">Project Alpha</Text>
    <Progress value={70} size="md" colorScheme="blue" mb="4" />
    <Text mb="2">Project Beta</Text>
    <Progress value={45} size="md" colorScheme="green" mb="4" />
    <Text mb="2">Project Gamma</Text>
    <Progress value={90} size="md" colorScheme="purple" />
  </DashboardCard>
);

export default ProgressCard;
