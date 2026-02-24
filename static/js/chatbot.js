let questions = [
  {
    question: "Do you feel happy?",
    options: {
      a: "Yes",
      b: "No"
    },
    correctAnswer: "a",
    correctResponse: "Super!",
    incorrectResponse: "I am sorry."
  },
  {
    question: "Do you like coding?",
    options: {
      a: "Absolutely",
      b: "Not really"
    },
    correctAnswer: "a",
    correctResponse: "That's awesome!",
    incorrectResponse: "That's okay! Not everyone does."
  },
  {
    question: "Do you like climbing?",
    options: {
      a: "Yes, I love it!",
      b: "No, not really"
    },
    correctAnswer: "a",
    correctResponse: "Climbing is amazing!",
    incorrectResponse: "Fair enough, it's not for everyone."
  },
  {
    question: "Do you want to go hiking this summer?",
    options: {
      a: "Yes, totally!",
      b: "Nah, too much effort"
    },
    correctAnswer: "a",
    correctResponse: "Great! Nature is refreshing.",
    incorrectResponse: "Lazy summer days can be nice too."
  }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let optionsHTML = Object.keys(currentQuestion.options)
    .map(key => `${key}. ${currentQuestion.options[key]}`)
    .join(' | ');

  let botResponse = document.createElement("div");
  botResponse.classList.add("message", "bot");
  botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;

  chatContainer.appendChild(botResponse);
  scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let userResponse = userInput.value.trim().toLowerCase();
  if (!userResponse) return;

  let userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");
  userMessage.innerHTML = `<strong>You:</strong> ${userInput.value}`;
  chatContainer.appendChild(userMessage);

  let currentQuestion = questions[currentQuestionIndex];
  let botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");

  if (userResponse === currentQuestion.correctAnswer) {
    botMessage.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
  } else {
    botMessage.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
  }

  chatContainer.appendChild(botMessage);

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  displayQuestion();
  scrollChatContainerToBottom();
});
