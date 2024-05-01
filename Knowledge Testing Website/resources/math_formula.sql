-- Create the table for math_formula
CREATE TABLE math_formula (
    id SERIAL PRIMARY KEY,
    grade VARCHAR(255),
    type VARCHAR(255),
    formula TEXT
);

-- Insert data into the math_formula table
INSERT INTO math_formula (grade, type, formula) VALUES
('6', 'Algebra', 'Quadratic Formula: ax² + bx + c = 0'),
('6', 'Algebra', 'Pythagorean Theorem: a² + b² = c²'),
('6', 'Algebra', 'Linear Equation: y = mx + b'),
('6', 'Algebra', 'Order of Operations: PEMDAS (Parentheses, Exponents, Multiplication and Division from left to right, Addition and Subtraction from left to right)'),
('6', 'Algebra', 'Ratio and Proportion: a/b = c/d'),
('6', 'Geometry', 'Circle Perimeter: P = 2πr'),
('6', 'Geometry', 'Rectangle Perimeter: P = 2(length + width)'),
('6', 'Geometry', 'Circle Area: A = πr²'),
('6', 'Geometry', 'Triangle Area: A = 1/2 × base × height'),
('6', 'Geometry', 'Trapezoid Area: A = 1/2 × (b1 + b2) × height'),
('7', 'Algebra', 'Systems of Equations: [x + y = a, ax + by = c], where a, b, and c are constants'),
('7', 'Algebra', 'Quadratic Formula: ax² + bx + c = 0'),
('7', 'Algebra', 'Slope-Intercept Form: y = mx + b'),
('7', 'Algebra', 'Exponents: aⁿ × aᵐ = a^(n+m)'),
('7', 'Algebra', 'Logarithms: logb(x) = y if and only if b^y = x'),
('7', 'Geometry', 'Sphere Volume: V = 4/3 × π × r³'),
('7', 'Geometry', 'Cylinder Volume: V = πr²h'),
('7', 'Geometry', 'Cone Volume: V = 1/3 × π × r² × h'),
('7', 'Geometry', 'Cuboid Volume: V = l × w × h'),
('7', 'Geometry', 'Triangular Prism Volume: V = 1/2 (b × l) × h'),
('8', 'Algebra', 'Binomial Theorem: (a + b)ⁿ = Σ(n choose k) * a^(n-k) * b^k'),
('8', 'Algebra', 'Polynomial Division: Dividend = Divisor × Quotient + Remainder'),
('8', 'Algebra', 'Quadratic Equation Discriminant: Δ = b² - 4ac'),
('8', 'Algebra', 'Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)'),
('8', 'Algebra', 'Exponential Functions: f(x) = a * b^x, where a ≠ 0, b > 0, and b ≠ 1'),
('8', 'Geometry', 'Cone Surface Area: SA = πr(r + √(h² + r²))'),
('8', 'Geometry', 'Cylinder Surface Area: SA = 2πr(lb + lh + bh)'),
('8', 'Geometry', 'Cuboid Surface Area: SA = 2lw + 2lh + 2wh'),
('8', 'Geometry', 'Octahedron Volume: V = (1/3) * √2 * a³, where a is the edge length'),
('8', 'Geometry', 'Regular Polygon Perimeter: P = n * s, where n is the number of sides and s is the length of each side'),
('9', 'Algebra', 'Complex Numbers: z = a + bi'),
('9', 'Algebra', 'Logarithmic Properties: logₐ(xy) = logₐ(x) + logₐ(y)'),
('9', 'Algebra', 'Binomial Coefficient: C(n, k)= n!/[k!(n-k)!]'),
('9', 'Algebra', 'Matrix Multiplication: C = AB, where Cij = Σ(Aik * Bkj), where k ranges from 1 to n'),
('9', 'Algebra', 'Exponential Growth/Decay: A = P(1 + r/n)^(nt)'),
('9', 'Geometry', 'Ellipse Area: A = πab'),
('9', 'Geometry', 'Ellipsoid Volume: V = (4/3) × π × a × b × c'),
('9', 'Geometry', 'Hyperbola Volume: V = (2/3) × π × a² × b'),
('9', 'Geometry', 'Tetrahedron Volume: V = (1/6) * √2 * a³, where a is the edge length'),
('9', 'Geometry', 'Volume of a Dodecahedron: V = (15 + 7 * √5) / 4 * a^3, where a is the length of an edge'),
('10', 'Algebra', 'Partial Fraction Decomposition: A/(x-a) + B/(x-b) = (Ax + B)/(x² + bx + c)'),
('10', 'Algebra', 'Logarithmic Differentiation: y = ln(u) → y'' = u''/u'),
('10', 'Algebra', 'Matrices: (AB)C = A(BC)'),
('10', 'Algebra', 'Permutations and Combinations: P(n, r) = n!/(n-r)!'),
('10', 'Algebra', 'Arithmetic Sequence: aₙ = a₁ + (n - 1)d'),
('10', 'Geometry', 'Spherical Sector Volume: V = (2/3) × π × r³'),
('10', 'Geometry', 'Hyperbola Area: A = πab'),
('10', 'Geometry', 'Regular Polygon Area: A = 1/2 × n × s × a'),
('10', 'Geometry', 'Frustum Volume: V = 1/3 × π × h × (r₁² + r₁r₂ + r₂²)'),
('10', 'Geometry', 'The Law of Cosines: c² = a² + b² - 2ab * cos(C), where c is the side opposite to angle C, and a and b are the lengths of the other two sides.'),
('11', 'Algebra', 'Matrix Transpose: (Aᵀ)ᵀ = A'),
('11', 'Algebra', 'Derivative Formula: f''(ax^n + b) = ax^(n-1)'),
('11', 'Algebra', 'Inverse Functions: f(f⁻¹(x)) = x'),
('11', 'Algebra', 'Limits: lim(x→a) f(x) = L'),
('11', 'Algebra', 'Probability: P(E) = n(E)/n(S)'),
('11', 'Geometry', 'Hyperbolic Geometry: Parallel lines do not intersect'),
('11', 'Geometry', 'Rhombus Area: A = 0.5 × d₁ × d₂'),
('11', 'Geometry', 'Sector Area: A = 0.5 × r² × θ'),
('11', 'Geometry', 'Kite Area: A = 0.5 × d₁ × d₂'),
('11', 'Geometry', 'Cuboid Diagonal: d = √(l² + w² + h²)'),
('12', 'Algebra', 'Vector Dot Product: a ⋅ b = |a||b|cos(θ)'),
('12', 'Algebra', 'Multivariable Functions: f(x, y, z) = z + f₁(x, y) + f₂(x, y)'),
('12', 'Algebra', 'Polar Coordinates: (r, θ)'),
('12', 'Algebra', 'Taylor Series: f(x) = Σ(f^(n)(a)/n!)(x-a)^n'),
('12', 'Algebra', 'Set Theory: A set is a collection of distinct elements. A ∩ B represents the intersection of sets A and B, while A ∪ B represents the union of sets A and B.'),
('12', 'Geometry', 'Cyclic Quadrilateral Area: A = 0.25 × √((a+b+c+d) × (a+b-c+d) × (a-b+c+d) × (-a+b+c+d))'),
('12', 'Geometry', 'Regular Tetrahedron Volume: V = (a³√2)/12'),
('12', 'Geometry', 'Torus Surface Area: SA = 4π²Rr'),
('12', 'Geometry', 'Concave Polygon Area: A = 0.5 × n × s × a'),
('12', 'Geometry', 'Area Between Two Quadratic Functions: A = ∫[a, b] |f(x) - g(x)| dx, where f(x) and g(x) are the quadratic functions and [a, b] is the interval of integration');