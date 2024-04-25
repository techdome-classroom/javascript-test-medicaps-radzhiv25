function longestSubstring(s) {
  // Implementation of longestSubstring function
  let maxLength = 0; 
  let charSet = new Set(); 
  let left = 0; 

  for (let right = 0; right < s.length; right++) {
    if (charSet.has(s[right])) {
      while (s[left] !== s[right]) {
        charSet.delete(s[left]);
        left++;
      }
      left++;
    } else {
      charSet.add(s[right]);
    }
    maxLength = Math.max(maxLength, charSet.size);
  }

  return maxLength;
}

module.exports = { longestSubstring };
