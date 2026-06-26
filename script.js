/**
 * DF Distribuidora — script.js
 *
 * 1. Validação do formulário de contato
 * 2. Destaque do link ativo no menu conforme scroll
 */

/* ============================================================
   1. VALIDAÇÃO DO FORMULÁRIO
   ============================================================ */
(function () {
  'use strict';

  const btn = document.getElementById('btn-enviar');
  if (!btn) return;

  const campos = [
    {
      id: 'nome',
      errId: 'nome-error',
      ok: (v) => v.trim().length >= 2,
    },
    {
      id: 'email',
      errId: 'email-error',
      ok: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    },
    {
      id: 'mensagem',
      errId: 'mensagem-error',
      ok: (v) => v.trim().length >= 5,
    },
  ];

  function validar(campo) {
    const el = document.getElementById(campo.id);
    const err = document.getElementById(campo.errId);
    const valido = campo.ok(el.value);
    el.classList.toggle('invalido', !valido);
    err.classList.toggle('d-none', valido);
    return valido;
  }

  // valida ao sair do campo e ao digitar
  campos.forEach((c) => {
    const el = document.getElementById(c.id);
    if (!el) return;
    el.addEventListener('blur', () => validar(c));
    el.addEventListener('input', () => {
      if (c.ok(el.value)) {
        el.classList.remove('invalido');
        document.getElementById(c.errId).classList.add('d-none');
      }
    });
  });

  btn.addEventListener('click', function () {
    const tudo = campos.map(validar).every(Boolean);
    if (!tudo) {
      const primeiro = document.querySelector('.campo-input.invalido');
      if (primeiro) primeiro.focus();
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Enviando…';

    setTimeout(() => {
      const ok = document.getElementById('form-success');
      if (ok) {
        ok.classList.remove('d-none');
        ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      campos.forEach((c) => { document.getElementById(c.id).value = ''; });
      btn.disabled = false;
      btn.textContent = 'Enviar mensagem';
    }, 800);
  });
})();

/* ============================================================
   2. LINK ATIVO NO MENU (IntersectionObserver)
   ============================================================ */
(function () {
  const secoes = document.querySelectorAll('section[id], header[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  if (!secoes.length || !links.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => {
          const ativo = l.getAttribute('href') === `#${e.target.id}`;
          l.classList.toggle('active', ativo);
          if (ativo) l.setAttribute('aria-current', 'true');
          else l.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  secoes.forEach((s) => obs.observe(s));
})();
