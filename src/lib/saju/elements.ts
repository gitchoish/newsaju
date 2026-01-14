/**
 * Five Elements (오행 / 五行) - The fundamental forces in Saju
 */
export type Element = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';

export interface ElementInfo {
    korean: string;
    chinese: string;
    color: string;
    season: string;
    direction: string;
    characteristics: string[];
    generates: Element;  // What this element creates
    controls: Element;   // What this element overcomes
}

export const ELEMENTS: Record<Element, ElementInfo> = {
    Wood: {
        korean: '목',
        chinese: '木',
        color: '#22c55e',
        season: 'Spring',
        direction: 'East',
        characteristics: ['Growth', 'Flexibility', 'Creativity', 'Kindness', 'Expansion'],
        generates: 'Fire',
        controls: 'Earth',
    },
    Fire: {
        korean: '화',
        chinese: '火',
        color: '#ef4444',
        season: 'Summer',
        direction: 'South',
        characteristics: ['Passion', 'Energy', 'Warmth', 'Joy', 'Transformation'],
        generates: 'Earth',
        controls: 'Metal',
    },
    Earth: {
        korean: '토',
        chinese: '土',
        color: '#eab308',
        season: 'Late Summer',
        direction: 'Center',
        characteristics: ['Stability', 'Nurturing', 'Trust', 'Patience', 'Grounding'],
        generates: 'Metal',
        controls: 'Water',
    },
    Metal: {
        korean: '금',
        chinese: '金',
        color: '#94a3b8',
        season: 'Autumn',
        direction: 'West',
        characteristics: ['Precision', 'Strength', 'Justice', 'Discipline', 'Organization'],
        generates: 'Water',
        controls: 'Wood',
    },
    Water: {
        korean: '수',
        chinese: '水',
        color: '#3b82f6',
        season: 'Winter',
        direction: 'North',
        characteristics: ['Wisdom', 'Adaptability', 'Depth', 'Intuition', 'Flow'],
        generates: 'Wood',
        controls: 'Fire',
    },
};

/**
 * Get the element relationship between two elements
 */
export function getElementRelationship(element1: Element, element2: Element): 'generating' | 'controlling' | 'weakening' | 'clashing' | 'same' {
    if (element1 === element2) return 'same';
    if (ELEMENTS[element1].generates === element2) return 'generating';
    if (ELEMENTS[element1].controls === element2) return 'controlling';
    if (ELEMENTS[element2].generates === element1) return 'weakening';
    if (ELEMENTS[element2].controls === element1) return 'clashing';
    return 'same';
}

/**
 * Calculate element balance from a list of elements
 */
export function calculateElementBalance(elements: Element[]): Record<Element, number> {
    const balance: Record<Element, number> = {
        Wood: 0,
        Fire: 0,
        Earth: 0,
        Metal: 0,
        Water: 0,
    };

    for (const element of elements) {
        balance[element]++;
    }

    return balance;
}
