<?php

$input = file('input.txt');

return [

    one => run(function () use ($input) {
        return 0;
    }),

    two => run(function () use ($input) {
        return 0;
    }),

];
