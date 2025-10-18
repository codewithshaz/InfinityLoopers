    document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitPrompt");
  const userPrompt = document.getElementById("userPrompt");
  const responseBox = document.getElementById("responseBox");

  submitButton.addEventListener("click", () => {
    const promptText = userPrompt.value.trim();

    if (promptText === "") {
      alert("Please enter your goal or interest!");
      return;
    }

    // Simulated AI response
    const fakeResponse = `✅ Great! Based on your interest in "${promptText}", 
AI Career Navigator will recommend top career paths, 
required skills, and personalized learning resources.`;

    responseBox.style.display = "block";
    responseBox.textContent = fakeResponse;
  });
});