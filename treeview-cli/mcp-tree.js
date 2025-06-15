#!/usr/bin/env node

const { exec } = require('child_process');

const args = process.argv.slice(2);
let path = '.';
let depth = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--path' && args[i + 1]) {
    path = args[i + 1];
    i++;
  } else if (args[i] === '--depth' && args[i + 1]) {
    depth = args[i + 1];
    i++;
  }
}

let cmd = `tree "${path}"`;
if (depth) {
  cmd += ` -L ${depth}`;
}

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    process.stderr.write(stderr || error.message);
    process.exit(1);
  }
  process.stdout.write(stdout);
}); 