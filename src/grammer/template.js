const keyWordTemplate = {
  id: 32,
  name: "4A-D",
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
      front: "",
      back: [""],
    },
  ],
};

const nounTableTemplate = {
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
};

export { nounTableTemplate, keyWordTemplate };
