// Code your solutions in this file
function writeCards(array,messsage){
    let all =[]
  for(let i=0;i<array.length;i++){
    
    all.push(`Thank you, ${array[i]}, for the wonderful ${messsage} gift!`);
  }
  return all
  }
  function countDown(a){
      console.log(a);
    for(let i=a;i>0;i--){
        console.log(i-1);
    }
}