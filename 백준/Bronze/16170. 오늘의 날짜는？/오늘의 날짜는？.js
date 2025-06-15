const now = new Date();

console.log(now.getUTCFullYear());
console.log(String(now.getUTCMonth() + 1).padStart(2, '0'));
console.log(String(now.getUTCDate()).padStart(2, '0'));