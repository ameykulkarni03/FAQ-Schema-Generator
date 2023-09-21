// JavaScript code for FAQ Schema Generator

// Function to generate JSON-LD schema
function generateSchema() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    // Validate input
    if (!question || !answer) {
        alert("Please enter both a question and an answer.");
        return;
    }

    // Create the JSON-LD schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": {
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        }
    };

    // Display the JSON-LD code
    const schemaCode = document.getElementById('schema-code');
    schemaCode.textContent = JSON.stringify(schema, null, 2);
}

// Event listener to trigger schema generation
document.getElementById('generate-schema').addEventListener('click', generateSchema);
// Event listener to trigger schema generation
