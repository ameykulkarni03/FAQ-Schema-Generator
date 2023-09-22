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
    
    const question = document.getElementById('question').value;
  
    const answer = document.getElementById('answer').value;
    
    // Validate input
    if (!question || !answer) {
        alert("Please enter both a question and an answer.");
        return;
    }

    // Create the JSON-LD schema as an array with a single item
    const schema = 
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answer
                    }
                }
            ]
        };
   
    // Convert the schema to a JSON string
    const schemaJson = JSON.stringify(schema, null, 2);

    // Generate the HTML markup with the <script> tag
    const scriptTag = `<script type="application/ld+json">${schemaJson}</script>`;
    
    // Display the generated HTML code
    const schemaCode = document.getElementById('schema-code');
    schemaCode.textContent = scriptTag;
}

// Event listener to trigger schema generation
const clicked = document.getElementById('generate-schema')
clicked.addEventListener('click', generateSchema);
// Event listener to trigger FAQ pair addition
document.getElementById('add-faq').addEventListener('click', addFAQPair);
