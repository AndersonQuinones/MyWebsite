function bash(data) {
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim();
    if (data.toString().trim() === 'pwd') {
      process.stdout.write(__dirname);
    }
    process.stdout.write('\nprompt > ');
});
}

// module.exports = function (data) {
//   // pwd code
//   if (data.toString().trim() === 'pwd') {
//     process.stdout.write(__dirname);
//   }
//   process.stdout.write('\nprompt > ');
// }</

module.exports = bash;
