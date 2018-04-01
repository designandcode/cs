# cs_data-structures--algorithms
## Sort
### Selection Sort #1

Selection sort using extra array

```
+++++++++++
Iteration 0
[2, 4, 1, 9, 8, 3]
New []
Min undefined
Pos undefined


+++++++++++
Iteration 1
[2, 4, 1, 9, 8, 3]
 ^
Min 2
Pos 0

[2, 4, 1, 9, 8, 3]
    ^
[2, 4, 1, 9, 8, 3]
       ^
Min 1
Pos 2

[2, 4, 1, 9, 8, 3]
          ^
[2, 4, 1, 9, 8, 3]
             ^
[2, 4, 1, 9, 8, 3]
                ^
[2, 4, 1, 9, 8, 3]
       x

[2, 4, 9, 8, 3]
New [1]


+++++++++++
Iteration 2
[2, 4, 9, 8, 3]
 ^
Min 2
Pos 0

[2, 4, 9, 8, 3]
    ^
[2, 4, 9, 8, 3]
       ^
[2, 4, 9, 8, 3]
          ^
[2, 4, 9, 8, 3]
             ^
[2, 4, 9, 8, 3]
 x

[4, 9, 8, 3]
New [1, 2]


+++++++++++
Iteration 3
[4, 9, 8, 3]
 ^
Min 4
Pos 0

[4, 9, 8, 3]
    ^
[4, 9, 8, 3]
       ^
[4, 9, 8, 3]
          ^
Min 3
Pos 3

[4, 9, 8, 3]
          x

[4, 9, 8]
New [1, 2, 3]


+++++++++++
Iteration 4
[4, 9, 8]
 x

[9, 8]
New [1, 2, 3, 4]


+++++++++++
Iteration 5
[9, 8]
    x

[9]
New [1, 2, 3, 4, 8]


+++++++++++
Iteration 6
[9]
 x


+++++++++++
Finish
[]
New [1, 2, 3, 4, 8, 9]
```

Interactive
http://jsfiddle.net/gh/get/library/pure/designandcode/cs/tree/master/data-structures--algorithms/sort/selection-sort/demo
