const chatBox = document.getElementById("chatBox");

const userInput = document.getElementById("userInput");


// SEND MESSAGE

function sendMessage(event) {

    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }


    // User message
    addMessage(message, "user");


    // Input clear
    userInput.value = "";


    // Bot response
    setTimeout(function () {

        const response = getBotResponse(message);

        addMessage(response, "bot");

    }, 700);

}



// ADD MESSAGE

function addMessage(message, sender) {

    const div = document.createElement("div");

    div.className = "message " + sender;


    const avatar =
        sender === "bot"
        ? "⚡"
        : "👤";


    const name =
        sender === "bot"
        ? "Code Hunter"
        : "You";


    div.innerHTML = `

        <div class="avatar">
            ${avatar}
        </div>

        <div class="bubble">

            <strong>
                ${name}
            </strong>

            <p>
                ${message}
            </p>

        </div>

    `;


    chatBox.appendChild(div);


    chatBox.scrollTop = chatBox.scrollHeight;

}



// QUICK QUESTION

function askQuestion(question) {

    userInput.value = question;

    userInput.focus();

}



// BOT RESPONSE

function getBotResponse(message) {

    const text = message.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        return `
            Hello 👋

            I'm Code Hunter.

            What coding project are you working on?
        `;

    }


    if (text.includes("javascript")) {

        return `

            JavaScript is used to make websites
            interactive.

            Example:

            <br><br>

            <code>
            console.log("Hello Code Hunter");
            </code>

        `;

    }


    if (text.includes("python")) {

        return `

            Here's a simple Python program:

            <br><br>

            <code>
            name = input("Enter your name:")<br>
            print("Hello", name)
            </code>

        `;

    }


    if (
        text.includes("debug") ||
        text.includes("error")
    ) {

        return `

            🐛 Sure!

            Send me your code and the error
            you're getting.

            I'll help you find the problem.

        `;

    }


    if (text.includes("html")) {

        return `

            HTML creates the structure of a webpage.

            <br><br>

            Example:

            <br><br>

            <code>
            &lt;h1&gt;Hello World&lt;/h1&gt;
            </code>

        `;

    }


    return `

        🤖 I'm Code Hunter.

        <br><br>

        You asked:

        <strong>
            ${message}
        </strong>

        <br><br>

        This is currently the demo version.

        Later we can connect me to an AI API
        so I can actually generate and debug code.

    `;

}



// NEW CHAT

function newChat() {

    chatBox.innerHTML = "";


    addMessage(

        `
        New chat started! 🚀

        <br><br>

        What coding problem can I help you solve?
        `,

        "bot"

    );

}
