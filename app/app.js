/* Motor do perfil (um só para as 3 opções). Lê window.PERFIL (dados.js da opção).
 * Comportamento copiado do Instagram atual: referencias/ESTUDO-INSTAGRAM.md. Sem marca do Instagram. */
(() => {
const P = window.PERFIL;
const $ = (s, r = document) => r.querySelector(s);
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = (n) => typeof n === "string" ? n : n >= 1e6 ? (n / 1e6).toFixed(1).replace(".", ",").replace(",0", "") + " mi"
  : n >= 1e4 ? (n / 1e3).toFixed(1).replace(".", ",").replace(",0", "") + " mil" : n.toLocaleString("pt-BR");

/* ---------- ícones (desenho próprio) ---------- */
const D = {
  voltar: "M15 5l-7 7 7 7", x: "M5 5l14 14M19 5L5 19",
  coracao: "M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.8 3.6 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4c3.7 0 5.9 3.8 4.6 7.3-1.8 4.6-9.3 9.2-9.3 9.2z",
  coment: "M20.6 16.3A9 9 0 1 0 16.4 20.4L21 21z",
  repost: "M17 2l3 3-3 3M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3M20 13v2a4 4 0 0 1-4 4H4",
  enviar: "M22 3L2 9.5l7.5 3.2L13 21zM22 3L9.5 12.7", salvar: "M19 21l-7-5.5L5 21V3h14z",
  grade: "M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18",
  reels: "M3 3h18v18H3zM3 8h18M8.5 3l3 5M14.5 3l3 5M10 11.5v6l5-3z",
  marcado: "M4 4h16v16H4zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 20a5 5 0 0 1 10 0",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  casa: "M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3z", busca: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM16 16l5 5",
  olho: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  mudo: "M11 5L6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6", som: "M11 5L6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14",
  addpessoa: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M19 8v6M16 11h6",
  musica: "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  zap: "M3 21l1.6-4.8A9 9 0 1 1 8 19.6z",
};
const ic = (n, t = 24, w = 2) => `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"><path d="${D[n]}"/></svg>`;
const pontos3 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>`;
const icCarr = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 2h14v14H8z"/><path d="M2 8v14h14" fill="none" stroke="#fff" stroke-width="2.4"/></svg>`;
const icReel = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 8v7l6-3.5z"/></svg>`;
const icPin = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M14.5 2.5l7 7-2.5.5-4.5 4.5.5 4-1.5 1.5-4-4L4 21.5l-1.5-1.5 5.5-5.5-4-4L5.5 9l4 .5L14 5z"/></svg>`;
const verif = (t = 16) => P.verificado ? `<svg width="${t}" height="${t}" viewBox="0 0 24 24"><path fill="#0095f6" d="M12 1l2.6 2 3.3-.3 1 3.1 2.8 1.8-1 3.1 1 3.1-2.8 1.8-1 3.1-3.3-.3L12 23l-2.6-2-3.3.3-1-3.1-2.8-1.8 1-3.1-1-3.1 2.8-1.8 1-3.1 3.3.3z"/><path d="M7.5 12.2l3 3 6-6" fill="none" stroke="#fff" stroke-width="2.2"/></svg>` : "";
const coracaoGrande = `<svg class="coracao" viewBox="0 0 24 24" fill="#fff"><path d="${D.coracao}"/></svg>`;

/* ---------- mídia: "foto.webp", "video.mp4", {ph:"texto", bg:"css"} ou {src, poster} ---------- */
const norm = (m) => typeof m === "string" ? { src: m } : m;
const ehVideo = (m) => /\.(mp4|webm|mov)$/i.test(m.src || "");
function midia(m, { auto = false } = {}) {
  m = norm(m);
  if (m.ph) return el(`<div class="ph" style="background:${m.bg || "linear-gradient(135deg,#7b2ff7,#f107a3,#ffb300)"}">${esc(m.ph)}</div>`);
  if (ehVideo(m)) {
    const v = el(`<video playsinline muted loop preload="metadata" ${m.poster ? `poster="${m.poster}"` : ""}></video>`);
    v.src = m.src; v.muted = true; if (auto) v.autoplay = true;
    return v;
  }
  return el(`<img loading="lazy" alt="" src="${m.src}">`);
}
const capa = (p) => p.capa ? norm(p.capa) : norm(p.midias[0]);

/* toque duplo (curtir) separado do toque simples */
function toques(alvo, simples, duplo) {
  let ult = 0, tm;
  alvo.addEventListener("click", (e) => {
    const ag = Date.now();
    if (ag - ult < 280) { clearTimeout(tm); ult = 0; duplo(e); }
    else { ult = ag; tm = setTimeout(() => simples && simples(e), 280); }
  });
}
function explodeCoracao(alvo) { const c = el(coracaoGrande); alvo.appendChild(c); setTimeout(() => c.remove(), 950); }

/* vídeos tocam só quando aparecem na tela */
const vigia = new IntersectionObserver((es) => es.forEach((e) => {
  const v = e.target; if (e.isIntersecting && e.intersectionRatio > 0.6) v.play().catch(() => {}); else v.pause();
}), { threshold: [0, 0.6, 1] });

const tel = $(".tel");
const fixados = P.posts.filter((p) => p.fixado).slice(0, 3);
const ordem = [...fixados, ...P.posts.filter((p) => !fixados.includes(p))];
const reels = P.posts.filter((p) => p.tipo === "reel");
const curtidos = new Set(), salvos = new Set();
let somLigado = false;

/* ---------- perfil ---------- */
function perfil() {
  const temStory = P.destaques?.length;
  const n = P.numeros || {};
  const v = el(`<div class="perfil">
    <div class="topo"><a href="../index.html" aria-label="Voltar às opções">${ic("voltar")}</a><div class="arroba">${esc(P.usuario)} ${verif(14)}</div>${pontos3}</div>
    <div class="cab">
      <button class="av ${temStory ? "anel" : ""}" data-av><img src="${P.avatar}" alt=""></button>
      <div class="cab-dir">
        <div class="nomeu">${esc(P.usuario)} ${verif(16)}</div>
        <div class="nums"><div><b>${fmt(n.posts ?? P.posts.length)}</b><span>posts</span></div>
          <div><b>${fmt(n.seguidores ?? 0)}</b><span>seguidores</span></div>
          <div><b>${fmt(n.seguindo ?? 0)}</b><span>seguindo</span></div></div>
      </div>
    </div>
    <div class="bio">
      <div class="nome">${esc(P.nome)}</div>
      ${P.categoria ? `<div class="cat">${esc(P.categoria)}</div>` : ""}
      <p>${esc(P.bio)}</p>
      ${P.link ? `<a class="lk" href="${P.link.url}" target="_blank" rel="noopener">${ic("link", 14)}${esc(P.link.texto)}</a>` : ""}
    </div>
    <div class="botoes">
      <button class="seguir">Seguir</button>
      <a href="https://wa.me/${P.whatsapp || ""}" target="_blank" rel="noopener">Enviar mensagem</a>
      <button class="ic">${ic("addpessoa", 16)}</button>
    </div>
    <div class="dest">${(P.destaques || []).map((d, i) => `<button data-d="${i}"><div class="bola">${
      d.capa?.ph ? `<div class="ph" style="background:${d.capa.bg};font-size:22px;padding:0">${esc(d.capa.ph)}</div>` : `<img src="${norm(d.capa).src}" alt="">`
    }</div><span>${esc(d.titulo)}</span></button>`).join("")}</div>
    <div class="abas"><button data-aba="grade" class="on">${ic("grade", 22, 1.8)}</button>
      <button data-aba="reels">${ic("reels", 22, 1.8)}</button>
      <button data-aba="repost">${ic("repost", 22, 1.8)}</button>
      <button data-aba="marcado">${ic("marcado", 22, 1.8)}</button></div>
    <div class="conteudo"></div>
  </div>`);
  const seg = $(".seguir", v);
  seg.onclick = () => { seg.classList.toggle("ok"); seg.textContent = seg.classList.contains("ok") ? "Seguindo" : "Seguir"; };
  $("[data-av]", v).onclick = () => temStory && story(0);
  v.querySelectorAll("[data-d]").forEach((b) => (b.onclick = () => story(+b.dataset.d)));
  v.querySelectorAll("[data-aba]").forEach((b) => (b.onclick = () => {
    v.querySelectorAll("[data-aba]").forEach((x) => x.classList.toggle("on", x === b));
    aba(b.dataset.aba, $(".conteudo", v));
  }));
  aba("grade", $(".conteudo", v));
  return v;
}

function aba(qual, alvo) {
  alvo.innerHTML = "";
  if (qual === "repost" || qual === "marcado") {
    alvo.appendChild(el(`<div class="vazio">${ic(qual, 48, 1.4)}<p style="margin-top:12px">${qual === "repost" ? "Nenhuma repostagem ainda" : "Fotos e vídeos com a Vanguarda aparecem aqui"}</p></div>`));
    return;
  }
  const lista = qual === "reels" ? reels : ordem;
  const g = el(`<div class="grade ${qual === "reels" ? "g-reels" : ""}"></div>`);
  lista.forEach((p, i) => {
    const c = el(`<button class="cel"></button>`);
    c.appendChild(midia(capa(p)));
    if (qual === "grade") {
      const t = p.fixado && fixados.includes(p) ? icPin : p.tipo === "reel" ? icReel : p.midias.length > 1 ? icCarr : "";
      if (t) c.appendChild(el(`<span class="tag">${t}</span>`));
    } else c.appendChild(el(`<span class="views">${ic("olho", 14)}${fmt(p.views ?? 0)}</span>`));
    c.onclick = () => (p.tipo === "reel" && qual === "reels") ? abrirReels(i) : publicacoes(i, lista);
    g.appendChild(c);
  });
  alvo.appendChild(g);
}

/* ---------- publicações (feed a partir do post tocado) ---------- */
function legenda(p) {
  const txt = esc(p.legenda || "").replace(/#[\wÀ-ú]+/g, (h) => `<span class="tags">${h}</span>`);
  const curto = (p.legenda || "").length > 110;
  return `<div class="leg">${p.curtidas != null ? `<div style="font-weight:600;margin-bottom:2px" data-nc>${fmt(p.curtidas)} curtidas</div>` : ""}
    <b>${esc(P.usuario)}</b><span data-t>${curto ? txt.slice(0, txt.indexOf(" ", 100)) + '… <button class="mais">mais</button>' : txt}</span>
    ${p.comentarios ? `<span class="com">Ver todos os ${p.comentarios} comentários</span>` : ""}
    <span class="data">${esc(p.data || "")}</span></div>`;
}
function cartao(p) {
  const n = p.midias.length;
  const c = el(`<article class="post">
    <div class="pc"><div class="av ${P.destaques?.length ? "anel" : ""}"><img src="${P.avatar}" alt=""></div>
      <div><b>${esc(P.usuario)}</b> ${verif(12)}${p.local ? `<div style="font-size:12px">${esc(p.local)}</div>` : ""}</div>
      ${p.fixado ? `<span class="fix">${icPin.replace(/#fff/g, "currentColor").replace('width="20" height="20"', 'width="16" height="16"')}</span>` : ""}
      <span style="${p.fixado ? "" : "margin-left:auto"}">${pontos3}</span></div>
    <div class="midia"><div class="carr"></div>${n > 1 ? `<span class="cont">1/${n}</span><div class="pontos">${"<i></i>".repeat(n)}</div>` : ""}</div>
    <div class="acoes"><button data-c>${ic("coracao", 26)}</button><button>${ic("coment", 26)}</button>
      <button>${ic("repost", 24)}</button><button>${ic("enviar", 24)}</button><button class="salvar" data-s>${ic("salvar", 24)}</button></div>
    ${legenda(p)}</article>`);
  const carr = $(".carr", c);
  p.midias.forEach((m) => { const x = midia(m); carr.appendChild(x); if (x.tagName === "VIDEO") vigia.observe(x); });
  if (n > 1) {
    const pts = c.querySelectorAll(".pontos i"), cont = $(".cont", c);
    const marca = () => { const i = Math.round(carr.scrollLeft / (carr.clientWidth || 1)); pts.forEach((x, j) => x.classList.toggle("on", j === i)); cont.textContent = `${i + 1}/${n}`; };
    carr.addEventListener("scroll", marca, { passive: true }); marca();
  }
  const bc = $("[data-c]", c), nc = $("[data-nc]", c);
  const curtir = (forcar) => {
    const on = forcar || !curtidos.has(p.id);
    on ? curtidos.add(p.id) : curtidos.delete(p.id);
    bc.classList.toggle("curti", on);
    if (nc && p.curtidas != null) nc.textContent = `${fmt(p.curtidas + (on ? 1 : 0))} curtidas`;
  };
  bc.onclick = () => curtir();
  toques($(".midia", c), null, () => { curtir(true); explodeCoracao($(".midia", c)); });
  const bs = $("[data-s]", c); bs.onclick = () => bs.classList.toggle("salvo");
  const m = $(".mais", c); if (m) m.onclick = () => { $("[data-t]", c).innerHTML = esc(p.legenda).replace(/#[\wÀ-ú]+/g, (h) => `<span class="tags">${h}</span>`); };
  return c;
}
function publicacoes(i, lista) {
  const t = el(`<div class="tela"><div class="topo"><button data-v>${ic("voltar")}</button><div class="t">Publicações</div></div><div class="rolo"></div></div>`);
  const rolo = $(".rolo", t);
  const cards = lista.map((p) => { const c = cartao(p); rolo.appendChild(c); return c; });
  $("[data-v]", t).onclick = () => { t.querySelectorAll("video").forEach((v) => vigia.unobserve(v)); t.remove(); };
  tel.appendChild(t);
  requestAnimationFrame(() => (rolo.scrollTop = cards[i].offsetTop));
}

/* ---------- stories / destaques ---------- */
function story(d) {
  let s = 0, t0 = 0, gasto = 0, pausa = false, raf, dur = 5000;
  const st = el(`<div class="story"><div class="quadro"></div><div class="barras"></div>
    <div class="sc"><img src="" alt=""><b></b><span class="tp"></span><button class="x">${ic("x", 26)}</button></div>
    <div class="zona esq"></div><div class="zona dir"></div>
    <div class="rod"><div class="msg">Enviar mensagem</div>${ic("coracao", 26)}${ic("enviar", 24)}</div></div>`);
  const quadro = $(".quadro", st), barras = $(".barras", st);
  const fechar = () => { cancelAnimationFrame(raf); st.remove(); };
  function mostrar() {
    const dest = P.destaques[d], it = norm(dest.stories[s]);
    barras.innerHTML = dest.stories.map((_, j) => `<i><b style="width:${j < s ? 100 : 0}%"></b></i>`).join("");
    $(".sc img", st).src = dest.capa?.src || norm(dest.capa || {}).src || P.avatar;
    $(".sc b", st).textContent = dest.titulo; $(".sc .tp", st).textContent = it.quando || "";
    quadro.innerHTML = ""; st.querySelector(".cta")?.remove();
    const m = midia(it); quadro.appendChild(m);
    if (it.cta) {
      const a = el(`<a class="cta" href="${it.cta.url}" target="_blank" rel="noopener">${ic(it.cta.icone || "link", 16)}${esc(it.cta.texto)}</a>`);
      a.addEventListener("pointerdown", (e) => e.stopPropagation()); st.appendChild(a);
    }
    gasto = 0; t0 = performance.now(); dur = it.dur || 5000;
    if (m.tagName === "VIDEO") { m.loop = false; m.muted = !somLigado; m.play().catch(() => {});
      m.onloadedmetadata = () => (dur = it.dur || m.duration * 1000); }
  }
  function prox() { const dest = P.destaques[d];
    if (s < dest.stories.length - 1) s++; else if (d < P.destaques.length - 1) { d++; s = 0; } else return fechar(); mostrar(); }
  function ant() { if (s > 0) s--; else if (d > 0) { d--; s = P.destaques[d].stories.length - 1; } mostrar(); }
  function laco(ag) {
    if (!pausa) { gasto += ag - t0; }
    t0 = ag;
    const b = barras.children[s]?.firstElementChild; if (b) b.style.width = Math.min(100, (gasto / dur) * 100) + "%";
    if (gasto >= dur) prox();
    raf = requestAnimationFrame(laco);
  }
  // toque: avança/volta · segurar: pausa · arrastar para baixo: fecha
  let px, py, pt, arrasto = 0;
  st.addEventListener("pointerdown", (e) => { if (e.target.closest(".x")) return; px = e.clientX; py = e.clientY; pt = Date.now(); pausa = true; quadro.querySelector("video")?.pause(); });
  st.addEventListener("pointermove", (e) => { if (py == null) return; arrasto = Math.max(0, e.clientY - py); st.style.transform = `translateY(${arrasto}px) scale(${1 - arrasto / 2000})`; });
  st.addEventListener("pointerup", (e) => {
    if (py == null) return; const curto = Date.now() - pt < 250;
    st.style.transform = ""; pausa = false; quadro.querySelector("video")?.play().catch(() => {});
    if (arrasto > 90) fechar(); else if (curto && Math.abs(e.clientX - px) < 10) (e.clientX - st.getBoundingClientRect().left) < st.clientWidth * 0.3 ? ant() : prox();
    py = null; arrasto = 0;
  });
  $(".x", st).onclick = fechar;
  tel.appendChild(st); mostrar(); raf = requestAnimationFrame(laco);
}

/* ---------- Reels ---------- */
function abrirReels(i = 0) {
  const r = el(`<div class="reels"><div class="topo-r"><button data-v>${ic("voltar")}</button>Reels</div><div class="rolo"></div>
    <nav class="base">${ic("casa", 26)}${ic("busca", 26)}${ic("reels", 26)}${ic("enviar", 26)}<span class="mini"><img src="${P.avatar}" alt=""></span></nav></div>`);
  const rolo = $(".rolo", r);
  const itens = reels.map((p) => {
    const it = el(`<section class="reel"><div class="sombra"></div>
      <div class="lado"><button data-c>${ic("coracao", 28)}<span>${fmt(p.curtidas ?? 0)}</span></button>
        <button>${ic("coment", 28)}<span>${fmt(p.comentarios ?? 0)}</span></button>
        <button>${ic("repost", 26)}<span>${fmt(p.reposts ?? 0)}</span></button>
        <button>${ic("enviar", 26)}</button><button>${pontos3}</button></div>
      <div class="info"><div class="u"><img src="${P.avatar}" alt="">${esc(P.usuario)} ${verif(12)}<span class="sg">Seguir</span></div>
        <p>${esc(p.legenda || "")}</p><div class="audio">${ic("musica", 14)}${esc(p.audio || P.usuario + " · Áudio original")}</div></div></section>`);
    const m = midia(p.midias[0]); it.prepend(m);
    if (m.tagName === "VIDEO") { vigia.observe(m); m.muted = !somLigado; }
    const bc = $("[data-c]", it), n = $("[data-c] span", it);
    const curtir = (f) => { const on = f || !curtidos.has(p.id); on ? curtidos.add(p.id) : curtidos.delete(p.id);
      bc.classList.toggle("curti", on); n.textContent = fmt((p.curtidas ?? 0) + (on ? 1 : 0)); };
    bc.onclick = () => curtir();
    $(".info p", it).onclick = (e) => { e.stopPropagation(); e.target.classList.toggle("aberta"); };
    toques(it, (e) => {
      if (e.target.closest(".lado,.info")) return;
      somLigado = !somLigado; r.querySelectorAll("video").forEach((v) => (v.muted = !somLigado));
      const s = el(`<div class="som">${ic(somLigado ? "som" : "mudo", 30)}</div>`); it.appendChild(s); setTimeout(() => s.remove(), 1000);
    }, (e) => { if (e.target.closest(".lado,.info")) return; curtir(true); explodeCoracao(it); });
    rolo.appendChild(it); return it;
  });
  $("[data-v]", r).onclick = () => { r.querySelectorAll("video").forEach((v) => vigia.unobserve(v)); r.remove(); };
  tel.appendChild(r);
  requestAnimationFrame(() => (rolo.scrollTop = itens[i]?.offsetTop || 0));
}

/* ---------- montar ---------- */
document.title = `${P.nome} (@${P.usuario})`;
tel.appendChild(perfil());
const base = el(`<nav class="base"><button>${ic("casa", 26)}</button><button>${ic("busca", 26)}</button>
  <button data-r>${ic("reels", 26)}</button><button>${ic("enviar", 26)}</button><span class="mini"><img src="${P.avatar}" alt=""></span></nav>`);
$("[data-r]", base).onclick = () => reels.length && abrirReels(0);
tel.appendChild(base);

/* cortina: a tela abre coberta pelas faixas (como a capa terminou) e elas saem revelando o perfil */
(function cortina() {
  const c = document.createElement("div");
  c.className = "cortina"; c.setAttribute("aria-hidden", "true");
  const imgs = [];
  for (let i = 0; i < 9; i++) {
    const desce = i % 2 === 0, f = document.createElement("div");
    f.className = "fx";
    f.style.cssText = `--para:${desce ? "101%" : "-101%"};--s:${desce ? 1 : -1};--k:${(i * 0.05).toFixed(2)}s`;
    const src = `../midia/abertura/${i + 1}.webp`;
    f.innerHTML = `<i style="background-image:url(${src})"></i>`;
    c.appendChild(f);
    imgs.push(new Promise((ok) => { const im = new Image(); im.onload = im.onerror = ok; im.src = src; }));
  }
  document.body.appendChild(c);
  // espera as estampas (no máx. 1,2 s), segura um instante e abre
  Promise.race([Promise.all(imgs), new Promise((ok) => setTimeout(ok, 1200))]).then(() => {
    setTimeout(() => c.classList.add("saindo"), 250);
    setTimeout(() => c.remove(), 250 + 750 + 450 + 100);
  });
})();
})();
