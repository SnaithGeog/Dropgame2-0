
const questions = [
    {
        story: "My disastrous day began when I woke up in the staff room, absolutely famished. I called Mrs. Gravel for advice. 'Harrison!' she yelled. 'Stop eating dusty cereal! Run to the Co-op in Snaith and get some proper bacon!' I obeyed instantly and ran all the way down Pontefract Road.",
        question: "How much did Mr. Harrison pay the Co-op for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back with my bacon, I found 6 duck eggs near the pond. Miss McCloud suddenly burst out of the science block. 'Harrison! I need those eggs for a volatile custard experiment!' she screamed, shoving cash into my hand and running off with them.",
        question: "How much did Miss McCloud pay Mr. Harrison for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Flush with cash from the egg deal, I strutted into the IT office. Mr. Haggar looked up. 'You can't be a high-roller with that ancient phone,' he scoffed. 'You need the prototype iPhone 17 Pro Max (1TB). It's the only thing compatible with the new school Wi-Fi.'",
        question: "How much did Mr. Harrison pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "Desperate to test my new phone, I called Mr. Ward. 'I'm bored,' I moaned. 'Perfect timing,' Mr. Ward replied. 'Buy my Saddleback pig. It's eating all the Year 7 homework and needs to go before Ofsted arrives.'",
        question: "How much did Mr. Harrison pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "I shoved the pig into my 2020 Audi A3, but the fuel light pinged. I swung by the garage in Snaith. I started filling up while Mrs. Kilner watched from the kiosk, shaking her head and tutting loudly at my terrible parallel parking.",
        question: "How much did Mr. Harrison pay for the full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "With a pig in the car, I needed space. I drove to a farm outside Snaith where Mr. Collins was weeping into a bucket. 'Harrison! The marking load is too high! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire!' It seemed like the perfect home for my pig, so I agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "Now I owned a farm, but the stallion looked hangry. I called Mrs. Edge. 'Do horses eat bacon?' I asked. Mrs. Edge sighed deeply. 'No, Harrison, you fool. I'm bringing a bale of premium hay. Meet me at the gate.'",
        question: "How much did Mr. Harrison pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "I was now broke from buying the farm. I asked Mr. Francis for a business plan. 'Simple,' he declared, putting on a riding helmet. 'We use the horse to start an Elite Riding School. We'll charge the parents a fortune.'",
        question: "How much did Mr. Harrison charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the very first lesson, I tripped over the pig and snapped my leg. 'Help!' I cried. Miss Maguinness looked up from her book. 'I have a foil blanket in my bag, Harrison, but nothing in this life is free.'",
        question: "How much did Mr. Harrison pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was gridlocked and the ambulance couldn't get through! I rang Mrs. Yates screaming. 'Sort it out!' Mrs. Yates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter online.",
        question: "How much did Mrs. Yates pay for the helicopter?",
        options: { a: "£1.2 Million", b: "£2.6 Million", c: "£20 Million", d: "£200 Million" },
        correct: "b"
    },
    {
        story: "Mrs. Yates landed the chopper on the school field, threw me in the back, and flew me directly to Hull Royal Infirmary with impressive speed.",
        question: "How long did the helicopter journey take?",
        options: { a: "3 Mins", b: "5 Mins", c: "10 Mins", d: "30 Seconds" },
        correct: "c"
    },
    {
        story: "At Hull Royal, I fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Delirious from the pain, I wondered if Mr. Baines was actually a secret Hollywood superstar.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air to recover from that leg break,' whispered Mr. Baines. 'Let's go to Hull Marina right now and buy a boat.' High on gas and air, I handed over my wallet without hesitation.",
        question: "How much did Mr. Harrison pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "I stood on the deck of my new yacht, but I felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat, Harrison,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did Mr. Harrison pay Mr. Wilson for the Golden Hat?",
        options: { a: "£50", b: "£500", c: "£5,000", d: "£15.99" },
        correct: "b"
    },
    {
        story: "I finally passed out in the captain's quarters. I woke up back in my classroom, cold and alone. I checked my bank balance and realized I had spent a fortune based on terrible advice from the Snaith School staff.",
        question: "Calculate total spending (Bacon, iPhone, Pig, Fuel, Farm, Hay, Blanket, Helicopter, Yacht, Hat).",
        options: { a: "£149,102,248.82", b: "148,100,222", c: "179,676,221.86", d: "220,228,112.98" },
        correct: "a"
    }
];

let idx = 0;

// Elements
const el = {
  screens: {
    start: document.getElementById('screen-start'),
    game: document.getElementById('screen-game'),
    end: document.getElementById('screen-end')
  },
  btns: {
    enter: document.getElementById('btn-enter'),
    reveal: document.getElementById('btn-reveal'),
    next: document.getElementById('btn-next'),
    replay: document.getElementById('btn-play-again')
  },
  text: {
    story: document.getElementById('story-text'),
    question: document.getElementById('question-text'),
    count: document.getElementById('q-count'),
    final: document.getElementById('final-message')
  },
  options: {
    a: document.getElementById('opt-a'),
    b: document.getElementById('opt-b'),
    c: document.getElementById('opt-c'),
    d: document.getElementById('opt-d')
  },
  cards: {
    a: document.getElementById('opt-a-card'),
    b: document.getElementById('opt-b-card'),
    c: document.getElementById('opt-c-card'),
    d: document.getElementById('opt-d-card')
  },
  audio: {
    intro: document.getElementById('music-intro'),
    game: document.getElementById('music-game')
  }
};

// --- FUNCTIONS ---

function switchScreen(screenName) {
  Object.values(el.screens).forEach(s => s.classList.remove('active'));
  el.screens[screenName].classList.add('active');
}

async function playAudio(type) {
  try {
    if (type === 'intro') {
      el.audio.game.pause();
      el.audio.game.currentTime = 0;
      await el.audio.intro.play();
    } else if (type === 'game') {
      el.audio.intro.pause();
      el.audio.intro.currentTime = 0;
      await el.audio.game.play();
    }
  } catch (e) {
    console.warn("Audio autoplay blocked or file missing:", e);
  }
}

function loadQuestion() {
  const q = questions[idx];

  // Update Text
  el.text.count.innerText = idx + 1;
  el.text.story.innerText = q.story;
  el.text.question.innerText = q.question;

  el.options.a.innerText = q.options.a;
  el.options.b.innerText = q.options.b;
  el.options.c.innerText = q.options.c;
  el.options.d.innerText = q.options.d;

  // Reset UI
  Object.values(el.cards).forEach(c => c.classList.remove('correct'));
  el.btns.reveal.classList.remove('hidden');
  el.btns.next.classList.add('hidden');
}

function revealAnswer() {
  const correctKey = questions[idx].correct; // 'a', 'b', etc.
  el.cards[correctKey].classList.add('correct');

  el.btns.reveal.classList.add('hidden');
  el.btns.next.classList.remove('hidden');
}

function nextQuestion() {
  idx++;
  if (idx < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  playAudio('intro'); // Play intro music for ending
  el.text.final.innerHTML = "I now owe <b>£149,102,248.82</b>.<br><br>Mrs. Yates is absolutely furious.<br>Well done Snaith School!";
  switchScreen('end');
}

function resetGame() {
  idx = 0;
  playAudio('game');
  switchScreen('game');
  loadQuestion();
}

// --- EVENT LISTENERS ---

el.btns.enter.addEventListener('click', () => {
  // Try to play intro music, but move screen regardless
  playAudio('intro'); 
  resetGame();
});

el.btns.reveal.addEventListener('click', revealAnswer);
el.btns.next.addEventListener('click', nextQuestion);
el.btns.replay.addEventListener('click', resetGame);
