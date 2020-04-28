const decks = [
  {
    id: 1,
    name: "Definite Article",
    category: {
      id: 1,
      name: "General",
    },
    cards: [
      {
        id: 1,
        front: "ὁ",
        back: ["Nominative", "M", "(s.)"],
      },
      {
        id: 2,
        front: "τόν",
        back: ["Accusative", "M", "(s.)"],
      },
      {
        id: 3,
        front: "τοῠ",
        back: ["Genitive", "M or N", "(s.)"],
      },
      {
        id: 4,
        front: "τῷ",
        back: ["Dative", "M or N", "(s.)"],
      },
      {
        id: 5,
        front: "ή",
        back: ["Nominative", "F", "(s.)"],
      },
      {
        id: 6,
        front: "τήν",
        back: ["Accusative", "F", "(s.)"],
      },
      {
        id: 7,
        front: "τῆς",
        back: ["Genitive", "F", "(s.)"],
      },
      {
        id: 8,
        front: "τῇ",
        back: ["Dative", "F", "(s.)"],
      },
      {
        id: 9,
        front: "τό",
        back: ["Nominative or Accusative", "N", "(s.)"],
      },
      {
        id: 10,
        front: "οί",
        back: ["Nominative", "M", "(pl.)"],
      },
      {
        id: 11,
        front: "τούς",
        back: ["Accusative", "M", "(pl.)"],
      },
      {
        id: 12,
        front: "τῶν",
        back: ["Genative", "M or F or N", "(pl.)"],
      },
      {
        id: 13,
        front: "τοῖς",
        back: ["Dative", "M or N", "(pl.)"],
      },
      {
        id: 14,
        front: "αί",
        back: ["Nominatve", "F", "(pl.)"],
      },
      {
        id: 15,
        front: "τᾱς",
        back: ["Accusative", "F", "(pl.)"],
      },
      {
        id: 16,
        front: "ταῖς",
        back: ["Dative", "F", "(pl.)"],
      },
      {
        id: 17,
        front: "τά",
        back: ["Nominative or Accusative", "N", "(pl.)"],
      },
    ],
  },
  {
    id: 2,
    name: "εἰμί",
    category: {
      id: 1,
      name: "General",
    },
    cards: [
      {
        id: 1,
        front: "εἰμί",
        back: ["I Am", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "εἶ",
        back: ["You are", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "ἐστί(ν)",
        back: ["He/She/It is", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "ἐσμέν",
        back: ["We are", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "ἐστέ",
        back: ["You are", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "εἰσί(ν)",
        back: ["They are", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 3,
    name: "οἶδα",
    category: {
      id: 1,
      name: "General",
    },
    cards: [
      {
        id: 1,
        front: "οἶδα",
        back: ["I Know", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "οἶσθα",
        back: ["You Know", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "οἶδε",
        back: ["He/She/it Knows", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "ἴσμεν",
        back: ["We Know", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "ἴστε",
        back: ["You Know", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "ἴσασι(ν)",
        back: ["They Know", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 4,
    name: "Uncontracted Verbs",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "βαίνω",
        back: ["I Go", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "βαίνεις",
        back: ["You Go", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "βαίνει",
        back: ["He/She/it Goes", "First Person", "(s)"],
      },
      {
        id: 4,
        front: "βαίνομεν",
        back: ["We Go", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "βαίνετε",
        back: ["You Go", "First Person", "(pl)"],
      },
      {
        id: 6,
        front: "βαίνουσι(ν)",
        back: ["They Go", "First Person", "(pl)"],
      },
    ],
  },
  {
    id: 5,
    name: "α Contract Verbs",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "ὁρῶ",
        back: ["I See", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "ὁρᾷς",
        back: ["You See", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "ὁρᾷ",
        back: ["He/She/It Sees", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "ὁρῶμεν",
        back: ["We See", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "ὁρᾶτε",
        back: ["You See", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "ὁρῶσι(ν)",
        back: ["They See", "First Person", "(pl)"],
      },
    ],
  },
  {
    id: 6,
    name: "ε Contract Verbs",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "ποιῶ",
        back: ["I Do", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "ποιεῖς",
        back: ["You Do", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "ποιεῖ",
        back: ["He/She/It Does", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "ποιοῦμεν",
        back: ["We Do", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "ποιεῖτε",
        back: ["You Do", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "ποιοῦσι(ν)",
        back: ["They See", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 7,
    name: "ο Contract Verbs",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "δηλῶ",
        back: ["I Show", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "δηλοῖς",
        back: ["You Show", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "δηλοῖ",
        back: ["He/She/It Sees", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "δηλοῦμεν",
        back: ["We See", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "δηλοῦτε",
        back: ["You See", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "δηλοῦσι(ν)",
        back: ["They See", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 8,
    name: "2nd Declension A",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "ἄνθρωπος",
        back: ["Nominative", "(s)"],
      },
      {
        id: 2,
        front: "ἄνθρωπον",
        back: ["Accusative", "(s)"],
      },
      {
        id: 3,
        front: "ἀνθρωπου",
        back: ["Genitive", "(s)"],
      },
      {
        id: 4,
        front: "ἀνθρωπῳ",
        back: ["Dative", "(s)"],
      },
      {
        id: 5,
        front: "ὦ ἄνθρωπε",
        back: ["Vocative", "(s)"],
      },
      {
        id: 6,
        front: "ἄνθρωποι",
        back: ["Nominative", "(pl)"],
      },
      {
        id: 7,
        front: "ἀνθρώπους",
        back: ["Accusative", "(pl)"],
      },
      {
        id: 8,
        front: "ἀνθρώπων",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 9,
        front: "ἀνθρώποις",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 9,
    name: "2nd Declension B",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "ἔργ-ον",
        back: ["Nominative or Accusative", "(s)"],
      },
      {
        id: 2,
        front: "ἔργ-ου",
        back: ["Genitive", "(s)"],
      },
      {
        id: 3,
        front: "ἔργ-ῳ",
        back: ["Dative", "(s)"],
      },
      {
        id: 4,
        front: "ἔργ-α",
        back: ["Nominative or Accusative", "(pl)"],
      },
      {
        id: 5,
        front: "ἔργ-ων",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 6,
        front: "ἔργ-οις",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 10,
    name: "Uncontracted Middle",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "ἔρχ-ομαι",
        back: ["I Go", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "ἔρχ-ῃ (-ει)",
        back: ["You Go", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "ἔρχ-εται",
        back: ["He/She/It Goes", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "ἔρχ-όμεθα",
        back: ["We Go", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "ἔρχ-εσθε",
        back: ["You Go", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "ἔρχ-ονται",
        back: ["They Go", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 11,
    name: "α Contract Middle",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "θε-ῶμαι",
        back: ["I Watch", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "θε-ᾷ",
        back: ["You Watch", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "θε-ᾶται",
        back: ["He/She/It Watches", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "θε-ώμετα",
        back: ["We Watch", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "θε-ᾶστε",
        back: ["You Watch", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "θε-ῶνται",
        back: ["They Watch", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 12,
    name: "ε Contract Middle",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "φοβ-οῦμαι",
        back: ["I Fear", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "φοβ-ῇ",
        back: ["You Fear", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "φοβ-εῖται",
        back: ["He/She/It Fears", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "φοβ-ούμεθα",
        back: ["We Fear", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "φοβ-εῖσθε",
        back: ["You Fear", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "φοβ-οῦνται",
        back: ["They Fear", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 13,
    name: "o Contract Middle",
    category: {
      id: 2,
      name: "Verbs",
    },
    cards: [
      {
        id: 1,
        front: "δουλ-οῦμαι",
        back: ["I Enslave", "First Person", "(s)"],
      },
      {
        id: 2,
        front: "δουλ-οῖ",
        back: ["You Enslave", "Second Person", "(s)"],
      },
      {
        id: 3,
        front: "δουλ-οῦται",
        back: ["He/She/It Enslaves", "Third Person", "(s)"],
      },
      {
        id: 4,
        front: "δουλ-ούμεθα",
        back: ["We Enslave", "First Person", "(pl)"],
      },
      {
        id: 5,
        front: "δουλ-οῦσθε",
        back: ["You Enslave", "Second Person", "(pl)"],
      },
      {
        id: 6,
        front: "δουλ-οῦνται",
        back: ["They Enslave", "Third Person", "(pl)"],
      },
    ],
  },
  {
    id: 14,
    name: "1st Declension A",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "βο-ή",
        back: ["Nominative", "(s)"],
      },
      {
        id: 2,
        front: "βο-ήν",
        back: ["Accusative", "(s)"],
      },
      {
        id: 3,
        front: "βο-ῆς",
        back: ["Genitive", "(s)"],
      },
      {
        id: 4,
        front: "βο-ῇ",
        back: ["Dative", "(s)"],
      },
      {
        id: 5,
        front: "βο-αί",
        back: ["Nominative", "(pl)"],
      },
      {
        id: 6,
        front: "βο-ᾱς",
        back: ["Accusative", "(pl)"],
      },
      {
        id: 7,
        front: "βο-ῶν",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 8,
        front: "βο-αῖς",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 15,
    name: "1st Declension B",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "ἀπορί-ᾱ",
        back: ["Nominative", "(s)"],
      },
      {
        id: 2,
        front: "ἀπορί-ᾱν",
        back: ["Accusative", "(s)"],
      },
      {
        id: 3,
        front: "ἀπορί-ᾱς",
        back: ["Genitive (s)", "or", "Accusative (pl)"],
      },
      {
        id: 4,
        front: "ἀπορί-ᾱι",
        back: ["Dative", "(s)"],
      },
      {
        id: 5,
        front: "ἀπορί-αι",
        back: ["Nominative", "(pl)"],
      },
      {
        id: 6,
        front: "ἀπορί-ῶν",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 7,
        front: "ἀπορί-αις",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 16,
    name: "1st Declension C",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "θάλαττ-ᾰ",
        back: ["Nominative", "(s)"],
      },
      {
        id: 2,
        front: "θάλαττ-ᾰν",
        back: ["Accusative", "(s)"],
      },
      {
        id: 3,
        front: "θαλάττ-ης",
        back: ["Genitive", "(s)"],
      },
      {
        id: 4,
        front: "θαλάττ-ῃ",
        back: ["Dative", "(s)"],
      },
      {
        id: 5,
        front: "θάλαττ-αι",
        back: ["Nominative", "(pl)"],
      },
      {
        id: 6,
        front: "θαλάττ-ᾱς",
        back: ["Accusative", "(pl)"],
      },
      {
        id: 7,
        front: "θαλαττ-ῶν",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 8,
        front: "θαλάττ-αις",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 17,
    name: "1st Declension D",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "ναύτη-ς",
        back: ["Nominative", "(s)"],
      },
      {
        id: 2,
        front: "ναύτ-ην",
        back: ["Accusative", "(s)"],
      },
      {
        id: 3,
        front: "ναύτ-ου",
        back: ["Genitive", "(s)"],
      },
      {
        id: 4,
        front: "ναύτ-ῃ",
        back: ["Dative", "(s)"],
      },
      {
        id: 5,
        front: "ναῦτ-ᾰ",
        back: ["Vocative", "(s)"],
      },
      {
        id: 6,
        front: "ναῦτ-αι",
        back: ["Nominative", "(pl)"],
      },
      {
        id: 7,
        front: "ναύτ-ᾱς",
        back: ["Accusative", "(pl)"],
      },
      {
        id: 8,
        front: "ναυτ-ῶν",
        back: ["Genitive", "(pl)"],
      },
      {
        id: 9,
        front: "ναύτ-αις",
        back: ["Dative", "(pl)"],
      },
    ],
  },
  {
    id: 18,
    name: "1A-B",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀκρόπολις, ἡ",
        back: ["acropolis"],
      },
      {
        id: 2,
        front: "ἆρα",
        back: ["indicates a question"],
      },
      {
        id: 3,
        front: "βαίνω",
        back: ["I come, go, walk"],
      },
      {
        id: 4,
        front: "γῆ, ἡ",
        back: ["land"],
      },
      {
        id: 5,
        front: "δέ",
        back: ["and, but"],
      },
      {
        id: 6,
        front: "δεῦρο",
        back: ["over here"],
      },
      {
        id: 7,
        front: "ἐγώ",
        back: ["I (sometimes emphatic)"],
      },
      {
        id: 8,
        front: "ἔπειτα",
        back: ["then, next"],
      },
      {
        id: 9,
        front: "καί",
        back: ["and, also"],
      },
      {
        id: 10,
        front: "καλ-ός ή όν",
        back: ["beautiful, fine, good"],
      },
      {
        id: 11,
        front: "ναύτης, ὁ",
        back: ["sailor"],
      },
      {
        id: 12,
        front: "νεώριον, τό",
        back: ["dockyard"],
      },
      {
        id: 13,
        front: "Παρθενών, ὁ",
        back: ["the Parthenon"],
      },
      {
        id: 14,
        front: "πλοῖον, τό",
        back: ["vessel, ship"],
      },
      {
        id: 15,
        front: "ῥαψῳδός, ὁ",
        back: ["rhapsode"],
      },
      {
        id: 16,
        front: "σύ",
        back: ["you (s)"],
      },
      {
        id: 17,
        front: "τε...καί...",
        back: ["A and B, both A and B"],
      },
      {
        id: 18,
        front: "τίς",
        back: ["who? what?"],
      },
      {
        id: 19,
        front: "ὦ",
        back: ["O (addressing someone)"],
      },
    ],
  },
  {
    id: 19,
    name: "1C-D",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀκούω",
        back: ["hear, listen"],
      },
      {
        id: 2,
        front: "ἀληθῆ",
        back: ["the truth"],
      },
      {
        id: 3,
        front: "ἀλλά",
        back: ["but, alternatively"],
      },
      {
        id: 4,
        front: "βλέπω",
        back: ["look (at)"],
      },
      {
        id: 5,
        front: "γάρ",
        back: ["because, for"],
      },
      {
        id: 6,
        front: "διώκω",
        back: ["chase, pursue"],
      },
      {
        id: 7,
        front: "ἔγωγε",
        back: ["I At least/at any rate"],
      },
      {
        id: 8,
        front: "εἰσβαινω",
        back: ["enter, board"],
      },
      {
        id: 9,
        front: "ἡεμεῖς",
        back: ["we"],
      },
      {
        id: 10,
        front: "καταβαίνω",
        back: ["go/come down"],
      },
      {
        id: 11,
        front: "μένω (μεινα-)",
        back: ["remain, wait for"],
      },
      {
        id: 12,
        front: "μή",
        back: ["don't"],
      },
      {
        id: 13,
        front: "ού, ούκ, ούχ",
        back: ["no, not"],
      },
      {
        id: 14,
        front: "οὐδέν",
        back: ["nothing"],
      },
      {
        id: 15,
        front: "οὖν",
        back: ["so, then, really, therefore"],
      },
      {
        id: 16,
        front: "τί",
        back: ["what?"],
      },
      {
        id: 17,
        front: "ὖμεῖς",
        back: ["you (pl)"],
      },
      {
        id: 18,
        front: "φεύγω",
        back: ["flee, run away"],
      },
      {
        id: 19,
        front: "ὡς",
        back: ["how"],
      },
    ],
  },
  {
    id: 20,
    name: "1Ε-F",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀκρῑβῶς",
        back: ["accurately, closely"],
      },
      {
        id: 2,
        front: "βαθέως",
        back: ["deeply"],
      },
      {
        id: 3,
        front: "βοηθέω",
        back: ["help, run to help"],
      },
      {
        id: 4,
        front: "δηλόω",
        back: ["show, reveal"],
      },
      {
        id: 5,
        front: "κακῶς",
        back: ["badly, evilly"],
      },
      {
        id: 6,
        front: "καλῶς",
        back: ["finely, beautifully"],
      },
      {
        id: 7,
        front: "μέν... δέ...",
        back: ["on the one hand... on the other"],
      },
      {
        id: 8,
        front: "οἴμοι",
        back: ["oh dear! alas!"],
      },
      {
        id: 9,
        front: "ὁράω",
        back: ["see"],
      },
      {
        id: 10,
        front: "ποῖ;",
        back: ["to where?"],
      },
      {
        id: 11,
        front: "ποιέω",
        back: ["make, do"],
      },
      {
        id: 12,
        front: "ποῦ;",
        back: ["where (at)"],
      },
      {
        id: 13,
        front: "σαφῶς",
        back: ["clearly"],
      },
      {
        id: 14,
        front: "σεαυτόν",
        back: ["yourself (s)"],
      },
    ],
  },
  {
    id: 21,
    name: "1H-J",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀεί",
        back: ["always"],
      },
      {
        id: 2,
        front: "ἄριστος η ον",
        back: ["best; very good"],
      },
      {
        id: 3,
        front: "γιγνώσκω",
        back: ["know; think; resolve"],
      },
      {
        id: 4,
        front: "δῆλος η ον",
        back: ["clear; obvious"],
      },
      {
        id: 5,
        front: "εἰμί",
        back: ["I am (verb: to be)"],
      },
      {
        id: 6,
        front: "Ἕλλην, ὁ",
        back: ["Greek"],
      },
      {
        id: 7,
        front: "ἔμπειρος ον",
        back: ["skilled, experienced"],
      },
      {
        id: 8,
        front: "ἤ",
        back: ["or"],
      },
      {
        id: 9,
        front: "μῶρος ᾱ ον",
        back: ["stupid, foolish"],
      },
      {
        id: 10,
        front: "ναί",
        back: ["yes"],
      },
      {
        id: 11,
        front: "ναῦς, ἡ",
        back: ["ship"],
      },
      {
        id: 12,
        front: "οἶδα",
        back: ["know"],
      },
      {
        id: 13,
        front: "ὅτι",
        back: ["that"],
      },
      {
        id: 14,
        front: "παίζω (πρός + acc.)",
        back: ["play; joke (at)"],
      },
      {
        id: 15,
        front: "περί",
        back: ["(+ acc) about"],
      },
      {
        id: 16,
        front: "πολλά",
        back: ["many things"],
      },
      {
        id: 17,
        front: "πῶς γάρ οὔ;",
        back: ["of course"],
      },
      {
        id: 18,
        front: "στρατηγός, ὁ",
        back: ["general (2a)"],
      },
      {
        id: 19,
        front: "τά ναυτικά",
        back: ["naval matters"],
      },
      {
        id: 20,
        front: "τά στρατηγικά",
        back: ["leadership, generalship"],
      },
      {
        id: 21,
        front: "τά στρατιωτικά",
        back: ["military matters"],
      },
    ],
  },
  {
    id: 22,
    name: "2A-D",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀγαθός ή όν",
        back: ["good, noble, courageous"],
      },
      {
        id: 2,
        front: "Ἀθηναῖος, ὁ",
        back: ["Athenian (2a)"],
      },
      {
        id: 3,
        front: "ἄμα",
        back: ["at the same time"],
      },
      {
        id: 4,
        front: "ἄναχωρέω",
        back: ["retreat"],
      },
      {
        id: 5,
        front: "ἀπορέ-ω",
        back: ["be at a loss; have no resources"],
      },
      {
        id: 6,
        front: "ἀπορί-ᾱ, ἠ",
        back: ["perplexity; lack of provisions"],
      },
      {
        id: 7,
        front: "αὖθις",
        back: ["again"],
      },
      {
        id: 8,
        front: "βάρβαρος, ὁ",
        back: ["barbarian, foreigner (2a)"],
      },
      {
        id: 9,
        front: "βέβαιος (ᾱ) ον",
        back: ["secure"],
      },
      {
        id: 10,
        front: "βραδέως",
        back: ["slowly"],
      },
      {
        id: 11,
        front: "διά",
        back: ["(+acc) because of"],
      },
      {
        id: 12,
        front: "διέρχομαι",
        back: ["go through, relate"],
      },
      {
        id: 13,
        front: "δουλό-ομαι",
        back: ["enslave"],
      },
      {
        id: 14,
        front: "ἐλευθερίᾱ, ἡ",
        back: ["freedom"],
      },
      {
        id: 15,
        front: "ἐλεύθερος α ον",
        back: ["free"],
      },
      {
        id: 16,
        front: "ἐλευθερόω",
        back: ["free, set free"],
      },
      {
        id: 17,
        front: "ἐμός ή όν",
        back: ["my; mine"],
      },
      {
        id: 18,
        front: "ἐπειδή",
        back: ["when"],
      },
      {
        id: 19,
        front: "ἐπέρχομαι",
        back: ["go against, attack"],
      },
      {
        id: 20,
        front: "ἐπί (+acc)",
        back: ["at, against, to attack"],
      },
      {
        id: 21,
        front: "ἔρχομαι",
        back: ["go, come"],
      },
      {
        id: 22,
        front: "ἡδέως",
        back: ["with pleasure, happily"],
      },
      {
        id: 23,
        front: "ἥδη",
        back: ["by now, now, already"],
      },
      {
        id: 24,
        front: "ἡσυχάζω",
        back: ["be quiet, keep quiet"],
      },
      {
        id: 25,
        front: "ἡσυχίᾱ, ἡ",
        back: ["quiet, peace (1b)"],
      },
      {
        id: 26,
        front: "θεά, ἡ",
        back: ["goddess (1b)"],
      },
      {
        id: 27,
        front: "θεά-ομαι",
        back: ["observe, watch"],
      },
      {
        id: 28,
        front: "κάλλιστος η ον",
        back: ["superlative, beautiful, good, fine"],
      },
      {
        id: 29,
        front: "λόγος, ὁ",
        back: ["story, tale"],
      },
      {
        id: 30,
        front: "μάχομαι",
        back: ["fight"],
      },
      {
        id: 31,
        front: "ναυμαχίᾱ, ἡ",
        back: ["naval battle"],
      },
      {
        id: 32,
        front: "νῑκάω",
        back: ["win, defeat"],
      },
      {
        id: 33,
        front: "νῑκη, ἡ",
        back: ["victory, conquest (1a)"],
      },
      {
        id: 34,
        front: "ὁμόνοια, ἡ",
        back: ["agreement, harmony (1b)"],
      },
      {
        id: 35,
        front: "ὅσος η ον",
        back: ["how great!"],
      },
      {
        id: 36,
        front: "οὐκέτι",
        back: ["no longer"],
      },
      {
        id: 37,
        front: "οὕτω(ς)",
        back: ["thus, so, in this way"],
      },
      {
        id: 38,
        front: "παρά",
        back: ["(+ acc) along, alongside"],
      },
      {
        id: 39,
        front: "πίπτω",
        back: ["fall, die"],
      },
      {
        id: 40,
        front: "πολέμιοι, οἱ",
        back: ["the enemy (2a)"],
      },
      {
        id: 41,
        front: "πολέμιος ᾱ ον",
        back: ["hosile, enemy"],
      },
      {
        id: 42,
        front: "πόλεμος, ὁ",
        back: ["war"],
      },
      {
        id: 43,
        front: "πότερον... ἥ",
        back: ["whether... or"],
      },
      {
        id: 44,
        front: "προσέρχομαι",
        back: ["advance, go/come towards"],
      },
      {
        id: 45,
        front: "σιωπά-ω",
        back: ["be silent"],
      },
      {
        id: 46,
        front: "σκοπέ-ω",
        back: ["look (at), consider"],
      },
      {
        id: 47,
        front: "στρατιά, ἡ",
        back: ["army (1b)"],
      },
      {
        id: 48,
        front: "ταχέως",
        back: ["quickly"],
      },
      {
        id: 49,
        front: "τέλος",
        back: ["in the end, finally"],
      },
      {
        id: 50,
        front: "τι",
        back: ["a, something"],
      },
      {
        id: 51,
        front: "τόλμα, ἡ",
        back: ["daring (1c)"],
      },
      {
        id: 52,
        front: "τολμάω",
        back: ["dare, be daring, undertake"],
      },
      {
        id: 53,
        front: "φοβέομαι",
        back: ["fear, be afraid (of)"],
      },
      {
        id: 54,
        front: "ψευδῶς",
        back: ["falsely"],
      },
      {
        id: 55,
        front: "ὥσπερ",
        back: ["like, as"],
      },
    ],
  },
  {
    id: 23,
    name: "Personal Pronouns",
    category: {
      id: 1,
      name: "General",
    },
    cards: [
      {
        id: 1,
        front: "ἐγώ",
        back: ["I/me", "Nomative", "(s.)"],
      },
      {
        id: 2,
        front: "με or ἐμέ",
        back: ["I/me", "Accusative", "(s.)"],
      },
      {
        id: 3,
        front: "μου or ἐμοῦ",
        back: ["I/me", "Genitive", "(s.)"],
      },
      {
        id: 4,
        front: "μοι or ἐμοί",
        back: ["I/me", "Dative", "(s.)"],
      },
      {
        id: 5,
        front: "σύ",
        back: ["You", "Nomative", "(s.)"],
      },
      {
        id: 6,
        front: "σέ",
        back: ["You", "Accusative", "(s.)"],
      },
      {
        id: 7,
        front: "σοῦ",
        back: ["You", "Genitive", "(s.)"],
      },
      {
        id: 8,
        front: "σοί",
        back: ["You", "Dative", "(s.)"],
      },
      {
        id: 9,
        front: "ἡμεῖς",
        back: ["We/us", "Nomative", "(pl.)"],
      },
      {
        id: 10,
        front: "ἡμᾶς",
        back: ["We/us", "Accusative", "(pl.)"],
      },
      {
        id: 11,
        front: "ἡμῶν",
        back: ["We/us", "Genitive", "(pl)"],
      },
      {
        id: 12,
        front: "ἡμῖν",
        back: ["We/us", "Dative", "(pl.)"],
      },
      {
        id: 13,
        front: "ὑμεῖς",
        back: ["You", "Nomative", "(pl.)"],
      },
      {
        id: 14,
        front: "ὑμᾶς",
        back: ["You", "Accusative", "(pl.)"],
      },
      {
        id: 15,
        front: "ὑμῶν",
        back: ["You", "Genitive", "(pl.)"],
      },
      {
        id: 16,
        front: "ὑμῖν",
        back: ["You", "Dative", "(pl)"],
      },
    ],
  },
  {
    id: 24,
    name: "3A-B",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἄγε",
        back: ["Come!"],
      },
      {
        id: 2,
        front: "ἀφικνέομαι",
        back: ["arrive, come"],
      },
      {
        id: 3,
        front: "ἐρωτάω",
        back: ["ask"],
      },
      {
        id: 4,
        front: "ἰδού",
        back: ["Look! Here! Hey!"],
      },
      {
        id: 5,
        front: "κίνδυνος, ὁ",
        back: ["Danger", "(2a)"],
      },
      {
        id: 6,
        front: "νῆσος, ἡ",
        back: ["island", "(2a)"],
      },
      {
        id: 7,
        front: "πόθεν;",
        back: ["from where?"],
      },
      {
        id: 8,
        front: "πυρά, τα",
        back: ["fire-signals", "(2b)"],
      },
      {
        id: 9,
        front: "σπεύδω",
        back: ["hurry"],
      },
      {
        id: 10,
        front: "χωρέω",
        back: ["Go, come"],
      },
      {
        id: 11,
        front: "δεινός",
        back: ["terrible, dire, clever"],
      },
      {
        id: 12,
        front: "ἐγώ",
        back: ["I/1"],
      },
      {
        id: 13,
        front: "εὖ",
        back: ["well"],
      },
      {
        id: 14,
        front: "ἡμεῖς",
        back: ["we"],
      },
      {
        id: 15,
        front: "θεάομαι",
        back: ["Watch, gaze at"],
      },
      {
        id: 16,
        front: "θόρυβος, ὁ",
        back: ["noise, din, hustle and bustle", "(2a)"],
      },
      {
        id: 17,
        front: "οἰκία, ἡ",
        back: ["House", "(1b)"],
      },
      {
        id: 18,
        front: "οἴκαδε",
        back: ["homewards"],
      },
      {
        id: 19,
        front: "ὅπλα, τα",
        back: ["weapons, arms", "(2b)"],
      },
      {
        id: 20,
        front: "πορεύομαι",
        back: ["march, journey, go"],
      },
      {
        id: 21,
        front: "σύ",
        back: ["You (s.)"],
      },
      {
        id: 22,
        front: "ὑμεις",
        back: ["You (pl.)"],
      },
      {
        id: 23,
        front: "φαίνομαι",
        back: ["appear, seem"],
      },
    ],
  },
  {
    id: 25,
    name: "Unit #1",
    category: {
      id: 5,
      name: "Key Words",
    },
    cards: [
      {
        id: 1,
        front: "ὁ, ἡ, τό",
        back: ["the, that, he/she, it"],
      },
      {
        id: 2,
        front: "καί",
        back: ["conj", "and, even"],
      },
      {
        id: 3,
        front: "δέ",
        back: ["part", "but, on the other hand, then"],
      },
      {
        id: 4,
        front: "εἰμί",
        back: ["to be"],
      },
      {
        id: 5,
        front: "εἰς",
        back: ["prep + acc.", "into, to"],
      },
      {
        id: 6,
        front: "αὐτός, αὐτή, αὐτό",
        back: ["pron", "self"],
      },
      {
        id: 7,
        front: "οὗτος, αὕτη, τοῦτο",
        back: ["pron", "this"],
      },
      {
        id: 8,
        front: "μέν",
        back: ["part", "but, on the one hand, then"],
      },
      {
        id: 9,
        front: "τις, τι",
        back: ["part", "anyone, anything"],
      },
      {
        id: 10,
        front: "τε",
        back: ["part", "and"],
      },
      {
        id: 11,
        front: "τίς, τί",
        back: ["pron", "who? which?"],
      },
      {
        id: 12,
        front: "γάρ",
        back: ["part", "for/because"],
      },
      {
        id: 13,
        front: "οὐ",
        back: ["adv", "not"],
      },
      {
        id: 14,
        front: "ὅς, ἥ, ὅ",
        back: ["pron", "this, that, who, which"],
      },
      {
        id: 15,
        front: "πρός",
        back: ["prep + acc/gen/dat", "from, to, near"],
      },
      {
        id: 16,
        front: "ἐπί",
        back: ["prep + acc/gen/dat", "on, upon"],
      },
      {
        id: 17,
        front: "ἐγώ",
        back: ["pron", "I"],
      },
      {
        id: 18,
        front: "ὥς",
        back: ["adv", "so, thus"],
      },
      {
        id: 19,
        front: "ἐν",
        back: ["prep + dat", "in"],
      },
      {
        id: 20,
        front: "ἐκ",
        back: ["prep + gen", "from, out of"],
      },
    ],
  },
  {
    id: 26,
    name: "Unit #2",
    category: {
      id: 5,
      name: "Key Words",
    },
    cards: [
      {
        id: 1,
        front: "ἀλλά",
        back: ["conj", "otherwise, but"],
      },
      {
        id: 2,
        front: "σύ",
        back: ["pron", "you"],
      },
      {
        id: 3,
        front: "γίγνομαι",
        back: ["to come into being, happen"],
      },
      {
        id: 4,
        front: "κατά",
        back: ["prep + acc/gen", "down, downwards"],
      },
      {
        id: 5,
        front: "ἔχω",
        back: ["to have, hold"],
      },
      {
        id: 6,
        front: "ἤ",
        back: ["conj", "or, than"],
      },
      {
        id: 7,
        front: "πᾶς",
        back: ["adj", "all"],
      },
      {
        id: 8,
        front: "μή",
        back: ["not"],
      },
      {
        id: 9,
        front: "ἄλλος",
        back: ["adj", "other, another"],
      },
      {
        id: 10,
        front: "περί",
        back: ["prep + gen/dat/acc", "around"],
      },
      {
        id: 11,
        front: "πολύς",
        back: ["adj", "many, much"],
      },
      {
        id: 12,
        front: "ὑπό",
        back: ["prep + gen/dat/acc", "under, by, towards"],
      },
      {
        id: 13,
        front: "ποιέω",
        back: ["to make, do"],
      },
      {
        id: 14,
        front: "λέγω",
        back: ["to lay, choose, say"],
      },
      {
        id: 15,
        front: "ἕ",
        back: ["pron", "himself/herself"],
      },
      {
        id: 16,
        front: "δή",
        back: ["part", "indeed, in truth"],
      },
      {
        id: 17,
        front: "άπό",
        back: ["prep + gen", "from, away from"],
      },
      {
        id: 18,
        front: "εἰ",
        back: ["conj", "if, whether"],
      },
      {
        id: 19,
        front: "διά",
        back: ["prep + gen/acc", "through, by means of"],
      },
      {
        id: 20,
        front: "πόλις",
        back: ["f noun", "city"],
      },
    ],
  },
  {
    id: 27,
    name: "3rd Declension A(1)",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "λιμήν",
        back: ["Nominative", "(s.)"],
      },
      {
        id: 2,
        front: "λιμἐν-α",
        back: ["Accusative", "(s.)"],
      },
      {
        id: 3,
        front: "λιμἐν-ος",
        back: ["Genitive", "(s.)"],
      },
      {
        id: 4,
        front: "λιμἐν-ι",
        back: ["Dative", "(s.)"],
      },
      {
        id: 5,
        front: "λιμἐν-ες",
        back: ["Nominative", "(pl.)"],
      },
      {
        id: 6,
        front: "λιμἐν-ας",
        back: ["Accusative", "(pl.)"],
      },
      {
        id: 7,
        front: "λιμἐν-ων",
        back: ["Genitive", "(pl.)"],
      },
      {
        id: 8,
        front: "λιμέσι(ν)",
        back: ["Dative", "(pl.)"],
      },
    ],
  },
  {
    id: 28,
    name: "3rd Declension A(2)",
    category: {
      id: 3,
      name: "Nouns",
    },
    cards: [
      {
        id: 1,
        front: "νύξ",
        back: ["Nominative", "(s.)"],
      },
      {
        id: 2,
        front: "νύκτ-α",
        back: ["Accusative", "(s.)"],
      },
      {
        id: 3,
        front: "νυκτ-ός",
        back: ["Genitive", "(s.)"],
      },
      {
        id: 4,
        front: "νυκτ-ί",
        back: ["Dative", "(s.)"],
      },
      {
        id: 5,
        front: "νύκτ-ες",
        back: ["Nominative", "(pl.)"],
      },
      {
        id: 6,
        front: "νύκτ-ας",
        back: ["Accusative", "(pl.)"],
      },
      {
        id: 7,
        front: "νυκτ-ῶν",
        back: ["Genitive", "(pl.)"],
      },
      {
        id: 8,
        front: "νυξί(ν)",
        back: ["Dative", "(pl.)"],
      },
    ],
  },
  {
    id: 29,
    name: "Unit #3",
    category: {
      id: 5,
      name: "Key Words",
    },
    cards: [
      {
        id: 1,
        front: "ὅδε, ἤδε, τόδε",
        back: ["pron", "this"],
      },
      {
        id: 2,
        front: "τῆ",
        back: ["dat fem of ὁ", "here, there"],
      },
      {
        id: 3,
        front: "ἀνήρ",
        back: ["masc noun", "man"],
      },
      {
        id: 4,
        front: "λόγος",
        back: ["masc noun", "word, reason, story"],
      },
      {
        id: 5,
        front: "ἐπεί",
        back: ["conj", "after, since, when"],
      },
      {
        id: 6,
        front: "οὐδείς",
        back: ["adj", "no one, none, nobody"],
      },
      {
        id: 7,
        front: "ὡς",
        back: ["adv", "as, how"],
      },
      {
        id: 8,
        front: "γε",
        back: ["part", "at least, at any rate"],
      },
      {
        id: 9,
        front: "φημί",
        back: ["to declare, say"],
      },
      {
        id: 10,
        front: "ἐάν",
        back: ["conj", "if"],
      },
      {
        id: 11,
        front: "ὅστις, ἥτις, ὅ τι",
        back: ["pron", "anyone who, anything which"],
      },
      {
        id: 12,
        front: "νῦν",
        back: ["adv", "now"],
      },
      {
        id: 13,
        front: "ἑαυτοῦ",
        back: ["pron", "of himself, absolutely"],
      },
      {
        id: 14,
        front: "μέγας",
        back: ["adj", "big, great, large"],
      },
      {
        id: 15,
        front: "τῷ",
        back: ["dat. neut of τό", "therefore, thereupon"],
      },
      {
        id: 16,
        front: "ἐκεῖνος, ἐκεῖνη, ἐκεῖνον",
        back: ["pron", "that person, that thing"],
      },
      {
        id: 17,
        front: "ἴσος",
        back: ["adj", "equal, like"],
      },
      {
        id: 18,
        front: "οὖν",
        back: ["adj", "therefore"],
      },
      {
        id: 19,
        front: "μετά",
        back: ["prep + dat/gen/acc", "among, after, with"],
      },
      {
        id: 20,
        front: "ἄν",
        back: ["part", "would"],
      },
    ],
  },
  {
    id: 30,
    name: "Unit #4",
    category: {
      id: 5,
      name: "Key Words",
    },
    cards: [
      {
        id: 1,
        front: "παῖς",
        back: ["m & f", "child"],
      },
      {
        id: 2,
        front: "ἀνά",
        back: ["prep + gen/dat/acc", "up, upon"],
      },
      {
        id: 3,
        front: "τοιοῦτος",
        back: ["adj", "such as this, so"],
      },
      {
        id: 4,
        front: "ὅσος",
        back: ["adj", "as great as, how much"],
      },
      {
        id: 5,
        front: "θεός",
        back: ["m", "God"],
      },
      {
        id: 6,
        front: "πρότερος",
        back: ["adj", "before"],
      },
      {
        id: 7,
        front: "βασιλεύς",
        back: ["m", "king"],
      },
      {
        id: 8,
        front: "λαμβάνω",
        back: ["to take, recieve"],
      },
      {
        id: 9,
        front: "ἔτι",
        back: ["adv", "yet, still"],
      },
      {
        id: 10,
        front: "καλέω",
        back: ["to call, summon"],
      },
      {
        id: 11,
        front: "εἶς, μία, ἕν",
        back: ["adj", "one"],
      },
      {
        id: 12,
        front: "παρά",
        back: ["prep + gen/dat/acc", "beside"],
      },
      {
        id: 13,
        front: "δίδωμι",
        back: ["to give"],
      },
      {
        id: 14,
        front: "γυνή",
        back: ["f", "woman"],
      },
      {
        id: 15,
        front: "ὅτι",
        back: ["conj", "that"],
      },
      {
        id: 16,
        front: "ἠμί",
        back: ["to say"],
      },
      {
        id: 17,
        front: "δοκέω",
        back: ["to think, suppose"],
      },
      {
        id: 18,
        front: "οὔτε",
        back: ["adv", "and not, neither... nor"],
      },
      {
        id: 19,
        front: "οἷος",
        back: ["pron", "such as, what kind"],
      },
      {
        id: 20,
        front: "εἶπον",
        back: ["aor. of ἔπω", "to speak, say"],
      },
    ],
  },
  {
    id: 31,
    name: "3C-E",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "ἀλλήλους",
        back: ["each other, one another", "(2a)"],
      },
      {
        id: 2,
        front: "ἄλλος η ο",
        back: ["other, the rest of"],
      },
      {
        id: 3,
        front: "ἐγγύς (+gen)",
        back: ["near, nearby"],
      },
      {
        id: 4,
        front: "εἰπέ",
        back: ["speak! tell me!"],
      },
      {
        id: 5,
        front: "ἐπειδή",
        back: ["whence"],
      },
      {
        id: 6,
        front: "κατά (+acc)",
        back: ["in, on, by, according to"],
      },
      {
        id: 7,
        front: "Λακεδαιμόνιος, ὁ",
        back: ["Spartan", "(2a)"],
      },
      {
        id: 8,
        front: "λαμβάνω (λαβ-)",
        back: ["take, capture"],
      },
      {
        id: 9,
        front: "λόγος",
        back: ["word, speach, story, tale", "(2a)"],
      },
      {
        id: 10,
        front: "μανθάνω (μαθ-)",
        back: ["learn, understand"],
      },
      {
        id: 11,
        front: "ναυτικός ή όν",
        back: ["naval"],
      },
      {
        id: 12,
        front: "οὐδέ",
        back: ["and not, not even"],
      },
      {
        id: 13,
        front: "τέχνη, ἡ",
        back: ["skill, art, expertise"],
      },
      {
        id: 14,
        front: "βοάω",
        back: ["Shout (for)"],
      },
      {
        id: 15,
        front: "ἔτι",
        back: ["still, yet"],
      },
      {
        id: 16,
        front: "ζητέω",
        back: ["look for, seek"],
      },
      {
        id: 17,
        front: "θύρᾱ, ἡ",
        back: ["door (1b)"],
      },
      {
        id: 18,
        front: "καθεύδω",
        back: ["sleep"],
      },
      {
        id: 19,
        front: "καλέω",
        back: ["call, summon"],
      },
      {
        id: 20,
        front: "κελευστής, ὁ",
        back: ["boatswain (1d)"],
      },
      {
        id: 21,
        front: "οἴκοι",
        back: ["at home"],
      },
      {
        id: 22,
        front: "τρέχω (δραμ-)",
        back: ["run"],
      },
      {
        id: 23,
        front: "τριήραρχος, ὁ",
        back: ["trierarch (2a)"],
      },
      {
        id: 24,
        front: "δή",
        back: ["then, indeed"],
      },

      {
        id: 25,
        front: "ἐμβαίνω (ἐμβα-)",
        back: ["embark"],
      },

      {
        id: 26,
        front: "εὐχή, ἡ",
        back: ["prayer (1a)"],
      },

      {
        id: 27,
        front: "εὔχομαι",
        back: ["pray"],
      },

      {
        id: 28,
        front: "θυσίᾱ, ἡ",
        back: ["a sacrifice (1b)"],
      },

      {
        id: 29,
        front: "θύω",
        back: ["sacrifice"],
      },

      {
        id: 30,
        front: "κελεύω",
        back: ["order"],
      },

      {
        id: 31,
        front: "σπένδω",
        back: ["pour a libation"],
      },

      {
        id: 32,
        front: "σπονδή, ἡ",
        back: ["a libation (1a)"],
      },
    ],
  },
  {
    id: 32,
    name: "4A-C",
    category: {
      id: 4,
      name: "Text Vocab",
    },
    cards: [
      {
        id: 1,
        front: "γεωργός ὁ",
        back: ["farmer (2a)"],
      },
      {
        id: 2,
        front: "γυνή (γυναικ-) ἡ",
        back: ["woman, wife (3a)"],
      },
      {
        id: 3,
        front: "δαίμων ὁ",
        back: ["god, demon, daimon, (3a)"],
      },
      {
        id: 4,
        front: "ἔτι καί νῦν",
        back: ["even now, still now"],
      },
      {
        id: 5,
        front: "κρατέω",
        back: ["hold sway, power over"],
      },
      {
        id: 6,
        front: "νή (+acc)",
        back: ["by...!"],
      },
      {
        id: 7,
        front: "ὀλιγος η ον",
        back: ["small, few"],
      },
      {
        id: 8,
        front: "ἀτιμάζω",
        back: ["dishonor, hold in dishonor"],
      },
      {
        id: 9,
        front: "δεσπότης, ὁ",
        back: ["master (1d)"],
      },
      {
        id: 10,
        front: "διαφθείρω (διαφθειρα)",
        back: ["destroy, kill"],
      },
      {
        id: 11,
        front: "θεός, ὁ/ἡ",
        back: ["god, goddess (2a)"],
      },
      {
        id: 12,
        front: "θνητός ή όν",
        back: ["mortal"],
      },
      {
        id: 13,
        front: "κωλύω",
        back: ["prevent, stop"],
      },
      {
        id: 14,
        front: "μάλιστα",
        back: ["especially, particularly, yes"],
      },
      {
        id: 15,
        front: "νεκρός, ὁ",
        back: ["corpse (2a)"],
      },
      {
        id: 16,
        front: "νόμος, ὁ",
        back: ["law, convention (2a)"],
      },
      {
        id: 17,
        front: "νόσος, ἡ",
        back: ["plauge disease (2a)"],
      },
      {
        id: 18,
        front: "πυρά, ἡ",
        back: ["funeral pyre (1b)"],
      },
      {
        id: 19,
        front: "τιμάω",
        back: ["honour"],
      },
      {
        id: 20,
        front: "τύπτω",
        back: ["strike, hit"],
      },
      {
        id: 21,
        front: "φέρω (ἐνεγκ-)",
        back: ["carry, bear"],
      },
      {
        id: 22,
        front: "φόβος, ὁ",
        back: ["fear (2a)"],
      },
      {
        id: 23,
        front: "ἀνομία, ἡ",
        back: ["lawlessness (1B)"],
      },
      {
        id: 24,
        front: "ἀπάγω (ἀπαγαγ-)",
        back: ["lead/take away"],
      },
      {
        id: 25,
        front: "ἀποφεύγω (ἀποφυγ-)",
        back: ["escape, run off"],
      },
      {
        id: 26,
        front: "δοῦλος, ὁ",
        back: ["slave (2a)"],
      },
      {
        id: 27,
        front: "ἰερόν, τό",
        back: ["sanctuary (2b)"],
      },
      {
        id: 28,
        front: "ἰκέτης, ὀ",
        back: ["suppliant (1d)"],
      },
      {
        id: 29,
        front: "μά (+acc)",
        back: ["by...!"],
      },
      {
        id: 30,
        front: "ζένος, ζεῖωος, ὁ",
        back: ["foreigner, guest, host (2a)"],
      },
      {
        id: 31,
        front: "ὁρθός ή όν",
        back: ["straight, correct, right"],
      },
    ],
  },
];

export default decks;
