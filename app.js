// Header Scroll Shadow Effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (header) {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }
});

// Mobile Hamburger Menu Trigger
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// FAQ Accordion Toggle Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (question && answer) {
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  }
});

// Live AI Console Simulator (Futuristic Robot Logs & Code lines)
const terminalLines = [
  { text: "⚡ neurautomation init --agent=medical_aesthetic", color: "#60a5fa" },
  { text: "🔧 Loading clinical NLP models (CFM Ethics Mode: ON)... OK", color: "#34d399" },
  { text: "🤖 Virtual assistant robot online. Listening to channels...", color: "#c084fc" },
  { text: "📥 [Instagram Direct] New lead inquiry received...", color: "#f87171" },
  { text: "💬 Patient: 'Olá! Gostaria de marcar um botox para sexta.'", color: "#ffffff" },
  { text: "🧠 AI Reasoning: Intent=[Booking] Procedure=[Botox] Confidence=99.8%", color: "#fbbf24" },
  { text: "⚙️ Querying clinical calendar slots via CRM API...", color: "#38bdf8" },
  { text: "📤 [WhatsApp API] Sending automated smart scheduling options...", color: "#34d399" },
  { text: "   └ 'Olá! Temos vagas para sexta às 10h ou às 14h. Qual prefere?'", color: "#94a3b8" },
  { text: "📥 [WhatsApp API] Patient response: 'Às 10h é perfeito!'", color: "#ffffff" },
  { text: "📅 [CRM Sync] Appointment booked. Slot Friday 10:00 AM: CONFIRMED.", color: "#34d399" },
  { text: "🔄 MAPPING: Scanning inactive patient database (> 90 days)...", color: "#fbbf24" },
  { text: "📤 Reengagement: 18 personalized checkups sent. 5 replies.", color: "#34d399" },
  { text: "📈 System status: 100% active. 0% manual work. You only consult.", color: "#60a5fa" }
];

let simTimeout = null;

function runTerminalSimulation() {
  const terminal = document.getElementById("console-terminal");
  if (!terminal) return;
  
  // Clear any existing timeouts to avoid parallel printing loops
  if (simTimeout) {
    clearTimeout(simTimeout);
  }

  terminal.innerHTML = "";
  let lineIdx = 0;
  
  function addLine() {
    if (lineIdx >= terminalLines.length) {
      // Restart log loop after delay
      simTimeout = setTimeout(() => {
        terminal.innerHTML = "";
        lineIdx = 0;
        addLine();
      }, 4500);
      return;
    }
    
    const lineData = terminalLines[lineIdx];
    const lineElement = document.createElement("div");
    lineElement.className = "terminal-line";
    lineElement.style.color = lineData.color;
    lineElement.textContent = lineData.text;
    
    terminal.appendChild(lineElement);
    terminal.scrollTop = terminal.scrollHeight;
    
    lineIdx++;
    // Simulate organic robot typing speed intervals
    simTimeout = setTimeout(addLine, Math.random() * 600 + 400);
  }
  
  addLine();
}

// Helper function for smooth scrolling with header offset
function smoothScrollTo(element) {
  if (!element) return;
  const offset = 80; // height of sticky header
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Client-side Router Logic for Multi-page Experience (SPA)
function handleRoute() {
  const path = window.location.pathname;
  
  // Hide mobile menu if open
  if (navMenu) {
    navMenu.classList.remove('active');
  }

  // Hide all main page content views
  const viewHome = document.getElementById('view-home');
  const viewTermos = document.getElementById('view-termos');
  const viewPrivacidade = document.getElementById('view-privacidade');
  const viewEtica = document.getElementById('view-etica');

  if (viewHome) viewHome.classList.add('hidden');
  if (viewTermos) viewTermos.classList.add('hidden');
  if (viewPrivacidade) viewPrivacidade.classList.add('hidden');
  if (viewEtica) viewEtica.classList.add('hidden');

  // Remove active navigation underlines
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Route Matching
  if (path === '/termos') {
    if (viewTermos) viewTermos.classList.remove('hidden');
    document.title = "Termos de Uso - Neurautomation";
  } else if (path === '/privacidade') {
    if (viewPrivacidade) viewPrivacidade.classList.remove('hidden');
    document.title = "Política de Privacidade - Neurautomation";
  } else if (path === '/etica') {
    if (viewEtica) viewEtica.classList.remove('hidden');
    document.title = "Código de Ética Comercial - Neurautomation";
  } else {
    // Fallback to Home View
    if (viewHome) viewHome.classList.remove('hidden');
    const homeNavItem = document.querySelector('.nav-item-home');
    if (homeNavItem) homeNavItem.classList.add('active');
    document.title = "Neurautomation - Marketing com Inteligência Artificial para Clínicas Médicas e Estética";
    
    // Trigger live simulation inside Home hero
    runTerminalSimulation();
  }

  // Scroll view to top immediately on route change
  window.scrollTo(0, 0);
}

function handleLinkClick(e, path) {
  e.preventDefault();
  window.history.pushState(null, '', path);
  handleRoute();
}

function scrollToSection(e, sectionId) {
  e.preventDefault();
  
  // Close mobile menu if active
  if (navMenu) {
    navMenu.classList.remove('active');
  }

  // If user is currently on a legal subpage, route back to home first, then scroll
  if (window.location.pathname !== '/') {
    window.history.pushState(null, '', '/');
    handleRoute();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      smoothScrollTo(element);
    }, 150);
  } else {
    // Already on home view, smooth scroll to anchor
    const element = document.getElementById(sectionId);
    smoothScrollTo(element);
  }
}

// Bind handlers to window to keep them globally accessible for HTML inline onclick
window.handleLinkClick = handleLinkClick;
window.scrollToSection = scrollToSection;

// Initialize SPA Router Listeners
window.addEventListener('popstate', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);
