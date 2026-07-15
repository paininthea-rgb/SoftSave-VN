# 🛡️ SoftSafe VN

**PC Compliance & Performance Platform**  
> _“Làm máy tính nhanh hơn 3x + tránh phạt hành chính đến 200 triệu đồng”_

SoftSafe VN là nền tảng giúp doanh nghiệp và tổ chức tại Việt Nam:
- Kiểm tra tuân thủ bản quyền phần mềm
- Cải thiện hiệu năng máy tính
- Theo dõi rủi ro theo thời gian thực
- Chuẩn hóa chứng từ, báo cáo và bằng chứng phục vụ kiểm toán

---

## 📌 Mục tiêu dự án website

Website này là **marketing + product education site** cho SoftSafe VN, bao gồm:
- Landing page định vị sản phẩm
- Giới thiệu 6 lớp tính năng (compliance + performance)
- Pricing tiers (Free/Pro/Business/Enterprise)
- Marketplace alternatives (free & paid)
- Price transparency principles
- Compliance certificate preview
- FAQ, legal disclaimer, liên hệ

> Đây là frontend scaffold để go-live nhanh, tối ưu mở rộng về sau cho dashboard/app.

---

## 🧱 Tech Stack

- **React** (UI)
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **TypeScript** (khuyến nghị; có thể JS tùy hiện trạng repo)

---

## 🚀 Quick Start

## 1) Clone repository
```bash
git clone https://github.com/paininthea-rgb/SoftSave-VN.git
cd SoftSave-VN
```

## 2) Install dependencies
```bash
npm install
```

## 3) Run development server
```bash
npm run dev
```
Mặc định app sẽ chạy tại: `http://localhost:5173`

## 4) Build production
```bash
npm run build
```

## 5) Preview production build
```bash
npm run preview
```

---

## 📁 Suggested project structure

```txt
src/
  components/
    Navbar.tsx
    Hero.tsx
    FeatureGrid.tsx
    BeforeAfter.tsx
    PricingCards.tsx
    MarketplaceTable.tsx
    PriceTransparency.tsx
    CertificatePreview.tsx
    Partnerships.tsx
    FAQ.tsx
    Footer.tsx
  data/
    pricing.ts
    features.ts
    marketplace.ts
    faq.ts
  pages/
    Home.tsx
  App.tsx
  main.tsx
```

---

## 🧭 Content sections mapping

- **Hero**: giá trị cốt lõi + CTA “Quét miễn phí”, “Xem bảng giá”
- **Features**: 6-layer product stack
- **Before/After**: demo hiệu năng & compliance
- **Pricing**: Free / Pro / Business / Enterprise
- **Marketplace**: phần mềm vi phạm ↔ giải pháp thay thế
- **Transparency**: timestamped pricing, market comparison, quote ID
- **Certificate**: preview chứng nhận tuân thủ
- **Partnerships**: PACISOFT, VietCAD, OneCAD, KOL program
- **FAQ**: pháp lý, dữ liệu, hóa đơn, an toàn scan
- **Footer**: contact, legal links, copyright

---

## 🌐 Deployment

### Option A — Vercel (recommended)
1. Push code to GitHub
2. Import repo vào Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Option B — Static hosting
Upload thư mục `dist/` sau khi chạy `npm run build`.

---

## 🔒 Compliance & legal disclaimer

Nội dung trên website chỉ nhằm mục đích thông tin và hỗ trợ vận hành,  
**không thay thế tư vấn pháp lý hoặc tư vấn thuế chuyên nghiệp**.

Các số liệu về mức phạt, thuế suất, chính sách enforcement, giá license, commission:
- Có thể thay đổi theo thời gian
- Cần đối chiếu văn bản pháp lý/chính sách mới nhất
- Cần xác minh với đối tác chính thức trước khi phát hành báo giá/chứng từ

---

## 🧾 Invoice & tax note (future integration)

Planned integrations (chưa triển khai trong website scaffold):
- VNPay / MoMo / Bank Transfer
- Paddle (global MoR)
- MISA e-invoice API auto-trigger
- Quote ID verification flow

---

## 🛠️ Development guidelines

- Ưu tiên component tái sử dụng
- Giữ dependency tối thiểu
- Đảm bảo mobile-first responsive
- Đảm bảo accessibility cơ bản:
  - Semantic landmarks
  - Focus-visible states
  - Contrast phù hợp
  - Alt text cho hình ảnh
- Không hardcode nội dung khó bảo trì; ưu tiên tách `src/data/*`

---

## 🗺️ Roadmap (web + product)

- [ ] v1 marketing site (VN-first)
- [ ] EN content + i18n structure
- [ ] Lead capture form + CRM webhook
- [ ] Verify certificate public page
- [ ] Auth + customer dashboard shell
- [ ] Organization fleet dashboard (phase app)

---

## 🤝 Contributing

1. Tạo branch mới:
```bash
git checkout -b feat/your-feature-name
```
2. Commit changes:
```bash
git commit -m "feat: add new section"
```
3. Push branch và tạo Pull Request.

---

## 📬 Contact (placeholder)

- Website: `https://softsafe.vn` (planned)
- Email: `hello@softsafe.vn` (placeholder)
- Company: **CÔNG TY TNHH SOFTSAFE VIỆT NAM** (planned legal entity)

---

## 📄 License

Chưa xác định (TBD).  
Khuyến nghị dùng license nội bộ/private trong giai đoạn pre-launch.
