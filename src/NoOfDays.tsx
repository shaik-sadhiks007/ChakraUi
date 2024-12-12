import { Box, Flex, Text, VStack } from '@chakra-ui/react';

export const SurveyCard = ({ title, days,time }) => {
    return (
        <>
            <Flex
                width="100%"
                height="100px" 
                border="1px solid #E2E8F0"
                borderRadius="md"
                overflow="hidden"
            >
                <Box
                    width='50%'
                    height="100%" 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text fontSize="md" fontWeight="bold" color='black'>
                        {title}
                    </Text>
                </Box>



                <Box
                    width="50%"
                    height="100%" 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                >
                    <Text fontSize="sm" fontWeight="medium" color="blue.600" textAlign="center">
                        {days} <br />
                        {time}
                    </Text>
                </Box>
            </Flex>

        </>
    );
};


const NoOfDays = () => {
    return (
        <VStack width='100%' spaceY={2} >
            <SurveyCard title={'230 pop'} days={'in 120 days'} time={'On schedule'} />
            <SurveyCard title={'230 pop'} days={'in 120 days'} time={'On schedule'} />
            <SurveyCard title={'230 pop'} days={'in 120 days'} time={'On schedule'} />
            <SurveyCard title={'230 pop'} days={'in 120 days'} time={'On schedule'} />
            <SurveyCard title={'230 pop'} days={'in 120 days'} time={'On schedule'} />
        </VStack>
    )
}


export default NoOfDays