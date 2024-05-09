
// this function takes a contact object (this is props so you use dot notation to access data from contact object)
export default function ContactRow( {contact} ) {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}
