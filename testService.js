const { exec } = require('child_process');

// Test the exact same command that our service uses
exec("docker ps --format '{{.Names}}\\t{{.Status}}\\t{{.ID}}'", (error, stdout, stderr) => {
  if (error) {
    console.error('Error executing command:', error);
    return;
  }
  if (stderr) {
    console.error('STDERR:', stderr);
    return;
  }
  
  console.log('STDOUT:', stdout);
  console.log('Length:', stdout.length);
  
  const lines = stdout.trim().split('\n');
  console.log('Lines count:', lines.length);
  console.log('Lines:', lines);
  
  const containerLines = lines.filter(line => 
    line.trim() !== '' && !line.startsWith('NAMES')
  );
  console.log('Container lines:', containerLines);
});