const registrationDate = new Date('2023-09-17T10:00:00Z');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'asia/bangkok'
}

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);
