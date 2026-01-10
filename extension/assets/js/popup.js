import { cleanLink } from './cleaner.js';

const input = document.getElementById('linkInput');

input.addEventListener('input', async () => {
  const value = input.value.trim();
  if (!value) return;

  const cleaned = cleanLink(value);
  if (!cleaned || cleaned === value) return;

  input.value = cleaned;
  await navigator.clipboard.writeText(cleaned);
});
