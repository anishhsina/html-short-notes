const notes = [
  {
    id: 1,
    category: "programming",
    title: "JavaScript Fundamentals",
    difficulty: "Beginner",
    content: `
            <h3>Variables & Data Types</h3>
            <ul>
                <li><code>let</code> - Block-scoped, reassignable variable</li>
                <li><code>const</code> - Block-scoped, immutable binding</li>
                <li><code>var</code> - Function-scoped (avoid in modern code)</li>
            </ul>
            <h3>Data Types</h3>
            <ul>
                <li>Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt</li>
                <li>Objects: Arrays, Functions, Objects, Dates</li>
            </ul>
            <h3>Functions</h3>
            <ul>
                <li>Function Declaration: <code>function name() {}</code></li>
                <li>Arrow Function: <code>const name = () => {}</code></li>
                <li>Function Expression: <code>const name = function() {}</code></li>
            </ul>
            <h3>Array Methods</h3>
            <ul>
                <li><code>map()</code> - Transform array elements</li>
                <li><code>filter()</code> - Filter elements by condition</li>
                <li><code>reduce()</code> - Reduce to single value</li>
                <li><code>forEach()</code> - Iterate over elements</li>
            </ul>
        `,
  },
  {
    id: 2,
    category: "science",
    title: "Chemistry: Periodic Table",
    difficulty: "Intermediate",
    content: `
            <h3>Groups & Periods</h3>
            <ul>
                <li>Groups (columns): Elements with similar properties</li>
                <li>Periods (rows): Number of electron shells</li>
                <li>18 groups total, 7 periods</li>
            </ul>
            <h3>Major Groups</h3>
            <ul>
                <li>Group 1: Alkali Metals (highly reactive)</li>
                <li>Group 2: Alkaline Earth Metals</li>
                <li>Groups 3-12: Transition Metals</li>
                <li>Group 17: Halogens (very reactive non-metals)</li>
                <li>Group 18: Noble Gases (inert, stable)</li>
            </ul>
            <h3>Electron Configuration</h3>
            <ul>
                <li>s-orbital: max 2 electrons</li>
                <li>p-orbital: max 6 electrons</li>
                <li>d-orbital: max 10 electrons</li>
                <li>f-orbital: max 14 electrons</li>
            </ul>
        `,
  },
  {
    id: 3,
    category: "math",
    title: "Calculus: Derivatives",
    difficulty: "Advanced",
    content: `
            <h3>Basic Rules</h3>
            <ul>
                <li>Power Rule: d/dx(x^n) = n·x^(n-1)</li>
                <li>Product Rule: d/dx(uv) = u'v + uv'</li>
                <li>Quotient Rule: d/dx(u/v) = (u'v - uv')/v²</li>
                <li>Chain Rule: d/dx(f(g(x))) = f'(g(x))·g'(x)</li>
            </ul>
            <h3>Common Derivatives</h3>
            <ul>
                <li>d/dx(sin x) = cos x</li>
                <li>d/dx(cos x) = -sin x</li>
                <li>d/dx(e^x) = e^x</li>
                <li>d/dx(ln x) = 1/x</li>
            </ul>
            <h3>Applications</h3>
            <ul>
                <li>Finding maxima/minima (set f'(x) = 0)</li>
                <li>Velocity and acceleration in physics</li>
                <li>Rate of change in any function</li>
            </ul>
        `,
  },
  {
    id: 4,
    category: "history",
    title: "World War II Overview",
    difficulty: "Intermediate",
    content: `
            <h3>Timeline</h3>
            <ul>
                <li>1939: Germany invades Poland, war begins</li>
                <li>1941: Pearl Harbor attack, US enters war</li>
                <li>1944: D-Day invasion (June 6)</li>
                <li>1945: Germany surrenders (May 8), Japan surrenders (August 15)</li>
            </ul>
            <h3>Major Powers</h3>
            <ul>
                <li>Allies: USA, UK, Soviet Union, France, China</li>
                <li>Axis: Germany, Italy, Japan</li>
            </ul>
            <h3>Key Events</h3>
            <ul>
                <li>Holocaust: Genocide of 6 million Jews</li>
                <li>Battle of Stalingrad: Turning point on Eastern Front</li>
                <li>Atomic bombs dropped on Hiroshima and Nagasaki</li>
            </ul>
            <h3>Aftermath</h3>
            <ul>
                <li>Formation of United Nations (1945)</li>
                <li>Cold War begins between US and USSR</li>
                <li>Europe divided (Iron Curtain)</li>
            </ul>
        `,
  },
  {
    id: 5,
    category: "programming",
    title: "Python Data Structures",
    difficulty: "Intermediate",
    content: `
            <h3>Lists</h3>
            <ul>
                <li>Ordered, mutable collection</li>
                <li>Created with <code>[]</code> or <code>list()</code></li>
                <li>Methods: append(), extend(), insert(), remove(), pop()</li>
            </ul>
            <h3>Dictionaries</h3>
            <ul>
                <li>Key-value pairs, unordered (Python 3.7+ maintains insertion order)</li>
                <li>Created with <code>{}</code> or <code>dict()</code></li>
                <li>Methods: keys(), values(), items(), get(), update()</li>
            </ul>
            <h3>Sets</h3>
            <ul>
                <li>Unordered collection of unique elements</li>
                <li>Created with <code>{}</code> or <code>set()</code></li>
                <li>Operations: union(), intersection(), difference()</li>
            </ul>
            <h3>Tuples</h3>
            <ul>
                <li>Ordered, immutable collection</li>
                <li>Created with <code>()</code> or <code>tuple()</code></li>
                <li>Used for fixed data, faster than lists</li>
            </ul>
        `,
  },
  {
    id: 6,
    category: "science",
    title: "Physics: Newton's Laws",
    difficulty: "Beginner",
    content: `
            <h3>First Law (Law of Inertia)</h3>
            <ul>
                <li>Objects at rest stay at rest, objects in motion stay in motion</li>
                <li>Unless acted upon by an external force</li>
                <li>Explains why seatbelts are necessary</li>
            </ul>
            <h3>Second Law (F = ma)</h3>
            <ul>
                <li>Force = Mass × Acceleration</li>
                <li>Acceleration is directly proportional to force</li>
                <li>Acceleration is inversely proportional to mass</li>
            </ul>
            <h3>Third Law (Action-Reaction)</h3>
            <ul>
                <li>For every action, there's an equal and opposite reaction</li>
                <li>Forces always come in pairs</li>
                <li>Example: Rocket propulsion, walking</li>
            </ul>
            <h3>Applications</h3>
            <ul>
                <li>Vehicle safety design</li>
                <li>Sports biomechanics</li>
                <li>Space exploration</li>
            </ul>
        `,
  },
  {
    id: 7,
    category: "language",
    title: "English Grammar Essentials",
    difficulty: "Beginner",
    content: `
            <h3>Parts of Speech</h3>
            <ul>
                <li>Noun: Person, place, thing, or idea</li>
                <li>Verb: Action or state of being</li>
                <li>Adjective: Describes a noun</li>
                <li>Adverb: Describes a verb, adjective, or another adverb</li>
                <li>Pronoun: Replaces a noun (he, she, it, they)</li>
            </ul>
            <h3>Tenses</h3>
            <ul>
                <li>Simple: Past, Present, Future</li>
                <li>Continuous: Past Continuous, Present Continuous, Future Continuous</li>
                <li>Perfect: Past Perfect, Present Perfect, Future Perfect</li>
            </ul>
            <h3>Sentence Structure</h3>
            <ul>
                <li>Simple: One independent clause</li>
                <li>Compound: Two independent clauses joined by conjunction</li>
                <li>Complex: Independent + dependent clause</li>
            </ul>
        `,
  },
  {
    id: 8,
    category: "business",
    title: "Marketing: 4 Ps",
    difficulty: "Beginner",
    content: `
            <h3>Product</h3>
            <ul>
                <li>What you're selling (goods or services)</li>
                <li>Features, quality, design, branding</li>
                <li>Product life cycle: Introduction, Growth, Maturity, Decline</li>
            </ul>
            <h3>Price</h3>
            <ul>
                <li>How much customers pay</li>
                <li>Pricing strategies: Cost-plus, competitive, value-based</li>
                <li>Discounts, payment terms, credit options</li>
            </ul>
            <h3>Place (Distribution)</h3>
            <ul>
                <li>Where and how product reaches customers</li>
                <li>Channels: Direct, retail, wholesale, online</li>
                <li>Logistics and supply chain management</li>
            </ul>
            <h3>Promotion</h3>
            <ul>
                <li>How you communicate with customers</li>
                <li>Advertising, public relations, sales promotions</li>
                <li>Digital marketing: SEO, social media, email</li>
            </ul>
        `,
  },
  {
    id: 9,
    category: "math",
    title: "Algebra: Quadratic Equations",
    difficulty: "Intermediate",
    content: `
            <h3>Standard Form</h3>
            <ul>
                <li>ax² + bx + c = 0</li>
                <li>a ≠ 0 (otherwise it's linear)</li>
            </ul>
            <h3>Solving Methods</h3>
            <ul>
                <li>Factoring: Find two numbers that multiply to ac and add to b</li>
                <li>Quadratic Formula: x = [-b ± √(b²-4ac)] / 2a</li>
                <li>Completing the Square: Create perfect square trinomial</li>
                <li>Graphing: Find where parabola crosses x-axis</li>
            </ul>
            <h3>Discriminant (b²-4ac)</h3>
            <ul>
                <li>Positive: Two real solutions</li>
                <li>Zero: One real solution (repeated root)</li>
                <li>Negative: Two complex solutions</li>
            </ul>
            <h3>Applications</h3>
            <ul>
                <li>Projectile motion in physics</li>
                <li>Optimization problems</li>
                <li>Area and dimension problems</li>
            </ul>
        `,
  },
  {
    id: 10,
    category: "science",
    title: "Biology: Cell Structure",
    difficulty: "Intermediate",
    content: `
            <h3>Prokaryotic Cells</h3>
            <ul>
                <li>No nucleus (DNA in nucleoid region)</li>
                <li>Bacteria and archaea</li>
                <li>Simple structure, smaller size</li>
            </ul>
            <h3>Eukaryotic Cells</h3>
            <ul>
                <li>Nucleus: Contains DNA, surrounded by nuclear membrane</li>
                <li>Mitochondria: Powerhouse, produces ATP</li>
                <li>Endoplasmic Reticulum: Protein and lipid synthesis</li>
                <li>Golgi Apparatus: Packaging and shipping proteins</li>
                <li>Ribosomes: Protein synthesis</li>
            </ul>
            <h3>Plant Cells (Additional)</h3>
            <ul>
                <li>Cell Wall: Rigid structure for support</li>
                <li>Chloroplasts: Photosynthesis</li>
                <li>Large Central Vacuole: Storage, maintains pressure</li>
            </ul>
            <h3>Cell Membrane</h3>
            <ul>
                <li>Phospholipid bilayer</li>
                <li>Selectively permeable</li>
                <li>Contains proteins for transport and signaling</li>
            </ul>
        `,
  },
  {
    id: 11,
    category: "programming",
    title: "SQL Database Basics",
    difficulty: "Beginner",
    content: `
            <h3>Basic Commands</h3>
            <ul>
                <li><code>SELECT</code>: Retrieve data from tables</li>
                <li><code>INSERT</code>: Add new records</li>
                <li><code>UPDATE</code>: Modify existing records</li>
                <li><code>DELETE</code>: Remove records</li>
            </ul>
            <h3>Clauses</h3>
            <ul>
                <li><code>WHERE</code>: Filter results by condition</li>
                <li><code>ORDER BY</code>: Sort results</li>
                <li><code>GROUP BY</code>: Group rows with same values</li>
                <li><code>HAVING</code>: Filter groups (like WHERE for GROUP BY)</li>
            </ul>
            <h3>Joins</h3>
            <ul>
                <li>INNER JOIN: Returns matching records from both tables</li>
                <li>LEFT JOIN: All from left table, matching from right</li>
                <li>RIGHT JOIN: All from right table, matching from left</li>
                <li>FULL OUTER JOIN: All records when match in either table</li>
            </ul>
            <h3>Aggregate Functions</h3>
            <ul>
                <li>COUNT(), SUM(), AVG(), MIN(), MAX()</li>
            </ul>
        `,
  },
  {
    id: 12,
    category: "business",
    title: "Financial Statements",
    difficulty: "Intermediate",
    content: `
            <h3>Balance Sheet</h3>
            <ul>
                <li>Assets = Liabilities + Equity</li>
                <li>Shows financial position at specific point in time</li>
                <li>Assets: What company owns (cash, inventory, property)</li>
                <li>Liabilities: What company owes (loans, accounts payable)</li>
                <li>Equity: Owner's stake in company</li>
            </ul>
            <h3>Income Statement</h3>
            <ul>
                <li>Revenue - Expenses = Net Income</li>
                <li>Shows profitability over period of time</li>
                <li>Revenue: Income from sales</li>
                <li>COGS: Cost of goods sold</li>
                <li>Operating expenses, taxes, interest</li>
            </ul>
            <h3>Cash Flow Statement</h3>
            <ul>
                <li>Operating Activities: Day-to-day business</li>
                <li>Investing Activities: Purchase/sale of assets</li>
                <li>Financing Activities: Debt, equity, dividends</li>
            </ul>
        `,
  },
];

let currentFilter = "all";
let currentSearch = "";

function renderNotes() {
  const container = document.getElementById("notesContainer");
  const filteredNotes = notes.filter((note) => {
    const matchesFilter =
      currentFilter === "all" || note.category === currentFilter;
    const matchesSearch =
      note.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      note.content.toLowerCase().includes(currentSearch.toLowerCase()) ||
      note.category.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  container.innerHTML = filteredNotes
    .map(
      (note) => `
        <div class="note-card ${note.category}">
            <div class="note-header">
                <div class="note-title">${note.title}</div>
                <div class="note-category">${note.category}</div>
            </div>
            <div class="note-content" id="content-${note.id}">
                ${note.content}
            </div>
            <div class="note-footer">
                <div class="difficulty">📊 ${note.difficulty}</div>
            </div>
        </div>
    `
    )
    .join("");
}

function filterNotes(category) {
  currentFilter = category;
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderNotes();
}

document.getElementById("searchInput").addEventListener("input", function (e) {
  currentSearch = e.target.value;
  renderNotes();
});

renderNotes();
