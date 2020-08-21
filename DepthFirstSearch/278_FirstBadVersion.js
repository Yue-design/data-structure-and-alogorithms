/*
278 First Bad Version

You are given an API which returns whether a version is bad.
Implement a function to find the first bad version.
You should minimize the number of calls to the API.

* Definition for isBadVersion()
* @param {integer} version number
* @return {boolean} whether the version is bad
* isBadVersion = function(version) {
*     ...
* };

* @param {function} isBadVersion()
* @return {function}
*/

var solution = function(isBadVersion) {
  /*
     * @param {integer} n Total versions
     * @return {integer} The first bad version
  */
  return function(n){
    if (isBadVersion(1)) {
      return 1;
    }
    let left = 1;
    let right = n;
    while (left+1 < right) {
      let mid = Math.floor((left + right)/2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  }
};