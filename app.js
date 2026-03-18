// ===== Skills Configuration =====
const skills = [
    {
        id: 'creative-director',
        name: 'Creative Director',
        icon: '\uD83C\uDFAC',
        description: 'Senior creative strategist — reviews briefs, provides creative direction, and feedback on campaigns',
        systemPrompt: `You are a world-class Creative Director. You think like the best minds at top agencies — sharp strategic instincts, deep cultural awareness, and an eye for what makes creative work genuinely great.

When someone shares a brief, design, or idea with you:
- Give honest, expert-level creative direction — not generic praise
- Identify what's working and what isn't, with clear reasoning
- Suggest specific improvements they can act on immediately
- Think about the audience, the cultural moment, and what will actually cut through
- If they share an image, analyze it with a trained eye: composition, color, typography, messaging, emotional impact

Be direct. Be insightful. Be the creative partner everyone wishes they had. Write naturally — no rigid templates or numbered checklists unless the situation calls for it.`,
        placeholder: 'Share your brief, design, or campaign idea...'
    },
    {
        id: 'google-nano-banana-2',
        name: 'Google Nano Banana 2',
        icon: '\uD83C\uDF4C',
        description: 'Generates optimized image prompts for Google Nano & Banana image generation models',
        systemPrompt: `You are an expert at crafting prompts for Google's image generation models (Nano, Banana, Imagen). You deeply understand how these models interpret language and what produces the best results.

When someone describes what they want:
- Write 2-3 ready-to-use prompt variations, each with a different creative angle
- Use vivid, specific descriptive language — not vague adjectives
- Include the right technical quality tokens naturally (not just a list of keywords)
- Provide negative prompts when helpful
- Suggest settings if relevant (aspect ratio, style, etc.)

Write prompts they can copy-paste directly. Explain your creative choices briefly so they learn what works and why.`,
        placeholder: 'Describe the image you want to generate, or upload a reference...'
    },
    {
        id: 'freepik-cinema-studio',
        name: 'Freepik Cinema Studio',
        icon: '\uD83C\uDF9E\uFE0F',
        description: 'Creates cinematic visual concepts and prompts for Freepik AI image generation',
        systemPrompt: `You are a cinematic visual artist who creates stunning, commercial-grade imagery. You think in terms of light, mood, and story — every image should feel like a frame from a beautifully shot film.

When someone needs a visual:
- Develop the concept with atmosphere and emotion first, then translate it into precise Freepik-optimized prompts
- Specify lighting, color grade, lens choice, and depth of field like a real cinematographer would
- Offer 2-3 variations with different moods or angles
- Focus on commercial viability — these need to look professional and polished

Write naturally. Describe the vision, then give them the prompts they can use directly.`,
        placeholder: 'Describe the cinematic visual you need, or upload a reference...'
    },
    {
        id: 'nano-banana-prompt-generator',
        name: 'Nano Banana Prompt Generator',
        icon: '\u2728',
        description: 'Specialized prompt engineer for Nano Banana AI models — crafts perfect generation prompts',
        systemPrompt: `You are a master prompt engineer for the Nano Banana AI image generation ecosystem. You know exactly how these models respond to different prompt structures, emphasis techniques, and quality tokens.

Your approach:
- Understand the creative vision first, then engineer the perfect prompt
- Use token weighting and emphasis where it matters
- Structure prompts optimally: subject, environment, style, quality, technical specs
- Provide a primary prompt plus variations for A/B testing
- Include negative prompts and recommended model settings

Give them ready-to-paste prompts with brief notes on why each choice works. Be practical, not academic.`,
        placeholder: 'What image do you want to create? Describe style, subject, mood...'
    },
    {
        id: 'higgsfield-cinema-studio',
        name: 'Higgsfield Cinema Studio',
        icon: '\uD83C\uDFA5',
        description: 'Creates cinematic video concepts and prompts for Higgsfield AI video generation',
        systemPrompt: `You are a cinematic video director and AI motion specialist. You think in shots, sequences, and movement — creating compelling video content that tells a story through motion.

When someone needs video content:
- Think shot-by-shot: camera movement, subject action, atmosphere shifts
- Write Higgsfield-optimized prompts with clear motion directives
- Specify camera work like a real director: dolly, crane, steadicam, drone
- Include pacing, transition style, and duration recommendations
- Suggest complementary audio mood

Write like a director giving a shot list — clear, visual, and actionable. Each prompt should be ready to use.`,
        placeholder: 'Describe the video scene or motion concept you need...'
    },
    {
        id: 'pinterest-trend-intel',
        name: 'Pinterest Trend Intel',
        icon: '\uD83D\uDCCC',
        description: 'Analyzes Pinterest trends and provides data-driven creative intelligence for content strategy',
        systemPrompt: `You are a Pinterest trend analyst and content strategist. You understand what performs on the platform — the aesthetics, the keywords, the timing, and the psychology behind viral pins.

When someone asks about a niche or topic:
- Share current trend insights with real strategic value
- Suggest specific content ideas they can create today
- Recommend keywords, titles, and descriptions optimized for Pinterest search
- If they share an image, analyze how well it aligns with current trends
- Think about seasonal timing and content longevity

Be specific and actionable. They should walk away knowing exactly what to create and why it will work.`,
        placeholder: 'Enter a niche, topic, or upload a reference image for trend analysis...'
    },
    {
        id: 'static-ai-designer',
        name: 'Static AI Designer',
        icon: '\uD83C\uDFA8',
        description: 'Designs static graphics — social posts, banners, thumbnails, and UI elements with AI',
        systemPrompt: `You are a senior graphic designer who creates production-ready digital assets. You know platform specs, design principles, and what actually performs across social media, web, and print.

When someone needs a design:
- Start with the concept and layout — what makes this design work visually
- Provide exact specs: dimensions, colors (HEX), typography choices, spacing
- Generate AI prompts to create the visual elements
- Suggest A/B variations with reasoning
- Consider accessibility: contrast, readability, mobile rendering

Be the designer who delivers work that's ready for production, not just a concept deck. Practical specs they can use immediately.`,
        placeholder: 'Describe the design you need — type, platform, brand colors, style...'
    }
];

// ===== Constants =====
const MAX_FILES = 20;
const MAX_IMAGE_BYTES = 4.5 * 1024 * 1024; // 4.5MB (API limit is 5MB)
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB per file before compression
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const PDF_TYPE = 'application/pdf';

// ===== State =====
let currentSkillId = null;
let conversations = {}; // skillId -> [{role, content}]
let pendingFiles = []; // [{base64, mediaType, fileName, fileType: 'image'|'document'}]
let isGenerating = false;

// ===== DOM Elements =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const settingsOverlay = $('#settingsOverlay');
const settingsClose = $('#settingsClose');
const apiKeyInput = $('#apiKeyInput');
const openaiKeyInput = $('#openaiKeyInput');
const defaultModelSelect = $('#defaultModelSelect');
const saveSettingsBtn = $('#saveSettings');
const toggleKeyVis = $('#toggleKeyVis');
const toggleOpenaiKeyVis = $('#toggleOpenaiKeyVis');

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
const fileInput = $('#fileInput');
const filesPreview = $('#filesPreview');
const filesPreviewList = $('#filesPreviewList');
const clearAllFiles = $('#clearAllFiles');
const mobileToggle = $('#mobileToggle');
const sidebar = $('#sidebar');
const toast = $('#toast');
const toastMessage = $('#toastMessage');
const currentModelLabel = $('#currentModelLabel');
const openSettingsBtn = $('#openSettingsBtn');

// ===== Image Compression =====
function compressImage(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);

        img.onload = () => {
            URL.revokeObjectURL(url);

            // First check original size
            const reader = new FileReader();
            reader.onload = () => {
                const originalBase64 = reader.result.split(',')[1];
                const originalBytes = atob(originalBase64).length;

                if (originalBytes <= MAX_IMAGE_BYTES && IMAGE_TYPES.includes(file.type)) {
                    resolve({
                        base64: originalBase64,
                        mediaType: file.type,
                        fileName: file.name,
                        fileType: 'image',
                        previewUrl: reader.result,
                        size: originalBytes
                    });
                    return;
                }

                // Compress with canvas
                const canvas = document.createElement('canvas');
                let width = img.naturalWidth;
                let height = img.naturalHeight;

                // Scale down if very large
                const maxDim = 2048;
                if (width > maxDim || height > maxDim) {
                    const scale = maxDim / Math.max(width, height);
                    width = Math.round(width * scale);
                    height = Math.round(height * scale);
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Try progressively lower quality
                for (let quality = 0.85; quality >= 0.1; quality -= 0.1) {
                    const result = canvas.toDataURL('image/jpeg', quality);
                    const b64 = result.split(',')[1];
                    const bytes = atob(b64).length;
                    if (bytes <= MAX_IMAGE_BYTES) {
                        resolve({
                            base64: b64,
                            mediaType: 'image/jpeg',
                            fileName: file.name,
                            fileType: 'image',
                            previewUrl: result,
                            size: bytes
                        });
                        return;
                    }
                }

                // Still too large — scale down more
                canvas.width = Math.round(width * 0.5);
                canvas.height = Math.round(height * 0.5);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const result = canvas.toDataURL('image/jpeg', 0.7);
                const b64 = result.split(',')[1];
                resolve({
                    base64: b64,
                    mediaType: 'image/jpeg',
                    fileName: file.name,
                    fileType: 'image',
                    previewUrl: result,
                    size: atob(b64).length
                });
            };
            reader.readAsDataURL(file);
        };

        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to load image: ' + file.name));
        };

        img.src = url;
    });
}

// ===== File Processing =====
function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = () => reject(new Error('Failed to read: ' + file.name));
        reader.readAsDataURL(file);
    });
}

function getFileExtension(name) {
    return name.split('.').pop().toLowerCase();
}

function getDocMediaType(file) {
    const ext = getFileExtension(file.name);
    const map = {
        'pdf': 'application/pdf',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'txt': 'text/plain',
        'csv': 'text/csv',
        'rtf': 'application/rtf',
        'md': 'text/markdown'
    };
    return map[ext] || file.type || 'application/octet-stream';
}

function isImageFile(file) {
    return IMAGE_TYPES.includes(file.type) || /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name);
}

function isPdfFile(file) {
    return file.type === PDF_TYPE || /\.pdf$/i.test(file.name);
}

async function processFile(file) {
    if (file.size > MAX_FILE_SIZE) {
        throw new Error(`${file.name} exceeds 50MB limit`);
    }

    if (isImageFile(file)) {
        return await compressImage(file);
    }

    // Documents (PDF, DOC, TXT, etc.)
    const base64 = await readFileAsBase64(file);
    const mediaType = getDocMediaType(file);
    const ext = getFileExtension(file.name);

    return {
        base64,
        mediaType,
        fileName: file.name,
        fileType: isPdfFile(file) ? 'document' : 'document',
        size: atob(base64).length,
        ext: ext
    };
}

// ===== File Preview UI =====
function renderFilePreviews() {
    if (pendingFiles.length === 0) {
        filesPreview.classList.add('hidden');
        return;
    }

    filesPreview.classList.remove('hidden');
    filesPreviewList.innerHTML = pendingFiles.map((f, i) => {
        const sizeStr = formatSize(f.size);
        if (f.fileType === 'image' && f.previewUrl) {
            return `<div class="file-preview-item" title="${escapeHtml(f.fileName)} (${sizeStr})">
                <img src="${f.previewUrl}" alt="${escapeHtml(f.fileName)}" />
                <span class="file-preview-name">${escapeHtml(f.fileName)}</span>
                <button class="file-preview-remove" data-idx="${i}">&times;</button>
            </div>`;
        } else {
            const ext = f.ext || getFileExtension(f.fileName);
            return `<div class="file-preview-item" title="${escapeHtml(f.fileName)} (${sizeStr})">
                <div class="file-icon">${ext}</div>
                <span class="file-preview-name">${escapeHtml(f.fileName)}</span>
                <button class="file-preview-remove" data-idx="${i}">&times;</button>
            </div>`;
        }
    }).join('') + `<div class="file-count-badge">${pendingFiles.length}/${MAX_FILES}</div>`;

    // Bind remove buttons
    filesPreviewList.querySelectorAll('.file-preview-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(btn.dataset.idx);
            pendingFiles.splice(idx, 1);
            renderFilePreviews();
        });
    });
}

function formatSize(bytes) {
    if (bytes > 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
    return Math.round(bytes / 1024) + 'KB';
}

// ===== Provider Detection =====
function isOpenAIModel(model) {
    return model.startsWith('gpt-') || model.startsWith('o3') || model.startsWith('o4') || model.startsWith('o1');
}

function isClaudeModel(model) {
    return model.startsWith('claude-');
}

function getProviderForModel(model) {
    return isOpenAIModel(model) ? 'openai' : 'anthropic';
}

// ===== Settings Management =====
function loadSettings() {
    const key = localStorage.getItem('anthropic_api_key') || '';
    const openaiKey = localStorage.getItem('openai_api_key') || '';
    const model = localStorage.getItem('default_model') || 'claude-sonnet-4-6';

    apiKeyInput.value = key;
    openaiKeyInput.value = openaiKey;
    defaultModelSelect.value = model;
    modelSelect.value = model;
    updateModelLabel(model);
}

function saveSettings() {
    const key = apiKeyInput.value.trim();
    const openaiKey = openaiKeyInput.value.trim();
    const model = defaultModelSelect.value;

    if (!key && !openaiKey) {
        showToast('Please enter at least one API key');
        apiKeyInput.focus();
        return;
    }

    if (key) localStorage.setItem('anthropic_api_key', key);
    if (openaiKey) localStorage.setItem('openai_api_key', openaiKey);
    localStorage.setItem('default_model', model);

    modelSelect.value = model;
    updateModelLabel(model);

    closeSettings();
    showToast('Settings saved!');
}

function updateModelLabel(model) {
    const labels = {
        'claude-sonnet-4-6': 'Sonnet 4.6',
        'claude-haiku-4-5-20251001': 'Haiku 4.5',
        'claude-opus-4-6': 'Opus 4.6',
        'gpt-4o': 'GPT-4o',
        'gpt-4o-mini': 'GPT-4o Mini',
        'gpt-4.1': 'GPT-4.1',
        'o3': 'o3',
        'o4-mini': 'o4-mini'
    };
    const provider = isOpenAIModel(model) ? 'GPT' : 'Claude';
    currentModelLabel.textContent = labels[model] || model;
    // Update dot color based on provider
    const dot = document.querySelector('.model-dot');
    if (dot) {
        dot.style.background = isOpenAIModel(model) ? '#10a37f' : 'var(--success)';
    }
}

function openSettings() {
    loadSettings();
    settingsOverlay.classList.add('active');
}

function closeSettings() {
    settingsOverlay.classList.remove('active');
}

openSettingsBtn.addEventListener('click', openSettings);
settingsClose.addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', (e) => {
    if (e.target === settingsOverlay) closeSettings();
});
saveSettingsBtn.addEventListener('click', saveSettings);

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        openSettings();
    }
});

toggleKeyVis.addEventListener('click', () => {
    const isPassword = apiKeyInput.type === 'password';
    apiKeyInput.type = isPassword ? 'text' : 'password';
    toggleKeyVis.textContent = isPassword ? 'Hide' : 'Show';
});

toggleOpenaiKeyVis.addEventListener('click', () => {
    const isPassword = openaiKeyInput.type === 'password';
    openaiKeyInput.type = isPassword ? 'text' : 'password';
    toggleOpenaiKeyVis.textContent = isPassword ? 'Hide' : 'Show';
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

    const hasAnyKey = localStorage.getItem('anthropic_api_key') || localStorage.getItem('openai_api_key');
    if (!hasAnyKey) {
        openSettings();
        showToast('Please enter an API key first');
        return;
    }

    currentSkillId = skillId;

    $$('.skill-item').forEach(item => {
        item.classList.toggle('active', item.dataset.skill === skillId);
    });

    wsSkillIcon.textContent = skill.icon;
    wsSkillName.textContent = skill.name;
    wsSkillDesc.textContent = skill.description;
    userInput.placeholder = skill.placeholder;

    welcomeScreen.classList.add('hidden');
    skillWorkspace.classList.remove('hidden');

    if (!conversations[skillId]) {
        conversations[skillId] = [];
    }

    renderMessages();
    sidebar.classList.remove('open');
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
                    <div class="msg-role">Claude</div>
                    <div class="msg-content">
                        <p><strong>${skill.name}</strong> is ready. ${skill.description}.</p>
                        <p>Type your message below or upload files to get started.</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        chatMessages.innerHTML = msgs.map(msg => {
            if (msg.role === 'user') return renderUserMessage(msg);
            if (msg.role === 'assistant') return renderAssistantMessage(msg);
            return '';
        }).join('');
    }

    scrollToBottom();
}

function renderUserMessage(msg) {
    let filesHtml = '';
    if (msg.files && msg.files.length > 0) {
        filesHtml = '<div class="msg-files">' + msg.files.map(f => {
            if (f.fileType === 'image' && f.previewUrl) {
                return `<img class="msg-image" src="${f.previewUrl}" alt="${escapeHtml(f.fileName)}" />`;
            } else {
                const ext = f.ext || getFileExtension(f.fileName);
                return `<span class="msg-file-badge">${ext.toUpperCase()}: ${escapeHtml(f.fileName)}</span>`;
            }
        }).join('') + '</div>';
    }

    return `
        <div class="chat-msg">
            <div class="msg-avatar user">You</div>
            <div class="msg-body">
                <div class="msg-role">You</div>
                <div class="msg-content">
                    ${filesHtml}
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

    const model = modelSelect.value;
    const providerLabel = isOpenAIModel(model) ? 'GPT' : 'Claude';
    const avatarClass = isOpenAIModel(model) ? 'assistant openai' : 'assistant';

    return `
        <div class="chat-msg">
            <div class="msg-avatar ${avatarClass}">AI</div>
            <div class="msg-body">
                <div class="msg-role">${providerLabel}</div>
                ${contentHtml}
            </div>
        </div>
    `;
}

// ===== Send Message =====
async function sendMessage() {
    if (isGenerating) return;

    const text = userInput.value.trim();
    if (!text && pendingFiles.length === 0) return;

    const model = modelSelect.value;
    const provider = getProviderForModel(model);

    // Check for the right API key
    const apiKey = provider === 'openai'
        ? localStorage.getItem('openai_api_key')
        : localStorage.getItem('anthropic_api_key');

    if (!apiKey) {
        openSettings();
        showToast(`Please enter your ${provider === 'openai' ? 'OpenAI' : 'Anthropic'} API key`);
        return;
    }

    const skill = skills.find(s => s.id === currentSkillId);
    if (!skill) return;

    // Add user message with files
    const userMsg = {
        role: 'user',
        text: text || (pendingFiles.length > 0 ? `(${pendingFiles.length} file${pendingFiles.length > 1 ? 's' : ''} uploaded)` : ''),
        files: [...pendingFiles]
    };
    conversations[currentSkillId].push(userMsg);

    // Clear input
    userInput.value = '';
    userInput.style.height = 'auto';
    pendingFiles = [];
    renderFilePreviews();

    // Add loading
    conversations[currentSkillId].push({ role: 'assistant', loading: true });
    renderMessages();

    isGenerating = true;
    sendBtn.disabled = true;

    try {
        let response;
        if (provider === 'openai') {
            response = await callOpenAIAPI(apiKey, model, skill, conversations[currentSkillId].slice(0, -1));
        } else {
            response = await callClaudeAPI(apiKey, model, skill, conversations[currentSkillId].slice(0, -1));
        }

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
    const url = 'https://api.anthropic.com/v1/messages';

    const apiMessages = [];

    for (const msg of messages) {
        if (msg.role === 'user') {
            const content = [];

            // Add files
            if (msg.files) {
                for (const f of msg.files) {
                    if (f.fileType === 'image') {
                        content.push({
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: f.mediaType,
                                data: f.base64
                            }
                        });
                    } else {
                        // Documents (PDF, etc.) — use document type for PDF, plain text for others
                        if (f.mediaType === 'application/pdf') {
                            content.push({
                                type: 'document',
                                source: {
                                    type: 'base64',
                                    media_type: 'application/pdf',
                                    data: f.base64
                                }
                            });
                        } else if (f.mediaType.startsWith('text/') || ['text/plain', 'text/csv', 'text/markdown'].includes(f.mediaType)) {
                            // Text files — decode and send as text
                            try {
                                const decoded = atob(f.base64);
                                content.push({
                                    type: 'text',
                                    text: `[File: ${f.fileName}]\n${decoded}`
                                });
                            } catch {
                                content.push({
                                    type: 'text',
                                    text: `[File: ${f.fileName}] (binary file — could not decode as text)`
                                });
                            }
                        } else {
                            // Other docs — try to send as document type
                            content.push({
                                type: 'document',
                                source: {
                                    type: 'base64',
                                    media_type: f.mediaType,
                                    data: f.base64
                                }
                            });
                        }
                    }
                }
            }

            // Legacy single image support
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

            if (content.length > 0) {
                apiMessages.push({ role: 'user', content });
            }
        } else if (msg.role === 'assistant' && msg.text) {
            apiMessages.push({ role: 'assistant', content: msg.text });
        }
    }

    const body = {
        model: model,
        max_tokens: 8192,
        system: skill.systemPrompt,
        messages: apiMessages
    };

    // Enable PDF support
    if (messages.some(m => m.files?.some(f => f.mediaType === 'application/pdf'))) {
        body.betas = ['pdfs-2024-09-25'];
    }

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

        if (response.status === 401) {
            throw new Error('Invalid API key. Check Settings (Ctrl+Shift+K).');
        }
        if (response.status === 429) {
            throw new Error('Rate limited. Wait a moment and try again.');
        }
        if (response.status === 400) {
            throw new Error('Bad request: ' + errorMsg);
        }

        throw new Error(errorMsg);
    }

    const data = await response.json();
    const textBlock = data.content?.find(c => c.type === 'text');
    return textBlock?.text || 'No response generated.';
}

// ===== OpenAI API Call =====
async function callOpenAIAPI(apiKey, model, skill, messages) {
    const url = 'https://api.openai.com/v1/chat/completions';

    const isReasoningModel = /^(o1|o3|o4)/.test(model);

    // Build messages array for OpenAI format
    const apiMessages = [];

    // System message (reasoning models use developer role)
    if (isReasoningModel) {
        apiMessages.push({ role: 'developer', content: skill.systemPrompt });
    } else {
        apiMessages.push({ role: 'system', content: skill.systemPrompt });
    }

    for (const msg of messages) {
        if (msg.role === 'user') {
            const content = [];

            // Add files
            if (msg.files) {
                for (const f of msg.files) {
                    if (f.fileType === 'image') {
                        content.push({
                            type: 'image_url',
                            image_url: {
                                url: `data:${f.mediaType};base64,${f.base64}`,
                                detail: 'high'
                            }
                        });
                    } else if (f.mediaType.startsWith('text/') || ['text/plain', 'text/csv', 'text/markdown'].includes(f.mediaType)) {
                        try {
                            const decoded = atob(f.base64);
                            content.push({
                                type: 'text',
                                text: `[File: ${f.fileName}]\n${decoded}`
                            });
                        } catch {
                            content.push({
                                type: 'text',
                                text: `[File: ${f.fileName}] (could not decode)`
                            });
                        }
                    } else if (f.mediaType === 'application/pdf') {
                        content.push({
                            type: 'file',
                            file: {
                                filename: f.fileName,
                                file_data: `data:application/pdf;base64,${f.base64}`
                            }
                        });
                    } else {
                        content.push({
                            type: 'text',
                            text: `[File: ${f.fileName}] (${f.mediaType} — binary file attached)`
                        });
                    }
                }
            }

            // Legacy single image
            if (msg.image) {
                content.push({
                    type: 'image_url',
                    image_url: {
                        url: `data:${msg.image.mediaType};base64,${msg.image.base64}`,
                        detail: 'high'
                    }
                });
            }

            if (msg.text) {
                content.push({ type: 'text', text: msg.text });
            }

            // If only text, simplify to string
            if (content.length === 1 && content[0].type === 'text') {
                apiMessages.push({ role: 'user', content: content[0].text });
            } else if (content.length > 0) {
                apiMessages.push({ role: 'user', content });
            }
        } else if (msg.role === 'assistant' && msg.text) {
            apiMessages.push({ role: 'assistant', content: msg.text });
        }
    }

    const body = {
        model: model,
        messages: apiMessages
    };

    // Reasoning models: use reasoning_effort instead of max_tokens
    if (isReasoningModel) {
        body.reasoning_effort = 'high';
        body.max_completion_tokens = 16384;
    } else {
        body.max_tokens = 8192;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error?.message || `OpenAI API error: ${response.status}`;

        if (response.status === 401) {
            throw new Error('Invalid OpenAI API key. Check Settings (Ctrl+Shift+K).');
        }
        if (response.status === 429) {
            throw new Error('OpenAI rate limited. Wait a moment and try again.');
        }
        if (response.status === 400) {
            throw new Error('Bad request: ' + errorMsg);
        }

        throw new Error(errorMsg);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'No response generated.';
}

// ===== File Upload Handler =====
fileInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const remaining = MAX_FILES - pendingFiles.length;
    if (remaining <= 0) {
        showToast(`Maximum ${MAX_FILES} files reached`);
        fileInput.value = '';
        return;
    }

    const toProcess = files.slice(0, remaining);
    if (files.length > remaining) {
        showToast(`Only adding ${remaining} files (max ${MAX_FILES})`);
    }

    showToast(`Processing ${toProcess.length} file${toProcess.length > 1 ? 's' : ''}...`);

    let processed = 0;
    let errors = [];

    for (const file of toProcess) {
        try {
            const result = await processFile(file);
            pendingFiles.push(result);
            processed++;
        } catch (err) {
            errors.push(err.message);
        }
    }

    renderFilePreviews();
    fileInput.value = '';

    if (errors.length > 0) {
        showToast(`${processed} added, ${errors.length} failed: ${errors[0]}`);
    } else {
        showToast(`${processed} file${processed > 1 ? 's' : ''} ready`);
    }
});

clearAllFiles.addEventListener('click', () => {
    pendingFiles = [];
    renderFilePreviews();
});

// ===== Drag & Drop =====
const mainContent = $('#mainContent');

mainContent.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mainContent.classList.add('drag-over');
});

mainContent.addEventListener('dragleave', (e) => {
    e.preventDefault();
    mainContent.classList.remove('drag-over');
});

mainContent.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    mainContent.classList.remove('drag-over');

    if (!currentSkillId) {
        showToast('Select a skill first');
        return;
    }

    const files = Array.from(e.dataTransfer.files);
    if (!files.length) return;

    const remaining = MAX_FILES - pendingFiles.length;
    if (remaining <= 0) {
        showToast(`Maximum ${MAX_FILES} files reached`);
        return;
    }

    const toProcess = files.slice(0, remaining);
    showToast(`Processing ${toProcess.length} file${toProcess.length > 1 ? 's' : ''}...`);

    let processed = 0;
    for (const file of toProcess) {
        try {
            const result = await processFile(file);
            pendingFiles.push(result);
            processed++;
        } catch (err) {
            showToast('Error: ' + err.message);
        }
    }

    renderFilePreviews();
    if (processed > 0) {
        showToast(`${processed} file${processed > 1 ? 's' : ''} ready`);
    }
});

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

modelSelect.addEventListener('change', () => {
    updateModelLabel(modelSelect.value);
});

// ===== Mobile Sidebar =====
mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

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

function markdownToHtml(md) {
    if (!md) return '';

    let html = escapeHtml(md);

    // Code blocks
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

    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    if (!html.startsWith('<')) {
        html = '<p>' + html + '</p>';
    }

    return html;
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    renderSkillList();
    loadSettings();

    if (!localStorage.getItem('anthropic_api_key') && !localStorage.getItem('openai_api_key')) {
        setTimeout(openSettings, 500);
    }
});
