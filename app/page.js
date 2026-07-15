"use client";

import { useMemo, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";

const content = {
  vi: {
    homeAria: "Trang chủ SoftSave VN",
    navAria: "Điều hướng chính",
    nav: {
      solution: "Giải pháp",
      products: "Sản phẩm",
      market: "Thị trường",
      roadmap: "Lộ trình",
      waitlist: "Đăng ký chờ",
    },
    langLabel: "Ngôn ngữ",
    hero: {
      eyebrow: "Fintech cho thói quen tiết kiệm thực tế",
      title: "Xây thói quen tài chính vững chắc với công cụ bản địa hóa cho Việt Nam.",
      lede:
        "SoftSave VN biến chi tiêu hằng ngày thành tiến độ rõ ràng thông qua tự động tiết kiệm vi mô, theo dõi mục tiêu và nội dung tài chính dễ hiểu, phù hợp bối cảnh người dùng Việt Nam.",
      primaryCta: "Bắt đầu thử nghiệm",
      secondaryCta: "Khám phá nền tảng",
      panelTitle: "Tổng quan tăng trưởng",
      kpi1: "mục tiêu người dùng hoạt động mỗi tháng",
      kpi2: "mốc tham chiếu hoàn thành mục tiêu",
      kpi3: "thành phố triển khai giai đoạn một",
    },
    solution: {
      problemTitle: "Bài toán",
      problemText:
        "Người đi làm trẻ và các gia đình muốn tiết kiệm, nhưng thu nhập chưa ổn định, chi phí sinh hoạt tăng và công cụ rời rạc khiến việc duy trì thói quen trở nên khó khăn.",
      coreTitle: "Giải pháp cốt lõi",
      coreText:
        "Tự động tiết kiệm vi mô gắn với mục tiêu thực tế: học tập, quỹ khẩn cấp, y tế và nâng cấp đời sống gia đình.",
      whyTitle: "Vì sao hiệu quả",
      whyText:
        "Gợi ý theo hành vi, tiến độ minh bạch và ngôn ngữ dễ hiểu giúp người dùng luôn chủ động mà không cần thuật ngữ tài chính phức tạp.",
    },
    products: {
      eyebrow: "Trụ cột nền tảng",
      title: "Sản phẩm thiết kế theo hành vi tài chính hằng ngày",
      autoSaveText:
        "Cơ chế chuyển tiền theo quy tắc từ ví và tài khoản ngân hàng: làm tròn giao dịch hoặc trích khoản nhỏ theo lịch.",
      goalHubText:
        "Lập kế hoạch đa mục tiêu với dự báo theo mốc thời gian, giúp phân bổ tiết kiệm giữa nhu cầu ngắn hạn và dài hạn.",
      learningText:
        "Nội dung hướng dẫn ngắn gọn kích hoạt theo hành vi, giúp đưa ra quyết định tài chính tốt hơn đúng thời điểm.",
    },
    market: {
      eyebrow: "Chiến lược thị trường",
      title: "Phân phối tập trung vào niềm tin và khả năng tiếp cận",
      text:
        "SoftSave VN kết hợp kênh số trực tiếp với đối tác cộng đồng địa phương và doanh nghiệp để giảm rào cản sử dụng.",
      items: [
        "Mạng lưới đại sứ sinh viên và người đi làm trẻ",
        "Thử nghiệm tích hợp lương và phúc lợi cho SME",
        "Workshop cộng đồng cùng các tổ chức địa phương",
        "Ưu đãi giới thiệu theo mốc hoàn thành tiết kiệm",
      ],
    },
    roadmap: {
      eyebrow: "Lộ trình triển khai",
      title: "Thực thi theo từng giai đoạn",
      phase1: "Giai đoạn 1: Thử nghiệm",
      phase1Text: "Ra mắt ở các đô thị lớn với tính năng tiết kiệm và mục tiêu cốt lõi.",
      phase2: "Giai đoạn 2: Mở rộng",
      phase2Text: "Mở thêm kênh đối tác và cơ chế gợi ý theo hành vi người dùng.",
      phase3: "Giai đoạn 3: Phát triển sâu",
      phase3Text: "Triển khai module lập kế hoạch nâng cao và mở rộng theo khu vực.",
    },
    cta: {
      title: "Đăng ký danh sách chờ truy cập sớm SoftSave VN",
      text:
        "Để lại thông tin để nhận cập nhật thử nghiệm, bản xem trước sản phẩm và cơ hội hợp tác.",
    },
    footerTop: "Lên đầu trang",
  },
  en: {
    homeAria: "SoftSave VN home",
    navAria: "Main navigation",
    nav: {
      solution: "Solution",
      products: "Products",
      market: "Market",
      roadmap: "Roadmap",
      waitlist: "Join Waitlist",
    },
    langLabel: "Language",
    hero: {
      eyebrow: "Fintech for practical saving",
      title: "Build stronger money habits with local-first financial tools.",
      lede:
        "SoftSave VN turns everyday spending into structured progress through micro-saving automation, goal tracking, and practical financial education designed for Vietnam.",
      primaryCta: "Start Pilot",
      secondaryCta: "Explore Platform",
      panelTitle: "Growth Snapshot",
      kpi1: "active monthly users target",
      kpi2: "goal completion benchmark",
      kpi3: "pilot cities in phase one",
    },
    solution: {
      problemTitle: "Problem",
      problemText:
        "Young workers and families want to save, but inconsistent income, rising living costs, and fragmented apps make consistency difficult.",
      coreTitle: "Core Solution",
      coreText:
        "Automated micro-savings linked to real goals: education, emergency funds, healthcare, and household upgrades.",
      whyTitle: "Why It Works",
      whyText:
        "Behavior-driven nudges, transparent progress, and clear language keep users in control without complex financial jargon.",
    },
    products: {
      eyebrow: "Platform pillars",
      title: "Products built for daily financial behavior",
      autoSaveText:
        "Rules-based transfers from wallets and bank accounts that round up purchases or move scheduled micro-amounts.",
      goalHubText:
        "Multi-goal planning with timeline projections so users can split savings between short-term and long-term priorities.",
      learningText:
        "Bite-size financial guidance triggered by behavior, helping users make better decisions at the right moment.",
    },
    market: {
      eyebrow: "Go-to-market",
      title: "Distribution focused on trust and accessibility",
      text:
        "SoftSave VN combines direct digital acquisition with local community partnerships and employer channels to reduce adoption friction.",
      items: [
        "Campus and early-career ambassador network",
        "SME payroll and benefits integration pilots",
        "Community workshops with local organizations",
        "Referral incentives tied to savings milestones",
      ],
    },
    roadmap: {
      eyebrow: "Execution roadmap",
      title: "Phase-by-phase delivery",
      phase1: "Phase 1: Pilot",
      phase1Text: "Launch in urban hubs with core savings and goal features.",
      phase2: "Phase 2: Scale",
      phase2Text: "Add partner channels and behavior-based nudges.",
      phase3: "Phase 3: Expand",
      phase3Text: "Introduce premium planning modules and regional rollout.",
    },
    cta: {
      title: "Join the SoftSave VN early access waitlist",
      text:
        "Submit your details to receive pilot updates, product previews, and partnership opportunities.",
    },
    footerTop: "Back to top",
  },
};

export default function Home() {
  const [locale, setLocale] = useState("vi");
  const t = useMemo(() => content[locale], [locale]);

  return (
    <>
      <header className="topbar" id="top">
        <a className="brand" href="#top" aria-label={t.homeAria}>
          <span className="brand-mark">S</span>
          <span>SoftSave VN</span>
        </a>
        <nav className="main-nav" aria-label={t.navAria}>
          <button
            type="button"
            className="lang-toggle"
            aria-label={t.langLabel}
            onClick={() => setLocale((current) => (current === "vi" ? "en" : "vi"))}
          >
            {locale === "vi" ? "VI | EN" : "EN | VI"}
          </button>
          <a href="#solution">{t.nav.solution}</a>
          <a href="#products">{t.nav.products}</a>
          <a href="#market">{t.nav.market}</a>
          <a href="#roadmap">{t.nav.roadmap}</a>
          <a href="#waitlist" className="nav-cta">
            {t.nav.waitlist}
          </a>
        </nav>
      </header>

      <main className="page-shell">
        <section className="hero section">
          <div className="hero-copy slide-up">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#waitlist">
                {t.hero.primaryCta}
              </a>
              <a className="btn btn-ghost" href="#solution">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="hero-panel slide-up delay-1" aria-label={t.hero.panelTitle}>
            <h2>{t.hero.panelTitle}</h2>
            <ul className="kpis">
              <li>
                <strong>12,000+</strong>
                <span>{t.hero.kpi1}</span>
              </li>
              <li>
                <strong>88%</strong>
                <span>{t.hero.kpi2}</span>
              </li>
              <li>
                <strong>5</strong>
                <span>{t.hero.kpi3}</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="value-grid section" id="solution">
          <article className="value-card slide-up">
            <h3>{t.solution.problemTitle}</h3>
            <p>{t.solution.problemText}</p>
          </article>
          <article className="value-card highlight slide-up delay-1">
            <h3>{t.solution.coreTitle}</h3>
            <p>{t.solution.coreText}</p>
          </article>
          <article className="value-card slide-up delay-2">
            <h3>{t.solution.whyTitle}</h3>
            <p>{t.solution.whyText}</p>
          </article>
        </section>

        <section className="section" id="products">
          <div className="section-head">
            <p className="eyebrow">{t.products.eyebrow}</p>
            <h2>{t.products.title}</h2>
          </div>
          <div className="cards-3">
            <article className="product-card slide-up">
              <h3>AutoSave Engine</h3>
              <p>{t.products.autoSaveText}</p>
            </article>
            <article className="product-card slide-up delay-1">
              <h3>Goal Hub</h3>
              <p>{t.products.goalHubText}</p>
            </article>
            <article className="product-card slide-up delay-2">
              <h3>Learning Layer</h3>
              <p>{t.products.learningText}</p>
            </article>
          </div>
        </section>

        <section className="split section" id="market">
          <div>
            <p className="eyebrow">{t.market.eyebrow}</p>
            <h2>{t.market.title}</h2>
            <p>{t.market.text}</p>
          </div>
          <ul className="checklist">
            {t.market.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section timeline" id="roadmap">
          <div className="section-head">
            <p className="eyebrow">{t.roadmap.eyebrow}</p>
            <h2>{t.roadmap.title}</h2>
          </div>
          <ol>
            <li>
              <h3>{t.roadmap.phase1}</h3>
              <p>{t.roadmap.phase1Text}</p>
            </li>
            <li>
              <h3>{t.roadmap.phase2}</h3>
              <p>{t.roadmap.phase2Text}</p>
            </li>
            <li>
              <h3>{t.roadmap.phase3}</h3>
              <p>{t.roadmap.phase3Text}</p>
            </li>
          </ol>
        </section>

        <section className="cta section" id="waitlist">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
          <WaitlistForm locale={locale} />
        </section>
      </main>

      <footer className="footer">
        <p>SoftSave VN</p>
        <a href="#top">{t.footerTop}</a>
      </footer>
    </>
  );
}
