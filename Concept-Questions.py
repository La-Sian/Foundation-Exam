#  2.1    Write a function that takes in an input and checks to see if it’s an
#              isogram. The function should return True or False.
#              -function will take in a word
#              -function will iterate every letter in the word
#              - if satement tto check if any repeated letters = return true/false
            
def is_isogram(word):
    letter_set = set()

    for letter in word:
        if letter in letter_set:
            return False
        else:
            letter_set.add(letter)

    return True