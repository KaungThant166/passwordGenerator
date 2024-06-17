const generate = () => {
  const textBox = document.getElementById("textBox").value;
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
  const allChars = uppercase + lowercase + numbers + symbols;
  let password = "";
  for (i = 0; i < textBox.length; i++) {
    const radomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[radomIndex];
  }
  document.getElementById("result").textContent = password;
};
