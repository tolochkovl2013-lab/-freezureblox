// =========================================
//  AZURE BLOX — лёгкая версия
// =========================================

// Ссылка на Discord-инвайт сервера
const INVITE_URL = "https://discord.gg/2vQUrVNZ5";

// Год в подвале + логирование
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log("Azure Blox site loaded. Invite:", INVITE_URL);
});