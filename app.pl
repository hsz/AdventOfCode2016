use strict;
use Cwd;
use Term::ANSIColor qw(:constants);

my $day = sprintf("%02s", $ARGV[0]);

chdir 'day' . $day;
require 'index.pl';

print GREEN, ON_BLACK, "    Advent of Code    ", RESET, "\n";
print GREEN, ON_BLACK, "  ------- ", RED, $day, GREEN, " -------  ", RESET, "\n";
print GREEN, ON_BLACK, "======================", RESET, "\n";
print "\n";
print " Part one: ", one(), "\n";
print " Part two: ", two(), "\n";
print "\n";
