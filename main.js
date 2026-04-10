// Data
const skills = ['Data Analysis', 'Excel', 'SQL', 'Python', 'Angular', 'Spring Boot', 'MySQL', 'Software Testing', 'Java', 'Communication', 'Problem Solving'];

const projects = [
    { title: "Tareeky Van", category: "Data Analysis", description: "Built a comprehensive dashboard to track van logistics and delivery performance.", link: "https://discover-caravaning-1hei8g5.gamma.site" },
    { title: "Fintech Dashboard", category: "Branding & Design", description: "Modern financial interface design focusing on user experience and data visualization.", link: "https://www.canva.com/design/DAGZoyKlw9M/8GjHxb8FfSJ4R0aoMjbV5g/view?embed" },
    { title: "Volta Physique", category: "Fitness Programming", description: "A specialized platform for fitness tracking and bodybuilding programming.", link: "https://voltaphysique.github.io" }
];

const certificates = [
    { title: 'Full Stack Developer', issuer: 'Soulco CodeCraft', date: '2025', desc: 'Completed 8-week intensive bootcamp in Angular & Spring Boot.', link: 'https://drive.google.com/file/d/11myB_oIsaxrljMI7Q1iMXnUxAxhVyItJ/preview' },
    { title: 'Software Tester', issuer: 'DEPI English Track', date: '2025', desc: 'Specialized in Manual and Automation testing methodologies.', link: 'https://drive.google.com/file/d/1cbZ7cX6UbCIapeP-0OoGpk43p3TBCmXn/preview' },
    { title: 'Data Science Orientation', issuer: 'IBM', date: '2025', desc: 'Professional credential in data science foundations and tools.', link: 'https://drive.google.com/file/d/1VQz-tmTqKWQ9Nql_r-R_DHUtESEqceUN/preview' },
    { title: 'Digital Marketing Top Achiever', issuer: 'IOM & Sprints', date: '2024', desc: 'Selected as a Top Achiever in the Digital Marketing program.', link: 'https://drive.google.com/file/d/1nzaXbmN6HCkYed9ayT7sdaVFqK1tBggu/preview' },
    { title: 'Stock Market Instructor', issuer: 'AIBE SAMS', date: '2025', desc: 'Delivered 7+ educational sessions on trading and market analysis.', link: 'https://drive.google.com/file/d/1RlDNT45XhiWsE5hZ_SFlh4LPhmXLOHsN/preview' },
    { title: 'SME Banking Intern', issuer: 'CIB Egypt', date: '2025', desc: 'Summer Internship Program for top-performing students.', link: 'https://drive.google.com/file/d/1a3LXVikztiZT1Xj2a-TlwER2OOlW01ea/preview' }
];

// Render Skills
document.getElementById('skills-container').innerHTML = skills.map(s =>
    `<span class="px-3 py-1 bg-[#1A1510] text-[#F0E6D3] text-xs border border-[#2A2520]">${s}</span>`
).join('');

// Render Projects
document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="project-card scroll-reveal p-10 bg-[#1A1510] border border-[#2A2520]">
        <div class="flex gap-2 mb-6">
            <span class="text-[10px] tracking-widest uppercase px-2 py-1 border border-[#D4A45A33] text-[#D4A45A]">${p.category}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3 text-[#F0E6D3]" style="font-family:'Syne',sans-serif">${p.title}</h3>
        <p class="text-sm text-[#8A8070] mb-6">${p.description}</p>
        <button onclick="openModal('${p.link}')" class="inline-flex items-center gap-2 text-sm text-[#D4A45A] font-bold hover:text-[#F0E6D3] transition-colors">View Project <i data-lucide="arrow-up-right" class="w-4 h-4"></i></button>
    </div>
`).join('');

// Render Certificates
document.getElementById('certificates-grid').innerHTML = certificates.map(c => `
    <div class="project-card scroll-reveal p-8 bg-[#1A1510] border border-[#2A2520] flex flex-col justify-between">
        <div>
            <div class="flex justify-between items-start mb-4">
                <span class="text-[10px] tracking-widest uppercase px-2 py-1 border border-[#D4A45A33] text-[#D4A45A]">${c.date}</span>
                <i data-lucide="award" class="text-[#D4A45A] w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold mb-2 text-[#F0E6D3]" style="font-family:'Syne',sans-serif">${c.title}</h3>
            <p class="text-xs font-bold tracking-wide uppercase text-[#D4A45A] mb-2">${c.issuer}</p>
            <p class="text-sm text-[#8A8070] mb-6">${c.desc}</p>
        </div>
        <button onclick="openModal('${c.link}')" class="inline-flex items-center gap-2 text-sm text-[#D4A45A] font-bold hover:text-[#F0E6D3] transition-colors">View Certificate <i data-lucide="maximize" class="w-4 h-4"></i></button>
    </div>
`).join('');

// Initialize Icons
lucide.createIcons();

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// Modal Logic
function openModal(fileSrc) {
    const modal = document.getElementById('cert-modal');
    const modalIframe = document.getElementById('cert-modal-iframe');
    modalIframe.src = fileSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('cert-modal');
    const modalIframe = document.getElementById('cert-modal-iframe');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (!modal.classList.contains('active')) modalIframe.src = '';
    }, 300);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});