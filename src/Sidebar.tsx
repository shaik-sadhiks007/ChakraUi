import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  useBreakpointValue,
  Flex,
  GridItem,
  Grid
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
import Dashboard from './Dashboard';
import Survey from './Survey';
import NoOfDays from './NoOfDays';
import Estimation from './Estimation';
import SideDrawer from './SideDrawer';

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
          <HStack p={2}>
            <AiOutlineDashboard size="20px" color="black" />
            <Text fontWeight="bold" color="blackAlpha.800" ml={2}>
              Dashboard
            </Text>
          </HStack>
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
        <HStack p={2}>
          <FiFileText size='20px' color="#5C5C5C" />
          <Text fontWeight="medium" color="blackAlpha.700" ml={2}>
            Assign Task
          </Text>
        </HStack>
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
        <Grid
          templateColumns={{
            base: "1fr",        // Single column on small devices
            md: "repeat(12, 1fr)", // Adjust to 8 columns on medium devices
            lg: "repeat(12, 1fr)" // Full 12-column grid on large devices
          }}
          gap={4}
          h="100%"
        >
          {/* First Box: Takes 4 columns on large, 3 on medium, full width on small */}
          <GridItem
            colSpan={{ base: 12, md: 7, lg: 4 }}
            display="flex"
            justifyContent="center"
          >
            <Dashboard />
          </GridItem>

          {/* Second Box: Takes 5 columns on large, 3 on medium, full width on small */}
          <GridItem
            colSpan={{ base: 12, md: 5, lg: 3 }}
            display="flex"
            justifyContent="center"
          >
            <Survey />
          </GridItem>

          {/* Third Box: Takes 2 columns on large, 1 on medium, full width on small */}
          <GridItem
            colSpan={{ base: 12, md: 7, lg: 3 }}
            display="flex"
            justifyContent="center"
          >
            <NoOfDays />
          </GridItem>

          {/* Fourth Box: Takes 1 column on large, 1 on medium, full width on small */}
          <GridItem
            colSpan={{ base: 12, md: 5, lg: 2 }}
            display="flex"
            justifyContent="center"
          >
            <Estimation />
          </GridItem>
        </Grid>
      </VStack>





    );
  }


  // For larger screens, show regular sidebar
  return (
    <>
      <VStack w="100%" align="stretch">
        {/* Box 1: Takes full width */}
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
            <Grid
              templateColumns={{
                base: "1fr",        // Single column on small devices
                md: "repeat(12, 1fr)", // Adjust to 8 columns on medium devices
                lg: "repeat(12, 1fr)" // Full 12-column grid on large devices
              }}
              gap={4}
              h="100%"
            >
              {/* First Box: Takes 4 columns on large, 3 on medium, full width on small */}
              <GridItem
                colSpan={{ base: 12, md: 7, lg: 4 }}
                display="flex"
                justifyContent="center"
              >
                <Dashboard />
              </GridItem>

              {/* Second Box: Takes 5 columns on large, 3 on medium, full width on small */}
              <GridItem
                colSpan={{ base: 12, md: 5, lg: 3 }}
                display="flex"
                justifyContent="center"
              >
                <Survey />
              </GridItem>

              {/* Third Box: Takes 2 columns on large, 1 on medium, full width on small */}
              <GridItem
                colSpan={{ base: 12, md: 7, lg: 3 }}
                display="flex"
                justifyContent="center"
              >
                <NoOfDays />
              </GridItem>

              {/* Fourth Box: Takes 1 column on large, 1 on medium, full width on small */}
              <GridItem
                colSpan={{ base: 12, md: 5, lg: 2 }}
                display="flex"
                justifyContent="center"
              >
                <Estimation />
              </GridItem>
            </Grid>
          </Box>

        </Flex>
      </VStack>

    </>

  );
};

export default Sidebar;