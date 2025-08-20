import {
  Card,
  CardHeader,
  CardBody,
  Heading
} from '@chakra-ui/react';

const DashboardCard = ({ title, children }) => (
  <Card shadow="md" borderRadius="lg" overflow="hidden">
    <CardHeader pb="0">
      <Heading size="md" color="gray.700">{title}</Heading>
    </CardHeader>
    <CardBody>
      {children}
    </CardBody>
  </Card>
);

export default DashboardCard;
