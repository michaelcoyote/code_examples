# import pytest
import lc_2021


# Start the tests here

def test_example():
    """Test template"""
    assert(lc_2021.main() is None)


class TestExamples(object):
    def test_is_palindrome(self):
        examples1 = lc_2021.Examples()
        test_input = [101, 12321, 3456543, -101, 123456, 9990, 10]
        test_results = [True, True, True, False, False, False, False]
        result = [examples1.is_palindrome(x=xin) for xin in test_input]
        assert(result == test_results)

    def test_roman_to_int(self):
        examples1 = lc_2021.Examples()
        test_input = ['III', 'LVIII', 'MCMXCIV']
        test_results = [3, 58, 1994]
        result = [examples1.roman_to_int(s=roman) for roman in test_input]
        assert(result == test_results)
