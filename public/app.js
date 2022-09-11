const featured = document.getElementById("featured");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

const featuredPokemons = [
  {
    name: "Charizard",
    ability: "Blaze",
    type: "🔥",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  },
  {
    name: "Staryu",
    ability: "Natural Cure",
    type: "🌊",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
  },
  {
    name: "Marshadow",
    ability: "Technician",
    type: "👻",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png",
  },
  {
    name: "Dracovish",
    ability: "Water Absorb",
    type: "🌊",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/882.png",
  },
  {
    name: "Rillaboom",
    ability: "Overgrow",
    type: "🌱",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/812.png",
  },
  {
    name: "Gurdurr",
    ability: "Sheer Force",
    type: "💪",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/533.png",
  },
];

function generateCard(arr, appendElement) {
  console.log("please work");
  arr.forEach(({ name, imgUrl, type, ability }) => {
    // create a card
    const card = document.createElement("div");
    card.className = "card";

    // create an image element for card
    const imageElement = document.createElement("img");
    imageElement.className = "card-img";
    imageElement.setAttribute("src", imgUrl);
    imageElement.setAttribute("alt", name);

    // create a details div
    const details = document.createElement("div");
    details.className = "details";

    // spans for details
    const pokeName = document.createElement("span");
    pokeName.className = "txt-dark";
    pokeName.innerText = `${name}`;

    const pokeAbility = document.createElement("span");
    pokeAbility.className = "txt-light";
    pokeAbility.innerText = `Ability: ${ability}`;

    // badge
    const badge = document.createElement("div");
    badge.className = "badge";

    // text for badge
    const pokeType = document.createElement("span");
    pokeType.innerText = `${type}`;
    badge.appendChild(pokeType);

    details.appendChild(pokeName);
    details.appendChild(pokeAbility);
    card.appendChild(imageElement);
    card.appendChild(details);
    card.appendChild(badge);

    appendElement.appendChild(card);
  });
}
generateCard(featuredPokemons, featured);

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
