/* 
Filename: column.js

Date: 11/20/22
Authors: Sophia Chu
Description: File for columns for table in UserInbox.js

*/
export const COLUMNS = [
    {
        Header: 'Item Title',
        accessor: 'title',
    },
    {
        Header: 'Message',
        accessor: 'message',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Date',
        accessor: 'date',
    },
    {
        Header: 'Delete',
        Cell: <button>delete</button>
    },
]