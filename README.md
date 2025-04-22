# 🧩 Angular Pokémon Demo App

A demo Angular 19 standalone component application that displays the first 151 Pokémon from the PokéAPI. It includes pagination, dynamic loading indicators, modals for details.

---

## 📸 Features

- Angular 19 standalone components
- Fetches Pokémon data using offset/limit from [PokéAPI v2](https://pokeapi.co/)
- Responsive pagination (max 7 buttons, centered current page)
- Modal popup with Pokémon details
- Loader using `@defer { } @loading { }` block
- Signals + computed + effect for reactive updates

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
