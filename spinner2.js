let spinner = ['|', '/', '-', '\\', '|','/', '-', '\\', '|'];
let n = 100;
for (const char of spinner) {
  setTimeout(() => process.stdout.write('\r' + char + '    '), n);
  n += 200;
}
setTimeout(() => process.stdout.write('\n'), n);