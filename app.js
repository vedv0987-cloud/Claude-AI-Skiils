// ===== Skills Data =====
const skills = [
    {
        id: 'commit',
        name: 'Git Commit',
        command: '/commit',
        icon: '📦',
        category: 'workflow',
        color: '#22c55e',
        description: 'Analyze staged changes and create well-structured git commits with clear, descriptive messages following repository conventions.',
        usage: '/commit -m "Fix authentication bug"',
        triggers: [
            'When you want to commit changes with a well-crafted message',
            'After completing a feature or bug fix',
            'When you need git best practices applied automatically'
        ],
        examples: [
            { input: '/commit', output: 'Analyzes all staged changes, drafts a concise commit message, and creates the commit' },
            { input: '/commit -m "Add user auth"', output: 'Creates commit with the specified message after validating changes' }
        ],
        tags: ['git', 'version-control', 'automation']
    },
    {
        id: 'simplify',
        name: 'Code Simplifier',
        command: '/simplify',
        icon: '✨',
        category: 'code',
        color: '#7c5cfc',
        description: 'Review changed code for reuse opportunities, quality improvements, and efficiency gains. Automatically fixes any issues found.',
        usage: '/simplify',
        triggers: [
            'After writing new code that could be optimized',
            'When you want to check for code reuse opportunities',
            'To ensure code quality and efficiency'
        ],
        examples: [
            { input: '/simplify', output: 'Reviews recent changes, identifies duplicated logic, and refactors for clarity' },
            { input: '/simplify --file src/utils.ts', output: 'Focuses simplification on the specified file' }
        ],
        tags: ['refactoring', 'optimization', 'quality']
    },
    {
        id: 'update-config',
        name: 'Config Manager',
        command: '/update-config',
        icon: '⚙️',
        category: 'workflow',
        color: '#f59e0b',
        description: 'Configure the Claude Code harness via settings.json. Set up hooks, permissions, environment variables, and automated behaviors.',
        usage: '/update-config',
        triggers: [
            'When you need to configure automated behaviors ("from now on when X")',
            'Setting up hooks for before/after events',
            'Managing permissions and environment variables',
            'Changes to settings.json or settings.local.json'
        ],
        examples: [
            { input: '/update-config allow npm commands', output: 'Adds npm permission to settings' },
            { input: '/update-config set DEBUG=true', output: 'Sets environment variable in config' }
        ],
        tags: ['settings', 'hooks', 'permissions', 'env']
    },
    {
        id: 'claude-api',
        name: 'Claude API Builder',
        command: '/claude-api',
        icon: '🔌',
        category: 'code',
        color: '#00d4ff',
        description: 'Build applications with the Claude API or Anthropic SDK. Triggered when code uses anthropic imports or user requests API integration.',
        usage: '/claude-api',
        triggers: [
            'When code imports anthropic or @anthropic-ai/sdk',
            'Building apps with Claude API or Anthropic SDKs',
            'Working with Agent SDK',
            'API usage, tool use, and SDK patterns'
        ],
        examples: [
            { input: '/claude-api create a chatbot', output: 'Generates a full chatbot app using the Anthropic SDK' },
            { input: '/claude-api add tool use', output: 'Implements tool use pattern with the Claude API' }
        ],
        tags: ['api', 'sdk', 'integration', 'anthropic']
    },
    {
        id: 'loop',
        name: 'Task Loop',
        command: '/loop',
        icon: '🔄',
        category: 'workflow',
        color: '#ff6b9d',
        description: 'Run a prompt or slash command on a recurring interval. Perfect for monitoring, polling status, or running repeated tasks.',
        usage: '/loop 5m /foo',
        triggers: [
            'When the user wants to set up a recurring task',
            'Poll for status checks at intervals',
            'Run something repeatedly (e.g., "check the deploy every 5 minutes")',
            'Keep running a command on a schedule'
        ],
        examples: [
            { input: '/loop 5m /commit', output: 'Runs /commit every 5 minutes' },
            { input: '/loop 10m check deploy status', output: 'Checks deployment status every 10 minutes' }
        ],
        tags: ['automation', 'scheduling', 'monitoring']
    },
    {
        id: 'session-start-hook',
        name: 'Session Start Hook',
        command: '/session-start-hook',
        icon: '🚀',
        category: 'workflow',
        color: '#8b5cf6',
        description: 'Create and develop startup hooks for Claude Code on the web. Ensures your project can run tests and linters during web sessions.',
        usage: '/session-start-hook',
        triggers: [
            'Setting up a repository for Claude Code on the web',
            'Creating a SessionStart hook',
            'Ensuring tests and linters run during web sessions'
        ],
        examples: [
            { input: '/session-start-hook', output: 'Creates a startup hook that installs dependencies and sets up the dev environment' }
        ],
        tags: ['hooks', 'setup', 'web', 'ci']
    },
    {
        id: 'explore',
        name: 'Codebase Explorer',
        command: 'Agent (Explore)',
        icon: '🔍',
        category: 'code',
        color: '#06b6d4',
        description: 'Fast agent specialized for exploring codebases. Find files by patterns, search code for keywords, or answer questions about architecture.',
        usage: 'Automatic via Agent tool',
        triggers: [
            'Finding files by patterns (e.g., "src/components/**/*.tsx")',
            'Searching code for keywords (e.g., "API endpoints")',
            'Understanding codebase architecture',
            'Deep research across multiple files'
        ],
        examples: [
            { input: 'Find all API routes', output: 'Searches across the codebase for route definitions and API handlers' },
            { input: 'How does auth work?', output: 'Explores auth-related files and explains the authentication flow' }
        ],
        tags: ['search', 'exploration', 'analysis']
    },
    {
        id: 'plan',
        name: 'Architecture Planner',
        command: 'Agent (Plan)',
        icon: '📐',
        category: 'code',
        color: '#f97316',
        description: 'Software architect agent for designing implementation plans. Returns step-by-step plans, identifies critical files, and considers trade-offs.',
        usage: 'Automatic via Agent tool',
        triggers: [
            'Planning implementation strategy for a feature',
            'Designing architecture for new modules',
            'Identifying critical files and dependencies',
            'Evaluating architectural trade-offs'
        ],
        examples: [
            { input: 'Plan a user auth system', output: 'Produces a step-by-step plan with file structure, dependencies, and security considerations' }
        ],
        tags: ['architecture', 'planning', 'design']
    },
    {
        id: 'gamma',
        name: 'Gamma Presentations',
        command: 'MCP: Gamma',
        icon: '🎨',
        category: 'design',
        color: '#ec4899',
        description: 'Create AI-powered presentations, documents, webpages, and social posts using Gamma. Intelligent defaults for professional content.',
        usage: 'Via MCP Gamma tools',
        triggers: [
            'Creating presentations or slide decks',
            'Generating documents and webpages',
            'Creating social media posts',
            'Professional content generation'
        ],
        examples: [
            { input: 'Create a product launch deck', output: 'Generates a polished presentation with Gamma\'s AI-powered design' }
        ],
        tags: ['presentations', 'design', 'content']
    },
    {
        id: 'figma',
        name: 'Figma Integration',
        command: 'MCP: Figma',
        icon: '🎯',
        category: 'design',
        color: '#a855f7',
        description: 'Read designs from Figma, create FigJam diagrams, manage Code Connect mappings. Bridge the gap between design and code.',
        usage: 'Via MCP Figma tools',
        triggers: [
            'User shares a Figma URL',
            'Converting Figma designs to code',
            'Creating FigJam diagrams',
            'Managing Code Connect mappings'
        ],
        examples: [
            { input: 'Convert this Figma design to React', output: 'Reads the Figma design and generates adapted React+Tailwind code' }
        ],
        tags: ['design', 'figma', 'code-connect', 'ui']
    },
    {
        id: 'canva',
        name: 'Canva Designer',
        command: 'MCP: Canva',
        icon: '🖌️',
        category: 'design',
        color: '#0ea5e9',
        description: 'Generate designs, manage assets, export in multiple formats, collaborate with comments, and organize content in Canva folders.',
        usage: 'Via MCP Canva tools',
        triggers: [
            'Creating or generating designs',
            'Managing design assets and exports',
            'Collaborating with design comments',
            'Organizing content in folders'
        ],
        examples: [
            { input: 'Generate a social media banner', output: 'Creates a professional banner design in Canva' }
        ],
        tags: ['design', 'canva', 'graphics', 'export']
    },
    {
        id: 'data-tools',
        name: 'Data & File Tools',
        command: 'Read / Write / Glob / Grep',
        icon: '📊',
        category: 'data',
        color: '#14b8a6',
        description: 'Comprehensive file operations: read files, write/create files, search by pattern with Glob, search content with Grep. Core building blocks.',
        usage: 'Automatic via dedicated tools',
        triggers: [
            'Reading or writing files',
            'Searching for files by name patterns',
            'Searching file contents with regex',
            'Working with notebooks and PDFs'
        ],
        examples: [
            { input: 'Find all TypeScript files', output: 'Uses Glob with **/*.ts pattern to locate all TypeScript files' },
            { input: 'Search for TODO comments', output: 'Uses Grep to find TODO patterns across the codebase' }
        ],
        tags: ['files', 'search', 'read', 'write']
    }
];

// ===== Category Colors & Labels =====
const categoryConfig = {
    code: { label: 'Code', bg: 'rgba(124, 92, 252, 0.15)', color: '#7c5cfc' },
    design: { label: 'Design', bg: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' },
    workflow: { label: 'Workflow', bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
    data: { label: 'Data', bg: 'rgba(20, 184, 166, 0.15)', color: '#14b8a6' },
    docs: { label: 'Docs', bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }
};

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const skillsGrid = document.getElementById('skillsGrid');
const skillSearch = document.getElementById('skillSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const playgroundSkillList = document.getElementById('playgroundSkillList');
const skillCommand = document.getElementById('skillCommand');
const skillParams = document.getElementById('skillParams');
const skillContext = document.getElementById('skillContext');
const runSkillBtn = document.getElementById('runSkill');
const inputPanel = document.getElementById('inputPanel');
const outputPanel = document.getElementById('outputPanel');
const outputContent = document.getElementById('outputContent');
const outputTab = document.getElementById('outputTab');
const skillModal = document.getElementById('skillModal');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== Theme Toggle =====
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

initTheme();

// ===== Navbar Scroll =====
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('section[id], .hero[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ===== Hamburger Menu =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== Render Skills Grid =====
function renderSkills(filter = 'all', search = '') {
    const filtered = skills.filter(s => {
        const matchFilter = filter === 'all' || s.category === filter;
        const matchSearch = search === '' ||
            s.name.toLowerCase().includes(search) ||
            s.description.toLowerCase().includes(search) ||
            s.tags.some(t => t.includes(search));
        return matchFilter && matchSearch;
    });

    skillsGrid.innerHTML = filtered.map((skill, i) => {
        const cat = categoryConfig[skill.category] || categoryConfig.code;
        return `
            <div class="skill-card" data-skill="${skill.id}" style="animation-delay: ${i * 0.05}s">
                <div class="skill-card-header">
                    <div class="skill-icon" style="background: ${cat.bg}">${skill.icon}</div>
                    <span class="skill-category-badge" style="background: ${cat.bg}; color: ${cat.color}">${cat.label}</span>
                </div>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <div class="skill-command">${skill.command}</div>
                <div class="skill-tags">
                    ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    if (filtered.length === 0) {
        skillsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <p style="font-size: 1.2rem; margin-bottom: 8px;">No skills found</p>
                <p>Try a different filter or search term</p>
            </div>
        `;
    }

    // Attach click handlers
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.skill));
    });
}

// ===== Skills Filter =====
let activeFilter = 'all';
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderSkills(activeFilter, skillSearch.value.toLowerCase());
    });
});

// ===== Skills Search =====
skillSearch.addEventListener('input', (e) => {
    renderSkills(activeFilter, e.target.value.toLowerCase());
});

// ===== Skill Modal =====
function openModal(skillId) {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return;

    const cat = categoryConfig[skill.category] || categoryConfig.code;

    document.getElementById('modalIcon').innerHTML = skill.icon;
    document.getElementById('modalIcon').style.background = cat.bg;
    document.getElementById('modalTitle').textContent = skill.name;
    document.getElementById('modalCategory').textContent = cat.label;
    document.getElementById('modalDescription').textContent = skill.description;
    document.getElementById('modalUsage').innerHTML = `<code>${skill.usage}</code>`;

    const triggersList = document.getElementById('modalTriggers');
    triggersList.innerHTML = skill.triggers.map(t => `<li>${t}</li>`).join('');

    const examplesDiv = document.getElementById('modalExamples');
    examplesDiv.innerHTML = skill.examples.map(ex => `
        <div style="margin-bottom: 12px;">
            <div class="code-block" style="margin-bottom: 6px;"><code style="color: #89b4fa;">$ ${ex.input}</code></div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); padding-left: 8px;">${ex.output}</p>
        </div>
    `).join('');

    // Modal actions
    document.getElementById('modalTryBtn').onclick = () => {
        closeModal();
        selectPlaygroundSkill(skillId);
        document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
    };

    document.getElementById('modalCopyBtn').onclick = () => {
        navigator.clipboard.writeText(skill.command).then(() => {
            showToast(`Copied: ${skill.command}`);
        });
    };

    skillModal.classList.add('active');
}

function closeModal() {
    skillModal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
skillModal.addEventListener('click', (e) => {
    if (e.target === skillModal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== Playground =====
function renderPlaygroundList() {
    playgroundSkillList.innerHTML = skills.map(s => `
        <div class="playground-skill-item" data-skill="${s.id}">
            <span class="item-icon">${s.icon}</span>
            <span>${s.name}</span>
        </div>
    `).join('');

    document.querySelectorAll('.playground-skill-item').forEach(item => {
        item.addEventListener('click', () => selectPlaygroundSkill(item.dataset.skill));
    });
}

function selectPlaygroundSkill(skillId) {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return;

    document.querySelectorAll('.playground-skill-item').forEach(item => {
        item.classList.toggle('active', item.dataset.skill === skillId);
    });

    skillCommand.value = skill.command;
    skillParams.placeholder = `Parameters for ${skill.name}...`;

    // Show input panel
    inputPanel.classList.remove('hidden');
    outputPanel.classList.add('hidden');
    document.querySelectorAll('.editor-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('.editor-tab').classList.add('active');
}

// Tab switching
document.querySelectorAll('.editor-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (tab.id === 'outputTab') {
            inputPanel.classList.add('hidden');
            outputPanel.classList.remove('hidden');
        } else {
            inputPanel.classList.remove('hidden');
            outputPanel.classList.add('hidden');
        }
    });
});

// Run Skill (simulation)
runSkillBtn.addEventListener('click', () => {
    const command = skillCommand.value;
    const params = skillParams.value;
    const context = skillContext.value;

    if (!command) {
        showToast('Please select a skill first');
        return;
    }

    // Switch to output
    outputPanel.classList.remove('hidden');
    inputPanel.classList.add('hidden');
    document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
    outputTab.classList.add('active');

    // Simulate output
    const skill = skills.find(s => s.command === command);
    const skillName = skill ? skill.name : command;

    outputContent.innerHTML = '';
    const lines = [
        `<span style="color: #a6e3a1;">►</span> Running: <span style="color: #89b4fa;">${command}</span>`,
        params ? `<span style="color: #6c7086;">  params:</span> ${params}` : '',
        context ? `<span style="color: #6c7086;">  context:</span> ${context}` : '',
        '',
        `<span style="color: #f9e2af;">⟳</span> Initializing ${skillName}...`,
        `<span style="color: #a6e3a1;">✓</span> Skill loaded successfully`,
        `<span style="color: #a6e3a1;">✓</span> Parameters validated`,
        `<span style="color: #89b4fa;">⟳</span> Processing with Claude Opus 4.6...`,
        '',
        `<span style="color: #a6e3a1;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>`,
        `<span style="color: #cba6f7;">Result:</span>`,
        `  Skill <span style="color: #89b4fa;">${skillName}</span> executed successfully.`,
        `  Duration: <span style="color: #f9e2af;">${(Math.random() * 2 + 0.5).toFixed(1)}s</span>`,
        `  Status: <span style="color: #a6e3a1;">Complete ✓</span>`,
        `<span style="color: #a6e3a1;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>`,
    ].filter(Boolean);

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < lines.length) {
            outputContent.innerHTML += lines[i] + '\n';
            outputContent.scrollTop = outputContent.scrollHeight;
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 150);
});

// ===== Toast =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== Counter Animation =====
function animateCounters() {
    document.querySelectorAll('.stat-number[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 40);
    });
}

// ===== Terminal Typing Animation =====
function typeTerminal() {
    const commands = [
        { cmd: '/commit', delay: 80 },
        { cmd: '/simplify', delay: 80 },
        { cmd: '/claude-api', delay: 80 },
        { cmd: '/loop 5m /commit', delay: 80 },
        { cmd: '/update-config', delay: 80 },
    ];

    const terminalBody = document.getElementById('terminalBody');
    const typing = document.getElementById('terminalTyping');
    let cmdIndex = 0;

    function typeCommand() {
        if (cmdIndex >= commands.length) cmdIndex = 0;
        const { cmd, delay } = commands[cmdIndex];
        let charIndex = 0;
        typing.textContent = '';

        const typeChar = setInterval(() => {
            if (charIndex < cmd.length) {
                typing.textContent += cmd[charIndex];
                charIndex++;
            } else {
                clearInterval(typeChar);
                setTimeout(() => {
                    // Add output
                    const outputDiv = document.createElement('div');
                    outputDiv.className = 'terminal-output';
                    outputDiv.innerHTML = getTerminalOutput(cmd);
                    terminalBody.appendChild(outputDiv);

                    // New line
                    setTimeout(() => {
                        const newLine = document.createElement('div');
                        newLine.className = 'terminal-line';
                        newLine.innerHTML = '<span class="prompt">$</span><span class="typing" id="terminalTyping"></span><span class="cursor">|</span>';
                        terminalBody.appendChild(newLine);

                        // Keep terminal from getting too long
                        while (terminalBody.children.length > 12) {
                            terminalBody.removeChild(terminalBody.firstChild);
                        }

                        cmdIndex++;
                        // Update typing reference
                        const newTyping = terminalBody.querySelector('#terminalTyping:last-of-type') ||
                                         terminalBody.querySelector('.terminal-line:last-child .typing');
                        if (newTyping) {
                            typing.removeAttribute('id');
                            newTyping.id = 'terminalTyping';
                        }
                        setTimeout(typeCommand, 1000);
                    }, 800);
                }, 500);
            }
        }, delay);
    }

    setTimeout(typeCommand, 1500);
}

function getTerminalOutput(cmd) {
    const outputs = {
        '/commit': '<span class="success">✓</span> Committed: <span class="info">fix: resolve auth token refresh</span>',
        '/simplify': '<span class="success">✓</span> Simplified <span class="info">3 files</span> — removed <span class="warn">47 lines</span> of duplicate code',
        '/claude-api': '<span class="success">✓</span> Generated <span class="accent">Claude API</span> integration with <span class="info">tool use</span>',
        '/loop 5m /commit': '<span class="success">✓</span> Loop started: <span class="info">/commit</span> every <span class="warn">5m</span>',
        '/update-config': '<span class="success">✓</span> Updated <span class="info">settings.json</span> — added <span class="accent">npm</span> permission',
    };
    return outputs[cmd] || '<span class="success">✓</span> Done';
}

// ===== Workflow Scroll Animation =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.workflow-step').forEach(el => observer.observe(el));
}

// ===== Team Dashboard =====
function renderPopularSkills() {
    const popular = [
        { icon: '📦', name: 'Git Commit', pct: 92 },
        { icon: '✨', name: 'Code Simplifier', pct: 78 },
        { icon: '🔌', name: 'Claude API Builder', pct: 65 },
        { icon: '🔍', name: 'Codebase Explorer', pct: 58 },
        { icon: '⚙️', name: 'Config Manager', pct: 45 },
    ];

    document.getElementById('popularSkills').innerHTML = popular.map(s => `
        <div class="pop-skill">
            <div class="pop-skill-info">
                <span class="pop-skill-icon">${s.icon}</span>
                <span class="pop-skill-name">${s.name}</span>
            </div>
            <div class="pop-skill-bar">
                <div class="pop-skill-fill" style="width: ${s.pct}%"></div>
            </div>
        </div>
    `).join('');
}

function renderActivityFeed() {
    const activities = [
        { avatar: 'AJ', name: 'Alex J.', action: 'ran <strong>/commit</strong>', time: '2m ago' },
        { avatar: 'SK', name: 'Sarah K.', action: 'used <strong>Figma Integration</strong>', time: '8m ago' },
        { avatar: 'MR', name: 'Mike R.', action: 'ran <strong>/simplify</strong> on utils.ts', time: '15m ago' },
        { avatar: 'LP', name: 'Lisa P.', action: 'created <strong>Gamma presentation</strong>', time: '32m ago' },
        { avatar: 'DC', name: 'Dave C.', action: 'configured <strong>/update-config</strong>', time: '1h ago' },
    ];

    document.getElementById('activityFeed').innerHTML = activities.map(a => `
        <div class="activity-item">
            <div class="activity-avatar">${a.avatar}</div>
            <div>
                <div class="activity-text"><strong>${a.name}</strong> ${a.action}</div>
                <div class="activity-time">${a.time}</div>
            </div>
        </div>
    `).join('');
}

// ===== Simple Chart (no dependencies) =====
function renderUsageChart() {
    const canvas = document.getElementById('usageChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth * 2;
    canvas.height = container.offsetHeight * 2;
    ctx.scale(2, 2);

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    const data = [12, 19, 8, 25, 18, 30, 22, 35, 28, 40, 33, 45];
    const labels = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'];
    const max = Math.max(...data);
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();
    }

    // Draw gradient area
    const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    gradient.addColorStop(0, 'rgba(124, 92, 252, 0.3)');
    gradient.addColorStop(1, 'rgba(124, 92, 252, 0)');

    ctx.beginPath();
    data.forEach((val, i) => {
        const x = padding.left + (chartW / (data.length - 1)) * i;
        const y = padding.top + chartH - (val / max) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    const lineGradient = ctx.createLinearGradient(padding.left, 0, w - padding.right, 0);
    lineGradient.addColorStop(0, '#7c5cfc');
    lineGradient.addColorStop(1, '#00d4ff');

    ctx.beginPath();
    data.forEach((val, i) => {
        const x = padding.left + (chartW / (data.length - 1)) * i;
        const y = padding.top + chartH - (val / max) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw dots
    data.forEach((val, i) => {
        const x = padding.left + (chartW / (data.length - 1)) * i;
        const y = padding.top + chartH - (val / max) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#7c5cfc';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });

    // Labels
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#6b6b80';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, i) => {
        const x = padding.left + (chartW / (data.length - 1)) * i;
        ctx.fillText(label, x, h - 8);
    });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderPlaygroundList();
    renderPopularSkills();
    renderActivityFeed();
    initScrollAnimations();
    typeTerminal();
    animateCounters();

    // Delay chart render to ensure container is sized
    setTimeout(renderUsageChart, 100);

    // Re-render chart on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderUsageChart, 200);
    });
});
