import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const contact = await response.json();
                setContact(contact);
                console.log("Contact:", contact)
            }catch (error){
                console.error(error)
            }
        }
        fetchContact();
    }, [selectedContactId])

    const clearContact = () => setSelectedContactId(null)
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
    <button onClick={clearContact}>Back to List</button>
  </>

    )
}