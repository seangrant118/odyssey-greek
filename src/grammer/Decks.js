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
];

export default decks;
