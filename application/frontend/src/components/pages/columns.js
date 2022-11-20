/* 
Filename: column.js

Date: 11/20/22
Authors: Sophia Chu
Description: File for columns for table in UserInbox.js

*/
export const COLUMNS = [
    {
        Header: 'First',
        accessor: 'first_name',
    },
    {
        Header: 'Last',
        accessor: 'last_name',
    },
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
        Header: 'Phone',
        accessor: 'phone_number',
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