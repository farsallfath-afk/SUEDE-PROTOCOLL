// SUEDE — simulated live agent feed.
// Replace this with a real fetch() to your agent's log endpoint / websocket
// once the agent is deployed. This just demonstrates the intended UX.

const LOG_LINES = [
  "watching: ETH/USDC 5m candle closed +1.2%",
  "reasoning: conviction 0.71 on momentum continuation",
  "checking: risk budget — 3.4% of treasury available",
  "action: submitted swap 0.8 ETH -> USDC",
  "settled: tx 0x7ac3...e41f confirmed in block 21938441",
  "memory: updated position log (12 open, 3 closed today)",
  "watching: mentions of $SUEDE up 340% in last hour",
  "reasoning: conviction 0.44 — below action threshold, holding",
  "checking: gas price stable at 8 gwei",
  "action: no trade — waiting for confirmation signal",
  "watching: new liquidity pool detected on Base",
  "reasoning: conviction 0.63 on pool depth vs risk",
  "settled: treasury balance now 142.7 ETH equiv",
  "memory: strategy weight for momentum nudged +0.03",
];

function timestamp(){
  const d = new Date();
  return d.toTimeString().slice(0,8);
}

function pushLine(container, text, max){
  const line = document.createElement("div");
  line.innerHTML = `<span class="t">[${timestamp()}]</span>${text}`;
  container.appendChild(line);
  while (container.children.length > max) {
    container.removeChild(container.firstChild);
  }
  container.scrollTop = container.scrollHeight;
}

function startFeed(elId, opts = {}) {
  const el = document.getElementById(elId);
  if (!el) return;
  const max = opts.max || 6;
  const interval = opts.interval || 2600;

  // seed a few lines immediately so the panel isn't empty on load
  for (let i = 0; i < Math.min(4, max); i++) {
    pushLine(el, LOG_LINES[(i) % LOG_LINES.length], max);
  }

  let i = 4;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return; // keep the static seeded lines only

  setInterval(() => {
    pushLine(el, LOG_LINES[i % LOG_LINES.length], max);
    i++;
  }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
  startFeed("terminalBody", { max: 5, interval: 3200 });
  startFeed("terminalBodyFull", { max: 9, interval: 2200 });
});
