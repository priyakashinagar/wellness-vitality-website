export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        :root {
          --rose:        #ca1254;
          --rose-mid:    #e84d8a;
          --rose-100:    #fce8f1;   /* very light rose tint */
          --rose-50:     #fef5f9;   /* near-white rose */
          --rose-border: rgba(202,18,84,0.14);
          --white:       #ffffff;
          --gray-50:     #fafafa;
          --gray-100:    #f5f5f7;
          --gray-border: #ebebeb;
          --gray-text:   #6b7280;
          --gray-muted:  #9ca3af;
          --ink:         #111111;
        }

        .cdp * { box-sizing: border-box; }

        .cdp-wrap {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── shared eyebrow ── */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 14px;
        }
        .eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--rose);
          opacity: 0.4;
        }

        /* ── shared section title ── */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: var(--ink);
          margin: 0 0 20px;
        }



        /* ═══════════════════════════════
           SECTION 2 — FEATURED PACKAGES
        ═══════════════════════════════ */
        .pkg-section {
          padding: 64px 0;
          background: var(--gray-50);
          position: relative;
        }
        .pkg-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        .pkg-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .pkg-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .pkg-grid { grid-template-columns: 1fr; } }

        .pkg-card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 12px 48px rgba(202,18,84,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--rose);
          transition: height 0.3s;
        }
        .pkg-card:hover {
          box-shadow: 0 20px 50px rgba(202,18,84,0.08);
          transform: translateY(-5px);
        }
        .pkg-card:hover::before { height: 3px; }

        .pkg-icon {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: var(--rose);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 22px;
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .pkg-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 14px;
          line-height: 1.2;
        }
        .pkg-desc {
          font-size: 14px;
          color: #7d828f;
          font-weight: 300;
          line-height: 1.6;
          margin: 0 0 32px;
          flex: 1;
        }
        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.04);
        }
        .pkg-price-label {
          font-size: 10px;
          font-weight: 700;
          color: #a3a8b5;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          display: block;
          margin-bottom: 6px;
        }
        .pkg-price {
          font-size: 24px;
          font-weight: 700;
          color: var(--rose);
        }
        .pkg-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--rose);
          background: var(--rose-100);
          padding: 6px 12px;
          border-radius: 999px;
        }

        /* ═══════════════════════════════
           SECTION 3 — ADD-ONS
        ═══════════════════════════════ */
        .addons-section {
          padding: 64px 0;
          background: var(--white);
          position: relative;
        }
        .addons-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        .addons-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 780px) {
          .addons-layout { grid-template-columns: 1fr; gap: 40px; }
        }

        .addons-intro-text {
          font-size: 14.5px;
          color: var(--gray-text);
          font-weight: 300;
          line-height: 1.7;
          margin: 0;
        }

        .addons-list { display: flex; flex-direction: column; gap: 4px; }

        .addon-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 22px;
          background: var(--gray-100);
          border-radius: 12px;
          border: 1.5px solid transparent;
          transition: all 0.25s ease;
        }
        .addon-row:hover {
          background: var(--rose-50);
          border-color: var(--rose-border);
          transform: translateX(4px);
        }
        .addon-left { display: flex; align-items: center; gap: 14px; }
        .addon-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--rose-100);
          border: 2px solid var(--rose);
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .addon-row:hover .addon-dot { background: var(--rose); }
        .addon-name { font-size: 14px; font-weight: 500; color: var(--ink); }
        .addon-price { font-size: 14.5px; font-weight: 700; color: var(--rose); }

        /* ═══════════════════════════════
           SECTION 4 — CTA  (LIGHT)
        ═══════════════════════════════ */
        .cta-section {
          padding: 64px 0;
          background: var(--gray-50);
          position: relative;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        /* Light CTA box — rose border + very soft rose fill */
        .cta-box {
          background: var(--white);
          border: 1.5px solid var(--rose-border);
          border-radius: 28px;
          padding: 72px 80px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 60px;
          box-shadow: 0 20px 64px rgba(202,18,84,0.07);
        }
        @media (max-width: 780px) {
          .cta-box { grid-template-columns: 1fr; padding: 52px 40px; gap: 40px; }
        }

        /* soft rose glow blobs — very subtle */
        .cta-box::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(202,18,84,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-box::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -60px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(232,77,138,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 18px;
          opacity: 0.8;
        }
        .cta-eyebrow-line {
          display: block;
          width: 24px; height: 1px;
          background: var(--rose);
          opacity: 0.4;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 50px);
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 16px;
          line-height: 1.12;
          position: relative;
          z-index: 1;
        }
        .cta-sub {
          font-size: 15.5px;
          color: var(--gray-text);
          font-weight: 300;
          line-height: 1.65;
          max-width: 480px;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 210px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        /* solid rose primary */
        .cta-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 28px;
          background: var(--rose);
          color: #fff;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .cta-btn-primary:hover {
          background: var(--rose-mid);
          box-shadow: 0 10px 32px rgba(202,18,84,0.28);
        }

        /* light rose outline secondary */
        .cta-btn-outline {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 28px;
          background: transparent;
          color: var(--rose);
          border: 1.5px solid var(--rose-border);
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .cta-btn-outline:hover {
          background: var(--rose-50);
          border-color: rgba(202,18,84,0.3);
          color: var(--rose);
        }
      `
