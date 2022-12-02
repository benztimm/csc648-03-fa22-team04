'''

Date: 12/01/22
Developers: Jerry Liu
Description: Fernet cryptography helper functions for encryption and decryption

ref: https://www.thepythoncode.com/article/encrypt-decrypt-files-symmetric-python

'''

from cryptography.fernet import Fernet


def write_key():
    # Generates a key and saves it in key.key
    # Call function to clear file and generate new key
    file_to_delete = open("key.key", 'w')
    file_to_delete.close()
    key = Fernet.generate_key()
    with open("../utilities/key.key", "wb") as key_file:
        key_file.write(key)


def load_key():
    # Loads the key from the current directory named `key.key`
    return open("../utilities/key.key", "rb").read()


def encrypting_function(raw_text):
    # encode and encrypt raw text
    key = load_key()
    f = Fernet(key)
    encoded = raw_text.encode()
    encrypted_text = f.encrypt(encoded)
    return encrypted_text


def decrypting_function(encrypted_text):
    # decrypt and decode into raw text
    key = load_key()
    f = Fernet(key)
    decrypted_text = f.decrypt(encrypted_text)
    decoded_text = decrypted_text.decode()
    return decoded_text
