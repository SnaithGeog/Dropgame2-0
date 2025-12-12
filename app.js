
const questions = [
    {
        story: "Mr. Harrison woke up in the staff room this morning absolutely famished. He called Mrs. Gravel for nutritional advice. She yelled, 'Harrison, stop eating dusty cereal! Run to the Co-op in Snaith and get some proper bacon!' Mr. Harrison obeyed instantly and ran all the way down Pontefract Road.",
        question: "How much did Mr. Harrison pay the Co-op for 6 slices of bacon?",
        options: { a: "£25", b: "20p", c: "£1.46", d: "£2.50" },
        correct: "d"
    },
    {
        story: "Walking back to school, Mr. Harrison found 6 duck eggs near the pond. Suddenly, Miss McCloud burst out of the science block wearing safety goggles. 'Harrison! I need those eggs for a highly volatile experiment involving custard!' she screamed, shoving cash into his hand.",
        question: "How much did Miss McCloud pay Mr. Harrison for the 6 duck eggs?",
        options: { a: "£5", b: "£2.50", c: "30p", d: "£1,500" },
        correct: "b"
    },
    {
        story: "Feeling flush with his egg money, Mr. Harrison strutted into the IT office. Mr. Haggar looked up from his screens. 'Harrison, you can't be seen with that ancient phone,' he scoffed. 'You need the prototype iPhone 17 Pro Max (1TB). It's the only thing compatible with the new school Wi-Fi.'",
        question: "How much did Mr. Harrison pay Mr. Haggar for the iPhone 17 Pro Max?",
        options: { a: "£1,599", b: "£979", c: "£279", d: "£67.90" },
        correct: "a"
    },
    {
        story: "With his new phone, Mr. Harrison called Mr. Ward. 'I'm bored in my free period,' Mr. Harrison moaned. 'Buy my Saddleback pig,' Mr. Ward replied. 'It's eating all the marking and I need it gone before the Ofsted inspection starts tomorrow.'",
        question: "How much did Mr. Harrison pay Mr. Ward for the pig?",
        options: { a: "£200", b: "£65", c: "£25", d: "£2000" },
        correct: "b"
    },
    {
        story: "Mr. Harrison jumped into his 2020 Audi A3 to collect the pig. He swung by the garage in Snaith. He started filling up while Mrs. Kilner watched from the kiosk, shaking her head and tutting loudly at his terrible parallel parking.",
        question: "How much did Mr. Harrison pay Mrs. Kilner for the full tank of fuel?",
        options: { a: "£5", b: "£75", c: "£578", d: "£25" },
        correct: "b"
    },
    {
        story: "He arrived at the farm just outside Snaith to find Mr. Collins weeping into a bucket. 'Harrison, the marking load is too high! I can't take it! Buy my 9.5 acres and Ms. Wilson's wild stallion so I can retire to the Cotswolds!' Feeling generous, Mr. Harrison agreed.",
        question: "How much did Mr. Harrison pay Mr. Collins for the farm?",
        options: { a: "£200,000", b: "£1.6 Billion", c: "£500,000", d: "£1.5 Million" },
        correct: "d"
    },
    {
        story: "The stallion, Bruce, looked hangry. Mr. Harrison called Mrs. Edge in a panic. 'Do horses eat leftover school lasagna?' Mrs. Edge sighed deeply. 'No, Harrison, you fool. I'm bringing a bale of premium hay. Meet me at the gate and don't be late.'",
        question: "How much did Mr. Harrison pay Mrs. Edge for the hay?",
        options: { a: "£1", b: "£5.20", c: "£10", d: "£15" },
        correct: "b"
    },
    {
        story: "To pay off his mounting debts, Mr. Harrison asked Mr. Francis for a business strategy. 'Simple,' declared Mr. Francis, putting on a riding helmet. 'We start an Elite Riding School. We'll charge the parents a fortune for 45 minutes of terror.'",
        question: "How much did Mr. Harrison charge for a 45min riding lesson?",
        options: { a: "£58", b: "£78", c: "£28", d: "£38" },
        correct: "c"
    },
    {
        story: "During the very first lesson, Mr. Harrison tripped over a bucket and snapped his leg. 'Help!' he cried. Miss Maguinness looked up from her book. 'I have a foil blanket in my bag, Harrison, but nothing in this life is free.'",
        question: "How much did Mr. Harrison pay Miss Maguinness for the foil blanket?",
        options: { a: "£2.12", b: "£1.11", c: "£0.10p", d: "£0.35p" },
        correct: "a"
    },
    {
        story: "The Snaith traffic was gridlocked! The ambulance couldn't get through. Mr. Harrison rang Mrs. Yates screaming. 'Sort it out!' Mrs. Yates rolled her eyes, grabbed the school credit card, and bought an AgustaWestland A109SP Helicopter online.",
        question: "How much did Mrs. Yates pay for the helicopter?",
        options: { a: "£1.2 Million", b: "£2.6 Million", c: "£20 Million", d: "£200 Million" },
        correct: "b"
    },
    {
        story: "Mrs. Yates landed the chopper on the school field, threw Mr. Harrison in the back, and flew him directly to Hull Royal Infirmary with impressive speed.",
        question: "How long did the helicopter journey take?",
        options: { a: "3 Mins", b: "5 Mins", c: "10 Mins", d: "30 Seconds" },
        correct: "c"
    },
    {
        story: "At Hull Royal, Mr. Harrison fell dramatically into the arms of an orderly... who looked exactly like Mr. Baines dressed as Thor! Delirious from the pain, Mr. Harrison wondered if Mr. Baines was actually a secret Hollywood superstar.",
        question: "What is the net worth of Chris Hemsworth (Thor)?",
        options: { a: "£12 Million", b: "£96 Million", c: "£154 Million", d: "£26 Million" },
        correct: "c"
    },
    {
        story: "'You need sea air to recover,' whispered Mr. Baines. 'Let's go to Hull Marina right now and buy a boat.' High on gas and air, Mr. Harrison handed over his wallet without hesitation.",
        question: "How much did Mr. Harrison pay for the Luxury Super Yacht?",
        options: { a: "£2 Million", b: "£500 Million", c: "£145 Million", d: "£84 Million" },
        correct: "c"
    },
    {
        story: "Standing on the deck of his new yacht, Mr. Harrison felt underdressed. Mr. Wilson appeared from below deck holding a sparkling object. 'You can't be a captain without the Golden Captain's Hat, Harrison,' Mr. Wilson insisted. 'It's tradition.'",
        question: "How much did Mr. Harrison pay Mr. Wilson for the Golden Hat?",
        options: { a: "£50", b: "£500", c: "£5,000", d: "£15.99" },
        correct: "b"
    },
    {
        story: "Mr. Harrison finally passed out in the captain's quarters. He woke up back in his classroom, cold and alone. He checked his bank balance and realized he had spent a fortune based on terrible advice from the Snaith School staff.",
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

function updateLadder() {
    // Clear active classes
    const rungs = document.querySelectorAll('.rung');
    rungs.forEach(r => r.classList.remove('active'));

    // Highlight current level (idx + 1)
    const currentLevel = idx + 1;
    const activeRung = document.querySelector(`.rung[data-level="${currentLevel}"]`);
    if(activeRung) activeRung.classList.add('active');
}

function loadQuestion() {
  const q = questions[idx];
  updateLadder();

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
  const correctKey = questions[idx].correct; 
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

function launchConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#d4af37', '#ffffff', '#ff9900', '#0044cc'];

    for (let i = 0; i < 150; i++) {
        const div = document.createElement('div');
        div.classList.add('confetti');
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDuration = (Math.random() * 3 + 2) + 's';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(div);
    }
}

function endGame() {
  playAudio('intro'); 
  el.text.final.innerHTML = "Mr. Harrison owes <b>£149,102,248.82</b>.<br><br>Mrs. Yates is absolutely furious.<br>Well done Snaith School!";
  switchScreen('end');
  launchConfetti();
}

function resetGame() {
  idx = 0;
  playAudio('game');
  switchScreen('game');
  loadQuestion();
}

// --- EVENT LISTENERS ---

el.btns.enter.addEventListener('click', () => {
  resetGame();
});

el.btns.reveal.addEventListener('click', revealAnswer);
el.btns.next.addEventListener('click', nextQuestion);
el.btns.replay.addEventListener('click', resetGame);
