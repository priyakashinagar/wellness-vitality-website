export const css0 = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

      .services-wrap {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* ── HEADER ── */
      .services-header {
        text-align: center;
        margin-bottom: 56px;
      }
      .services-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: #ca1254;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .services-eyebrow::before,
      .services-eyebrow::after {
        content: '';
        display: block;
        width: 28px;
        height: 1.5px;
        background: #ca1254;
        opacity: 0.5;
      }
      .services-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(32px, 4vw, 48px);
        color: #3b3f69;
        line-height: 1.15;
        margin: 0;
        font-weight: 400;
      }
      .services-title span {
        color: #ca1254;
      }

      /* ── GRID ── */
      .services-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2px;
        background: #f0f0f5;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 56px;
        border: 1.5px solid #e6e7f0;
      }
      @media (max-width: 640px) {
        .services-grid { grid-template-columns: 1fr; }
      }

      .service-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 22px 24px;
        background: #fff;
        transition: background 0.18s;
        cursor: default;
      }
      .service-item:hover {
        background: #fdf0f5;
      }
      .service-num {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #ca1254;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
      }
      .service-text {
        font-size: 14.5px;
        color: #3b3f69;
        font-weight: 500;
        line-height: 1.5;
        padding-top: 5px;
      }

      /* ── BENEFITS ── */
      .benefits-strip {
        background: #3b3f69;
        border-radius: 20px;
        padding: 48px 40px 52px;
        position: relative;
        overflow: hidden;
      }
      .benefits-strip::before {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 280px;
        height: 280px;
        background: radial-gradient(circle, rgba(202,18,84,0.18) 0%, transparent 70%);
        pointer-events: none;
      }
      .benefits-strip::after {
        content: '';
        position: absolute;
        bottom: -40px;
        left: -40px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(202,18,84,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      .benefits-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .benefits-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: #ca1254;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .benefits-eyebrow::before,
      .benefits-eyebrow::after {
        content: '';
        display: block;
        width: 20px;
        height: 1.5px;
        background: #ca1254;
        opacity: 0.6;
      }
      .benefits-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(22px, 3vw, 30px);
        color: #fff;
        margin: 0;
        font-weight: 400;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        position: relative;
        z-index: 1;
      }
      @media (max-width: 900px) {
        .benefits-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 0; }
      }
      @media (max-width: 480px) {
        .benefits-grid { grid-template-columns: 1fr; gap: 28px; }
        .benefits-strip { padding: 36px 24px 40px; }
      }

      .benefit-item {
        text-align: center;
        padding: 0 20px;
        border-right: 1px solid rgba(255,255,255,0.1);
      }
      .benefit-item:last-child {
        border-right: none;
      }
      @media (max-width: 900px) {
        .benefit-item { border-right: none; }
      }

      .benefit-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(202,18,84,0.18);
        border: 1.5px solid rgba(202,18,84,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 14px;
      }
      .benefit-icon svg {
        width: 18px;
        height: 18px;
        stroke: #ca1254;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .benefit-title {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 6px;
        letter-spacing: 0.01em;
      }
      .benefit-desc {
        color: rgba(255,255,255,0.65);
        font-size: 12.5px;
        line-height: 1.6;
        font-weight: 400;
      }
    `
