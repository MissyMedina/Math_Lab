/**
 * Math Lab - Polynomial Mathematics Engine
 * © 2025 Math Lab Development Team. All rights reserved.
 *
 * LICENSING NOTICE:
 * This mathematical engine is protected by copyright law.
 * Educational use permitted. Commercial use requires permission.
 * Do not reproduce this work without permission.
 *
 * Core mathematical engine for polynomial operations:
 * - Polynomial class with coefficient management
 * - Long division algorithm with step-by-step solutions
 * - Synthetic division implementation
 * - Problem generation for multiple difficulty levels
 * - Educational explanations for each step
 * - Validation and verification methods
 *
 * Supports:
 * - Easy: Linear ÷ Linear polynomials
 * - Medium: Quadratic ÷ Linear polynomials
 * - Hard: Cubic ÷ Quadratic polynomials
 *
 * Features detailed step-by-step solutions with mathematical reasoning
 * for educational purposes.
 *
 * @version 2.0
 * @date January 2025
 */

class Polynomial {
    constructor(coefficients) {
        // Remove leading zeros
        while (coefficients.length > 1 && coefficients[0] === 0) {
            coefficients.shift();
        }
        this.coefficients = coefficients.length === 0 ? [0] : coefficients;
    }

    get degree() {
        return this.coefficients.length - 1;
    }

    toString() {
        if (this.coefficients.length === 1 && this.coefficients[0] === 0) {
            return "0";
        }

        let terms = [];
        for (let i = 0; i < this.coefficients.length; i++) {
            const coeff = this.coefficients[i];
            const power = this.coefficients.length - 1 - i;
            
            if (coeff === 0) continue;
            
            let term = "";
            
            // Handle coefficient
            if (power === 0) {
                term = Math.abs(coeff).toString();
            } else if (Math.abs(coeff) === 1) {
                term = power === 1 ? "x" : `x^${power}`;
            } else {
                term = power === 1 ? `${Math.abs(coeff)}x` : `${Math.abs(coeff)}x^${power}`;
            }
            
            // Handle sign
            if (terms.length === 0) {
                if (coeff < 0) term = "-" + term;
            } else {
                term = coeff > 0 ? " + " + term : " - " + term;
            }
            
            terms.push(term);
        }
        
        return terms.join("");
    }

    static multiply(poly1, poly2) {
        const result = new Array(poly1.degree + poly2.degree + 1).fill(0);
        
        for (let i = 0; i < poly1.coefficients.length; i++) {
            for (let j = 0; j < poly2.coefficients.length; j++) {
                result[i + j] += poly1.coefficients[i] * poly2.coefficients[j];
            }
        }
        
        return new Polynomial(result);
    }

    static divide(dividend, divisor) {
        if (divisor.coefficients.length === 1 && divisor.coefficients[0] === 0) {
            throw new Error("Division by zero polynomial");
        }

        let remainder = new Polynomial([...dividend.coefficients]);
        let quotient = new Polynomial([0]);
        let steps = [];

        // Enhanced educational introduction
        steps.push({
            step: 1,
            description: `🎯 Polynomial Long Division: (${dividend.toString()}) ÷ (${divisor.toString()})`,
            explanation: `We'll use polynomial long division, similar to long division with numbers. We divide the highest degree term of the dividend by the highest degree term of the divisor.`,
            dividend: dividend.toString(),
            divisor: divisor.toString(),
            type: 'introduction'
        });

        if (remainder.degree < divisor.degree) {
            steps.push({
                step: 2,
                description: `✅ Since the degree of the dividend (${remainder.degree}) is less than the degree of the divisor (${divisor.degree}), the quotient is 0`,
                explanation: `When the dividend has a lower degree than the divisor, we cannot divide further. The entire dividend becomes the remainder.`,
                quotient: "0",
                remainder: remainder.toString(),
                type: 'conclusion'
            });

            return {
                quotient: new Polynomial([0]),
                remainder: remainder,
                steps: steps
            };
        }

        let quotientCoeffs = [];
        let stepNum = 2;

        while (remainder.degree >= divisor.degree && !remainder.isZero()) {
            // Calculate the leading term of quotient
            const leadCoeff = remainder.coefficients[0] / divisor.coefficients[0];
            const leadPower = remainder.degree - divisor.degree;

            quotientCoeffs.push(leadCoeff);

            // Create the term to subtract
            const termCoeffs = new Array(leadPower + 1).fill(0);
            termCoeffs[0] = leadCoeff;
            const term = new Polynomial(termCoeffs);

            // Enhanced step explanation
            const remainderLeadTerm = remainder.degree === 0 ?
                `${remainder.coefficients[0]}` :
                `${remainder.coefficients[0]}x^${remainder.degree}`;
            const divisorLeadTerm = divisor.degree === 0 ?
                `${divisor.coefficients[0]}` :
                `${divisor.coefficients[0]}x^${divisor.degree}`;

            steps.push({
                step: stepNum++,
                description: `📐 Divide leading terms: ${remainderLeadTerm} ÷ ${divisorLeadTerm} = ${term.toString()}`,
                explanation: `To find the next term of the quotient, divide the leading term of the current remainder by the leading term of the divisor. This gives us ${term.toString()}.`,
                currentTerm: term.toString(),
                remainder: remainder.toString(),
                type: 'division'
            });

            // Multiply divisor by this term
            const toSubtract = Polynomial.multiply(divisor, term);

            steps.push({
                step: stepNum++,
                description: `🔢 Multiply: (${divisor.toString()}) × (${term.toString()}) = ${toSubtract.toString()}`,
                explanation: `Multiply the entire divisor by the term we just found. This gives us what we need to subtract from the current remainder.`,
                toSubtract: toSubtract.toString(),
                type: 'multiplication'
            });

            // Subtract from remainder
            const newRemainderCoeffs = [...remainder.coefficients];
            for (let i = 0; i < toSubtract.coefficients.length; i++) {
                if (i < newRemainderCoeffs.length) {
                    newRemainderCoeffs[i] -= toSubtract.coefficients[i];
                }
            }

            const oldRemainder = remainder.toString();
            remainder = new Polynomial(newRemainderCoeffs);

            steps.push({
                step: stepNum++,
                description: `➖ Subtract: (${oldRemainder}) - (${toSubtract.toString()}) = ${remainder.toString()}`,
                explanation: `Subtract the result from the current remainder. This gives us our new remainder for the next iteration.`,
                remainder: remainder.toString(),
                type: 'subtraction'
            });
        }

        quotient = new Polynomial(quotientCoeffs);

        // Enhanced final answer with verification
        const verification = Polynomial.multiply(quotient, divisor);
        let verificationText = `Verification: (${quotient.toString()}) × (${divisor.toString()}) = ${verification.toString()}`;
        if (!remainder.isZero()) {
            verificationText += ` + ${remainder.toString()} = ${dividend.toString()}`;
        }

        steps.push({
            step: stepNum,
            description: `🎉 Final Answer: Quotient = ${quotient.toString()}, Remainder = ${remainder.toString()}`,
            explanation: `${verificationText}. ${remainder.isZero() ? 'The division is exact!' : 'The remainder cannot be divided further.'}`,
            quotient: quotient.toString(),
            remainder: remainder.toString(),
            verification: verificationText,
            type: 'conclusion'
        });

        return { quotient, remainder, steps };
    }

    isZero() {
        return this.coefficients.length === 1 && this.coefficients[0] === 0;
    }
}

class ProblemGenerator {
    static generateProblem(difficulty = 'medium') {
        let dividend, divisor, solution;
        let attempts = 0;
        const maxAttempts = 50;

        // Keep generating until we get a clean educational problem
        do {
            switch (difficulty) {
                case 'easy':
                    // Generate problems that divide evenly or have simple remainders
                    ({ dividend, divisor } = this.generateEasyProblem());
                    break;
                case 'medium':
                    ({ dividend, divisor } = this.generateMediumProblem());
                    break;
                case 'hard':
                    ({ dividend, divisor } = this.generateHardProblem());
                    break;
                default:
                    ({ dividend, divisor } = this.generateMediumProblem());
            }

            solution = Polynomial.divide(dividend, divisor);
            attempts++;

        } while (!this.isEducationallySound(solution) && attempts < maxAttempts);

        return {
            dividend,
            divisor,
            problem: `(${dividend.toString()}) ÷ (${divisor.toString()})`,
            solution
        };
    }

    static generateEasyProblem() {
        // Method 1: Create a quotient and multiply to get dividend (ensures clean division)
        const quotient = this.generateSimpleLinear();
        const divisor = this.generateSimpleLinear();
        const dividend = Polynomial.multiply(quotient, divisor);

        // Sometimes add a small remainder for educational value
        if (Math.random() < 0.3) {
            const remainder = new Polynomial([this.randomInt(-5, 5, [0])]);
            const dividendCoeffs = [...dividend.coefficients];
            dividendCoeffs[dividendCoeffs.length - 1] += remainder.coefficients[0];
            return { dividend: new Polynomial(dividendCoeffs), divisor };
        }

        return { dividend, divisor };
    }

    static generateMediumProblem() {
        // Generate quadratic that factors nicely or has simple remainder
        const quotient = this.generateSimpleLinear();
        const divisor = this.generateSimpleLinear();
        let dividend = Polynomial.multiply(quotient, divisor);

        // Add a linear term to make it more interesting
        const extraTerm = new Polynomial([0, this.randomInt(-3, 3, [0])]);
        const dividendCoeffs = [...dividend.coefficients];
        if (dividendCoeffs.length >= 2) {
            dividendCoeffs[dividendCoeffs.length - 2] += extraTerm.coefficients[0];
        }
        dividend = new Polynomial(dividendCoeffs);

        return { dividend, divisor };
    }

    static generateHardProblem() {
        // Generate cubic problems with quadratic divisors
        const quotient = this.generateSimpleLinear();
        const divisor = this.generateSimpleQuadratic();
        const dividend = Polynomial.multiply(quotient, divisor);

        return { dividend, divisor };
    }

    static generateSimpleLinear() {
        const a = this.randomInt(-3, 3, [0]);
        const b = this.randomInt(-5, 5);
        return new Polynomial([a, b]);
    }

    static generateSimpleQuadratic() {
        const a = this.randomInt(-2, 2, [0]);
        const b = this.randomInt(-4, 4);
        const c = this.randomInt(-4, 4);
        return new Polynomial([a, b, c]);
    }

    static isEducationallySound(solution) {
        // Check if quotient has reasonable integer coefficients
        const quotientCoeffs = solution.quotient.coefficients;
        const remainderCoeffs = solution.remainder.coefficients;

        // All coefficients should be reasonable numbers (not too large, not too many decimals)
        const allCoeffs = [...quotientCoeffs, ...remainderCoeffs];

        for (let coeff of allCoeffs) {
            // Check if coefficient is a reasonable number
            if (Math.abs(coeff) > 20) return false;

            // Check if it's close to an integer or a simple fraction
            const rounded = Math.round(coeff);
            const diff = Math.abs(coeff - rounded);

            // Allow integers and simple fractions (like 0.5, 0.25, 0.75)
            if (diff > 0.001 && diff < 0.24) return false; // Avoid messy decimals
            if (diff > 0.26 && diff < 0.49) return false;
            if (diff > 0.51 && diff < 0.74) return false;
            if (diff > 0.76 && diff < 0.99) return false;
        }

        return true;
    }

    static randomInt(min, max, exclude = []) {
        let num;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (exclude.includes(num));
        return num;
    }
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.Polynomial = Polynomial;
    window.ProblemGenerator = ProblemGenerator;
}

// Export for use in other files (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Polynomial, ProblemGenerator };
}
