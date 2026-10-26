/* ── CONFIG: edit these before going live ─────────────────────────────── */
const CONFIG = {
  channelName: 'NeuralStack',
  channelUrl: 'https://www.youtube.com/@NeuralstackAIwth', // ← your channel URL
  formEndpoint: '', // ← e.g. 'https://formspree.io/f/xxxxxxx' (free, no backend)

  // Local Shorts — add YouTube `id` after uploading to show a "Watch on YouTube" link
  videos: [
    { file: '10-this-channel', id: '', title: 'Everything about this video was made by AI', meta: 'Short' },
    { file: '01-voice-is-ai', id: '', title: 'This voice isn\'t human', meta: 'Short' },
    { file: '02-pictory', id: '', title: 'AI edited this faster than I could open Premiere', meta: 'Short' },
    { file: '03-five-free-tools', id: '', title: '5 free AI tools that feel illegal to know', meta: 'Short' },
    { file: '04-chatgpt-scripts', id: '', title: 'One prompt writes better scripts than YouTubers', meta: 'Short' },
    { file: '05-thumbnails', id: '', title: 'AI thumbnails in 30 seconds', meta: 'Short' },
    { file: '06-video-ai', id: '', title: 'I typed a sentence and got real footage', meta: 'Short' },
    { file: '07-automate-week', id: '', title: '3 AI tools, 10 hours back per week', meta: 'Short' },
    { file: '08-vidiq', id: '', title: 'Big channels don\'t guess — they spy', meta: 'Short' },
    { file: '09-faceless-channel', id: '', title: 'No face on this channel — on purpose', meta: 'Short' },
    { file: '11-ai-music', id: '', title: 'AI made this song in 90 seconds', meta: 'Short' },
    { file: '12-notebooklm', id: '', title: 'Google\'s AI reads PDFs for you', meta: 'Short' },
    { file: '13-ai-headshots', id: '', title: 'AI headshots replace $300 photos', meta: 'Short' },
    { file: '14-transcription', id: '', title: 'Never take notes again', meta: 'Short' },
    { file: '15-spreadsheets', id: '', title: 'AI writes Excel formulas for you', meta: 'Short' },
    { file: '16-browser-extensions', id: '', title: 'AI lives in your browser now', meta: 'Short' },
    { file: '17-ai-logos', id: '', title: 'AI designed this logo in 20 seconds', meta: 'Short' },
    { file: '18-tts-showdown', id: '', title: 'Which AI voice wins?', meta: 'Short' },
    { file: '19-ai-tutor', id: '', title: 'AI tutors never get impatient', meta: 'Short' },
    { file: '20-ai-resume', id: '', title: 'AI tailors your resume per job', meta: 'Short' },
  ],

  // Swap href for YOUR affiliate links after signing up for each program
  tools: [
    { icon: '🎙️', name: 'ElevenLabs', desc: 'AI voiceovers for every video — sounds human, costs minutes.', cta: 'Try it', href: '#' },
    { icon: '🎬', name: 'Pictory', desc: 'Turn scripts into faceless videos with stock footage in one click.', cta: 'Try it', href: '#' },
    { icon: '🖼️', name: 'Canva Pro', desc: 'Thumbnails that get clicked. Templates + AI background remover.', cta: 'Try it', href: '#' },
    { icon: '📊', name: 'vidIQ', desc: 'Keyword research + competitor tracking to pick winning topics.', cta: 'Try it', href: '#' },
    { icon: '✍️', name: 'ChatGPT Plus', desc: 'Script drafts, hooks, and title variations in seconds.', cta: 'Try it', href: '#' },
    { icon: '🔍', name: 'TubeBuddy', desc: 'A/B test thumbnails and optimize tags for search.', cta: 'Try it', href: '#' },
  ],
};
/* ─────────────────────────────────────────────────────────────────────── */

const $ = (s) => document.querySelector(s);

// Wire subscribe buttons
['#nav-subscribe', '#hero-subscribe'].forEach((sel) => {
  $(sel).href = CONFIG.channelUrl;
});

// Render videos — inline playback for local files, YouTube link once uploaded
const grid = $('#video-grid');
CONFIG.videos.forEach((v) => {
  const card = document.createElement('div');
  card.className = 'video-card';
  const yt = v.id
    ? `<a class="yt-link" href="https://youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Watch on YouTube ↗</a>`
    : '';
  card.innerHTML = `
    <div class="thumb"><video src="videos/${v.file}.mp4" poster="videos/posters/${v.file}.jpg"
      preload="none" playsinline controls></video></div>
    <div class="info"><h3>${v.title}</h3><span>${v.meta}</span>${yt}</div>`;
  grid.appendChild(card);
});

// Only one video plays at a time
document.addEventListener('play', (e) => {
  if (e.target.tagName !== 'VIDEO') return;
  document.querySelectorAll('video').forEach((v) => {
    if (v !== e.target) v.pause();
  });
}, true);

// Render affiliate tools
const toolsGrid = $('#tools-grid');
CONFIG.tools.forEach((t) => {
  const a = document.createElement('a');
  a.className = 'tool-card';
  a.href = t.href;
  a.target = '_blank';
  a.rel = 'noopener sponsored';
  a.innerHTML = `<span class="tool-icon">${t.icon}</span><h3>${t.name}</h3><p>${t.desc}</p><span class="tool-cta">${t.cta} →</span>`;
  toolsGrid.appendChild(a);
});

// Newsletter: send to Formspree if configured, else store locally
const KEY = 'ns_subscribers';
$('#newsletter-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = $('#email').value.trim();
  if (!email) return;

  if (CONFIG.formEndpoint) {
    try {
      await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      $('#form-msg').textContent = 'You\'re in! First brief lands Friday.';
    } catch {
      $('#form-msg').textContent = 'Something went wrong — try again.';
      return;
    }
  } else {
    const list = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (list.includes(email)) {
      $('#form-msg').textContent = 'You\'re already subscribed.';
      return;
    }
    list.push(email);
    localStorage.setItem(KEY, JSON.stringify(list));
    $('#form-msg').textContent = `You're in! (${list.length} subscriber${list.length > 1 ? 's' : ''} — stored locally; add a Formspree endpoint to go live.)`;
  }
  $('#email').value = '';
});

// Export locally-stored emails as CSV
$('#export-emails').addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem(KEY) || '[]');
  if (!list.length) {
    $('#form-msg').textContent = 'No subscribers stored yet.';
    return;
  }
  const blob = new Blob(['email\n' + list.join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'subscribers.csv';
  a.click();
});

// Simple goal progress (update manually as subs grow, or wire the YouTube API)
$('#stat-subs').textContent = '0 → 1K';
