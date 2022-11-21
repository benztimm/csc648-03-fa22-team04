import utilities.db_helper as db

def delete_user(user_id = None):
    """    
    Delete specific post

    `input` user_id : unique post ID

    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query_select = """ SELECT * FROM user """
    query_delete = """DELETE FROM user WHERE user_id = """
    user_id= (str(user_id))

    if user_id:
        query_delete += user_id
    row_count_before = db.execute_query_rowcount(query_select)
    db.execute_query(query_delete)
    row_count_after = db.execute_query_rowcount(query_select)
    status = 'Success' if row_count_after == row_count_before-1 else 'Fail'
    results = {'status':status}
    return results