
module.exports = process.stdout.write('prompt > ');
module.exports = process.stdin.on('data', (data)=>{
 const cmd = data.toString().trim();

  if (cmd == 'pwd') {
    console.log(process.cwd());
   
  } else {
     process.stdout.write('You typed: ' + cmd);
     process.stdout.write('\nprompt > ');
  }
})