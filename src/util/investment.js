/**
 * Calculates investment results based on initial investment, annual investment, expected return, and duration.
 *
 * @param {Object} params - The investment parameters.
 * @param {number} params.initialInvestment - The initial investment amount.
 * @param {number} params.annualInvestment - The annual investment amount.
 * @param {number} params.expectedReturn - The expected annual return percentage.
 * @param {number} params.duration - The investment duration in years.
 * @returns {Array} An array of investment data for each year.
 */
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

/**
 * A formatter object that formats numbers as US dollars.
 * @type {Intl.NumberFormat}
 */
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
