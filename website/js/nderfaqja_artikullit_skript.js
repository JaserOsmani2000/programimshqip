let butoniHeader = document.getElementById("butoni--header");
let butoniParagrafiKryesor = document.getElementById("butoni--paragrafi--kryesor");

butoniHeader.addEventListener("click", function(){
  const label = document.createElement("label");
  label.textContent = "Titulli <h2>:";
  label.className = 'label--h2';
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "<h2>";
  input.className = 'input--text';

  const targetDiv = document.getElementById('permbajtja');
  targetDiv.appendChild(label);
  targetDiv.appendChild(input); // e shton inputin në div
});

butoniParagrafiKryesor.addEventListener("click", function(){
  const label = document.createElement("label");
  label.textContent = "Paragrafi Kryesor";
  label.className = "label--paragrafi--kryesor";
  label.setAttribute("for", "textarea--paragrafi--kryesor");

  const textarea = document.createElement("textarea");
  textarea.rows = 4;
  // textarea.cols = 120;
  textarea.className = "textarea--paragrafi--kryesor";
  textarea.placeholder = "Paragrafi Kryesor...";

  const wrapper = document.createElement("div");
  wrapper.style.marginBottom = "1.2rem";

  // shto label + textarea në wrapper
  wrapper.appendChild(label);
  wrapper.appendChild(textarea);

  const targetDiv = document.getElementById("permbajtja");
  targetDiv.appendChild(wrapper);
});