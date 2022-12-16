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


def send_message(message, post_id, buyer, seller, status, timestamp, message_id):
    """
    send message

    `input` message_id, post_id, buyer, seller, message, status, timestamp

    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query = "INSERT INTO message(message_id, post_id, buyer, seller, message, status, timestamp) VALUES(%s, %s, %s, %s, %s, %s, %s)"
    data = (message_id, post_id, buyer, seller, message, status, timestamp)
    db.execute_query(query, data)
    return 'Message sent'


def inbox(post_id, buyer, seller, message, status, timestamp):
    """
        inbox details

        `input` message_id

        `return` post_id, buyer, seller, message, status, timestamp
        """

    query = """
                SELECT
                    m.post_id as 'post_id', 
                    m.buyer as 'buyer', 
                    m.seller as 'seller', 
                    m.message as 'message',
                    m.status as 'status', 
                    m.timestamp as 'timestamp'
                FROM 
                    message m
                WHERE
                   message_id = %(message_id)s
            """

    db.execute_query(query)
    return post_id, buyer, seller, message, status, timestamp
