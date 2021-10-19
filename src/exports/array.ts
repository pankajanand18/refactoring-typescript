export function swap(nums: number[], i: number, positionToSwap: number) {
    let temp = nums[i]
    nums[i] = nums[positionToSwap]
    nums[positionToSwap] = temp
}

/**
 * @description Reverse a given array in place
 * @param nums
 */
function reverseArray(nums: number[]) {
    for (let i = 0; i < nums.length / 2; i++) {
        let positionToSwap = nums.length - 1 - i
        swap(nums, i, positionToSwap);

    }
}
