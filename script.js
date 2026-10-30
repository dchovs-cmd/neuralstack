/* ── CONFIG: edit these before going live ─────────────────────────────── */
const CONFIG = {
  channelName: 'NeuralStack',
  channelUrl: 'https://www.youtube.com/@NeuralstackAIwth', // ← your channel URL
  formEndpoint: '', // ← e.g. 'https://formspree.io/f/xxxxxxx' (free, no backend)

  // Local Shorts — add YouTube `id` after uploading to show a "Watch on YouTube" link
  videos: [
    { file: '10-this-channel', id: '-AeJPHB8Pj8', title: 'Everything about this video was made by AI', meta: 'Short' },
    { file: '03-five-free-tools', id: 'gnfMYgSuaHM', title: '5 free AI tools that feel illegal to know about', meta: 'Short' },
    { file: '12-notebooklm', id: 'JkaLKIjnRE4', title: 'Google\'s AI reads PDFs so you don\'t have to', meta: 'Short' },
    { file: '14-transcription', id: 'Wh02k5YLmSQ', title: 'Never take notes again', meta: 'Short' },
    { file: '01-voice-is-ai', id: 'kUQkIuUh4-k', title: 'This voice isn\'t human 🤖', meta: 'Short' },
    { file: '08-vidiq', id: 'CDflLcJQIs8', title: 'Big channels don\'t guess topics — they spy', meta: 'Short' },
    { file: '18-tts-showdown', id: 'nYGz3hXSkYU', title: 'Which AI voice wins? One is free', meta: 'Short' },
    { file: '21-gpt-vs-claude', id: 'fYK7vVFBSUE', title: 'ChatGPT vs Claude — one clearly wins', meta: 'Short' },
    { file: '22-secret-ai-sites', id: 'k7bCZHUZRMQ', title: '7 AI websites that feel illegal to know', meta: 'Short' },
    { file: '23-gemini-beats', id: 'k2uvK7NUTDo', title: 'Gemini quietly beat ChatGPT here', meta: 'Short' },
    { file: '24-weird-prompts', id: 'M1BGcONApU0', title: 'I gave AI the weirdest prompts possible', meta: 'Short' },
    { file: '25-ai-kills-job', id: 'cxF_QpegR-A', title: 'This AI just replaced a $50/hr job', meta: 'Short' },
    { file: '26-free-beats-paid', id: '1yoXQoK7zzI', title: 'Free AI beat the $20/month plan', meta: 'Short' },
    { file: '27-hidden-ai', id: 'XiEzTk2Giz0', title: 'The AI tool nobody has discovered yet', meta: 'Short' },
    { file: '28-prompt-to-video', id: 'TsHhb4QkHIM', title: 'One prompt made this entire video', meta: 'Short' },
    { file: '29-ai-money', id: 'U2jDc8cvG5k', title: 'AI makes money while you sleep', meta: 'Short' },
    { file: '30-ai-update', id: 'KstRW7LHIv0', title: 'The AI update nobody is talking about', meta: 'Short' },
    { file: '02-pictory', id: 'xFQv_IUhEQs', title: 'AI edited this video faster than I could open Premiere', meta: 'Short' },
    { file: '04-chatgpt-scripts', id: '24YrA0eycLk', title: 'One prompt writes better scripts than most YouTubers', meta: 'Short' },
    { file: '05-thumbnails', id: 'BX78MpobciU', title: 'Your thumbnail is why nobody clicked — AI fixes it in 30s', meta: 'Short' },
    { file: '06-video-ai', id: 'DB0RF7JE6KM', title: 'I typed one sentence and got real footage', meta: 'Short' },
    { file: '07-automate-week', id: 'NC0sYbs1iiQ', title: '3 AI tools that gave me back 10 hours a week', meta: 'Short' },
    { file: '09-faceless-channel', id: 'R-90ZNfD6ek', title: 'This channel has no human on camera — on purpose', meta: 'Short' },
    { file: '11-ai-music', id: 'K4hjjEPFwxg', title: 'AI made this song in 90 seconds 🎵', meta: 'Short' },
    { file: '13-ai-headshots', id: 'yypmYZF6ymc', title: 'AI headshots replace $300 photos', meta: 'Short' },
    { file: '15-spreadsheets', id: 'FWEnU-DYl5E', title: 'AI writes Excel formulas for you', meta: 'Short' },
    { file: '16-browser-extensions', id: 'Uv7ZX_LRnZ0', title: 'AI lives in your browser now (free)', meta: 'Short' },
    { file: '17-ai-logos', id: 'JpzlOrPrh4w', title: 'AI designed this logo in 20 seconds', meta: 'Short' },
    { file: '19-ai-tutor', id: 'zAmeWKR-ZIo', title: 'The best tutor in the world costs $0', meta: 'Short' },
    { file: '20-ai-resume', id: '4l9pHFf-2p0', title: 'AI tailors your resume per job posting', meta: 'Short' },
  ],

  // Swap href for YOUR affiliate links after signing up for each program
  tools: [
    { icon: '🎙️', name: 'ElevenLabs', desc: 'AI voiceovers for every video — sounds human, costs minutes.', cta: 'Try it', href: 'https://elevenlabs.io' },
    { icon: '🎬', name: 'Pictory', desc: 'Turn scripts into faceless videos with stock footage in one click.', cta: 'Try it', href: 'https://pictory.ai' },
    { icon: '🖼️', name: 'Canva Pro', desc: 'Thumbnails that get clicked. Templates + AI background remover.', cta: 'Try it', href: 'https://www.canva.com' },
    { icon: '📊', name: 'vidIQ', desc: 'Keyword research + competitor tracking to pick winning topics.', cta: 'Try it', href: 'https://vidiq.com' },
    { icon: '✍️', name: 'ChatGPT Plus', desc: 'Script drafts, hooks, and title variations in seconds.', cta: 'Try it', href: 'https://chatgpt.com' },
    { icon: '🔍', name: 'TubeBuddy', desc: 'A/B test thumbnails and optimize tags for search.', cta: 'Try it', href: 'https://www.tubebuddy.com' },
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
