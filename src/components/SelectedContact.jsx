import { useState, useEffect } from "react";
import * as React from "react";
import Button  from "@mui/material/Button";



export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
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
          <p className="description-info">Name: {contact.name}</p>
          <p className="description-info">Email: {contact.email}</p>
          <p className="description-info">Phone: {contact.phone}</p>
          <p className="description-info">Username: {contact.username}</p>
          <p className="description-info">Website: {contact.website}</p>
          <p className="description-info">Company: {contact.company.name}</p>
          <p className="description-info">Address: {contact.address.street}, {contact.address.suite}</p>
          <p className="description-info"> {contact.address.city}, {contact.address.zipcode}</p>
        </div>
      ) : (
        <></>
      )}
      <Button onClick={clearContact} variant="contained" color="secondary">Back to List</Button>
    </>
  );
}