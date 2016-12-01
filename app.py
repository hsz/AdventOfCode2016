import importlib
import os
import sys

class colors:
    GREEN = '\033[032m'
    RED = '\033[031m'
    BGBLACK = '\033[40m'
    END = '\033[0m'

day = sys.argv[1].zfill(2)
os.chdir('day%s' %day)
solution = importlib.import_module('day%s' % day)

print colors.GREEN + colors.BGBLACK + '    Advent of Code    ' + colors.BGBLACK
print colors.GREEN + colors.BGBLACK + '  ------- ' + colors.RED + colors.BGBLACK + day + colors.GREEN + colors.BGBLACK + ' -------  ' + colors.END
print colors.GREEN + colors.BGBLACK + '======================' + colors.END
print ''
print ' Part one:', solution.one()
print ' Part two:', solution.two()
print ''
