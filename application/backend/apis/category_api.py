'''
Date: 11/15/22
Developers: Ekarat Buddharuksa
Description: All APIs related to Category.
'''

import utilities.db_helper as db

def get_category(category_id = None):
    """    
    Get all category

    `input` optional
         category_id : specific category_id to return

    `return` 
        all category in db if not specific category_id
        If caller specify the category_id, return the category correspond to category_id
    """
    query = """ SELECT * FROM category """
    if category_id:
        query+=""" WHERE category_id = %(category_id)s"""
    results = db.execute_query(query=query,params={
        "category_id": category_id if category_id else category_id,
    })
    return results
