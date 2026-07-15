# 🛡️ SoftSave VN

**Nền tảng tiết kiệm thông minh cho người dùng Việt Nam**  
> _Ưu tiên tiếng Việt, đồng thời hỗ trợ chuyển đổi VI/EN trên giao diện._

SoftSave VN là website landing + waitlist cho sản phẩm tài chính số, tập trung vào:
- Tiết kiệm vi mô theo mục tiêu.
- Theo dõi tiến độ minh bạch.
- Trải nghiệm đơn giản, dễ hiểu.

---

## 📌 Mục tiêu website

- Landing page giới thiệu giá trị cốt lõi.
- Trình bày các trụ cột sản phẩm.
- Thuyết minh chiến lược thị trường và lộ trình triển khai.
- Thu lead qua form danh sách chờ (waitlist).

---

## 🧱 Công nghệ sử dụng

- **Next.js 16** (App Router)
- **React 19**
- **Firebase Web SDK** (Firestore)
- **CSS tùy biến** (không phụ thuộc UI framework)

---

## 🚀 Khởi chạy nhanh

### 1) Clone repository
```bash
git clone https://github.com/paininthea-rgb/SoftSave-VN.git
cd SoftSave-VN
```

### 2) Cài dependencies
```bash
npm install
```

### 3) Tạo biến môi trường Firebase
```bash
copy .env.local.example .env.local
```

Điền các biến sau vào `.env.local`:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### 4) Chạy môi trường phát triển
```bash
npm run dev
```
Mặc định: `http://localhost:3000`

### 5) Build production
```bash
npm run build
```

### 6) Chạy bản production local
```bash
npm run start
```

---

## 🌐 Chuyển ngôn ngữ VI/EN

- Giao diện mặc định: **Tiếng Việt**.
- Có nút chuyển ngôn ngữ **VI | EN** trên thanh điều hướng.
- Form waitlist và nội dung chính đổi theo ngôn ngữ đã chọn.

---

## 📁 Cấu trúc chính

```txt
app/
  layout.js
  page.js
  globals.css
components/
  WaitlistForm.js
lib/
  firebase.js
```

---

## 📬 Dữ liệu waitlist

- Collection Firestore: `waitlist`
- Trường ghi: `name`, `email`, `organization`, `createdAt`

---

## 🛠️ Scripts

- `npm run dev`: chạy môi trường phát triển
- `npm run build`: build production
- `npm run start`: chạy bản production
- `npm run lint`: kiểm tra lint

---

## 🔒 Lưu ý pháp lý

Nội dung website nhằm mục đích thông tin và vận hành sản phẩm, không thay thế tư vấn pháp lý hoặc thuế chuyên nghiệp.

---

## 🤝 Đóng góp

1. Tạo branch mới:
```bash
git checkout -b feat/your-feature-name
```
2. Commit:
```bash
git commit -m "feat: your change"
```
3. Push branch và tạo Pull Request.

---

## 📄 License

Chưa xác định (TBD), khuyến nghị dùng license nội bộ/private ở giai đoạn pre-launch.

---

## EN Summary

SoftSave VN is a Next.js + Firebase landing and waitlist website. Vietnamese is the default language, with a VI/EN switch in the top navigation. Configure Firebase keys in `.env.local` before running.
