const keyWordTemplate = {
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

    //
  ],
};

const keyWordTemplate2 = {
  id: 33,
  name: "Unit #5",
  category: {
    id: 5,
    name: "Key Words",
  },
  cards: [
    {
      id: 1,
      front: "ἔρχομαι",
      back: ["to come, go"],
    },
    {
      id: 2,
      front: "δέω",
      back: ["to bind, tie, lack, want"],
    },
    {
      id: 3,
      front: "δύο",
      back: ["two"],
    },
    {
      id: 4,
      front: "σός",
      back: ["adj", "thy, thine, your, yours"],
    },
    {
      id: 5,
      front: "καλός",
      back: ["adj", "beautiful"],
    },
    {
      id: 6,
      front: "εἶμι",
      back: ["to be"],
    },
    {
      id: 7,
      front: "ὥστε",
      back: ["adv., conj", "as, as being, so as to"],
    },
    {
      id: 8,
      front: "ναῦς",
      back: ["f.", "ship"],
    },
    {
      id: 9,
      front: "σφεῖς",
      back: ["pron", "they"],
    },
    {
      id: 10,
      front: "ἕκαστος",
      back: ["adj", "every, each"],
    },
    {
      id: 11,
      front: "ἑμός",
      back: ["pron", "mine"],
    },
    {
      id: 12,
      front: "ἄνθροπος",
      back: ["m", "man"],
    },
    {
      id: 13,
      front: "μόνος",
      back: ["adj", "alone"],
    },
    {
      id: 14,
      front: "δίναμις",
      back: ["f", "power, strength"],
    },
    {
      id: 15,
      front: "βούλομαι",
      back: ["to wish, be wiling"],
    },
    {
      id: 16,
      front: "φιλος",
      back: ["adj", "loved, dear, friend"],
    },
    {
      id: 17,
      front: "μάλιστα",
      back: ["adv", "most, most of all"],
    },
    {
      id: 18,
      front: "ἔτερος",
      back: ["adj", "the other, one of two"],
    },
    {
      id: 19,
      front: "οὐδέ",
      back: ["part., adv", "but not, not even"],
    },
    {
      id: 20,
      front: "ἄγω",
      back: ["to lead, carry, bring"],
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
