export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ph-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .about-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -80px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .about-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
          pointer-events: none;
        }
        .about-stat-pill {
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
        .about-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .about-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .benefit-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .benefit-tag:hover {
          border-color: rgba(202,18,84,0.3);
          box-shadow: 0 4px 16px rgba(202,18,84,0.07);
        }

        /* ── Services ── */
        .services-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .service-card {
          background: #fff;
          border: 1.5px solid #f0f0f5;
          border-radius: 24px;
          padding: 40px;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .service-card:hover {
          box-shadow: 0 20px 56px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-3px);
        }
        .service-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .service-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          font-size: 14px;
          color: #555;
          font-weight: 400;
          border-bottom: 1px solid #f5f5f7;
        }
        .service-list-item:last-child { border-bottom: none; }
        .service-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Steps ── */
        .steps-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .steps-section::before {
          content: 'WELLNESS';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 200px;
          font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-num-bg {
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
        .step-badge {
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
        .step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Focus cards ── */
        .focus-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .focus-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .focus-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid #f0f0f5;
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .focus-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .focus-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .focus-card:hover::before {
          opacity: 1;
        }
        .focus-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .about-stat-pill { left: 12px; bottom: 16px; }
          .steps-section::before { font-size: 80px; }
        }
      `
