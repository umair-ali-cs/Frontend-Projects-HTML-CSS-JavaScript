// ─── STATE ───────────────────────────────────────────────
const COLORS = [
  "#0d9488",
  "#b45309",
  "#4f46e5",
  "#be123c",
  "#059669",
  "#7c3aed",
  "#0891b2",
  "#ca8a04",
];

let equations = [];
let eqIdCounter = 0;

// View state
let viewX = 0,
  viewY = 0;
let pixelsPerUnit = 60;
const MIN_PPU = 5,
  MAX_PPU = 400;

// Interaction
let isDragging = false,
  dragStartX,
  dragStartY,
  dragStartVX,
  dragStartVY;
let showCrosshair = true;
let showDerivatives = false;
let mouseCanvasX = 0,
  mouseCanvasY = 0;

// Canvas
const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");
const wrap = document.getElementById("canvas-wrap");

// ─── INIT ─────────────────────────────────────────────────
function openApp() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").style.display = "flex";
  resizeCanvas();
  addEquation(); // start with one empty row
  draw();
}

function resizeCanvas() {
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight;
  draw();
}
window.addEventListener("resize", resizeCanvas);

// ─── EQUATION MANAGEMENT ──────────────────────────────────
function addEquation() {
  if (equations.length >= 10) {
    showToast("Maximum 10 equations");
    return;
  }
  const id = eqIdCounter++;
  const color = COLORS[id % COLORS.length];
  equations.push({
    id,
    expr: "",
    color,
    visible: false,
    fn: null,
    derivFn: null,
    error: false,
  });
  renderList();
}

function renderList() {
  const list = document.getElementById("equations-list");
  list.innerHTML = "";

  if (equations.length === 0) {
    const empty = document.createElement("div");
    empty.style.cssText =
      "padding:32px 12px;text-align:center;color:var(--muted);font-size:13px;font-family:'Inter',sans-serif;line-height:1.8;";
    empty.innerHTML =
      'No equations yet<br><strong style="color:var(--text-secondary)">+</strong> to add one';
    list.appendChild(empty);
    return;
  }

  equations.forEach((eq) => {
    const row = document.createElement("div");
    row.className =
      "eq-row" + (eq.visible ? " active" : "") + (eq.error ? " error" : "");
    row.style.setProperty("--eq-color", eq.color);

    const tog = document.createElement("button");
    tog.className = "eq-toggle" + (eq.visible ? " active" : "");
    tog.textContent = eq.visible ? "Hide" : "Show";
    tog.onclick = () => toggleEquation(eq.id);

    const inp = document.createElement("input");
    inp.className =
      "eq-input" + (eq.visible ? " plotted" : "") + (eq.error ? " error" : "");
    inp.style.setProperty("--eq-color", eq.color);
    inp.placeholder = "e.g. sin(x), x^2+1";
    inp.value = eq.expr;
    inp.spellcheck = false;
    inp.oninput = (e) => {
      eq.expr = e.target.value;
      eq.error = false;
    };
    inp.onkeydown = (e) => {
      if (e.key === "Enter") toggleEquation(eq.id);
    };

    const del = document.createElement("button");
    del.className = "eq-delete";
    del.innerHTML = "&times;";
    del.onclick = () => deleteEquation(eq.id);

    row.append(tog, inp, del);
    list.appendChild(row);
  });
}

function toggleEquation(id) {
  const eq = equations.find((e) => e.id === id);
  if (!eq) return;

  if (eq.visible) {
    eq.visible = false;
    eq.fn = null;
    eq.derivFn = null;
  } else {
    const raw = preprocessExpr(eq.expr.trim());
    if (!raw) {
      showToast("Enter an expression first");
      return;
    }
    try {
      const compiled = math.compile(raw);
      compiled.evaluate({ x: 0 }); // test it

      eq.fn = (x) => {
        try {
          const v = compiled.evaluate({ x });
          return typeof v === "number" ? v : NaN;
        } catch {
          return NaN;
        }
      };

      // numerical derivative
      eq.derivFn = (x) => {
        const h = 1e-7;
        return (eq.fn(x + h) - eq.fn(x - h)) / (2 * h);
      };
      eq.visible = true;
      eq.error = false;
    } catch (e) {
      eq.error = true;
      showToast("Invalid expression: " + eq.expr);
    }
  }
  renderList();
  draw();
}

function deleteEquation(id) {
  equations = equations.filter((e) => e.id !== id);
  renderList();
  draw();
}

function clearAll() {
  equations = [];
  renderList();
  draw();
}

// ─── EXPRESSION PREPROCESSING ─────────────────────────────
function preprocessExpr(expr) {
  if (!expr) return "";
  let e = expr;

  // Implicit multiplication: 2x → 2*x, 2( → 2*(, )x → )*x, )2 → )*2
  e = e.replace(/(\d)(x)/g, "$1*$2"); // Fixed: added '*'
  e = e.replace(/(\d)\(/g, "$1*("); // Fixed: escaped '('
  e = e.replace(/\)(x|\d)/g, ")*$1"); // Fixed: escaped ')'

  // Trig/Function shortcuts: sinx → sin(x)
  e = e.replace(
    /\b(sin|cos|tan|cot|sec|csc|asin|acos|atan|sinh|cosh|tanh|log|ln|sqrt|abs)x\b/g,
    "$1(x)",
  );

  // Reciprocals: cot( → 1/tan(
  e = e.replace(/\bcot\(/g, "1/tan("); // Fixed: escaped '('
  e = e.replace(/\bsec\(/g, "1/cos("); // Fixed: escaped '('
  e = e.replace(/\bcsc\(/g, "1/sin("); // Fixed: escaped '('

  // ln → log
  e = e.replace(/\bln\(/g, "log("); // Fixed: escaped '('

  // Constants
  e = e.replace(/\bpi\b/g, "PI");

  return e;
}

// ─── COLOR HELPER ──────────────────────────────────────────
function lightenColor(hex, amount = 0.45) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.round(r + (255 - r) * amount);
  const lg = Math.round(g + (255 - g) * amount);
  const lb = Math.round(b + (255 - b) * amount);
  return `rgb(${lr}, ${lg}, ${lb})`;
}

// ─── DRAWING (Updated for Light Theme) ────────────────────
function draw() {
  const W = canvas.width,
    H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Background (Clean White)
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  drawGrid(W, H);
  drawAxes(W, H);

  // Plot equations
  equations.forEach((eq) => {
    if (eq.visible && eq.fn) {
      plotFn(eq.fn, eq.color, 2.5);
      if (showDerivatives && eq.derivFn) {
        plotFn(eq.derivFn, lightenColor(eq.color, 0.5), 1.4, [6, 4]);
      }
    }
  });

  if (showCrosshair) drawCrosshair(W, H);
  updateTooltip(W, H);
  document.getElementById("zoom-level").textContent =
    `zoom: ${(pixelsPerUnit / 60).toFixed(2)}×`;
}

function worldToScreen(wx, wy, W, H) {
  return [
    W / 2 + (wx - viewX) * pixelsPerUnit,
    H / 2 - (wy - viewY) * pixelsPerUnit,
  ];
}

function screenToWorld(sx, sy, W, H) {
  return [
    (sx - W / 2) / pixelsPerUnit + viewX,
    -((sy - H / 2) / pixelsPerUnit) + viewY,
  ];
}

function drawGrid(W, H) {
  const [wxMin] = screenToWorld(0, 0, W, H);
  const [wxMax] = screenToWorld(W, 0, W, H);
  const [, wyMax] = screenToWorld(0, 0, W, H);
  const [, wyMin] = screenToWorld(0, H, W, H);

  // Choose grid spacing
  const raw = (1 / pixelsPerUnit) * 80;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const nice = raw / pow < 2 ? pow : raw / pow < 5 ? 2 * pow : 5 * pow;
  const minor = nice / 5;

  // Minor grid
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#f1f5f9"; // Light slate
  const mStart = Math.floor(wxMin / minor) * minor;
  for (let x = mStart; x <= wxMax; x += minor) {
    const [sx] = worldToScreen(x, 0, W, H);
    ctx.beginPath();
    ctx.moveTo(sx, 0);
    ctx.lineTo(sx, H);
    ctx.stroke();
  }
  const mStartY = Math.floor(wyMin / minor) * minor;
  for (let y = mStartY; y <= wyMax; y += minor) {
    const [, sy] = worldToScreen(0, y, W, H);
    ctx.beginPath();
    ctx.moveTo(0, sy);
    ctx.lineTo(W, sy);
    ctx.stroke();
  }

  // Major grid
  ctx.strokeStyle = "#e2e8f0"; // Slightly darker slate
  ctx.lineWidth = 1;
  const start = Math.floor(wxMin / nice) * nice;
  for (let x = start; x <= wxMax; x += nice) {
    const [sx] = worldToScreen(x, 0, W, H);
    ctx.beginPath();
    ctx.moveTo(sx, 0);
    ctx.lineTo(sx, H);
    ctx.stroke();
  }
  const startY = Math.floor(wyMin / nice) * nice;
  for (let y = startY; y <= wyMax; y += nice) {
    const [, sy] = worldToScreen(0, y, W, H);
    ctx.beginPath();
    ctx.moveTo(0, sy);
    ctx.lineTo(W, sy);
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = "#64748b"; // Slate 500
  ctx.font = '500 11px "JetBrains Mono", monospace';
  const [ox, oy] = worldToScreen(0, 0, W, H);

  for (let x = start; x <= wxMax; x += nice) {
    if (Math.abs(x) < nice * 0.01) continue;
    const [sx] = worldToScreen(x, 0, W, H);
    const label = +x.toPrecision(6);
    ctx.fillText(label, sx + 4, Math.min(Math.max(oy + 14, 14), H - 4));
  }
  for (let y = startY; y <= wyMax; y += nice) {
    if (Math.abs(y) < nice * 0.01) continue;
    const [, sy] = worldToScreen(0, y, W, H);
    const label = +y.toPrecision(6);
    ctx.fillText(label, Math.min(Math.max(ox + 6, 6), W - 40), sy + 4);
  }

  // Origin Label
  ctx.fillStyle = "#0d9488"; // Accent teal
  ctx.font = '600 11px "JetBrains Mono", monospace';
  ctx.fillText("0", ox + 6, oy + 14);
}

function drawAxes(W, H) {
  const [ox, oy] = worldToScreen(0, 0, W, H);
  ctx.strokeStyle = "#94a3b8"; // Slate 400
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(ox, 0);
  ctx.lineTo(ox, H);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, oy);
  ctx.lineTo(W, oy);
  ctx.stroke();
}

function plotFn(fn, color, lineWidth = 2, dash = []) {
  const W = canvas.width,
    H = canvas.height;
  const [wxMin] = screenToWorld(0, 0, W, H);
  const [wxMax] = screenToWorld(W, 0, W, H);
  const steps = W * 2;
  const dx = (wxMax - wxMin) / steps;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(dash);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();

  let pen = false;
  let prevSY = null;

  for (let i = 0; i <= steps; i++) {
    const wx = wxMin + i * dx;
    const wy = fn(wx);
    if (!isFinite(wy) || Math.abs(wy) > 1e8) {
      pen = false;
      prevSY = null;
      continue;
    }

    const [sx, sy] = worldToScreen(wx, wy, W, H);

    // Asymptote detection
    if (prevSY !== null && Math.abs(sy - prevSY) > H * 1.5) {
      pen = false;
    }

    if (!pen) {
      ctx.moveTo(sx, sy);
      pen = true;
    } else {
      ctx.lineTo(sx, sy);
    }

    prevSY = sy;
  }
  ctx.stroke();
  ctx.restore();
}

function drawCrosshair(W, H) {
  const mx = mouseCanvasX,
    my = mouseCanvasY;
  if (mx < 0 || mx > W || my < 0 || my > H) return;

  ctx.save();
  ctx.strokeStyle = "rgba(13, 148, 136, 0.3)"; // Soft teal
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(mx, 0);
  ctx.lineTo(mx, H);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, my);
  ctx.lineTo(W, my);
  ctx.stroke();
  ctx.restore();
}

function updateTooltip(W, H) {
  const [wx, wy] = screenToWorld(mouseCanvasX, mouseCanvasY, W, H);
  document.getElementById("coord-xy").textContent =
    `x: ${wx.toFixed(4)}, y: ${wy.toFixed(4)}`;

  const tip = document.getElementById("tooltip");
  const active = equations.filter((e) => e.visible && e.fn);
  if (active.length === 0) {
    tip.style.display = "none";
    return;
  }

  let lines = "";
  active.forEach((eq) => {
    const val = eq.fn(wx);
    const label = eq.expr.length > 12 ? eq.expr.slice(0, 12) + "…" : eq.expr;
    if (isFinite(val)) {
      lines += `<span style="color:${eq.color}; font-weight:600;">${label}</span> = ${val.toFixed(4)}\n`;
    }
    if (showDerivatives && eq.derivFn) {
      const dval = eq.derivFn(wx);
      if (isFinite(dval)) {
        lines += `<span style="color:${lightenColor(eq.color, 0.35)}; font-weight:600;">${label}′</span> = ${dval.toFixed(4)}\n`;
      }
    }
  });

  if (lines) {
    tip.innerHTML = lines.trim().replace(/\n/g, "<br>");
    tip.style.display = "block";
    const tx = mouseCanvasX + 16,
      ty = mouseCanvasY - 16;
    tip.style.left = Math.min(tx, W - 160) + "px";
    tip.style.top = Math.max(ty, 8) + "px";
  } else {
    tip.style.display = "none";
  }
}

// ─── CONTROLS ─────────────────────────────────────────────
function zoom(factor) {
  pixelsPerUnit = Math.min(MAX_PPU, Math.max(MIN_PPU, pixelsPerUnit * factor));
  draw();
}

function resetView() {
  viewX = 0;
  viewY = 0;
  pixelsPerUnit = 60;
  draw();
}

function toggleCrosshair() {
  showCrosshair = !showCrosshair;
  document
    .getElementById("crosshair-btn")
    .classList.toggle("active", showCrosshair);
  draw();
}

function toggleDerivatives() {
  showDerivatives = !showDerivatives;
  document
    .getElementById("deriv-btn")
    .classList.toggle("active", showDerivatives);
  draw();
}

function exportPNG() {
  const a = document.createElement("a");
  a.download = "visualmath-graph.png";
  a.href = canvas.toDataURL("image/png");
  a.click();
  showToast("Graph exported as PNG");
}

// ─── MOUSE EVENTS ─────────────────────────────────────────
canvas.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragStartVX = viewX;
  dragStartVY = viewY;
  canvas.style.cursor = "grabbing";
});

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseCanvasX = e.clientX - rect.left;
  mouseCanvasY = e.clientY - rect.top;
  if (isDragging) {
    const dx = (e.clientX - dragStartX) / pixelsPerUnit;
    const dy = (e.clientY - dragStartY) / pixelsPerUnit;
    viewX = dragStartVX - dx;
    viewY = dragStartVY + dy;
  }
  draw();
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
  canvas.style.cursor = "crosshair";
});

canvas.addEventListener("mouseleave", () => {
  isDragging = false;
  canvas.style.cursor = "crosshair";
  mouseCanvasX = -999;
  mouseCanvasY = -999;
  document.getElementById("tooltip").style.display = "none";
  document.getElementById("coord-xy").textContent = "x: —, y: —";
  draw();
});

canvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.9;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left,
      my = e.clientY - rect.top;
    const [wx, wy] = screenToWorld(mx, my, canvas.width, canvas.height);

    pixelsPerUnit = Math.min(
      MAX_PPU,
      Math.max(MIN_PPU, pixelsPerUnit * factor),
    );
    viewX = wx - (mx - canvas.width / 2) / pixelsPerUnit;
    viewY = wy + (my - canvas.height / 2) / pixelsPerUnit;
    draw();
  },
  { passive: false },
);

// Touch support
let lastTouchDist = null;
canvas.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      dragStartVX = viewX;
      dragStartVY = viewY;
    } else if (e.touches.length === 2) {
      lastTouchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
    }
    e.preventDefault();
  },
  { passive: false },
);

canvas.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length === 1 && isDragging) {
      const dx = (e.touches[0].clientX - dragStartX) / pixelsPerUnit;
      const dy = (e.touches[0].clientY - dragStartY) / pixelsPerUnit;
      viewX = dragStartVX - dx;
      viewY = dragStartVY + dy;
    } else if (e.touches.length === 2 && lastTouchDist) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      zoom(dist / lastTouchDist);
      lastTouchDist = dist;
    }
    e.preventDefault();
    draw();
  },
  { passive: false },
);

canvas.addEventListener("touchend", () => {
  isDragging = false;
  lastTouchDist = null;
});

// ─── TOAST ────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

// ─── KEYBOARD SHORTCUTS ───────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (document.activeElement.tagName === "INPUT") return;
  if (e.key === "+" || e.key === "=") zoom(1.2);
  if (e.key === "-") zoom(0.83);
  if (e.key === "r" || e.key === "R") resetView();
  if (e.key === "e" || e.key === "E") addEquation();
});
