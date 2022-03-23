import re, random, string

SPECIAL_CHARS = [
    '~', ':', "'", '+', '[', '\\', '@', '^', '{', '"', '*', '|', ',', ' ',
    '&', '<', '`', '}', '.', '_', '=', ']', '!', '>', ';', '?', '#', '$', '/'
]

def replace_character(input_string:str, special_characters=SPECIAL_CHARS, new_character=""):
    if not input_string:
        return None

    # replace all special characters to new character
    for special_character in special_characters:
        input_string = input_string.replace(special_character, new_character)

    # remove character if same near
    fl_count, new_input_string = 0, ""
    for index in range(len(input_string)):
        if input_string[index] != new_character:
            fl_count = 0
        else:
            fl_count += 1
        if fl_count <= 1:
            new_input_string += input_string[index]
    return new_input_string

def no_accent_vietnamese(s):
    s = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', s)
    s = re.sub(r'[ÀÁẠẢÃĂẰẮẶẲẴÂẦẤẬẨẪ]', 'A', s)
    s = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', s)
    s = re.sub(r'[ÈÉẸẺẼÊỀẾỆỂỄ]', 'E', s)
    s = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', s)
    s = re.sub(r'[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]', 'O', s)
    s = re.sub(r'[ìíịỉĩ]', 'i', s)
    s = re.sub(r'[ÌÍỊỈĨ]', 'I', s)
    s = re.sub(r'[ùúụủũưừứựửữ]', 'u', s)
    s = re.sub(r'[ƯỪỨỰỬỮÙÚỤỦŨ]', 'U', s)
    s = re.sub(r'[ỳýỵỷỹ]', 'y', s)
    s = re.sub(r'[ỲÝỴỶỸ]', 'Y', s)
    s = re.sub(r'[Đ]', 'D', s)
    s = re.sub(r'[đ]', 'd', s)
    return s

def gen_random_text(char_number, random_chars=string.ascii_letters + string.digits):
    return "".join(random.choice(random_chars) for _ in range(char_number))