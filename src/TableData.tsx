import {
    Badge,
    Stack,
    Table,
    Theme,
} from "@chakra-ui/react";
import { parse, format, addDays, isSameDay, compareAsc } from "date-fns";
import { useState } from "react";

// Utility to generate consecutive dates between a range
const generateDateRange = (start: Date, end: Date) => {
    const dates = [];
    for (let current = start; compareAsc(current, end) <= 0; current = addDays(current, 1)) {
        dates.push(format(current, "do MMM"));
    }
    return dates;
};

const TableData = () => {
    // Initial data
    const initialData = [
        { id: 1, date: "1st Dec", taskId: "2345-2367", taskLocation: "Kallikurichi - Ayyempur", district: "Madurai", assignedTo: "Sharman", manager: "Harshit" },
        { id: 2, date: "2nd Dec", taskId: "2345-2367", taskLocation: "Kallikurichi - Ayyempur", district: "Madurai", assignedTo: "Sharman", manager: "Harshit" },
        { id: 3, date: "7th Dec", taskId: "2345-2367", taskLocation: "Kallikurichi - Ayyempur", district: "Madurai", assignedTo: "Sharman", manager: "Harshit" },
        { id: 4, date: "3th Dec", taskId: "2345-2367", taskLocation: "Kallikurichi - Ayyempur", district: "Madurai", assignedTo: "Sharman", manager: "Harshit" },
        { id: 5, date: "1st Dec", taskId: "2345-2368", taskLocation: "Kallikurichi - Ayyempur", district: "Madurai", assignedTo: "Sharman", manager: "Hareesh" },
    ];

    // Parse and sort the data by date
    const parsedData = initialData.map((row) => ({
        ...row,
        parsedDate: parse(row.date, "do MMM", new Date()),
    }));

    const sortedData = parsedData.sort((a, b) => compareAsc(a.parsedDate, b.parsedDate));

    // Generate all dates between the range of data
    const start = sortedData[0].parsedDate;
    const end = sortedData[sortedData.length - 1].parsedDate;
    const allDates = generateDateRange(start, end);

    // Combine sorted data with missing dates
    const completeData = allDates.flatMap((date) => {
        const matchingRows = sortedData.filter((row) =>
            isSameDay(row.parsedDate, parse(date, "do MMM", new Date()))
        );
        return (
            matchingRows.length > 0
                ? matchingRows
                : [{ date, taskId: "Blank", taskLocation: "Blank", district: "Blank", assignedTo: "Blank", manager: "Blank" }]
        );
    });

    const [data] = useState(completeData);

    // Track which dates have been displayed
    const displayedDates = new Set();

    return (
        <Theme appearance="light" width='100%'>
            <Stack gap="4" minH="100vh" >
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Date</Table.ColumnHeader>
                            <Table.ColumnHeader>Task location id</Table.ColumnHeader>
                            <Table.ColumnHeader>Task location</Table.ColumnHeader>
                            <Table.ColumnHeader>District</Table.ColumnHeader>
                            <Table.ColumnHeader>Assigned to</Table.ColumnHeader>
                            <Table.ColumnHeader>Manager</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map((row, index) => {
                            const showDate = !displayedDates.has(row.date);
                            if (showDate) displayedDates.add(row.date);
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        {showDate ? (
                                            <Badge colorPalette="red" border='1px solid #F3E3E4'>{row.date}</Badge>
                                        ) : (
                                            ""
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {row.taskId !== "Blank" ? (
                                            <Badge bg="#F9F7EA">{row.taskId}</Badge>
                                        ) : (
                                            <Badge colorPalette="gray" color='gray'>{row.taskId}</Badge>
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {row.taskLocation !== "Blank" ? (
                                            <Badge bg="#F6FFFF">{row.taskLocation}</Badge>
                                        ) : (
                                            <Badge colorPalette="gray" color='gray'>{row.taskLocation}</Badge>
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {row.district !== "Blank" ? (
                                            <Badge bg="#E9EFFB">{row.district}</Badge>
                                        ) : (
                                            <Badge colorPalette="gray" color='gray'>{row.district}</Badge>
                                        )}

                                    </Table.Cell>
                                    <Table.Cell>
                                        {row.assignedTo !== "Blank" ? (
                                            <Badge bg='#FEE8EA'>{row.assignedTo}</Badge>
                                        ) : (
                                            <Badge colorPalette="gray" color='gray'>{row.assignedTo}</Badge>
                                        )}

                                    </Table.Cell>
                                    <Table.Cell>
                                        {row.manager !== "Blank" ? (
                                            <Badge colorPalette="grey">{row.manager}</Badge>
                                        ) : (
                                            <Badge colorPalette="gray" color='gray'>{row.manager}</Badge>
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table.Root>
            </Stack>
        </Theme>
    );
};

export default TableData;
