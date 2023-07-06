const body = document.querySelector("body");

const card = document.createElement("div");

card.id = "div_card";

body.appendChild(card);

const container_photo = document.createElement("div");
container_photo.id = "div_photo";

const container_describle = document.createElement("div");
container_describle.id = "div_describle";

card.appendChild(container_photo);
card.appendChild(container_describle);

const text = document.createElement("p");
text.id = "p_text";
text.innerText = "Funcionario em treinamento";

container_describle.appendChild(text);
