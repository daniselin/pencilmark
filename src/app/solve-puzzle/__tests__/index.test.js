import solvePuzzle, {types as solvePuzzleTypes, actions} from "../index";

describe('solve puzzle reducer', () => {
    it('should return the initial state', () => {
        expect(solvePuzzle(undefined, {})).toEqual({
            currentDigits: '_________________________________________________________________________________',
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            cornerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                2: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                3: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                4: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                5: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                6: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                7: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                8: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                9: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            centerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                2: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                3: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                4: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                5: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                6: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                7: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                8: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                9: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            cellColors: '_________________________________________________________________________________',
            selectedCells: [],
            addingCells: true,
            conflictCells: [],
            errorMessage: "",
            loadedPuzzle: {
                given_digits: '_________________________________________________________________________________'
            },
            rating: 0,
            enterMode: "digit",
            isSaving: false,
            savedPuzzle: false
        });
    });

    it('should initialize solving', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE
        };
        expect(solvePuzzle({}, action)).toEqual({
            isLoading: true
        })
    })

    it('should initialize solve puzzle', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS,
            puzzle: {puzzle: "puzzle"}
        };
        expect(solvePuzzle({
            savedPuzzle: {
                currentDigits: "123456789",
                cellColors: "123",
                centerDigits: "456",
                cornerDigits: "789"
            },
            puzzle: {puzzle: "puzzle"}
        }, action)).toEqual({
            isLoading: false,
            currentDigits: "123456789",
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            selectedCells: [],
            conflictCells: [],
            cellColors: "123",
            loadedPuzzle: "puzzle",
            centerDigits: "456",
            cornerDigits: "789",
            savedPuzzle: false,
            puzzle: {puzzle: "puzzle"}
        })
    })

    it('should initialize solve puzzle - no saved puzzle', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS,
            puzzle: {
                puzzle: {
                    given_digits: "1"
                }
            }
        };
        expect(solvePuzzle({currentDigits: "1", puzzle: {puzzle: "puzzle"}}, action)).toEqual({
            isLoading: false,
            currentDigits: "1",
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            selectedCells: [],
            conflictCells: [],
            cellColors: '_________________________________________________________________________________',
            loadedPuzzle: {given_digits: "1"},
            puzzle: {puzzle: "puzzle"},
            centerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                2: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                3: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                4: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                5: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                6: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                7: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                8: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                9: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            cornerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                2: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                3: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                4: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                5: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                6: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                7: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                8: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                },
                9: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    2: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    3: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    4: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    5: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    6: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    7: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    8: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    },
                    9: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
        })
    })

    it('should click cell', () => {
        const action = {
            type: solvePuzzleTypes.CELL_CLICK,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({}, action)).toEqual({
            selectedCell: {
                box: 1,
                cell: 2,
                row: 3,
                col: 4
            },
            selectedCells: [],
        })
    })

    it('should control click cell - add to selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_CLICK,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            selectedCell: {box: 10},
            selectedCells: [{box: 2, cell: 2, row: 3, col: 4}]
        }, action)).toEqual({
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            selectedCells: [{box: 2, cell: 2, row: 3, col: 4}, {box: 1, cell: 2, row: 3, col: 4}],
        })
    })

    it('should control click cell - remove from selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_CLICK,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            selectedCell: {box: 10},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}]
        }, action)).toEqual({
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            selectedCells: [],
        })
    })

    it('should control click cell - one cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_CLICK,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({selectedCell: {box: 1, cell: 2, row: 3, col: 5}, selectedCells: []}, action)).toEqual({
            selectedCell: {
                box: 10,
                cell: 10,
                row: 10,
                col: 10
            },
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}, {box: 1, cell: 2, row: 3, col: 5}],
        })
    })

    it('should drag cell - add to selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({selectedCell: {box: 1, cell: 2, row: 3, col: 5}, selectedCells: []}, action)).toEqual({
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}],
        })
    })

    it('should drag cell - do not add to selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}]
        }, action)).toEqual({
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}],
        })
    })

    it('should control drag cell - do not add to selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: false,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}]
        }, action)).toEqual({
            addingCells: false,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [],
        })
    })

    it('should control drag cell - do add to selected cells', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: []
        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}],
        })
    })

    it('should control drag cell - do nothing', () => {
        const action = {
            type: solvePuzzleTypes.CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: false,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: []
        }, action)).toEqual({
            addingCells: false,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: [],
        })
    })

    it('should intialize cell drag', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: false,
            selectedCell: {box: 1, cell: 2, row: 3, col: 5},
            selectedCells: []
        }, action)).toEqual({
            addingCells: false,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [],
        })
    })

    it('should intialize control cell drag - same as selectedCell', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 1, cell: 2, row: 3, col: 4},
            selectedCells: []
        }, action)).toEqual({
            addingCells: false,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [],
        })
    })

    it('should intialize control cell drag - addingCells true', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: false,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 5}]
        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 5}],
        })
    })

    it('should intialize control cell drag - addingCells false', () => {
        const action = {
            type: solvePuzzleTypes.INITIALIZE_CONTROL_CELL_DRAG,
            box: 1, cell: 2, row: 3, col: 4
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}]
        }, action)).toEqual({
            addingCells: false,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}],
        })
    })

    it('should change cell value - single digit cell', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 1, cell: 2, row: 1, col: 1},
            selectedCells: [],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: "loadedPuzzle",
            cornerDigits: true,
            centerDigits: true,
            enterMode: "digit"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 1, cell: 2, row: 1, col: 1},
            selectedCells: [],
            currentDigits: "4234567890",
            cellColors: "1234567890",
            loadedPuzzle: "loadedPuzzle",
            cornerDigits: true,
            centerDigits: true,
            enterMode: "digit"
        })
    })

    it('should change cell value - multiple digit cells', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: true,
            centerDigits: true,
            enterMode: "digit"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "4234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: true,
            centerDigits: true,
            enterMode: "digit"
        })
    })

    it('should change cell value - multiple corner cells', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: true,
            enterMode: "corner"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: true,
            enterMode: "corner"
        })
    })

    it('should change cell value - single corner cell', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: true,
            enterMode: "corner"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: true,
            enterMode: "corner"
        })
    })

    it('should change cell value - multiple corner cells change to false', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: true,
            enterMode: "corner"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: true,
            enterMode: "corner"
        })
    })

    it('should change cell value - multiple centre cells change to false', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: true}}},
            cornerDigits: true,
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "centre"
        })
    })

    it('should change cell value - single center cell', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: true}}},
            cornerDigits: true,
            enterMode: "centre"
        })
    })

    it('should change cell value - multiple center cells', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: true}}},
            cornerDigits: true,
            enterMode: "centre"
        })
    })

    it('should change cell value - multiple colour', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}],
            currentDigits: "1234567890",
            cellColors: "4234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colour"
        })
    })

    it('should change cell value - single colour', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "1234567890",
            cellColors: "4234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colour"
        })
    })

    it('should not change cell value', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "do nothing"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "2345678901"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "do nothing"
        })
    })

    it('should delete cell value - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
            value: "4"
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colours"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: true,
            enterMode: "colours"
        })
    })

    it('should delete cell value - corner digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: true}}},
            cornerDigits: {1: {1: {4: true}}},
            enterMode: "corner"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: true}}},
            cornerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            enterMode: "corner"
        })
    })

    it('should delete cell value - centre digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {1: {1: {4: true}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            enterMode: "centre"
        })
    })

    it('should delete cell value - colour digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {1: {1: {4: true}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {1: {1: {4: true}}},
            enterMode: "colour"
        })
    })

    it('should delete cell value - colour mode center digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {1: {1: {4: true}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            cornerDigits: {1: {1: {4: true}}},
            enterMode: "colour"
        })
    })

    it('should delete cell value - colour mode corner digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {
                1: {
                    1: {
                        1: false,
                        2: false,
                        3: false,
                        4: false,
                        5: false,
                        6: false,
                        7: false,
                        8: false,
                        9: false
                    }
                }
            },
            centerDigits: {1: {1: {4: false}}},
            enterMode: "colour"
        })
    })

    it('should delete cell value - center mode colour digit - single cell selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCells: [{box: 10, cell: 10, row: 10, col: 10}],
            selectedCell: {box: 1, cell: 1, row: 1, col: 1},
            currentDigits: "_234567890",
            cellColors: "_234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"
        })
    })

    it('should delete cell values - all digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "1234567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"
        })
    })

    it('should delete cell values - corner mode - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}, 2: {4: true}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "corner"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {
                1:
                    {
                        1:
                            {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false},
                        2: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
                    }
            },
            centerDigits: {1: {1: {4: false}}},
            enterMode: "corner"
        })
    })

    it('should delete cell values - centre mode - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: true}, 2: {4: true}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {
                1:
                    {
                        1:
                            {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false},
                        2: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
                    }
            },
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "centre"
        })
    })

    it('should delete cell values - colour mode - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"
        })
    })

    it('should delete cell values - digit mode not all digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "_234567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "digit"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "digit"
        })
    })

    it('should delete cell values - colour mode not all digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "_234567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: false}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"
        })
    })

    it('should delete cell values - colour mode remove center digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {1: {1: {4: true}, 2: {4: true}}},
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            centerDigits: {
                1:
                    {
                        1:
                            {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false},
                        2: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
                    }
            },
            cornerDigits: {1: {1: {4: false}}},
            enterMode: "colour"
        })
    })

    it('should delete cell values - colour mode remove corner digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: true}, 2: {4: true}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "colour"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {
                1:
                    {
                        1:
                            {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false},
                        2: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
                    }
            },
            centerDigits: {1: {1: {4: false}}},
            enterMode: "colour"
        })
    })

    it('should delete cell values - centre mode remove colour digits - multiple cells selected', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "1234567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"
        })
    })

    it('should not delete cell values', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_DELETE,
        };
        expect(solvePuzzle({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"

        }, action)).toEqual({
            addingCells: true,
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [{box: 1, cell: 1, row: 1, col: 1}, {box: 1, cell: 2, row: 2, col: 1}],
            currentDigits: "__34567890",
            cellColors: "__34567890",
            loadedPuzzle: {given_digits: "___________"},
            cornerDigits: {1: {1: {4: false}}},
            centerDigits: {1: {1: {4: false}}},
            enterMode: "centre"
        })
    })

    it('should focus off cells', () => {
        const action = {
            type: solvePuzzleTypes.FOCUS_OFF_CELLS,
        };
        expect(solvePuzzle({}, action)).toEqual({
            selectedCell: {box: 10, cell: 10, row: 10, col: 10},
            selectedCells: [],
        })
    })

    it('should initialize cell value change', () => {
        const action = {
            type: solvePuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE,
        };
        expect(solvePuzzle({conflictCells: 'conflicts'}, action)).toEqual({
            conflictCells: []
        })
    })

    it('should update conflict cells', () => {
        const action = {
            type: solvePuzzleTypes.UPDATE_CONFLICT_CELLS,
            conflictCells: [{box: 1, cell: 2}]
        };
        expect(solvePuzzle({conflictCells: 'conflicts'}, action)).toEqual({
            conflictCells: [{box: 1, cell: 2}]
        })
    })

    it('should set rating', () => {
        const action = {
            type: solvePuzzleTypes.SET_RATING,
            newRating: 4
        };
        expect(solvePuzzle({}, action)).toEqual({
            rating: 8
        })
    })

    it('should set enter mode', () => {
        const action = {
            type: solvePuzzleTypes.CHANGE_ENTER_MODE,
            mode: 'digit'
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'digit'
        })
    })

    it('should rotate enter mode from digit to corner', () => {
        const action = {
            type: solvePuzzleTypes.ROTATE_ENTER_MODE
        };
        expect(solvePuzzle({enterMode: 'digit'}, action)).toEqual({
            enterMode: 'corner'
        })
    })

    it('should rotate enter mode from corner to centre', () => {
        const action = {
            type: solvePuzzleTypes.ROTATE_ENTER_MODE
        };
        expect(solvePuzzle({enterMode: 'corner'}, action)).toEqual({
            enterMode: 'centre'
        })
    })

    it('should rotate enter mode from centre to colour', () => {
        const action = {
            type: solvePuzzleTypes.ROTATE_ENTER_MODE
        };
        expect(solvePuzzle({enterMode: 'centre'}, action)).toEqual({
            enterMode: 'colour'
        })
    })

    it('should rotate enter mode from colour to digit', () => {
        const action = {
            type: solvePuzzleTypes.ROTATE_ENTER_MODE
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'digit'
        })
    })

    it('should prepare save puzzle request', () => {
        const action = {
            type: solvePuzzleTypes.SAVE_PUZZLE_REQUEST
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'colour',
            isSaving: true
        })
    })

    it('should prepare save puzzle success', () => {
        const action = {
            type: solvePuzzleTypes.SAVE_PUZZLE_SUCCESS
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'colour',
            isSaving: false
        })
    })

    it('should prepare save puzzle failure', () => {
        const action = {
            type: solvePuzzleTypes.SAVE_PUZZLE_FAILURE
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'colour',
            isSaving: false
        })
    })

    it('should load saved solution', () => {
        const action = {
            type: solvePuzzleTypes.LOAD_SAVED_SOLUTION,
            selectedPuzzle: {
                digits: '123',
                cell_colors: '456',
                corner_digits: '789',
                center_digits: '012'
            }
        };
        expect(solvePuzzle({enterMode: 'colour'}, action)).toEqual({
            enterMode: 'colour',
            savedPuzzle: {
                currentDigits: '123',
                cellColors: '456',
                cornerDigits: '789',
                centerDigits: '012'
            }
        })
    })

    describe('solve puzzle reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.initializeSolvePuzzle('query')).toEqual({
                type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE, id: 'query'
            })
            expect(actions.clickCell(1, 2, 3, 4)).toEqual({
                type: solvePuzzleTypes.CELL_CLICK, box: 1, cell: 2, row: 3, col: 4
            })
            expect(actions.controlClickCell(1, 2, 3, 4)).toEqual({
                type: solvePuzzleTypes.CONTROL_CELL_CLICK, box: 1, cell: 2, row: 3, col: 4
            })
            expect(actions.changeCellValue(1)).toEqual({
                type: solvePuzzleTypes.CELL_VALUE_CHANGE, value: 1
            })
            expect(actions.deleteCellValue()).toEqual({
                type: solvePuzzleTypes.CELL_VALUE_DELETE
            })
            expect(actions.dragCell(1, 2, 3, 4)).toEqual({
                type: solvePuzzleTypes.CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })
            expect(actions.controlDragCell(1, 2, 3, 4)).toEqual({
                type: solvePuzzleTypes.CONTROL_CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })
            expect(actions.initializeControlCellDrag(1, 2, 3, 4)).toEqual({
                type: solvePuzzleTypes.INITIALIZE_CONTROL_CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })
            expect(actions.focusOffCells()).toEqual({
                type: solvePuzzleTypes.FOCUS_OFF_CELLS
            })
            expect(actions.viewPuzzle()).toEqual({
                type: solvePuzzleTypes.VIEW_PUZZLE
            })
            expect(actions.setRating(4)).toEqual({
                type: solvePuzzleTypes.SET_RATING, newRating: 4
            })
            expect(actions.completePuzzle()).toEqual({
                type: solvePuzzleTypes.COMPLETE_PUZZLE_REQUEST
            })
            expect(actions.changeEnterMode('digit')).toEqual({
                type: solvePuzzleTypes.CHANGE_ENTER_MODE, mode: 'digit'
            })
            expect(actions.rotateEnterMode()).toEqual({
                type: solvePuzzleTypes.ROTATE_ENTER_MODE
            })
            expect(actions.savePuzzle()).toEqual({
                type: solvePuzzleTypes.SAVE_PUZZLE_REQUEST
            })
            expect(actions.initializeCellDrag()).toEqual({
                type: solvePuzzleTypes.INITIALIZE_CELL_DRAG
            })
        })
    })
})