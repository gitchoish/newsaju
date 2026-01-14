import type { FourPillars } from './calendar';
import type { HeavenlyStem } from './stems';
import type { Element } from './elements';
import { ELEMENTS, calculateElementBalance } from './elements';

export interface DayMasterInterpretation {
    element: Element;
    polarity: 'Yang' | 'Yin';
    title: string;
    summary: string;
    strengths: string[];
    watchOuts: string[];
    advice: string;
}

/**
 * Day Master interpretations based on the Day Stem
 */
const DAY_MASTER_INTERPRETATIONS: Record<string, Omit<DayMasterInterpretation, 'element' | 'polarity'>> = {
    Gap: {
        title: 'The Pioneer',
        summary: 'You possess natural leadership qualities and a pioneering spirit. Like a tall tree reaching for the sky, you have ambition and the drive to achieve great things. You prefer to be at the forefront and are not afraid to take the lead.',
        strengths: [
            'Natural leadership abilities',
            'Strong sense of direction and purpose',
            'Courage to take initiative',
            'Clear thinking and decisive action',
            'Ability to inspire others',
        ],
        watchOuts: [
            'May come across as stubborn or inflexible',
            'Tendency to be too direct or blunt',
            'Can sometimes overlook small details',
            'May struggle with patience',
            'Risk of overconfidence',
        ],
        advice: 'Balance your natural leadership with openness to others\' perspectives. Remember that flexibility can be a strength, and collaboration often leads to better outcomes than going it alone.',
    },
    Eul: {
        title: 'The Diplomat',
        summary: 'You are adaptable and graceful, like a vine that finds its way around obstacles. Your strength lies in your flexibility and ability to work harmoniously with others. You have an artistic sensibility and can see beauty in everyday things.',
        strengths: [
            'Exceptional adaptability',
            'Diplomatic communication skills',
            'Artistic and creative talents',
            'Ability to find common ground',
            'Patience and persistence',
        ],
        watchOuts: [
            'May be perceived as indecisive',
            'Tendency to avoid confrontation',
            'Can be too accommodating',
            'May suppress own needs for harmony',
            'Risk of passive-aggressiveness',
        ],
        advice: 'Trust your inner strength even when choosing a gentle approach. Your flexibility is powerful, but remember to stand firm when your core values are at stake.',
    },
    Byeong: {
        title: 'The Radiant One',
        summary: 'Like the sun, you naturally illuminate the world around you. Your warmth and optimism attract others, and you have a gift for seeing the bright side of situations. You bring energy and enthusiasm wherever you go.',
        strengths: [
            'Infectious optimism and warmth',
            'Generous and giving nature',
            'Ability to motivate and inspire',
            'Strong presence and charisma',
            'Creative expression',
        ],
        watchOuts: [
            'May be too trusting or naive',
            'Tendency toward impulsiveness',
            'Can burn out from giving too much',
            'May overlook practical concerns',
            'Risk of being overly dramatic',
        ],
        advice: 'Your light is beautiful, but even the sun sets to rest. Learn to balance your generous spirit with self-care, and ground your enthusiasm with practical planning.',
    },
    Jeong: {
        title: 'The Refiner',
        summary: 'You are like a candle flame—gentle yet persistent, providing steady light and warmth. Your attention to detail and refined nature help you excel in areas requiring precision and thoughtfulness.',
        strengths: [
            'Excellent attention to detail',
            'Refined and cultured sensibilities',
            'Steady and persistent effort',
            'Deep thinking and analysis',
            'Loyal and devoted relationships',
        ],
        watchOuts: [
            'Tendency toward worry and anxiety',
            'Can be overly critical of self and others',
            'May struggle with big-picture thinking',
            'Risk of perfectionism paralysis',
            'Can hold onto grudges',
        ],
        advice: 'Your refined nature is a gift, but perfection is not always necessary. Learn to appreciate good enough and save your meticulous attention for what truly matters.',
    },
    Mu: {
        title: 'The Mountain',
        summary: 'Solid, reliable, and steadfast like a great mountain. You provide stability and support to those around you. People trust you because of your honest, practical nature and your commitment to your word.',
        strengths: [
            'Unwavering reliability',
            'Practical problem-solving skills',
            'Strong ethical foundation',
            'Patient and steady approach',
            'Ability to remain calm under pressure',
        ],
        watchOuts: [
            'Can be inflexible or resistant to change',
            'May appear boring or predictable',
            'Tendency to move too slowly',
            'Can be overly conservative',
            'Risk of missing opportunities',
        ],
        advice: 'Your stability is valuable, but mountains still experience weather and seasons. Embrace some degree of change and growth while maintaining your core strength.',
    },
    Gi: {
        title: 'The Nurturer',
        summary: 'Like fertile soil, you have a natural ability to nurture growth in others. You create environments where people and projects can flourish. Your supportive nature makes you invaluable in teams and relationships.',
        strengths: [
            'Natural nurturing abilities',
            'Keen attention to others\' needs',
            'Creating supportive environments',
            'Practical care and service',
            'Building lasting foundations',
        ],
        watchOuts: [
            'May neglect own needs',
            'Tendency toward worry about others',
            'Can be overly modest or self-deprecating',
            'Risk of being taken for granted',
            'May struggle with self-promotion',
        ],
        advice: 'Remember that you cannot pour from an empty cup. Your nurturing gifts are needed, but so is nurturing yourself. Take time to replenish your own resources.',
    },
    Gyeong: {
        title: 'The Warrior',
        summary: 'You have an inner strength and resolve that others can rely upon. Like forged steel, you have been shaped by life\'s challenges into something powerful and decisive. You stand up for what is right.',
        strengths: [
            'Strong moral backbone',
            'Decisive action under pressure',
            'Courage to face challenges',
            'Competitive drive to succeed',
            'Protection of loved ones',
        ],
        watchOuts: [
            'Can be too aggressive or confrontational',
            'Tendency to see things in black and white',
            'May damage relationships with bluntness',
            'Risk of acting too hastily',
            'Can be stubborn to a fault',
        ],
        advice: 'True strength includes knowing when not to fight. Balance your warrior spirit with wisdom about when to yield and when to stand firm. Soften your edges without losing your core.',
    },
    Sin: {
        title: 'The Artisan',
        summary: 'Refined and precise like a well-crafted jewel. You have an eye for quality and a desire for excellence in everything you do. Your sensitivity allows you to perceive subtleties others miss.',
        strengths: [
            'Exceptional taste and refinement',
            'Pursuit of excellence',
            'Sensitivity to beauty and quality',
            'Precise and careful work',
            'Elegant expression',
        ],
        watchOuts: [
            'Can be overly critical or picky',
            'Tendency toward melancholy',
            'May be too sensitive to criticism',
            'Risk of isolation from high standards',
            'Can appear cold or aloof',
        ],
        advice: 'Excellence is admirable, but connection is essential. Learn to appreciate imperfection in yourself and others. Your sensitivity is a gift—protect it, but don\'t let it isolate you.',
    },
    Im: {
        title: 'The Explorer',
        summary: 'Like a great river, you are powerful, adaptable, and always moving forward. Your resourcefulness and intelligence help you navigate any situation. You bring wisdom and strategic thinking to challenges.',
        strengths: [
            'Strategic intelligence',
            'Resourcefulness in any situation',
            'Adaptability to change',
            'Seeing beyond the obvious',
            'Inspiring others with vision',
        ],
        watchOuts: [
            'May be too calculating',
            'Tendency to take excessive risks',
            'Can appear detached or cold',
            'Risk of manipulation',
            'May struggle with commitment',
        ],
        advice: 'Your powerful flow can carve canyons, but rivers also need banks. Channel your tremendous energy with wisdom, and remember that depth matters as much as breadth.',
    },
    Gye: {
        title: 'The Sage',
        summary: 'Intuitive and perceptive like still, deep water. You have access to wisdom that comes from reflection and inner knowing. Your quiet strength and insight make you a valuable advisor and friend.',
        strengths: [
            'Deep intuition and insight',
            'Perceptive understanding of others',
            'Ability to see hidden patterns',
            'Quiet wisdom and reflection',
            'Spiritual or philosophical depth',
        ],
        watchOuts: [
            'May be overly passive or withdrawn',
            'Tendency toward escapism',
            'Can be hard to read or understand',
            'Risk of depression or melancholy',
            'May struggle with assertiveness',
        ],
        advice: 'Your depth is your treasure, but still waters must sometimes ripple. Share your insights with the world and take action on your wisdom. Balance reflection with engagement.',
    },
};

/**
 * Get Day Master interpretation from Four Pillars
 */
export function getDayMasterInterpretation(pillars: FourPillars): DayMasterInterpretation {
    const dayStem = pillars.day.stem;
    const interpretation = DAY_MASTER_INTERPRETATIONS[dayStem.romanized];

    return {
        element: dayStem.element,
        polarity: dayStem.polarity,
        ...interpretation,
    };
}

/**
 * Get element balance analysis
 */
export function getElementAnalysis(pillars: FourPillars): {
    balance: Record<Element, number>;
    dominant: Element | null;
    lacking: Element | null;
    analysis: string;
} {
    const elements: Element[] = [
        pillars.year.stem.element,
        pillars.year.branch.element,
        pillars.month.stem.element,
        pillars.month.branch.element,
        pillars.day.stem.element,
        pillars.day.branch.element,
    ];

    if (pillars.hour) {
        elements.push(pillars.hour.stem.element);
        elements.push(pillars.hour.branch.element);
    }

    const balance = calculateElementBalance(elements);

    // Find dominant and lacking elements
    let dominant: Element | null = null;
    let lacking: Element | null = null;
    let maxCount = 0;
    let minCount = Infinity;

    for (const [element, count] of Object.entries(balance) as [Element, number][]) {
        if (count > maxCount) {
            maxCount = count;
            dominant = element;
        }
        if (count < minCount) {
            minCount = count;
            lacking = element;
        }
    }

    // Generate analysis text
    let analysis = '';

    if (dominant) {
        const dominantInfo = ELEMENTS[dominant];
        analysis += `Your chart shows strong ${dominant} energy, suggesting tendencies toward ${dominantInfo.characteristics.slice(0, 3).join(', ').toLowerCase()}. `;
    }

    if (lacking && minCount === 0) {
        const lackingInfo = ELEMENTS[lacking];
        analysis += `${lacking} is absent from your visible pillars, which may indicate areas for development in ${lackingInfo.characteristics[0].toLowerCase()} and ${lackingInfo.characteristics[1].toLowerCase()}.`;
    }

    return { balance, dominant, lacking, analysis };
}
