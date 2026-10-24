export const css0 = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .iv-page * { box-sizing: border-box; }

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
          margin: 0 0 20px;
        }
        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }

        /* ── About ── */
        .about-section {
          padding: 48px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .about-section { padding: 96px 0; }
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
          position: absolute; inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
          pointer-events: none;
        }
        .stat-pill {
          position: absolute;
          bottom: 16px; left: 12px;
          background: #fff;
          border-radius: 14px;
          padding: 10px 14px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex; align-items: center; gap: 10px;
          z-index: 10;
        }
        @media (min-width: 768px) {
          .stat-pill {
            bottom: 28px; left: -20px;
            padding: 14px 20px;
            gap: 12px;
          }
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; font-weight: 600; color: #ca1254; line-height: 1;
        }
        .stat-label {
          font-size: 11px; color: #3b3f69; font-weight: 600;
          line-height: 1.4; max-width: 80px;
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

        /* ── Marquee / Nutrients ── */
        .nutrients-section {
          padding: 64px 0 96px 0;
          background: #fff;
          overflow: hidden;
          position: relative;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 100s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 100s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        .nutrient-card {
          flex-shrink: 0;
          width: 300px;
          background: #fff;
          border-radius: 18px;
          border: 1.5px solid #f0f0f5;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .nutrient-card:hover {
          box-shadow: 0 8px 28px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.2);
        }

        /* ── Treatments ── */
        .treatments-section {
          padding: 96px 0 48px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .treatments-section::before {
          content: 'IV';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 400px; font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .treatment-card {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1.5px solid #f0f0f5;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .treatment-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .treatment-card:hover {
          box-shadow: 0 20px 56px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .treatment-card:hover::before { opacity: 1; }

        /* ── Steps ── */
        .steps-section {
          padding: 64px 0 96px 0;
          background: #fff;
          position: relative;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 30px;
          border: 1.5px solid #f0f0f5;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-bg-num {
          position: absolute; bottom: -10px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px; font-weight: 700; line-height: 1;
          color: #ca1254; opacity: 0.05;
          pointer-events: none; user-select: none;
        }
        .step-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff; font-size: 12px; font-weight: 700;
          margin-bottom: 20px;
        }

        /* ── Benefits Atmospheric Redesign ── */
        .benefits-section {
          padding: 64px 0;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2f8 100%);
          position: relative; overflow: hidden;
        }
        @media (min-width: 768px) {
          .benefits-section { padding: 120px 0; }
        }
        .benefits-section::before {
          content: '';
          position: absolute; top: -100px; right: -5%;
          width: 50vw; height: 50vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,63,105,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .benefits-section::after {
          content: '';
          position: absolute; bottom: -100px; left: -5%;
          width: 40vw; height: 40vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .benefit-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 0;
          border-bottom: 2px solid rgba(59,63,105,0.06);
        }
        .benefit-row:last-child { border-bottom: none; }
        .benefit-check {
          width: 24px; height: 24px; border-radius: 50%;
          background: #ca1254;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          margin-top: 2px;
          box-shadow: 0 4px 12px rgba(202,18,84,0.2);
        }
        .stat-block {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 24px 16px;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          box-shadow: 0 10px 30px -10px rgba(59, 63, 105, 0.08);
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .stat-block { padding: 40px 24px; border-radius: 24px; }
        }
        .stat-block:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px -12px rgba(59, 63, 105, 0.12);
          border-color: rgba(202, 18, 84, 0.25);
          background: rgba(255, 255, 255, 0.9);
        }
        .stat-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          background: #fff;
          border: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          color: #3b3f69;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .stat-block:hover .stat-icon-wrap {
          background: #ca1254;
          color: #fff;
          border-color: #ca1254;
          transform: rotate(5deg);
        }

        /* ── Suitability ── */
        .suitability-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
        }
        .suit-card {
          padding: 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          transition: all 0.3s;
          position: relative; overflow: hidden;
        }
        .suit-card::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .suit-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .suit-card:hover::before { opacity: 1; }
      `
