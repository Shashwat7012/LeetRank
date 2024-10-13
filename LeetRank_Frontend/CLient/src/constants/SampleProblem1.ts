export default {
    problemStatement: `

## LeetRank Problem 1: Two Sum

<br />

### Problem Description

![Two Sum Problem](https://www.ggorantala.dev/content/images/size/w1200/2024/02/Two-sum.png)

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example

#### Example 1:

Input: \`nums = [2,7,11,15], target = 9\`  
Output: \`[0,1]\`  
Explanation: Because \`nums[0] + nums[1] = 2 + 7 = 9\`, we return \`[0, 1]\`.

#### Example 2:

Input: \`nums = [3,2,4], target = 6\`  
Output: \`[1,2]\`  
Explanation: Because \`nums[1] + nums[2] = 2 + 4 = 6\`, we return \`[1, 2]\`.

#### Example 3:

Input: \`nums = [3,3], target = 6\`  
Output: \`[0,1]\`  
Explanation: Because \`nums[0] + nums[1] = 3 + 3 = 6\`, we return \`[0, 1]\`.

### Constraints

- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`

### Follow-up

Can you solve it in O(n) time complexity?
    
    `
}
