
var t = 0;
const exec = require('child_process').exec;
exec('node nodejs_app/app.js', function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error}');
	t =1;
    return 1;
  }
 else{
	 
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');
  return 0;
 }
});

exec('node nodejs_app/app.js', function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error} ');
	  console.log('$?');
	t =1;
		 exec('killall node echo $?');
	  return 0;
		      
    
  }
 else{
	 
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');

  return 1;
 }
});
