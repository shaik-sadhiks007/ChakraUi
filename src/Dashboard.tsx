import { Box, Text, HStack, VStack, ProgressLabel, ProgressValueText } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import MultiSegmentCircularProgress from "./MultiSegmentProgress";

const Dashboard = () => {
  return (
    <Box>
      {/* Overall Progress Section */}
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={5}
        mb={5}
        textAlign="center"
        boxShadow="sm"
      >
        <HStack justifyContent='center'>
          <MultiSegmentCircularProgress />
        </HStack>

        <HStack justifyContent="space-around" mt={4}>
          <VStack bg="#BBD8D8" px={2} borderRadius="md" spaceY={0}>
            <Text fontSize="sm" color="black">Not Started</Text>
            <Text fontWeight="bold" color="black">25%</Text>
          </VStack>
          <VStack bg="#B6B6CC" px={2} borderRadius="md">
            <Text fontSize="sm" color="black">In Progress</Text>
            <Text fontWeight="bold" color="black">50%</Text>
          </VStack>
          <VStack bg="#B3A586" px={2} borderRadius="md">
            <Text fontSize="sm" color="black">Completed</Text>
            <Text fontWeight="bold" color="black">25%</Text>
          </VStack>
        </HStack>

      </Box>

      <Box borderWidth="1px" borderRadius="md" p={5} boxShadow="sm">
        <Text fontSize="lg" fontWeight="bold" mb={3} color="black" textAlign='start'>
          Target Vs Achieved
        </Text>
        <VStack spaceX={4} spaceY={4} align="stretch">
          {[
            { label: "Jan 1 - Jan 7", value: 25 },
            { label: "Jan 8 - Jan 14", value: 35 },
            { label: "Jan 15 - Jan 21", value: 35 },
            { label: "Jan 22 - Jan 28", value: 25 },
            { label: "Jan 29 - Feb 4", value: 15 },
            { label: "Feb 5 - Feb 11", value: 45 },
          ].map((data, index) => (
            <ProgressRoot defaultValue={data.value} maxW="sm" key={index}>
              <HStack gap="5">
                <ProgressLabel color="black">{data.label}</ProgressLabel>
                <ProgressBar flex="1" />
                <ProgressValueText color="black">{data.value}%</ProgressValueText>
              </HStack>
            </ProgressRoot>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Dashboard;
