import { Grid, GridItem } from "@chakra-ui/react"
import Dashboard from "./Dashboard"
import Survey from "./Survey"
import NoOfDays from "./NoOfDays"
import Estimation from "./Estimation"

function Laptop() {
    return (
        <Grid
            templateColumns={{
                base: "1fr",
                md: "repeat(12, 1fr)",
                lg: "repeat(12, 1fr)"
            }}
            gap={4}
            h="100%"
        >
            <GridItem
                colSpan={{ base: 12, md: 7, lg: 4 }}
                display="flex"
                justifyContent="center"
            >
                <Dashboard />
            </GridItem>

            <GridItem
                colSpan={{ base: 12, md: 5, lg: 3 }}
                display="flex"
                justifyContent="center"
            >
                <Survey />
            </GridItem>

            <GridItem
                colSpan={{ base: 12, md: 7, lg: 3 }}
                display="flex"
                justifyContent="center"
            >
                <NoOfDays />
            </GridItem>

            <GridItem
                colSpan={{ base: 12, md: 5, lg: 2 }}
                display="flex"
                justifyContent="center"
            >
                <Estimation />

            </GridItem>
        </Grid>
    )
}

export default Laptop
