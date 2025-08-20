import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Stack,
  Button,
  useToast
} from '@chakra-ui/react';
import DashboardCard from '../components/DashboardCard';
import { useState } from 'react';

const FormsPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    country: '',
    subscribe: false,
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    toast({
      title: 'Form Submitted',
      description: "Your data has been logged to console.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    // Reset form (optional)
    setFormData({
      fullName: '',
      email: '',
      message: '',
      country: '',
      subscribe: false,
      gender: ''
    });
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb="6" color="gray.700">Forms & Inputs</Heading>
      <Stack spacing={6}>
        <DashboardCard title="Basic Information Form">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="fullName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </FormControl>

              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                />
              </FormControl>

              <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Select country"
                >
                  <option value="usa">United States</option>
                  <option value="can">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="aus">Australia</option>
                </Select>
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="subscribe" mb="0">
                  Subscribe to Newsletter?
                </FormLabel>
                <Checkbox
                  id="subscribe"
                  name="subscribe"
                  isChecked={formData.subscribe}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl as="fieldset">
                <FormLabel as="legend">Gender</FormLabel>
                <RadioGroup name="gender" value={formData.gender} onChange={(val) => setFormData(prev => ({ ...prev, gender: val }))}>
                  <Stack direction="row">
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                    <Radio value="other">Other</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button type="submit" colorScheme="brand" mt={4}>
                Submit Form
              </Button>
            </Stack>
          </form>
        </DashboardCard>

        <DashboardCard title="File Upload (Placeholder)">
          <Text mb="4">This section would typically include a file input and upload logic.</Text>
          <Input type="file" p={1} border="1px" borderColor="gray.200" borderRadius="md" />
          <Button colorScheme="brand" size="sm" mt="4">Upload File</Button>
        </DashboardCard>
      </Stack>
    </Box>
  );
};

export default FormsPage;
