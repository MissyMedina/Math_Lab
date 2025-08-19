/**
 * Math Lab - Comprehensive Math Terminology Database
 * © 2025 Math Lab Development Team. All rights reserved.
 *
 * LICENSING NOTICE:
 * This educational content is protected by copyright law.
 * Educational use permitted. Commercial use requires permission.
 * Do not reproduce this work without permission.
 *
 * Contains 52+ essential mathematical terms organized by category:
 * - Basic Terms: Variables, constants, coefficients, expressions
 * - Polynomial Terms: Degree, leading coefficient, monomials
 * - Division Terms: Dividend, divisor, quotient, remainder
 * - Algebra Terms: Linear equations, quadratics, systems, functions
 * - Geometry Terms: Points, lines, angles, triangles, area, volume
 * - Calculus Terms: Limits, derivatives, integrals, continuity
 * - Advanced Terms: Like terms, factoring, roots, rational expressions
 *
 * Also includes comprehensive subject content for:
 * - Algebra topics with interactive problem generators
 * - Geometry concepts with calculation tools
 * - Calculus fundamentals with step-by-step examples
 *
 * @version 2.0
 * @date January 2025
 */

const mathTerminology = {
    basicTerms: [
        {
            name: "Variable",
            definition: "A letter or symbol that represents an unknown number or value that can change.",
            example: "In the expression 3x + 5, 'x' is a variable"
        },
        {
            name: "Constant",
            definition: "A number that has a fixed value and does not change.",
            example: "In the expression 3x + 5, both '3' and '5' are constants"
        },
        {
            name: "Coefficient",
            definition: "The number that multiplies a variable in an algebraic expression.",
            example: "In 7x², the coefficient is 7"
        },
        {
            name: "Expression",
            definition: "A mathematical phrase that contains numbers, variables, and operations, but no equals sign.",
            example: "2x + 3y - 5 is an expression"
        },
        {
            name: "Equation",
            definition: "A mathematical statement that shows two expressions are equal, connected by an equals sign.",
            example: "2x + 3 = 11 is an equation"
        },
        {
            name: "Term",
            definition: "A single number, variable, or the product of numbers and variables in an expression.",
            example: "In 4x² + 3x - 7, the terms are 4x², 3x, and -7"
        }
    ],

    polynomialTerms: [
        {
            name: "Polynomial",
            definition: "An expression consisting of variables and coefficients, using only addition, subtraction, multiplication, and non-negative integer exponents.",
            example: "3x³ + 2x² - 5x + 1 is a polynomial"
        },
        {
            name: "Monomial",
            definition: "A polynomial with exactly one term.",
            example: "5x³ is a monomial"
        },
        {
            name: "Binomial",
            definition: "A polynomial with exactly two terms.",
            example: "3x + 7 is a binomial"
        },
        {
            name: "Trinomial",
            definition: "A polynomial with exactly three terms.",
            example: "x² + 5x - 6 is a trinomial"
        },
        {
            name: "Degree",
            definition: "The highest power of the variable in a polynomial.",
            example: "The degree of 4x³ + 2x² - x + 5 is 3"
        },
        {
            name: "Leading Coefficient",
            definition: "The coefficient of the term with the highest degree in a polynomial.",
            example: "In 3x⁴ + 2x² - 5, the leading coefficient is 3"
        },
        {
            name: "Leading Term",
            definition: "The term with the highest degree in a polynomial.",
            example: "In 2x³ + 5x² - 3x + 1, the leading term is 2x³"
        },
        {
            name: "Standard Form",
            definition: "Writing a polynomial with terms arranged from highest to lowest degree.",
            example: "x³ - 4x² + 7x - 2 is in standard form"
        }
    ],

    divisionTerms: [
        {
            name: "Dividend",
            definition: "The polynomial being divided in a division problem.",
            example: "In (x² + 5x + 6) ÷ (x + 2), the dividend is x² + 5x + 6"
        },
        {
            name: "Divisor",
            definition: "The polynomial by which another polynomial is divided.",
            example: "In (x² + 5x + 6) ÷ (x + 2), the divisor is x + 2"
        },
        {
            name: "Quotient",
            definition: "The result of dividing one polynomial by another (not including the remainder).",
            example: "In (x² + 5x + 6) ÷ (x + 2) = x + 3, the quotient is x + 3"
        },
        {
            name: "Remainder",
            definition: "What is left over after polynomial division when the division is not exact.",
            example: "In (x² + 1) ÷ (x + 1) = x - 1 R 2, the remainder is 2"
        },
        {
            name: "Long Division",
            definition: "A method for dividing polynomials similar to long division with numbers.",
            example: "Used to divide x³ + 2x² - 5x + 6 by x - 2"
        },
        {
            name: "Synthetic Division",
            definition: "A shortcut method for dividing polynomials by linear factors of the form (x - c).",
            example: "Used to divide x³ - 6x² + 11x - 6 by (x - 2)"
        },
        {
            name: "Factor",
            definition: "A polynomial that divides another polynomial exactly (with remainder 0).",
            example: "(x + 2) is a factor of x² + 5x + 6 because the remainder is 0"
        }
    ],

    algebraTerms: [
        {
            name: "Linear Equation",
            definition: "An equation where the highest power of the variable is 1, forming a straight line when graphed.",
            example: "2x + 3 = 7 is a linear equation"
        },
        {
            name: "Quadratic Equation",
            definition: "An equation where the highest power of the variable is 2, with the standard form ax² + bx + c = 0.",
            example: "x² - 5x + 6 = 0 is a quadratic equation"
        },
        {
            name: "System of Equations",
            definition: "A set of two or more equations with the same variables that are solved together.",
            example: "x + y = 5 and 2x - y = 1 form a system of equations"
        },
        {
            name: "Inequality",
            definition: "A mathematical statement that compares two expressions using <, >, ≤, or ≥.",
            example: "3x + 2 > 11 is an inequality"
        },
        {
            name: "Function",
            definition: "A relation where each input (x-value) has exactly one output (y-value).",
            example: "f(x) = 2x + 1 is a function"
        },
        {
            name: "Slope",
            definition: "The rate of change of a line, calculated as rise over run (change in y over change in x).",
            example: "A line through (0,1) and (2,5) has slope = (5-1)/(2-0) = 2"
        },
        {
            name: "Y-intercept",
            definition: "The point where a line crosses the y-axis (where x = 0).",
            example: "In y = 2x + 3, the y-intercept is (0, 3)"
        },
        {
            name: "Discriminant",
            definition: "The expression b² - 4ac in the quadratic formula, which determines the nature of the roots.",
            example: "For x² - 5x + 6 = 0, the discriminant is (-5)² - 4(1)(6) = 1"
        }
    ],

    geometryTerms: [
        {
            name: "Point",
            definition: "A location in space with no dimension, represented by a dot.",
            example: "Point A is located at coordinates (3, 4)"
        },
        {
            name: "Line",
            definition: "A straight path that extends infinitely in both directions with no thickness.",
            example: "Line AB passes through points A and B"
        },
        {
            name: "Angle",
            definition: "The space between two intersecting lines or rays, measured in degrees.",
            example: "A right angle measures exactly 90°"
        },
        {
            name: "Triangle",
            definition: "A polygon with three sides and three angles that sum to 180°.",
            example: "An equilateral triangle has all sides and angles equal"
        },
        {
            name: "Circle",
            definition: "A round shape where all points are the same distance (radius) from the center.",
            example: "A circle with radius 5 has circumference 2π(5) = 10π"
        },
        {
            name: "Area",
            definition: "The amount of space inside a two-dimensional shape, measured in square units.",
            example: "The area of a rectangle is length × width"
        },
        {
            name: "Volume",
            definition: "The amount of space inside a three-dimensional object, measured in cubic units.",
            example: "The volume of a cube is side³"
        },
        {
            name: "Perimeter",
            definition: "The distance around the outside of a two-dimensional shape.",
            example: "The perimeter of a square with side 4 is 4 × 4 = 16"
        },
        {
            name: "Pythagorean Theorem",
            definition: "In a right triangle, a² + b² = c², where c is the hypotenuse.",
            example: "In a triangle with legs 3 and 4, the hypotenuse is √(3² + 4²) = 5"
        }
    ],

    calculusTerms: [
        {
            name: "Limit",
            definition: "The value that a function approaches as the input approaches a particular value.",
            example: "lim(x→2) (x² - 4)/(x - 2) = 4"
        },
        {
            name: "Derivative",
            definition: "The rate of change of a function at a specific point, representing the slope of the tangent line.",
            example: "The derivative of f(x) = x² is f'(x) = 2x"
        },
        {
            name: "Integral",
            definition: "The reverse of differentiation, representing the area under a curve or the antiderivative.",
            example: "∫ 2x dx = x² + C"
        },
        {
            name: "Continuity",
            definition: "A function is continuous if it has no breaks, holes, or jumps in its graph.",
            example: "f(x) = x² is continuous everywhere"
        },
        {
            name: "Chain Rule",
            definition: "A method for finding the derivative of composite functions: d/dx[f(g(x))] = f'(g(x)) · g'(x).",
            example: "d/dx[(x² + 1)³] = 3(x² + 1)² · 2x"
        },
        {
            name: "Fundamental Theorem of Calculus",
            definition: "Links differentiation and integration: ∫[a to b] f'(x) dx = f(b) - f(a).",
            example: "∫[0 to 2] 2x dx = [x²] from 0 to 2 = 4 - 0 = 4"
        },
        {
            name: "Critical Point",
            definition: "A point where the derivative is zero or undefined, potentially indicating a maximum or minimum.",
            example: "For f(x) = x² - 4x, f'(x) = 2x - 4 = 0 when x = 2"
        },
        {
            name: "Inflection Point",
            definition: "A point where the concavity of a function changes (where the second derivative is zero).",
            example: "f(x) = x³ has an inflection point at x = 0"
        }
    ],

    advancedTerms: [
        {
            name: "Like Terms",
            definition: "Terms that have the same variables raised to the same powers.",
            example: "3x² and -7x² are like terms"
        },
        {
            name: "Simplify",
            definition: "To combine like terms and perform operations to write an expression in its simplest form.",
            example: "Simplifying 3x + 2x - 5 gives 5x - 5"
        },
        {
            name: "Factoring",
            definition: "Writing a polynomial as a product of its factors.",
            example: "x² - 9 factors as (x + 3)(x - 3)"
        },
        {
            name: "Root/Zero",
            definition: "A value that makes a polynomial equal to zero.",
            example: "x = 2 is a root of x² - 4 because 2² - 4 = 0"
        },
        {
            name: "Rational Expression",
            definition: "A fraction where both the numerator and denominator are polynomials.",
            example: "(x² + 3x + 2)/(x + 1) is a rational expression"
        },
        {
            name: "Domain",
            definition: "The set of all possible input values (x-values) for which an expression is defined.",
            example: "For f(x) = 1/(x-2), the domain is all real numbers except x = 2"
        }
    ]
};

// Comprehensive math content for all sections
const mathContent = {
    algebra: {
        'linear-equations': {
            title: 'Linear Equations',
            content: `
                <div class="concept-explanation">
                    <h4>What are Linear Equations?</h4>
                    <p>Linear equations are equations where the highest power of the variable is 1. When graphed, they form straight lines.</p>
                </div>

                <div class="formula-box">
                    <strong>Standard Form:</strong> ax + b = c<br>
                    <strong>Slope-Intercept Form:</strong> y = mx + b
                </div>

                <div class="problem-generator">
                    <h4>🎯 Linear Equation Solver</h4>
                    <div class="generator-controls">
                        <label>Equation Type:</label>
                        <select id="linear-type">
                            <option value="simple">Simple (ax + b = c)</option>
                            <option value="two-step">Two-step (ax + b = cx + d)</option>
                            <option value="multi-step">Multi-step with parentheses</option>
                        </select>
                        <button class="btn-primary" onclick="generateLinearEquation()">Generate Problem</button>
                    </div>
                    <div id="linear-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="linear-solve" class="btn-secondary" style="display: none;" onclick="solveLinearEquation()">Show Solution</button>
                    <div id="linear-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>📚 Example: Solve 3x + 7 = 22</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Step 1:</strong> Subtract 7 from both sides<br>3x + 7 - 7 = 22 - 7<br>3x = 15</div>
                        <div class="step"><strong>Step 2:</strong> Divide both sides by 3<br>3x ÷ 3 = 15 ÷ 3<br>x = 5</div>
                        <div class="step"><strong>Step 3:</strong> Check: 3(5) + 7 = 15 + 7 = 22 ✓</div>
                    </div>
                </div>
            `
        },
        'quadratic-equations': {
            title: 'Quadratic Equations',
            content: `
                <div class="concept-explanation">
                    <h4>What are Quadratic Equations?</h4>
                    <p>Quadratic equations have the form ax² + bx + c = 0, where a ≠ 0. They can be solved by factoring, completing the square, or using the quadratic formula.</p>
                </div>

                <div class="formula-box">
                    <strong>Standard Form:</strong> ax² + bx + c = 0<br>
                    <strong>Quadratic Formula:</strong> x = (-b ± √(b² - 4ac)) / (2a)<br>
                    <strong>Discriminant:</strong> Δ = b² - 4ac
                </div>

                <div class="problem-generator">
                    <h4>🎯 Quadratic Equation Solver</h4>
                    <div class="generator-controls">
                        <label>Solution Method:</label>
                        <select id="quadratic-method">
                            <option value="factoring">Factoring</option>
                            <option value="formula">Quadratic Formula</option>
                            <option value="completing">Completing the Square</option>
                        </select>
                        <button class="btn-primary" onclick="generateQuadraticEquation()">Generate Problem</button>
                    </div>
                    <div id="quadratic-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="quadratic-solve" class="btn-secondary" style="display: none;" onclick="solveQuadraticEquation()">Show Solution</button>
                    <div id="quadratic-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>📚 Example: Solve x² - 5x + 6 = 0</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Method 1 - Factoring:</strong><br>Find two numbers that multiply to 6 and add to -5<br>Those numbers are -2 and -3<br>(x - 2)(x - 3) = 0</div>
                        <div class="step"><strong>Solutions:</strong> x - 2 = 0 or x - 3 = 0<br>Therefore: x = 2 or x = 3</div>
                        <div class="step"><strong>Method 2 - Quadratic Formula:</strong><br>x = (5 ± √(25 - 24)) / 2 = (5 ± 1) / 2<br>x = 3 or x = 2</div>
                    </div>
                </div>
            `
        },
        'systems': {
            title: 'Systems of Equations',
            content: `
                <div class="concept-explanation">
                    <h4>What are Systems of Equations?</h4>
                    <p>A system of equations is a set of two or more equations with the same variables. The solution is the point(s) where all equations are satisfied simultaneously.</p>
                </div>

                <div class="formula-box">
                    <strong>Methods:</strong><br>
                    • Substitution Method<br>
                    • Elimination Method<br>
                    • Graphing Method
                </div>

                <div class="problem-generator">
                    <h4>🎯 System of Equations Solver</h4>
                    <div class="generator-controls">
                        <label>Method:</label>
                        <select id="system-method">
                            <option value="substitution">Substitution</option>
                            <option value="elimination">Elimination</option>
                            <option value="graphing">Graphing</option>
                        </select>
                        <button class="btn-primary" onclick="generateSystemEquation()">Generate Problem</button>
                    </div>
                    <div id="system-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="system-solve" class="btn-secondary" style="display: none;" onclick="solveSystemEquation()">Show Solution</button>
                    <div id="system-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>📚 Example: Solve the system</h5>
                    <div class="formula-box">x + y = 5<br>2x - y = 1</div>
                    <div class="step-by-step">
                        <div class="step"><strong>Elimination Method:</strong><br>Add the equations to eliminate y:<br>(x + y) + (2x - y) = 5 + 1<br>3x = 6<br>x = 2</div>
                        <div class="step"><strong>Find y:</strong> Substitute x = 2 into first equation<br>2 + y = 5<br>y = 3</div>
                        <div class="step"><strong>Solution:</strong> (2, 3)<br><strong>Check:</strong> 2 + 3 = 5 ✓ and 2(2) - 3 = 1 ✓</div>
                    </div>
                </div>
            `
        },
        'inequalities': {
            title: 'Inequalities',
            content: `
                <div class="concept-explanation">
                    <h4>What are Inequalities?</h4>
                    <p>Inequalities compare two expressions using symbols like <, >, ≤, or ≥. Solutions are ranges of values rather than specific numbers.</p>
                </div>

                <div class="formula-box">
                    <strong>Symbols:</strong><br>
                    < (less than), > (greater than)<br>
                    ≤ (less than or equal), ≥ (greater than or equal)<br>
                    <strong>Key Rule:</strong> Flip the inequality when multiplying/dividing by negative numbers
                </div>

                <div class="example-problem">
                    <h5>📚 Example: Solve 3x + 7 > 22</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Step 1:</strong> Subtract 7 from both sides<br>3x + 7 - 7 > 22 - 7<br>3x > 15</div>
                        <div class="step"><strong>Step 2:</strong> Divide both sides by 3<br>3x ÷ 3 > 15 ÷ 3<br>x > 5</div>
                        <div class="step"><strong>Solution:</strong> x > 5 (all numbers greater than 5)<br><strong>Graph:</strong> Open circle at 5, arrow pointing right</div>
                    </div>
                </div>
            `
        },
        'functions': {
            title: 'Functions',
            content: `
                <div class="concept-explanation">
                    <h4>What are Functions?</h4>
                    <p>A function is a relation where each input (x-value) has exactly one output (y-value). Functions can be represented as equations, graphs, tables, or verbal descriptions.</p>
                </div>

                <div class="formula-box">
                    <strong>Function Notation:</strong> f(x) = expression<br>
                    <strong>Domain:</strong> Set of all possible input values<br>
                    <strong>Range:</strong> Set of all possible output values
                </div>

                <div class="example-problem">
                    <h5>📚 Example: f(x) = 2x + 3</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Find f(4):</strong><br>f(4) = 2(4) + 3 = 8 + 3 = 11</div>
                        <div class="step"><strong>Find f(-1):</strong><br>f(-1) = 2(-1) + 3 = -2 + 3 = 1</div>
                        <div class="step"><strong>Domain:</strong> All real numbers<br><strong>Range:</strong> All real numbers</div>
                    </div>
                </div>
            `
        }
    },

    geometry: {
        'basic-shapes': {
            title: 'Basic Shapes',
            content: `
                <div class="concept-explanation">
                    <h4>Fundamental Geometric Shapes</h4>
                    <p>Understanding basic shapes is essential for all geometry. Each shape has unique properties and formulas.</p>
                </div>

                <div class="formula-box">
                    <strong>Rectangle:</strong> Area = l × w, Perimeter = 2(l + w)<br>
                    <strong>Triangle:</strong> Area = ½bh, Perimeter = a + b + c<br>
                    <strong>Circle:</strong> Area = πr², Circumference = 2πr
                </div>

                <div class="problem-generator">
                    <h4>🎯 Shape Calculator</h4>
                    <div class="generator-controls">
                        <label>Shape Type:</label>
                        <select id="shape-type">
                            <option value="rectangle">Rectangle</option>
                            <option value="triangle">Triangle</option>
                            <option value="circle">Circle</option>
                        </select>
                        <button class="btn-primary" onclick="generateShapeProblem()">Generate Problem</button>
                    </div>
                    <div id="shape-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="shape-solve" class="btn-secondary" style="display: none;" onclick="solveShapeProblem()">Show Solution</button>
                    <div id="shape-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>📐 Rectangle Example</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Given:</strong> Rectangle with length 8 and width 5</div>
                        <div class="step"><strong>Area:</strong> 8 × 5 = 40 square units</div>
                        <div class="step"><strong>Perimeter:</strong> 2(8 + 5) = 26 units</div>
                    </div>
                </div>
            `
        },
        'angles': {
            title: 'Angles',
            content: `
                <div class="concept-explanation">
                    <h4>Understanding Angles</h4>
                    <p>Angles are formed when two rays meet at a point. They are measured in degrees (°) or radians.</p>
                </div>

                <div class="formula-box">
                    <strong>Types of Angles:</strong><br>
                    • Acute: 0° < angle < 90°<br>
                    • Right: angle = 90°<br>
                    • Obtuse: 90° < angle < 180°<br>
                    • Straight: angle = 180°
                </div>

                <div class="example-problem">
                    <h5>📐 Angle Relationships</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Complementary Angles:</strong> Two angles that add to 90°<br>Example: 30° and 60° are complementary</div>
                        <div class="step"><strong>Supplementary Angles:</strong> Two angles that add to 180°<br>Example: 120° and 60° are supplementary</div>
                        <div class="step"><strong>Vertical Angles:</strong> Opposite angles formed by intersecting lines<br>They are always equal</div>
                    </div>
                </div>
            `
        },
        'triangles': {
            title: 'Triangles',
            content: `
                <div class="concept-explanation">
                    <h4>Triangle Properties</h4>
                    <p>Triangles are three-sided polygons with angles that always sum to 180°. They can be classified by sides or angles.</p>
                </div>

                <div class="formula-box">
                    <strong>Pythagorean Theorem:</strong> a² + b² = c²<br>
                    <strong>Area:</strong> ½ × base × height<br>
                    <strong>Angle Sum:</strong> A + B + C = 180°
                </div>

                <div class="problem-generator">
                    <h4>🎯 Triangle Problem Generator</h4>
                    <div class="generator-controls">
                        <label>Problem Type:</label>
                        <select id="triangle-type">
                            <option value="pythagorean">Pythagorean Theorem</option>
                            <option value="area">Triangle Area</option>
                            <option value="angles">Missing Angles</option>
                        </select>
                        <button class="btn-primary" onclick="generateTriangleProblem()">Generate Problem</button>
                    </div>
                    <div id="triangle-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="triangle-solve" class="btn-secondary" style="display: none;" onclick="solveTriangleProblem()">Show Solution</button>
                    <div id="triangle-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>📐 Pythagorean Theorem Example</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Problem:</strong> Find the hypotenuse of a right triangle with legs 3 and 4</div>
                        <div class="step"><strong>Solution:</strong> c² = a² + b² = 3² + 4² = 9 + 16 = 25</div>
                        <div class="step"><strong>Answer:</strong> c = √25 = 5 units</div>
                    </div>
                </div>
            `
        },
        'circles': {
            title: 'Circles',
            content: `
                <div class="concept-explanation">
                    <h4>Circle Properties</h4>
                    <p>A circle is the set of all points that are the same distance (radius) from a center point.</p>
                </div>

                <div class="formula-box">
                    <strong>Key Formulas:</strong><br>
                    Area = πr²<br>
                    Circumference = 2πr = πd<br>
                    <strong>Parts:</strong> radius, diameter, chord, arc, sector
                </div>

                <div class="example-problem">
                    <h5>⭕ Circle Calculations</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Given:</strong> Circle with radius 6<br><strong>Diameter:</strong> 2 × 6 = 12</div>
                        <div class="step"><strong>Area:</strong> π(6)² = 36π ≈ 113.1 square units</div>
                        <div class="step"><strong>Circumference:</strong> 2π(6) = 12π ≈ 37.7 units</div>
                    </div>
                </div>
            `
        },
        'area-volume': {
            title: 'Area & Volume',
            content: `
                <div class="concept-explanation">
                    <h4>Area and Volume Formulas</h4>
                    <p>Area measures 2D space (square units), while volume measures 3D space (cubic units).</p>
                </div>

                <div class="example-problem">
                    <h5>📦 3D Shapes</h5>
                    <div class="formula-box">
                        <strong>Rectangular Prism:</strong><br>
                        Volume = length × width × height<br>
                        Surface Area = 2(lw + lh + wh)
                    </div>
                    <div class="step-by-step">
                        <div class="step"><strong>Example:</strong> Box with dimensions 4 × 3 × 2<br>Volume = 4 × 3 × 2 = 24 cubic units<br>Surface Area = 2(12 + 8 + 6) = 52 square units</div>
                    </div>
                </div>

                <div class="example-problem">
                    <h5>🏀 Sphere</h5>
                    <div class="formula-box">
                        Volume = (4/3)πr³<br>
                        Surface Area = 4πr²
                    </div>
                    <div class="step-by-step">
                        <div class="step"><strong>Example:</strong> Sphere with radius 3<br>Volume = (4/3)π(3)³ = 36π ≈ 113.1 cubic units<br>Surface Area = 4π(3)² = 36π ≈ 113.1 square units</div>
                    </div>
                </div>
            `
        }
    },

    calculus: {
        'limits': {
            title: 'Limits',
            content: `
                <div class="concept-explanation">
                    <h4>What are Limits?</h4>
                    <p>A limit describes the value that a function approaches as the input approaches a particular value. Limits are fundamental to calculus.</p>
                </div>

                <div class="formula-box">
                    <strong>Notation:</strong> lim(x→a) f(x) = L<br>
                    <strong>Meaning:</strong> As x approaches a, f(x) approaches L
                </div>

                <div class="problem-generator">
                    <h4>🎯 Limit Problem Generator</h4>
                    <div class="generator-controls">
                        <label>Limit Type:</label>
                        <select id="limit-type">
                            <option value="direct">Direct Substitution</option>
                            <option value="factoring">Factoring (0/0 form)</option>
                            <option value="infinity">Limits at Infinity</option>
                        </select>
                        <button class="btn-primary" onclick="generateLimitProblem()">Generate Problem</button>
                    </div>
                    <div id="limit-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="limit-solve" class="btn-secondary" style="display: none;" onclick="solveLimitProblem()">Show Solution</button>
                    <div id="limit-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>∞ Example: lim(x→2) (x² - 4)/(x - 2)</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Step 1:</strong> Direct substitution gives 0/0 (indeterminate)</div>
                        <div class="step"><strong>Step 2:</strong> Factor: (x² - 4) = (x + 2)(x - 2)</div>
                        <div class="step"><strong>Step 3:</strong> Simplify: (x + 2)(x - 2)/(x - 2) = x + 2</div>
                        <div class="step"><strong>Step 4:</strong> lim(x→2) (x + 2) = 4</div>
                    </div>
                </div>
            `
        },
        'derivatives': {
            title: 'Derivatives',
            content: `
                <div class="concept-explanation">
                    <h4>What are Derivatives?</h4>
                    <p>The derivative measures the rate of change of a function. Geometrically, it's the slope of the tangent line at any point.</p>
                </div>

                <div class="formula-box">
                    <strong>Power Rule:</strong> d/dx[xⁿ] = nxⁿ⁻¹<br>
                    <strong>Product Rule:</strong> d/dx[uv] = u'v + uv'<br>
                    <strong>Chain Rule:</strong> d/dx[f(g(x))] = f'(g(x)) · g'(x)
                </div>

                <div class="problem-generator">
                    <h4>🎯 Derivative Problem Generator</h4>
                    <div class="generator-controls">
                        <label>Function Type:</label>
                        <select id="derivative-type">
                            <option value="polynomial">Polynomial</option>
                            <option value="product">Product Rule</option>
                            <option value="chain">Chain Rule</option>
                        </select>
                        <button class="btn-primary" onclick="generateDerivativeProblem()">Generate Problem</button>
                    </div>
                    <div id="derivative-problem" class="problem-display">Click "Generate Problem" to start!</div>
                    <button id="derivative-solve" class="btn-secondary" style="display: none;" onclick="solveDerivativeProblem()">Show Solution</button>
                    <div id="derivative-solution" class="solution-steps" style="display: none;"></div>
                </div>

                <div class="example-problem">
                    <h5>🔍 Example: Find d/dx[3x² + 2x - 5]</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Step 1:</strong> Apply power rule to each term</div>
                        <div class="step"><strong>Step 2:</strong> d/dx[3x²] = 3 · 2x¹ = 6x</div>
                        <div class="step"><strong>Step 3:</strong> d/dx[2x] = 2 · 1 = 2</div>
                        <div class="step"><strong>Step 4:</strong> d/dx[-5] = 0</div>
                        <div class="step"><strong>Answer:</strong> 6x + 2</div>
                    </div>
                </div>
            `
        },
        'integrals': {
            title: 'Integrals',
            content: `
                <div class="concept-explanation">
                    <h4>What are Integrals?</h4>
                    <p>Integration is the reverse of differentiation. Definite integrals calculate area under curves, while indefinite integrals find antiderivatives.</p>
                </div>

                <div class="formula-box">
                    <strong>Indefinite:</strong> ∫ f(x) dx = F(x) + C<br>
                    <strong>Definite:</strong> ∫[a to b] f(x) dx = F(b) - F(a)<br>
                    <strong>Fundamental Theorem:</strong> d/dx[∫f(x)dx] = f(x)
                </div>

                <div class="example-problem">
                    <h5>∫ Basic Integration Rules</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Power Rule:</strong> ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C<br>Example: ∫ x² dx = x³/3 + C</div>
                        <div class="step"><strong>Constant Rule:</strong> ∫ c dx = cx + C</div>
                        <div class="step"><strong>Sum Rule:</strong> ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx</div>
                    </div>
                </div>

                <div class="example-problem">
                    <h5>📊 Example: ∫[0 to 2] 2x dx</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Find antiderivative:</strong> ∫ 2x dx = x² + C</div>
                        <div class="step"><strong>Apply limits:</strong> [x²] from 0 to 2</div>
                        <div class="step"><strong>Evaluate:</strong> (2)² - (0)² = 4 - 0 = 4</div>
                        <div class="step"><strong>Interpretation:</strong> Area under y = 2x from x = 0 to x = 2 is 4</div>
                    </div>
                </div>
            `
        },
        'applications': {
            title: 'Applications',
            content: `
                <div class="concept-explanation">
                    <h4>Real-World Applications of Calculus</h4>
                    <p>Calculus is used to solve optimization problems, find rates of change, and model real-world phenomena.</p>
                </div>

                <div class="example-problem">
                    <h5>📈 Optimization Example</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Problem:</strong> Find the maximum area of a rectangle with perimeter 20</div>
                        <div class="step"><strong>Setup:</strong> Let width = x, then length = 10 - x<br>Area = A(x) = x(10 - x) = 10x - x²</div>
                        <div class="step"><strong>Find critical points:</strong> A'(x) = 10 - 2x = 0<br>x = 5</div>
                        <div class="step"><strong>Answer:</strong> Maximum area is 5 × 5 = 25 square units</div>
                    </div>
                </div>

                <div class="example-problem">
                    <h5>🚗 Related Rates Example</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Problem:</strong> A balloon's radius increases at 2 cm/s. How fast does volume change when r = 3 cm?</div>
                        <div class="step"><strong>Given:</strong> dr/dt = 2 cm/s, V = (4/3)πr³</div>
                        <div class="step"><strong>Find dV/dt:</strong> dV/dt = 4πr² · dr/dt</div>
                        <div class="step"><strong>When r = 3:</strong> dV/dt = 4π(3)² · 2 = 72π cm³/s</div>
                    </div>
                </div>
            `
        },
        'series': {
            title: 'Series',
            content: `
                <div class="concept-explanation">
                    <h4>Infinite Series</h4>
                    <p>A series is the sum of terms in a sequence. Some series converge to finite values, while others diverge.</p>
                </div>

                <div class="formula-box">
                    <strong>Geometric Series:</strong> ∑ arⁿ = a/(1-r) if |r| < 1<br>
                    <strong>Taylor Series:</strong> f(x) = ∑ f⁽ⁿ⁾(a)(x-a)ⁿ/n!
                </div>

                <div class="example-problem">
                    <h5>∞ Geometric Series Example</h5>
                    <div class="step-by-step">
                        <div class="step"><strong>Series:</strong> 1 + 1/2 + 1/4 + 1/8 + ...</div>
                        <div class="step"><strong>Identify:</strong> a = 1, r = 1/2</div>
                        <div class="step"><strong>Since |1/2| < 1, series converges</strong></div>
                        <div class="step"><strong>Sum:</strong> 1/(1 - 1/2) = 1/(1/2) = 2</div>
                    </div>
                </div>
            `
        }
    }
};

// Algebra basics content (keeping existing for compatibility)
const algebraBasics = {
    variables: {
        title: "Variables and Constants",
        content: `
            <h4>What are Variables?</h4>
            <p>Variables are letters or symbols that represent unknown numbers. They can change value, which is why they're called "variable."</p>
            
            <div class="example-box">
                <h5>Examples:</h5>
                <ul>
                    <li><strong>x</strong> in the expression 2x + 5</li>
                    <li><strong>y</strong> in the equation y = 3x - 1</li>
                    <li><strong>t</strong> representing time in physics formulas</li>
                </ul>
            </div>

            <h4>What are Constants?</h4>
            <p>Constants are numbers that have fixed values and never change.</p>
            
            <div class="example-box">
                <h5>Examples:</h5>
                <ul>
                    <li><strong>5</strong> in the expression x + 5</li>
                    <li><strong>π (pi)</strong> ≈ 3.14159...</li>
                    <li><strong>-3</strong> in the equation y = -3x + 7</li>
                </ul>
            </div>

            <h4>Why Use Variables?</h4>
            <p>Variables allow us to:</p>
            <ul>
                <li>Write general formulas that work for any number</li>
                <li>Solve problems where we don't know the answer yet</li>
                <li>Express relationships between quantities</li>
            </ul>
        `
    },

    expressions: {
        title: "Expressions vs Equations",
        content: `
            <h4>Mathematical Expressions</h4>
            <p>An expression is like a mathematical phrase - it contains numbers, variables, and operations, but <strong>no equals sign</strong>.</p>
            
            <div class="example-box">
                <h5>Expression Examples:</h5>
                <ul>
                    <li>3x + 7</li>
                    <li>2x² - 5x + 1</li>
                    <li>4(x + 3) - 2</li>
                </ul>
            </div>

            <h4>Mathematical Equations</h4>
            <p>An equation is like a mathematical sentence - it states that two expressions are equal using an <strong>equals sign (=)</strong>.</p>
            
            <div class="example-box">
                <h5>Equation Examples:</h5>
                <ul>
                    <li>3x + 7 = 22</li>
                    <li>y = 2x² - 5x + 1</li>
                    <li>4(x + 3) - 2 = 18</li>
                </ul>
            </div>

            <h4>Key Differences:</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background: #f8f9fa;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Expression</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Equation</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">Can be simplified</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Can be solved</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">No equals sign</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Has equals sign</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">Represents a value</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">States a relationship</td>
                </tr>
            </table>
        `
    },

    order: {
        title: "Order of Operations (PEMDAS)",
        content: `
            <h4>What is PEMDAS?</h4>
            <p>PEMDAS tells us the correct order to perform operations in mathematical expressions:</p>
            
            <div class="pemdas-box" style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 15px 0;">
                <h5 style="text-align: center; color: #1976d2;">P-E-M-D-A-S</h5>
                <ul style="font-size: 1.1rem;">
                    <li><strong>P</strong>arentheses (and other grouping symbols)</li>
                    <li><strong>E</strong>xponents (powers and roots)</li>
                    <li><strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right)</li>
                    <li><strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right)</li>
                </ul>
            </div>

            <h4>Step-by-Step Example:</h4>
            <p>Solve: 2 + 3 × 4² - (8 ÷ 2)</p>
            
            <div class="step-by-step" style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <p><strong>Step 1 - Parentheses:</strong> 2 + 3 × 4² - (8 ÷ 2) = 2 + 3 × 4² - 4</p>
                <p><strong>Step 2 - Exponents:</strong> 2 + 3 × 4² - 4 = 2 + 3 × 16 - 4</p>
                <p><strong>Step 3 - Multiplication:</strong> 2 + 3 × 16 - 4 = 2 + 48 - 4</p>
                <p><strong>Step 4 - Addition/Subtraction (left to right):</strong> 2 + 48 - 4 = 50 - 4 = 46</p>
            </div>

            <h4>Memory Tricks:</h4>
            <ul>
                <li><strong>Please Excuse My Dear Aunt Sally</strong></li>
                <li><strong>Purple Elephants Make Dreams And Smiles</strong></li>
                <li><strong>BODMAS</strong> (Brackets, Orders, Division/Multiplication, Addition/Subtraction)</li>
            </ul>
        `
    },

    combining: {
        title: "Combining Like Terms",
        content: `
            <h4>What are Like Terms?</h4>
            <p>Like terms are terms that have the <strong>same variables raised to the same powers</strong>. Only the coefficients can be different.</p>
            
            <div class="example-box">
                <h5>Like Terms Examples:</h5>
                <ul>
                    <li>3x and 7x (both have x¹)</li>
                    <li>2x² and -5x² (both have x²)</li>
                    <li>4xy and -xy (both have xy)</li>
                </ul>
            </div>

            <div class="example-box">
                <h5>NOT Like Terms:</h5>
                <ul>
                    <li>3x and 3x² (different powers)</li>
                    <li>2xy and 2x (different variables)</li>
                    <li>5 and 5x (one has a variable, one doesn't)</li>
                </ul>
            </div>

            <h4>How to Combine Like Terms:</h4>
            <p>Add or subtract the coefficients and keep the variable part the same.</p>
            
            <div class="step-by-step" style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h5>Example 1: Simplify 3x + 5x - 2x</h5>
                <p><strong>Step 1:</strong> Identify like terms: 3x, 5x, and -2x are all like terms</p>
                <p><strong>Step 2:</strong> Add/subtract coefficients: 3 + 5 - 2 = 6</p>
                <p><strong>Step 3:</strong> Keep the variable: 6x</p>
                
                <h5>Example 2: Simplify 4x² + 2x - 3x² + 7x - 1</h5>
                <p><strong>Step 1:</strong> Group like terms: (4x² - 3x²) + (2x + 7x) + (-1)</p>
                <p><strong>Step 2:</strong> Combine: (1x²) + (9x) + (-1)</p>
                <p><strong>Step 3:</strong> Final answer: x² + 9x - 1</p>
            </div>

            <h4>Why Combine Like Terms?</h4>
            <ul>
                <li>Makes expressions simpler and easier to work with</li>
                <li>Essential for solving equations</li>
                <li>Helps identify patterns and relationships</li>
                <li>Required before performing polynomial operations</li>
            </ul>
        `
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.mathTerminology = mathTerminology;
    window.mathContent = mathContent;
    window.algebraBasics = algebraBasics;
}

// Export for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mathTerminology, mathContent, algebraBasics };
}
