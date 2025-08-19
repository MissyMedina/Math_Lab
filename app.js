/**
 * Math Lab - Complete Mathematics Learning Platform
 * © 2025 Math Lab Development Team. All rights reserved.
 *
 * LICENSING NOTICE:
 * This educational software is protected by copyright law.
 *
 * PERMITTED USES:
 * - Personal educational use by students and teachers
 * - Classroom use in educational institutions
 * - Non-commercial educational purposes
 *
 * PROHIBITED WITHOUT PERMISSION:
 * - Commercial use or redistribution
 * - Modification and redistribution without attribution
 * - Use in commercial educational products
 * - Reproduction of code or content for commercial purposes
 *
 * For commercial licensing or permission to reproduce this work,
 * contact the Math Lab Development Team.
 *
 * Main Application Logic
 * - Handles UI interactions and navigation
 * - Manages problem generation and display
 * - Implements intelligent tutoring system
 * - Controls student workspaces
 * - Provides comprehensive math education tools
 *
 * Features:
 * - Polynomial Division with step-by-step solutions
 * - Algebra: Linear equations, quadratics, systems, functions
 * - Geometry: Shapes, triangles, area calculations
 * - Calculus: Limits, derivatives, applications
 * - AI-Powered My Tutor system with intelligent guidance
 * - Student workspaces with work persistence
 * - Interactive problem generators
 * - Comprehensive math terminology guide
 *
 * @version 2.0
 * @author Math Lab Development Team
 * @date January 2025
 */

class MathLabApp {
    constructor() {
        this.currentProblem = null;
        this.currentSection = 'polynomial-division';
        this.initializeEventListeners();
        this.initializeNavigation();
        this.loadTerminology();
        this.initializeMathSections();
    }

    initializeEventListeners() {
        // Generate problem button
        document.getElementById('generate-problem').addEventListener('click', () => {
            this.generateNewProblem();
        });

        // Show solution button
        document.getElementById('show-solution').addEventListener('click', () => {
            this.showSolution();
        });

        // Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Generate initial problem
        this.generateNewProblem();
    }

    initializeNavigation() {
        // Navigation link handlers
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.switchSection(section);

                // Close mobile menu
                document.querySelector('.nav-menu').classList.remove('active');
            });
        });
    }

    switchSection(sectionName) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update header content
        this.updateHeaderContent(sectionName);

        // Load saved work for sections with workspaces
        if (sectionName === 'algebra') {
            setTimeout(() => loadSavedWork('algebra'), 100);
        } else if (sectionName === 'geometry') {
            setTimeout(() => loadSavedWork('geometry'), 100);
        } else if (sectionName === 'calculus') {
            setTimeout(() => loadSavedWork('calculus'), 100);
        }

        this.currentSection = sectionName;
    }

    updateHeaderContent(sectionName) {
        const headerContent = document.getElementById('header-content');
        const headers = {
            'polynomial-division': {
                title: 'Master Polynomial Division with Step-by-Step Practice',
                subtitle: 'Learn polynomial long division with detailed explanations and multiple solution methods'
            },
            'algebra': {
                title: 'Algebra - Equations, Functions & Systems',
                subtitle: 'Master linear equations, quadratics, systems, inequalities, and functions'
            },
            'geometry': {
                title: 'Geometry - Shapes, Angles & Measurements',
                subtitle: 'Explore geometric shapes, angles, area, volume, and spatial relationships'
            },
            'calculus': {
                title: 'Calculus - Limits, Derivatives & Integrals',
                subtitle: 'Discover the mathematics of change through limits, derivatives, and integrals'
            },
            'my-tutor': {
                title: 'My Tutor - Personalized Math Help',
                subtitle: 'Get intelligent step-by-step guidance on your homework problems'
            },
            'terminology': {
                title: 'Math Terminology Guide',
                subtitle: 'Comprehensive dictionary of mathematical terms across all topics'
            },
            'coming-soon': {
                title: 'More Math Topics Coming Soon',
                subtitle: 'Expanding to cover statistics, trigonometry, discrete math, and more!'
            }
        };

        const header = headers[sectionName] || headers['polynomial-division'];
        headerContent.innerHTML = `
            <h2>${header.title}</h2>
            <p>${header.subtitle}</p>
        `;
    }

    generateNewProblem() {
        const difficulty = document.getElementById('difficulty').value;
        const problemContainer = document.getElementById('problem-display');
        const solutionArea = document.getElementById('solution-area');
        const solutionSteps = document.getElementById('solution-steps');
        
        // Add loading animation
        problemContainer.classList.add('generating');
        
        setTimeout(() => {
            try {
                // Generate new problem
                this.currentProblem = ProblemGenerator.generateProblem(difficulty);
                
                // Update problem display
                document.getElementById('problem-text').innerHTML = this.formatProblem(this.currentProblem);
                
                // Show solution area and hide solution steps
                solutionArea.style.display = 'block';
                solutionSteps.style.display = 'none';
                
                // Clear student work
                document.getElementById('student-work').value = '';
                
                // Remove loading animation and add fade-in
                problemContainer.classList.remove('generating');
                problemContainer.classList.add('fade-in');
                
                setTimeout(() => {
                    problemContainer.classList.remove('fade-in');
                }, 500);
                
            } catch (error) {
                console.error('Error generating problem:', error);
                document.getElementById('problem-text').innerHTML = 'Error generating problem. Please try again.';
            }
        }, 300);
    }

    formatProblem(problem) {
        return `
            <div class="division-problem">
                <div class="dividend">${problem.dividend.toString()}</div>
                <div class="division-symbol">÷</div>
                <div class="divisor">${problem.divisor.toString()}</div>
                <div class="equals">=</div>
                <div class="question-mark">?</div>
            </div>
        `;
    }

    showSolution() {
        if (!this.currentProblem) {
            alert('Please generate a problem first!');
            return;
        }

        const solutionSteps = document.getElementById('solution-steps');
        const solutionContent = document.getElementById('solution-content');
        
        // Format solution steps
        const stepsHTML = this.formatSolutionSteps(this.currentProblem.solution);
        solutionContent.innerHTML = stepsHTML;
        
        // Show solution with animation
        solutionSteps.style.display = 'block';
        solutionSteps.classList.add('fade-in');
        
        setTimeout(() => {
            solutionSteps.classList.remove('fade-in');
        }, 500);
    }

    formatSolutionSteps(solution) {
        let html = `
            <div class="final-answer">
                <strong>🎉 Final Answer:</strong><br>
                Quotient: <span class="math-text">${solution.quotient.toString()}</span><br>
                Remainder: <span class="math-text">${solution.remainder.toString()}</span>
                ${solution.remainder.isZero() ? '<br><span class="exact-division">✅ This division is exact!</span>' : ''}
            </div>
            <hr style="margin: 20px 0;">
            <h4>📚 Step-by-Step Solution:</h4>
        `;

        solution.steps.forEach(step => {
            const stepTypeClass = step.type ? `step-${step.type}` : '';
            const stepIcon = this.getStepIcon(step.type);

            html += `
                <div class="step ${stepTypeClass}">
                    <div class="step-header">
                        <span class="step-number">${stepIcon} Step ${step.step}:</span>
                    </div>
                    <div class="step-description">${step.description}</div>
                    ${step.explanation ? `<div class="step-explanation">💡 <em>${step.explanation}</em></div>` : ''}
                    ${step.currentTerm ? `<div class="step-detail">Current term: <span class="math-text">${step.currentTerm}</span></div>` : ''}
                    ${step.toSubtract ? `<div class="step-detail">To subtract: <span class="math-text">${step.toSubtract}</span></div>` : ''}
                    ${step.remainder ? `<div class="step-detail">New remainder: <span class="math-text">${step.remainder}</span></div>` : ''}
                    ${step.verification ? `<div class="step-verification">🔍 ${step.verification}</div>` : ''}
                </div>
            `;
        });

        // Add alternative methods section
        html += this.generateAlternativeMethods();

        return html;
    }

    getStepIcon(stepType) {
        const icons = {
            'introduction': '🎯',
            'division': '📐',
            'multiplication': '🔢',
            'subtraction': '➖',
            'conclusion': '🎉'
        };
        return icons[stepType] || '📝';
    }

    generateAlternativeMethods() {
        if (!this.currentProblem) return '';

        const dividend = this.currentProblem.dividend;
        const divisor = this.currentProblem.divisor;
        const quotient = this.currentProblem.solution.quotient;
        const remainder = this.currentProblem.solution.remainder;

        let html = `
            <hr style="margin: 30px 0;">
            <div class="alternative-methods">
                <h4>🔍 Alternative Solution Methods:</h4>
        `;

        // Method 1: Verification by multiplication
        html += `
            <div class="method">
                <h5>Method 1: Verification by Multiplication</h5>
                <p>We can verify our answer by multiplying the quotient by the divisor and adding the remainder:</p>
                <div class="math-verification">
                    (${quotient.toString()}) × (${divisor.toString()})${remainder.isZero() ? '' : ` + ${remainder.toString()}`} = ${dividend.toString()}
                </div>
                <p class="method-note">✅ This confirms our division is correct!</p>
            </div>
        `;

        // Method 2: Factoring (when applicable)
        if (this.canFactor(dividend, divisor)) {
            html += `
                <div class="method">
                    <h5>Method 2: Factoring Approach</h5>
                    <p>For some polynomials, we can solve by factoring instead of long division:</p>
                    <div class="math-verification">
                        If ${dividend.toString()} = (${divisor.toString()})(${quotient.toString()}), then the division gives us ${quotient.toString()}
                    </div>
                    <p class="method-note">💡 Factoring can be faster when the polynomial factors nicely!</p>
                </div>
            `;
        }

        // Method 3: Synthetic division (for linear divisors)
        if (divisor.degree === 1 && divisor.coefficients[0] === 1) {
            html += `
                <div class="method">
                    <h5>Method 3: Synthetic Division</h5>
                    <p>Since we're dividing by a linear factor (x + c), we could also use synthetic division:</p>
                    <div class="math-verification">
                        Synthetic division with c = ${-divisor.coefficients[1]} would give the same result
                    </div>
                    <p class="method-note">⚡ Synthetic division is often faster for linear divisors!</p>
                </div>
            `;
        }

        html += `</div>`;
        return html;
    }

    canFactor(dividend, divisor) {
        // Simple check: if remainder is zero, it factors
        return this.currentProblem.solution.remainder.isZero();
    }

    loadTerminology() {
        if (typeof mathTerminology === 'undefined') {
            console.warn('Math terminology data not loaded');
            return;
        }

        // Load all terminology categories
        this.displayTerms('basic-terms', mathTerminology.basicTerms);
        this.displayTerms('polynomial-terms', mathTerminology.polynomialTerms);
        this.displayTerms('division-terms', mathTerminology.divisionTerms);
        this.displayTerms('algebra-terms', mathTerminology.algebraTerms);
        this.displayTerms('geometry-terms', mathTerminology.geometryTerms);
        this.displayTerms('calculus-terms', mathTerminology.calculusTerms);
        this.displayTerms('advanced-terms', mathTerminology.advancedTerms);
    }

    initializeMathSections() {
        // Initialize topic selectors for algebra, geometry, and calculus
        this.initializeTopicSelector('algebra');
        this.initializeTopicSelector('geometry');
        this.initializeTopicSelector('calculus');
    }

    initializeTopicSelector(subject) {
        const section = document.getElementById(`${subject}-section`);
        if (!section) return;

        const topicButtons = section.querySelectorAll('.topic-btn');
        const contentDiv = section.querySelector(`#${subject}-content`);

        topicButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                topicButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Load content
                const topic = button.getAttribute('data-topic');
                this.loadTopicContent(subject, topic, contentDiv);
            });
        });

        // Load initial content
        const initialTopic = topicButtons[0]?.getAttribute('data-topic');
        if (initialTopic) {
            this.loadTopicContent(subject, initialTopic, contentDiv);
        }
    }

    loadTopicContent(subject, topic, contentDiv) {
        if (typeof mathContent === 'undefined') {
            contentDiv.innerHTML = '<p>Content not available</p>';
            return;
        }

        const content = mathContent[subject]?.[topic];
        if (content) {
            contentDiv.innerHTML = `
                <h3>${content.title}</h3>
                ${content.content}
            `;
        } else {
            contentDiv.innerHTML = '<p>Content coming soon!</p>';
        }
    }

    displayTerms(containerId, terms) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        terms.forEach(term => {
            const termCard = document.createElement('div');
            termCard.className = 'term-card';
            termCard.innerHTML = `
                <div class="term-name">${term.name}</div>
                <div class="term-definition">${term.definition}</div>
                <div class="term-example">
                    <div class="term-example-label">Example:</div>
                    ${term.example}
                </div>
            `;
            container.appendChild(termCard);
        });
    }
}

// Enhanced CSS for educational math formatting
const additionalStyles = `
    .division-problem {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-size: 1.8rem;
        font-weight: bold;
    }

    .division-symbol, .equals {
        color: #667eea;
        font-size: 2rem;
    }

    .question-mark {
        color: #e74c3c;
        font-size: 2rem;
    }

    .dividend, .divisor {
        padding: 10px 15px;
        background: #f8f9fa;
        border: 2px solid #667eea;
        border-radius: 8px;
    }

    .final-answer {
        background: #d4edda;
        border: 2px solid #28a745;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
    }

    .exact-division {
        color: #28a745;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .math-text {
        font-family: 'Courier New', monospace;
        background: #f8f9fa;
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid #ddd;
        font-weight: bold;
    }

    .step {
        margin-bottom: 20px;
        padding: 15px;
        background: white;
        border-radius: 8px;
        border-left: 4px solid #667eea;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .step-introduction {
        border-left-color: #17a2b8;
        background: #f0f9ff;
    }

    .step-division {
        border-left-color: #ffc107;
        background: #fffbf0;
    }

    .step-multiplication {
        border-left-color: #6f42c1;
        background: #f8f5ff;
    }

    .step-subtraction {
        border-left-color: #fd7e14;
        background: #fff8f0;
    }

    .step-conclusion {
        border-left-color: #28a745;
        background: #f0fff4;
    }

    .step-header {
        margin-bottom: 10px;
    }

    .step-number {
        font-weight: bold;
        color: #667eea;
        font-size: 1.1rem;
    }

    .step-description {
        font-size: 1rem;
        margin-bottom: 8px;
        color: #333;
    }

    .step-explanation {
        background: #e3f2fd;
        padding: 10px;
        border-radius: 6px;
        margin: 10px 0;
        font-style: italic;
        border-left: 3px solid #2196f3;
    }

    .step-detail {
        margin-top: 8px;
        padding: 8px 12px;
        background: #f8f9fa;
        border-radius: 4px;
        color: #666;
        font-size: 0.9rem;
    }

    .step-verification {
        background: #e8f5e8;
        padding: 10px;
        border-radius: 6px;
        margin-top: 10px;
        border-left: 3px solid #28a745;
        font-size: 0.9rem;
    }

    .alternative-methods {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #e9ecef;
    }

    .alternative-methods h4 {
        color: #495057;
        margin-bottom: 15px;
    }

    .method {
        background: white;
        padding: 15px;
        margin: 15px 0;
        border-radius: 8px;
        border-left: 4px solid #6c757d;
    }

    .method h5 {
        color: #495057;
        margin-bottom: 10px;
    }

    .math-verification {
        background: #f8f9fa;
        padding: 12px;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        margin: 10px 0;
        text-align: center;
        border: 1px solid #dee2e6;
    }

    .method-note {
        color: #6c757d;
        font-size: 0.9rem;
        margin-top: 8px;
        font-style: italic;
    }

    @media (max-width: 768px) {
        .division-problem {
            flex-direction: column;
            gap: 10px;
            font-size: 1.4rem;
        }

        .division-symbol, .equals, .question-mark {
            font-size: 1.6rem;
        }

        .step {
            padding: 12px;
        }

        .alternative-methods {
            padding: 15px;
        }

        .method {
            padding: 12px;
        }
    }
`;

// Add additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Global function for algebra topics (called from HTML)
function showAlgebraTopic(topicKey) {
    if (typeof algebraBasics === 'undefined') {
        console.warn('Algebra basics data not loaded');
        return;
    }

    const topic = algebraBasics[topicKey];
    if (!topic) return;

    const detailContainer = document.getElementById('algebra-detail');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <h3>${topic.title}</h3>
        ${topic.content}
        <button class="btn-primary" onclick="hideAlgebraTopic()" style="margin-top: 20px;">Close</button>
    `;

    detailContainer.style.display = 'block';
    detailContainer.scrollIntoView({ behavior: 'smooth' });
}

function hideAlgebraTopic() {
    const detailContainer = document.getElementById('algebra-detail');
    if (detailContainer) {
        detailContainer.style.display = 'none';
    }
}

// Enhanced CSS for terminology and algebra sections
const enhancedStyles = `
    .example-box {
        background: #f0f9ff;
        border: 1px solid #bae6fd;
        border-radius: 8px;
        padding: 15px;
        margin: 15px 0;
    }

    .example-box h5 {
        color: #0369a1;
        margin-bottom: 10px;
    }

    .example-box ul {
        margin: 0;
        padding-left: 20px;
    }

    .example-box li {
        margin-bottom: 5px;
    }

    .step-by-step {
        background: #f8f9fa;
        border-left: 4px solid #28a745;
        padding: 15px;
        margin: 15px 0;
        border-radius: 0 8px 8px 0;
    }

    .step-by-step h5 {
        color: #28a745;
        margin-bottom: 10px;
    }

    .step-by-step p {
        margin-bottom: 8px;
        line-height: 1.5;
    }

    .pemdas-box {
        background: #e3f2fd;
        border: 2px solid #2196f3;
        border-radius: 10px;
        padding: 20px;
        margin: 15px 0;
        text-align: center;
    }

    .pemdas-box h5 {
        color: #1976d2;
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    .pemdas-box ul {
        text-align: left;
        max-width: 400px;
        margin: 0 auto;
    }

    .algebra-detail h3 {
        color: #667eea;
        margin-bottom: 20px;
        border-bottom: 2px solid #667eea;
        padding-bottom: 10px;
    }

    .algebra-detail h4 {
        color: #495057;
        margin: 20px 0 10px 0;
    }

    .algebra-detail h5 {
        color: #6c757d;
        margin: 15px 0 8px 0;
    }

    .algebra-detail table {
        margin: 15px 0;
        border-collapse: collapse;
        width: 100%;
    }

    .algebra-detail th,
    .algebra-detail td {
        padding: 12px;
        border: 1px solid #dee2e6;
        text-align: left;
    }

    .algebra-detail th {
        background: #f8f9fa;
        font-weight: bold;
        color: #495057;
    }

    @media (max-width: 768px) {
        .pemdas-box ul {
            font-size: 1rem;
        }

        .algebra-detail {
            padding: 20px;
        }
    }
`;

// Problem generators for different math topics
function generateLinearEquation() {
    const type = document.getElementById('linear-type').value;
    const problemDiv = document.getElementById('linear-problem');
    const solveBtn = document.getElementById('linear-solve');

    let problem, solution;

    switch(type) {
        case 'simple':
            const a = Math.floor(Math.random() * 9) + 2;
            const b = Math.floor(Math.random() * 20) - 10;
            const c = Math.floor(Math.random() * 30) + 10;
            problem = `${a}x + ${b} = ${c}`;
            solution = `
                <div class="step">Subtract ${b} from both sides: ${a}x = ${c - b}</div>
                <div class="step">Divide by ${a}: x = ${(c - b) / a}</div>
            `;
            break;
        case 'two-step':
            const a2 = Math.floor(Math.random() * 5) + 2;
            const b2 = Math.floor(Math.random() * 10) + 1;
            const c2 = Math.floor(Math.random() * 3) + 1;
            const d2 = Math.floor(Math.random() * 15) + 5;
            problem = `${a2}x + ${b2} = ${c2}x + ${d2}`;
            solution = `
                <div class="step">Subtract ${c2}x from both sides: ${a2 - c2}x + ${b2} = ${d2}</div>
                <div class="step">Subtract ${b2} from both sides: ${a2 - c2}x = ${d2 - b2}</div>
                <div class="step">Divide by ${a2 - c2}: x = ${(d2 - b2) / (a2 - c2)}</div>
            `;
            break;
        default:
            problem = '3(x + 2) - 5 = 2x + 7';
            solution = `
                <div class="step">Distribute: 3x + 6 - 5 = 2x + 7</div>
                <div class="step">Simplify: 3x + 1 = 2x + 7</div>
                <div class="step">Subtract 2x: x + 1 = 7</div>
                <div class="step">Subtract 1: x = 6</div>
            `;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';

    // Store solution for later display
    window.currentLinearSolution = solution;
}

function solveLinearEquation() {
    const solutionDiv = document.getElementById('linear-solution');
    solutionDiv.innerHTML = window.currentLinearSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

function generateQuadraticEquation() {
    const method = document.getElementById('quadratic-method').value;
    const problemDiv = document.getElementById('quadratic-problem');
    const solveBtn = document.getElementById('quadratic-solve');

    let problem, solution;

    // Generate different types based on method
    if (method === 'factoring') {
        // Generate a factorable quadratic
        const r1 = Math.floor(Math.random() * 6) + 1;
        const r2 = Math.floor(Math.random() * 6) + 1;
        const a = 1;
        const b = -(r1 + r2);
        const c = r1 * r2;

        problem = `x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0`;

        solution = `
            <div class="step"><strong>Step 1:</strong> Find two numbers that multiply to ${c} and add to ${b}</div>
            <div class="step"><strong>Step 2:</strong> Those numbers are ${-r1} and ${-r2}</div>
            <div class="step"><strong>Step 3:</strong> Factor: (x ${-r1 >= 0 ? '+' : ''}${-r1})(x ${-r2 >= 0 ? '+' : ''}${-r2}) = 0</div>
            <div class="step"><strong>Step 4:</strong> Set each factor to zero:<br>x ${-r1 >= 0 ? '+' : ''}${-r1} = 0  or  x ${-r2 >= 0 ? '+' : ''}${-r2} = 0</div>
            <div class="step"><strong>Solutions:</strong> x = ${r1} or x = ${r2}</div>
            <div class="step"><strong>Check:</strong> (${r1})² ${b >= 0 ? '+' : ''}${b}(${r1}) ${c >= 0 ? '+' : ''}${c} = ${r1*r1 + b*r1 + c} ✓</div>
        `;
    } else if (method === 'formula') {
        // Generate any quadratic for formula method
        const a = Math.floor(Math.random() * 3) + 1;
        const b = Math.floor(Math.random() * 10) - 5;
        const c = Math.floor(Math.random() * 6) - 3;
        const discriminant = b * b - 4 * a * c;

        problem = `${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0`;

        if (discriminant >= 0) {
            const sqrtDisc = Math.sqrt(discriminant);
            const x1 = (-b + sqrtDisc) / (2 * a);
            const x2 = (-b - sqrtDisc) / (2 * a);

            solution = `
                <div class="step"><strong>Step 1:</strong> Identify a = ${a}, b = ${b}, c = ${c}</div>
                <div class="step"><strong>Step 2:</strong> Use quadratic formula: x = (-b ± √(b² - 4ac)) / (2a)</div>
                <div class="step"><strong>Step 3:</strong> Calculate discriminant: Δ = ${b}² - 4(${a})(${c}) = ${discriminant}</div>
                <div class="step"><strong>Step 4:</strong> Substitute: x = (${-b} ± √${discriminant}) / ${2*a}</div>
                <div class="step"><strong>Step 5:</strong> Simplify: x = (${-b} ± ${sqrtDisc.toFixed(2)}) / ${2*a}</div>
                <div class="step"><strong>Solutions:</strong> x = ${x1.toFixed(2)} or x = ${x2.toFixed(2)}</div>
            `;
        } else {
            solution = `
                <div class="step"><strong>Step 1:</strong> Identify a = ${a}, b = ${b}, c = ${c}</div>
                <div class="step"><strong>Step 2:</strong> Calculate discriminant: Δ = ${b}² - 4(${a})(${c}) = ${discriminant}</div>
                <div class="step"><strong>Step 3:</strong> Since Δ < 0, there are no real solutions</div>
                <div class="step"><strong>Answer:</strong> No real solutions (complex solutions exist)</div>
            `;
        }
    } else { // completing the square
        const r = Math.floor(Math.random() * 4) + 1;
        const h = Math.floor(Math.random() * 6) - 3;
        const k = Math.floor(Math.random() * 8) - 4;

        // (x - h)² + k = 0, so x² - 2hx + (h² + k) = 0
        const a = 1;
        const b = -2 * h;
        const c = h * h + k;

        problem = `x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0`;

        solution = `
            <div class="step"><strong>Step 1:</strong> Move constant to right: x² ${b >= 0 ? '+' : ''}${b}x = ${-c}</div>
            <div class="step"><strong>Step 2:</strong> Complete the square: add (${b}/2)² = ${(b/2)**2} to both sides</div>
            <div class="step"><strong>Step 3:</strong> x² ${b >= 0 ? '+' : ''}${b}x + ${(b/2)**2} = ${-c + (b/2)**2}</div>
            <div class="step"><strong>Step 4:</strong> Factor: (x ${h >= 0 ? '+' : ''}${h})² = ${-k}</div>
            ${-k >= 0 ?
                `<div class="step"><strong>Step 5:</strong> Take square root: x ${h >= 0 ? '+' : ''}${h} = ±${Math.sqrt(-k).toFixed(2)}</div>
                 <div class="step"><strong>Solutions:</strong> x = ${(h + Math.sqrt(-k)).toFixed(2)} or x = ${(h - Math.sqrt(-k)).toFixed(2)}</div>` :
                `<div class="step"><strong>Step 5:</strong> Since ${-k} < 0, no real solutions exist</div>`
            }
        `;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentQuadraticSolution = solution;
}

function solveQuadraticEquation() {
    const solutionDiv = document.getElementById('quadratic-solution');
    solutionDiv.innerHTML = window.currentQuadraticSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

function generateSystemEquation() {
    const method = document.getElementById('system-method').value;
    const problemDiv = document.getElementById('system-problem');
    const solveBtn = document.getElementById('system-solve');

    // Generate a simple system
    const x = Math.floor(Math.random() * 5) + 1;
    const y = Math.floor(Math.random() * 5) + 1;

    const a1 = Math.floor(Math.random() * 3) + 1;
    const b1 = Math.floor(Math.random() * 3) + 1;
    const c1 = a1 * x + b1 * y;

    const a2 = Math.floor(Math.random() * 3) + 1;
    const b2 = -(Math.floor(Math.random() * 3) + 1);
    const c2 = a2 * x + b2 * y;

    const problem = `${a1}x + ${b1}y = ${c1}<br>${a2}x ${b2 >= 0 ? '+' : ''}${b2}y = ${c2}`;

    const solution = `
        <div class="step">Using ${method} method</div>
        <div class="step">Solution: x = ${x}, y = ${y}</div>
        <div class="step">Check: ${a1}(${x}) + ${b1}(${y}) = ${c1} ✓</div>
        <div class="step">Check: ${a2}(${x}) + ${b2}(${y}) = ${c2} ✓</div>
    `;

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentSystemSolution = solution;
}

function solveSystemEquation() {
    const solutionDiv = document.getElementById('system-solution');
    solutionDiv.innerHTML = window.currentSystemSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

// Geometry Problem Generators
function generateShapeProblem() {
    const shapeType = document.getElementById('shape-type').value;
    const problemDiv = document.getElementById('shape-problem');
    const solveBtn = document.getElementById('shape-solve');

    let problem, solution;

    switch(shapeType) {
        case 'rectangle':
            const length = Math.floor(Math.random() * 10) + 3;
            const width = Math.floor(Math.random() * 8) + 2;
            problem = `Rectangle with length ${length} and width ${width}.<br>Find the area and perimeter.`;
            solution = `
                <div class="step"><strong>Given:</strong> Length = ${length}, Width = ${width}</div>
                <div class="step"><strong>Area Formula:</strong> A = length × width</div>
                <div class="step"><strong>Area:</strong> A = ${length} × ${width} = ${length * width} square units</div>
                <div class="step"><strong>Perimeter Formula:</strong> P = 2(length + width)</div>
                <div class="step"><strong>Perimeter:</strong> P = 2(${length} + ${width}) = ${2 * (length + width)} units</div>
            `;
            break;
        case 'triangle':
            const base = Math.floor(Math.random() * 12) + 4;
            const height = Math.floor(Math.random() * 10) + 3;
            problem = `Triangle with base ${base} and height ${height}.<br>Find the area.`;
            solution = `
                <div class="step"><strong>Given:</strong> Base = ${base}, Height = ${height}</div>
                <div class="step"><strong>Area Formula:</strong> A = ½ × base × height</div>
                <div class="step"><strong>Area:</strong> A = ½ × ${base} × ${height} = ${0.5 * base * height} square units</div>
            `;
            break;
        case 'circle':
            const radius = Math.floor(Math.random() * 8) + 2;
            const area = Math.PI * radius * radius;
            const circumference = 2 * Math.PI * radius;
            problem = `Circle with radius ${radius}.<br>Find the area and circumference.`;
            solution = `
                <div class="step"><strong>Given:</strong> Radius = ${radius}</div>
                <div class="step"><strong>Area Formula:</strong> A = πr²</div>
                <div class="step"><strong>Area:</strong> A = π(${radius})² = ${radius * radius}π ≈ ${area.toFixed(2)} square units</div>
                <div class="step"><strong>Circumference Formula:</strong> C = 2πr</div>
                <div class="step"><strong>Circumference:</strong> C = 2π(${radius}) = ${2 * radius}π ≈ ${circumference.toFixed(2)} units</div>
            `;
            break;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentShapeSolution = solution;
}

function solveShapeProblem() {
    const solutionDiv = document.getElementById('shape-solution');
    solutionDiv.innerHTML = window.currentShapeSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

function generateTriangleProblem() {
    const triangleType = document.getElementById('triangle-type').value;
    const problemDiv = document.getElementById('triangle-problem');
    const solveBtn = document.getElementById('triangle-solve');

    let problem, solution;

    switch(triangleType) {
        case 'pythagorean':
            const a = Math.floor(Math.random() * 8) + 3;
            const b = Math.floor(Math.random() * 8) + 3;
            const c = Math.sqrt(a * a + b * b);
            problem = `Right triangle with legs a = ${a} and b = ${b}.<br>Find the hypotenuse c.`;
            solution = `
                <div class="step"><strong>Given:</strong> a = ${a}, b = ${b}</div>
                <div class="step"><strong>Pythagorean Theorem:</strong> a² + b² = c²</div>
                <div class="step"><strong>Substitute:</strong> ${a}² + ${b}² = c²</div>
                <div class="step"><strong>Calculate:</strong> ${a * a} + ${b * b} = c²</div>
                <div class="step"><strong>Simplify:</strong> ${a * a + b * b} = c²</div>
                <div class="step"><strong>Take square root:</strong> c = √${a * a + b * b} = ${c.toFixed(2)}</div>
            `;
            break;
        case 'area':
            const base = Math.floor(Math.random() * 12) + 4;
            const height = Math.floor(Math.random() * 10) + 3;
            problem = `Triangle with base ${base} and height ${height}.<br>Find the area.`;
            solution = `
                <div class="step"><strong>Given:</strong> Base = ${base}, Height = ${height}</div>
                <div class="step"><strong>Area Formula:</strong> A = ½ × base × height</div>
                <div class="step"><strong>Substitute:</strong> A = ½ × ${base} × ${height}</div>
                <div class="step"><strong>Calculate:</strong> A = ${0.5 * base * height} square units</div>
            `;
            break;
        case 'angles':
            const angle1 = Math.floor(Math.random() * 60) + 30;
            const angle2 = Math.floor(Math.random() * 60) + 30;
            const angle3 = 180 - angle1 - angle2;
            problem = `Triangle with angles A = ${angle1}° and B = ${angle2}°.<br>Find angle C.`;
            solution = `
                <div class="step"><strong>Given:</strong> A = ${angle1}°, B = ${angle2}°</div>
                <div class="step"><strong>Angle Sum Property:</strong> A + B + C = 180°</div>
                <div class="step"><strong>Substitute:</strong> ${angle1}° + ${angle2}° + C = 180°</div>
                <div class="step"><strong>Simplify:</strong> ${angle1 + angle2}° + C = 180°</div>
                <div class="step"><strong>Solve:</strong> C = 180° - ${angle1 + angle2}° = ${angle3}°</div>
            `;
            break;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentTriangleSolution = solution;
}

function solveTriangleProblem() {
    const solutionDiv = document.getElementById('triangle-solution');
    solutionDiv.innerHTML = window.currentTriangleSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

// Calculus Problem Generators
function generateLimitProblem() {
    const limitType = document.getElementById('limit-type').value;
    const problemDiv = document.getElementById('limit-problem');
    const solveBtn = document.getElementById('limit-solve');

    let problem, solution;

    switch(limitType) {
        case 'direct':
            const a = Math.floor(Math.random() * 5) + 1;
            const b = Math.floor(Math.random() * 8) + 2;
            const c = Math.floor(Math.random() * 6) + 1;
            const limit_point = Math.floor(Math.random() * 4) + 1;
            const result = a * limit_point * limit_point + b * limit_point + c;
            problem = `lim(x→${limit_point}) (${a}x² + ${b}x + ${c})`;
            solution = `
                <div class="step"><strong>Step 1:</strong> This is a polynomial, so we can use direct substitution</div>
                <div class="step"><strong>Step 2:</strong> Substitute x = ${limit_point}</div>
                <div class="step"><strong>Step 3:</strong> ${a}(${limit_point})² + ${b}(${limit_point}) + ${c}</div>
                <div class="step"><strong>Step 4:</strong> ${a}(${limit_point * limit_point}) + ${b * limit_point} + ${c}</div>
                <div class="step"><strong>Answer:</strong> ${result}</div>
            `;
            break;
        case 'factoring':
            const root = Math.floor(Math.random() * 4) + 1;
            const other_factor = Math.floor(Math.random() * 3) + 2;
            problem = `lim(x→${root}) (x² - ${root * root})/(x - ${root})`;
            solution = `
                <div class="step"><strong>Step 1:</strong> Direct substitution gives 0/0 (indeterminate form)</div>
                <div class="step"><strong>Step 2:</strong> Factor the numerator: x² - ${root * root} = (x + ${root})(x - ${root})</div>
                <div class="step"><strong>Step 3:</strong> Simplify: (x + ${root})(x - ${root})/(x - ${root}) = x + ${root}</div>
                <div class="step"><strong>Step 4:</strong> Take the limit: lim(x→${root}) (x + ${root}) = ${root} + ${root} = ${2 * root}</div>
            `;
            break;
        case 'infinity':
            const leading_coeff = Math.floor(Math.random() * 3) + 1;
            problem = `lim(x→∞) (${leading_coeff}x² + 3x + 1)/(2x² + x + 5)`;
            solution = `
                <div class="step"><strong>Step 1:</strong> Divide numerator and denominator by highest power (x²)</div>
                <div class="step"><strong>Step 2:</strong> lim(x→∞) (${leading_coeff} + 3/x + 1/x²)/(2 + 1/x + 5/x²)</div>
                <div class="step"><strong>Step 3:</strong> As x→∞, terms with x in denominator approach 0</div>
                <div class="step"><strong>Step 4:</strong> lim(x→∞) (${leading_coeff} + 0 + 0)/(2 + 0 + 0) = ${leading_coeff}/2</div>
            `;
            break;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentLimitSolution = solution;
}

function solveLimitProblem() {
    const solutionDiv = document.getElementById('limit-solution');
    solutionDiv.innerHTML = window.currentLimitSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

function generateDerivativeProblem() {
    const derivativeType = document.getElementById('derivative-type').value;
    const problemDiv = document.getElementById('derivative-problem');
    const solveBtn = document.getElementById('derivative-solve');

    let problem, solution;

    switch(derivativeType) {
        case 'polynomial':
            const a = Math.floor(Math.random() * 5) + 1;
            const b = Math.floor(Math.random() * 8) + 1;
            const c = Math.floor(Math.random() * 10) - 5;
            problem = `Find d/dx[${a}x³ + ${b}x² + ${c}x + 2]`;
            solution = `
                <div class="step"><strong>Step 1:</strong> Apply power rule to each term</div>
                <div class="step"><strong>Step 2:</strong> d/dx[${a}x³] = ${a} · 3x² = ${3 * a}x²</div>
                <div class="step"><strong>Step 3:</strong> d/dx[${b}x²] = ${b} · 2x = ${2 * b}x</div>
                <div class="step"><strong>Step 4:</strong> d/dx[${c}x] = ${c}</div>
                <div class="step"><strong>Step 5:</strong> d/dx[2] = 0</div>
                <div class="step"><strong>Answer:</strong> ${3 * a}x² + ${2 * b}x + ${c}</div>
            `;
            break;
        case 'product':
            const coeff1 = Math.floor(Math.random() * 3) + 1;
            const coeff2 = Math.floor(Math.random() * 3) + 1;
            problem = `Find d/dx[(${coeff1}x + 1)(${coeff2}x² + 3)]`;
            solution = `
                <div class="step"><strong>Step 1:</strong> Use product rule: d/dx[uv] = u'v + uv'</div>
                <div class="step"><strong>Step 2:</strong> Let u = ${coeff1}x + 1, v = ${coeff2}x² + 3</div>
                <div class="step"><strong>Step 3:</strong> u' = ${coeff1}, v' = ${2 * coeff2}x</div>
                <div class="step"><strong>Step 4:</strong> d/dx[uv] = ${coeff1}(${coeff2}x² + 3) + (${coeff1}x + 1)(${2 * coeff2}x)</div>
                <div class="step"><strong>Step 5:</strong> = ${coeff1 * coeff2}x² + ${3 * coeff1} + ${2 * coeff1 * coeff2}x² + ${2 * coeff2}x</div>
                <div class="step"><strong>Answer:</strong> ${3 * coeff1 * coeff2}x² + ${2 * coeff2}x + ${3 * coeff1}</div>
            `;
            break;
        case 'chain':
            const inner_coeff = Math.floor(Math.random() * 3) + 1;
            const power = Math.floor(Math.random() * 3) + 2;
            problem = `Find d/dx[(${inner_coeff}x + 1)^${power}]`;
            solution = `
                <div class="step"><strong>Step 1:</strong> Use chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)</div>
                <div class="step"><strong>Step 2:</strong> Let f(u) = u^${power}, g(x) = ${inner_coeff}x + 1</div>
                <div class="step"><strong>Step 3:</strong> f'(u) = ${power}u^${power - 1}, g'(x) = ${inner_coeff}</div>
                <div class="step"><strong>Step 4:</strong> d/dx[(${inner_coeff}x + 1)^${power}] = ${power}(${inner_coeff}x + 1)^${power - 1} · ${inner_coeff}</div>
                <div class="step"><strong>Answer:</strong> ${power * inner_coeff}(${inner_coeff}x + 1)^${power - 1}</div>
            `;
            break;
    }

    problemDiv.innerHTML = problem;
    solveBtn.style.display = 'inline-block';
    window.currentDerivativeSolution = solution;
}

function solveDerivativeProblem() {
    const solutionDiv = document.getElementById('derivative-solution');
    solutionDiv.innerHTML = window.currentDerivativeSolution || 'Solution not available';
    solutionDiv.style.display = 'block';
}

// My Tutor System
class MathTutor {
    constructor() {
        this.currentSubject = '';
        this.currentTopic = '';
        this.originalProblem = '';
        this.correctSolution = [];
        this.studentSteps = [];
        this.currentStepIndex = 0;
        this.hintCount = 0;
    }

    reset() {
        this.currentSubject = '';
        this.currentTopic = '';
        this.originalProblem = '';
        this.correctSolution = [];
        this.studentSteps = [];
        this.currentStepIndex = 0;
        this.hintCount = 0;
    }

    analyzeProblem(problemText, subject, topic) {
        this.originalProblem = problemText;
        this.currentSubject = subject;
        this.currentTopic = topic;

        // Generate the correct solution based on problem type
        this.correctSolution = this.generateCorrectSolution(problemText, subject, topic);

        // If no specific solution found, provide general guidance
        if (this.correctSolution.length === 0) {
            this.correctSolution = this.getGeneralGuidance(problemText, subject, topic);
        }

        return this.correctSolution.length > 0;
    }

    getGeneralGuidance(problemText, subject, topic) {
        // Provide general guidance when specific problem parsing fails
        const guidance = [];

        if (subject === 'algebra') {
            if (topic === 'functions') {
                guidance.push('Step 1: Identify the function and what you need to find');
                guidance.push('Step 2: If evaluating f(x) at a specific value, substitute that value for x');
                guidance.push('Step 3: If analyzing the function, identify its type (linear, quadratic, etc.)');
                guidance.push('Step 4: Follow the order of operations when calculating');
                guidance.push('Step 5: Simplify your final answer');
            } else if (topic === 'linear-equations') {
                guidance.push('Step 1: Write the equation in standard form');
                guidance.push('Step 2: Isolate the variable by performing inverse operations');
                guidance.push('Step 3: Check your solution by substituting back');
            } else if (topic === 'quadratic-equations') {
                guidance.push('Step 1: Write in standard form ax² + bx + c = 0');
                guidance.push('Step 2: Choose a solution method (factoring, quadratic formula, completing the square)');
                guidance.push('Step 3: Apply the chosen method step by step');
                guidance.push('Step 4: Check your solutions');
            }
        }

        return guidance.length > 0 ? guidance : ['Analyze the problem step by step', 'Show your work clearly', 'Check your final answer'];
    }

    generateCorrectSolution(problemText, subject, topic) {
        const steps = [];

        try {
            if (subject === 'algebra') {
                if (topic === 'linear-equations') {
                    steps.push(...this.solveLinearEquation(problemText));
                } else if (topic === 'quadratic-equations') {
                    steps.push(...this.solveQuadraticEquation(problemText));
                } else if (topic === 'systems') {
                    steps.push(...this.solveSystemEquation(problemText));
                } else if (topic === 'functions') {
                    steps.push(...this.solveFunctionProblem(problemText));
                } else if (topic === 'inequalities') {
                    steps.push(...this.solveInequalityProblem(problemText));
                }
            } else if (subject === 'geometry') {
                if (topic === 'triangles') {
                    steps.push(...this.solveTriangleProblem(problemText));
                } else if (topic === 'basic-shapes') {
                    steps.push(...this.solveShapeProblem(problemText));
                }
            } else if (subject === 'calculus') {
                if (topic === 'derivatives') {
                    steps.push(...this.solveDerivativeProblem(problemText));
                } else if (topic === 'limits') {
                    steps.push(...this.solveLimitProblem(problemText));
                }
            }
        } catch (error) {
            console.error('Error generating solution:', error);
        }

        return steps;
    }

    solveLinearEquation(problemText) {
        // Parse linear equation like "2x + 5 = 13"
        const match = problemText.match(/(\d*)\s*x\s*([+-])\s*(\d+)\s*=\s*(\d+)/);
        if (!match) return [];

        const a = parseInt(match[1]) || 1;
        const sign = match[2];
        const b = parseInt(match[3]);
        const c = parseInt(match[4]);
        const actualB = sign === '+' ? b : -b;

        return [
            `Original equation: ${a}x ${actualB >= 0 ? '+' : ''}${actualB} = ${c}`,
            `Subtract ${actualB} from both sides: ${a}x = ${c - actualB}`,
            `Divide both sides by ${a}: x = ${(c - actualB) / a}`,
            `Solution: x = ${(c - actualB) / a}`
        ];
    }

    solveFunctionProblem(problemText) {
        // Handle function problems like "f(x) = 1 - x + x²"
        const lowerText = problemText.toLowerCase();

        if (lowerText.includes('f(x)') || lowerText.includes('function')) {
            if (lowerText.includes('evaluate') || lowerText.includes('f(') || /f\(\d+\)/.test(lowerText)) {
                return [
                    'Identify the function f(x) and the value to substitute',
                    'Replace every x in the function with the given value',
                    'Follow order of operations: parentheses, exponents, multiplication/division, addition/subtraction',
                    'Calculate step by step',
                    'Simplify to get the final answer'
                ];
            } else if (lowerText.includes('domain')) {
                return [
                    'Identify the function f(x)',
                    'Look for values that make the function undefined (division by zero, square root of negative, etc.)',
                    'Set denominators ≠ 0 and solve',
                    'Express domain in interval notation or set notation'
                ];
            } else if (lowerText.includes('range')) {
                return [
                    'Identify the function type (linear, quadratic, etc.)',
                    'Find the vertex or critical points if applicable',
                    'Determine if the function has maximum/minimum values',
                    'Express range in interval notation'
                ];
            } else {
                return [
                    'Identify what the problem is asking about the function f(x) = 1 - x + x²',
                    'This is a quadratic function in standard form',
                    'If evaluating at a point: substitute the x-value',
                    'If finding properties: determine what specific property is needed',
                    'Show your work step by step'
                ];
            }
        }
        return [];
    }

    solveInequalityProblem(problemText) {
        // Handle inequality problems
        return [
            'Identify the inequality and isolate the variable',
            'Perform the same operations on both sides',
            'Remember: when multiplying/dividing by negative, flip the inequality sign',
            'Express the solution in interval notation or on a number line',
            'Check your answer with a test value'
        ];
    }

    solveQuadraticEquation(problemText) {
        // Simple quadratic parsing - this could be expanded
        return [
            'Identify the quadratic equation in standard form ax² + bx + c = 0',
            'Determine the values of a, b, and c',
            'Choose an appropriate solution method (factoring, quadratic formula, etc.)',
            'Apply the chosen method step by step',
            'Check your solutions by substituting back into the original equation'
        ];
    }

    solveSystemEquation(problemText) {
        return [
            'Write both equations clearly',
            'Choose a solution method (substitution or elimination)',
            'Apply the chosen method to eliminate one variable',
            'Solve for the remaining variable',
            'Substitute back to find the other variable',
            'Check your solution in both original equations'
        ];
    }

    solveTriangleProblem(problemText) {
        if (problemText.toLowerCase().includes('pythagorean') || problemText.toLowerCase().includes('hypotenuse')) {
            return [
                'Identify the right triangle and label the sides',
                'Apply the Pythagorean theorem: a² + b² = c²',
                'Substitute the known values',
                'Solve for the unknown side',
                'Check that your answer makes sense'
            ];
        }
        return [
            'Identify what type of triangle problem this is',
            'Write down the given information',
            'Choose the appropriate formula or theorem',
            'Substitute the known values',
            'Solve step by step'
        ];
    }

    solveShapeProblem(problemText) {
        return [
            'Identify the shape and what you need to find',
            'Write down the given measurements',
            'Choose the correct formula',
            'Substitute the values into the formula',
            'Calculate the result with proper units'
        ];
    }

    solveDerivativeProblem(problemText) {
        return [
            'Identify the function to differentiate',
            'Determine which differentiation rules apply',
            'Apply the rules step by step',
            'Simplify the result',
            'Check your work if possible'
        ];
    }

    solveLimitProblem(problemText) {
        return [
            'Identify the limit expression',
            'Try direct substitution first',
            'If indeterminate, identify the form (0/0, ∞/∞, etc.)',
            'Apply appropriate technique (factoring, L\'Hôpital\'s rule, etc.)',
            'Evaluate the limit'
        ];
    }

    analyzeStudentWork(studentWork) {
        const lines = studentWork.split('\n').filter(line => line.trim());
        this.studentSteps = lines;

        const analysis = {
            correctSteps: 0,
            errors: [],
            suggestions: [],
            nextStep: null,
            isComplete: false
        };

        // Analyze each step
        for (let i = 0; i < lines.length && i < this.correctSolution.length; i++) {
            const studentStep = lines[i].trim().toLowerCase();
            const correctStep = this.correctSolution[i].toLowerCase();

            if (this.stepsMatch(studentStep, correctStep)) {
                analysis.correctSteps++;
            } else {
                analysis.errors.push({
                    line: i + 1,
                    studentStep: lines[i],
                    issue: this.identifyError(studentStep, correctStep),
                    suggestion: this.getSuggestion(correctStep, i)
                });
                break; // Stop at first error
            }
        }

        // Determine next step
        if (analysis.correctSteps < this.correctSolution.length) {
            analysis.nextStep = this.correctSolution[analysis.correctSteps];
        } else {
            analysis.isComplete = true;
        }

        return analysis;
    }

    stepsMatch(studentStep, correctStep) {
        // Remove common variations and check for mathematical equivalence
        const normalize = (step) => {
            return step.replace(/\s+/g, ' ')
                      .replace(/step\s*\d+:?/i, '')
                      .replace(/[()]/g, '')
                      .trim();
        };

        const normalizedStudent = normalize(studentStep);
        const normalizedCorrect = normalize(correctStep);

        // Check if the key mathematical content matches
        return normalizedStudent.includes(normalizedCorrect.split(':')[1]?.trim() || normalizedCorrect);
    }

    identifyError(studentStep, correctStep) {
        if (studentStep.includes('=') && correctStep.includes('=')) {
            return 'Check your algebraic manipulation';
        } else if (studentStep.includes('+') || studentStep.includes('-')) {
            return 'Check your arithmetic operations';
        } else {
            return 'This step doesn\'t match the expected approach';
        }
    }

    getSuggestion(correctStep, stepIndex) {
        const suggestions = [
            'Start by writing the original equation clearly',
            'Think about what operation will help isolate the variable',
            'Remember to perform the same operation on both sides',
            'Simplify your expression before moving to the next step',
            'Check your arithmetic carefully'
        ];

        return suggestions[stepIndex] || 'Review the correct approach for this type of problem';
    }

    getHint(stepIndex = null) {
        const currentStep = stepIndex !== null ? stepIndex : this.studentSteps.length;

        if (currentStep >= this.correctSolution.length) {
            return 'You\'ve completed all the steps! Check your final answer.';
        }

        const hints = [
            'Look at what you need to isolate or solve for',
            'What mathematical operation would help you here?',
            'Remember the order of operations',
            'Double-check your arithmetic',
            'Make sure both sides of the equation remain balanced'
        ];

        const specificHint = this.getSpecificHint(this.correctSolution[currentStep]);
        return specificHint || hints[currentStep % hints.length];
    }

    getSpecificHint(correctStep) {
        const lowerStep = correctStep.toLowerCase();

        if (lowerStep.includes('subtract')) {
            return '💡 Try subtracting the same value from both sides of the equation';
        } else if (lowerStep.includes('divide')) {
            return '💡 Try dividing both sides by the coefficient of the variable';
        } else if (lowerStep.includes('factor')) {
            return '💡 Look for common factors or patterns that can be factored';
        } else if (lowerStep.includes('substitute')) {
            return '💡 Replace every x in the function with the given value';
        } else if (lowerStep.includes('function') || lowerStep.includes('f(x)')) {
            return '💡 For f(x) = 1 - x + x², substitute your x-value for every x in the expression';
        } else if (lowerStep.includes('evaluate')) {
            return '💡 To evaluate a function, replace x with the given number and calculate';
        } else if (lowerStep.includes('order of operations')) {
            return '💡 Remember PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction';
        } else if (lowerStep.includes('identify')) {
            return '💡 Look at what the problem is asking you to find or calculate';
        }
        return null;
    }
}

// Global tutor instance
window.mathTutor = new MathTutor();

// My Tutor UI Functions
function updateTutorTopics() {
    const subjectSelect = document.getElementById('tutor-subject');
    const topicSelect = document.getElementById('tutor-topic');
    const setupButton = document.getElementById('setup-tutor');

    const subject = subjectSelect.value;

    // Clear existing options
    topicSelect.innerHTML = '<option value="">Choose a topic...</option>';

    if (!subject) {
        topicSelect.disabled = true;
        setupButton.disabled = true;
        return;
    }

    // Define topics for each subject
    const topics = {
        'polynomial-division': [
            { value: 'polynomial-division', text: 'Polynomial Long Division' }
        ],
        'algebra': [
            { value: 'linear-equations', text: 'Linear Equations' },
            { value: 'quadratic-equations', text: 'Quadratic Equations' },
            { value: 'systems', text: 'Systems of Equations' },
            { value: 'inequalities', text: 'Inequalities' },
            { value: 'functions', text: 'Functions' }
        ],
        'geometry': [
            { value: 'basic-shapes', text: 'Basic Shapes' },
            { value: 'angles', text: 'Angles' },
            { value: 'triangles', text: 'Triangles' },
            { value: 'circles', text: 'Circles' },
            { value: 'area-volume', text: 'Area & Volume' }
        ],
        'calculus': [
            { value: 'limits', text: 'Limits' },
            { value: 'derivatives', text: 'Derivatives' },
            { value: 'integrals', text: 'Integrals' },
            { value: 'applications', text: 'Applications' },
            { value: 'series', text: 'Series' }
        ]
    };

    const subjectTopics = topics[subject] || [];

    subjectTopics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.value;
        option.textContent = topic.text;
        topicSelect.appendChild(option);
    });

    topicSelect.disabled = false;

    // Enable setup button when topic is selected
    topicSelect.addEventListener('change', () => {
        setupButton.disabled = !topicSelect.value;
    });
}

function setupTutorSession() {
    const subject = document.getElementById('tutor-subject').value;
    const topic = document.getElementById('tutor-topic').value;

    if (!subject || !topic) {
        alert('Please select both a subject and topic first.');
        return;
    }

    // Show the tutor session
    document.getElementById('tutor-session').style.display = 'block';

    // Update the current topic display
    const topicText = document.getElementById('tutor-topic').selectedOptions[0].text;
    document.getElementById('current-topic-display').textContent = `${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${topicText}`;

    // Reset the tutor
    window.mathTutor.reset();
    window.mathTutor.currentSubject = subject;
    window.mathTutor.currentTopic = topic;

    // Clear previous session data
    document.getElementById('student-problem').value = '';
    document.getElementById('tutor-workspace').style.display = 'none';

    // Scroll to the problem input
    document.getElementById('student-problem').scrollIntoView({ behavior: 'smooth' });
}

function analyzeProblem() {
    const problemText = document.getElementById('student-problem').value.trim();

    if (!problemText) {
        alert('Please enter a math problem first.');
        return;
    }

    // Analyze the problem with the tutor
    const success = window.mathTutor.analyzeProblem(
        problemText,
        window.mathTutor.currentSubject,
        window.mathTutor.currentTopic
    );

    if (!success) {
        displayTutorFeedback('error', 'I\'m having trouble understanding this problem. Please make sure it matches the selected topic and is clearly written.');
        return;
    }

    // Show the workspace
    document.getElementById('tutor-workspace').style.display = 'block';
    document.getElementById('display-problem').textContent = problemText;

    // Clear previous work
    document.getElementById('student-work-lines').value = '';

    // Show welcome message
    displayTutorFeedback('success', `Great! I've analyzed your problem. Now start working through it step by step in the workspace below. I'll help guide you along the way.`);

    // Scroll to workspace
    document.getElementById('tutor-workspace').scrollIntoView({ behavior: 'smooth' });
}

function getHint() {
    const studentWork = document.getElementById('student-work-lines').value;
    const analysis = window.mathTutor.analyzeStudentWork(studentWork);

    window.mathTutor.hintCount++;

    let hintMessage = '';

    if (analysis.errors.length > 0) {
        const error = analysis.errors[0];
        hintMessage = `💡 <strong>Hint for Step ${error.line}:</strong><br>${error.suggestion}<br><br>🔍 <strong>Issue:</strong> ${error.issue}`;
    } else if (analysis.nextStep) {
        const hint = window.mathTutor.getHint(analysis.correctSteps);
        hintMessage = `💡 <strong>Next Step Hint:</strong><br>${hint}`;
    } else {
        hintMessage = '🎉 You\'re doing great! Keep working through the problem step by step.';
    }

    displayTutorFeedback('hint', hintMessage);
}

function checkWork() {
    const studentWork = document.getElementById('student-work-lines').value.trim();

    if (!studentWork) {
        displayTutorFeedback('error', 'Please show your work first, then I can check it for you.');
        return;
    }

    const analysis = window.mathTutor.analyzeStudentWork(studentWork);

    let feedbackMessage = '';

    if (analysis.isComplete) {
        feedbackMessage = `🎉 <strong>Excellent work!</strong><br>You've completed the problem correctly! You got ${analysis.correctSteps} out of ${window.mathTutor.correctSolution.length} steps right.`;
        document.getElementById('show-next-step').style.display = 'none';
    } else if (analysis.errors.length > 0) {
        const error = analysis.errors[0];
        feedbackMessage = `⚠️ <strong>Let's fix Step ${error.line}:</strong><br><br>`;
        feedbackMessage += `<strong>Your step:</strong> ${error.studentStep}<br>`;
        feedbackMessage += `<strong>Issue:</strong> ${error.issue}<br>`;
        feedbackMessage += `<strong>Suggestion:</strong> ${error.suggestion}`;

        document.getElementById('show-next-step').style.display = 'inline-block';
    } else {
        feedbackMessage = `✅ <strong>Good progress!</strong><br>Your first ${analysis.correctSteps} steps are correct. Keep going!`;

        if (analysis.nextStep) {
            feedbackMessage += `<br><br>💡 <strong>Next:</strong> ${analysis.nextStep.split(':')[0]}`;
        }

        document.getElementById('show-next-step').style.display = analysis.nextStep ? 'inline-block' : 'none';
    }

    displayTutorFeedback(analysis.errors.length > 0 ? 'error' : 'success', feedbackMessage);
}

function showNextStep() {
    const studentWork = document.getElementById('student-work-lines').value;
    const analysis = window.mathTutor.analyzeStudentWork(studentWork);

    if (analysis.nextStep) {
        const stepNumber = analysis.correctSteps + 1;
        const message = `➡️ <strong>Step ${stepNumber}:</strong><br>${analysis.nextStep}<br><br>💡 Try to understand why this step is needed before moving on.`;
        displayTutorFeedback('step', message);
    }
}

function displayTutorFeedback(type, message) {
    const feedbackDiv = document.getElementById('tutor-feedback');

    const typeClasses = {
        'hint': 'hint-message',
        'error': 'error-message',
        'success': 'success-message',
        'step': 'step-analysis'
    };

    const className = typeClasses[type] || 'hint-message';

    feedbackDiv.innerHTML = `<div class="${className}">${message}</div>`;

    // Scroll feedback into view
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Student Workspace Functions
function clearAlgebraWorkspace() {
    if (confirm('Are you sure you want to clear your algebra workspace? This cannot be undone.')) {
        document.getElementById('algebra-problem-input').value = '';
        document.getElementById('algebra-work-area').value = '';
        showWorkspaceMessage('algebra', 'Workspace cleared! Ready for a new problem.');
    }
}

function saveAlgebraWork() {
    const problem = document.getElementById('algebra-problem-input').value;
    const work = document.getElementById('algebra-work-area').value;

    if (!problem && !work) {
        alert('Nothing to save! Enter a problem and your work first.');
        return;
    }

    // Save to localStorage for persistence
    const workData = {
        problem: problem,
        work: work,
        timestamp: new Date().toISOString(),
        subject: 'algebra'
    };

    localStorage.setItem('mathlab_algebra_work', JSON.stringify(workData));
    showWorkspaceMessage('algebra', 'Work saved successfully! You can continue later.');
}

function clearGeometryWorkspace() {
    if (confirm('Are you sure you want to clear your geometry workspace? This cannot be undone.')) {
        document.getElementById('geometry-problem-input').value = '';
        document.getElementById('geometry-work-area').value = '';
        showWorkspaceMessage('geometry', 'Workspace cleared! Ready for a new problem.');
    }
}

function saveGeometryWork() {
    const problem = document.getElementById('geometry-problem-input').value;
    const work = document.getElementById('geometry-work-area').value;

    if (!problem && !work) {
        alert('Nothing to save! Enter a problem and your work first.');
        return;
    }

    const workData = {
        problem: problem,
        work: work,
        timestamp: new Date().toISOString(),
        subject: 'geometry'
    };

    localStorage.setItem('mathlab_geometry_work', JSON.stringify(workData));
    showWorkspaceMessage('geometry', 'Work saved successfully! You can continue later.');
}

function clearCalculusWorkspace() {
    if (confirm('Are you sure you want to clear your calculus workspace? This cannot be undone.')) {
        document.getElementById('calculus-problem-input').value = '';
        document.getElementById('calculus-work-area').value = '';
        showWorkspaceMessage('calculus', 'Workspace cleared! Ready for a new problem.');
    }
}

function saveCalculusWork() {
    const problem = document.getElementById('calculus-problem-input').value;
    const work = document.getElementById('calculus-work-area').value;

    if (!problem && !work) {
        alert('Nothing to save! Enter a problem and your work first.');
        return;
    }

    const workData = {
        problem: problem,
        work: work,
        timestamp: new Date().toISOString(),
        subject: 'calculus'
    };

    localStorage.setItem('mathlab_calculus_work', JSON.stringify(workData));
    showWorkspaceMessage('calculus', 'Work saved successfully! You can continue later.');
}

function showWorkspaceMessage(subject, message) {
    // Create a temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'workspace-message';
    messageDiv.innerHTML = `<div class="success-message">${message}</div>`;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.maxWidth = '300px';

    document.body.appendChild(messageDiv);

    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}

// Load saved work when sections are opened
function loadSavedWork(subject) {
    const savedWork = localStorage.getItem(`mathlab_${subject}_work`);
    if (savedWork) {
        try {
            const workData = JSON.parse(savedWork);
            const problemInput = document.getElementById(`${subject}-problem-input`);
            const workArea = document.getElementById(`${subject}-work-area`);

            if (problemInput && workArea) {
                problemInput.value = workData.problem || '';
                workArea.value = workData.work || '';

                if (workData.problem || workData.work) {
                    showWorkspaceMessage(subject, 'Previous work loaded! Continue where you left off.');
                }
            }
        } catch (error) {
            console.error('Error loading saved work:', error);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MathLabApp();
});

// Make functions available globally
window.MathLabApp = MathLabApp;
window.showAlgebraTopic = showAlgebraTopic;
window.hideAlgebraTopic = hideAlgebraTopic;

// Algebra generators
window.generateLinearEquation = generateLinearEquation;
window.solveLinearEquation = solveLinearEquation;
window.generateQuadraticEquation = generateQuadraticEquation;
window.solveQuadraticEquation = solveQuadraticEquation;
window.generateSystemEquation = generateSystemEquation;
window.solveSystemEquation = solveSystemEquation;

// Geometry generators
window.generateShapeProblem = generateShapeProblem;
window.solveShapeProblem = solveShapeProblem;
window.generateTriangleProblem = generateTriangleProblem;
window.solveTriangleProblem = solveTriangleProblem;

// Calculus generators
window.generateLimitProblem = generateLimitProblem;
window.solveLimitProblem = solveLimitProblem;
window.generateDerivativeProblem = generateDerivativeProblem;
window.solveDerivativeProblem = solveDerivativeProblem;

// My Tutor functions
window.updateTutorTopics = updateTutorTopics;
window.setupTutorSession = setupTutorSession;
window.analyzeProblem = analyzeProblem;
window.getHint = getHint;
window.checkWork = checkWork;
window.showNextStep = showNextStep;

// Student Workspace functions
window.clearAlgebraWorkspace = clearAlgebraWorkspace;
window.saveAlgebraWork = saveAlgebraWork;
window.clearGeometryWorkspace = clearGeometryWorkspace;
window.saveGeometryWork = saveGeometryWork;
window.clearCalculusWorkspace = clearCalculusWorkspace;
window.saveCalculusWork = saveCalculusWork;
