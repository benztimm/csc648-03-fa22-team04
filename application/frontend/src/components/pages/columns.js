/* 
Filename: column.js

Date: 11/20/22
Authors: Sophia Chu
Description: File for columns for table in UserInbox.js

*/
import './styles/inbox.css';

export const COLUMNS = [
    {
        Header: 'Item Title',
        accessor: 'post_title',
    },
    {
        Header: 'Message',
        accessor: 'message',
    },
    {
        Header: 'Email',
        accessor: 'buyer_email',
    },
    {
        Header: 'Date',
        accessor: 'timestamp',
    },
    {
        Header: 'Delete',
        Cell: <button data-value={output.message_id} onClick={deleteButton}>DELETE</button>
    },
]