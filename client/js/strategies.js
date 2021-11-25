const FOUR_OR_MORE_H17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["Ds","Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "Sup" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const FOUR_OR_MORE_H17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["Ds","Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["H", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "Sup" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const FOUR_OR_MORE_S17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","H"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const FOUR_OR_MORE_S17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","H"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["H", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const DOUBLE_H17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["Ds","Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "P", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const DOUBLE_H17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["Ds","Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const DOUBLE_S17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Sus",  "Sus" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "P", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const DOUBLE_S17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["Dh","Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const SINGLE_H17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["Dh","Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "P", "H", "H", "H" ],
        8:  ["H", "H", "P", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "P", "H", "Sus","Suh" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const SINGLE_H17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["Dh","Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "Sus", "Suh" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const SINGLE_S17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh", "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["Dh","Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "S" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "P", "H", "H", "H" ],
        8:  ["H", "H", "P", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "P", "H", "Sus","H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const SINGLE_S17_NDAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H",    "H", "H" ],
        9:  ["Dh","Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "H",  "Suh", "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["Dh","Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "S" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["H", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["H", "H", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "Sus","H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const CHARTS = {
    "FOUR_OR_MORE_S17_DAS": ["/img/4ormore_s17_das.png","FOUR-OR-MORE S17 DAS"],
    "FOUR_OR_MORE_S17_NDAS": ["img/4ormore_s17_ndas.png","FOUR-OR-MORE S17 NDAS"],
    "FOUR_OR_MORE_H17_DAS": ["img/4ormore_h17_das.png","FOUR-OR-MORE H17 DAS"],
    "FOUR_OR_MORE_H17_NDAS": ["img/4ormore_h17_ndas.png","FOUR-OR-MORE H17 NDAS"],
    
    "DOUBLE_S17_DAS": ["img/double_s17_das.png","DOUBLE DECK S17 DAS"],
    "DOUBLE_S17_NDAS": ["img/double_s17_ndas.png","DOUBLE DECK S17 NDAS"],
    "DOUBLE_H17_DAS": ["img/double_h17_das.png","DOUBLE DECK H17 DAS"],
    "DOUBLE_H17_NDAS": ["img/double_h17_ndas.png","DOUBLE DECK H17 NDAS"],

    "SINGLE_S17_DAS": ["img/single_s17_das.png","SINGLE DECK S17 DAS"],
    "SINGLE_S17_NDAS": ["img/single_s17_ndas.png","SINGLE DECK S17 NDAS"],
    "SINGLE_H17_DAS": ["img/single_h17_das.png","SINGLE DECK H17 DAS"],
    "SINGLE_H17_NDAS": ["img/single_h17_ndas.png","SINGLE DECK H17 NDAS"],
}

const ACTION = {
	HIT: "hits",
	STAND: "stands",
    DOUBLE: "doubles",
    SPLIT: "splits",
	SURRENDER: "surrenders"
};

var BLACKJACK_STRATEGY = FOUR_OR_MORE_H17_DAS;
var BLACKJACK_STRATEGY_CHART = CHARTS["FOUR_OR_MORE_H17_DAS"];

function updateStrategy()
{
    
    if (DECK_SIZE >=4)
    {
        if (HIT_ON_SOFT_17)
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_H17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["FOUR_OR_MORE_H17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_H17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["FOUR_OR_MORE_H17_NDAS"];
            }
        }
        else
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_S17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["FOUR_OR_MORE_S17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_S17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["FOUR_OR_MORE_S17_NDAS"];
            }
        }
    }
    else if (DECK_SIZE == 2)
    {
        if (HIT_ON_SOFT_17)
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = DOUBLE_H17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["DOUBLE_H17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = DOUBLE_H17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["DOUBLE_H17_NDAS"];
            }
        }
        else
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = DOUBLE_S17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["DOUBLE_S17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = DOUBLE_S17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["DOUBLE_S17_NDAS"];
            }
        }
    }
    else if (DECK_SIZE == 1)
    {
        if (HIT_ON_SOFT_17)
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = SINGLE_H17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["SINGLE_H17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = SINGLE_H17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["SINGLE_H17_NDAS"];
            }
        }
        else
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = SINGLE_S17_DAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["SINGLE_S17_DAS"];
            }
            else
            {
                BLACKJACK_STRATEGY = SINGLE_S17_NDAS;
                BLACKJACK_STRATEGY_CHART = CHARTS["SINGLE_S17_NDAS"];
            }
        };
    }
    else
    {
        alertAndDispose("deck size invalid");
    }
    
}

function checkStrategy(action, dealerHand, playerHand, playerCards)
{
    let isPair = bjIsPair(playerCards);

    let playerScore = parseInt(playerHand.find(".score").attr("score"));
    let isSoftHand = playerHand.find(".score").attr("isSoftHand") == "true";
    let dealerScore = parseInt(dealerHand.find(".score").attr("score"));

    console.log(isPair, playerScore, isSoftHand, dealerScore);
    let actionCategory = null;
    if (isPair)
    {
        actionCategory = BLACKJACK_STRATEGY["pair"];
    }
    else
    {
        if (isSoftHand)
        {
            actionCategory = BLACKJACK_STRATEGY["soft"];
        }
        else
        {
            actionCategory = BLACKJACK_STRATEGY["hard"];
        }
    }
    console.log(actionCategory);
    let correctAction = actionCategory[playerScore][dealerScore-2];

    let playerScoreString = playerHand.find(".score").text();
    let dealerScoreString = dealerHand.find(".score").text();
    let playerNumber = parseInt(playerHand.attr("playerID"))+1;

    let wrongColor = "#c90000";
    let correctColor = "white";
    switch (correctAction)
    {
        case "H":
            if (action === ACTION.HIT)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
            }
            break;
        case "S":
            if (action === ACTION.STAND)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
            }
            break;
        case "P":
            if (action === ACTION.SPLIT)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should split)", wrongColor);
            }
            break;
        case "Dh":
            if (!$("#double").prop("disabled"))
            {
                if (action === ACTION.DOUBLE)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should double)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.HIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
                }
            }
            break;
        case "Ds":
            if (!$("#double").prop("disabled"))
            {
                if (action === ACTION.DOUBLE)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should double)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.STAND)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
                }
            }
            break;
        case "Suh":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.HIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
                }
            }
            break;
        case "Sus":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.STAND)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
                }
            }
            break;
        case "Sup":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.SPLIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should split)", wrongColor);
                }
            }
            break;
        default:
            alertAndDispose("action not supported!");
    }
}