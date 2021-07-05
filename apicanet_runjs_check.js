var start = Date.now() / 1000;
var end = start + 1;
var test = {
 "returncode": 2,
 "stdout": "Javascript stdout",
 "stderr": "Javascript stderr",
 "start_time": start,
 "end_time": end,
 "message": "Check ran fine",
 "unit": "ms",
 "value": "33",
 "javascript": true,
 "provided_args": process.argv.slice(2),
 "extra_text": "Hello"
}

console.log(JSON.stringify(test));
