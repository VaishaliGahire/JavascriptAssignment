function countStringOccurrences(arr) {
    const counts = {};
  
    arr.forEach(str => {
      counts[str] = (counts[str] || 0) + 1;
    });
  
    for (const key in counts) {
      console.log(`${key} ${counts[key]}`);
    }
  }
  
  const inputArray = ["abhay", "abhi", "ritesh", "rakesh", "abhay"];
  countStringOccurrences(inputArray);
  