import type { Element } from './elements';

/**
 * Twelve Earthly Branches (지지 / 地支)
 * The terrestrial cycle representing earthly manifestations
 */
export interface EarthlyBranch {
    index: number;
    korean: string;
    chinese: string;
    romanized: string;
    animal: string;
    animalEmoji: string;
    element: Element;
    season: string;
    month: number;  // Traditional month (1-12)
    hourStart: number;  // 24-hour format
    hourEnd: number;
    characteristics: string[];
}

export const EARTHLY_BRANCHES: EarthlyBranch[] = [
    {
        index: 0,
        korean: '자',
        chinese: '子',
        romanized: 'Ja',
        animal: 'Rat',
        animalEmoji: '🐀',
        element: 'Water',
        season: 'Winter',
        month: 11,
        hourStart: 23,
        hourEnd: 1,
        characteristics: ['Clever', 'Quick-witted', 'Resourceful', 'Adaptable', 'Charming'],
    },
    {
        index: 1,
        korean: '축',
        chinese: '丑',
        romanized: 'Chuk',
        animal: 'Ox',
        animalEmoji: '🐂',
        element: 'Earth',
        season: 'Winter',
        month: 12,
        hourStart: 1,
        hourEnd: 3,
        characteristics: ['Diligent', 'Dependable', 'Patient', 'Methodical', 'Strong'],
    },
    {
        index: 2,
        korean: '인',
        chinese: '寅',
        romanized: 'In',
        animal: 'Tiger',
        animalEmoji: '🐅',
        element: 'Wood',
        season: 'Spring',
        month: 1,
        hourStart: 3,
        hourEnd: 5,
        characteristics: ['Brave', 'Confident', 'Competitive', 'Unpredictable', 'Authoritative'],
    },
    {
        index: 3,
        korean: '묘',
        chinese: '卯',
        romanized: 'Myo',
        animal: 'Rabbit',
        animalEmoji: '🐇',
        element: 'Wood',
        season: 'Spring',
        month: 2,
        hourStart: 5,
        hourEnd: 7,
        characteristics: ['Gentle', 'Elegant', 'Alert', 'Quick', 'Skillful'],
    },
    {
        index: 4,
        korean: '진',
        chinese: '辰',
        romanized: 'Jin',
        animal: 'Dragon',
        animalEmoji: '🐉',
        element: 'Earth',
        season: 'Spring',
        month: 3,
        hourStart: 7,
        hourEnd: 9,
        characteristics: ['Powerful', 'Lucky', 'Ambitious', 'Confident', 'Enthusiastic'],
    },
    {
        index: 5,
        korean: '사',
        chinese: '巳',
        romanized: 'Sa',
        animal: 'Snake',
        animalEmoji: '🐍',
        element: 'Fire',
        season: 'Summer',
        month: 4,
        hourStart: 9,
        hourEnd: 11,
        characteristics: ['Wise', 'Intuitive', 'Graceful', 'Determined', 'Mysterious'],
    },
    {
        index: 6,
        korean: '오',
        chinese: '午',
        romanized: 'O',
        animal: 'Horse',
        animalEmoji: '🐴',
        element: 'Fire',
        season: 'Summer',
        month: 5,
        hourStart: 11,
        hourEnd: 13,
        characteristics: ['Energetic', 'Active', 'Free-spirited', 'Passionate', 'Independent'],
    },
    {
        index: 7,
        korean: '미',
        chinese: '未',
        romanized: 'Mi',
        animal: 'Goat',
        animalEmoji: '🐐',
        element: 'Earth',
        season: 'Summer',
        month: 6,
        hourStart: 13,
        hourEnd: 15,
        characteristics: ['Gentle', 'Creative', 'Artistic', 'Kind', 'Sympathetic'],
    },
    {
        index: 8,
        korean: '신',
        chinese: '申',
        romanized: 'Sin',
        animal: 'Monkey',
        animalEmoji: '🐒',
        element: 'Metal',
        season: 'Autumn',
        month: 7,
        hourStart: 15,
        hourEnd: 17,
        characteristics: ['Clever', 'Curious', 'Mischievous', 'Witty', 'Versatile'],
    },
    {
        index: 9,
        korean: '유',
        chinese: '酉',
        romanized: 'Yu',
        animal: 'Rooster',
        animalEmoji: '🐓',
        element: 'Metal',
        season: 'Autumn',
        month: 8,
        hourStart: 17,
        hourEnd: 19,
        characteristics: ['Observant', 'Hardworking', 'Resourceful', 'Confident', 'Courageous'],
    },
    {
        index: 10,
        korean: '술',
        chinese: '戌',
        romanized: 'Sul',
        animal: 'Dog',
        animalEmoji: '🐕',
        element: 'Earth',
        season: 'Autumn',
        month: 9,
        hourStart: 19,
        hourEnd: 21,
        characteristics: ['Loyal', 'Honest', 'Faithful', 'Prudent', 'Warm'],
    },
    {
        index: 11,
        korean: '해',
        chinese: '亥',
        romanized: 'Hae',
        animal: 'Pig',
        animalEmoji: '🐷',
        element: 'Water',
        season: 'Winter',
        month: 10,
        hourStart: 21,
        hourEnd: 23,
        characteristics: ['Sincere', 'Generous', 'Compassionate', 'Diligent', 'Sociable'],
    },
];

/**
 * Get Earthly Branch by index (0-11)
 */
export function getEarthlyBranch(index: number): EarthlyBranch {
    const normalizedIndex = ((index % 12) + 12) % 12;
    return EARTHLY_BRANCHES[normalizedIndex];
}

/**
 * Get Earthly Branch by hour (0-23)
 */
export function getEarthlyBranchByHour(hour: number): EarthlyBranch {
    // The first branch (Rat) covers 23:00-01:00
    const adjustedHour = (hour + 1) % 24;
    const branchIndex = Math.floor(adjustedHour / 2);
    return EARTHLY_BRANCHES[branchIndex];
}

/**
 * Branch compatibility - Six Harmonies (육합)
 */
export const SIX_HARMONIES: [number, number][] = [
    [0, 1],   // Rat-Ox
    [2, 11],  // Tiger-Pig
    [3, 10],  // Rabbit-Dog
    [4, 9],   // Dragon-Rooster
    [5, 8],   // Snake-Monkey
    [6, 7],   // Horse-Goat
];

/**
 * Branch conflict - Six Clashes (육충)
 */
export const SIX_CLASHES: [number, number][] = [
    [0, 6],   // Rat-Horse
    [1, 7],   // Ox-Goat
    [2, 8],   // Tiger-Monkey
    [3, 9],   // Rabbit-Rooster
    [4, 10],  // Dragon-Dog
    [5, 11],  // Snake-Pig
];

/**
 * Check if two branches are in harmony
 */
export function areBranchesInHarmony(branch1: number, branch2: number): boolean {
    return SIX_HARMONIES.some(
        ([a, b]) => (branch1 === a && branch2 === b) || (branch1 === b && branch2 === a)
    );
}

/**
 * Check if two branches are in conflict
 */
export function areBranchesInConflict(branch1: number, branch2: number): boolean {
    return SIX_CLASHES.some(
        ([a, b]) => (branch1 === a && branch2 === b) || (branch1 === b && branch2 === a)
    );
}
