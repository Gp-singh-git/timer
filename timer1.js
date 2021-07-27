let timeCount = process.argv.slice(2);
timeCount = timeCount.sort((a,b) => a-b);
if(timeCount.length === 0) { process.exit();}

for( let i in timeCount) {
  if(isNaN(timeCount[i]) || timeCount[i] < 0) {
    continue;
  } else {
    setTimeout(()=> console.log("beep"), timeCount[i]*1000);
  }

}

