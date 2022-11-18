import utilities.db_helper as db

def get_post(keyword = None):
    """
    

    `input` keyword [optional]: find media with mathcing title, description or category

    `return` JSON of all matching entries
    """
    query = """select * from post where post_id like %(keyword)s"""
    # Update query with where clause in case search keyword provided:
    results = db.execute_query(query=query, params={"keyword": "%" + keyword + "%"})
    return results


