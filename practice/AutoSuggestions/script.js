const searchInput = document.getElementById('input');
const autocompleteContainer = document.getElementById('suggestions');

const SUGGESTIONS_DATA = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
    "Indian Fig",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla Bean",
    "Watermelon",
    "Xigua",
    "Yellow Passion Fruit",
    "Zucchini"
];

// function throttling(showAutoSuggestions, delay) {
//     let lastCallTime = 0;
//     return function(...args) {
//         const now = new Date().getTime();
//         if (now - lastCallTime >= delay) {
//             showAutoSuggestions(...args);
//             lastCallTime = now;
//         }
//     }
// }

function debounce(callback, wait) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => callback(...args), wait);
    };
}

function showAutoSuggestions(query) {
    console.log("showAutoSuggestions called => " + query);
    autocompleteContainer.innerHTML = '';

    if (query.length > 0) {
        const filteredAutoSuggestions = SUGGESTIONS_DATA.filter(item => {
            return item.toLowerCase().includes(query.toLowerCase())
        });

        filteredAutoSuggestions.forEach(item => {
            const suggestedDiv = document.createElement("div");
            suggestedDiv.textContent = item;
            suggestedDiv.onclick = () => {
                searchInput.value = item;
                autocompleteContainer.innerHTML = '';
            }
            autocompleteContainer.appendChild(suggestedDiv);
        });

    }
}

// const throttleFunction = throttling(showAutoSuggestions, 2000);
const debounceFunction = debounce(showAutoSuggestions, 500);

searchInput.addEventListener('input', (event) => {
    // throttleFunction(event.target.value);
    debounceFunction(event.target.value);
})
