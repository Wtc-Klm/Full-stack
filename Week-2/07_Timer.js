const startTime = Date.now();
function someHeavyTask() {
	let result = 0;
	for (let i = 0; i < 5e7; i++) {
		result += i;
	}
	return result;
}
someHeavyTask();
const endTime = Date.now();

const duration = endTime - startTime;
console.log(`ฟังก์ชันนี้ใช้เวลาทำงาน: ${duration} มิลลิวินาที`);

