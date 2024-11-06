import React, { useState } from 'react';
import { FaGlobe, FaGamepad, FaLayerGroup, FaUser } from 'react-icons/fa';

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGameMode, setSelectedGameMode] = useState("");
  const [selectedGameType, setSelectedGameType] = useState("");
  const [selectedHeroes, setSelectedHeroes] = useState(Array(113).fill(0));
  const [selectedHeroesTeam1, setSelectedHeroesTeam1] = useState(Array(5).fill(""));
  const [selectedHeroesTeam2, setSelectedHeroesTeam2] = useState(Array(5).fill(""));
  const [predictionResult, setPredictionResult] = useState(null);

  const uniqueRegionNames = [
    'US West', 'Australia', 'Southeast Asia', 'Chile', 'Peru', 'India',
    'Europe East', 'South Korea', 'US East', 'South Africa',
    'Europe West', 'Russia', 'China', 'South America'
  ];

  const uniqueGameModes = [
    '1vs1 Solo Mid', '?? Event ??', '?? INTRO/DEATH ??', 'Ability Draft',
    'All Pick', 'All Random', 'All Random Death Match', 'Balanced Draft',
    'Captains Draft', 'Captains Mode', 'Compendium Matchmaking', 'Custom',
    'Greeviling', 'Least Played', 'Mid Only', 'New Player Pool',
    'Random Draft', 'Ranked All Pick', 'Reverse Captains Mode',
    'Single Draft', 'The Diretide', 'Tutorial', 'Unknown'
  ];

  const uniqueLobbies = ['Practice', 'Tournament', 'Tutorial'];

  const heroes = [
    { "name": "antimage", "id": 1, "localized_name": "Anti-Mage" },
    { "name": "axe", "id": 2, "localized_name": "Axe" },
    { "name": "bane", "id": 3, "localized_name": "Bane" },
    { "name": "bloodseeker", "id": 4, "localized_name": "Bloodseeker" },
    { "name": "crystal_maiden", "id": 5, "localized_name": "Crystal Maiden" },
    { "name": "drow_ranger", "id": 6, "localized_name": "Drow Ranger" },
    { "name": "earthshaker", "id": 7, "localized_name": "Earthshaker" },
    { "name": "juggernaut", "id": 8, "localized_name": "Juggernaut" },
    { "name": "mirana", "id": 9, "localized_name": "Mirana" },
    { "name": "nevermore", "id": 11, "localized_name": "Shadow Fiend" },
    { "name": "morphling", "id": 10, "localized_name": "Morphling" },
    { "name": "phantom_lancer", "id": 12, "localized_name": "Phantom Lancer" },
    { "name": "puck", "id": 13, "localized_name": "Puck" },
    { "name": "pudge", "id": 14, "localized_name": "Pudge" },
    { "name": "razor", "id": 15, "localized_name": "Razor" },
    { "name": "sand_king", "id": 16, "localized_name": "Sand King" },
    { "name": "storm_spirit", "id": 17, "localized_name": "Storm Spirit" },
    { "name": "sven", "id": 18, "localized_name": "Sven" },
    { "name": "tiny", "id": 19, "localized_name": "Tiny" },
    { "name": "vengefulspirit", "id": 20, "localized_name": "Vengeful Spirit" },
    { "name": "windrunner", "id": 21, "localized_name": "Windranger" },
    { "name": "zuus", "id": 22, "localized_name": "Zeus" },
    { "name": "kunkka", "id": 23, "localized_name": "Kunkka" },
    { "name": "lina", "id": 25, "localized_name": "Lina" },
    { "name": "lich", "id": 31, "localized_name": "Lich" },
    { "name": "lion", "id": 26, "localized_name": "Lion" },
    { "name": "shadow_shaman", "id": 27, "localized_name": "Shadow Shaman" },
    { "name": "slardar", "id": 28, "localized_name": "Slardar" },
    { "name": "tidehunter", "id": 29, "localized_name": "Tidehunter" },
    { "name": "witch_doctor", "id": 30, "localized_name": "Witch Doctor" },
    { "name": "riki", "id": 32, "localized_name": "Riki" },
    { "name": "enigma", "id": 33, "localized_name": "Enigma" },
    { "name": "tinker", "id": 34, "localized_name": "Tinker" },
    { "name": "sniper", "id": 35, "localized_name": "Sniper" },
    { "name": "necrolyte", "id": 36, "localized_name": "Necrophos" },
    { "name": "warlock", "id": 37, "localized_name": "Warlock" },
    { "name": "beastmaster", "id": 38, "localized_name": "Beastmaster" },
    { "name": "queenofpain", "id": 39, "localized_name": "Queen of Pain" },
    { "name": "venomancer", "id": 40, "localized_name": "Venomancer" },
    { "name": "faceless_void", "id": 41, "localized_name": "Faceless Void" },
    { "name": "skeleton_king", "id": 42, "localized_name": "Skeleton King" },
    { "name": "death_prophet", "id": 43, "localized_name": "Death Prophet" },
    { "name": "phantom_assassin", "id": 44, "localized_name": "Phantom Assassin" },
    { "name": "pugna", "id": 45, "localized_name": "Pugna" },
    { "name": "templar_assassin", "id": 46, "localized_name": "Templar Assassin" },
    { "name": "viper", "id": 47, "localized_name": "Viper" },
    { "name": "luna", "id": 48, "localized_name": "Luna" },
    { "name": "dragon_knight", "id": 49, "localized_name": "Dragon Knight" },
    { "name": "dazzle", "id": 50, "localized_name": "Dazzle" },
    { "name": "rattletrap", "id": 51, "localized_name": "Clockwerk" },
    { "name": "leshrac", "id": 52, "localized_name": "Leshrac" },
    { "name": "furion", "id": 53, "localized_name": "Nature's Prophet" },
    { "name": "life_stealer", "id": 54, "localized_name": "Lifestealer" },
    { "name": "dark_seer", "id": 55, "localized_name": "Dark Seer" },
    { "name": "clinkz", "id": 56, "localized_name": "Clinkz" },
    { "name": "omniknight", "id": 57, "localized_name": "Omniknight" },
    { "name": "enchantress", "id": 58, "localized_name": "Enchantress" },
    { "name": "huskar", "id": 59, "localized_name": "Huskar" },
    { "name": "night_stalker", "id": 60, "localized_name": "Night Stalker" },
    { "name": "broodmother", "id": 61, "localized_name": "Broodmother" },
    { "name": "bounty_hunter", "id": 62, "localized_name": "Bounty Hunter" },
    { "name": "weaver", "id": 63, "localized_name": "Weaver" },
    { "name": "jakiro", "id": 64, "localized_name": "Jakiro" },
    { "name": "batrider", "id": 65, "localized_name": "Batrider" },
    { "name": "chen", "id": 66, "localized_name": "Chen" },
    { "name": "spectre", "id": 67, "localized_name": "Spectre" },
    { "name": "doom_bringer", "id": 69, "localized_name": "Doom" },
    { "name": "ancient_apparition", "id": 68, "localized_name": "Ancient Apparition" },
    { "name": "ursa", "id": 70, "localized_name": "Ursa" },
    { "name": "spirit_breaker", "id": 71, "localized_name": "Spirit Breaker" },
    { "name": "gyrocopter", "id": 72, "localized_name": "Gyrocopter" },
    { "name": "alchemist", "id": 73, "localized_name": "Alchemist" },
    { "name": "invoker", "id": 74, "localized_name": "Invoker" },
    { "name": "silencer", "id": 75, "localized_name": "Silencer" },
    { "name": "obsidian_destroyer", "id": 76, "localized_name": "Outworld Devourer" },
    { "name": "lycan", "id": 77, "localized_name": "Lycanthrope" },
    { "name": "brewmaster", "id": 78, "localized_name": "Brewmaster" },
    { "name": "shadow_demon", "id": 79, "localized_name": "Shadow Demon" },
    { "name": "lone_druid", "id": 80, "localized_name": "Lone Druid" },
    { "name": "chaos_knight", "id": 81, "localized_name": "Chaos Knight" },
    { "name": "meepo", "id": 82, "localized_name": "Meepo" },
    { "name": "treant", "id": 83, "localized_name": "Treant Protector" },
    { "name": "ogre_magi", "id": 84, "localized_name": "Ogre Magi" },
    { "name": "undying", "id": 85, "localized_name": "Undying" },
    { "name": "rubick", "id": 86, "localized_name": "Rubick" },
    { "name": "disruptor", "id": 87, "localized_name": "Disruptor" },
    { "name": "nyx_assassin", "id": 88, "localized_name": "Nyx Assassin" },
    { "name": "naga_siren", "id": 89, "localized_name": "Naga Siren" },
    { "name": "keeper_of_the_light", "id": 90, "localized_name": "Keeper of the Light" },
    { "name": "wisp", "id": 91, "localized_name": "Wisp" },
    { "name": "visage", "id": 92, "localized_name": "Visage" },
    { "name": "slark", "id": 93, "localized_name": "Slark" },
    { "name": "medusa", "id": 94, "localized_name": "Medusa" },
    { "name": "troll_warlord", "id": 95, "localized_name": "Troll Warlord" },
    { "name": "centaur", "id": 96, "localized_name": "Centaur Warrunner" },
    { "name": "magnataur", "id": 97, "localized_name": "Magnus" },
    { "name": "shredder", "id": 98, "localized_name": "Timbersaw" },
    { "name": "bristleback", "id": 99, "localized_name": "Bristleback" },
    { "name": "tusk", "id": 100, "localized_name": "Tusk" },
    { "name": "skywrath_mage", "id": 101, "localized_name": "Skywrath Mage" },
    { "name": "abaddon", "id": 102, "localized_name": "Abaddon" },
    { "name": "elder_titan", "id": 103, "localized_name": "Elder Titan" },
    { "name": "legion_commander", "id": 104, "localized_name": "Legion Commander" },
    { "name": "ember_spirit", "id": 106, "localized_name": "Ember Spirit" },
    { "name": "earth_spirit", "id": 107, "localized_name": "Earth Spirit" },
    { "name": "abyssal_underlord", "id": 108, "localized_name": "Abyssal Underlord" },
    { "name": "terrorblade", "id": 109, "localized_name": "Terrorblade" },
    { "name": "phoenix", "id": 110, "localized_name": "Phoenix" },
    { "name": "techies", "id": 105, "localized_name": "Techies" },
    { "name": "oracle", "id": 111, "localized_name": "Oracle" },
    { "name": "winter_wyvern", "id": 112, "localized_name": "Winter Wyvern" },
    { "name": "arc_warden", "id": 113, "localized_name": "Arc Warden" }
];


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGameModeChange = (event) => {
    setSelectedGameMode(event.target.value);
  };

  const handleGameTypeChange = (event) => {
    setSelectedGameType(event.target.value);
  };

  const handleHeroChange = (team, index) => (event) => {
    const heroId = parseInt(event.target.value);
    const newSelectedHeroes = [...selectedHeroes];
    const newSelectedHeroesTeam1 = [...selectedHeroesTeam1];
    const newSelectedHeroesTeam2 = [...selectedHeroesTeam2];

    // Clear previous hero choice if it was set
    if (team === 1) {
      const previousHeroId = newSelectedHeroesTeam1[index];
      if (previousHeroId) newSelectedHeroes[previousHeroId - 1] = 0;
      newSelectedHeroesTeam1[index] = heroId;
      newSelectedHeroes[heroId - 1] = 1;
    } else {
      const previousHeroId = newSelectedHeroesTeam2[index];
      if (previousHeroId) newSelectedHeroes[previousHeroId - 1] = 0;
      newSelectedHeroesTeam2[index] = heroId;
      newSelectedHeroes[heroId - 1] = -1;
    }

    setSelectedHeroes(newSelectedHeroes);
    setSelectedHeroesTeam1(newSelectedHeroesTeam1);
    setSelectedHeroesTeam2(newSelectedHeroesTeam2);
  };

  const postPrediction = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/prediction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Prediction Result:", result);
      setPredictionResult(result);
    } catch (error) {
      console.error("Error:", error);
      setPredictionResult(null);
    }
  };

  const handlePredict = () => {
    // Prepare data to be posted or logged
    const data = {
      cluster_id: selectedOption,
      game_mode: selectedGameMode,
      game_type: selectedGameType,
      heroes: selectedHeroes,
    };
    console.log("Data to be submitted:", data);
    // post data to the server http://127.0.0.1:8000/prediction
    postPrediction(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Game Selection</h1>
        
        {/* Region Selection */}
        <div>
          <label htmlFor="regions" className="flex items-center mb-2 text-sm font-medium text-gray-700">
            <FaGlobe className="mr-2 text-indigo-500" /> Select Region:
          </label>
          <select 
            id="regions" 
            name="regions" 
            value={selectedOption} 
            onChange={handleSelectChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>Select Region</option>
            {uniqueRegionNames.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        {/* Game Mode Selection */}
        <div>
          <label htmlFor="gameModes" className="flex items-center mb-2 text-sm font-medium text-gray-700">
            <FaGamepad className="mr-2 text-indigo-500" /> Select Game Mode:
          </label>
          <select 
            id="gameModes" 
            name="gameModes" 
            value={selectedGameMode} 
            onChange={handleGameModeChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>Select Game Mode</option>
            {uniqueGameModes.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>

        {/* Game Type Selection */}
        <div>
          <label htmlFor="lobbies" className="flex items-center mb-2 text-sm font-medium text-gray-700">
            <FaLayerGroup className="mr-2 text-indigo-500" /> Select Game Type:
          </label>
          <select 
            id="lobbies" 
            name="lobbies" 
            value={selectedGameType} 
            onChange={handleGameTypeChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>Select Game Type</option>
            {uniqueLobbies.map((lobby) => (
              <option key={lobby} value={lobby}>{lobby}</option>
            ))}
          </select>
        </div>

        {/* Hero Selection for Team 1 */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Hero Selection for Team 1</h2>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="col-span-1">
                <label htmlFor={`team1-hero-${index}`} className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <FaUser className="mr-2 text-indigo-500" /> Hero {index + 1}:
                </label>
                <select 
                  id={`team1-hero-${index}`} 
                  name={`team1-hero-${index}`} 
                  value={selectedHeroesTeam1[index]} 
                  onChange={handleHeroChange(1, index)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="" disabled>Select Hero</option>
                  {heroes.map(hero => (
                    <option key={hero.id} value={hero.id}>{hero.localized_name}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Selection for Team 2 */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Hero Selection for Team 2</h2>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="col-span-1">
                <label htmlFor={`team2-hero-${index}`} className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <FaUser className="mr-2 text-indigo-500" /> Hero {index + 1}:
                </label>
                <select 
                  id={`team2-hero-${index}`} 
                  name={`team2-hero-${index}`} 
                  value={selectedHeroesTeam2[index]} 
                  onChange={handleHeroChange(2, index)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="" disabled>Select Hero</option>
                  {heroes.map(hero => (
                    <option key={hero.id} value={hero.id}>{hero.localized_name}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Predict Button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handlePredict} 
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Predict
          </button>
        </div>

        {/* Prediction Result, display the variavebel only*/}
        <div>
          <p>
            Prediction Result: {predictionResult}
          </p>
        </div>
      </div>
    </div>
  );
}
