# LINE Webhook Project

## วิธีใช้งาน
1. อัปโหลดโฟลเดอร์นี้ขึ้น GitHub
2. Deploy บน Vercel
3. ตั้ง Environment Variable ที่ Vercel:
   - LINE_CHANNEL_ACCESS_TOKEN = <token จาก LINE Developers>
4. ไป LINE Developers Console → Messaging API → Webhook URL:
   https://<your-project>.vercel.app/api/webhook
5. กด Verify และเปิดใช้งาน Webhook
