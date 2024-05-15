import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  const API_URL =
    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/";
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        // setContacts function to reset the contacts, recall function after define it fetchContacts()
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contact.name}
              </TableCell>
              <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
