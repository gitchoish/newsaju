import type { FourPillars } from './calendar';
import { getElementRelationship, type Element } from './elements';
import { areBranchesInHarmony, areBranchesInConflict } from './branches';

export interface CompatibilityScore {
    overall: number;
    communication: number;
    values: number;
    emotionalStyle: number;
    conflictHandling: number;
    growth: number;
}

export interface CompatibilityResult {
    scores: CompatibilityScore;
    summary: string;
    strengths: string[];
    challenges: string[];
    tips: string[];
}

/**
 * Calculate compatibility between two sets of Four Pillars
 */
export function calculateCompatibility(
    pillars1: FourPillars,
    pillars2: FourPillars
): CompatibilityResult {
    // Calculate individual scores
    const communication = calculateCommunicationScore(pillars1, pillars2);
    const values = calculateValuesScore(pillars1, pillars2);
    const emotionalStyle = calculateEmotionalScore(pillars1, pillars2);
    const conflictHandling = calculateConflictScore(pillars1, pillars2);
    const growth = calculateGrowthScore(pillars1, pillars2);

    // Overall is weighted average
    const overall = Math.round(
        communication * 0.2 +
        values * 0.25 +
        emotionalStyle * 0.25 +
        conflictHandling * 0.15 +
        growth * 0.15
    );

    const scores: CompatibilityScore = {
        overall,
        communication,
        values,
        emotionalStyle,
        conflictHandling,
        growth,
    };

    const { summary, strengths, challenges, tips } = generateAnalysis(scores, pillars1, pillars2);

    return {
        scores,
        summary,
        strengths,
        challenges,
        tips,
    };
}

/**
 * Communication compatibility based on Day Stems
 */
function calculateCommunicationScore(pillars1: FourPillars, pillars2: FourPillars): number {
    let score = 50; // Base score

    const stem1 = pillars1.day.stem;
    const stem2 = pillars2.day.stem;

    // Same element enhances understanding
    if (stem1.element === stem2.element) {
        score += 20;
    }

    // Yin-Yang balance is positive
    if (stem1.polarity !== stem2.polarity) {
        score += 15;
    }

    // Check element relationship
    const relationship = getElementRelationship(stem1.element, stem2.element);
    switch (relationship) {
        case 'generating':
            score += 15;
            break;
        case 'controlling':
            score -= 10;
            break;
        case 'clashing':
            score -= 15;
            break;
    }

    return Math.max(0, Math.min(100, score));
}

/**
 * Values compatibility based on Month Pillars
 */
function calculateValuesScore(pillars1: FourPillars, pillars2: FourPillars): number {
    let score = 50;

    // Check branch harmony/conflict
    if (areBranchesInHarmony(pillars1.month.branch.index, pillars2.month.branch.index)) {
        score += 25;
    }
    if (areBranchesInConflict(pillars1.month.branch.index, pillars2.month.branch.index)) {
        score -= 20;
    }

    // Same month element adds understanding
    if (pillars1.month.stem.element === pillars2.month.stem.element) {
        score += 15;
    }

    // Check year harmony (family/background compatibility)
    if (areBranchesInHarmony(pillars1.year.branch.index, pillars2.year.branch.index)) {
        score += 10;
    }

    return Math.max(0, Math.min(100, score));
}

/**
 * Emotional style based on Hour Pillars and Day Branches
 */
function calculateEmotionalScore(pillars1: FourPillars, pillars2: FourPillars): number {
    let score = 55;

    // Day branch compatibility
    if (areBranchesInHarmony(pillars1.day.branch.index, pillars2.day.branch.index)) {
        score += 25;
    }
    if (areBranchesInConflict(pillars1.day.branch.index, pillars2.day.branch.index)) {
        score -= 15;
    }

    // Hour pillars if available
    if (pillars1.hour && pillars2.hour) {
        if (areBranchesInHarmony(pillars1.hour.branch.index, pillars2.hour.branch.index)) {
            score += 15;
        }
        if (pillars1.hour.stem.element === pillars2.hour.stem.element) {
            score += 10;
        }
    }

    return Math.max(0, Math.min(100, score));
}

/**
 * Conflict handling based on element interactions
 */
function calculateConflictScore(pillars1: FourPillars, pillars2: FourPillars): number {
    let score = 60;

    // Check for controlling relationships
    const dayRelation = getElementRelationship(
        pillars1.day.stem.element,
        pillars2.day.stem.element
    );

    if (dayRelation === 'controlling' || dayRelation === 'clashing') {
        score -= 15;
    }

    // Year branch conflicts indicate family tension
    if (areBranchesInConflict(pillars1.year.branch.index, pillars2.year.branch.index)) {
        score -= 10;
    }

    // Balancing polarities help in conflict resolution
    const samePolarity = pillars1.day.stem.polarity === pillars2.day.stem.polarity;
    if (!samePolarity) {
        score += 15;
    }

    return Math.max(0, Math.min(100, score));
}

/**
 * Growth potential based on complementary elements
 */
function calculateGrowthScore(pillars1: FourPillars, pillars2: FourPillars): number {
    let score = 55;

    // Check if each person's element generates the other's
    const relationship1to2 = getElementRelationship(
        pillars1.day.stem.element,
        pillars2.day.stem.element
    );
    const relationship2to1 = getElementRelationship(
        pillars2.day.stem.element,
        pillars1.day.stem.element
    );

    if (relationship1to2 === 'generating' || relationship2to1 === 'generating') {
        score += 20;
    }

    // Different elements bring diversity
    const uniqueElements = new Set([
        pillars1.day.stem.element,
        pillars2.day.stem.element,
        pillars1.month.stem.element,
        pillars2.month.stem.element,
    ]);
    score += (uniqueElements.size - 1) * 5;

    return Math.max(0, Math.min(100, score));
}

/**
 * Generate human-readable analysis
 */
function generateAnalysis(
    scores: CompatibilityScore,
    pillars1: FourPillars,
    pillars2: FourPillars
): { summary: string; strengths: string[]; challenges: string[]; tips: string[] } {
    const strengths: string[] = [];
    const challenges: string[] = [];
    const tips: string[] = [];

    // Summary based on overall score
    let summary: string;
    if (scores.overall >= 80) {
        summary = 'This pairing shows exceptional natural harmony. Your energies complement each other beautifully, creating a foundation for deep understanding and mutual growth.';
    } else if (scores.overall >= 65) {
        summary = 'A solid compatibility with good potential. While you may face some differences, your combined energies offer opportunities for a balanced and fulfilling relationship.';
    } else if (scores.overall >= 50) {
        summary = 'A moderate match with areas requiring conscious effort. Success depends on mutual understanding and willingness to work through differences.';
    } else {
        summary = 'This pairing may face significant challenges. However, with awareness and effort, any relationship can grow. Focus on understanding each other\'s perspectives.';
    }

    // Communication analysis
    if (scores.communication >= 70) {
        strengths.push('Natural ease in communication and expressing ideas to each other');
    } else if (scores.communication < 50) {
        challenges.push('May need extra effort to understand each other\'s communication styles');
        tips.push('Practice active listening and ask clarifying questions before reacting');
    }

    // Values analysis
    if (scores.values >= 70) {
        strengths.push('Shared core values provide a strong foundation for the relationship');
    } else if (scores.values < 50) {
        challenges.push('Different fundamental values may lead to recurring disagreements');
        tips.push('Identify shared values early and build your relationship around them');
    }

    // Emotional style analysis
    if (scores.emotionalStyle >= 70) {
        strengths.push('Emotional wavelengths align well, creating natural intimacy');
    } else if (scores.emotionalStyle < 50) {
        challenges.push('Different emotional needs and expression styles may cause frustration');
        tips.push('Learn each other\'s emotional language and needs');
    }

    // Conflict handling analysis
    if (scores.conflictHandling >= 70) {
        strengths.push('Good potential to resolve conflicts constructively');
    } else if (scores.conflictHandling < 50) {
        challenges.push('Conflict resolution may be challenging without conscious effort');
        tips.push('Establish ground rules for disagreements and take breaks when emotions run high');
    }

    // Growth analysis
    if (scores.growth >= 70) {
        strengths.push('Strong potential for mutual personal development and inspiration');
    } else if (scores.growth < 50) {
        challenges.push('May need to actively seek ways to grow together');
        tips.push('Set shared goals and support each other\'s individual development');
    }

    // Add general tips based on element analysis
    const elem1 = pillars1.day.stem.element;
    const elem2 = pillars2.day.stem.element;

    if (elem1 !== elem2) {
        tips.push(`Appreciate how ${elem1} and ${elem2} energies can complement each other`);
    }

    // Add positive note if needed
    if (challenges.length > 0 && tips.length > 0) {
        tips.push('Remember that awareness of potential challenges is the first step toward building a stronger bond');
    }

    return { summary, strengths, challenges, tips };
}
