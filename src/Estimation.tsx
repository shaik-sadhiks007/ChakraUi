import { Text, VStack } from '@chakra-ui/react';

export const SurveyCard = ({date,time}) => {
    return (
        <>
            <VStack
                width="100%"
                height="100px"
                border="1px solid #E2E8F0"
                borderRadius="md"
                overflow="hidden"
                justifyContent='center'
            >
                <Text fontSize="md" fontWeight="bold" color='black'>
                    {date}
                </Text>
                <Text fontSize="md" fontWeight="bold" color='black'>
                    {time}
                </Text>
            </VStack>

        </>
    );
};


const Estimation = () => {
    return (
        <VStack width='100%' spaceY={2}>
            <SurveyCard date={'12 Jan 25'} time={'Estimated finish'}/>
            <SurveyCard date={'12 Jan 25'} time={'Estimated finish'}/>
            <SurveyCard date={'12 Jan 25'} time={'Estimated finish'}/>
            <SurveyCard date={'12 Jan 25'} time={'Estimated finish'}/>
            <SurveyCard date={'12 Jan 25'} time={'Estimated finish'}/>
        </VStack>
    )
}


export default Estimation