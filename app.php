<?php

define('one', 'one');
define('two', 'two');

function run($f)
{
    return $f();
}

$day = substr('0' . $argv[1], -2);
chdir('./day' . $day);
$solution = require_once('index.php');

extract([
    'green'   => "\033[0;32m",
    'red'     => "\033[0;31m",
    'bgBlack' => "\033[40m",
    'end'     => "\033[0m\n",
]);

echo $green, $bgBlack, "    Advent of Code    ", $end;
echo $green, $bgBlack, "  ------- ";
echo $red, $bgBlack, $day;
echo $green, $bgBlack, " -------  ", $end;
echo $green, $bgBlack, "======================", $end;
echo "\n";
echo " Part one: ", $solution[one], "\n";
echo " Part two: ", $solution[two], "\n";
echo "\n";
