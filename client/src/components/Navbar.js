import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { SiElectron } from 'react-icons/si';

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} // isOpen ist hier eine Statusvariable. Sie ist in derselben Komponente definiert. Wenn isOpen in einer Funktion geändert wird, wird er in der gesamten Komponente aktualisiert
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to='/'>
            <Flex alignItems='center'>
              <Icon as={SiElectron} h={6} w={6} color='purple.400' />
              <Text fontWeight='extrabold'>DigitalDepot</Text>
            </Flex>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
