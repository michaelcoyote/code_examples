#!/usr/bin/env python
"""This is an example."""


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
        for p in reversed(s):
            if p == 'I':
                if last_char == 'V' or last_char == 'X':
                    counter -= 1
                else:
                    counter += 1
            elif p == 'V':
                counter += 5
            elif p == 'X':
                if last_char == 'L' or last_char == 'C':
                    counter -= 10
                else:
                    counter += 10
            elif p == 'L':
                counter += 50
            elif p == 'C':
                if last_char == 'D' or last_char == 'M':
                    counter -= 100
                else:
                    counter += 100
            elif p == 'D':
                counter += 500
            elif p == 'M':
                counter += 1000
            last_char = p
        return counter


def main():
    pass


if __name__ == '__main__':
    main()
