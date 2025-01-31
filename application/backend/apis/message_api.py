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


def send_message(message, post_id, buyer, seller):
    """
    send message

    `input` post_id, buyer, seller, message, status

    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query = "INSERT INTO message(post_id, buyer, seller, message, status) VALUES(%s, %s, %s, %s, 'null')"
    data = (post_id, buyer, seller, message)
    db.execute_query(query, data)
    return 'Message sent !'


def inbox(user_id):
    """
        inbox details

        `input` message_id

        `return` all messages
        """

    query = """
                SELECT
                    m.*,
                    buyer.email as 'buyer_email',
                    seller.email as 'seller_email',
                    buyer.user_id as 'buyer_id',
                    seller.user_id as 'seller_id',
                    p.title as 'post_title'
                FROM
                    message m
                JOIN
                    user buyer
                ON
                    m.buyer = buyer.user_id
                JOIN
                    user seller
                ON 
                    m.seller = seller.user_id
                JOIN
                    post p
                ON
                    p.post_id = m.post_id
                WHERE
                   m.seller = %(user_id)s
            """

    return db.execute_query(query, {"user_id": user_id})
    