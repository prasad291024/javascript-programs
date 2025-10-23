// break and continue
/*
  break and continue are used to change the normal behavior of loops.
*/
//Break is used to interrupt a loop.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}
// 0 1 2
// The above code stops if 3 found in the iteration process.

// continue
// We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}
// 0 1 2 4 5