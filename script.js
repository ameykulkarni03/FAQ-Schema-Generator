// JavaScript code for FAQ Schema Generator

// Function to add a new FAQ pair
function addFAQPair() {
    const faqPairs = document.getElementById('faq-pairs');
    const faqPair = document.querySelector('.faq-pair'); // Get the first pair

    if (faqPair) {
        const clonedFaqPair = faqPair.cloneNode(true); // Clone the first pair

        // Add a delete button to the cloned pair
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            faqPairs.removeChild(clonedFaqPair); // Remove the clicked pair
        });

        clonedFaqPair.appendChild(deleteButton);
        faqPairs.appendChild(clonedFaqPair); // Append the cloned pair with the delete button
    }
}

// Function to generate JSON-LD schema
function generateSchema() {
    const faqPairs = document.querySelectorAll('.faq-pair');
    const faqs = [];

    // Iterate through each FAQ pair and add them to the array
    faqPairs.forEach(faqPair => {
        const question = faqPair.querySelector('.question').value;
        const answer = faqPair.querySelector('.answer').value;

        if (question && answer) {
            faqs.push({
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer
                }
            });
        }
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs
    };

    // Display the JSON-LD code
    const schemaCode = document.getElementById('schema-code');
    schemaCode.textContent = JSON.stringify(schema, null, 2);
}

// Event listener to trigger FAQ pair addition
document.getElementById('add-faq').addEventListener('click', addFAQPair);

// Event listener to trigger schema generation
document.getElementById('generate-schema').addEventListener('click', generateSchema);
