/* 
Filename: UserInbox.js

Date: 11/20/22
Authors: Sophia Chu
Description: Displays user's messages from potential buyer's of user's listed items.

*/

import { useContext, useRef, useState, useHistory, useEffect, useMemo } from 'react'; 
import { Link, useNavigate, generatePath, useLocation } from 'react-router-dom';
import { useTable, useSortBy } from 'react-table';
import './styles/inbox.css';


function Inbox(){


  const user = JSON.parse(sessionStorage.getItem('user'));
  const user_id = user.user.user_id;

  const [messages, setMessages] = useState([]);

  
    const navigate = useNavigate();
    const goToPosts = () => {
        navigate('/dashboard');
    }



  const fetchData = async () => {

    const data = await fetch(`http://54.200.101.218:5000/get-user-inbox/${user_id}`, {
      method: 'GET',
      headers: {
          'user': `${user_id}`,
          
      }
  });
    const json = await data.json();

    console.log(json);
    setMessages(json.output);

  }

  useEffect(() => {
    fetchData();
    console.log(messages);

    if(messages.length === 0){
      console.log("test");
    }

  }, [])


  async function deleteButton(event) {
    const value = event.target.getAttribute('data-value');
    console.log(value);
    const data = await fetch(`http://54.200.101.218:5000/delete-message/${value}`, {
      method: 'GET',
      headers: {
        'user': `${user_id}`,
      }
    });
    const json = await data.json();
    console.log(json);
    // You might want to update the messages state here to reflect the deleted message
  }

  const COLUMNS = [
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
        Cell: ({row}) => <button data-value={row.original.message_id} onClick={deleteButton}>DELETE</button>
    },
    ]


  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => messages, [messages]);


    const { getTableProps, 
            getTableBodyProps,
            headerGroups, 
            rows, 
            prepareRow, 
          } = useTable({
              columns,
              data,
            },
            useSortBy)



    return (

      <div>
        <div className="dashboard">
          <div className="header">
            <h1>INBOX</h1>
          </div>
          <button className="dashboard" onClick={goToPosts}>MY POSTS</button>&nbsp;&nbsp;&nbsp;
          <button className="dashboard-inbox">INBOX</button>
        </div>

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                )
              })
            }

          </tbody>

        </table>

      </div>


    );
          
  


}

export default Inbox;