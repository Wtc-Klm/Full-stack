function createLogENtry(massage)
{
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH')

    const eventId = Math.random().toString(16).substring(2,10).toUpperCase();
    const logMassage = massage.toUpperCase();

    return `[${timestamp}] [${eventId}] ${logMassage}`;
}
const log = createLogENtry('User login successfully');
console.log(log);
// ตัวอย่างผลลัพธ์: [14:35:20] [A1B2C3D4] USER LOGIN SUCCESSFULLY
<<<<<<< HEAD
test
=======
10
>>>>>>> cf6e89d30e1f59be1a049b73b454c4f90fc52e20
