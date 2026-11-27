/* Dados do calendário. Ano da moda: base em STUDIO_RAPPORT_TENDENCIAS/dados-2027.js (temporadas, datas e fontes).
 * Dezembro/2026: posts de DEMONSTRAÇÃO (arte montada com as estampas da Vanguarda). */
const M = "../midia/";
const E = (n) => `${M}abertura/${n}.webp`;
const F = {
  carnaval: ["STJ · Calendário 2027", "https://www.stj.jus.br/sites/portalp/SiteAssets/documentos/77025_calendario_stj_2027_Decisoes_21-10-2026%20%281%29.pdf"],
  estacoes: ["IPMet/Unesp · Estações do ano", "https://ipmetradar.com.br/4estacoes/4estacoes/ESTACOES_DO_ANO_DATAS.pdf"],
  origem: ["Origem 19 Showroom · Calendário de coleções", "https://www.origem19showroom.com.br/calend%C3%A1rio"],
  coloro: ["WGSN × Coloro · Cores S/S 2027", "https://www.wgsn.com/en/wgsn/press/press-releases/wgsn-and-coloro-reveal-colour-year-2027-luminous-blue-and-s/s-27-key"],
  start: ["START by WGSN · Verão 2027/28", "https://startbywgsn.com/blog/17974/colors-confirmations-for-spring-summer-2027-the-palettes-that-will-dominate-the-racks?lang=pt"],
  maes: ["CNDL/SPC · Dia das Mães", "https://site.cndl.org.br/dia-das-maes-deve-movimentar-3791-bilhoes-de-reais-no-varejo-78-dos-consumidores-pretendem-presentear-mostra-pesquisa-cndlspc-brasil/"],
  namorados: ["CNDL/SPC · Dia dos Namorados", "https://site.cndl.org.br/dia-dos-namorados-deve-movimentar-r-26-bilhoes-no-comercio-e-servicos-aponta-pesquisa-cndl-spc-brasil/"],
  pais: ["CNDL/SPC · Dia dos Pais", "https://site.cndl.org.br/104-milhoes-de-consumidores-devem-ir-as-compras-para-o-dia-dos-pais-indica-pesquisa-cndlspc-brasil/"],
  criancas: ["CNDL/SPC · Dia das Crianças", "https://site.cndl.org.br/dia-das-criancas-deve-movimentar-1811-bilhoes-no-varejo-apontam-cndlspc-brasil/"],
  fecom: ["FecomercioSP · Sazonalidade do varejo", "https://fecomercio.com.br/imprensa/black-friday-transforma-novembro-em-um-dos-principais-meses-de-vendas-do-varejo-paulista/"],
  tec: ["Tecnotêxtil Brasil 2027", "https://tecnotextilbrasil.com.br/brasil-fashion-designers-e-uma-das-novidades-da-tecnotextil-brasil-2027/"],
  senai: ["SENAI CETIQT/Sebrae · Outono/Inverno 2027", "https://inovamodadigital.com.br/materiais-exclusivos"],
};
const VERAO27 = [["Luminous Blue", "#2849a8"], ["Energy Orange", "#eb622f"], ["Pop Pink", "#ee7ca7"], ["Meadowland Green", "#8b9b64"], ["Clay", "#9c6558"]];
const VERAO28 = [["Turquesa vivo", "#20a9ab"], ["Verde aqua", "#84c4b8"]];

window.ANO = {
  ano: 2027,
  meses: [
    { n: "Janeiro", c: "Jan", est: "verao", janela: "Alto Verão 26/27", tema: "Férias e praia", img: M + "meses/jan.webp",
      datas: ["Férias escolares", "Alto verão na loja"], pecas: ["Biquíni e maiô", "Saída de praia e pareô", "Vestidos leves", "Shorts e batas"],
      ideias: ["Estampas que viram moda praia", "Do rolo ao biquíni: bastidor", "Coordenados de praia"], cores: VERAO27, fontes: [F.coloro, F.origem] },
    { n: "Fevereiro", c: "Fev", est: "verao", janela: "Alto Verão 26/27", tema: "Carnaval", img: M + "meses/fev.webp",
      datas: ["Carnaval · 9/02"], pecas: ["Abadás", "Bodies e croppeds", "Kimonos", "Fantasias"],
      ideias: ["Estampas para bloco", "Abadá personalizado: como pedir", "Contagem para o Carnaval"], cores: VERAO27, fontes: [F.carnaval] },
    { n: "Março", c: "Mar", est: "inverno", janela: "Outono/Inverno 2027", tema: "Chegada do outono", img: M + "meses/mar.webp",
      datas: ["Outono · 20/03"], pecas: ["Camisas de manga longa", "Vestidos midi", "Poá", "Calças pantalona"],
      ideias: ["A cartela do outono", "Poá: o clássico que volta", "Primeiras estampas de inverno"], fontes: [F.estacoes, F.senai] },
    { n: "Abril", c: "Abr", est: "inverno", janela: "Outono/Inverno 2027", tema: "Inverno chega à loja", img: M + "meses/abr.webp",
      datas: ["Tecnotêxtil · 27 a 30/04"], pecas: ["Blusas de malha", "Conjuntos", "Vestidos de manga", "Calças"],
      ideias: ["Malhas para o frio", "Bastidor na feira têxtil", "Como escolher a base certa"], fontes: [F.tec, F.origem] },
    { n: "Maio", c: "Mai", est: "inverno", janela: "Outono/Inverno 2027", tema: "Dia das Mães", img: M + "meses/mai.webp",
      datas: ["Dia das Mães · 9/05"], pecas: ["Vestidos para presente", "Blusas delicadas", "Florais suaves", "Conjuntos"],
      ideias: ["Estampas para presentear", "Coleção Mães em 3 bases", "História de cliente"], fontes: [F.maes] },
    { n: "Junho", c: "Jun", est: "inverno", janela: "Outono/Inverno 2027", tema: "Festa junina e Namorados", img: M + "meses/jun.webp",
      datas: ["Namorados · 12/06", "Inverno · 21/06", "Festas juninas"], pecas: ["Xadrez junino", "Vestidos temáticos", "Peças românticas", "Casacos leves"],
      ideias: ["Xadrez de festa junina", "Corações e romântico", "Inverno na vitrine"], fontes: [F.namorados, F.estacoes] },
    { n: "Julho", c: "Jul", est: "inverno", janela: "Outono/Inverno 2027", tema: "Férias de inverno", img: M + "meses/jul.webp",
      datas: ["Férias escolares", "Alto verão abre no atacado"], pecas: ["Fitness", "Infantil de inverno", "Conjuntos confortáveis"],
      ideias: ["Fitness estampado", "Primeiras amostras de verão", "Antes e depois da estampa"], fontes: [F.origem] },
    { n: "Agosto", c: "Ago", est: "inverno", janela: "Transição para o verão", tema: "Dia dos Pais", img: M + "meses/ago.webp",
      datas: ["Dia dos Pais · 8/08"], pecas: ["Camisas masculinas", "Bermudas", "Primeiros florais"], ideias: ["Camisas estampadas para os pais", "Prévia da primavera"], fontes: [F.pais] },
    { n: "Setembro", c: "Set", est: "verao", janela: "Primavera/Verão 27/28", tema: "Primavera", img: M + "meses/set.webp",
      datas: ["Primavera · 23/09"], pecas: ["Florais", "Vestidos leves", "Saias", "Tropical"],
      ideias: ["A primavera em 5 estampas", "Florais que mais saíram", "Coleção nova no rolo"], cores: VERAO28, fontes: [F.estacoes, F.start] },
    { n: "Outubro", c: "Out", est: "verao", janela: "Primavera/Verão 27/28", tema: "Dia das Crianças", img: M + "meses/out.webp",
      datas: ["Dia das Crianças · 12/10"], pecas: ["Moda infantil", "Moda praia nova", "Vestidos"], ideias: ["Estampas para os pequenos", "Praia 27/28 chegando"], cores: VERAO28, fontes: [F.criancas] },
    { n: "Novembro", c: "Nov", est: "verao", janela: "Primavera/Verão 27/28", tema: "Black Friday e fim de ano", img: M + "meses/nov.webp",
      datas: ["Black Friday · 26/11"], pecas: ["Looks de festa", "Conjuntos", "Moda praia"], ideias: ["Prazo para pedidos de fim de ano", "Estampas de festa"], cores: VERAO28, fontes: [F.fecom] },
    { n: "Dezembro", c: "Dez", est: "verao", janela: "Primavera/Verão 27/28", tema: "Natal e Réveillon", img: M + "meses/dez.webp",
      datas: ["Verão · 21/12", "Natal · 25/12", "Réveillon · 31/12"], pecas: ["Branco e dourado", "Tule e brilho", "Vestidos de festa", "Praia"],
      ideias: ["Estampas para o Réveillon", "Retrospectiva do ano", "Feliz Natal da Vanguarda"], cores: VERAO28, fontes: [F.fecom, F.estacoes] },
  ],
};

/* Dezembro/2026: um post por dia útil (22). tipo: reels | carrossel | post. Slides: [imagem, título, subtítulo] */
const S = (img, t, s = "") => ({ img, t, s });
window.DEZ = {
  ano: 2026, mes: 11, hoje: "26/11/2026",
  posts: {
    1: { tipo: "reels", titulo: "Dezembro chegou", video: M + "reel-rolos.mp4", capa: M + "reel-rolos.webp",
      legenda: "Dezembro chegou e a máquina não para. Estampas de festa, praia e verão saindo do rolo direto para a sua coleção. ✨ #estampariadigital #tecidos #verao2027" },
    2: { tipo: "carrossel", titulo: "Nossas bases para o verão", slides: [S(M + "flatlay.webp", "Bases para o verão", "Arraste para conhecer"), S(E(1), "Fluit", "Liso e estampado"), S(E(6), "Suplex", "Power e estampado"), S(E(3), "Linho", "Estampado"), S(E(9), "Crepe GGT", "Estampado"), S(E(5), "Tule", "Estampado")],
      legenda: "Qual base combina com a sua coleção de verão? Fluit, Suplex, Linho, Crepe GGT e Tule, todas com estampa digital. Salva para consultar depois. 📌 #tecidos #malhas" },
    3: { tipo: "post", titulo: "Estampa do dia: barrado azul", slides: [S(E(1), "Barrado azul", "Estampa do dia")],
      legenda: "Barrado floral em azul, perfeito para vestidos longos e saias de verão. Peça a sua pelo direct. 💙 #barrado #estampa" },
    4: { tipo: "reels", titulo: "Bastidor: a estampa saindo", video: M + "reel-flatlay.mp4", capa: M + "reel-flatlay.webp",
      legenda: "Do arquivo para o tecido em segundos. Esse é o nosso dia a dia na Vanguarda. 🎨 #bastidores #estampariadigital" },
    7: { tipo: "carrossel", titulo: "As cores do verão 2027", slides: [S(E(6), "Cores do verão 2027", "Segundo a pesquisa de tendências"), S(E(1), "Luminous Blue", "O azul do ano"), S(E(8), "Energy Orange", "Energia e calor"), S(E(3), "Pop Pink", "Leve e alegre")],
      legenda: "Azul luminoso, laranja energia e rosa pop: as cores que a pesquisa de tendências aponta para o verão 2027. Qual vai para a sua coleção? #tendencias #verao2027" },
    8: { tipo: "post", titulo: "Estampa do dia: floral lilás", slides: [S(E(3), "Floral lilás", "Estampa do dia")], legenda: "Floral lilás com barrado: delicado e fácil de vender. #floral #barrado" },
    9: { tipo: "reels", titulo: "Do arquivo ao tecido", video: M + "reel-rolos.mp4", capa: E(2), legenda: "Mande a arte, a gente imprime. Simples assim. #estampariadigital" },
    10: { tipo: "carrossel", titulo: "Como fazer seu pedido", slides: [S(E(4), "Como fazer seu pedido", "4 passos"), S(E(4), "1. Mande sua arte", ""), S(E(4), "2. Escolha a base", ""), S(E(4), "3. Aprove a prova", ""), S(E(4), "4. Receba seu tecido", "")],
      legenda: "Fazer seu pedido é simples: arte, base, prova e entrega. Chama no direct. 📲 #confeccao" },
    11: { tipo: "post", titulo: "Estampa do dia: tropical", slides: [S(E(7), "Tropical", "Estampa do dia")], legenda: "Folhagens tropicais em laranja e verde: verão puro. #tropical" },
    14: { tipo: "reels", titulo: "Moda praia: estampas", video: M + "reel-flatlay.mp4", capa: E(8), legenda: "Estampas que viram biquíni, maiô e saída de praia. ☀️ #modapraia" },
    15: { tipo: "carrossel", titulo: "Tule para as festas", slides: [S(E(5), "Tule para as festas", "Natal e Réveillon"), S(E(5), "Leve e com brilho", "")], legenda: "Tule estampado para os looks de fim de ano. #tule #reveillon" },
    16: { tipo: "post", titulo: "Estampa do dia: onça", slides: [S(E(8), "Animal print", "Estampa do dia")], legenda: "Animal print em tons quentes. #animalprint" },
    17: { tipo: "reels", titulo: "Bastidor: rolos prontos", video: M + "reel-rolos.mp4", capa: E(9), legenda: "Rolos saindo para os clientes. 📦 #bastidores" },
    18: { tipo: "carrossel", titulo: "Planeje janeiro", slides: [S(E(9), "Planeje janeiro", "Sua coleção de alto verão")], legenda: "Janeiro é alto verão: planeje agora as estampas da sua coleção. #altoverao" },
    21: { tipo: "reels", titulo: "Começou o verão", video: M + "reel-flatlay.mp4", capa: E(6), legenda: "21/12: começou o verão! ☀️ #verao" },
    22: { tipo: "carrossel", titulo: "Estampas para o Réveillon", slides: [S(E(5), "Réveillon", "Branco, dourado e brilho")], legenda: "Estampas para virar o ano com estilo. ✨ #reveillon" },
    23: { tipo: "post", titulo: "Feliz Natal", slides: [S(E(3), "Feliz Natal", "Vanguarda")], legenda: "A Vanguarda deseja um Feliz Natal! 🎄" },
    24: { tipo: "post", titulo: "Véspera de Natal", slides: [S(E(1), "Boas festas", "")], legenda: "Boas festas a todos os nossos clientes. 🎁" },
    28: { tipo: "carrossel", titulo: "Retrospectiva 2026", slides: [S(E(2), "Nosso 2026", "Retrospectiva")], legenda: "As estampas que marcaram o nosso ano. #retrospectiva" },
    29: { tipo: "reels", titulo: "Bastidor do ano", video: M + "reel-rolos.mp4", capa: E(4), legenda: "Um ano de máquina rodando. Obrigado! 🙌" },
    30: { tipo: "post", titulo: "Réveillon", slides: [S(E(5), "Feliz Ano Novo", "2027")], legenda: "Que 2027 venha cheio de cor! 🎆" },
    31: { tipo: "reels", titulo: "Feliz 2027", video: M + "reel-flatlay.mp4", capa: E(6), legenda: "Feliz 2027 da Vanguarda! ✨" },
    // só no pacote Completo (todo dia): fins de semana e Natal
    5: { fds: true, tipo: "post", titulo: "Inspiração de sábado", slides: [S(E(9), "Inspiração", "Sábado")], legenda: "Uma estampa para inspirar o fim de semana. 🌿" },
    6: { fds: true, tipo: "carrossel", titulo: "Looks com nossas estampas", slides: [S(E(2), "Looks da semana", "Com estampas Vanguarda"), S(E(4), "Vestido longo", ""), S(E(7), "Conjunto", "")], legenda: "Peças feitas com tecidos estampados por nós. #looks" },
    12: { fds: true, tipo: "post", titulo: "Estampa do fim de semana", slides: [S(E(6), "Folhagens", "Estampa do fim de semana")], legenda: "Folhagens em laranja e verde. 🍃" },
    13: { fds: true, tipo: "reels", titulo: "Antes e depois", video: M + "reel-rolos.mp4", capa: E(1), legenda: "Da arte ao tecido: antes e depois. #antesedepois" },
    19: { fds: true, tipo: "post", titulo: "Paleta do verão", slides: [S(E(8), "Paleta do verão", "Tons quentes")], legenda: "As cores que esquentam o verão. ☀️" },
    20: { fds: true, tipo: "carrossel", titulo: "Ideias de presente", slides: [S(E(3), "Ideias de presente", "Feitas com estampa"), S(E(5), "Lenço estampado", "")], legenda: "Presentes com estampa exclusiva. 🎁" },
    25: { fds: true, tipo: "reels", titulo: "Feliz Natal", video: M + "reel-flatlay.mp4", capa: E(3), legenda: "Feliz Natal da Vanguarda! 🎄" },
    26: { fds: true, tipo: "post", titulo: "Pós-Natal", slides: [S(E(9), "Obrigado", "Pelo ano juntos")], legenda: "Obrigado por estar com a gente em 2026. 💛" },
    27: { fds: true, tipo: "post", titulo: "Contagem para 2027", slides: [S(E(1), "Faltam 4 dias", "2027")], legenda: "Faltam 4 dias para 2027! ✨" },
  },
};

/* Dias 1–14: as 14 primeiras peças do perfil único (motion/calendario_dez.py). */
Object.assign(window.DEZ.posts, {
 "1": {
  "titulo": "Histórias de Cor",
  "legenda": "Histórias de Cor: 9 estampas em 3 paletas. Qual é a sua? 💙🧡💗\n\n#paletadecores #modapraia #modabrasileira #estampaexclusiva #estampariadigital",
  "tipo": "reels",
  "video": "../midia/p/m24.mp4",
  "capa": "../midia/p/m24.webp"
 },
 "2": {
  "titulo": "Verão na pele",
  "legenda": "Verão na pele: a estampa Onda Rubi em 5 looks de praia 🌊\n\n#modapraia #modabrasileira #confeccao #brasSP #estampariadigital",
  "tipo": "reels",
  "video": "../midia/p/m06.mp4",
  "capa": "../midia/p/m06.webp"
 },
 "3": {
  "titulo": "Acabou de ganhar cor",
  "legenda": "Acabou de ganhar cor 🎨 Sua estampa, direto no tecido.\n\n#bastidores #printdesign #estampariadigital #brasSP #modapraia",
  "tipo": "reels",
  "video": "../midia/p/m21.mp4",
  "capa": "../midia/p/m21.webp"
 },
 "4": {
  "titulo": "Folhagem Azul",
  "legenda": "Folhagem Azul, ref. 14054wB: da peça ao tecido 🌿\n\n#barrado #confeccao #vanguardatextil #modapraia #estampas",
  "tipo": "reels",
  "video": "../midia/p/m10.mp4",
  "capa": "../midia/p/m10.webp"
 },
 "5": {
  "titulo": "Ornamento Azul",
  "legenda": "Ornamento Azul, ref. 14212w. Elegante do tecido ao detalhe 💎\n\n#azul #estampaexclusiva #estampas #estampariadigital #tecidos",
  "fds": true,
  "tipo": "carrossel",
  "slides": [
   {
    "foto": "../midia/p/m05-0.webp"
   },
   {
    "foto": "../midia/p/m05-1.webp"
   },
   {
    "foto": "../midia/p/m05-2.webp"
   },
   {
    "foto": "../midia/p/m05-3.webp"
   }
  ]
 },
 "6": {
  "titulo": "Quatro estampas",
  "legenda": "Quatro estampas, uma tarde de verão ☀️ Arrasta para ver o painel completo.\n\n#verao2027 #estampaexclusiva #estampariadigital #estampas #tecidos",
  "fds": true,
  "tipo": "carrossel",
  "slides": [
   {
    "foto": "../midia/p/m01-0.webp"
   },
   {
    "foto": "../midia/p/m01-1.webp"
   },
   {
    "foto": "../midia/p/m01-2.webp"
   }
  ]
 },
 "7": {
  "titulo": "Borboleta Azul",
  "legenda": "Borboleta Azul: o barrado que desce até a barra 🦋 Ref. 14045wB\n\n#barrado #estampaexclusiva #vanguardatextil #estampas #confeccao",
  "tipo": "carrossel",
  "slides": [
   {
    "foto": "../midia/p/m02-0.webp"
   },
   {
    "foto": "../midia/p/m02-1.webp"
   }
  ]
 },
 "8": {
  "titulo": "Lookbook: Jardim Pink",
  "legenda": "Jardim Pink em 5 olhares: a ficha da peça, o lookbook, o espelho, o cabide e o presente 🎁 Arrasta 👉 Ref. 14212w\n\n#lookbook #confeccao #brasSP #estampariadigital #estampas",
  "tipo": "carrossel",
  "slides": [
   {
    "foto": "../midia/p/c-14212w-0.webp"
   },
   {
    "foto": "../midia/p/c-14212w-1.webp"
   },
   {
    "foto": "../midia/p/c-14212w-2.webp"
   },
   {
    "foto": "../midia/p/c-14212w-3.webp"
   },
   {
    "foto": "../midia/p/c-14212w-4.webp"
   }
  ]
 },
 "9": {
  "titulo": "Lookbook: Confete",
  "legenda": "Confete em 5 olhares: a ficha da peça, o lookbook, o espelho, o cabide e o presente 🎁 Arrasta 👉 Ref. 13998w\n\n#lookbook #confeccao #vanguardatextil #printdesign #estampariadigital",
  "tipo": "carrossel",
  "slides": [
   {
    "foto": "../midia/p/c-13998w_Cropped_v3-0.webp"
   },
   {
    "foto": "../midia/p/c-13998w_Cropped_v3-1.webp"
   },
   {
    "foto": "../midia/p/c-13998w_Cropped_v3-2.webp"
   },
   {
    "foto": "../midia/p/c-13998w_Cropped_v3-3.webp"
   },
   {
    "foto": "../midia/p/c-13998w_Cropped_v3-4.webp"
   }
  ]
 },
 "10": {
  "titulo": "Arte e tecido: Aquarela",
  "legenda": "Primeiro é arte. Depois é tecido. ✨ A estampa Aquarela (ref. 13578w) do jeito que você imaginou.\n\n#antesedepois #confeccao #estampaexclusiva #vanguardatextil #modabrasileira",
  "tipo": "reels",
  "video": "../midia/p/s25-13578w_v8.mp4",
  "capa": "../midia/p/s25-13578w_v8.webp"
 },
 "11": {
  "titulo": "Arte e tecido: Rosa Antiga",
  "legenda": "Primeiro é arte. Depois é tecido. ✨ A estampa Rosa Antiga (ref. 13974wB) do jeito que você imaginou.\n\n#antesedepois #estampaexclusiva #estampariadigital #confeccao #estampas",
  "tipo": "reels",
  "video": "../midia/p/s25-13974wB.mp4",
  "capa": "../midia/p/s25-13974wB.webp"
 },
 "12": {
  "titulo": "Arte e tecido: Confete",
  "legenda": "Primeiro é arte. Depois é tecido. ✨ A estampa Confete (ref. 13998w) do jeito que você imaginou.\n\n#antesedepois #modabrasileira #printdesign #estampariadigital #estampas",
  "fds": true,
  "tipo": "reels",
  "video": "../midia/p/s25-13998w_Cropped_v3.mp4",
  "capa": "../midia/p/s25-13998w_Cropped_v3.webp"
 },
 "13": {
  "titulo": "Arte e tecido: Palmeiras Pop",
  "legenda": "Primeiro é arte. Depois é tecido. ✨ A estampa Palmeiras Pop (ref. 14064wB) do jeito que você imaginou.\n\n#antesedepois #printdesign #vanguardatextil #modabrasileira #estampariadigital",
  "fds": true,
  "tipo": "reels",
  "video": "../midia/p/s25-14064wB.mp4",
  "capa": "../midia/p/s25-14064wB.webp"
 },
 "14": {
  "titulo": "Arte e tecido: Jardim Pink",
  "legenda": "Primeiro é arte. Depois é tecido. ✨ A estampa Jardim Pink (ref. 14212w) do jeito que você imaginou.\n\n#antesedepois #vanguardatextil #printdesign #confeccao #brasSP",
  "tipo": "reels",
  "video": "../midia/p/s25-14212w.mp4",
  "capa": "../midia/p/s25-14212w.webp"
 }
});
