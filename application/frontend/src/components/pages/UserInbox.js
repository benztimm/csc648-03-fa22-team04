/* 
Filename: UserInbox.js

Date: 11/20/22
Authors: Sophia Chu
Description: Displays user's messages from potential buyer's of user's listed items.

*/

import React, { useMemo } from 'react';
import { Link, useNavigate, generatePath, useLocation } from 'react-router-dom';
import { useTable, useSortBy } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './styles/inbox.css';


function Inbox(){
  
    const navigate = useNavigate();

    const goToPosts = () => {
        navigate('/dashboard');
    }

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);


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
                                  {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼' ): ''}
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