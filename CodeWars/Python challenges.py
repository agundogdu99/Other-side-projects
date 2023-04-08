#RGB TO HEX CONVERT
import math


def rgb(r, g, b):
    if r > 255:
        r = 255
    elif r < 0:
        r = 0
    if g > 255:
        g = 255
    elif g < 0:
        g = 0
    if b > 255:
        b = 255
    elif b < 0:
        b = 0
    r_split = math.modf(r / 16)
    g_split = math.modf(g / 16)
    b_split = math.modf(b / 16)

    r_calculated_list = []
    r_calculated_list.append(int(r_split[1]))
    r_calculated_list.append(int(r_split[0] * 16))

    g_calculated_list = []
    g_calculated_list.append(int(g_split[1]))
    g_calculated_list.append(int(g_split[0] * 16))

    b_calculated_list = []
    b_calculated_list.append(int(b_split[1]))
    b_calculated_list.append(int(b_split[0] * 16))

    for i, value in enumerate(r_calculated_list):
        if value == 10:
            r_calculated_list[i] = "A"
        elif value == 11:
            r_calculated_list[i] = "B"
        elif value == 12:
            r_calculated_list[i] = "C"
        elif value == 13:
            r_calculated_list[i] = "D"
        elif value == 14:
            r_calculated_list[i] = "E"
        elif value == 15:
            r_calculated_list[i] = "F"

    for i, value in enumerate(g_calculated_list):
        if value == 10:
            g_calculated_list[i] = "A"
        elif value == 11:
            g_calculated_list[i] = "B"
        elif value == 12:
            g_calculated_list[i] = "C"
        elif value == 13:
            g_calculated_list[i] = "D"
        elif value == 14:
            g_calculated_list[i] = "E"
        elif value == 15:
            g_calculated_list[i] = "F"

    for i, value in enumerate(b_calculated_list):
        if value == 10:
            b_calculated_list[i] = "A"
        elif value == 11:
            b_calculated_list[i] = "B"
        elif value == 12:
            b_calculated_list[i] = "C"
        elif value == 13:
            b_calculated_list[i] = "D"
        elif value == 14:
            b_calculated_list[i] = "E"
        elif value == 15:
            b_calculated_list[i] = "F"

    hex_list = r_calculated_list + g_calculated_list + b_calculated_list

    return ''.join([str(elem) for elem in hex_list])


# Better more concise version below
def rgb(r, g, b):
    r = max(0, min(255, r))
    g = max(0, min(255, g))
    b = max(0, min(255, b))

    r_split = divmod(r, 16)
    g_split = divmod(g, 16)
    b_split = divmod(b, 16)

    hex_list = [
        f"{int(r_split[0]):X}{int(r_split[1]):X}",
        f"{int(g_split[0]):X}{int(g_split[1]):X}",
        f"{int(b_split[0]):X}{int(b_split[1]):X}"
    ]

    return ''.join(hex_list)


print(rgb(140, 251, 47))


# CHECK IF RIGHT AND LEFT SIDE OF AN ARRAY ARE EQUAL
def find_even_index(arr):
    left_sum = 0
    right_sum = sum(arr)

    for i, val in enumerate(arr):
        right_sum -= val

        if left_sum == right_sum:
            return i

        left_sum += val

    return -1


def find_even_index(arr):
    for i, val in enumerate(arr):
        if sum(arr[0:i]) == sum(arr[i + 1:]):
            return i
    else:
        return -1


# Sort Odds and keep even index
def sort_array(source_array):

    odd_list = sorted(num for num in source_array if num % 2 == 1)
    for i, num in enumerate(source_array):
        if num % 2 == 0:
            odd_list.insert(i, num)

    return odd_list