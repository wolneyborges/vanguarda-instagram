/* Opção 1 — CONTEÚDO PROVISÓRIO para testar o motor. Trocar pelo conteúdo real na etapa 5.
 * Mídia: "arquivo.webp" | "arquivo.mp4" | {ph:"texto", bg:"css"} (marcador colorido) */
const M = "../midia/";
const ph = (t, bg) => ({ ph: t, bg });
const G1 = "linear-gradient(135deg,#3a0ca3,#7209b7,#f72585)";
const G2 = "linear-gradient(135deg,#0f4c5c,#2a9d8f,#e9c46a)";
const G3 = "linear-gradient(135deg,#1d1d1d,#3d3d3d 60%,#c9a227)";
const G4 = "linear-gradient(135deg,#ff595e,#ffca3a,#8ac926)";
const ZAP = { texto: "Chamar no WhatsApp", url: "https://wa.me/", icone: "zap" }; // número pendente

window.PERFIL = {
  usuario: "vanguardatextil",
  nome: "Tecidos, Malhas & Estamparia Digital.", // igual ao perfil real (lido em 26/11/2026)
  verificado: false,
  avatar: M + "avatar.webp",
  bio: "Estamparia digital em tecidos e malhas 🎨\nFluit · Suplex · Linho · Crepe GGT · Tule\nSua estampa, do arquivo ao rolo\n📲 Orçamento pelo WhatsApp 👇",
  link: { texto: "wa.me/vanguarda", url: "https://wa.me/" },
  whatsapp: "",
  numeros: { seguidores: 1248, seguindo: 186 },
  destaques: [
    { titulo: "Sobre", capa: M + "avatar.webp", stories: [
      { src: M + "rolos.webp", quando: "1 sem" },
      { ph: "Somos a Vanguarda\nestamparia digital", bg: G1, quando: "1 sem" } ] },
    { titulo: "Tecidos", capa: M + "flatlay.webp", stories: [
      { src: M + "flatlay.webp", quando: "3 d" },
      { ph: "Fluit Liso · Fluit Estampado", bg: G2, quando: "3 d" },
      { ph: "Suplex Power · Suplex Estampado", bg: G3, quando: "3 d" } ] },
    { titulo: "Processo", capa: M + "reel-rolos.webp", stories: [
      { src: M + "reel-rolos.mp4", quando: "2 d" } ] },
    { titulo: "Estampas", capa: ph("✿", G4), stories: [
      { ph: "Galeria de estampas", bg: G4, quando: "5 d" } ] },
    { titulo: "Pedidos", capa: ph("✓", G2), stories: [
      { ph: "1. Mande sua arte\n2. Escolha o tecido\n3. Receba o rolo", bg: G2, quando: "6 d", cta: ZAP } ] },
    { titulo: "Clientes", capa: ph("★", G1), stories: [
      { ph: "Depoimentos", bg: G1, quando: "2 sem" } ] },
  ],
  posts: [
    { id: "p01", tipo: "reel", fixado: true, midias: [M + "reel-rolos.mp4"], capa: M + "reel-rolos.webp",
      legenda: "Da tela para o tecido. Isso é a Vanguarda. 🎨 #estampariadigital #tecidos", curtidas: 384, comentarios: 27, reposts: 12, views: 12400, data: "2 dias" },
    { id: "p06", tipo: "carrossel", fixado: true, midias: [ph("Como fazer\nseu pedido", G2), ph("1. Mande a arte", G2), ph("2. Escolha a base", G2), ph("3. Aprove a prova", G2), ph("4. Receba", G2)],
      legenda: "Fazer seu pedido é simples: arte, base, prova e entrega. Salva esse post e chama no WhatsApp do link da bio. #estampariadigital #confeccao", curtidas: 212, comentarios: 18, data: "4 dias" },
    { id: "p03", tipo: "carrossel", midias: [M + "flatlay.webp", ph("Fluit", G1), ph("Suplex", G3), ph("Linho", G4), ph("Crepe GGT", G2), ph("Tule", G1)],
      legenda: "Conheça nossas bases: Fluit, Suplex, Linho, Crepe GGT e Tule. Cada uma com um caimento, cada uma para um tipo de peça. Qual é a sua favorita? #tecidos #malhas", curtidas: 156, comentarios: 9, data: "5 dias" },
    { id: "p05", tipo: "post", midias: [M + "rolos.webp"], legenda: "Cores vivas, toque macio. 🌺", curtidas: 98, comentarios: 4, data: "6 dias" },
    { id: "p04", tipo: "reel", midias: [M + "reel-flatlay.mp4"], capa: M + "reel-flatlay.webp",
      legenda: "Amostras saindo para aprovação ✂️", curtidas: 241, comentarios: 11, reposts: 6, views: 8300, data: "1 semana" },
    { id: "p02", tipo: "carrossel", midias: [ph("O que é\nestamparia digital?", G1), ph("Impressão direta no tecido", G1), ph("Sem mínimo de cores", G1)],
      legenda: "Estamparia digital imprime sua arte direto no tecido, com quantas cores quiser. #estampariadigital", curtidas: 133, comentarios: 6, data: "1 semana" },
    { id: "p07", tipo: "post", midias: [ph("Tendência\nverão 2027", G4)], legenda: "As estampas que vão dominar o verão.", curtidas: 77, data: "2 semanas" },
    { id: "p08", tipo: "reel", midias: [ph("Do arquivo\nao tecido", G3)], legenda: "Antes e depois.", curtidas: 190, views: 5100, data: "2 semanas" },
    { id: "p09", tipo: "post", midias: [ph("Cuidados com\no tecido", G2)], legenda: "Como lavar sua peça estampada.", curtidas: 64, data: "3 semanas" },
  ],
};
