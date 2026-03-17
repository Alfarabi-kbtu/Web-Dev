# 1
def double_char(str):
    result = ''
    for char in str:
        result += char * 2
    return result


# 2
def count_hi(str):
    count = 0
    for i in range(len(str) - 1):
        if str[i:i+2] == 'hi':
            count += 1
    return count


# 3
def cat_dog(str):
    cat_count = 0
    dog_count = 0
    for i in range(len(str) - 2):
        if str[i:i+3] == 'cat':
            cat_count += 1
        if str[i:i+3] == 'dog':
            dog_count += 1
    return cat_count == dog_count


# 4
def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == 'co' and str[i+3] == 'e':
            count += 1
    return count


# 5
def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)


# 6
def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == 'xyz':
            if i == 0 or str[i-1] != '.':
                return True
    return False