import { cleanLink } from './cleaner.js';
import { loadPartial } from "./pageLoad.js"

const input = document.getElementById('linkInput');
const clearBtn = document.getElementById('clearBtn');

let isCleaned = false;
let timeout = null;

function button(value) {
    const show = value.length > 0;
    clearBtn.classList.toggle('hidden', !show);
}

clearBtn.addEventListener('click', () => {
    input.value = '';
    button('');     
});

input.addEventListener('input', () => {
    if (isCleaned) return;

    const value = input.value.trim();
    button(value);
    if (!value) return;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const cleaned = cleanLink(value);

        if (cleaned && cleaned !== value) {
            isCleaned = true;
            input.value = cleaned;
            isCleaned = false;
            button(cleaned);
        }
    }, 300);
});


loadPartial("footer-section", "assets/partials/footer.html");