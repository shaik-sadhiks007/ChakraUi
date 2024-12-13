import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import {
  AiOutlineDashboard,
  AiOutlineBell,
  AiOutlineSetting
} from 'react-icons/ai';
import {
  FiClipboard,
  FiFileText,
  FiCalendar,
  FiBarChart2
} from 'react-icons/fi';
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideDrawer from './SideDrawer';
import TableData from './TableData';
import Laptop from './Laptop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export const SidebarContent = () => (
  <VStack align="stretch" h="full">

    {/* Main Section */}
    <Box>
      <VStack align="start">
        <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
          MAIN
        </Text>
      </VStack>
      <VStack align="start">
        <HStack justify="space-between" w="100%" bg='blackAlpha.100' borderRadius="md">

          <Link to="/">
            <HStack p={2}>
              <AiOutlineDashboard size="20px" color="black" />
              <Text fontWeight="bold" color="blackAlpha.800" ml={2}>
                Dashboard
              </Text>
            </HStack>
          </Link>

        </HStack>
        <HStack justify="space-between" w="100%" p={2}>
          <HStack>
            <FiClipboard size="20px" color="#5C5C5C" />
            <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
              Task submissions
            </Text>
          </HStack>
          <Badge colorScheme="red" borderRadius="full">
            115
          </Badge>
        </HStack>

        <Link to='/task-assignment'>
          <HStack p={2}>
            <FiFileText size='20px' color="#5C5C5C" />
            <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
              Task Assignment
            </Text>
          </HStack>
        </Link>

        <HStack p={2}>
          <FiCalendar size="20px" color="#5C5C5C" />
          <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
            Setup Files
          </Text>
        </HStack>
        <HStack p={2}>
          <FiBarChart2 size="20px" color="#5C5C5C" />
          <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
            ABD
          </Text>
        </HStack>
      </VStack>
    </Box>

    {/* Settings Section */}
    <Box>
      <VStack align="start">
        <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
          SETTINGS
        </Text>
      </VStack>
      <VStack align="start">
        <HStack p={2}>
          <AiOutlineBell size="20px" color="#5C5C5C" />
          <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
            Notification
          </Text>
        </HStack>
        <HStack p={2}>
          <AiOutlineSetting size="20px" color="#5C5C5C" />
          <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
            Settings
          </Text>
        </HStack>
      </VStack>
    </Box>
  </VStack>
);

const Sidebar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // If mobile, show drawer
  if (isMobile) {
    return (
      <Router>
        <VStack p={4}>
          <Box
            w="100%"
            color="black"
            bg="white"
            display="flex"
            justifyContent='space-between'
            alignItems="center"
            borderBottom="1px solid #ddd"
            my={2}
          >
            <Box display="flex" alignItems="center">
              <SideDrawer />
            </Box>
            <Text fontSize="md" fontWeight="bold">
              Hello Sandeep
            </Text>
            <HStack justifyContent='space-between' alignItems='center'>
              <Text fontSize="md" fontWeight="bold" color="blackAlpha.800">
                Package B
              </Text>
              <HStack alignItems='center'>
                <MdPersonAddAlt1 size='20px' color='black' />
                <BsThreeDotsVertical size='20px' color='black' />
              </HStack>
            </HStack>
          </Box>
          <Routes>

            <Route path="/" element={<Laptop />} />

            <Route path="/task-assignment" element={<TableData />} />

          </Routes>
        </VStack>
      </Router>
    );
  }


  // For larger screens, show regular sidebar
  return (
    <Router>
      <VStack w="100%" align="stretch">

        <Box w="100%" color="black" bg="white" display='flex' px={4} borderBottom="1px solid #ddd">
          <Box
            w={{ base: "100%", md: "30%", lg: "20%" }}
            p={4}
          >
            <Box >
              <HStack justifyContent='space-between' alignItems='center'>
                <Text fontSize="xl" fontWeight="bold" color="blackAlpha.800">
                  Package B
                </Text>
                <HStack alignItems='center'>
                  <MdPersonAddAlt1 size='20px' color='black' />
                  <BsThreeDotsVertical size='20px' color='black' />
                </HStack>
              </HStack>
            </Box>
          </Box>
          <Box
            w={{ base: "100%", md: "70%", lg: "80%" }}
            p={4}
          >
            <Text fontSize='2xl' fontWeight='bold'>
              Hello Sandeep
            </Text>
          </Box>
        </Box>

        {/* Flex container for the second section */}
        <Flex w="100%" >
          {/* Sidebar: Takes 20% width */}
          <Box
            w={{ base: "100%", md: "30%", lg: "20%" }}
            bg="white"
            p={4}
            display="flex"
            flexDir="column"
            minH="100vh"
          >
            <SidebarContent />
          </Box>

          <Box
            w={{ base: "100%", md: "70%", lg: "80%" }}
            bg="gray.50" p={4} minH="100vh" color="black">

            <Routes>

              <Route path="/" element={<Laptop />} />

              <Route path="/task-assignment" element={<TableData />} />

            </Routes>
          </Box>

        </Flex>
      </VStack>

    </Router>

  );
};

export default Sidebar;