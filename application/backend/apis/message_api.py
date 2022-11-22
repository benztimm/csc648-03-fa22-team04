'''
Date: 11/15/22
Developers: Ekarat Buddharuksa
Description: All APIs related to Messages.
'''

import utilities.db_helper as db

def delete_message(message_id = None):
    """    
    Delete specific message

    `input` message_id : unique message ID

    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query_select = """ SELECT * FROM message """
    query_delete = """DELETE FROM message WHERE message_id = """
    message_id = (str(message_id))

    if message_id:
        query_delete += message_id
    row_count_before = db.execute_query_rowcount(query_select)
    db.execute_query(query_delete)
    row_count_after = db.execute_query_rowcount(query_select)
    status = 'Success' if row_count_after == row_count_before-1 else 'Fail'
    results = {'status':status}
    return results

