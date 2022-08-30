

// LOOPS
 
const wordArr = [
    " deTTe",
    "er  ",
    " tekST ",
    "som",
    "må",
    "rydDES   ",
    "Opp",
    "   i   ",
];
   
  let cleanedArr = [];
   
function wordCleaner(arr){
    for(let i = 0; i < arr.length; i++){
        
      cleanedArr.push(arr[i].trim().toLowerCase());
    }
  
}
wordCleaner(wordArr);
   

let combinedCleanedArr = cleanedArr.join(" ");

console.log('"' + combinedCleanedArr + '"');