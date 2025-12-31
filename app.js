/* v12.2 - clean after-hold + star-written name + true red thread + premium polaroids + vault promise + story mode fit + restored ending */

const HOLD_MS = 1300;

const REL_START = new Date(2025, 8, 6, 0, 0, 0);
const NEW_YEAR  = new Date(2026, 0, 1, 0, 0, 0);

const HER_COUNT = 15;
const US_MAX = 3;

const STORAGE_KEY = "love2025_unlocks_v12_2";

/* Locks */
const LOCKS = [
  {id:1,q:"Hello babyyyy. Yaad haii aapka first time in life ham dono konse tution mai mile te?",answers:["rano tution","rano tuition","ranotution","ranotuition"],hint:"R se start hota hai babyy."},
  {id:2,q:"Ham pheli baar hath pakade kab te first time kab hug kiya tha date and month babyyy ?",answers:["7 november","07 november","7november","07november","7 nov","07 nov"],hint:"November me tha babyy."},
  {id:3,q:"Aapke aur mere birthdate ka sum kariye then minus kariye aur jo result aaya hai sum ka aur minus ka usko multiply kariye aur jo ans aaya 213 se minus kariye aur jo number aaya us letter ki ek ladki ka naam hai vo caps mai likye",answers:["reny"],hint:"It’s YOU."},
  {id:4,q:"The day we started our relatonship aapko bataya tha babyy yeh chalega na vo likhiye in numbers mai",answers:["6/9/2025","06/09/2025","6-9-2025","06-09-2025","6.9.2025","06.09.2025","6/09/2025","06/9/2025"],hint:"September ka 6."},
  {id:5,q:"Jis din pheli baar aapke ghar pe bell baja ke bagha tha kinti baar bazaya tha bell mene in number mai likhye",answers:["4","four"],hint:"2+2."},
  {id:6,q:"Ham konsi standard mai the jab maine aapko pheli baar i love you reny kaha tha",answers:["10th","tenth","10"],hint:"Double digit."},
  {id:7,q:"Vaishno devi mata ka dhaga… aur us hath mai apke band ne ke baad mila kar total kitne hote hai? Sirf total batao",answers:["2","two"],hint:"Ek + ek."},
  {id:8,q:"Whats my fav colour babyy",answers:["green"],hint:"Whats ur favourite… is mine favourite."},
  {id:9,q:"Genuinelly tell me whats the one thing abt me u would like to change babyy think abt it and tell me jannu",type:"free",hint:"No wrong answer. Just your truth."}
];

const SECRET_LETTER =
`Aa duniya ma lakho chehra che, pan mari aankho bas tane j shodhe che.

Kismat ni aa Lal Dori aapanne madi toh lidhu, pan taro saath maru sauthi motu naseeb che.

Tu jyare maro haath pakde che ne, tyare mane laage che ke hu ghare (home) pahochi gayo chu.

Mari badhi himmat, mari badhi khushi, ane mari aakhi duniya bas tara ek smile par tikebi che.

Hu tane promise karu chu ke aa nava varsh ma, game tevi muskeli aave, hu hamesha tari dhal bani ne rahis.

Mane tara thi vadhare kaik nathi jotu, bas taro saath anant sudhi joie che.

Hu Tane Bau J Prem Karu Chu, Mari Jaan... Hu Hamesha Mate Taro J Rahis.`;

const BUCKET_LIST = [
  "Marry you. Properly. Proudly.",
  "Kiss you on a beach sunset… and take one photo we never delete.",
  "One long night drive—no phones, just us.",
  "Cook together, make a mess on purpose, and still laugh.",
  "Write vows for each other and seal them for “Future Us.”",
  "<strong>Book a spontaneous trip in one hour</strong> — pack and go.",
  "<strong>Matching tiny red-thread bracelet</strong> (our knot, our secret)."
];

/* Story captions: richer (universal) */
const STORY_CAPS = [
  {a:"You look like peace.", b:"Not the loud kind. The real kind.\nThe kind my heart trusts."},
  {a:"The kind of moment I keep.", b:"Even if the world moves fast,\nI’ll pause here with you."},
  {a:"Soft… but unforgettable.", b:"Some people don’t leave.\nThey stay in your soul."},
  {a:"Some people feel like destiny.", b:"Not because it’s easy.\nBecause it’s true."},
  {a:"My favourite reality.", b:"If I have you,\nI don’t need anything else."},
  {a:"I don’t need perfect. I need you.", b:"Your laugh.\nYour eyes.\nYour presence."},
  {a:"This is what ‘worth it’ looks like.", b:"Every wait.\nEvery fight.\nEvery comeback."},
  {a:"A quiet kind of beautiful.", b:"The kind that doesn’t beg for attention.\nIt just owns it."},
  {a:"If love had a color… it would be this.", b:"Warm.\nHonest.\nOurs."},
  {a:"I’d choose this again.", b:"Even if we restart the whole universe,\nI’ll still find you."},
  {a:"You make time feel gentle.", b:"When you exist,\nlife stops hurting so much."},
  {a:"I found home in you.", b:"Not a place.\nA feeling.\nA person."},
  {a:"Nothing loud. Just real.", b:"A love that stays.\nA love that proves itself."},
  {a:"My heart remembers this.", b:"Even on the worst days,\nthis is my light."},
  {a:"Her. Always.", b:"No matter what happens,\nI’m yours.\nI stay."}
];

const CONSTELLATION_REVEAL =
`Stars wrote your name tonight.\nAnd my heart read it like a promise.`;

/* Idea 1 - Vault letters */
const VAULT_LETTERS = [
  {
    title: "Open when you need a HUG",
    preview: "Promise: open only when you need my arms.",
    body:
`Mane khabar che, tare shabdo nathi jota, tare bas shanti joiye che.
Aa kagad nathi, aa mara haath che je tane tyare j vinte che.

Have shwaas le... anubhav kar mari warmth ne.
Maari sugandh yaad aave che? Bas evi j rite, aaje hu pavan bani ne tane bheti padayo chu.

Bas aa message padhta padhta unda shwaas le.
Evu feel kar ke maara baahu tari aaju-baju vintlayela che.

Tane hu ekdam jor thi 'Hug' kari rahyo chu,
etlu tight ke tara badha 'broken pieces' paacha jodai jay.`
  },
  {
    title: "Open when you miss me",
    preview: "Promise: open only when distance hurts.",
    body:
`Tari aankh ma thi padelu aansu maro chehra par kem bhinu lage che?

Aapdi aatma e kyar ni sarhaddo todi nakhi che Reny.
Jyare tu saas le che, tyare hu jivu chu.

Hu dur nathi... bas aankh bandh kar
ane taro haath tari gardan par mook.
Tya je 'Pulse' che ne? E mari 'Pukaar' che.

Jyare bau yaad aave ne, bas tara dil par haath rakhje…
jo dhak-dhak sambhlay che ne? E hu chu.

Mari jaan, hu tya j chu, tara ma, tari saathe.`
  },
  {
    title: "Open when you feel alone in a room full of people",
    preview: "Promise: open only when you feel unseen.",
    body:
`Jo Reny, aankho bandh kar.
Aa bheed, aa goghaat, aa badhu jhooth che.

Sach to e che ke hu tari aatma ma vijli ni jem daudi rahyo chu.
Jyare koi tane samji na sake, tyare yaad rakhje:
aa chokro e tara mauna ni ek-ek second ne potani dhadkan banavi lidhi che.

Tu ekli nathi.
Apdi 'Invisible String' hamesha tane mari saathe bandhi ne raakhe che.`
  }
];

/* Idea 8 - Capsules */
const CAPSULES = [
  {
    key: "cap_2026_09_06",
    openAt: new Date(2026, 8, 6, 0, 0, 0),
    title: "Capsule 1",
    subtitle: "Open on September 06, 2026",
    body:
`Sept 06 isn't just a date on the calendar; it is the anniversary of the moment the universe finally got something right.

We didn’t just survive another year of chaos, Reny; we conquered it. We held onto this red string through the suffocating silence, the physical distance, and the terrifying tests of time, yet today, that knot is tighter than ever before.

I realized this year that I didn't just fall for you once; I fell for you every single day we fought to stay connected.

The seasons changed, our lives changed, but the safety I feel when I see your name has remained the only constant truth in my universe.

Happy Anniversary to the beautiful collision that destroyed my loneliness and built my eternal home.`
  },
  {
    key: "cap_2026_10_12",
    openAt: new Date(2026, 9, 12, 0, 0, 0),
    title: "Capsule 2",
    subtitle: "Open on October 12, 2026",
    body:
`Today, as I turn a year older, the world will ask me what I want. But you know the answer before I even speak.

My existence only found its true meaning when you stepped into my frame.

On my birthday in 2026, I am not asking for gifts or luck; I am claiming you as my forever.

Thank you for being the only wish I ever made that actually came true.

Being 'Your Man' is the only title I want to carry for another year, and for every lifetime after this.

You are the celebration I wait for.`
  },
  {
    key: "cap_2026_11_19",
    openAt: new Date(2026, 10, 19, 0, 0, 0),
    title: "Capsule 3",
    subtitle: "Open on November 19, 2026",
    body:
`Happy Birthday, my absolute Universe.

As you read this in 2026, I want you to know that you haven't just added a year to your life; you have added an eternity to mine.

Your existence is the single strongest proof that God loves me.

I promise you, Reny, whether it’s 2026 or 2076, I will always be the man standing in the front row, cheering the loudest for your smallest victories and holding you the tightest in your silent battles.

Today, I don't just love you; I worship the stardust you are made of.

Thank you for being born.`
  }
];

/* Calm Mode */
const CALM_MESSAGES = [
`Have bas shant thai ja... ek undo shwaas le mari Baby, ane tari aakho bandh kari de.
Tane kadach laage che ke hu door chu, pan jara tara dil par haath muki ne jo... tya je 'Dhak-Dhak' sambhlay che ne? E hu j chu.

Aa udasi, aa thaak, aa badhu temporary che Janu, pan maro prem tara mate ek permanent Suraksha Kawach (shield) che.

Tane aaje badhu sahan karvani koi jarur nathi, bas mara khambha par mathu mukvani kalpana kar ane taro badho bhojo mane aapi de.

Badhu saru thai jase, hu chu ne? Hu badhu sambhali laish.

I Love You so much mari Jaan... Tu mari 'Safe Place' che, ane hu taro 'Ghar'.`,
`Aankh bandh kar… unda shwaas le.
Hu tya j chu—tara “dhak-dhak” ni andar.`,
`Tari thakan mari vastu che.
Aaje hu sambhali lais—tu bas shant thai ja, mari jaan.`
];

/* Helpers */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const pad2 = (n) => String(n).padStart(2,"0");

function fmtDuration(ms){
  const s = Math.max(0, Math.floor(ms/1000));
  const d = Math.floor(s/86400);
  const h = Math.floor((s%86400)/3600);
  const m = Math.floor((s%3600)/60);
  const ss = s%60;
  return `${d}d ${pad2(h)}h ${pad2(m)}m ${pad2(ss)}s`;
}
function normAnswer(s){
  return String(s).toLowerCase().replace(/\s+/g,"").replace(/[.,/-]/g,"");
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
function fmtNiceDate(d){
  try{ return d.toLocaleDateString(undefined, { day:"2-digit", month:"short", year:"numeric" }); }
  catch{ return String(d); }
}
function fmtCountdown(ms){
  const s = Math.max(0, Math.floor(ms/1000));
  const d = Math.floor(s/86400);
  const h = Math.floor((s%86400)/3600);
  const m = Math.floor((s%86400)/60) % 60;
  return `${d}d ${pad2(h)}h ${pad2(m)}m`;
}

/* Fail-open loader */
setTimeout(()=> $("#loader")?.classList.add("hidden"), 2800);

/* Preload (light) */
(async function preload(){
  const loader = $("#loader");
  const fill = $("#loaderFill");
  const pct = $("#loaderPct");

  const urls = [
    "assets/bg/anime-sky.jpg",
    "assets/characters/boy-idle.png",
    "assets/characters/girl-idle.png",
    "assets/characters/boy-run.png",
    "assets/characters/girl-run.png",
    "assets/characters/hug.png",
    ...Array.from({length: Math.min(6, HER_COUNT)}, (_,i)=>`assets/images/her/${pad2(i+1)}.jpg`),
    ...Array.from({length: US_MAX}, (_,i)=>`assets/images/us/${pad2(i+1)}.jpg`)
  ];

  let done=0;
  const upd=()=>{
    const p = Math.round((done/urls.length)*100);
    if(fill) fill.style.width = `${p}%`;
    if(pct) pct.textContent = `${p}%`;
  };
  upd();

  await Promise.all(urls.map(u=>new Promise((res)=>{
    const img = new Image();
    img.onload=()=>{done++;upd();res();};
    img.onerror=()=>{done++;upd();res();};
    img.src=u;
  })));

  loader?.classList.add("hidden");
})();

/* Hearts */
(function hearts(){
  const root = $("#hearts");
  if(!root) return;

  const isMobile = matchMedia("(pointer: coarse)").matches;
  const startBurst = isMobile ? 45 : 70;
  const interval = isMobile ? 560 : 460;

  function spawn(burst=false){
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "❤";
    const x = Math.random()*100;
    const drift = (Math.random()*110 - 55).toFixed(1) + "px";
    const dur = (burst ? (Math.random()*2.0 + 2.8) : (Math.random()*4.2 + 6.2)).toFixed(2) + "s";
    const delay = (Math.random()*0.55).toFixed(2) + "s";
    h.style.setProperty("--x", x + "vw");
    h.style.setProperty("--drift", drift);
    h.style.setProperty("--dur", dur);
    h.style.setProperty("--delay", delay);
    root.appendChild(h);
    setTimeout(()=>h.remove(), 16000);
  }

  for(let i=0;i<startBurst;i++) spawn(true);
  setInterval(()=> spawn(false), interval);
})();

/* Counters */
setInterval(()=>{
  const now = new Date();
  $("#sinceTop").textContent = fmtDuration(now - REL_START);
  $("#nyTop").textContent = fmtDuration(NEW_YEAR - now);
}, 1000);

/* US gallery */
(function buildUs(){
  const host = $("#usGallery");
  if(!host) return;
  host.innerHTML = "";
  for(let i=1;i<=US_MAX;i++){
    const n = pad2(i);
    const src = `assets/images/us/${n}.jpg`;
    const frame = document.createElement("div");
    frame.className = "smartFrame";
    frame.innerHTML = `<div class="smartBg"></div><img class="smartImg" loading="lazy" src="${src}" alt="">`;
    const img = frame.querySelector(".smartImg");
    const bg = frame.querySelector(".smartBg");
    img.addEventListener("load", ()=> bg.style.backgroundImage = `url('${src}')`);
    img.addEventListener("error", ()=> frame.remove());
    host.appendChild(frame);
  }
})();

/* Then&Now slider */
(function reveal(){
  const slider = $("#slider");
  const bottom = $("#revealBottom");
  if(!slider || !bottom) return;
  const apply = ()=> bottom.style.width = slider.value + "%";
  slider.addEventListener("input", apply);
  apply();
})();

/* Vault build (promise gate) */
(function vault(){
  const grid = $("#vaultGrid");
  const modal = $("#vaultModal");
  const title = $("#vaultTitle");
  const promise = $("#vaultPromise");
  const letter = $("#vaultLetter");
  const body = $("#vaultBody");
  const promiseBtn = $("#vaultPromiseBtn");
  const close1 = $("#vaultCloseBtn");
  const close2 = $("#vaultCloseBtn2");
  const backBtn = $("#vaultBackBtn");

  if(!grid || !modal || !title || !promise || !letter || !body) return;

  let pending = null;

  const openPromise = (item)=>{
    pending = item;
    title.textContent = item.title;
    body.textContent = "";
    letter.classList.add("hidden");
    promise.classList.remove("hidden");
    modal.classList.remove("hidden");
  };
  const openLetter = ()=>{
    if(!pending) return;
    body.textContent = pending.body;
    promise.classList.add("hidden");
    letter.classList.remove("hidden");
  };
  const close = ()=>{
    pending = null;
    modal.classList.add("hidden");
  };

  grid.innerHTML = "";
  VAULT_LETTERS.forEach((l)=>{
    const card = document.createElement("div");
    card.className = "vaultCard";
    card.innerHTML = `
      <div class="vaultK">OPEN WHEN</div>
      <div class="vaultT">${escapeHtml(l.title)}</div>
      <div class="vaultMini">${escapeHtml(l.preview)}</div>
    `;
    card.addEventListener("click", ()=> openPromise(l));
    grid.appendChild(card);
  });

  promiseBtn?.addEventListener("click", openLetter);
  backBtn?.addEventListener("click", ()=>{ letter.classList.add("hidden"); promise.classList.remove("hidden"); });
  close1?.addEventListener("click", close);
  close2?.addEventListener("click", close);
  modal.addEventListener("click", (e)=>{ if(e.target === modal) close(); });
})();

/* Capsules */
(function capsules(){
  const grid = $("#capsuleGrid");
  if(!grid) return;

  grid.innerHTML = "";
  CAPSULES.forEach((cap)=>{
    const card = document.createElement("div");
    card.className = "capsuleCard";
    card.dataset.key = cap.key;
    card.innerHTML = `
      <div class="capsuleSeal" aria-hidden="true"></div>
      <div class="capsuleTop">
        <h3 class="capsuleTitle">${escapeHtml(cap.title)}</h3>
        <div class="capsulePill" data-pill>—</div>
      </div>
      <div class="capsuleDate">${escapeHtml(cap.subtitle)} • ${escapeHtml(fmtNiceDate(cap.openAt))}</div>
      <div class="capsuleLockNote" data-note>—</div>
      <div class="capsuleBody" data-body>${escapeHtml(cap.body)}</div>
    `;

    const sync = ()=>{
      const now = new Date();
      const pill = card.querySelector("[data-pill]");
      const note = card.querySelector("[data-note]");
      const locked = now < cap.openAt;

      card.classList.toggle("locked", locked);

      if(locked){
        pill.textContent = "LOCKED";
        note.textContent = `Opens in ${fmtCountdown(cap.openAt - now)} • Tap to check`;
        card.classList.remove("open");
      }else{
        pill.textContent = "OPEN";
        note.textContent = "Tap to open / close.";
      }
    };

    card.addEventListener("click", ()=>{
      const now = new Date();
      if(now < cap.openAt){ sync(); return; }
      card.classList.toggle("open");
    });

    grid.appendChild(card);
    sync();
  });

  setInterval(()=>{
    CAPSULES.forEach((cap)=>{
      const card = grid.querySelector(`.capsuleCard[data-key="${cap.key}"]`);
      if(!card) return;
      const now = new Date();
      const pill = card.querySelector("[data-pill]");
      const note = card.querySelector("[data-note]");
      const locked = now < cap.openAt;

      card.classList.toggle("locked", locked);
      if(locked){
        pill.textContent = "LOCKED";
        note.textContent = `Opens in ${fmtCountdown(cap.openAt - now)} • Tap to check`;
        card.classList.remove("open");
      }else{
        pill.textContent = "OPEN";
        note.textContent = "Tap to open / close.";
      }
    });
  }, 1000);
})();

/* Poster Interaction */
const song = $("#song");
const audioHint = $("#audioHint");
const thumbHit = $("#thumbHit");
const ringProg = $("#ringProg");
const fpPaths = $$(".fpPath");

let holding = false;
let connected = false;
let rafId = null;
let holdStartTs = 0;
let safetyTimer = null;
let lastP = -1;

function setRing(p){
  const total = 289;
  ringProg.style.strokeDashoffset = String(total*(1-p));
}
function setFP(p){
  const per = 1 / fpPaths.length;
  fpPaths.forEach((path, i)=>{
    const start = i * per;
    const end = start + per;
    const local = clamp01((p - start) / (end - start));
    path.style.strokeDashoffset = String(200*(1-local));
  });
}
function showIdle(){
  $("#boyIdle").classList.remove("hidden");
  $("#girlIdle").classList.remove("hidden");
  $("#boyRun").classList.add("hidden");
  $("#girlRun").classList.add("hidden");
  $("#hugSil").classList.add("hidden");
}
function showRun(){
  $("#boyIdle").classList.add("hidden");
  $("#girlIdle").classList.add("hidden");
  $("#boyRun").classList.remove("hidden");
  $("#girlRun").classList.remove("hidden");
  $("#hugSil").classList.add("hidden");
}
function showHug(){
  $("#boyRun").classList.add("hidden");
  $("#girlRun").classList.add("hidden");
  $("#hugSil").classList.remove("hidden");
}

function spawnSparks(){
  const host = $("#sparks");
  if(!host) return;
  host.innerHTML = "";
  for(let i=0;i<28;i++){
    const s = document.createElement("div");
    s.className = "spark";
    s.style.left = "50%";
    s.style.top = "55%";
    s.style.setProperty("--dx", (Math.random()*360 - 180).toFixed(0) + "px");
    s.style.setProperty("--dy", (Math.random()*260 - 130).toFixed(0) + "px");
    s.style.animationDelay = (Math.random()*0.06).toFixed(2) + "s";
    host.appendChild(s);
  }
  setTimeout(()=> host.innerHTML = "", 1000);
}

let herBuilt = false;
function showHerGrid(){
  const wrap = $("#herWrap");
  const grid = $("#herGrid");
  if(!wrap || !grid) return;
  if(herBuilt) return;

  herBuilt = true;
  wrap.classList.remove("hidden");
  grid.innerHTML = "";

  for(let i=1;i<=HER_COUNT;i++){
    const n = pad2(i);
    const div = document.createElement("div");
    div.className = "polItem";
    div.style.setProperty("--rot", ((Math.random()*5)-2.5).toFixed(2) + "deg");
    div.innerHTML = `<img loading="lazy" src="assets/images/her/${n}.jpg" alt="">`;
    div.querySelector("img").addEventListener("error", ()=> div.remove());
    grid.appendChild(div);
  }
}

/* Story Mode: build after connect (idle) */
let storyBuilt = false;
function showStoryMode(){
  const section = $("#storyMode");
  const track = $("#storyTrack");
  if(!section || !track) return;
  if(storyBuilt) return;

  storyBuilt = true;
  section.classList.remove("locked");
  track.innerHTML = "";

  for(let i=1;i<=HER_COUNT;i++){
    const n = pad2(i);
    const src = `assets/images/her/${n}.jpg`;
    const cap = STORY_CAPS[(i-1) % STORY_CAPS.length];

    const slide = document.createElement("div");
    slide.className = "storySlide";
    slide.innerHTML = `
      <div class="storyBg" aria-hidden="true"></div>
      <img class="storyImg" loading="lazy" src="${src}" alt="">
      <div class="storyShade" aria-hidden="true"></div>
      <div class="storyCaption">
        <div class="capMain">${escapeHtml(cap.a)}</div>
        <div class="capSub">${escapeHtml(cap.b)}</div>
        <div class="capTiny">Her • Frame ${i}/${HER_COUNT}</div>
      </div>
    `;

    const img = slide.querySelector("img");
    const bg = slide.querySelector(".storyBg");
    img.addEventListener("load", ()=> bg.style.backgroundImage = `url('${src}')`);
    img.addEventListener("error", ()=> slide.remove());

    track.appendChild(slide);
  }
}

function showRevealLine(){
  const el = $("#revealLine");
  if(!el) return;
  el.textContent = CONSTELLATION_REVEAL;
  el.classList.add("show");
  setTimeout(()=> el.classList.remove("show"), 3200);
}

async function safePlaySong(){
  if(!song) return false;
  audioHint.classList.add("hidden");
  try{
    song.volume = 0.95;
    if(song.paused) await song.play();
    return true;
  }catch{
    audioHint.classList.remove("hidden");
    return false;
  }
}

function armThread(){
  ["laserL","laserR","tangle","clean","wrap","knotHeart"].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.style.strokeDasharray = "1000";
      el.style.strokeDashoffset = "1000";
    }
  });
}

function triggerBurst(){
  document.body.classList.add("boom");
  spawnSparks();
  setTimeout(()=> document.body.classList.remove("boom"), 520);
}

function holdLoop(ts){
  if(!holding || connected) return;

  if(!holdStartTs) holdStartTs = ts;
  const p = clamp01((ts - holdStartTs) / HOLD_MS);

  if(Math.abs(p - lastP) > 0.004){
    lastP = p;
    setRing(p);
    setFP(p);
  }

  if(p >= 1){
    completeConnection();
    return;
  }
  rafId = requestAnimationFrame(holdLoop);
}

function beginHold(e){
  if(connected) return;

  holding = true;
  lastP = -1;
  holdStartTs = 0;

  document.body.classList.add("holding");

  try{ thumbHit.setPointerCapture(e.pointerId); }catch{}

  showRun();
  armThread();
  safePlaySong();

  clearTimeout(safetyTimer);
  safetyTimer = setTimeout(()=>{
    if(holding && !connected) completeConnection();
  }, HOLD_MS + 220);

  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(holdLoop);
}

function resetHold(){
  if(connected) return;

  holding = false;
  document.body.classList.remove("holding");

  clearTimeout(safetyTimer);
  cancelAnimationFrame(rafId);

  setRing(0);
  setFP(0);
  showIdle();
}

function completeConnection(){
  if(connected) return;

  connected = true;
  holding = false;

  clearTimeout(safetyTimer);
  cancelAnimationFrame(rafId);

  document.body.classList.remove("holding");
  document.body.classList.add("connected");

  triggerBurst();
  showRevealLine();

  setTimeout(()=> showHug(), 220);
  $("#afterHint").classList.remove("hidden");

  // build heavy sections after connect (idle to avoid lag)
  const idle = window.requestIdleCallback || ((fn)=>setTimeout(()=>fn({timeRemaining:()=>0}), 120));
  setTimeout(()=> showHerGrid(), 550);
  idle(()=> showStoryMode());
}

thumbHit.addEventListener("pointerdown", (e)=>{ e.preventDefault(); beginHold(e); });
thumbHit.addEventListener("pointerup", ()=> { if(!connected) resetHold(); });
thumbHit.addEventListener("pointercancel", ()=> { if(!connected) resetHold(); });

$("#replayBtn").addEventListener("click", ()=>{
  connected = false;
  holding = false;

  document.body.classList.remove("connected","boom","holding");
  resetHold();
  $("#afterHint").classList.add("hidden");

  // reset HER + story
  herBuilt = false;
  $("#herWrap").classList.add("hidden");
  $("#herGrid").innerHTML = "";

  storyBuilt = false;
  $("#storyMode").classList.add("locked");
  $("#storyTrack").innerHTML = "";

  try{
    song.pause();
    song.currentTime = 0;
  }catch{}
});

/* ---------------- Timeline + lock game ---------------- */
function loadState(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch{ return {}; }
}
function saveState(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }

let state = loadState();
if(!state.unlocked) state.unlocked = {};
if(!state.attempts) state.attempts = {};

function unlockedCount(){ return Object.keys(state.unlocked).length; }
function setProgressUI(){
  $("#progressPill").textContent = `Unlocked: ${unlockedCount()}/9`;
  $("#secretPill").textContent = unlockedCount()>=9 ? "Hidden letter: Unlocked" : "Hidden letter: Locked";
}
function revealSecret(){
  if(unlockedCount() < 9) return;
  $("#secretArea").classList.remove("locked");
  $("#gujLetter").textContent = SECRET_LETTER;
  $("#bucketList").innerHTML = BUCKET_LIST.map(x=>`<li>${x}</li>`).join("");
}

async function loadTimeline(){
  const note = $("#timelineNote");
  const host = $("#timelineCards");
  host.innerHTML = "";
  let data = null;

  try{
    const res = await fetch("timeline.json", { cache:"no-store" });
    data = await res.json();
    note.textContent = "";
  }catch{
    note.textContent = "Timeline didn’t load. Use Netlify or VS Code Live Server.";
    data = [];
  }

  if(!Array.isArray(data) || data.length === 0){
    data = [{date:"2025-09-06", title:"The Collision", desc:"The day everything changed."}];
  }

  data.sort((a,b)=> new Date(a.date) - new Date(b.date));
  const items = data.slice(0,9).map((ev, idx)=>({ev, lock: LOCKS[idx]}));

  items.forEach(({ev, lock})=>{
    const id = lock.id;
    const isUnlocked = !!state.unlocked[id];

    const dt = new Date(ev.date);
    const nice = isNaN(dt) ? ev.date : dt.toLocaleDateString(undefined, { day:"2-digit", month:"short", year:"numeric" });

    const card = document.createElement("div");
    card.className = "tCard " + (isUnlocked ? "unlocked" : "locked");
    card.dataset.id = String(id);
    card.innerHTML = `
      <div class="lockBadge">${isUnlocked ? "UNLOCKED" : "LOCKED"}</div>
      <div class="tDate">${nice}</div>
      <div class="tTitle">${escapeHtml(ev.title||"")}</div>
      <div class="tDesc">${escapeHtml(ev.desc||"")}</div>
    `;
    card.addEventListener("click", ()=>{
      if(state.unlocked[id]) return;
      openModal(id, lock);
    });
    host.appendChild(card);
  });

  setProgressUI();
  revealSecret();
}
loadTimeline();

/* Modal */
const modal = $("#modal");
const modalQ = $("#modalQ");
const modalInput = $("#modalInput");
const modalHint = $("#modalHint");
const modalErr = $("#modalErr");
const hintBtn = $("#hintBtn");

let currentLockId = null;
let currentLock = null;

function openModal(id, lock){
  currentLockId = id;
  currentLock = lock;
  modalQ.textContent = lock.q;
  modalInput.value = "";
  modalErr.textContent = "";
  modalHint.textContent = lock.hint || "";
  modalHint.classList.add("hidden");
  hintBtn.classList.add("hidden");
  const tries = state.attempts[id] || 0;
  if(tries >= 2) hintBtn.classList.remove("hidden");
  modal.classList.remove("hidden");
  setTimeout(()=> modalInput.focus(), 50);
}
function closeModal(){
  currentLockId = null;
  currentLock = null;
  modal.classList.add("hidden");
}
$("#closeBtn").addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
hintBtn.addEventListener("click", ()=> modalHint.classList.remove("hidden"));

$("#submitBtn").addEventListener("click", ()=>{
  if(!currentLock || !currentLockId) return;
  const id = currentLockId;
  const lock = currentLock;

  const raw = modalInput.value || "";
  const cleaned = normAnswer(raw);

  if(lock.type === "free"){
    if(cleaned.length < 2){
      modalErr.textContent = "Thoda aur likho babyy 🙂";
      return;
    }
    state.unlocked[id] = true;
    saveState(state);
    closeModal();
    updateAfterUnlock(id);
    return;
  }

  const ok = (lock.answers||[]).some(ans => normAnswer(ans) === cleaned);
  if(ok){
    state.unlocked[id] = true;
    saveState(state);
    closeModal();
    updateAfterUnlock(id);
  }else{
    state.attempts[id] = (state.attempts[id]||0) + 1;
    saveState(state);
    modalErr.textContent = "Wrong babyy… again 😈";
    if(state.attempts[id] >= 2) hintBtn.classList.remove("hidden");
  }
});

function updateAfterUnlock(id){
  const card = document.querySelector(`.tCard[data-id="${id}"]`);
  if(card){
    card.classList.remove("locked");
    card.classList.add("unlocked");
    card.querySelector(".lockBadge").textContent = "UNLOCKED";
  }
  setProgressUI();
  revealSecret();
  if(unlockedCount() >= 9){
    setTimeout(()=> $("#secretArea").scrollIntoView({behavior:"smooth"}), 450);
  }
}

$("#toFinalBtn").addEventListener("click", ()=> $("#finalTyping").scrollIntoView({behavior:"smooth"}));

/* Print letter */
$("#printLetterBtn")?.addEventListener("click", ()=> window.print());

/* Calm Mode */
(function calmMode(){
  const btn = $("#calmFab");
  const modal = $("#calmModal");
  const text = $("#calmText");
  const nextBtn = $("#calmNextBtn");
  const closeBtn = $("#calmCloseBtn");

  if(!btn || !modal || !text || !nextBtn || !closeBtn) return;

  let idx = 0;

  const open = ()=>{
    text.textContent = CALM_MESSAGES[idx % CALM_MESSAGES.length];
    modal.classList.remove("hidden");
  };
  const close = ()=> modal.classList.add("hidden");
  const next = ()=>{
    idx = (idx + 1) % CALM_MESSAGES.length;
    text.textContent = CALM_MESSAGES[idx];
  };

  btn.addEventListener("click", open);
  nextBtn.addEventListener("click", next);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e)=>{ if(e.target === modal) close(); });
})();

/* Final typing + credits + kiss (RESTORED) */
function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }
let audioCtx = null;

function beep(freq=1200, dur=0.03, gain=0.03){
  try{
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return;
    if(!audioCtx) audioCtx = new AC();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type="triangle"; o.frequency.value=freq;
    g.gain.value=gain;
    o.connect(g).connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + dur);
  }catch{}
}

async function typeText(el, text, speed=22){
  for(let i=0;i<text.length;i++){
    el.textContent += text[i];
    beep(1200, 0.02, 0.02);
    const jitter = (Math.random()*18 - 9);
    await sleep(Math.max(6, speed + jitter));
  }
}
async function backspace(el, count){
  for(let i=0;i<count;i++){
    el.textContent = el.textContent.slice(0,-1);
    beep(650, 0.02, 0.02);
    await sleep(9);
  }
}

let finalStarted = false;
async function runFinalSequence(){
  if(finalStarted) return;
  finalStarted = true;

  const el = $("#typeTarget");
  el.textContent = "";

  const seq1 = [
    "Happy New Year, Reny.\n",
    "Our story started on Sept 06.\n",
    "I promise to make you happy.\n"
  ];
  for(const line of seq1){ await typeText(el, line, 22); await sleep(380); }

  await sleep(700);
  await backspace(el, el.textContent.length);
  await sleep(420);

  const seq2 = [
    "No, that's too simple.\n",
    "Actually, it started lifetimes ago… and I kept choosing you.\n\n"
  ];
  for(const line of seq2){ await typeText(el, line, 21); await sleep(420); }

  const finalLines = [
    "2025 gave me You.\n",
    "But one lifetime isn't enough.\n",
    "I don't just want a New Year with you.\n",
    "I want a thousand years.\n",
    "Be mine. Forever.\n",
    "2026 is just another page in our book.\n",
    "I promise to never let go of this knot.\n",
    "I love you, my Destiny.\n",
    "From Sept 06 to my last breath...\n",
    "It’s all for you.\n",
    "Happy New Year, Meri Jaan.\n"
  ];
  for(const line of finalLines){ await typeText(el, line, 20); await sleep(360); }

  maybeFireworks();
  setTimeout(()=> startCreditsThenOutro(), 900);
}

const finalSection = $("#finalTyping");
if(finalSection){
  const io = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      runFinalSequence();
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(finalSection);
}

function startCreditsThenOutro(){
  $("#credits").classList.remove("hidden");
  setTimeout(()=>{
    $("#credits").classList.add("hidden");
    $("#kissOutro").classList.remove("hidden");
  }, 22500);
}

/* Fireworks only on Dec 31 / Jan 1 */
function isNewYearWindow(){
  const now = new Date();
  const m = now.getMonth();
  const d = now.getDate();
  return (m===11 && d===31) || (m===0 && d===1);
}
function maybeFireworks(){
  const fw = $("#fireworks");
  if(!fw || !isNewYearWindow()) return;

  fw.classList.remove("hidden");
  const ctx = fw.getContext("2d");
  const dpr = Math.min(devicePixelRatio||1, 1.5);

  const resize = ()=>{
    fw.width = Math.floor(fw.clientWidth*dpr);
    fw.height = Math.floor(fw.clientHeight*dpr);
  };
  resize();
  window.addEventListener("resize", resize);

  let bursts=[];
  const spawn=()=>{
    const x = (0.2+Math.random()*0.6)*(fw.width/dpr);
    const y = (0.15+Math.random()*0.35)*(fw.height/dpr);
    const n = 45 + Math.floor(Math.random()*35);
    const parts=[];
    for(let i=0;i<n;i++){
      const a = Math.random()*Math.PI*2;
      const sp = 1.6 + Math.random()*3.2;
      parts.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1});
    }
    bursts.push(parts);
  };

  const start = performance.now();
  const draw=(t)=>{
    ctx.clearRect(0,0,fw.width,fw.height);
    ctx.globalCompositeOperation="lighter";
    if(Math.random()<0.05) spawn();

    bursts.forEach(parts=>{
      parts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy; p.vy+=0.03; p.life-=0.016;
        if(p.life<=0) return;
        const a=p.life;
        ctx.globalAlpha=0.18*a;
        ctx.fillStyle="rgba(255,0,24,1)";
        ctx.beginPath(); ctx.arc(p.x*dpr,p.y*dpr,5*dpr,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha=0.85*a;
        ctx.fillStyle="rgba(255,255,255,0.8)";
        ctx.beginPath(); ctx.arc(p.x*dpr,p.y*dpr,1.5*dpr,0,Math.PI*2); ctx.fill();
      });
    });
    bursts = bursts.map(parts=>parts.filter(p=>p.life>0)).filter(parts=>parts.length>0);

    if(t-start<8000) requestAnimationFrame(draw);
    else fw.classList.add("hidden");
  };
  requestAnimationFrame(draw);
}