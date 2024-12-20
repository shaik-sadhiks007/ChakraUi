import { Box, Flex, Text, VStack } from '@chakra-ui/react';

export const SurveyCard = ({ percent, title1, title2 }) => {
  return (
    <>
      <Flex
        width="100%"
        height="100px"
        border="1px solid #E2E8F0"
        borderRadius="md"
        overflow="hidden"
        position='relative'
      >
        <Box
          width={percent}
          height="100%" 
          bg="blue.50"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color='black' position='absolute' left='15%' top='30%'>
            {percent}
          </Text>
        </Box>

        {/* Right Section */}
        <Box
          width="50%"
          height="100%" 
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
        >
          <Text fontSize="sm" fontWeight="medium" color="blue.600" textAlign="center" position='absolute' right='15%' top='30%'>
            {title1} <br />
            {title2}
          </Text>
        </Box>
      </Flex>
      
    </>
  );
};


const Survey = () => {
  return (
    <VStack width='100%' spaceY={2}>
      <SurveyCard percent={'45%'} title1={'Pop'} title2={"Survey"} />
      <SurveyCard percent={'65%'} title1={'Route'} title2={"Survey"} />
      <SurveyCard percent={'50%'} title1={'Pop'} title2={"Installation"} />
      <SurveyCard percent={'12%'} title1={'Route'} title2={"Installation"} />
      <SurveyCard percent={'0%'} title1={'ABD'} title2={"generation"} />
    </VStack>
  )
}


export default Survey