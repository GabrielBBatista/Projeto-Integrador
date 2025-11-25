const cards = [
    { name: "Pesquisa De Professores", image: "https://s3.duellinksmeta.com/pkm_img/cards/672181b7c08874f5ab2e1700_w360.webp" },
    { name: "Poké Ball", image: "https://s3.duellinksmeta.com/pkm_img/cards/672181a6c08874f5ab2e16f0_w360.webp" },
    { name: "Cyrus", image: "https://s3.duellinksmeta.com/pkm_img/cards/6798ea0c6950657553dc675d_w260.webp" },
    { name: "Marte", image: "https://s3.duellinksmeta.com/pkm_img/cards/6799bdfaf06a47c6afdf7d92_w260.webp" },
    { name: "Capa gigante", image: "https://s3.duellinksmeta.com/pkm_img/cards/6798e48fb5fbced301dccc91_w360.webp" },
    { name: "Red", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e395dc575eceb838a24b19_w360.webp" },
    { name: "Doce Raro", image: "https://s3.duellinksmeta.com/pkm_img/cards/680a3bcc8bc31f24c36ad483_w360.webp" },
    { name: "Giratina EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/67dd6974e2096b41c50faf01_w360.webp" },
    { name: "Repelente", image: "https://s3.duellinksmeta.com/pkm_img/cards/6837fdf626d19a35a27b4b8b_w360.webp" },
    { name: "Leaf", image: "https://s3.duellinksmeta.com/pkm_img/cards/675ae88248e857c1219910f6_w360.webp" },
    { name: "Guzma", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811cf73819c204fd6cdd872_w360.webp" },
    { name: "Cartão Vermelho", image: "https://s3.duellinksmeta.com/pkm_img/cards/672181abc08874f5ab2e16fb_w360.webp" },
    { name: "Sabrina", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e25a3_w360.webp" },
    { name: "Irida", image: "https://s3.duellinksmeta.com/pkm_img/cards/67c07d5a52e93386721eec30_w360.webp" },
    { name: "Suicune EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/68a8700806f307803439410f_w360.webp" },
    { name: "Froakie", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e2519_w360.webp" },
    { name: "Greninja", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e251b_w360.webp" },
    { name: "Moça Do Centro Pokémon", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e395a2575eceb838a249c9_w260.webp" },
    { name: "Poção", image: "https://s3.duellinksmeta.com/pkm_img/cards/67216b665d66038af44d6d20_w360.webp" },
    { name: "Darkrai EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/6799b936f06a47c6afdf6601_w360.webp" },
    { name: "Oricorio", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811c4ebc0a4ec0168e8c1d1_w360.webp" },
    { name: "Lusamine", image: "https://s3.duellinksmeta.com/pkm_img/cards/6837fd2b26d19a35a27b44bd_w360.webp" },
    { name: "Eevee", image: "https://s3.duellinksmeta.com/pkm_img/cards/68888324fdf6b815eb78d682_w360.webp" },
    { name: "Celesteela", image: "https://s3.duellinksmeta.com/pkm_img/cards/682f261811b021c3225af326_w360.webp" },
    { name: "Capaceta de pedra", image: "https://s3.duellinksmeta.com/pkm_img/cards/6798e9cadbba2e0d2bb5f6a4_w360.webp" },
    { name: "Greedent", image: "https://s3.duellinksmeta.com/pkm_img/cards/685cf5621957dfb38f729110_w140.webp" },
    { name: "Salazzle", image: "https://s3.duellinksmeta.com/pkm_img/cards/685ce45e1957dfb38f7225ba_w140.webp" },
    { name: "Arbok", image: "https://s3.duellinksmeta.com/pkm_img/cards/685cf1121957dfb38f7274e5_w140.webp" },
    { name: "Zebstrika", image: "https://s3.duellinksmeta.com/pkm_img/cards/6837f8c595e5bc61f1b5c520_w140.webp" },
    { name: "Lillie", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811bc19a93125d205b459ec_w140.webp" },
    { name: "Sophocles", image: "https://s3.duellinksmeta.com/pkm_img/cards/680a3ca4ee5adf8f1a2577c1_w140.webp" },
    { name: "Piukumuku", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811d5a3a93125d205b50462_w140.webp" },
    { name: "Pinsir", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e38d7379f0ebec03808f85_w140.webp" },
    { name: "Pawmot", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e369e75cc271d38f73bb1d_w140.webp" },
    { name: "Arbok", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e390a2575eceb838a21d13_w140.webp" },
    { name: "Flamigo", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e3971d79f0ebec0380cb91_w140.webp" },
    { name: "Wigglet", image: "https://s3.duellinksmeta.com/pkm_img/cards/67e3914879f0ebec0380a356_w140.webp" },
    { name: "Marill", image: "https://s3.duellinksmeta.com/pkm_img/cards/67c153707103a0f7aed72786_w140.webp" },
    { name: "Manectric", image: "https://s3.duellinksmeta.com/pkm_img/cards/67c15a66915a911e82a9161a_w140.webp" },
    { name: "Raichu", image: "https://s3.duellinksmeta.com/pkm_img/cards/67c05b7098196ca3f2f5a9b1_w140.webp" },
    { name: "Indeedee EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d1d842f3ea38890bef06_w260.webp" },
    { name: "Jirachi", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2b6f0ac4efd582b66b0f_w260.webp" },
    { name: "Mega Ampharos EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2b2b0ac4efd582b669f5_w260.webp" },
    { name: "Mareep", image: "https://s3.duellinksmeta.com/pkm_img/cards/68887613e5ba3a87b17e9827_w260.webp" },
    { name: "Mega Pinsir EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2acc0ac4efd582b66909_w260.webp" },
    { name: "Flauta Pokémon", image: "https://s3.duellinksmeta.com/pkm_img/cards/675d8808b69b3a0822f66f23_w260.webp" },
    { name: "Hitmonlee", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e255c_w260.webp" },
    { name: "Galarian Corsola", image: "https://s3.duellinksmeta.com/pkm_img/cards/68aff44b69b06fc385c49930_w260.webp" },
    { name: "Ilima", image: "https://s3.duellinksmeta.com/pkm_img/cards/680a3bee8bc31f24c36ad522_w260.webp" },
    { name: "Frogadier", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c8320ac4efd582d0e921_w260.webp" },
    { name: "Gengar", image: "http://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e253c_w260.webp" },
    { name: "Infernape EX", image: "http://s3.duellinksmeta.com/pkm_img/cards/6798e5e96950657553dc5625_w260.webp" },
    { name: "Druddigon", image: "https://s3.duellinksmeta.com/pkm_img/cards/676119fbf9e257245fbb8cb4_w260.webp" },
    { name: "Aerodactyl EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/675ae7f534db45022c3de681_w260.webp" },
    { name: "Archeops", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901cd3cce2f4236a0a1be7f_w260.webp" },
    { name: "Toxapex", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d2b0ce2f4236a0a1d1e8_w260.webp" },
    { name: "Grimmsnarl", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d30a42f3ea38890bf30e_w260.webp" },
    { name: "Pidgey", image: "http://s3.duellinksmeta.com/pkm_img/cards/68fa2b4742f3ea3889f109f1_w260.webp" },
    { name: "Pidgeotto", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d6970ac4efd582d11a6f_w260.webp" },
    { name: "Pidgeot", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d6b6ce2f4236a0a1ddcb_w260.webp" },
    { name: "Corviknight", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d49dce2f4236a0a1d731_w260.webp" },
    { name: "Chandelure", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901dbef0ac4efd582d13306_w260.webp" },
    { name: "Furfrou", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2ddb0ac4efd582b673f8_w260.webp" },
    { name: "Braviary", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d9c342f3ea38890c0a47_w260.webp" },
    { name: "Spinda", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d89a42f3ea38890c05a7_w260.webp" },
    { name: "Cobalion", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d327ce2f4236a0a1d315_w260.webp" },
    { name: "Absol", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d0f142f3ea38890bec2f_w260.webp" },
    { name: "Darkrai", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d17b42f3ea38890bedac_w260.webp" },
    { name: "Pangoro", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d21542f3ea38890bef9b_w260.webp" },
    { name: "Prank Spinner", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d6dd0ac4efd582d11bd9_w260.webp" },
    { name: "Mega Pidgeot", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901f1bd0ac4efd582d19d69_w260.webp" },
    { name: "Rillaboom", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c6e9ce2f4236a0a1a412_w260.webp" },
    { name: "Psyduck", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c4bb0ac4efd582d0def8_w260.webp" },
    { name: "Golduck", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c4d40ac4efd582d0df51_w260.webp" },
    { name: "Wailmer", image: "http://s3.duellinksmeta.com/pkm_img/cards/6901c5f842f3ea38890bc8d0_w260.webp" },
    { name: "Wailord", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c61a0ac4efd582d0e35c_w260.webp" },
    { name: "Darumaka", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c1980ac4efd582d0d27a_w260.webp" },
    { name: "Turtonator", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c34e0ac4efd582d0d90a_w260.webp" },
    { name: "Darmanitan", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c208ce2f4236a0a194e5_w260.webp" },
    { name: "Litleo", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c30a42f3ea38890bc008_w260.webp" },
    { name: "Magby", image: "https://s3.duellinksmeta.com/pkm_img/cards/6888721dfdf6b815eb788fed_w260.webp" },
    { name: "Luxray", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c938ce2f4236a0a1ae31_w260.webp" },
    { name: "Mega gyarados EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/68a298fc63c1c5019c08a49d_w260.webp" },
    { name: "Bote Inflavel", image: "https://s3.duellinksmeta.com/pkm_img/cards/68aff74d4544bfaebafa0e14_w260.webp" },
    { name: "Dark Pendant", image: "https://s3.duellinksmeta.com/pkm_img/cards/68888998fdf6b815eb78f5df_w260.webp" },
    { name: "Dusknoir", image: "https://s3.duellinksmeta.com/pkm_img/cards/6799b67a169202e5d7e664a9_w260.webp" },
    { name: "Relicanth", image: "https://s3.duellinksmeta.com/pkm_img/cards/68aff6634544bfaebafa07ec_w260.webp" },
    { name: "Pyukumuku", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811c3c7a93125d205b48622_w260.webp" },
    { name: "Brock", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e25a2_w260.webp" },
    { name: "Dragonite", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e257b_w260.webp" },
    { name: "Tapu Lele", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811ca8fc0a4ec0168e8e713_w260.webp" },
    { name: "Ferroseed", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d26cce2f4236a0a1d03c_w260.webp" },
    { name: "Ferrothorn", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d2a7ce2f4236a0a1d1a1_w260.webp" },
    { name: "Durant", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d2e8ce2f4236a0a1d268_w260.webp" },
    { name: "Meltan", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d3f342f3ea38890bf6b4_w260.webp" },
    { name: "Miltank", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d7b90ac4efd582d11f5b_w260.webp" },
    { name: "Zigzagoon", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d7d142f3ea38890c02b3_w260.webp" },
    { name: "loudred", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d81a42f3ea38890c0374_w260.webp" },
    { name: "Furfrou", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2de042f3ea3889f11349_w260.webp" },
    { name: "Wooloo", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901da81ce2f4236a0a1eafc_w260.webp" },
    { name: "Dubwool", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901daba0ac4efd582d12d0d_w260.webp" },
    { name: "Hala", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d9290ac4efd582d1260f_w260.webp" },
    { name: "Marlon", image: "https://s3.duellinksmeta.com/pkm_img/cards/68fa2e5d42f3ea3889f1150a_w260.webp" },
    { name: "Porygon2", image: "https://s3.duellinksmeta.com/pkm_img/cards/688883dafdf6b815eb78d93c_w260.webp" },
    { name: "Porygon Z", image: "https://s3.duellinksmeta.com/pkm_img/cards/6799bb00f06a47c6afdf6f69_w260.webp" },
    { name: "Azurill", image: "https://s3.duellinksmeta.com/pkm_img/cards/68aff656e4656bc8c5b7156d_w260.webp" },
    { name: "Driflim", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901cde9ce2f4236a0a1c0eb_w260.webp" },
    { name: "Fossil de Pluma", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d72c42f3ea38890c012f_w260.webp" },
    { name: "Murkrow", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d0a7ce2f4236a0a1ca6b_w260.webp" },
    { name: "Honchkrow", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d0cf42f3ea38890bebe3_w260.webp" },
    { name: "Melmetal EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901d44b42f3ea38890bf7e4_w260.webp" },
    { name: "Melmetal", image: "https://s3.duellinksmeta.com/pkm_img/cards/671ef0f25279bcfb3c1e2578_w260.webp" },
    { name: "Pansear", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c153ce2f4236a0a19187_w260.webp" },
    { name: "Simisear", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c1750ac4efd582d0d1ab_w260.webp" },
    { name: "Phantump", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c6040ac4efd582d0e320_w260.webp" },
    { name: "Trevnant", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c63ace2f4236a0a1a1e2_w260.webp" },
    { name: "Skiddo", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c56f0ac4efd582d0e130_w260.webp" },
    { name: "Gogoat", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c5b70ac4efd582d0e22a_w260.webp" },
    { name: "Ponyta", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901bfe10ac4efd582d0cb3e_w260.webp" },
    { name: "Rapidash EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c00f42f3ea38890bb2a3_w260.webp" },
    { name: "Arcanine", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901bfbbce2f4236a0a18ae5_w260.webp" },
    { name: "Maractus", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c5010ac4efd582d0dfd9_w260.webp" },
    { name: "Shroomish", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c2bd0ac4efd582d0d6e8_w260.webp" },
    { name: "Breloom", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c2f9ce2f4236a0a198be_w260.webp" },
    { name: "Pansage", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c32c42f3ea38890bc02d_w260.webp" },
    { name: "Simisage", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c37842f3ea38890bc12d_w260.webp" },
    { name: "Nuzleaf", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c10342f3ea38890bb73a_w260.webp" },
    { name: "Shiftry", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c15642f3ea38890bb883_w260.webp" },
    { name: "Wumble", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901bfa00ac4efd582d0c9dd_w260.webp" },
    { name: "Silcoon", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901bfe7ce2f4236a0a18ba6_w260.webp" },
    { name: "Cascoon", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c06642f3ea38890bb3e6_w260.webp" },
    { name: "Dustox", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c0a5ce2f4236a0a18e8b_w260.webp" },
    { name: "Beutifly", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c01c0ac4efd582d0cc2c_w260.webp" },
    { name: "Exeggcute", image: "https://s3.duellinksmeta.com/pkm_img/cards/675ae86634db45022c3dea5e_w260.webp" },
    { name: "Alolan Exeggutor", image: "https://s3.duellinksmeta.com/pkm_img/cards/6811bebd819c204fd6cd6f44_w260.webp" },
    { name: "Dragonite EX", image: "https://s3.duellinksmeta.com/pkm_img/cards/685ce9761957dfb38f72424e_w260.webp" },
    { name: "Ludicolo", image: "https://s3.duellinksmeta.com/pkm_img/cards/6901c5d542f3ea38890bc88d_w260.webp" },
    { name: "Espeon", image: "https://s3.duellinksmeta.com/pkm_img/cards/685ce6666657857d9065edd2_w260.webp" },
    { name: "Morelull", image: "https://s3.duellinksmeta.com/pkm_img/cards/6837fa5926d19a35a27b2ff2_w260.webp" },
    { name: "Shiinotic", image: "https://s3.duellinksmeta.com/pkm_img/cards/6837fa7d26d19a35a27b30ba_w260.webp" },
];

let deck = {};
const cardList = document.getElementById('cardList');
const deckList = document.getElementById('deckList');
const deckCount = document.getElementById('deckCount');
const searchInput = document.getElementById('search');

// Renderizar as cartas disponíveis
function renderCards(filter = "") {
    cardList.innerHTML = '';
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(filter.toLowerCase()));
    filteredCards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <div>${card.name}</div>
      <div class="card-buttons">
        <button onclick="addToDeck('${card.name}')">+</button>
      </div>`;
        cardList.appendChild(div);
    });
}

// Renderizar o deck atual
function renderDeck() {
    deckList.innerHTML = '';
    let total = 0;
    for (let name in deck) {
        total += deck[name].count;
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
      <img src="${deck[name].image}" alt="${name}">
      <div>${name} (${deck[name].count})</div>
      <div class="card-buttons">
        <button onclick="addToDeck('${name}')">+</button>
        <button onclick="removeFromDeck('${name}')">-</button>
      </div>`;
        deckList.appendChild(div);
    }
    deckCount.textContent = total;
}

// Adicionar carta ao deck
function addToDeck(name) {
    const card = cards.find(c => c.name === name);
    if (!deck[name]) deck[name] = { ...card, count: 0 };
    deck[name].count++;
    renderDeck();
}

// Remover carta do deck
function removeFromDeck(name) {
    if (deck[name]) {
        deck[name].count--;
        if (deck[name].count <= 0) delete deck[name];
        renderDeck();
    }
}

// --- Função para salvar o deck no navegador ---
function SalvarDeck() {
    localStorage.setItem('meuDeck', JSON.stringify(deck));
    alert('Deck salvo com sucesso!');
}

// --- Função para carregar o deck salvo ---
function carregarDeck() {
    const deckSalvo = localStorage.getItem('meuDeck');
    if (deckSalvo) {
        deck = JSON.parse(deckSalvo);
        renderDeck();
    }
}

// --- Função para salvar as anotações ---
function salvarNotas() {
    const texto = document.getElementById('notes').value;
    localStorage.setItem('anotacoes', texto);
    alert('Anotações salvas com sucesso!');
}

// --- Ao carregar a página ---
window.onload = function () {
    renderCards();
    carregarDeck(); // carrega deck salvo

    // Recuperar anotações salvas
    const textoSalvo = localStorage.getItem('anotacoes');
    if (textoSalvo) {
        document.getElementById('notes').value = textoSalvo;
    }

    // Filtro de busca
    searchInput.addEventListener("input", e => renderCards(e.target.value));
};

const btnTest = document.getElementById('dropdownBtnTest');
const contentTest = document.getElementById('dropdownContentTest');
btnTest.addEventListener('click', function (e) { e.stopPropagation(); contentTest.style.display = contentTest.style.display === 'block' ? 'none' : 'block'; });
document.addEventListener('click', function () { contentTest.style.display = 'none'; });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') contentTest.style.display = 'none'; });