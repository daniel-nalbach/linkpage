const coreLinks = [{
    title: "Draft",
    url: "http://draftin.com"
  },
  {
    title: "Duo Lingo",
    url: "http://www.duolingo.com"
  },
  {
    title: "IXL",
    url: "http://www.ixl.com"
  },
  {
    title: "Khan Academy",
    url: "http://www.khanacademy.com"
  },
  {
    title: "Typing Club",
    url: "http://nalbach.typingclub.com"
  },
  {
    title: "Wordly Wise 3000",
    url: "https://hsbc.epsbooks.com/academy/login.do?cid=HSBC&database=db01"
  }
];

const nonLinks = [{
    title: "Advanced Fiction Writing",
    url: "https://www.advancedfictionwriting.com/"
  },
  {
    title: "All Recipes",
    url: "http://www.allrecipes.com"
  },
  {
    title: "Calvary Bible Church",
    url: "http://www.cbctn.org"
  },
  {
    title: "Chatzy",
    url: "http://www.chatzy.com"
  },
  {
    title: "Code School",
    url: "http://www.codeschool.com"
  },
  {
    title: "Color Picker",
    url: "https://www.materialui.co/color-picker"
  },
  {
    title: "Draw 3D",
    url: "https://draw3d.com"
  },
  {
    title: "Google Maps - Full Screen",
    url: "http://www.fullscreensearch.com"
  },
  {
    title: "GotQuestions.org",
    url: "https://www.gotquestions.org/"
  },
  {
    title: "Grace To You",
    url: "http://www.gty.org"
  },
  {
    title: "Fact Dash",
    url: "https://www.mhschool.com/math/2009/ca/assets/factdash.html"
  },
  {
    title: "Karate",
    url: "https://www.dropbox.com/home/Karate"
  },
  {
    title: "Kids Answers",
    url: "http://kidsanswers.org"
  },
  {
    title: "Macaulay Library",
    url: "https://www.macaulaylibrary.org"
  },
  {
    title: "My Test Point (Christian Liberty)",
    url: "http://www.mytestpoint.net"
  },
  {
    title: "Rand Mcnally Maps",
    url: "http://maps.randmcnally.com"
  },
  {
    title: "Solar System Scope",
    url: "http://www.solarsystemscope.com/"
  },
  {
    title: "Wikipedia",
    url: "http://www.wikipedia.com"
  }
];
const supportLinks = [{
    title: "10 Fast Fingers",
    url: "http://www.10fastfingers.com"
  },
  {
    title: "Arithmetic",
    url: "http://arithmetic.zetamac.com"
  },
  {
    title: "BibleHub",
    url: "http://www.biblehub.com"
  },
  {
    title: "Brittanica School",
    url: "http://school.eb.com"
  },
  {
    title: "Chess Kid",
    url: "http://www.chesskid.com"
  },
  {
    title: "Dictionary.com",
    url: "http://www.dictionary.com"
  },
  {
    title: "ESV Bible",
    url: "http://www.esv.org"
  },
  {
    title: "Kids Email",
    url: "http://kids.kidsemail.org"
  },
  {
    title: "Learn That Word",
    url: "http://www.learnthat.org"
  },
  {
    title: "Memrise",
    url: "http://www.memrise.com"
  },
  {
    title: "Quill",
    url: "http://www.quill.org"
  },
  {
    title: "Rewordify",
    url: "http://www.rewordify.com"
  },
  {
    title: "SoloLearn",
    url: "http://www.sololearn.com"
  },
  {
    title: "The Punctuation Guide",
    url: "http://www.thepunctuationguide.com"
  },
  {
    title: "Timer-Tab",
    url: "http://www.timer-tab.com"
  },
  {
    title: "Typing Arena",
    url: "http://www.typingarena.com"
  },
  {
    title: "Vocabulary.com",
    url: "http://www.vocabulary.com"
  },
  {
    title: "Zoho Docs",
    url: "http://www.zoho.com"
  },
  {
    title: "Z-Type",
    url: "http://zty.pe"
  }
];

Vue.component('category', {
  props: ['header', 'links', 'type'],
  template: `
    <div>
      <h3>{{header}}</h3>
      <a v-for="link in links" :href="link.url" target="_blank">{{link.title}}</a>
    </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    column: 'flex-column',
    core: 'core',
    coreLinks: coreLinks,
    non: 'non',
    support: 'supporting'
  }
})

console.log('test');
