kabsch algorithm
===================
kabsch algorithm implemented as outlined [here](http://boscoh.com/protein/rmsd-root-mean-square-deviation.html). the signature of the only exported method is _(set1, set2)_, where set1 and set2 are matrices, each column in those is (x,y,z) coordinate for a point. like this (2 points):

```javascript
[[2, 3], [3, 4], [4, 5]]
```

this set represents two points: (2, 3, 4) and (3, 4, 5).

it uses jacobi-eigenvalue internally to compute eigenvalues. check your args before invoking it!