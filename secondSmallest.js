// Function to find second smallest and second largest numbers
function findSecondSmallestAndLargest(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least two elements.");
        return;
    }

    arr.sort((a, b) => a - b);

    console.log("Second Smallest:", arr[1]);
    console.log("Second Largest:", arr[arr.length - 2]);
}

// Example array
let numbers = [12, 4, 7, 9, 15, 23, 8];

// Initial call
findSecondSmallestAndLargest(numbers);

// Simulating dynamic changes
setTimeout(() => {
    numbers.push(6); // Add a new number
    numbers.splice(2, 1); // Remove an existing number
    findSecondSmallestAndLargest(numbers); // Call function again
}, 3000); // Change array after 3 seconds
