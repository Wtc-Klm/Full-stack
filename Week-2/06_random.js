function generateTempId() {
    // Math.random() ให้ตัวเลขระหว่าง 0 ถึง 1
    // .toString(36) แปลงเป็นสตริง 36 (0-9, a-z)
    // .substring(2, 8) ตัด '0.' ข้างหน้า และเอา 6 อักษรหลัง
    const randomPart = Math.random().toString(36).substring(2, 8);
    // .toUpperCase() เพื่อตัวพิมพ์ใหญ่
    return randomPart.toUpperCase();
}

const orderId = generateTempId();
console.log(`ID ออเดอร์ชั่วคราว : ${orderId}`);
// Output (ตัวอย่าง): ID ออเดอร์วันนี้ : 482A1Z
