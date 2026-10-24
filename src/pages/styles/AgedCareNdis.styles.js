export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ac-page * { box-sizing: border-box; }

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
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }
        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── About ── */
        .about-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 480px; height: 480px;
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
        .stat-pill {
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
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }
        .stat-card {
          padding: 20px 24px;
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #f0f0f5;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          border-color: rgba(202,18,84,0.2);
          box-shadow: 0 4px 20px rgba(202,18,84,0.07);
        }

        /* ── Services & Benefits ── */
        .sb-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .sb-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .service-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: #fff;
          border: 1.5px solid #f0f0f5;
          font-size: 14px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .service-row:hover {
          border-color: rgba(202,18,84,0.25);
          background: #fdf0f5;
          transform: translateX(4px);
        }
        .service-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(59,63,105,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .service-row:hover .service-icon-wrap {
          background: rgba(202,18,84,0.12);
        }
        .benefit-card {
          padding: 24px;
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #f0f0f5;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .benefit-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .benefit-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Process ── */
        .process-section {
          padding: 96px 0;
          background: #3b3f69;
          position: relative;
          overflow: hidden;
        }
        .process-section::before {
          content: 'CARE';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 260px;
          font-weight: 700;
          color: rgba(255,255,255,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.15em;
        }
        .process-section::after {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .step-card {
          padding: 36px 30px;
          background: rgba(255,255,255,0.05);
          border-radius: 24px;
          border: 1.5px solid rgba(255,255,255,0.08);
          position: relative;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .step-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(202,18,84,0.4);
          transform: translateY(-4px);
        }
        .step-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .step-card:hover::before { opacity: 1; }
        .step-bg-num {
          position: absolute;
          bottom: -12px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px;
          font-weight: 700;
          line-height: 1;
          color: rgba(255,255,255,0.04);
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
        }

        /* ── Care Benefits ── */
        .care-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
        }
        .care-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e0e1ec 30%, #e0e1ec 70%, transparent);
        }
        .care-card {
          padding: 40px 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .care-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .care-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .care-card:hover::before { opacity: 1; }
        .care-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
      `
