# 🧩 Angular Pokémon Demo App

A demo Angular 19 standalone component application that displays the first 151 Pokémon from the PokéAPI. It includes pagination, dynamic loading indicators, modals for details, and Netlify auto-deployment via Github Actions.

---

## 📸 Features

- Angular 19 standalone components
- Fetches Pokémon data using offset/limit from [PokéAPI v2](https://pokeapi.co/)
- Responsive pagination (max 7 buttons, centered current page)
- Modal popup with Pokémon details
- Loader using `@defer { } @loading { }` block
- Signals + computed + effect for reactive updates
- Auto deploy to Netlify via GitHub Actions

---

## 🛠️ Installation & Development

```bash
# Clone the project
git clone https://github.com/your-username/pokemon-demo.git
cd pokemon-demo

# Install dependencies
npm install

# Run the app locally
ng serve

# Build the app
ng build

---

## 🚀 Live Demo
[https://680700535d31ac0008150b87--bangkitwira.netlify.app/](https://680700535d31ac0008150b87--bangkitwira.netlify.app/)
