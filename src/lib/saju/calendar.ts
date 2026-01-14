import { getHeavenlyStem } from './stems';
import { getEarthlyBranch, getEarthlyBranchByHour } from './branches';
import type { HeavenlyStem } from './stems';
import type { EarthlyBranch } from './branches';

/**
 * A single pillar consisting of a Heavenly Stem and Earthly Branch
 */
export interface Pillar {
    stem: HeavenlyStem;
    branch: EarthlyBranch;
    label: string;
    chinese: string;
}

/**
 * Four Pillars result
 */
export interface FourPillars {
    year: Pillar;
    month: Pillar;
    day: Pillar;
    hour: Pillar | null;
}

/**
 * Calculate the Heavenly Stem index for a given year
 * Based on the cycle starting from 甲 (Gap) = 4 in Gregorian years ending in 4
 */
export function getYearStemIndex(year: number): number {
    return (year - 4) % 10;
}

/**
 * Calculate the Earthly Branch index for a given year
 * Based on the cycle where years ending in 4 are 子 (Rat) years
 */
export function getYearBranchIndex(year: number): number {
    return (year - 4) % 12;
}

/**
 * Get the Month Stem index based on Year Stem and Month
 * Using the traditional formula: (Year Stem × 2 + Month) % 10
 */
export function getMonthStemIndex(yearStemIndex: number, month: number): number {
    // The formula for month stem based on year stem
    // Month 1 (Tiger month) corresponds to index 2
    const baseIndex = (yearStemIndex * 2 + 2) % 10;
    return (baseIndex + month - 1) % 10;
}

/**
 * Get the Month Branch index
 * Month 1 = Tiger (index 2), Month 2 = Rabbit (index 3), etc.
 */
export function getMonthBranchIndex(month: number): number {
    // Month 1 (Feb in solar approximation) = Tiger (index 2)
    return (month + 1) % 12;
}

/**
 * Calculate the Day Stem index using a simplified algorithm
 * This is an approximation based on the sexagenary cycle
 */
export function getDayIndices(year: number, month: number, day: number): { stemIndex: number; branchIndex: number } {
    // Calculate Julian Day Number (simplified)
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;

    const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

    // The sexagenary cycle repeats every 60 days
    // Reference point: JDN 0 is approximately 4714 BC Nov 24 which corresponds to 甲子 (Gap-Ja)
    const sexagenaryCycle = (jdn + 49) % 60;

    return {
        stemIndex: sexagenaryCycle % 10,
        branchIndex: sexagenaryCycle % 12,
    };
}

/**
 * Get the Hour Stem index based on Day Stem
 */
export function getHourStemIndex(dayStemIndex: number, hourBranchIndex: number): number {
    // The first hour of a day (子時, Rat hour) stem is determined by the day stem
    // Formula: (Day Stem × 2) % 10 = Rat hour stem index
    const ratHourStemIndex = (dayStemIndex * 2) % 10;
    return (ratHourStemIndex + hourBranchIndex) % 10;
}

/**
 * Calculate Four Pillars from birth information
 */
export function calculateFourPillars(
    year: number,
    month: number,
    day: number,
    hour?: number
): FourPillars {
    // Year Pillar
    const yearStemIndex = getYearStemIndex(year);
    const yearBranchIndex = getYearBranchIndex(year);

    // Month Pillar
    const monthStemIndex = getMonthStemIndex(yearStemIndex, month);
    const monthBranchIndex = getMonthBranchIndex(month);

    // Day Pillar
    const { stemIndex: dayStemIndex, branchIndex: dayBranchIndex } = getDayIndices(year, month, day);

    // Hour Pillar (if hour is provided)
    let hourPillar: Pillar | null = null;
    if (hour !== undefined && hour >= 0 && hour <= 23) {
        const hourBranch = getEarthlyBranchByHour(hour);
        const hourStemIndex = getHourStemIndex(dayStemIndex, hourBranch.index);
        const hourStem = getHeavenlyStem(hourStemIndex);

        hourPillar = {
            stem: hourStem,
            branch: hourBranch,
            label: 'Hour',
            chinese: `${hourStem.chinese}${hourBranch.chinese}`,
        };
    }

    // Build pillars
    const yearStem = getHeavenlyStem(yearStemIndex);
    const yearBranch = getEarthlyBranch(yearBranchIndex);

    const monthStem = getHeavenlyStem(monthStemIndex);
    const monthBranch = getEarthlyBranch(monthBranchIndex);

    const dayStem = getHeavenlyStem(dayStemIndex);
    const dayBranch = getEarthlyBranch(dayBranchIndex);

    return {
        year: {
            stem: yearStem,
            branch: yearBranch,
            label: 'Year',
            chinese: `${yearStem.chinese}${yearBranch.chinese}`,
        },
        month: {
            stem: monthStem,
            branch: monthBranch,
            label: 'Month',
            chinese: `${monthStem.chinese}${monthBranch.chinese}`,
        },
        day: {
            stem: dayStem,
            branch: dayBranch,
            label: 'Day',
            chinese: `${dayStem.chinese}${dayBranch.chinese}`,
        },
        hour: hourPillar,
    };
}
