const CanSortWithOneSwap = (array: number[]): boolean => {
  const n = array.length; // طول ارایه
  // مرتب سازی آرایه جهت مقایسه با آرایه اصلی
  const sortArray = [...array].sort((a, b) => a - b); // O(nlogn) در بدترین حالت

  let mismatchIndices: number[] = []; // یک آرایه برای ذخیره آدرس خانه های اشتباه

  for (let i = 0; i < n; i++) {
    // مقایسه تک به تک عضو های هر دو آرایه باهم
    if (sortArray[i] !== array[i]) mismatchIndices.push(i); // O(n)
  }

  if (mismatchIndices.length == 0) return true; // در صورتی که آرایه از قبل مرتب بود
  if (mismatchIndices.length !== 2) return false; // در صورتی که بیشتر از دو خانه اشتباه وجود داشت

  const [i, j] = mismatchIndices;
  [array[i], array[j]] = [array[j], array[i]]; // جابجایی مقدار دو خانه 

  // بررسی مجدد آرایه با آرایه مرتب شده که آیا با جابجایی دو مقدار آرایه مرتب شد یا خیر
  const result = array.every((val, idx) => val === sortArray[idx]); // O(n)

  return result; 
};
// => O(n.log n)
export default CanSortWithOneSwap;
