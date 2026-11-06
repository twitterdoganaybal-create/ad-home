/*!
 * AD HOME — Home Assistant dashboard
 * Tam ekran, koyu, kartlı akıllı ev arayüzü + panelde gezen kedi.
 * Kullanım (dashboard ayarı):
 *   strategy:
 *     type: custom:ad-home
 * MIT License
 */
const ADH_VERSION = '1.0.0';

/* ---------------- Dil ---------------- */
const ADH_TXT = {
  tr: {
    on: 'Açık', off: 'Kapalı', home: 'evde', away: 'dışarıda', unavailable: 'Erişilemiyor',
    status: 'Durum', people: 'Evdekiler', cat: 'Kedi', other: 'Diğer', cameras: 'Kameralar',
    feed: 'Mama Ver', litter: 'Kumu Temizle', feeding: 'Mama veriliyor…',
    inside: 'İçeride', heat: 'Isıt', cool: 'Soğut', auto: 'Otomatik', ac_off: 'Kapat', ac_is_off: 'Klima Kapalı',
    start: 'Süpür', dock: 'Şarja Git', pause: 'Durdur', battery: 'Pil',
    play: 'Oynat', vol_down: 'Ses −', vol_up: 'Ses +', mute: 'Sessiz',
    open: 'Aç', close: 'Kapat', stop: 'Dur', locked: 'Kilitli', unlocked: 'Açık',
    no_image: 'Görüntü alınamadı', humidity: 'Nem', feels: 'Hissedilen', today: 'Bugün',
    cat_tired: ['Çok yoruldum 😮‍💨', 'Biraz oturayım 🐾', 'Of… çok yoruldum'],
    cat_hungry: 'Acıktım 😿 Mama verir misin?', cat_meow: ['Miyav 🐱', 'Mrrr…', 'Beni sev 😽'],
    cat_sleep: 'Kedi uyuyor', cat_sleep2: 'Rüyasında mama görüyor', cat_awake: 'Kedi keyifli', cat_awake2: 'Evde geziniyor',
    cat_hungry_t: 'Kedi acıktı', cat_hungry2: '24 saattir mama yok',
    quick: 'Hızlı Kontrol', lights_on: 'lamba açık', all_off: 'Tüm Işıkları Kapat', all_on: 'Tüm Işıkları Aç', of: '/',
    weather: 'Hava Durumu', wind: 'Rüzgâr', days: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'], now: 'Şimdi',
    day: 'Gün', greet: ['İyi geceler 🌙', 'Günaydın ☀️', 'Tünaydın 🌤', 'İyi akşamlar 🌆'], sunrise: 'Gün doğumu', sunset: 'Gün batımı', daylen: 'Gün uzunluğu', week: 'Hafta', h: 'sa', m: 'dk',
    summary: 'Ev Özeti', ac: 'Klima', door: 'Kapı', vacuum: 'Süpürge', all_ok: 'Her şey yolunda ✨',
    vac: { docked: 'Şarjda', cleaning: 'Süpürüyor', returning: 'Şarja dönüyor', paused: 'Durdu', idle: 'Bekliyor', error: 'Hata' },
    empty: 'Henüz cihaz bulunamadı. Cihazlarını Ayarlar → Alanlar bölümünden bir odaya ata.',
    wx: { 'clear-night': 'Açık', cloudy: 'Bulutlu', fog: 'Sisli', hail: 'Dolu', lightning: 'Gök gürültülü',
      'lightning-rainy': 'Fırtına', partlycloudy: 'Parçalı bulutlu', pouring: 'Sağanak', rainy: 'Yağmurlu',
      snowy: 'Karlı', 'snowy-rainy': 'Karla karışık', sunny: 'Güneşli', windy: 'Rüzgârlı', 'windy-variant': 'Rüzgârlı', exceptional: 'Olağandışı' },
  },
  en: {
    on: 'On', off: 'Off', home: 'home', away: 'away', unavailable: 'Unavailable',
    status: 'Status', people: 'People', cat: 'Cat', other: 'Other', cameras: 'Cameras',
    feed: 'Feed', litter: 'Clean Litter', feeding: 'Feeding…',
    inside: 'Inside', heat: 'Heat', cool: 'Cool', auto: 'Auto', ac_off: 'Off', ac_is_off: 'A/C Off',
    start: 'Clean', dock: 'Dock', pause: 'Pause', battery: 'Battery',
    play: 'Play', vol_down: 'Vol −', vol_up: 'Vol +', mute: 'Mute',
    open: 'Open', close: 'Close', stop: 'Stop', locked: 'Locked', unlocked: 'Unlocked',
    no_image: 'No image', humidity: 'Humidity', feels: 'Feels like', today: 'Today',
    cat_tired: ['So tired 😮‍💨', 'Let me sit a bit 🐾', 'Phew…'],
    cat_hungry: "I'm hungry 😿 Feed me?", cat_meow: ['Meow 🐱', 'Mrrr…', 'Pet me 😽'],
    cat_sleep: 'Cat is sleeping', cat_sleep2: 'Dreaming of food', cat_awake: 'Cat is happy', cat_awake2: 'Wandering around',
    cat_hungry_t: 'Cat is hungry', cat_hungry2: 'No food for 24 hours',
    quick: 'Quick Controls', lights_on: 'lights on', all_off: 'All Lights Off', all_on: 'All Lights On', of: '/',
    weather: 'Weather', wind: 'Wind', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], now: 'Now',
    day: 'Day', greet: ['Good night 🌙', 'Good morning ☀️', 'Good afternoon 🌤', 'Good evening 🌆'], sunrise: 'Sunrise', sunset: 'Sunset', daylen: 'Day length', week: 'Week', h: 'h', m: 'min',
    summary: 'Home Summary', ac: 'A/C', door: 'Door', vacuum: 'Vacuum', all_ok: 'All good ✨',
    vac: { docked: 'Docked', cleaning: 'Cleaning', returning: 'Returning', paused: 'Paused', idle: 'Idle', error: 'Error' },
    empty: 'No devices found yet. Assign your devices to rooms in Settings → Areas.',
    wx: { 'clear-night': 'Clear', cloudy: 'Cloudy', fog: 'Fog', hail: 'Hail', lightning: 'Thunder',
      'lightning-rainy': 'Storm', partlycloudy: 'Partly cloudy', pouring: 'Pouring', rainy: 'Rainy',
      snowy: 'Snowy', 'snowy-rainy': 'Sleet', sunny: 'Sunny', windy: 'Windy', 'windy-variant': 'Windy', exceptional: 'Exceptional' },
  },
};
const ADH_WXICON = { 'clear-night': 'mdi:weather-night', cloudy: 'mdi:weather-cloudy', fog: 'mdi:weather-fog', hail: 'mdi:weather-hail',
  lightning: 'mdi:weather-lightning', 'lightning-rainy': 'mdi:weather-lightning-rainy', partlycloudy: 'mdi:weather-partly-cloudy',
  pouring: 'mdi:weather-pouring', rainy: 'mdi:weather-rainy', snowy: 'mdi:weather-snowy', 'snowy-rainy': 'mdi:weather-snowy-rainy',
  sunny: 'mdi:weather-sunny', windy: 'mdi:weather-windy', 'windy-variant': 'mdi:weather-windy-variant', exceptional: 'mdi:alert-circle-outline' };
const ADH_ICON = { light: 'mdi:lightbulb', switch: 'mdi:toggle-switch-variant', fan: 'mdi:fan', input_boolean: 'mdi:toggle-switch-variant',
  climate: 'mdi:air-conditioner', vacuum: 'mdi:robot-vacuum', camera: 'mdi:cctv', media_player: 'mdi:television', cover: 'mdi:curtains',
  lock: 'mdi:lock', script: 'mdi:script-text-play', scene: 'mdi:palette', button: 'mdi:gesture-tap-button' };
const ADH_TOGGLE = ['light', 'switch', 'fan', 'input_boolean'];
const ADH_PRESS = ['script', 'scene', 'button'];

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ADH_PCT = { v: 'tr' };
const pct = (v) => (ADH_PCT.v === 'en' ? `${Math.round(v)}%` : `%${Math.round(v)}`);
const num = (v, d = 1) => (v == null || isNaN(+v) ? '--' : (+v).toFixed(d).replace('.', ','));

/* ---------------- Örnek (demo) ev: kişisel bilgi yok ---------------- */
function adhDemoHass() {
  const now = new Date().toISOString();
  const S = {};
  const add = (id, state, attributes = {}) => (S[id] = { entity_id: id, state, attributes, last_changed: now, last_updated: now });
  add('weather.ev', 'partlycloudy', { friendly_name: 'Hava', temperature: 18, humidity: 62, apparent_temperature: 17, wind_speed: 14, wind_speed_unit: 'km/h', temperature_unit: '°C' });
  { const d0 = new Date(); const sr = new Date(d0); sr.setHours(7, 4, 0, 0); const ss = new Date(d0); ss.setHours(17, 21, 0, 0);
    add('sun.sun', 'below_horizon', { friendly_name: 'Güneş', next_rising: sr.toISOString(), next_setting: ss.toISOString() }); }
  add('scene.film_gecesi', 'unknown', { friendly_name: 'Film Gecesi' });
  add('scene.gunaydin', 'unknown', { friendly_name: 'Günaydın' });
  add('person.baba', 'home', { friendly_name: 'Baba' });
  add('person.anne', 'home', { friendly_name: 'Anne' });
  add('light.salon_lamba', 'on', { friendly_name: 'Salon Lamba', brightness: 200 });
  add('light.mutfak_lamba', 'off', { friendly_name: 'Mutfak Lamba' });
  add('light.yatak_lamba', 'off', { friendly_name: 'Yatak Odası Lamba' });
  add('light.cocuk_lamba', 'on', { friendly_name: 'Küçük Oda Lamba' });
  add('switch.tv_isigi', 'off', { friendly_name: 'TV Işığı' });
  add('media_player.tv', 'on', { friendly_name: 'TV', source: 'YouTube', volume_level: 0.3 });
  add('climate.klima', 'cool', { friendly_name: 'Klima', temperature: 23, current_temperature: 24.5, hvac_modes: ['off', 'heat', 'cool', 'auto'] });
  add('vacuum.supurge', 'docked', { friendly_name: 'Süpürge', battery_level: 100 });
  add('camera.kamera', 'idle', { friendly_name: 'Kamera' });
  add('sensor.salon_sicaklik', '21.4', { friendly_name: 'Salon', device_class: 'temperature', unit_of_measurement: '°C' });
  add('sensor.salon_nem', '55', { friendly_name: 'Salon Nem', device_class: 'humidity', unit_of_measurement: '%' });
  add('sensor.yatak_sicaklik', '19.8', { friendly_name: 'Yatak Odası', device_class: 'temperature', unit_of_measurement: '°C' });
  add('sensor.kucuk_sicaklik', '20.6', { friendly_name: 'Küçük Oda', device_class: 'temperature', unit_of_measurement: '°C' });
  add('cover.perde', 'closed', { friendly_name: 'Salon Perde' });
  add('lock.kapi', 'locked', { friendly_name: 'Kapı' });
  add('button.kedi_mama', 'unknown', { friendly_name: 'Kedi Mama' });
  const areas = { salon: { area_id: 'salon', name: 'Salon' }, mutfak: { area_id: 'mutfak', name: 'Mutfak' },
    yatak: { area_id: 'yatak', name: 'Yatak Odası' }, kucuk: { area_id: 'kucuk', name: 'Küçük Oda' } };
  const ent = {};
  const ea = (id, area) => (ent[id] = { entity_id: id, area_id: area });
  ea('light.salon_lamba', 'salon'); ea('switch.tv_isigi', 'salon'); ea('media_player.tv', 'salon'); ea('climate.klima', 'salon');
  ea('cover.perde', 'salon'); ea('sensor.salon_sicaklik', 'salon'); ea('sensor.salon_nem', 'salon');
  ea('light.mutfak_lamba', 'mutfak'); ea('light.yatak_lamba', 'yatak'); ea('sensor.yatak_sicaklik', 'yatak');
  ea('light.cocuk_lamba', 'kucuk'); ea('sensor.kucuk_sicaklik', 'kucuk');
  ea('vacuum.supurge', null); ea('camera.kamera', null); ea('lock.kapi', null);
  const day = 864e5, t0 = Date.now();
  const fc = ['sunny', 'partlycloudy', 'rainy', 'cloudy', 'sunny', 'partlycloudy'].map((c, i) => ({ datetime: new Date(t0 + i * day).toISOString(), condition: c, temperature: [19, 17, 14, 15, 20, 18][i], templow: [11, 10, 9, 8, 12, 11][i] }));
  const hass = {
    demo: true, _forecast: fc, language: 'tr', states: S, areas, entities: ent, devices: {},
    callService(domain, service, data) {
      const id = data && data.entity_id; const s = S[id]; if (!s) return Promise.resolve();
      const n = { ...s, attributes: { ...s.attributes } };
      if (service === 'toggle') n.state = s.state === 'on' ? 'off' : 'on';
      else if (service === 'turn_on') n.state = 'on';
      else if (service === 'turn_off') n.state = 'off';
      else if (service === 'set_temperature') n.attributes.temperature = data.temperature;
      else if (service === 'set_hvac_mode') n.state = data.hvac_mode;
      else if (service === 'start') n.state = 'cleaning';
      else if (service === 'return_to_base') n.state = 'returning';
      else if (service === 'pause') n.state = 'paused';
      else if (service === 'open_cover') n.state = 'open';
      else if (service === 'close_cover') n.state = 'closed';
      else if (service === 'lock') n.state = 'locked';
      else if (service === 'unlock') n.state = 'unlocked';
      else if (service === 'press') n.last_changed = new Date().toISOString();
      S[id] = n; hass.states = { ...S };
      if (hass._card) hass._card.hass = hass;
      return Promise.resolve();
    },
  };
  return hass;
}

/* ---------------- Kedi çizimleri (özgün) ---------------- */
const ADH_CAT_COLORS = { gri: ['#5b6170', '#3d424e', '#c9ced8'], siyah: ['#24262d', '#15161b', '#5a5d68'], turuncu: ['#e08a3c', '#b8652a', '#ffd9a8'], beyaz: ['#eceff4', '#c8cdd6', '#ffffff'] };
function adhCatSVG(pose, color) {
  const [c1, c2, c3] = ADH_CAT_COLORS[color] || ADH_CAT_COLORS.gri;
  const eye = '#9be564';
  if (pose === 'sleep') {
    return `<svg viewBox="0 0 120 70" class="cat sleep"><ellipse cx="60" cy="52" rx="44" ry="17" fill="${c1}"/>
      <path d="M18 52c-6-14 4-26 18-22" fill="none" stroke="${c1}" stroke-width="9" stroke-linecap="round"/>
      <circle cx="88" cy="44" r="16" fill="${c1}"/><path d="M76 33l3-12 9 9zM94 30l8-9 3 12z" fill="${c2}"/>
      <path d="M81 45q4 3 8 0M92 45q4 3 8 0" stroke="${c3}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <ellipse cx="60" cy="58" rx="30" ry="6" fill="${c2}" opacity=".45"/>
      <g class="z"><text x="104" y="22">z</text><text x="112" y="12">z</text></g></svg>`;
  }
  if (pose === 'sit') {
    return `<svg viewBox="0 0 90 100" class="cat sit"><path d="M70 92c16-2 18-22 6-30" fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round" class="tail"/>
      <path d="M22 96c-4-26 4-46 23-46s27 20 23 46z" fill="${c1}"/><ellipse cx="45" cy="80" rx="13" ry="16" fill="${c3}" opacity=".35"/>
      <circle cx="45" cy="36" r="20" fill="${c1}"/><path d="M28 26l2-17 13 10zM62 26l-2-17-13 10z" fill="${c1}"/>
      <path d="M31 22l1-9 7 6zM59 22l-1-9-7 6z" fill="${c2}"/>
      <g class="eyes"><ellipse cx="37" cy="36" rx="3.6" ry="4.6" fill="${eye}"/><ellipse cx="53" cy="36" rx="3.6" ry="4.6" fill="${eye}"/>
      <ellipse cx="37" cy="36.5" rx="1.3" ry="3.4" fill="#111"/><ellipse cx="53" cy="36.5" rx="1.3" ry="3.4" fill="#111"/></g>
      <path d="M43 44l2 2 2-2z" fill="#f4a3b5"/><path d="M30 46h-10M30 49h-9M60 46h10M60 49h9" stroke="${c3}" stroke-width=".9" opacity=".7"/>
      <rect x="30" y="88" width="10" height="8" rx="4" fill="${c2}"/><rect x="50" y="88" width="10" height="8" rx="4" fill="${c2}"/></svg>`;
  }
  return `<svg viewBox="0 0 130 80" class="cat walk"><path d="M18 34c-14-6-16-22-6-28" fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round" class="tail"/>
    <g class="leg l1"><rect x="30" y="50" width="8" height="26" rx="4" fill="${c2}"/></g><g class="leg l2"><rect x="84" y="50" width="8" height="26" rx="4" fill="${c2}"/></g>
    <ellipse cx="60" cy="44" rx="42" ry="17" fill="${c1}"/>
    <g class="leg l3"><rect x="40" y="52" width="8" height="25" rx="4" fill="${c1}"/></g><g class="leg l4"><rect x="74" y="52" width="8" height="25" rx="4" fill="${c1}"/></g>
    <circle cx="102" cy="30" r="18" fill="${c1}"/><path d="M88 20l1-16 13 10zM118 18l-2-16-11 12z" fill="${c1}"/>
    <path d="M91 17l1-8 6 5zM115 15l-1-8-6 6z" fill="${c2}"/>
    <ellipse cx="97" cy="29" rx="3.3" ry="4.3" fill="${eye}"/><ellipse cx="110" cy="29" rx="3.3" ry="4.3" fill="${eye}"/>
    <ellipse cx="97" cy="29.5" rx="1.2" ry="3.2" fill="#111"/><ellipse cx="110" cy="29.5" rx="1.2" ry="3.2" fill="#111"/>
    <path d="M102 37l2 2 2-2z" fill="#f4a3b5"/></svg>`;
}

/* ---------------- Stil ---------------- */
const ADH_CSS = `
:host{display:block;height:100%;--adh-bg1:#121a33;--adh-bg2:#2a1d48;--adh-card:rgba(13,17,34,.74);--adh-tile:rgba(255,255,255,.06);
 --adh-tx:#f4f6ff;--adh-mut:#97a0bf;--adh-on:#f2c94c;--adh-on-tx:#2a2205;--adh-acc:#3b82f6;--adh-ok:#34d399;--adh-r:22px}
*{box-sizing:border-box}
.root{position:relative;min-height:100vh;overflow:hidden;color:var(--adh-tx);font-family:var(--paper-font-body1_-_font-family,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif);
 background:radial-gradient(1200px 700px at 12% -10%,#2d4fbf55,transparent 60%),radial-gradient(900px 700px at 100% 0%,#7b3fb855,transparent 60%),linear-gradient(160deg,var(--adh-bg1),var(--adh-bg2));padding:18px 18px 40px}
.wx{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.cloud{position:absolute;width:340px;height:110px;border-radius:999px;background:rgba(255,255,255,.07);filter:blur(18px);animation:adh-cloud linear infinite}
@keyframes adh-cloud{from{transform:translateX(-420px)}to{transform:translateX(calc(100vw + 420px))}}
.drop{position:absolute;top:-20px;width:1.5px;height:18px;background:linear-gradient(transparent,rgba(170,200,255,.55));animation:adh-rain linear infinite}
@keyframes adh-rain{to{transform:translateY(110vh)}}
.flake{position:absolute;top:-10px;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8);animation:adh-snow linear infinite}
@keyframes adh-snow{to{transform:translate(40px,110vh)}}
.star{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;animation:adh-tw 4s ease-in-out infinite}
@keyframes adh-tw{50%{opacity:.2}}
.sun{position:absolute;right:-120px;top:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,#ffd76a44,transparent 65%)}
.flash{position:absolute;inset:0;background:#fff;opacity:0;animation:adh-flash 9s infinite}
@keyframes adh-flash{0%,93%,100%{opacity:0}94%{opacity:.12}95%{opacity:0}96%{opacity:.08}}
.top{position:relative;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:16px 26px;margin-bottom:16px}
.clock{font-size:64px;font-weight:800;letter-spacing:-1px;line-height:1}
.date{color:var(--adh-mut);font-size:17px;line-height:1.35}.date b{color:var(--adh-tx);font-weight:600;display:block;font-size:19px}
.wxbox{display:flex;align-items:center;gap:10px;padding-left:22px;border-left:1px solid rgba(255,255,255,.12)}
.wxbox ha-icon{--mdc-icon-size:44px;color:#dfe7ff}.wxbox .t{font-size:40px;font-weight:700}.wxbox small{display:block;color:var(--adh-mut);font-size:14px}
.chips{margin-left:auto;display:flex;gap:10px;flex-wrap:wrap}
.chip{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:16px;background:var(--adh-card);font-weight:600;font-size:15px}
.chip i{width:9px;height:9px;border-radius:50%;background:#6b7280}.chip.home i{background:var(--adh-ok);box-shadow:0 0 10px var(--adh-ok)}
.grid{position:relative;z-index:1;column-width:310px;column-gap:16px}
.card{break-inside:avoid;margin:0 0 16px;background:var(--adh-card);border:1px solid rgba(255,255,255,.07);border-radius:var(--adh-r);padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.25);display:inline-block;width:100%}
.card h2{margin:0 0 12px;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;color:var(--adh-mut);font-weight:700}
.tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.tile{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:14px;border-radius:16px;background:var(--adh-tile);border:0;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:background .25s,transform .1s;min-height:92px}
.tile:active{transform:scale(.97)}.tile ha-icon{--mdc-icon-size:26px;color:#cfd6ee}
.tile b{font-size:16px;font-weight:700;line-height:1.15}.tile small{color:var(--adh-mut);font-size:13px}
.tile.on{background:var(--adh-on);color:var(--adh-on-tx)}.tile.on ha-icon{color:var(--adh-on-tx)}.tile.on small{color:#5c4a0c}
.tile.na{opacity:.45}.tiles .tile:last-child:nth-child(odd){grid-column:span 2;min-height:76px}
.card h2{display:flex;align-items:center;gap:8px}.card h2 .rt{margin-left:auto;letter-spacing:0;text-transform:none;font-size:13px;color:#cfd6ee;background:var(--adh-tile);padding:3px 9px;border-radius:10px}
.fc{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center}.fc div{background:var(--adh-tile);border-radius:14px;padding:9px 4px}
.fc small{display:block;color:var(--adh-mut);font-size:12px}.fc ha-icon{--mdc-icon-size:26px;color:#dfe7ff;margin:4px 0}.fc b{font-size:15px}.fc i{font-style:normal;color:var(--adh-mut);font-size:13px}
.wxnow{display:flex;align-items:center;gap:14px;margin-bottom:12px}.wxnow ha-icon{--mdc-icon-size:54px;color:#dfe7ff}.wxnow .t{font-size:42px;font-weight:800;line-height:1}
.wxnow .d{color:var(--adh-mut);font-size:13px;line-height:1.5}
.sum{display:grid;grid-template-columns:1fr 1fr;gap:8px}.sum div{background:var(--adh-tile);border-radius:14px;padding:10px 12px;display:flex;align-items:center;gap:10px}
.sum ha-icon{--mdc-icon-size:24px;color:#cfd6ee}.sum b{display:block;font-size:15px}.sum small{color:var(--adh-mut);font-size:12px}
.meter{height:8px;border-radius:6px;background:var(--adh-tile);overflow:hidden;margin:4px 0 12px}.meter i{display:block;height:100%;background:var(--adh-on);border-radius:6px}
.row{display:flex;align-items:center;gap:12px;padding:6px 2px}.row ha-icon{--mdc-icon-size:28px;color:#cfd6ee}
.row .nm{flex:1}.row .nm b{display:block;font-size:17px}.row .nm small{color:var(--adh-mut)}
.btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.btn{flex:1 1 auto;min-width:72px;padding:11px 12px;border-radius:13px;border:0;background:var(--adh-tile);color:var(--adh-tx);font:inherit;font-size:14px;font-weight:600;cursor:pointer}
.btn.sel{background:var(--adh-on);color:var(--adh-on-tx)}.btn.blue{background:var(--adh-acc);color:#fff}.btn:active{transform:scale(.96)}
.temps{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(88px,1fr));margin-bottom:10px}
.temps div{background:var(--adh-tile);border-radius:14px;padding:10px 12px}.temps .lb{display:block;color:var(--adh-mut);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.temps b{font-size:24px}.temps small{display:block;color:var(--adh-mut);font-size:12px}
.clim{display:flex;align-items:center;justify-content:space-between;padding:4px 6px}
.clim .tt{text-align:center}.clim .tt b{font-size:44px;font-weight:800}.clim .tt small{display:block;color:var(--adh-mut)}
.round{width:52px;height:52px;border-radius:50%;border:0;background:var(--adh-tile);color:var(--adh-tx);font-size:26px;cursor:pointer}
.cam{position:relative;border-radius:16px;overflow:hidden;background:#05070d;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:var(--adh-mut);font-size:14px}
.cam img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.big{font-size:30px;font-weight:800}
.catcard{position:relative;display:flex;align-items:center;gap:12px;min-height:84px}
.catcard .ic{width:96px;flex:none}.catcard .ic svg{width:100%;height:auto;display:block}
.catcard b{display:block;font-size:17px}.catcard small{color:var(--adh-mut)}
.empty{position:relative;z-index:1;padding:30px;text-align:center;color:var(--adh-mut);background:var(--adh-card);border-radius:var(--adh-r)}
.walker{position:absolute;left:0;top:0;width:118px;z-index:3;pointer-events:none;transition:transform linear;will-change:transform}
.walker .in{transition:transform .3s}.walker.flip .in{transform:scaleX(-1)}
.walker svg{width:100%;height:auto;display:block;filter:drop-shadow(0 6px 8px rgba(0,0,0,.35))}
.walker.sitting{width:78px}
.bubble{position:absolute;bottom:100%;left:50%;transform:translate(-50%,-6px);background:#fff;color:#222;font-size:14px;font-weight:700;padding:7px 12px;border-radius:14px;white-space:nowrap;box-shadow:0 6px 16px rgba(0,0,0,.3);opacity:0;transition:opacity .3s}
.bubble.show{opacity:1}
.cat.walk .leg{transform-box:fill-box;transform-origin:top center}
.walker.moving .cat.walk .l1,.walker.moving .cat.walk .l4{animation:adh-leg .5s ease-in-out infinite alternate}
.walker.moving .cat.walk .l2,.walker.moving .cat.walk .l3{animation:adh-leg .5s ease-in-out infinite alternate-reverse}
@keyframes adh-leg{from{transform:rotate(18deg)}to{transform:rotate(-18deg)}}
.cat .tail{transform-box:fill-box;transform-origin:bottom right;animation:adh-tail 2.4s ease-in-out infinite}
@keyframes adh-tail{50%{transform:rotate(-10deg)}}
.cat.sit .eyes{transform-box:fill-box;transform-origin:center;animation:adh-blink 6s infinite}
@keyframes adh-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
.cat .z text{fill:#c9d4ff;font:700 13px system-ui;animation:adh-z 3s ease-in-out infinite}.cat .z text+text{animation-delay:1.2s}
@keyframes adh-z{0%{opacity:0;transform:translateY(6px)}40%{opacity:1}100%{opacity:0;transform:translateY(-8px)}}
.foot{position:relative;z-index:1;text-align:center;color:rgba(255,255,255,.25);font-size:11px;margin-top:6px}
@media (max-width:600px){.root{padding:12px}.clock{font-size:46px}.wxbox{border:0;padding:0}.chips{margin-left:0}.grid{column-width:100%}}
@media (prefers-reduced-motion:reduce){.cloud,.drop,.flake,.star,.flash{animation:none;display:none}}
`;

/* ---------------- Kart ---------------- */
class AdHomeCard extends HTMLElement {
  static getStubConfig() { return { demo: true }; }
  setConfig(config) {
    this._config = { lang: 'tr', cat: true, weather_effects: true, ...(config || {}) };
    this._t = ADH_TXT[this._config.lang] || ADH_TXT.tr;
    ADH_PCT.v = this._config.lang;
    if (this._config.demo && !this._demo) { this._demo = adhDemoHass(); this._demo._card = this; }
    this._sig = null;
    if (this._root) this._renderAll(true);
  }
  set hass(h) {
    if (this._config && this._config.demo) h = this._demo;
    this._hass = h;
    if (!this._root) this._build();
    this._renderAll(false);
  }
  get hass() { return this._hass; }
  getCardSize() { return 12; }

  connectedCallback() {
    this._clockT = setInterval(() => this._tick(), 15000);
    if (this._root) this._startCat();
  }
  disconnectedCallback() {
    clearInterval(this._clockT); clearInterval(this._camT); clearTimeout(this._catT);
  }

  _build() {
    const sh = this.shadowRoot || this.attachShadow({ mode: 'open' });
    sh.innerHTML = `<style>${ADH_CSS}</style><div class="root"><div class="wx"></div><div class="top"></div><div class="grid"></div><div class="foot">AD HOME v${ADH_VERSION}</div><div class="walker"><div class="bubble"></div><div class="in"></div></div></div>`;
    this._root = sh.querySelector('.root');
    sh.addEventListener('click', (e) => this._click(e));
    this._camT = setInterval(() => this._refreshCams(), 10000);
    this._startCat();
  }

  /* ---- yardımcılar ---- */
  _st(id) { return this._hass && this._hass.states[id]; }
  _name(s) {
    const id = s.entity_id, ov = (this._config.names || {})[id];
    return ov || (s.attributes && s.attributes.friendly_name) || id.split('.')[1].replace(/_/g, ' ');
  }
  _call(domain, service, data) { try { return this._hass.callService(domain, service, data); } catch (e) { return null; } }
  _night() { const h = new Date().getHours(); return h >= 23 || h < 7; }

  _collect() {
    const h = this._hass, cfg = this._config, hide = new Set(cfg.hide || []);
    const ents = h.entities || {}, devs = h.devices || {}, areas = h.areas || {};
    const rooms = new Map(), loose = [], cams = [], temps = [], people = [];
    let weather = cfg.weather ? h.states[cfg.weather] : null;
    for (const id of Object.keys(h.states).sort()) {
      if (hide.has(id)) continue;
      const s = h.states[id], dom = id.split('.')[0], e = ents[id] || {};
      if (e.hidden || e.hidden_by || e.entity_category) continue;
      if (dom === 'weather') { if (!weather) weather = s; continue; }
      if (dom === 'person') { people.push(s); continue; }
      const isTemp = dom === 'sensor' && s.attributes.device_class === 'temperature';
      const isHum = dom === 'sensor' && s.attributes.device_class === 'humidity';
      const areaId = e.area_id || (e.device_id && devs[e.device_id] && devs[e.device_id].area_id) || null;
      if (isTemp) { temps.push({ s, areaId }); continue; }
      if (isHum) continue;
      if (dom === 'camera') { cams.push(s); continue; }
      const known = [...ADH_TOGGLE, ...ADH_PRESS, 'climate', 'vacuum', 'media_player', 'cover', 'lock'];
      if (!known.includes(dom)) continue;
      if (ADH_PRESS.includes(dom) && !areaId) continue;
      if (cfg.cat_feed === id || cfg.cat_litter === id) continue;
      if (areaId && areas[areaId]) {
        if (!rooms.has(areaId)) rooms.set(areaId, { name: areas[areaId].name, items: [] });
        rooms.get(areaId).items.push(s);
      } else loose.push(s);
    }
    // nem değerleri: sıcaklıkla aynı odadaki nem sensörü
    const hum = {};
    for (const id of Object.keys(h.states)) {
      const s = h.states[id];
      if (id.startsWith('sensor.') && s.attributes.device_class === 'humidity') {
        const e = ents[id] || {}; const a = e.area_id || (e.device_id && devs[e.device_id] && devs[e.device_id].area_id);
        if (a && hum[a] == null) hum[a] = s.state;
      }
    }
    return { rooms, loose, cams, temps, people, weather, hum };
  }

  /* ---- çizim ---- */
  _renderAll(force) {
    if (!this._hass || !this._root) return;
    const d = this._collect();
    const sig = JSON.stringify([Object.keys(this._hass.states).length, ...[...d.rooms.values()].flatMap((r) => r.items.map((s) => [s.entity_id, s.state, s.attributes.temperature, s.attributes.battery_level, s.attributes.brightness])),
      d.loose.map((s) => [s.entity_id, s.state, s.attributes.temperature, s.attributes.battery_level]), d.temps.map((t) => t.s.state), d.people.map((p) => p.state),
      d.weather && [d.weather.state, d.weather.attributes.temperature], this._catInfo().key]);
    if (!force && sig === this._sig) return;
    this._sig = sig; this._data = d;
    this._renderTop(d); this._renderGrid(d); this._renderWx(d.weather);
  }
  _tick() { if (this._data) this._renderTop(this._data); this._renderWx(this._data && this._data.weather); }

  _renderTop(d) {
    const T = this._t, now = new Date(), loc = this._config.lang === 'en' ? 'en-GB' : 'tr-TR';
    const w = d.weather, wa = w ? w.attributes : {};
    const people = (this._config.people || d.people.map((p) => p.entity_id)).map((id) => this._st(id)).filter(Boolean);
    this._root.querySelector('.top').innerHTML = `
      <div class="clock">${now.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' })}</div>
      <div class="date"><b>${now.toLocaleDateString(loc, { weekday: 'long' })}</b>${now.toLocaleDateString(loc, { day: 'numeric', month: 'long' })}</div>
      ${w ? `<div class="wxbox"><ha-icon icon="${ADH_WXICON[w.state] || 'mdi:weather-cloudy'}"></ha-icon><div><span class="t">${Math.round(wa.temperature)}°</span>
        <small>${esc(T.wx[w.state] || w.state)}${wa.humidity != null ? ` · ${T.humidity} ${pct(wa.humidity)}` : ''}</small></div></div>` : ''}
      <div class="chips">${people.map((p) => `<div class="chip ${p.state === 'home' ? 'home' : ''}"><i></i>${esc(this._name(p))} · ${p.state === 'home' ? T.home : T.away}</div>`).join('')}</div>`;
  }

  _renderGrid(d) {
    const T = this._t, cards = [];
    // Durum: sıcaklıklar
    if (d.temps.length) {
      cards.push(`<div class="card"><h2>${T.status}</h2><div class="temps">${d.temps.map(({ s, areaId }) => `<div><span class="lb">${esc(this._name(s))}</span>
        <b>${num(s.state)}°</b>${areaId && d.hum[areaId] != null ? `<small>${T.humidity} ${pct(d.hum[areaId])}</small>` : ''}</div>`).join('')}</div></div>`);
    }
    // Kedi
    if (this._config.cat) cards.push(this._catCard());
    // Odalar
    // Hava + Özet + Hızlı kontrol
    if (d.weather) cards.push(this._wxCard(d.weather));
    cards.push(this._summaryCard(d));
    for (const [aid, r] of d.rooms) {
      const t = d.temps.find((x) => x.areaId === aid);
      cards.push(this._roomCard(r.name, r.items, t ? `${num(t.s.state)}°${d.hum[aid] != null ? ' · ' + pct(d.hum[aid]) : ''}` : ''));
    }
    // Odasız cihazlar: büyük kartlar kendi başına, küçükler "Diğer"
    const small = [];
    for (const s of d.loose) {
      const dom = s.entity_id.split('.')[0];
      if (['climate', 'vacuum', 'media_player'].includes(dom)) cards.push(`<div class="card"><h2>${esc(this._name(s))}</h2>${this._wide(s)}</div>`);
      else small.push(s);
    }
    if (small.length) cards.push(this._roomCard(T.other, small));
    for (const c of d.cams) cards.push(`<div class="card"><h2>${esc(this._name(c))}</h2>${this._camHTML(c)}</div>`);
    cards.push(this._dayCard());
    const g = this._root.querySelector('.grid');
    g.innerHTML = cards.length > (this._config.cat ? 1 : 0) ? cards.join('') : `${cards.join('')}<div class="empty">${T.empty}</div>`;
    this._refreshCams(true);
  }

  _roomCard(title, items, badge) {
    const tiles = [], wides = [];
    for (const s of items) {
      const dom = s.entity_id.split('.')[0];
      if (['climate', 'vacuum', 'media_player'].includes(dom)) wides.push(this._wide(s)); else tiles.push(this._tile(s));
    }
    return `<div class="card"><h2>${esc(title)}${badge ? `<span class="rt">${badge}</span>` : ''}</h2>${tiles.length ? `<div class="tiles">${tiles.join('')}</div>` : ''}${wides.map((w) => `<div style="margin-top:14px">${w}</div>`).join('')}</div>`;
  }

  _wxCard(w) {
    const T = this._t, a = w.attributes, fc = (this._fc && this._fc.id === w.entity_id ? this._fc.list : this._hass._forecast) || [];
    this._subForecast(w.entity_id);
    const ic = (c) => ADH_WXICON[c] || 'mdi:weather-cloudy';
    const det = [a.apparent_temperature != null ? `${T.feels} ${Math.round(a.apparent_temperature)}°` : '', a.humidity != null ? `${T.humidity} ${pct(a.humidity)}` : '',
      a.wind_speed != null ? `${T.wind} ${Math.round(a.wind_speed)} ${esc(a.wind_speed_unit || '')}` : ''].filter(Boolean);
    return `<div class="card"><h2>${T.weather}</h2><div class="wxnow"><ha-icon icon="${ic(w.state)}"></ha-icon><div><div class="t">${Math.round(a.temperature)}°</div></div>
      <div class="d"><b style="color:var(--adh-tx);font-size:15px">${esc(T.wx[w.state] || w.state)}</b><br>${det.join('<br>')}</div></div>
      ${fc.length ? `<div class="fc">${fc.slice(0, 5).map((f, i) => `<div><small>${i === 0 ? T.today : T.days[new Date(f.datetime).getDay()]}</small><ha-icon icon="${ic(f.condition)}"></ha-icon><br><b>${Math.round(f.temperature)}°</b> <i>${f.templow != null ? Math.round(f.templow) + '°' : ''}</i></div>`).join('')}</div>` : ''}</div>`;
  }
  _subForecast(id) {
    const h = this._hass;
    if (!h || h.demo || !h.connection || this._fcSub === id) return;
    this._fcSub = id;
    if (this._fcUnsub) { try { this._fcUnsub.then((u) => u()); } catch (e) {} }
    try {
      this._fcUnsub = h.connection.subscribeMessage((m) => { this._fc = { id, list: m.forecast || [] }; this._renderAll(true); },
        { type: 'weather/subscribe_forecast', forecast_type: 'daily', entity_id: id });
      this._fcUnsub.catch(() => { this._fcSub = null; });
    } catch (e) { this._fcSub = null; }
  }
  _dayCard() {
    const T = this._t, now = new Date(), hr = now.getHours(), loc = this._config.lang === 'en' ? 'en-GB' : 'tr-TR';
    const g = T.greet[hr < 6 ? 0 : hr < 12 ? 1 : hr < 18 ? 2 : 3];
    const sun = this._st('sun.sun'), tm = (v) => (v ? new Date(v).toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' }) : '--');
    let len = '';
    if (sun && sun.attributes.next_rising && sun.attributes.next_setting) {
      const a = new Date(sun.attributes.next_rising), b = new Date(sun.attributes.next_setting);
      const mins = ((b.getHours() * 60 + b.getMinutes()) - (a.getHours() * 60 + a.getMinutes()) + 1440) % 1440;
      len = `${Math.floor(mins / 60)} ${T.h} ${mins % 60} ${T.m}`;
    }
    const start = new Date(now.getFullYear(), 0, 1), doy = Math.floor((now - start) / 864e5) + 1;
    const wk = Math.ceil((doy + ((start.getDay() + 6) % 7)) / 7);
    const yearPct = Math.round((doy / (now.getFullYear() % 4 ? 365 : 366)) * 100);
    return `<div class="card"><h2>${T.day}<span class="rt">${T.week} ${wk}</span></h2>
      <div style="font-size:24px;font-weight:800;margin:2px 0 12px">${g}</div>
      ${sun ? `<div class="sum"><div><ha-icon icon="mdi:weather-sunset-up"></ha-icon><span><b>${tm(sun.attributes.next_rising)}</b><small>${T.sunrise}</small></span></div>
      <div><ha-icon icon="mdi:weather-sunset-down"></ha-icon><span><b>${tm(sun.attributes.next_setting)}</b><small>${T.sunset}</small></span></div></div>
      <div style="color:var(--adh-mut);font-size:13px;margin-top:10px">${T.daylen}: ${len}</div>` : ''}
      <div class="meter" style="margin:10px 0 2px"><i style="width:${yearPct}%"></i></div><small style="color:var(--adh-mut)">${now.getFullYear()} · ${pct(yearPct)}</small></div>`;
  }
  _summaryCard(d) {
    const T = this._t, all = [...[...d.rooms.values()].flatMap((r) => r.items), ...d.loose];
    const lights = all.filter((s) => s.entity_id.startsWith('light.')), on = lights.filter((s) => s.state === 'on');
    const scenes = Object.values(this._hass.states).filter((s) => s.entity_id.startsWith('scene.') || (s.entity_id.startsWith('script.') && !all.includes(s))).slice(0, 4);
    const items = [];
    const ac = all.find((s) => s.entity_id.startsWith('climate.'));
    if (ac) items.push(['mdi:air-conditioner', T.ac, ac.state === 'off' ? T.off : `${T[ac.state] || ac.state} · ${Math.round(ac.attributes.temperature)}°`]);
    const vc = all.find((s) => s.entity_id.startsWith('vacuum.'));
    if (vc) items.push(['mdi:robot-vacuum', T.vacuum, T.vac[vc.state] || vc.state]);
    const lk = all.find((s) => s.entity_id.startsWith('lock.'));
    if (lk) items.push(['mdi:lock', T.door, lk.state === 'locked' ? T.locked : T.unlocked]);
    const ppl = d.people.filter((p) => p.state === 'home').length;
    if (d.people.length) items.push(['mdi:home-heart', T.people, `${ppl}${T.of}${d.people.length}`]);
    const ids = lights.map((s) => s.entity_id);
    return `<div class="card"><h2>${T.summary}</h2>
      ${lights.length ? `<div class="row" style="padding:0"><ha-icon icon="mdi:lightbulb-group"></ha-icon><div class="nm"><b>${on.length}${T.of}${lights.length} ${T.lights_on}</b></div></div>
      <div class="meter"><i style="width:${Math.round((on.length / lights.length) * 100)}%"></i></div>` : ''}
      ${items.length ? `<div class="sum">${items.map(([i, a, b]) => `<div><ha-icon icon="${i}"></ha-icon><span><b>${esc(b)}</b><small>${esc(a)}</small></span></div>`).join('')}</div>` : ''}
      <div class="btns">${lights.length ? `<button class="btn" data-act="lights" data-svc="turn_off" data-ids="${esc(ids.join(','))}">${T.all_off}</button>
      <button class="btn" data-act="lights" data-svc="turn_on" data-ids="${esc(ids.join(','))}">${T.all_on}</button>` : ''}
      ${scenes.map((s) => `<button class="btn" data-act="press" data-id="${esc(s.entity_id)}">${esc(this._name(s))}</button>`).join('')}</div></div>`;
  }

  _tile(s) {
    const T = this._t, id = s.entity_id, dom = id.split('.')[0], a = s.attributes;
    const na = s.state === 'unavailable';
    let on = s.state === 'on', sub = na ? T.unavailable : on ? T.on : T.off, act = 'toggle';
    if (dom === 'cover') { on = s.state === 'open' || s.state === 'opening'; sub = on ? T.on : T.off; act = 'cover'; }
    if (dom === 'lock') { on = s.state === 'unlocked'; sub = s.state === 'locked' ? T.locked : T.unlocked; act = 'lock'; }
    if (ADH_PRESS.includes(dom)) { on = false; sub = ''; act = 'press'; }
    if (dom === 'light' && on && a.brightness) sub = pct(a.brightness / 2.55);
    const icon = a.icon || (dom === 'cover' && on ? 'mdi:curtains-closed' : ADH_ICON[dom] || 'mdi:help-circle');
    return `<button class="tile ${on ? 'on' : ''} ${na ? 'na' : ''}" data-act="${act}" data-id="${esc(id)}"><ha-icon icon="${esc(icon)}"></ha-icon><b>${esc(this._name(s))}</b><small>${esc(sub)}</small></button>`;
  }

  _wide(s) {
    const T = this._t, id = esc(s.entity_id), dom = s.entity_id.split('.')[0], a = s.attributes;
    if (dom === 'climate') {
      const off = s.state === 'off', modes = (a.hvac_modes || ['off', 'heat', 'cool', 'auto']).filter((m) => ['heat', 'cool', 'auto', 'heat_cool'].includes(m));
      const lbl = { heat: T.heat, cool: T.cool, auto: T.auto, heat_cool: T.auto };
      return `<div class="clim"><button class="round" data-act="tdown" data-id="${id}">−</button>
        <div class="tt"><b>${a.temperature != null ? Math.round(a.temperature) + '°' : '--'}</b><small>${T.inside} ${num(a.current_temperature)}°</small></div>
        <button class="round" data-act="tup" data-id="${id}">+</button></div>
        <div class="btns">${modes.map((m) => `<button class="btn ${s.state === m ? 'sel' : ''}" data-act="hvac" data-mode="${m}" data-id="${id}">${lbl[m]}</button>`).join('')}
        <button class="btn ${off ? 'blue' : ''}" data-act="hvac" data-mode="off" data-id="${id}">${off ? T.ac_is_off : T.ac_off}</button></div>`;
    }
    if (dom === 'vacuum') {
      const bat = a.battery_level;
      return `<div class="row"><ha-icon icon="mdi:robot-vacuum"></ha-icon><div class="nm"><b>${esc(this._name(s))}</b><small>${esc(T.vac[s.state] || s.state)}</small></div>
        ${bat != null ? `<div class="big">${pct(bat)}</div>` : ''}</div>
        <div class="btns"><button class="btn ${s.state === 'cleaning' ? 'sel' : ''}" data-act="vac" data-svc="start" data-id="${id}">${T.start}</button>
        <button class="btn" data-act="vac" data-svc="pause" data-id="${id}">${T.pause}</button>
        <button class="btn ${s.state === 'docked' ? 'sel' : ''}" data-act="vac" data-svc="return_to_base" data-id="${id}">${T.dock}</button></div>`;
    }
    if (dom === 'media_player') {
      const on = !['off', 'unavailable', 'standby'].includes(s.state);
      return `<div class="row"><ha-icon icon="mdi:television"></ha-icon><div class="nm"><b>${esc(this._name(s))}</b><small>${on ? esc(a.source || a.media_title || T.on) : T.off}</small></div>
        <button class="btn ${on ? 'sel' : ''}" style="flex:none" data-act="mp" data-svc="toggle" data-id="${id}">${on ? T.close : T.open}</button></div>
        ${on ? `<div class="btns"><button class="btn" data-act="mp" data-svc="volume_down" data-id="${id}">${T.vol_down}</button>
        <button class="btn ${a.is_volume_muted ? 'blue' : ''}" data-act="mute" data-id="${id}">${T.mute}</button>
        <button class="btn" data-act="mp" data-svc="volume_up" data-id="${id}">${T.vol_up}</button></div>` : ''}`;
    }
    return this._tile(s);
  }

  _camHTML(c) {
    return `<div class="cam" data-cam="${esc(c.entity_id)}">${this._hass.demo ? `<svg viewBox="0 0 160 90" style="position:absolute;inset:0;width:100%;height:100%"><defs><linearGradient id="adhg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20263a"/><stop offset="1" stop-color="#0c0f18"/></linearGradient></defs><rect width="160" height="90" fill="url(#adhg)"/><rect x="18" y="20" width="44" height="40" rx="3" fill="#2c3550"/><rect x="104" y="44" width="40" height="26" rx="4" fill="#3a2f45"/><rect x="0" y="70" width="160" height="20" fill="#1a1f2e"/><text x="8" y="10" fill="#9fb0d8" font-size="6" font-family="monospace">KAMERA · CANLI</text></svg>` : this._t.no_image}</div>`;
  }
  _refreshCams() {
    if (!this._root || !this._hass || this._hass.demo) return;
    this._root.querySelectorAll('.cam[data-cam]').forEach((el) => {
      const s = this._st(el.dataset.cam); if (!s || !s.attributes.access_token) return;
      const url = `/api/camera_proxy/${s.entity_id}?token=${s.attributes.access_token}&t=${Date.now()}`;
      const img = new Image(); img.onload = () => { el.textContent = ''; el.appendChild(img); }; img.src = url;
    });
  }

  /* ---- dokunuşlar ---- */
  _click(e) {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const id = b.dataset.id || '', s = id ? this._st(id) : null, dom = id ? id.split('.')[0] : '';
    switch (b.dataset.act) {
      case 'toggle': this._call(dom === 'light' || dom === 'switch' || dom === 'fan' || dom === 'input_boolean' ? dom : 'homeassistant', 'toggle', { entity_id: id }); break;
      case 'cover': this._call('cover', s && s.state === 'open' ? 'close_cover' : 'open_cover', { entity_id: id }); break;
      case 'lock': this._call('lock', s && s.state === 'locked' ? 'unlock' : 'lock', { entity_id: id }); break;
      case 'press': this._call(dom, dom === 'button' ? 'press' : 'turn_on', { entity_id: id }); break;
      case 'tup': case 'tdown': {
        const t = (+(s && s.attributes.temperature) || 22) + (b.dataset.act === 'tup' ? 1 : -1);
        this._call('climate', 'set_temperature', { entity_id: id, temperature: t }); break;
      }
      case 'lights': for (const x of (b.dataset.ids || '').split(',').filter(Boolean)) this._call('light', b.dataset.svc, { entity_id: x }); break;
      case 'hvac': this._call('climate', 'set_hvac_mode', { entity_id: id, hvac_mode: b.dataset.mode }); break;
      case 'vac': this._call('vacuum', b.dataset.svc, { entity_id: id }); break;
      case 'mp': this._call('media_player', b.dataset.svc, { entity_id: id }); break;
      case 'mute': this._call('media_player', 'volume_mute', { entity_id: id, is_volume_muted: !(s && s.attributes.is_volume_muted) }); break;
      case 'feed': case 'litter': {
        const eid = b.dataset.act === 'feed' ? this._catFeedId() : this._config.cat_litter; if (!eid) break;
        const d2 = eid.split('.')[0];
        this._call(d2, d2 === 'button' ? 'press' : d2 === 'script' ? 'turn_on' : 'turn_on', { entity_id: eid });
        if (b.dataset.act === 'feed') this._say(this._t.cat_meow[0], 4000);
        break;
      }
    }
  }

  /* ---------------- Kedi ---------------- */
  _catFeedId() {
    if (this._config.cat_feed) return this._config.cat_feed;
    if (this._hass && this._hass.demo) return 'button.kedi_mama';
    return null;
  }
  _catInfo() {
    const feed = this._catFeedId(), s = feed && this._st(feed);
    let hungry = false;
    if (s) {
      const last = Date.parse(s.state) || Date.parse(s.last_changed);
      hungry = !!last && Date.now() - last > 24 * 3600 * 1000;
    }
    const sleep = this._night();
    return { hungry, sleep, key: `${hungry}|${sleep}` };
  }
  _catCard() {
    const T = this._t, i = this._catInfo(), nm = this._config.cat_name || T.cat, col = this._config.cat_color;
    const [t1, t2] = i.hungry ? [T.cat_hungry_t, T.cat_hungry2] : i.sleep ? [T.cat_sleep, T.cat_sleep2] : [T.cat_awake, T.cat_awake2];
    const n = (s) => (nm === T.cat ? s : s.replace(T.cat, nm));
    return `<div class="card"><h2>${esc(nm)}</h2><div class="catcard"><div class="ic catspot">${i.sleep ? adhCatSVG('sleep', col) : '<div style="font-size:44px;text-align:center;opacity:.8">🐾</div>'}</div>
      <div><b>${esc(n(t1))}</b><small>${esc(t2)}</small></div></div>
      ${this._catFeedId() || this._config.cat_litter ? `<div class="btns">${this._catFeedId() ? `<button class="btn" data-act="feed">🍽 ${T.feed}</button>` : ''}
      ${this._config.cat_litter ? `<button class="btn" data-act="litter">🧹 ${T.litter}</button>` : ''}</div>` : ''}</div>`;
  }
  _say(text, ms = 4500) {
    const b = this._root && this._root.querySelector('.bubble'); if (!b) return;
    b.textContent = text; b.classList.add('show'); clearTimeout(this._sayT);
    this._sayT = setTimeout(() => b.classList.remove('show'), ms);
  }
  _startCat() {
    clearTimeout(this._catT);
    if (!this._root) return;
    const w = this._root.querySelector('.walker');
    if (!this._config || !this._config.cat) { w.style.display = 'none'; return; }
    const step = () => {
      if (!this.isConnected) return;
      const info = this._catInfo(), inner = w.querySelector('.in'), col = this._config.cat_color;
      if (info.sleep) { w.style.display = 'none'; this._catT = setTimeout(step, 60000); return; }
      w.style.display = '';
      const topB = this._root.querySelector('.top').getBoundingClientRect().bottom;
      let cards = [...this._root.querySelectorAll('.grid .card')].filter((c) => c.offsetWidth > 120);
      const low = cards.filter((c) => c.getBoundingClientRect().top - topB > 80);
      if (low.length) cards = low;
      if (!cards.length) { this._catT = setTimeout(step, 4000); return; }
      const rr = this._root.getBoundingClientRect();
      const k = cards[Math.floor(Math.random() * cards.length)].getBoundingClientRect();
      const x = Math.max(0, k.left - rr.left + 12 + Math.random() * Math.max(0, k.width - 150));
      const y = k.top - rr.top - 68;
      const cur = this._catPos || { x: 20, y: y };
      const dist = Math.hypot(x - cur.x, y - cur.y), dur = Math.max(1.2, dist / 90);
      w.classList.remove('sitting'); w.classList.add('moving'); inner.innerHTML = adhCatSVG('walk', col);
      w.classList.toggle('flip', x < cur.x);
      w.style.transitionDuration = dur + 's';
      w.style.transform = `translate(${x}px,${y}px)`;
      this._catPos = { x, y };
      this._catT = setTimeout(() => {
        w.classList.remove('moving');
        const r = Math.random();
        if (info.hungry && r < 0.5) { this._sitAt(w, x, y); this._say(this._t.cat_hungry, 6000); this._catT = setTimeout(step, 9000); }
        else if (r < 0.3) { this._sitAt(w, x, y); const s = this._t.cat_tired; this._say(s[Math.floor(Math.random() * s.length)]); this._catT = setTimeout(step, 7000 + Math.random() * 5000); }
        else if (r < 0.4) { const s = this._t.cat_meow; this._say(s[Math.floor(Math.random() * s.length)], 2500); this._catT = setTimeout(step, 1500); }
        else this._catT = setTimeout(step, 400 + Math.random() * 900);
      }, dur * 1000);
    };
    this._catT = setTimeout(step, 1500);
  }
  _sitAt(w, x, y) {
    w.classList.add('sitting'); w.querySelector('.in').innerHTML = adhCatSVG('sit', this._config.cat_color);
    w.style.transitionDuration = '0s'; w.style.transform = `translate(${x + 18}px,${y - 32}px)`;
  }

  /* ---------------- Hava efektleri ---------------- */
  _renderWx(w) {
    const box = this._root && this._root.querySelector('.wx'); if (!box) return;
    if (!this._config.weather_effects) { box.innerHTML = ''; return; }
    const st = w ? w.state : '', night = this._night() || st === 'clear-night', key = st + '|' + night;
    if (key === this._wxKey) return; this._wxKey = key;
    const R = (a, b) => a + Math.random() * (b - a); let h = '';
    const clouds = { cloudy: 6, partlycloudy: 3, fog: 7, rainy: 5, pouring: 6, 'lightning-rainy': 6, lightning: 5, snowy: 4, 'snowy-rainy': 5, windy: 4, 'windy-variant': 4 }[st] || 0;
    if (st === 'sunny' && !night) h += '<div class="sun"></div>';
    if (night && ['clear-night', 'sunny', 'partlycloudy', ''].includes(st)) for (let i = 0; i < 40; i++) h += `<i class="star" style="left:${R(0, 100)}%;top:${R(0, 60)}%;animation-delay:-${R(0, 4)}s;opacity:${R(0.3, 0.9)}"></i>`;
    for (let i = 0; i < clouds; i++) h += `<div class="cloud" style="top:${R(-4, 70)}%;animation-duration:${R(70, 130)}s;animation-delay:-${R(0, 130)}s;opacity:${st === 'fog' ? 1 : R(0.5, 1)}"></div>`;
    const rain = { rainy: 40, pouring: 80, 'lightning-rainy': 70, 'snowy-rainy': 25 }[st] || 0;
    for (let i = 0; i < rain; i++) h += `<i class="drop" style="left:${R(0, 100)}%;animation-duration:${R(0.6, 1.1)}s;animation-delay:-${R(0, 1.2)}s"></i>`;
    const snow = { snowy: 50, 'snowy-rainy': 20 }[st] || 0;
    for (let i = 0; i < snow; i++) h += `<i class="flake" style="left:${R(0, 100)}%;width:${R(3, 7)}px;height:${R(3, 7)}px;animation-duration:${R(8, 16)}s;animation-delay:-${R(0, 16)}s"></i>`;
    if (st === 'lightning' || st === 'lightning-rainy') h += '<div class="flash"></div>';
    box.innerHTML = h;
  }
}
customElements.get('ad-home-card') || customElements.define('ad-home-card', AdHomeCard);

/* ---------------- Dashboard stratejisi: strategy: type: custom:ad-home ---------------- */
class AdHomeStrategy extends HTMLElement {
  static async generate(config) {
    const card = { type: 'custom:ad-home-card' };
    for (const k of Object.keys(config || {})) if (k !== 'type') card[k] = config[k];
    return { title: 'AD HOME', views: [{ title: 'AD HOME', path: 'ad-home', type: 'panel', cards: [card] }] };
  }
}
customElements.get('ll-strategy-dashboard-ad-home') || customElements.define('ll-strategy-dashboard-ad-home', AdHomeStrategy);
customElements.get('ll-strategy-ad-home') || customElements.define('ll-strategy-ad-home', class extends AdHomeStrategy {});

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === 'ad-home-card')) {
  window.customCards.push({ type: 'ad-home-card', name: 'AD HOME', description: 'Tam ekran akıllı ev paneli, gezen kedisiyle', preview: true });
}
console.info(`%c AD HOME %c v${ADH_VERSION} `, 'background:#f2c94c;color:#2a2205;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px', 'background:#2a1d48;color:#fff;border-radius:0 4px 4px 0;padding:2px 6px');
