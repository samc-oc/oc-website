/**
 * Lucide icons (design system §3: Lucide exclusively, static SVG, zero client JS).
 * Imported raw at build time via lucide-static; rendered inline by Icon.astro.
 */
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import camera from 'lucide-static/icons/camera.svg?raw';
import chartColumn from 'lucide-static/icons/chart-column.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';
import chevronDown from 'lucide-static/icons/chevron-down.svg?raw';
import chevronRight from 'lucide-static/icons/chevron-right.svg?raw';
import circleCheck from 'lucide-static/icons/circle-check.svg?raw';
import clock from 'lucide-static/icons/clock.svg?raw';
import cloud from 'lucide-static/icons/cloud.svg?raw';
import creditCard from 'lucide-static/icons/credit-card.svg?raw';
import database from 'lucide-static/icons/database.svg?raw';
import eye from 'lucide-static/icons/eye.svg?raw';
import fileText from 'lucide-static/icons/file-text.svg?raw';
import globe from 'lucide-static/icons/globe.svg?raw';
import graduationCap from 'lucide-static/icons/graduation-cap.svg?raw';
import hardDrive from 'lucide-static/icons/hard-drive.svg?raw';
import headset from 'lucide-static/icons/headset.svg?raw';
import keyRound from 'lucide-static/icons/key-round.svg?raw';
import laptop from 'lucide-static/icons/laptop.svg?raw';
import lock from 'lucide-static/icons/lock.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import mapPin from 'lucide-static/icons/map-pin.svg?raw';
import megaphone from 'lucide-static/icons/megaphone.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import messageCircle from 'lucide-static/icons/message-circle.svg?raw';
import monitor from 'lucide-static/icons/monitor.svg?raw';
import network from 'lucide-static/icons/network.svg?raw';
import penLine from 'lucide-static/icons/pen-line.svg?raw';
import phone from 'lucide-static/icons/phone.svg?raw';
import refreshCw from 'lucide-static/icons/refresh-cw.svg?raw';
import search from 'lucide-static/icons/search.svg?raw';
import server from 'lucide-static/icons/server.svg?raw';
import settings from 'lucide-static/icons/settings.svg?raw';
import share2 from 'lucide-static/icons/share-2.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import shoppingCart from 'lucide-static/icons/shopping-cart.svg?raw';
import timer from 'lucide-static/icons/timer.svg?raw';
import triangleAlert from 'lucide-static/icons/triangle-alert.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import video from 'lucide-static/icons/video.svg?raw';
import wifi from 'lucide-static/icons/wifi.svg?raw';
import wrench from 'lucide-static/icons/wrench.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';
import zap from 'lucide-static/icons/zap.svg?raw';

/* Brand glyphs (LinkedIn / Facebook) — Lucide dropped brand icons, so these
 * are minimal inline equivalents matching the 24px / currentColor pattern. */
const linkedin = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
const facebook = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;

export const icons: Record<string, string> = {
  'arrow-right': arrowRight,
  camera,
  'chart-column': chartColumn,
  check,
  'chevron-down': chevronDown,
  'chevron-right': chevronRight,
  'circle-check': circleCheck,
  clock,
  cloud,
  'credit-card': creditCard,
  database,
  eye,
  facebook,
  'file-text': fileText,
  globe,
  'graduation-cap': graduationCap,
  'hard-drive': hardDrive,
  headset,
  'key-round': keyRound,
  laptop,
  linkedin,
  lock,
  mail,
  'map-pin': mapPin,
  megaphone,
  menu,
  'message-circle': messageCircle,
  monitor,
  network,
  'pen-line': penLine,
  phone,
  'refresh-cw': refreshCw,
  search,
  server,
  settings,
  'share-2': share2,
  'shield-check': shieldCheck,
  'shopping-cart': shoppingCart,
  timer,
  'triangle-alert': triangleAlert,
  users,
  video,
  wifi,
  wrench,
  x,
  zap,
};
