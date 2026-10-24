export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .tw-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .tw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .tw-eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .tw-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .tw-about-section {
          padding: 64px 0;
          background: #fff;
          position: relative;
        }

        .tw-about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .tw-about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .tw-about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .tw-stat-pill {
          position: absolute;
          bottom: 28px;
          left: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .tw-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .tw-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .tw-benefit-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(202,18,84,0.12);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .tw-benefit-tag:hover {
          border-color: rgba(202,18,84,0.35);
          box-shadow: 0 4px 16px rgba(202,18,84,0.1);
        }

        /* ── Stats Banner ── */
        .tw-stats-section {
          padding: 64px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .tw-stats-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(202,18,84,0.02) 0%, transparent 70%);
          pointer-events: none;
        }
        .tw-stat-card {
          padding: 48px 32px;
          background: #fff;
          border-radius: 32px;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(59,63,105,0.04);
        }
        .tw-stat-card:hover {
          border-color: #ca1254;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(202,18,84,0.08);
        }
        .tw-stat-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: rgba(202, 18, 84, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #ca1254;
          transition: all 0.3s ease;
        }
        .tw-stat-card:hover .tw-stat-icon-wrap {
          transform: scale(1.1) rotate(5deg);
          background: #ca1254;
          color: #fff;
        }
        .tw-stat-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
          margin-bottom: 10px;
        }
        .tw-stat-desc {
          font-size: 11px;
          color: #3b3f69;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
        }

        /* ── Steps Section ── */
        .tw-steps-section {
          padding: 64px 0;
          background: #f5f6fa;
          position: relative;
          overflow: hidden;
        }
        .tw-steps-section::before {
          content: 'WHITENING';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 160px;
          font-weight: 700;
          color: rgba(202,18,84,0.04);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .tw-step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .tw-step-card:hover {
          box-shadow: 0 20px 48px rgba(202,18,84,0.14);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-4px);
        }
        .tw-step-num-bg {
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          font-weight: 700;
          line-height: 1;
          color: #ca1254;
          opacity: 0.06;
          pointer-events: none;
          user-select: none;
        }
        .tw-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 0.03em;
        }
        .tw-step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Suitability cards ── */
        .tw-suit-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .tw-suit-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(202,18,84,0.2) 30%, rgba(202,18,84,0.2) 70%, transparent);
        }
        .tw-suit-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tw-suit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tw-suit-card:hover {
          box-shadow: 0 16px 48px rgba(202,18,84,0.12);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .tw-suit-card:hover::before {
          opacity: 1;
        }
        .tw-suit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .tw-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .tw-stat-pill { left: 12px; bottom: 16px; }
          .tw-steps-section::before { font-size: 60px; }
          .tw-stat-big { font-size: 52px; }
        }
      `
