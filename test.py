# dont forget to import unittest/function !
# unit test structure
# add comment why this case

import unittest
from Concept-Questions import is_isogram

class TestIsIsogram(unittest.TestCase):

    def test_isogram_word(self):
        self.assertTrue(is_isogram('exam')) # using 'exam' which has no repeating letters.

if __name__ == '__main__':
    unittest.main()