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

const links = [
  { linkName: 'Products', path: '/products' },
  { linkName: 'ShoppingCart', path: '/cart' },
];

const Navlink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded='md'
    _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
  >
    {children}
  </Link>
);

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
          <HStack as='nav' spacing={4} display={{base: 'none', md: 'flex'}}>
            {links.map((link) => (
              <Navlink key={link.linkName} path={link.path}>
                {link.linkName}
              </Navlink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems='center'>
          <Navlink>
            <Icon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf='center'
              onClick={() => toggleColorMode()}
            />
          </Navlink>

          <Button as={ReactLink} to='/login' p={2} fontSize='sm' fontWeight={400} variant='link'>
            Sign in
          </Button>

          <Button
            as={ReactLink}
            to='/registration'
            m={2}
            display={{base: 'none', md: 'inline-flex' }}
            fontSize='sm'
            fontWeight={600}
            _hover={{ bg: 'purple.400' }}
            bg='purple.500'
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4}>
            {links.map((link) => (
              <Navlink key={link.linkName} path={link.path}>
                {link.linkName}
              </Navlink>
            ))}
            <Navlink key='sign up' path='/registration'>
              Sign Up
            </Navlink>
          </Stack>
        </Box>
      ) : null}

    </Box>
  );
};

export default Navbar;
