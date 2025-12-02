const fullName = " Anirach  MingKhwan ";
const cleanedName = fullName.trim();
console.log(cleanedName);

cleanedName.split(' ');
const nameParts = cleanedName.split(' ');
console.log(nameParts);

nameParts.filter(Boolean)
const finalParts = nameParts.filter(Boolean);
console.log(finalParts);

const firstName = finalParts[0];
console.log(`สวัสดี, ${firstName}`);