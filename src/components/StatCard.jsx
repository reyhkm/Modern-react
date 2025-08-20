import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box
} from '@chakra-ui/react';

const StatCard = ({ label, number, helpText, type }) => (
  <Stat>
    <StatLabel>{label}</StatLabel>
    <StatNumber>{number}</StatNumber>
    <StatHelpText>
      <StatArrow type={type} />
      {helpText}
    </StatHelpText>
  </Stat>
);

export default StatCard;
