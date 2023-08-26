function maxProductSubarray(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = maxProduct;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

const input = [2, 3, -2, 4];
const output = maxProductSubarray(input);
console.log("Maximum product of contiguous subarray:", output);
