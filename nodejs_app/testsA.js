var t = 0;
const exec = require('child_process').exec;
exec('node nodejs_app/app.js', function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error}');
	t =1;
    return;
  }
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');
});
exec('killall node',function(error, stdout, stderr){
  if (error) {
    console.error('exec error: ${error}');
	t =1;
    return;
  }
  console.log('stdout: ${stdout}');
  console.log('stderr: ${stderr}');
}); 
return t;
