document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  // Função para atualizar a classe "active" com base no scroll
  const updateActiveLinkOnScroll = () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      if (href.startsWith('#') && href.substring(1) === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  // Função para atualizar a classe "active" com base no clique ou hashchange
  const updateActiveLinkOnClickOrHashChange = () => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      if (href.startsWith('#')) {
        if (href === currentHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } else {
        const normalizedHref = new URL(href, window.location.origin).pathname;

        if (normalizedHref === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  // Atualiza o link ativo ao carregar a página
  updateActiveLinkOnClickOrHashChange();

  // Atualiza o link ativo ao mudar o hash
  window.addEventListener('hashchange', updateActiveLinkOnClickOrHashChange);

  // Atualiza o link ativo ao rolar a página
  window.addEventListener('scroll', updateActiveLinkOnScroll);
});