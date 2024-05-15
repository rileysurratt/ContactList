import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell }  from '@mui/material';


// this function takes a contact object (this is props so you use dot notation to access data from contact object)
export default function ContactRow( {setSelectedContactId, contact} ) {
    return (
        <TableCell onClick={() => {
            setSelectedContactId(contact.id)}}>
            <TableRow>{contact.email}</TableRow>
            
        </TableCell>
    )
}
