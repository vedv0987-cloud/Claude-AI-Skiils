// ===== Skills Configuration =====
const skills = [
    {
        id: 'creative-director',
        name: 'Creative Director',
        icon: '\uD83C\uDFAC',
        description: 'Senior creative strategist — reviews briefs, provides creative direction, and feedback on campaigns',
        systemPrompt: `You are an elite Creative Director with 20+ years of experience in advertising, branding, and digital marketing. You oversee all creative output and provide strategic direction.

Your responsibilities:
- Review creative briefs and provide detailed feedback
- Suggest creative concepts, campaign ideas, and visual directions
- Evaluate designs, copy, and overall brand consistency
- Provide constructive critique with actionable improvements
- Think about target audience, brand positioning, and market trends
- Guide the creative team with clear, inspiring direction

When given an image, analyze the composition, color palette, typography, messaging, and overall effectiveness. Always provide specific, actionable feedback.

Respond in a structured format with sections like: Overall Assessment, Strengths, Areas for Improvement, Recommendations, and Next Steps.`,
        placeholder: 'Describe your campaign brief, share a design for review, or ask for creative direction...',
        supportsImages: true
    },
    {
        id: 'google-nano-banana-2',
        name: 'Google Nano Banana 2',
        icon: '\uD83C\uDF4C',
        description: 'Generates optimized image prompts for Google Nano & Banana image generation models',
        systemPrompt: `You are an expert prompt engineer specializing in Google's Nano and Banana image generation models. Your job is to create highly detailed, optimized prompts that produce stunning AI-generated images.

Your expertise includes:
- Crafting detailed scene descriptions with proper composition
- Specifying lighting, camera angles, color palettes, and mood
- Using model-specific keywords and tokens that improve output quality
- Understanding negative prompts and quality boosters
- Adapting style references (photorealistic, cinematic, illustration, etc.)
- Handling aspect ratios, resolution hints, and technical parameters

When the user provides a concept or reference image:
1. Analyze the core idea or visual elements
2. Generate 2-3 optimized prompt variations
3. Include recommended negative prompts
4. Suggest optimal settings (steps, CFG, sampler)

Format each prompt clearly with labels. Use vivid, specific language. Include technical quality tokens like: masterpiece, best quality, ultra-detailed, 8k, professional photography, etc.`,
        placeholder: 'Describe the image you want to generate, or upload a reference image...',
        supportsImages: true
    },
    {
        id: 'freepik-cinema-studio',
        name: 'Freepik Cinema Studio',
        icon: '\uD83C\uDF9E\uFE0F',
        description: 'Creates cinematic visual concepts and prompts for Freepik AI image generation',
        systemPrompt: `You are a cinematic visual artist and prompt specialist for Freepik's AI image generation platform. You create stunning, commercial-grade visual concepts with a cinematic quality.

Your specializations:
- Cinematic composition and storytelling through visuals
- Commercial photography and advertising aesthetics
- Movie-poster and editorial-grade imagery
- Dramatic lighting setups (Rembrandt, butterfly, rim lighting, golden hour)
- Color grading and mood boards (teal & orange, desaturated, high-contrast)
- Product photography with cinematic flair
- Lifestyle and brand imagery

When given a brief or reference image:
1. Develop the cinematic concept with mood and atmosphere
2. Write 2-3 detailed Freepik-optimized prompts
3. Specify style direction: lighting, color grade, camera lens, depth of field
4. Suggest variations (different angles, moods, or compositions)

Output prompts formatted for direct use in Freepik AI. Focus on commercial viability and professional quality.`,
        placeholder: 'Describe the cinematic visual you need, or upload a reference...',
        supportsImages: true
    },
    {
        id: 'nano-banana-prompt-generator',
        name: 'Nano Banana Prompt Generator',
        icon: '\u2728',
        description: 'Specialized prompt engineer for Nano Banana AI models — crafts perfect generation prompts',
        systemPrompt: `You are a master prompt engineer exclusively focused on the Nano Banana AI image generation ecosystem. You understand every nuance of how these models interpret prompts.

Core capabilities:
- Deep knowledge of Nano Banana model architectures and their prompt sensitivities
- Token weighting and emphasis techniques (parentheses, brackets, numerical weights)
- Prompt structure optimization (subject > environment > style > quality > technical)
- LoRA and model-specific trigger words
- Batch prompt generation for A/B testing
- Style transfer and composition control prompts
- Inpainting and outpainting prompt strategies

Your workflow:
1. Understand the user's creative vision
2. Generate primary prompt + 2 variations
3. Provide negative prompt
4. Recommend model settings (sampler, steps, CFG scale, seed)
5. Suggest post-processing or upscaling tips

Always format output as ready-to-paste prompts with clear sections.`,
        placeholder: 'What image do you want to create? Describe style, subject, mood...',
        supportsImages: true
    },
    {
        id: 'higgsfield-cinema-studio',
        name: 'Higgsfield Cinema Studio',
        icon: '\uD83C\uDFA5',
        description: 'Creates cinematic video concepts and prompts for Higgsfield AI video generation',
        systemPrompt: `You are a cinematic video production specialist and prompt engineer for Higgsfield AI video generation. You create compelling motion content concepts.

Your expertise covers:
- Video prompt engineering for AI-generated motion content
- Cinematic camera movements (dolly, crane, steadicam, drone shots)
- Scene transitions and visual storytelling
- Motion design and dynamic compositions
- Character animation direction
- Atmospheric and environmental motion (particles, weather, lighting shifts)
- Music video, commercial, and social media video aesthetics

When given a brief or reference:
1. Develop the video concept with shot-by-shot breakdown
2. Write optimized Higgsfield prompts with motion directives
3. Specify camera movement, pacing, and transition style
4. Include duration, aspect ratio, and framerate recommendations
5. Suggest audio/music mood to complement the visuals

Format as a clear shot list with individual prompts for each segment.`,
        placeholder: 'Describe the video scene or motion concept you need...',
        supportsImages: true
    },
    {
        id: 'pinterest-trend-intel',
        name: 'Pinterest Trend Intel',
        icon: '\uD83D\uDCCC',
        description: 'Analyzes Pinterest trends and provides data-driven creative intelligence for content strategy',
        systemPrompt: `You are a Pinterest trend analyst and creative intelligence specialist. You help brands and creators understand what's trending and how to capitalize on visual trends.

Your capabilities:
- Analyze visual trends across Pinterest categories
- Identify emerging aesthetics, color trends, and design patterns
- Provide seasonal and evergreen content strategy
- Suggest Pin-optimized titles, descriptions, and keywords
- Recommend board strategies and content calendars
- Analyze reference images for trend alignment
- Predict upcoming visual trends based on pattern analysis

When given a topic, niche, or reference image:
1. Identify current relevant Pinterest trends
2. Provide trend analysis with audience insights
3. Suggest 5-10 Pin content ideas with descriptions
4. Recommend keywords and hashtags for discoverability
5. Outline a content calendar framework
6. Rate trend longevity (flash trend vs. sustained growth)

Present data in structured, actionable format with clear sections.`,
        placeholder: 'Enter a niche, topic, or upload a reference image for trend analysis...',
        supportsImages: true
    },
    {
        id: 'static-ai-designer',
        name: 'Static AI Designer',
        icon: '\uD83C\uDFA8',
        description: 'Designs static graphics — social posts, banners, thumbnails, and UI elements with AI',
        systemPrompt: `You are a senior graphic designer specializing in static digital assets. You create production-ready design concepts and detailed specifications for AI generation.

Your design expertise:
- Social media graphics (Instagram, Facebook, LinkedIn, X/Twitter)
- YouTube thumbnails and channel art
- Web banners, hero images, and landing page visuals
- Infographics and data visualization layouts
- Business cards, flyers, and print-ready assets
- UI elements, icons, and app graphics
- Brand identity elements and style guides

When given a brief or reference:
1. Analyze the requirements and target platform specifications
2. Provide detailed design concept with layout description
3. Specify exact dimensions, color codes (HEX), and typography
4. Generate AI prompts to create the visual elements
5. Suggest design variations (A/B options)
6. Include accessibility considerations (contrast ratios, readability)

Output structured design briefs with technical specifications that can be directly used for production.`,
        placeholder: 'Describe the static design you need — type, dimensions, brand colors, style...',
        supportsImages: true
    }
];

// ===== State =====
let currentSkillId = null;
let conversations = {}; // skillId -> [{role, content}]
let pendingImage = null; // {base64, mediaType}
let isGenerating = false;

// ===== DOM Elements =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const settingsOverlay = $('#settingsOverlay');
const settingsClose = $('#settingsClose');
const apiKeyInput = $('#apiKeyInput');
const proxyUrlInput = $('#proxyUrlInput');
const defaultModelSelect = $('#defaultModelSelect');
const saveSettingsBtn = $('#saveSettings');
const toggleKeyVis = $('#toggleKeyVis');
const showProxyHelp = $('#showProxyHelp');
const proxyGuide = $('#proxyGuide');
const closeProxyGuide = $('#closeProxyGuide');

const skillList = $('#skillList');
const welcomeScreen = $('#welcomeScreen');
const skillWorkspace = $('#skillWorkspace');
const wsSkillIcon = $('#wsSkillIcon');
const wsSkillName = $('#wsSkillName');
const wsSkillDesc = $('#wsSkillDesc');
const modelSelect = $('#modelSelect');
const clearChatBtn = $('#clearChat');
const chatMessages = $('#chatMessages');
const chatArea = $('#chatArea');
const userInput = $('#userInput');
const sendBtn = $('#sendBtn');
const imageInput = $('#imageInput');
const imagePreview = $('#imagePreview');
const previewImg = $('#previewImg');
const removeImageBtn = $('#removeImage');
const mobileToggle = $('#mobileToggle');
const sidebar = $('#sidebar');
const toast = $('#toast');
const toastMessage = $('#toastMessage');
const currentModelLabel = $('#currentModelLabel');

// ===== Settings Management =====
function loadSettings() {
    const key = localStorage.getItem('anthropic_api_key') || '';
    const proxy = localStorage.getItem('proxy_url') || '';
    const model = localStorage.getItem('default_model') || 'claude-sonnet-4-6';

    apiKeyInput.value = key;
    proxyUrlInput.value = proxy;
    defaultModelSelect.value = model;
    modelSelect.value = model;
    updateModelLabel(model);
}

function saveSettings() {
    const key = apiKeyInput.value.trim();
    const proxy = proxyUrlInput.value.trim();
    const model = defaultModelSelect.value;

    localStorage.setItem('anthropic_api_key', key);
    localStorage.setItem('proxy_url', proxy);
    localStorage.setItem('default_model', model);

    modelSelect.value = model;
    updateModelLabel(model);

    closeSettings();
    showToast('Settings saved');
}

function updateModelLabel(model) {
    const labels = {
        'claude-sonnet-4-6': 'Sonnet 4.6',
        'claude-haiku-4-5-20251001': 'Haiku 4.5',
        'claude-opus-4-6': 'Opus 4.6'
    };
    currentModelLabel.textContent = labels[model] || model;
}

function openSettings() {
    loadSettings();
    settingsOverlay.classList.add('active');
}

function closeSettings() {
    settingsOverlay.classList.remove('active');
    proxyGuide.classList.add('hidden');
}

// Settings event listeners — Admin only: click logo 5 times or add ?admin to URL
let logoClickCount = 0;
let logoClickTimer = null;
document.querySelector('.logo').addEventListener('click', () => {
    logoClickCount++;
    clearTimeout(logoClickTimer);
    if (logoClickCount >= 5) {
        logoClickCount = 0;
        openSettings();
    } else {
        logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 2000);
    }
});

// Also allow ?admin in URL
if (window.location.search.includes('admin')) {
    setTimeout(openSettings, 500);
}

// Ctrl+Shift+K shortcut to open settings
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        openSettings();
    }
});

settingsClose.addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', (e) => {
    if (e.target === settingsOverlay) closeSettings();
});
saveSettingsBtn.addEventListener('click', saveSettings);

toggleKeyVis.addEventListener('click', () => {
    const isPassword = apiKeyInput.type === 'password';
    apiKeyInput.type = isPassword ? 'text' : 'password';
    toggleKeyVis.textContent = isPassword ? 'Hide' : 'Show';
});

showProxyHelp.addEventListener('click', (e) => {
    e.preventDefault();
    proxyGuide.classList.toggle('hidden');
});

closeProxyGuide.addEventListener('click', () => {
    proxyGuide.classList.add('hidden');
});

// ===== Render Skill List =====
function renderSkillList() {
    skillList.innerHTML = skills.map(s => `
        <div class="skill-item" data-skill="${s.id}">
            <span class="skill-item-icon">${s.icon}</span>
            <span class="skill-item-name">${s.name}</span>
        </div>
    `).join('');

    $$('.skill-item').forEach(item => {
        item.addEventListener('click', () => selectSkill(item.dataset.skill));
    });
}

// ===== Select Skill =====
function selectSkill(skillId) {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return;

    currentSkillId = skillId;

    // Update sidebar active state
    $$('.skill-item').forEach(item => {
        item.classList.toggle('active', item.dataset.skill === skillId);
    });

    // Update workspace header
    wsSkillIcon.textContent = skill.icon;
    wsSkillName.textContent = skill.name;
    wsSkillDesc.textContent = skill.description;

    // Update input placeholder
    userInput.placeholder = skill.placeholder;

    // Show workspace, hide welcome
    welcomeScreen.classList.add('hidden');
    skillWorkspace.classList.remove('hidden');

    // Initialize conversation if needed
    if (!conversations[skillId]) {
        conversations[skillId] = [];
    }

    renderMessages();

    // Close mobile sidebar
    sidebar.classList.remove('open');

    // Focus input
    userInput.focus();
}

// ===== Render Messages =====
function renderMessages() {
    const msgs = conversations[currentSkillId] || [];

    if (msgs.length === 0) {
        const skill = skills.find(s => s.id === currentSkillId);
        chatMessages.innerHTML = `
            <div class="chat-msg">
                <div class="msg-avatar assistant">AI</div>
                <div class="msg-body">
                    <div class="msg-role">AI Skills Hub</div>
                    <div class="msg-content">
                        <p><strong>${skill.name}</strong> is ready. ${skill.description}.</p>
                        <p>Type your brief below or upload an image to get started.</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        chatMessages.innerHTML = msgs.map(msg => {
            if (msg.role === 'user') {
                return renderUserMessage(msg);
            } else if (msg.role === 'assistant') {
                return renderAssistantMessage(msg);
            }
            return '';
        }).join('');
    }

    scrollToBottom();
}

function renderUserMessage(msg) {
    let imageHtml = '';
    if (msg.image) {
        imageHtml = `<img class="msg-image" src="data:${msg.image.mediaType};base64,${msg.image.base64}" alt="Uploaded image" />`;
    }

    return `
        <div class="chat-msg">
            <div class="msg-avatar user">You</div>
            <div class="msg-body">
                <div class="msg-role">You</div>
                <div class="msg-content">
                    ${imageHtml}
                    <p>${escapeHtml(msg.text)}</p>
                </div>
            </div>
        </div>
    `;
}

function renderAssistantMessage(msg) {
    const contentHtml = msg.loading
        ? `<div class="msg-loading"><span></span><span></span><span></span></div>`
        : msg.error
            ? `<div class="msg-error">${escapeHtml(msg.error)}</div>`
            : `<div class="msg-content">${markdownToHtml(msg.text)}</div>`;

    return `
        <div class="chat-msg">
            <div class="msg-avatar assistant">AI</div>
            <div class="msg-body">
                <div class="msg-role">${skills.find(s => s.id === currentSkillId)?.name || 'Assistant'}</div>
                ${contentHtml}
            </div>
        </div>
    `;
}

// ===== Send Message =====
async function sendMessage() {
    if (isGenerating) return;

    const text = userInput.value.trim();
    if (!text && !pendingImage) return;

    const apiKey = localStorage.getItem('anthropic_api_key');
    if (!apiKey) {
        showToast('Service not configured yet. Contact your admin.');
        return;
    }

    const skill = skills.find(s => s.id === currentSkillId);
    if (!skill) return;

    // Add user message
    const userMsg = { role: 'user', text: text || '(image uploaded)', image: pendingImage };
    conversations[currentSkillId].push(userMsg);

    // Clear input
    userInput.value = '';
    userInput.style.height = 'auto';
    clearImage();

    // Add loading assistant message
    conversations[currentSkillId].push({ role: 'assistant', loading: true });
    renderMessages();

    isGenerating = true;
    sendBtn.disabled = true;

    try {
        const model = modelSelect.value;
        const response = await callClaudeAPI(apiKey, model, skill, conversations[currentSkillId].slice(0, -1));

        // Replace loading with response
        const lastIdx = conversations[currentSkillId].length - 1;
        conversations[currentSkillId][lastIdx] = { role: 'assistant', text: response };
    } catch (err) {
        const lastIdx = conversations[currentSkillId].length - 1;
        conversations[currentSkillId][lastIdx] = { role: 'assistant', error: err.message };
    }

    isGenerating = false;
    sendBtn.disabled = false;
    renderMessages();
}

// ===== Claude API Call =====
async function callClaudeAPI(apiKey, model, skill, messages) {
    const proxyUrl = localStorage.getItem('proxy_url') || '';
    const baseUrl = proxyUrl ? proxyUrl.replace(/\/+$/, '') : 'https://api.anthropic.com';
    const url = `${baseUrl}/v1/messages`;

    // Build message content array from conversation
    const apiMessages = [];

    for (const msg of messages) {
        if (msg.role === 'user') {
            const content = [];

            if (msg.image) {
                content.push({
                    type: 'image',
                    source: {
                        type: 'base64',
                        media_type: msg.image.mediaType,
                        data: msg.image.base64
                    }
                });
            }

            if (msg.text) {
                content.push({ type: 'text', text: msg.text });
            }

            apiMessages.push({ role: 'user', content });
        } else if (msg.role === 'assistant' && msg.text) {
            apiMessages.push({ role: 'assistant', content: msg.text });
        }
    }

    const body = {
        model: model,
        max_tokens: 4096,
        system: skill.systemPrompt,
        messages: apiMessages
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error?.message || `API error: ${response.status}`;

        if (response.status === 0 || errorMsg.includes('CORS') || errorMsg.includes('fetch')) {
            throw new Error('CORS error: Set up a proxy URL in Settings. The Anthropic API requires a CORS proxy for browser access.');
        }

        throw new Error(errorMsg);
    }

    const data = await response.json();
    const textBlock = data.content?.find(c => c.type === 'text');
    return textBlock?.text || 'No response generated.';
}

// ===== Image Upload =====
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
        showToast('Image must be under 20MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const base64Full = reader.result;
        const mediaType = file.type;
        const base64 = base64Full.split(',')[1];

        pendingImage = { base64, mediaType };
        previewImg.src = base64Full;
        imagePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
    imageInput.value = '';
});

removeImageBtn.addEventListener('click', clearImage);

function clearImage() {
    pendingImage = null;
    imagePreview.classList.add('hidden');
    previewImg.src = '';
}

// ===== Input Handling =====
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

userInput.addEventListener('input', () => {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 150) + 'px';
});

sendBtn.addEventListener('click', sendMessage);

clearChatBtn.addEventListener('click', () => {
    if (currentSkillId) {
        conversations[currentSkillId] = [];
        renderMessages();
    }
});

// ===== Model Select =====
modelSelect.addEventListener('change', () => {
    updateModelLabel(modelSelect.value);
});

// ===== Mobile Sidebar =====
mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        e.target !== mobileToggle) {
        sidebar.classList.remove('open');
    }
});

// ===== Utilities =====
function scrollToBottom() {
    requestAnimationFrame(() => {
        chatArea.scrollTop = chatArea.scrollHeight;
    });
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Simple markdown to HTML converter
function markdownToHtml(md) {
    if (!md) return '';

    let html = escapeHtml(md);

    // Code blocks (```)
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
        return `<pre><code>${code.trim()}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

    // Unordered lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // Line breaks -> paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraph if not already wrapped
    if (!html.startsWith('<')) {
        html = '<p>' + html + '</p>';
    }

    return html;
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    renderSkillList();
    loadSettings();
});
