
// this function takes a contact object (this is props so you use dot notation to access data from contact object)
export default function ContactRow( {setSelectedContactId, contact} ) {
    return (
        <tr onClick={() => {
            setSelectedContactId(contact.id)}}>
                {/* if you want to display more data, create more cells here */}
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}
