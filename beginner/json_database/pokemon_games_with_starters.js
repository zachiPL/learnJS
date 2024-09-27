
const database = [
    {
        "id": 1, "title": "Pokémon Red and Blue", "release_date": "1996-02-27", "platform": "Game Boy",
        "starters": [{ "name": "Bulbasaur", "pokedex_id": 1, "element": "Grass" },
        { "name": "Charmander", "pokedex_id": 4, "element": "Fire" },
        { "name": "Squirtle", "pokedex_id": 7, "element": "Water" }]
    },
    {
        "id": 2, "title": "Pokémon Yellow", "release_date": "1998-09-12", "platform": "Game Boy",
        "starters": [{ "name": "Pikachu", "pokedex_id": 25, "element": "Electric" }]
    },
    {
        "id": 3, "title": "Pokémon Gold and Silver", "release_date": "1999-11-21", "platform": "Game Boy Color",
        "starters": [{ "name": "Chikorita", "pokedex_id": 152, "element": "Grass" },
        { "name": "Cyndaquil", "pokedex_id": 155, "element": "Fire" },
        { "name": "Totodile", "pokedex_id": 158, "element": "Water" }]
    },
    {
        "id": 4, "title": "Pokémon Crystal", "release_date": "2000-12-14", "platform": "Game Boy Color",
        "starters": [{ "name": "Chikorita", "pokedex_id": 152, "element": "Grass" },
        { "name": "Cyndaquil", "pokedex_id": 155, "element": "Fire" },
        { "name": "Totodile", "pokedex_id": 158, "element": "Water" }]
    },
    {
        "id": 5, "title": "Pokémon Ruby and Sapphire", "release_date": "2002-11-21", "platform": "Game Boy Advance",
        "starters": [{ "name": "Treecko", "pokedex_id": 252, "element": "Grass" },
        { "name": "Torchic", "pokedex_id": 255, "element": "Fire" },
        { "name": "Mudkip", "pokedex_id": 258, "element": "Water" }]
    },
    {
        "id": 6, "title": "Pokémon FireRed and LeafGreen", "release_date": "2004-01-29", "platform": "Game Boy Advance",
        "starters": [{ "name": "Bulbasaur", "pokedex_id": 1, "element": "Grass" },
        { "name": "Charmander", "pokedex_id": 4, "element": "Fire" },
        { "name": "Squirtle", "pokedex_id": 7, "element": "Water" }]
    },
    {
        "id": 7, "title": "Pokémon Emerald", "release_date": "2004-09-16", "platform": "Game Boy Advance",
        "starters": [{ "name": "Treecko", "pokedex_id": 252, "element": "Grass" },
        { "name": "Torchic", "pokedex_id": 255, "element": "Fire" },
        { "name": "Mudkip", "pokedex_id": 258, "element": "Water" }]
    },
    {
        "id": 8, "title": "Pokémon Diamond and Pearl", "release_date": "2006-09-28", "platform": "Nintendo DS",
        "starters": [{ "name": "Turtwig", "pokedex_id": 387, "element": "Grass" },
        { "name": "Chimchar", "pokedex_id": 390, "element": "Fire" },
        { "name": "Piplup", "pokedex_id": 393, "element": "Water" }]
    },
    {
        "id": 9, "title": "Pokémon Platinum", "release_date": "2008-09-13", "platform": "Nintendo DS",
        "starters": [{ "name": "Turtwig", "pokedex_id": 387, "element": "Grass" },
        { "name": "Chimchar", "pokedex_id": 390, "element": "Fire" },
        { "name": "Piplup", "pokedex_id": 393, "element": "Water" }]
    },
    {
        "id": 10, "title": "Pokémon HeartGold and SoulSilver", "release_date": "2009-09-12", "platform": "Nintendo DS",
        "starters": [{ "name": "Chikorita", "pokedex_id": 152, "element": "Grass" },
        { "name": "Cyndaquil", "pokedex_id": 155, "element": "Fire" },
        { "name": "Totodile", "pokedex_id": 158, "element": "Water" }]
    },
    {
        "id": 11, "title": "Pokémon Black and White", "release_date": "2010-09-18", "platform": "Nintendo DS",
        "starters": [{ "name": "Snivy", "pokedex_id": 495, "element": "Grass" },
        { "name": "Tepig", "pokedex_id": 498, "element": "Fire" },
        { "name": "Oshawott", "pokedex_id": 501, "element": "Water" }]
    },
    {
        "id": 12, "title": "Pokémon Black 2 and White 2", "release_date": "2012-06-23", "platform": "Nintendo DS",
        "starters": [{ "name": "Snivy", "pokedex_id": 495, "element": "Grass" },
        { "name": "Tepig", "pokedex_id": 498, "element": "Fire" },
        { "name": "Oshawott", "pokedex_id": 501, "element": "Water" }]
    },
    {
        "id": 13, "title": "Pokémon X and Y", "release_date": "2013-10-12", "platform": "Nintendo 3DS",
        "starters": [{ "name": "Chespin", "pokedex_id": 650, "element": "Grass" },
        { "name": "Fennekin", "pokedex_id": 653, "element": "Fire" },
        { "name": "Froakie", "pokedex_id": 656, "element": "Water" }]
    },
    {
        "id": 14, "title": "Pokémon Omega Ruby and Alpha Sapphire", "release_date": "2014-11-21", "platform": "Nintendo 3DS",
        "starters": [{ "name": "Treecko", "pokedex_id": 252, "element": "Grass" },
        { "name": "Torchic", "pokedex_id": 255, "element": "Fire" },
        { "name": "Mudkip", "pokedex_id": 258, "element": "Water" }]
    },
    {
        "id": 15, "title": "Pokémon Sun and Moon", "release_date": "2016-11-18", "platform": "Nintendo 3DS",
        "starters": [{ "name": "Rowlet", "pokedex_id": 722, "element": "Grass" },
        { "name": "Litten", "pokedex_id": 725, "element": "Fire" },
        { "name": "Popplio", "pokedex_id": 728, "element": "Water" }]
    },
    {
        "id": 16, "title": "Pokémon Ultra Sun and Ultra Moon", "release_date": "2017-11-17", "platform": "Nintendo 3DS",
        "starters": [{ "name": "Rowlet", "pokedex_id": 722, "element": "Grass" },
        { "name": "Litten", "pokedex_id": 725, "element": "Fire" },
        { "name": "Popplio", "pokedex_id": 728, "element": "Water" }]
    },
    {
        "id": 17, "title": "Pokémon Let's Go, Pikachu! and Let's Go, Eevee!", "release_date": "2018-11-16", "platform": "Nintendo Switch",
        "starters": [{ "name": "Pikachu", "pokedex_id": 25, "element": "Electric" },
        { "name": "Eevee", "pokedex_id": 133, "element": "Normal" }]
    },
    {
        "id": 18, "title": "Pokémon Sword and Shield", "release_date": "2019-11-15", "platform": "Nintendo Switch",
        "starters": [{ "name": "Grookey", "pokedex_id": 810, "element": "Grass" },
        { "name": "Scorbunny", "pokedex_id": 813, "element": "Fire" },
        { "name": "Sobble", "pokedex_id": 816, "element": "Water" }]
    }
]