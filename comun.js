/* Perfiles y frases de ánimo, compartidos por todas las materias.
   Todo se guarda solo en este dispositivo. Sin servidor. */
(() => {
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const BANDAS = { 1: '3 a 5 años', 2: '6 a 7 años', 3: '8 a 10 años' };
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  let actual = { id: null, apodo: '', banda: 1 };

  /* ---------- Perfiles ---------- */
  function el(tag, texto, clase) { const e = document.createElement(tag); e.textContent = texto; if (clase) e.className = clase; return e; }

  function abrirPicker(cb, opts) {
    opts = opts || {};
    const conBanda = opts.banda !== false;
    const etiqueta = p => (p.apodo || 'Sin apodo') + (conBanda ? ' · ' + BANDAS[p.banda] : '');
    const ov = document.createElement('div'); ov.className = 'pf-ov';
    const box = document.createElement('div'); box.className = 'pf-box';
    ov.appendChild(box); document.body.appendChild(ov);
    const cerrar = () => ov.remove();

    const pintar = () => {
      box.textContent = '';
      box.appendChild(el('h2', '¿Quién practica hoy?'));
      Perfil.lista().forEach(p => {
        const b = el('button', etiqueta(p), 'pf-btn');
        b.onclick = () => { actual = { id: p.id, apodo: p.apodo || '', banda: p.banda }; cerrar(); cb(); };
        box.appendChild(b);
      });
      const nuevo = el('button', '+ Nuevo perfil', 'pf-btn pf-sec');
      nuevo.onclick = formulario;
      const cancel = el('button', 'Cancelar', 'pf-btn pf-sec');
      cancel.onclick = cerrar;
      box.append(nuevo, cancel);
    };

    const formulario = () => {
      box.textContent = '';
      box.appendChild(el('h2', 'Nuevo perfil'));
      const inp = document.createElement('input');
      inp.className = 'pf-in'; inp.placeholder = 'Ej.: Pepito (opcional)'; inp.maxLength = 20;
      const sel = document.createElement('select'); sel.className = 'pf-in';
      Object.entries(BANDAS).forEach(([k, v]) => sel.add(new Option(v, k)));
      if (!conBanda) sel.hidden = true;
      const hint = el('p', 'El apodo es opcional. Usá uno corto, no el nombre completo.', 'pf-hint');
      const ok = el('button', 'Continuar sin apodo', 'pf-btn pf-main');
      inp.oninput = () => { ok.textContent = inp.value.trim() ? 'Guardar y seguir' : 'Continuar sin apodo'; };
      ok.onclick = () => {
        const apodo = inp.value.trim();
        const p = { id: Date.now().toString(36), apodo, banda: conBanda ? +sel.value : 1 };
        LS.set('lv2-perfiles', [...Perfil.lista(), p]);
        actual = { id: p.id, apodo, banda: p.banda };
        cerrar(); cb();
      };
      const volver = el('button', 'Volver', 'pf-btn pf-sec');
      volver.onclick = pintar;
      box.append(inp, sel, hint, ok, volver);
      inp.focus();
    };

    pintar();
  }

  const Perfil = {
    BANDAS,
    actual() { return { ...actual }; },
    lista() { return LS.get('lv2-perfiles', []); },
    elegir(cb, opts) { abrirPicker(cb, opts); },
    store: {
      get(k, d) { return LS.get('lv2p-' + (actual.id || 'anon') + '-' + k, d); },
      set(k, v) { LS.set('lv2p-' + (actual.id || 'anon') + '-' + k, v); }
    }
  };

  /* ---------- Frases de ánimo (sin género, con apodo opcional) ---------- */
  const FRASES = {
    bien: ['¡Muy bien{N}!', '¡Lo lograste{N}!', '¡Así se hace{N}!', '¡Vas muy bien{N}!', '¡Qué bien lo hiciste{N}!', '¡Seguí así{N}!'],
    racha: ['¡Qué racha{N}!', '¡Tres seguidas{N}! Qué bien', '¡Estás en racha{N}!'],
    error: ['Casi{N}. Ahora lo recordás', 'Probemos otra vez{N}', 'Equivocarse también ayuda{N}'],
    fin: ['¡Terminaste{N}! Qué buen trabajo', '¡Muy bien por hoy{N}!', 'Lo hiciste con ganas{N}. ¡Buen trabajo!']
  };
  let voz = LS.get('lv2-voz', true);

  function frase(tipo) {
    const ap = actual.apodo;
    return rnd(FRASES[tipo]).replaceAll('{N}', ap ? ', ' + ap : '');
  }
  function decir(texto, lang) {
    if (!voz) return;
    try {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = lang || 'es-AR'; u.rate = .95;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  function toast(texto) {
    let t = document.getElementById('elogio');
    if (!t) {
      t = document.createElement('div');
      t.id = 'elogio'; t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.textContent = texto;
    t.style.opacity = '1';
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.style.opacity = '0'; }, 2400);
  }
  function decirFrase(tipo) { const s = frase(tipo); toast(s); decir(s); }

  const Elogio = {
    bien() { decirFrase('bien'); },
    racha() { decirFrase('racha'); },
    error() { decirFrase('error'); },
    fin() { decirFrase('fin'); },
    decir, toast
  };

  /* ---------- Estilos y botón de voz ---------- */
  const css = `
  .pf-ov{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:100;display:flex;align-items:center;justify-content:center;padding:16px}
  .pf-box{background:#17171a;border:1px solid #2c2c31;border-radius:16px;padding:18px;width:min(420px,100%);max-height:90vh;overflow:auto;display:flex;flex-direction:column;gap:10px;color:#f4f2ec;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  .pf-box h2{margin:0 0 4px;font-size:1.3rem;color:#ffcc33}
  .pf-btn{min-height:52px;border-radius:12px;border:1px solid #2c2c31;background:#222227;color:#f4f2ec;font:inherit;font-weight:700;cursor:pointer;padding:10px 14px;text-align:left}
  .pf-sec{font-weight:400;text-align:center;background:transparent}
  .pf-main{background:#ffcc33;color:#1a1400;border-color:#ffcc33;text-align:center}
  .pf-in{min-height:48px;border-radius:10px;border:1px solid #2c2c31;background:#101013;color:#f4f2ec;font:inherit;padding:10px}
  .pf-hint{margin:0;color:#9d9a92;font-size:.9rem;line-height:1.4}
  .pf-voz{position:fixed;top:max(6px,env(safe-area-inset-top,0px));right:max(6px,env(safe-area-inset-right,0px));z-index:90;background:#222227;border:1px solid #2c2c31;border-radius:10px;min-width:40px;min-height:40px;font-size:1.1rem;cursor:pointer;opacity:.85}
    .pf-cri{position:fixed;right:max(8px,env(safe-area-inset-right,0px));bottom:max(8px,env(safe-area-inset-bottom,0px));z-index:85;width:64px;height:64px;padding:0;border:0;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent}\n  .pf-cri img{width:64px;height:64px;display:block;pointer-events:none}\n  .pf-burb{position:fixed;right:max(10px,env(safe-area-inset-right,0px));bottom:84px;z-index:86;width:min(300px,88vw);background:#17171a;color:#f4f2ec;border:1px solid #2c2c31;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 28px rgba(0,0,0,.5);font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}\n  .pf-burb p{margin:0;line-height:1.45}\n  .pf-burb::after{content:'';position:absolute;right:26px;bottom:-8px;width:14px;height:14px;background:#17171a;border-right:1px solid #2c2c31;border-bottom:1px solid #2c2c31;transform:rotate(45deg)}
  .pf-cred p{margin:0;line-height:1.5}
  .pf-cred .pf-cred-firma{color:#ffcc33;font-weight:700}
  #elogio{position:fixed;left:50%;transform:translateX(-50%);bottom:max(18px,env(safe-area-inset-bottom,0px));z-index:80;background:#ffcc33;color:#1a1400;font-weight:700;font-family:system-ui,sans-serif;padding:12px 18px;border-radius:14px;box-shadow:0 6px 24px rgba(0,0,0,.4);opacity:0;transition:opacity .25s;max-width:92vw;text-align:center;pointer-events:none}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  document.addEventListener('DOMContentLoaded', () => {
    const b = document.createElement('button');
    b.className = 'pf-voz'; b.type = 'button';
    b.setAttribute('aria-label', 'Activar o silenciar la voz');
    b.textContent = voz ? '🔊' : '🔇';
    b.onclick = () => {
      voz = !voz; LS.set('lv2-voz', voz);
      b.textContent = voz ? '🔊' : '🔇';
      if (!voz && 'speechSynthesis' in window) speechSynthesis.cancel();
    };
    document.body.appendChild(b);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'pf-cri';
    btn.setAttribute('aria-label', 'Información de la app');
    btn.innerHTML = '<img src="img/crisalida.webp" alt="" width="64" height="64">';
    let burbuja = null;
    const cerrarBurbuja = () => { if (burbuja) { burbuja.remove(); burbuja = null; } };
    btn.onclick = () => {
      if (burbuja) { cerrarBurbuja(); return; }
      burbuja = document.createElement('div'); burbuja.className = 'pf-burb'; burbuja.setAttribute('role', 'dialog');
      const p1 = document.createElement('p'); p1.className = 'pf-cred-firma'; p1.textContent = 'Idea y creación: Roberto D. SANTIAGO HIGA';
      const p2 = document.createElement('p'); p2.textContent = 'Noviembre 2026';
      const p3 = document.createElement('p'); p3.textContent = 'Dedicado a mis hijos, para despertar en ellos el interés por el conocimiento.';
      const cerrar = document.createElement('button'); cerrar.className = 'pf-btn pf-main'; cerrar.type = 'button'; cerrar.textContent = 'Cerrar';
      cerrar.onclick = cerrarBurbuja;
      burbuja.append(p1, p2, p3, cerrar);
      document.body.appendChild(burbuja);
    };
    document.body.appendChild(btn);
  });

  window.Perfil = Perfil;
  window.Elogio = Elogio;
})();
