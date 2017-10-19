# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

from extratypes import Tree  # library with types used in the task

root = 0
num = 1
# recursive crowler
def crowler(node):
    global num
    if node.l != None:
        if node.l.x >= node.x and node.l.x >= root:
            # do something
            num +=1

        crowler(node.l)

    if node.r != None:
        if node.r.x >= node.x and node.r.x >= root:
            # do something
            num +=1

        crowler(node.r)

def solution(T):
    global root
    root = T.x
    # write your code in Python 2.7
    #pass
    crowler(T)
    return num
