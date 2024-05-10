import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import {TableBody, TableCell}  from '@mui/material';

// this function takes a contact object (this is props so you use dot notation to access data from contact object)
export default function ContactRow( {setSelectedContactId, contact} ) {
    return (
        <TableCell onClick={() => {
            setSelectedContactId(contact.id)}}>
                {/* if you want to display more data, create more cells here */}
            <TableRow>{contact.email}</TableRow>
            <TableRow>{contact.phone}</TableRow>
        </TableCell>
    )
}
