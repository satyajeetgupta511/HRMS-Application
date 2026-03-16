import re

def valid_email(email):
    pattern = r"[^@]+@[^@]+\.[^@]+"
    return re.match(pattern, email)