const decks = [
  {
    id: 1,
    name: "Definite Article",
    category: {
      id: 1,
      name: "General"
    },
    cards: [
      {
        id: 1,
        front: "ὁ",
        back: ["Nominative", "M", "(s.)"]
      },
      {
        id: 2,
        front: "τόν",
        back: ["Accusative", "M", "(s.)"]
      },
      {
        id: 3,
        front: "τοῠ",
        back: ["Genitive", "M or N", "(s.)"]
      },
      {
        id: 4,
        front: "τῷ",
        back: ["Dative", "M or N", "(s.)"]
      },
      {
        id: 5,
        front: "ή",
        back: ["Nominative", "F", "(s.)"]
      },
      {
        id: 6,
        front: "τήν",
        back: ["Accusative", "F", "(s.)"]
      },
      {
        id: 7,
        front: "τῆς",
        back: ["Genitive", "F", "(s.)"]
      },
      {
        id: 8,
        front: "τῇ",
        back: ["Dative", "F", "(s.)"]
      },
      {
        id: 9,
        front: "τό",
        back: ["Nominative or Accusative", "N", "(s.)"]
      },
      {
        id: 10,
        front: "οί",
        back: ["Nominative", "M", "(pl.)"]
      },
      {
        id: 11,
        front: "τούς",
        back: ["Accusative", "M", "(pl.)"]
      },
      {
        id: 12,
        front: "τῶν",
        back: ["Genative", "M or F or N", "(pl.)"]
      },
      {
        id: 13,
        front: "τοῖς",
        back: ["Dative", "M or N", "(pl.)"]
      },
      {
        id: 14,
        front: "αί",
        back: ["Nominatve", "F", "(pl.)"]
      },
      {
        id: 15,
        front: "τᾱς",
        back: ["Accusative", "F", "(pl.)"]
      },
      {
        id: 16,
        front: "ταῖς",
        back: ["Dative", "F", "(pl.)"]
      },
      {
        id: 17,
        front: "τά",
        back: ["Nominative or Accusative", "N", "(pl.)"]
      }
    ]
  },
  {
    id: 2,
    name: "εἰμί",
    category: {
      id: 1,
      name: "General"
    },
    cards: [
      {
        id: 1,
        front: "εἰμί",
        back: ["I Am", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "εἶ",
        back: ["You are", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "ἐστί(ν)",
        back: ["He/She/It is", "Third Person", "(s)"]
      },
      {
        id: 4,
        front: "ἐσμέν",
        back: ["We are", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "ἐστέ",
        back: ["You are", "Second Person", "(pl)"]
      },
      {
        id: 6,
        front: "εἰσί(ν)",
        back: ["They are", "Third Person", "(pl)"]
      }
    ]
  },
  {
    id: 3,
    name: "οἷδα",
    category: {
      id: 1,
      name: "General"
    },
    cards: [
      {
        id: 1,
        front: "οἷδα",
        back: ["I Know", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "οἷσθα",
        back: ["You Know", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "οἷδε",
        back: ["He/She/it Knows", "Third Person", "(s)"]
      },
      {
        id: 4,
        front: "ἵσμεν",
        back: ["We Know", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "ἵστε",
        back: ["You Know", "Second Person", "(pl)"]
      },
      {
        id: 6,
        front: "ἵσασι(ν)",
        back: ["They Know", "Third Person", "(pl)"]
      }
    ]
  },
  {
    id: 4,
    name: "Uncontracted Verbs",
    category: {
      id: 2,
      name: "Verbs"
    },
    cards: [
      {
        id: 1,
        front: "βαίνω",
        back: ["I Go", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "βαίνεις",
        back: ["You Go", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "βαίνει",
        back: ["He/She/it Goes", "First Person", "(s)"]
      },
      {
        id: 4,
        front: "βαίνομεν",
        back: ["We Go", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "βαίνετε",
        back: ["You Go", "First Person", "(pl)"]
      },
      {
        id: 6,
        front: "βαίνοθσι(ν)",
        back: ["They Go", "First Person", "(pl)"]
      }
    ]
  },
  {
    id: 5,
    name: "α Contract Verbs",
    category: {
      id: 2,
      name: "Verbs"
    },
    cards: [
      {
        id: 1,
        front: "ὁρῶ",
        back: ["I See", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "ὁρᾷς",
        back: ["You See", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "ὁρᾷ",
        back: ["He/She/It Sees", "Third Person", "(s)"]
      },
      {
        id: 4,
        front: "ὁρῶμεν",
        back: ["We See", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "ὁρᾶτε",
        back: ["You See", "Second Person", "(pl)"]
      },
      {
        id: 6,
        front: "ὁρῶσι(ν)",
        back: ["They See", "First Person", "(pl)"]
      }
    ]
  },
  {
    id: 6,
    name: "ε Contract Verbs",
    category: {
      id: 2,
      name: "Verbs"
    },
    cards: [
      {
        id: 1,
        front: "ποιῶ",
        back: ["I Do", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "ποιεῖς",
        back: ["You Do", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "ποιεῖ",
        back: ["He/She/It Does", "Third Person", "(s)"]
      },
      {
        id: 4,
        front: "ποιοῦμεν",
        back: ["We Do", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "ποιεῖτε",
        back: ["You Do", "Second Person", "(pl)"]
      },
      {
        id: 6,
        front: "ποιοῦσι(ν)",
        back: ["They See", "Third Person", "(pl)"]
      }
    ]
  },
  {
    id: 7,
    name: "ο Contract Verbs",
    category: {
      id: 2,
      name: "Verbs"
    },
    cards: [
      {
        id: 1,
        front: "δηλῶ",
        back: ["I Show", "First Person", "(s)"]
      },
      {
        id: 2,
        front: "δηλοῖς",
        back: ["You Show", "Second Person", "(s)"]
      },
      {
        id: 3,
        front: "δηλοῖ",
        back: ["He/She/It Sees", "Third Person", "(s)"]
      },
      {
        id: 4,
        front: "δηλοῦμεν",
        back: ["We See", "First Person", "(pl)"]
      },
      {
        id: 5,
        front: "δηλοῦτε",
        back: ["You See", "Second Person", "(pl)"]
      },
      {
        id: 6,
        front: "δηλοῦσι(ν)",
        back: ["They See", "Third Person", "(pl)"]
      }
    ]
  },
  {
    id: 8,
    name: "2nd Declension A",
    category: {
      id: 3,
      name: "Nouns"
    },
    cards: [
      {
        id: 1,
        front: "ἄνθρωπος",
        back: ["Nominative", "(s)"]
      },
      {
        id: 2,
        front: "ἄνθρωπον",
        back: ["Accusative", "(s)"]
      },
      {
        id: 3,
        front: "ἀνθρωπου",
        back: ["Genitive", "(s)"]
      },
      {
        id: 4,
        front: "ἀνθρωπῳ",
        back: ["Dative", "(s)"]
      },
      {
        id: 5,
        front: "ὦ ἄνθρωπε",
        back: ["Vocative", "(s)"]
      },
      {
        id: 6,
        front: "ἄνθρωποι",
        back: ["Nominative", "(pl)"]
      },
      {
        id: 7,
        front: "ἀνθρώπους",
        back: ["Accusative", "(pl)"]
      },
      {
        id: 8,
        front: "ἀνθρώπων",
        back: ["Genitive", "(pl)"]
      },
      {
        id: 9,
        front: "ἀνθρώποις",
        back: ["Dative", "(pl)"]
      }
    ]
  },
  {
    id: 9,
    name: "2nd Declension B",
    category: {
      id: 3,
      name: "Nouns"
    },
    cards: [
      {
        id: 1,
        front: "ἔργ-ον",
        back: ["Nominative or Accusative", "(s)"]
      },
      {
        id: 2,
        front: "ἔργ-ου",
        back: ["Genitive", "(s)"]
      },
      {
        id: 3,
        front: "ἔργ-ῳ",
        back: ["Dative", "(s)"]
      },
      {
        id: 4,
        front: "ἔργ-α",
        back: ["Nominative or Accusative", "(pl)"]
      },
      {
        id: 5,
        front: "ἔργ-ων",
        back: ["Genitive", "(pl)"]
      },
      {
        id: 6,
        front: "ἔργ-οις",
        back: ["Dative", "(pl)"]
      }
    ]
  }
];

export default decks;
