/* ===== Tokens ===== */
:root{
  --bg:            #F4EEE3;
  --bg-warm:       #EADFCB;
  --ink:           #211A15;
  --ink-soft:      #5B4E43;
  --suede-tan:     #B08968;
  --suede-rose:    #8C5B53;
  --suede-shadow:  #1C1613;
  --surface-dark:  #2B221D;
  --cream:         #F1E7D8;
  --signal:        #C7FF5B;
  --signal-dim:    #9CD941;
  --line:          rgba(33,26,21,0.14);
  --line-dark:     rgba(241,231,216,0.14);

  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  --radius: 14px;
}

*{ box-sizing:border-box; margin:0; padding:0; }
html{ scroll-behavior:smooth; }
body{
  background:var(--bg);
  color:var(--ink);
  font-family:var(--font-body);
  line-height:1.5;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

a{ color:inherit; text-decoration:none; }
ul,ol{ list-style:none; }
img{ max-width:100%; display:block; }

@media (prefers-reduced-motion: reduce){
  *{ animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important; scroll-behavior:auto !important; }
}

/* subtle suede grain overlay */
.grain{
  position:fixed; inset:0; pointer-events:none; z-index:999; opacity:0.05; mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ===== Buttons ===== */
.btn{
  display:inline-flex; align-items:center; gap:6px;
  padding:10px 18px; border-radius:999px;
  font-family:var(--font-display); font-weight:600; font-size:0.9rem;
  border:1px solid transparent; transition:transform .15s ease, background .2s ease, border-color .2s ease;
  white-space:nowrap;
}
.btn--solid{ background:var(--suede-shadow); color:var(--cream); }
.btn--solid:hover{ transform:translateY(-2px); background:var(--suede-rose); }
.btn--ghost{ background:transparent; color:var(--ink); border-color:var(--line); }
.btn--ghost:hover{ border-color:var(--ink); }
.btn--outline{ background:transparent; color:var(--ink); border-color:var(--suede-shadow); }
.btn--outline:hover{ transform:translateY(-2px); background:var(--suede-shadow); color:var(--cream); }
.btn--lg{ padding:13px 24px; font-size:0.95rem; }

/* ===== Nav ===== */
.nav{
  position:sticky; top:0; z-index:100;
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 5vw;
  background:rgba(244,238,227,0.85);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
.nav__brand{ display:flex; align-items:center; gap:8px; font-family:var(--font-display); font-weight:700; font-size:1.15rem; letter-spacing:0.02em; }
.nav__mark{
  width:30px; height:30px; border-radius:8px; object-fit:cover;
  box-shadow:0 0 0 1px rgba(33,26,21,0.1);
}
.nav__links{ display:flex; gap:28px; font-size:0.92rem; color:var(--ink-soft); }
.nav__links a:hover{ color:var(--ink); }
.nav__cta{ display:flex; gap:10px; }

/* ===== Eyebrow / dots ===== */
.eyebrow{
  font-family:var(--font-mono); font-size:0.78rem; letter-spacing:0.14em; text-transform:uppercase;
  color:var(--cream); display:flex; align-items:center; gap:8px; margin-bottom:14px;
}
.eyebrow--dark{ color:var(--suede-rose); }
.dot{ width:7px; height:7px; border-radius:50%; background:var(--ink-soft); display:inline-block; }
.dot--live{ background:var(--signal); box-shadow:0 0 0 0 rgba(199,255,91,0.6); animation:pulse 2s infinite; }
@keyframes pulse{
  0%{ box-shadow:0 0 0 0 rgba(199,255,91,0.55); }
  70%{ box-shadow:0 0 0 8px rgba(199,255,91,0); }
  100%{ box-shadow:0 0 0 0 rgba(199,255,91,0); }
}

/* ===== Hero ===== */
.hero{
  display:grid; grid-template-columns:1.1fr 0.9fr; gap:48px;
  padding:72px 5vw 60px; align-items:center;
}
.hero h1{
  font-family:var(--font-display); font-weight:700;
  font-size:clamp(2.4rem, 4.6vw, 4.1rem); line-height:1.04; letter-spacing:-0.01em;
  color:var(--ink); margin-bottom:20px;
}
.hero .eyebrow{ color:var(--suede-rose); }
.hero__sub{ max-width:46ch; color:var(--ink-soft); font-size:1.08rem; margin-bottom:30px; }
.hero__actions{ display:flex; gap:14px; margin-bottom:44px; flex-wrap:wrap; }
.hero__stats{ display:flex; gap:36px; }
.hero__stats div{ display:flex; flex-direction:column; }
.hero__stats strong{ font-family:var(--font-display); font-size:1.5rem; }
.hero__stats span{ font-size:0.8rem; color:var(--ink-soft); }

.hero__card{ display:flex; flex-direction:column; gap:18px; }

/* ID card — the "stitched suede passport" signature element */
.idcard{
  position:relative;
  background:linear-gradient(155deg, var(--suede-tan), var(--suede-rose) 80%);
  border-radius:var(--radius);
  padding:22px 22px 26px;
  color:var(--cream);
  box-shadow:0 18px 40px -18px rgba(28,22,19,0.5);
}
.idcard::before{
  content:""; position:absolute; inset:8px; border:1.5px dashed rgba(241,231,216,0.35); border-radius:10px; pointer-events:none;
}
.idcard__top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
.idcard__label{ font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.14em; opacity:0.85; }
.idcard__name{ font-family:var(--font-display); font-weight:700; font-size:1.6rem; margin-bottom:14px; }
.idcard__row{ display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.78rem; padding:5px 0; border-top:1px solid rgba(241,231,216,0.2); }
.idcard__bars{ display:flex; gap:6px; margin-top:16px; }
.bar{ flex:1; height:5px; background:rgba(241,231,216,0.25); border-radius:4px; overflow:hidden; }
.bar span{ display:block; height:100%; width:var(--v); background:var(--signal); border-radius:4px; }

/* Terminal */
.terminal{
  background:var(--suede-shadow); border-radius:var(--radius); overflow:hidden;
  box-shadow:0 18px 40px -18px rgba(28,22,19,0.5);
  border:1px solid rgba(241,231,216,0.08);
}
.terminal__bar{ display:flex; align-items:center; gap:6px; padding:10px 14px; background:var(--surface-dark); }
.terminal__dot{ width:9px; height:9px; border-radius:50%; background:rgba(241,231,216,0.25); }
.terminal__title{ margin-left:8px; font-family:var(--font-mono); font-size:0.72rem; color:var(--ink-soft); }
.terminal__body{
  font-family:var(--font-mono); font-size:0.8rem; color:var(--signal);
  padding:16px 18px; min-height:150px; max-height:190px; overflow:hidden;
}
.terminal__body div{ margin-bottom:6px; opacity:0; animation:fadein .4s forwards; white-space:pre-wrap; }
.terminal__body span.t{ color:var(--ink-soft); margin-right:8px; }
@keyframes fadein{ to{ opacity:1; } }
.terminal--full .terminal__body{ min-height:260px; max-height:320px; overflow-y:auto; }

/* Marquee */
.marquee{ border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--bg-warm); overflow:hidden; }
.marquee__track{
  display:flex; gap:14px; white-space:nowrap; font-family:var(--font-mono); font-size:0.82rem; letter-spacing:0.08em;
  padding:12px 0; color:var(--ink-soft);
  animation:scroll 26s linear infinite;
}
@keyframes scroll{ from{ transform:translateX(0); } to{ transform:translateX(-50%); } }

/* ===== Sections ===== */
.section{ padding:88px 5vw; }
.section--dark{ background:var(--suede-shadow); color:var(--cream); }
.section__title{
  font-family:var(--font-display); font-weight:700; font-size:clamp(1.8rem,3.2vw,2.6rem);
  margin-bottom:20px; letter-spacing:-0.01em; max-width:20ch;
}
.section__title--light{ color:var(--cream); }
.section__lede{ max-width:60ch; color:var(--ink-soft); font-size:1.05rem; margin-bottom:20px; }
.section__lede--light{ color:rgba(241,231,216,0.7); }

.grid{ display:grid; gap:22px; margin-top:32px; }
.grid--4{ grid-template-columns:repeat(4, 1fr); }

.card{
  background:var(--bg-warm); border:1px solid var(--line); border-radius:var(--radius);
  padding:26px 22px; transition:transform .2s ease, box-shadow .2s ease;
}
.card:hover{ transform:translateY(-4px); box-shadow:0 16px 30px -20px rgba(33,26,21,0.35); }
.card__icon{ font-size:1.4rem; color:var(--suede-rose); margin-bottom:14px; }
.card h3{ font-family:var(--font-display); font-size:1.15rem; margin-bottom:8px; }
.card p{ color:var(--ink-soft); font-size:0.92rem; }

/* Pipeline (real sequential process -> numbering is meaningful) */
.pipeline{
  display:grid; grid-template-columns:repeat(4,1fr); gap:22px; margin-top:36px; counter-reset:step;
}
.pipeline__step{
  border-top:2px solid var(--suede-tan); padding-top:16px;
}
.pipeline__num{ font-family:var(--font-mono); color:var(--suede-tan); font-size:0.85rem; }
.pipeline__step h3{ font-family:var(--font-display); font-size:1.2rem; margin:8px 0; }
.pipeline__step p{ color:rgba(241,231,216,0.65); font-size:0.92rem; }

/* Token panel */
.tokenpanel{
  margin-top:28px; background:var(--suede-shadow); color:var(--cream); border-radius:var(--radius);
  padding:30px 28px; display:flex; flex-direction:column; gap:26px;
}
.tokenpanel__row{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.tokenpanel__row > div{ display:flex; flex-direction:column; gap:4px; }
.tokenpanel__label{ font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.1em; color:rgba(241,231,216,0.55); text-transform:uppercase; }
.tokenpanel__value{ font-family:var(--font-display); font-weight:600; font-size:1.15rem; }
.tokenpanel__value--mono{ font-family:var(--font-mono); font-size:0.95rem; color:var(--suede-tan); }

/* Footer */
.footer{ background:var(--suede-shadow); color:rgba(241,231,216,0.7); padding:50px 5vw 30px; }
.footer__top{ display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; border-bottom:1px solid var(--line-dark); padding-bottom:26px; margin-bottom:20px; }
.footer__brand{ display:flex; align-items:center; gap:8px; font-family:var(--font-display); font-weight:700; color:var(--cream); }
.footer__links{ display:flex; gap:22px; font-size:0.88rem; margin-bottom:18px; flex-wrap:wrap; }
.footer__links a:hover{ color:var(--cream); }
.footer__legal{ font-size:0.76rem; color:rgba(241,231,216,0.4); }

/* ===== Responsive ===== */
@media (max-width: 980px){
  .hero{ grid-template-columns:1fr; padding-top:40px; }
  .grid--4{ grid-template-columns:repeat(2,1fr); }
  .pipeline{ grid-template-columns:repeat(2,1fr); }
  .tokenpanel__row{ grid-template-columns:repeat(2,1fr); }
  .nav__links{ display:none; }
}
@media (max-width: 560px){
  .grid--4{ grid-template-columns:1fr; }
  .pipeline{ grid-template-columns:1fr; }
  .tokenpanel__row{ grid-template-columns:1fr; }
  .hero__stats{ flex-wrap:wrap; row-gap:16px; }
  .nav__cta .btn--ghost{ display:none; }
}
