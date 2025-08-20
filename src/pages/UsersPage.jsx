import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Flex,
  Badge,
  Button,
  Stack
} from '@chakra-ui/react';
import DashboardCard from '../components/DashboardCard';

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://bit.ly/dan-abramov'
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Active',
    avatar: 'https://bit.ly/kent-c-dodds'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'Viewer',
    status: 'Inactive',
    avatar: 'https://bit.ly/ryan-florence'
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://bit.ly/code-beast'
  },
  {
    id: 5,
    name: 'Eve Adams',
    email: 'eve@example.com',
    role: 'Viewer',
    status: 'Active',
    avatar: 'https://bit.ly/sage-adebayo'
  },
];

const UsersPage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="6" color="gray.700">User Management</Heading>
      <DashboardCard title="All Users">
        <Flex justify="flex-end" mb="4">
          <Button colorScheme="brand" size="sm">Add New User</Button>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" name={user.name} src={user.avatar} mr="3" />
                      <Text>{user.name}</Text>
                    </Flex>
                  </Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <Badge colorScheme={user.status === 'Active' ? 'green' : 'red'}>
                      {user.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Stack direction="row" spacing={2}>
                      <Button size="xs" variant="outline" colorScheme="blue">Edit</Button>
                      <Button size="xs" variant="outline" colorScheme="red">Delete</Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </Box>
  );
};

export default UsersPage;
