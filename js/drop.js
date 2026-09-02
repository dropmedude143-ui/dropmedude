// js/drop.js - client-only demo storage + render
(function(){
  const requestForm = document.getElementById('request-form');
  const riderForm = document.getElementById('rider-form');
  const requestsList = document.getElementById('requests-list');
  const ridersList = document.getElementById('riders-list');

  function load(key){ try{ return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]} }
  function save(key,arr){ localStorage.setItem(key, JSON.stringify(arr)) }

  function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  function renderLists(){
    if (!requestsList || !ridersList) return;
    requestsList.innerHTML = '';
    ridersList.innerHTML = '';
    const requests = load('drop_requests');
    const riders = load('drop_riders');

    requests.slice().reverse().forEach(r=>{
      const el = document.createElement('div'); el.className='card request-card';
      el.innerHTML = `<strong>${escapeHtml(r.name)}</strong> <div class="small">${escapeHtml(r.gender)} • ${escapeHtml(r.time||'')}</div>
        <div class="meta">Pickup: ${escapeHtml(r.pickup)}<br>Drop: ${escapeHtml(r.drop)}</div>
        <div class="small">Contact: ${escapeHtml(r.phone)}</div>
        <div class="small">${escapeHtml(r.notes||'')}</div>`;
      requestsList.appendChild(el);
    });

    riders.slice().reverse().forEach(r=>{
      const el = document.createElement('div'); el.className='card rider-card';
      el.innerHTML = `<strong>${escapeHtml(r.rname)}</strong> <div class="small">${escapeHtml(r.company||'')}</div>
        <div class="meta">Route: ${escapeHtml(r.route)}<br>Vehicle: ${escapeHtml(r.vehicle)} ${escapeHtml(r.plate||'')}</div>
        <div class="small">Seats: ${escapeHtml(r.seats||'1')} • Contact: ${escapeHtml(r.phone)}</div>
        <div class="small">${escapeHtml(r.notes||'')}</div>`;
      ridersList.appendChild(el);
    });
  }

  if (requestForm) {
    requestForm.addEventListener('submit', e=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(requestForm));
      const arr = load('drop_requests');
      arr.push({ id: Date.now(), ...data });
      save('drop_requests', arr);
      requestForm.reset();
      renderLists();
    });
  }

  if (riderForm) {
    riderForm.addEventListener('submit', e=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(riderForm));
      const arr = load('drop_riders');
      arr.push({ id: Date.now(), ...data });
      save('drop_riders', arr);
      riderForm.reset();
      renderLists();
    });
  }

  // initial render
  document.addEventListener('DOMContentLoaded', renderLists);
})();
