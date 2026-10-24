export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ch-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .ch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .ch-eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .ch-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .ch-about-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .ch-about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .ch-stat-pill {
          position: absolute;
          bottom: 28px;
          right: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .ch-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .ch-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .ch-benefit-tag {
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
        .ch-benefit-tag:hover {
          border-color: rgba(202,18,84,0.35);
          box-shadow: 0 4px 16px rgba(202,18,84,0.1);
        }

        /* ── Services Banner (navy) ── */
        .ch-services-section {
          padding: 80px 0;
          background: #3b3f69;
          position: relative;
          overflow: hidden;
        }
        .ch-services-section::after {
          content: '✦';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 400px;
          color: rgba(255,255,255,0.015);
          pointer-events: none;
          line-height: 1;
        }
        .ch-service-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          border: 1.5px solid transparent;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ch-service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ca1254, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ch-service-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-3px);
        }
        .ch-service-card:hover::before {
          opacity: 1;
        }
        .ch-service-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
          letter-spacing: 0.03em;
        }

        /* ── Steps Section ── */
        .ch-steps-section {
          padding: 96px 0;
          background: #f5f6fa;
          position: relative;
          overflow: hidden;
        }
        .ch-steps-section::before {
          content: 'CORPORATE';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 140px;
          font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .ch-step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .ch-step-card:hover {
          box-shadow: 0 20px 48px rgba(202,18,84,0.14);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-4px);
        }
        .ch-step-num-bg {
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
        .ch-step-badge {
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
        .ch-step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Org Benefits ── */
        .ch-benefits-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .ch-benefits-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .ch-benefit-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          border: 1.5px solid #f0f0f5;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
        }
        .ch-benefit-card:hover {
          box-shadow: 0 16px 40px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-3px);
        }
        .ch-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        /* ── Partner cards ── */
        .ch-partner-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .ch-partner-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .ch-partner-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ch-partner-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ch-partner-card:hover {
          box-shadow: 0 16px 48px rgba(202,18,84,0.12);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .ch-partner-card:hover::before {
          opacity: 1;
        }
        .ch-partner-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .ch-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .ch-stat-pill { right: 12px; bottom: 16px; }
          .ch-steps-section::before { font-size: 60px; }
        }
      `
