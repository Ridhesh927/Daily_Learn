/*
// Understand this first - read it slowly

```

**Now your task:** Write your own function called `makeCountdown` that starts at 10 and counts down every time you call it. No googling. Just try. Even if it breaks, try.

---

## LeetCode — Honest Answers

**Time per day:** 30 minutes maximum right now. That's it. Not 2 hours. Not "until I solve it." 30 minutes then stop.

**If you don't understand a single problem in week 1:** That is completely normal. Seriously. Every developer went through this. Here's what you do:

Read the problem. Try for 15 minutes even if you feel lost. If you're stuck, look at the solution, read it slowly, understand each line, then close it and rewrite it yourself from memory.

You're not cheating. You're learning. Understanding a solution fully is better than staring at a blank screen for 2 hours.

**Start with literally these two problems and nothing else:**

- Two Sum (array, hash map)
- Reverse a String

That's your entire week 1 LeetCode goal. Two problems. Understand them deeply rather than rushing to the next one.

---

## Your Daily Schedule This Week
```
Morning or evening — pick one time and stick to it

30 min → LeetCode (Two Sum or Reverse String only)
60 min → JS fundamentals (closures this week)

Total: 90 minutes a day
*/

 
//**Now your task:** Write your own function called `makeCountdown` that starts at 10 and counts down every time you call it. No googling. Just try. Even if it breaks, try.
function makeCountdown() {
  let count = 10;
  return function() {
    count--;
    return count;
  }
}

const counter = makeCountdown();
console.log(counter()); // 9
console.log(counter()); // 8
console.log(counter()); // 7


// LeetCode


var reverseString = function(s) {
    // Two pointer approach
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters at left and right
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move pointers toward center
        left++;
        right--;
    }
};

/*
```

**What's happening here:**
- You have two pointers: one at start (`left`), one at end (`right`)
- Swap the characters they're pointing to
- Move them toward each other
- Stop when they meet in the middle

This is the "two pointer" pattern. You'll see it everywhere in DSA.

---

## Your Task Right Now

Don't just read that code. **Actually trace through it step by step on paper.**

Take the input `["h","e","l","l","o"]` and manually do what the code does:

Start: ["h","e","l","l","o"]
       left=0, right=4

Step 1: swap s[0] and s[4] → ["o","e","l","l","h"]
        left=1, right=3

Step 2: swap s[1] and s[3] → ["o","l","l","e","h"]
        left=2, right=2

Stop (left >= right)

Result: ["o","l","l","e","h"]

~~~

```
*/