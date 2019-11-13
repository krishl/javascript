/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
  
  If you want to visualize your algorithm, call snapshot(<your array>) at the end of your heapify. The comparisons number will probably
  be a bit skewed but it's meant to be an approximation.
  
  
*/

const heapSort = (array) => {
  snapshot(array);
  array = createMaxHeap(array);
  let heapSize = array.length;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize--;
    heapify(array, 0, heapSize);
  }
  snapshot(array);
  return array;
}

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
}

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  
  let largestValueIndex = index;
  
  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }
  
  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }
  
  if (largestValueIndex !== index) {
    const temp = array[index];
    array[index] = array[largestValueIndex];
    array[largestValueIndex] = temp;
    heapify(array, largestValueIndex, heapSize);
    snapshot(array);
  }
}

// unit tests
// do not modify the below code
describe('heap sort', function() {
  
  // only one of these can run at a time due to how I implemented it D:
  // the first one is the real test, the second is just to see what it looks like on a large scale
  
  xit('should sort correctly', () => {
    const nums = [2,5,3,8,10,6,4,7,9,1];
    heapSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
  it('should sort correctly', () => {
    const fill = 50;
    const nums = _.shuffle(new Array(fill).fill().map((_, index) => index + 1));
    heapSort(nums);
    expect(nums).toEqual(new Array(fill).fill().map((_, index) => index + 1));
    done();
  });
});
