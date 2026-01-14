import type { Element } from './elements';

/**
 * Ten Heavenly Stems (천간 / 天干)
 * The celestial cycle representing cosmic energy
 */
export interface HeavenlyStem {
    index: number;
    korean: string;
    chinese: string;
    romanized: string;
    element: Element;
    polarity: 'Yang' | 'Yin';
    meaning: string;
    characteristics: string[];
}

export const HEAVENLY_STEMS: HeavenlyStem[] = [
    {
        index: 0,
        korean: '갑',
        chinese: '甲',
        romanized: 'Gap',
        element: 'Wood',
        polarity: 'Yang',
        meaning: 'First, Beginning',
        characteristics: ['Leadership', 'Pioneer spirit', 'Straight-forward', 'Ambitious', 'Decisive'],
    },
    {
        index: 1,
        korean: '을',
        chinese: '乙',
        romanized: 'Eul',
        element: 'Wood',
        polarity: 'Yin',
        meaning: 'Sprout, Growth',
        characteristics: ['Flexible', 'Diplomatic', 'Artistic', 'Gentle', 'Adaptable'],
    },
    {
        index: 2,
        korean: '병',
        chinese: '丙',
        romanized: 'Byeong',
        element: 'Fire',
        polarity: 'Yang',
        meaning: 'Bright, Radiant',
        characteristics: ['Warm', 'Optimistic', 'Generous', 'Inspiring', 'Passionate'],
    },
    {
        index: 3,
        korean: '정',
        chinese: '丁',
        romanized: 'Jeong',
        element: 'Fire',
        polarity: 'Yin',
        meaning: 'Refined, Polished',
        characteristics: ['Detail-oriented', 'Refined', 'Intellectual', 'Careful', 'Persistent'],
    },
    {
        index: 4,
        korean: '무',
        chinese: '戊',
        romanized: 'Mu',
        element: 'Earth',
        polarity: 'Yang',
        meaning: 'Flourishing',
        characteristics: ['Reliable', 'Honest', 'Practical', 'Patient', 'Grounded'],
    },
    {
        index: 5,
        korean: '기',
        chinese: '己',
        romanized: 'Gi',
        element: 'Earth',
        polarity: 'Yin',
        meaning: 'Self, Personal',
        characteristics: ['Nurturing', 'Methodical', 'Supportive', 'Careful', 'Considerate'],
    },
    {
        index: 6,
        korean: '경',
        chinese: '庚',
        romanized: 'Gyeong',
        element: 'Metal',
        polarity: 'Yang',
        meaning: 'Change, Renewal',
        characteristics: ['Strong-willed', 'Righteous', 'Competitive', 'Decisive', 'Bold'],
    },
    {
        index: 7,
        korean: '신',
        chinese: '辛',
        romanized: 'Sin',
        element: 'Metal',
        polarity: 'Yin',
        meaning: 'New, Fresh',
        characteristics: ['Precise', 'Elegant', 'Sensitive', 'Refined', 'Perfectionist'],
    },
    {
        index: 8,
        korean: '임',
        chinese: '壬',
        romanized: 'Im',
        element: 'Water',
        polarity: 'Yang',
        meaning: 'Responsibility',
        characteristics: ['Intelligent', 'Resourceful', 'Strategic', 'Adventurous', 'Versatile'],
    },
    {
        index: 9,
        korean: '계',
        chinese: '癸',
        romanized: 'Gye',
        element: 'Water',
        polarity: 'Yin',
        meaning: 'Measure, Calculate',
        characteristics: ['Intuitive', 'Imaginative', 'Thoughtful', 'Perceptive', 'Mysterious'],
    },
];

/**
 * Get Heavenly Stem by index (0-9)
 */
export function getHeavenlyStem(index: number): HeavenlyStem {
    const normalizedIndex = ((index % 10) + 10) % 10;
    return HEAVENLY_STEMS[normalizedIndex];
}
