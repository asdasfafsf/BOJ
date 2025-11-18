const n = BigInt(require('fs').readFileSync(0,'utf8').trim())

if (n >= BigInt(-32768) && n <= BigInt(32767)) {
    console.log("short")
} else if (n >= BigInt(-2147483648) && n <= BigInt(2147483647)) {
    console.log("int")
} else {
    console.log("long long")
}