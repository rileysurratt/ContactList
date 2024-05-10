import { useState, useEffect } from "react";
import * as React from "react";
import Button  from "@mui/material/Button";


export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const contact = await response.json();
        setContact(contact);
        console.log("Contact:", contact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);


  const clearContact = () => setSelectedContactId(null);
  return (
    <>
      {contact ? (
        <div>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <></>
      )}
      <Button onClick={clearContact} variant="contained" color="secondary">Back to List</Button>
    </>
  );
}