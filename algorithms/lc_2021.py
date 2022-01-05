#!/usr/bin/env python
"""This is an example."""

from __future__ import annotations


class Examples:
    def is_palindrome(self, x: int) -> bool:
        '''https://leetcode.com/problems/palindrome-number/solution/
        Given an integer x, return true if x is palindrome integer.
        An integer is a palindrome when it reads the same backward as forward.
        For example, 121 is a palindrome while 123 is not.
        '''
        # negative numbers can't be a palindrome
        if x < 0:
            return False
        # numbers with the last digit of 0 other than 0
        # can't be a palindrom
        if (x % 10 == 0 and x != 0):
            return False
        # go through the number and determine the end and work our way up
        working_x = x  # working copy of our input for ops
        rev_num = 0  # store our working reversed number
        while(working_x > rev_num):
            # In every loop get the last digit of the number
            # add that digit at the end of the rev_num
            rev_num = rev_num * 10 + (working_x % 10)
            # divide the original number by 10
            working_x = working_x // 10
        return working_x == rev_num or working_x == (rev_num // 10)

    def is_palindrome_str(self, x: int) -> bool:
        #  super quick and dirty solution using string conversion
        for (f, r) in zip(str(x), reversed(str(x))):
            if f != r:
                return False
        return True

    def roman_to_int(self, s: str) -> int:
        '''
        Roman numerals are represented by seven different symbols:
                I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000

        For example, 2 is written as II in Roman numeral, just two one's
        added together. 12 is written as XII, which is simply X + II.
        The number 27 is written as XXVII, which is XX + V + II.

        Roman numerals are usually written largest to smallest from
        left to right.  However, the numeral for four is not IIII.
        Instead, the number four i's written as IV. Because the one
        is before the five we subtract it making four.  The same
        principle applies to the number nine, which is written as IX.
        There are six instances where subtraction is used:

            I can be placed before V (5) and X (10) to make 4 and 9.
            X can be placed before L (50) and C (100) to make 40 and 90.
            C can be placed before D (500) and M (1000) to make 400 and 900.

        Given a roman numeral, convert it to an integer.
        '''
        counter = 0
        last_char = ''
        numeral_lookup = {'I': 1, 'V': 5, 'X': 10,
                          'L': 50, 'C': 100,
                          'D': 500, 'M': 1000}
        reversal_lookup = {'I': ['V', 'X'],
                           'X': ['L', 'C'],
                           'C': ['D', 'M'],
                           'V': [], 'L': [], 'D': [], 'M': []}
        for p in reversed(s):
            if last_char in reversal_lookup[p]:
                counter -= numeral_lookup[p]
            else:
                counter += numeral_lookup[p]
            print(f'{p}: {counter}')
            last_char = p
        return counter

    def longest_common_prefix(self, strs: list[str]) -> str:
        ''' https://leetcode.com/problems/longest-common-prefix

        Within a group of strings find the longest common prefix.

        I've done a "horizontal" soluton here but there are other ways to
        implement it such as vertical and binary search.
        '''
        answer = ''
        for idx in range(len(min(strs, key=len))):
            letter_carrier = strs[0][idx]
            # print(f'idx: {idx} - {letter_carrier}')
            # compare the characters of each word in order and if they all
            # are the same, add the character to the answer.
            if all(word[idx] == letter_carrier for word in strs):
                answer += letter_carrier
            else:
                # if the numbers fail to compare then then we've found the lcp
                break
        return answer

    def valid_brackets(self, s: str) -> bool:
        '''
        Given a string s containing just the characters
        '(', ')', '{', '}', '[' and ']', determine if the
        input string is valid.

        An input string is valid if:

            Open brackets must be closed by the same type of brackets.
            Open brackets must be closed in the correct order.
        '''
        stack = []
        # we could do this with a map too.
        opnb = ['(', '[', '{']
        clsb = [')', ']', '}']
        for char in s:
            if char in opnb:  # is it an open bracket? store in the stack
                stack.append(char)
            elif char in clsb:  # closed bracket?
                oppochar = opnb[clsb.index(char)]  # find opposite bracket
                if len(stack) == 0:
                    # if the stack is empty w/ a closed bracket then
                    # the brackets are out of order.  Short circuit here.
                    return False
                elif stack[len(stack) - 1] == oppochar:
                    # if the last char added was the opposite then pop it off
                    stack.pop()
                else:
                    stack.append(char)
                    break
        if len(stack) == 0:
            return True
        else:
            return False


def main():
    pass


if __name__ == '__main__':
    main()
