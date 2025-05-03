const dreamData = [
  // Existing symbols...

  {
    symbol: "Fountain",
    meaning: "Represents spiritual renewal, emotional flow, and creativity. A fountain symbolizes the replenishment of energy and the constant flow of life force.",
    archetype: "Source of Life",
    energyCenter: "Sacral",
    keywords: ["fountain", "water", "flow", "creativity"]
  },
  {
  symbol: "Bridge",
  meaning: "Symbolizes transition, connection, and moving from one phase of life to another. A bridge can represent overcoming obstacles or a shift in perspective.",
  archetype: "The Connector",
  energyCenter: "Heart",
  keywords: ["bridge", "crossing", "transition"]
},
{
  symbol: "Clock",
  meaning: "Represents time, urgency, and awareness of life's cycles. A clock in a dream may highlight the importance of timing or the pressure of deadlines.",
  archetype: "The Timekeeper",
  energyCenter: "Third Eye",
  keywords: ["clock", "time", "deadline", "urgency"]
},
{
  symbol: "Mask",
  meaning: "Symbolizes hidden identity, protection, or deception. A mask can indicate the roles we play or the need to uncover the truth.",
  archetype: "The Hidden Self",
  energyCenter: "Throat",
  keywords: ["mask", "identity", "deception", "facade"]
},
{
  symbol: "Mountain",
  meaning: "Represents challenges, aspirations, and spiritual elevation. A mountain in a dream may indicate a goal you're striving toward or an obstacle to overcome.",
  archetype: "The Sacred Summit",
  energyCenter: "Root",
  keywords: ["mountain", "climb", "peak", "challenge"]
},
{
  symbol: "Door",
  meaning: "Symbolizes opportunity, transition, and choices. A door can represent a threshold to new experiences or the need to confront something previously hidden.",
  archetype: "The Threshold",
  energyCenter: "Solar Plexus",
  keywords: ["door", "threshold", "opportunity", "entry"]
},
{
  symbol: "Lion",
  meaning: "Symbolizes courage, strength, and personal power. A lion may represent a need to assert dominance or face a fear with confidence.",
  archetype: "The Warrior",
  energyCenter: "Solar Plexus",
  keywords: ["lion", "strength", "roar", "courage"]
},
{
  symbol: "Cave",
  meaning: "Represents introspection, the unconscious mind, and inner exploration. A cave can indicate retreat, hiding, or deep inner work.",
  archetype: "The Inner Chamber",
  energyCenter: "Root",
  keywords: ["cave", "darkness", "retreat", "inner"]
},
{
  symbol: "Stairs",
  meaning: "Symbolizes progress, ascension, or descent into deeper awareness. Stairs can indicate spiritual or personal development.",
  archetype: "The Ascent",
  energyCenter: "Crown",
  keywords: ["stairs", "climb", "descent", "levels"]
},
{
  symbol: "Feather",
  meaning: "Represents lightness, spiritual messages, and grace. A feather may indicate divine presence or letting go of burdens.",
  archetype: "The Whisper",
  energyCenter: "Heart",
  keywords: ["feather", "light", "air", "message"]
},
{
  symbol: "Horse",
  meaning: "Symbolizes freedom, vitality, and drive. A horse can represent raw power or the urge to break free.",
  archetype: "The Charger",
  energyCenter: "Sacral",
  keywords: ["horse", "freedom", "ride", "power"]
},
{
  symbol: "Ice",
  meaning: "Symbolizes emotional coldness, stillness, or repressed feelings. Ice can also represent preservation or clarity.",
  archetype: "The Frozen State",
  energyCenter: "Throat",
  keywords: ["ice", "cold", "freeze", "emotion"]
},
{
  symbol: "Ring",
  meaning: "Represents commitment, cycles, and unity. A ring can indicate relationships, promises, or eternal patterns.",
  archetype: "The Eternal Bond",
  energyCenter: "Heart",
  keywords: ["ring", "circle", "commitment", "union"]
},
{
  symbol: "Forest",
  meaning: "Symbolizes the unknown, mystery, and natural instinct. A forest can represent both fear and discovery.",
  archetype: "The Wild Unknown",
  energyCenter: "Root",
  keywords: ["forest", "trees", "wilderness", "nature"]
},
{
  symbol: "Mirror Maze",
  meaning: "Represents confusion, self-exploration, and illusions. A mirror maze can indicate being lost in your identity or ego.",
  archetype: "The Labyrinth of Self",
  energyCenter: "Third Eye",
  keywords: ["mirror maze", "confusion", "self", "illusion"]
},
{
  symbol: "Crystal",
  meaning: "Represents clarity, purity, and spiritual energy. A crystal can symbolize healing and the amplification of inner truth.",
  archetype: "The Amplifier",
  energyCenter: "Crown",
  keywords: ["crystal", "clarity", "energy", "purity"]
},
{
  symbol: "Clock Tower",
  meaning: "Symbolizes destiny, awareness of time, and higher perspective. It often represents a spiritual wake-up call.",
  archetype: "The Awakener",
  energyCenter: "Crown",
  keywords: ["clock tower", "time", "alarm", "awareness"]
},
{
  symbol: "Tunnel",
  meaning: "Symbolizes transition, rebirth, and journeying through the subconscious. A tunnel suggests being between phases.",
  archetype: "The Passage",
  energyCenter: "Root",
  keywords: ["tunnel", "transition", "rebirth", "passage"]
},
{
  symbol: "Lantern",
  meaning: "Represents guidance, personal truth, and searching in darkness. A lantern lights the path during inner searching.",
  archetype: "The Inner Guide",
  energyCenter: "Heart",
  keywords: ["lantern", "light", "search", "truth"]
},
{
  symbol: "Chain",
  meaning: "Symbolizes restriction, connection, or obligation. A chain can represent being bound or interconnected.",
  archetype: "The Binder",
  energyCenter: "Solar Plexus",
  keywords: ["chain", "bond", "restriction", "link"]
},
{
  symbol: "Book",
  meaning: "Represents knowledge, secrets, and learning. A book may indicate spiritual insight or forgotten wisdom.",
  archetype: "The Keeper of Knowledge",
  energyCenter: "Third Eye",
  keywords: ["book", "wisdom", "pages", "learning"]
},
{
  symbol: "Egg",
  meaning: "Symbolizes potential, birth, and new beginnings. An egg may represent fragile hope or creative incubation.",
  archetype: "The Seed",
  energyCenter: "Sacral",
  keywords: ["egg", "birth", "beginning", "potential"]
},
{
  symbol: "Armor",
  meaning: "Represents self-protection, strength, and emotional defense. Armor can indicate guardedness or resilience.",
  archetype: "The Defender",
  energyCenter: "Solar Plexus",
  keywords: ["armor", "shield", "protection", "defense"]
},
{
  symbol: "Rose",
  meaning: "Symbolizes love, beauty, and emotional depth. A rose can represent vulnerability or blossoming feelings.",
  archetype: "The Beloved",
  energyCenter: "Heart",
  keywords: ["rose", "love", "flower", "beauty"]
},
{
  symbol: "Train",
  meaning: "Represents life direction, control, and timing. A train may symbolize a set path or the momentum of decisions.",
  archetype: "The Conductor",
  energyCenter: "Root",
  keywords: ["train", "track", "movement", "journey"]
},
{
  symbol: "Telescope",
  meaning: "Represents foresight, ambition, and vision. A telescope symbolizes looking beyond the present into possibilities.",
  archetype: "The Seer",
  energyCenter: "Third Eye",
  keywords: ["telescope", "vision", "distance", "future"]
},
{
  symbol: "Mask",
  meaning: "Symbolizes hidden truth, persona, and deception. A mask may indicate suppression of true feelings.",
  archetype: "The Illusionist",
  energyCenter: "Throat",
  keywords: ["mask", "hidden", "persona", "deception"]
},
{
  symbol: "Anchor",
  meaning: "Represents stability, grounding, and staying centered. An anchor can also symbolize being held back.",
  archetype: "The Stabilizer",
  energyCenter: "Root",
  keywords: ["anchor", "ground", "stable", "hold"]
},
{
  symbol: "Fireworks",
  meaning: "Symbolizes celebration, sudden insight, or emotional outburst. Fireworks indicate something explosive or illuminating.",
  archetype: "The Revelator",
  energyCenter: "Solar Plexus",
  keywords: ["fireworks", "celebration", "burst", "light"]
},
{
  symbol: "Wind",
  meaning: "Represents change, inspiration, or restlessness. Wind may indicate unseen forces at play in your life.",
  archetype: "The Breath of Change",
  energyCenter: "Throat",
  keywords: ["wind", "air", "change", "movement"]
},
{
  symbol: "Mask",
  meaning: "Symbolizes hidden identity, protection, or deception. A mask can indicate the roles we play or the need to uncover the truth.",
  archetype: "The Hidden Self",
  energyCenter: "Throat",
  keywords: ["mask", "identity", "deception", "facade"]
},
{
  symbol: "Eye",
  meaning: "Represents awareness, perception, and spiritual insight. A single eye may indicate intuition or watching presence.",
  archetype: "The Observer",
  energyCenter: "Third Eye",
  keywords: ["eye", "vision", "insight", "watching"]
},
{
  symbol: "Moon",
  meaning: "Symbolizes intuition, mystery, and feminine energy. The moon may represent hidden emotions or cycles.",
  archetype: "The Mystic",
  energyCenter: "Sacral",
  keywords: ["moon", "night", "intuition", "cycle"]
},
{
  symbol: "Sun",
  meaning: "Represents clarity, vitality, and conscious awareness. The sun symbolizes growth, life force, and joy.",
  archetype: "The Illuminator",
  energyCenter: "Solar Plexus",
  keywords: ["sun", "light", "joy", "growth"]
},
{
  symbol: "Desert",
  meaning: "Represents isolation, endurance, and spiritual testing. A desert suggests a search for meaning or emotional barrenness.",
  archetype: "The Wanderer",
  energyCenter: "Root",
  keywords: ["desert", "sand", "alone", "trial"]
},
{
  symbol: "Bridge Collapse",
  meaning: "Symbolizes fear of transition, instability, or blocked change. A collapsing bridge may suggest loss of trust or support.",
  archetype: "The Broken Path",
  energyCenter: "Root",
  keywords: ["bridge collapse", "fall", "transition", "fear"]
},
{
  symbol: "Rain",
  meaning: "Symbolizes cleansing, emotional release, and renewal. Rain can represent sorrow, healing, or a fresh start.",
  archetype: "The Cleanser",
  energyCenter: "Sacral",
  keywords: ["rain", "tears", "cleansing", "storm"]
},
{
  symbol: "Shadow",
  meaning: "Represents repressed aspects of the self or hidden fears. A shadow symbolizes the unconscious and inner confrontation.",
  archetype: "The Dark Twin",
  energyCenter: "Root",
  keywords: ["shadow", "darkness", "fear", "unseen"]
},
{
  symbol: "Tower",
  meaning: "Symbolizes ambition, isolation, or spiritual ascent. A tower can represent rising above or being disconnected.",
  archetype: "The Watcher",
  energyCenter: "Crown",
  keywords: ["tower", "height", "ambition", "view"]
},
{
  symbol: "Bridge (Broken)",
  meaning: "Symbolizes a broken connection, fear of transition, or separation. This may reflect loss or the end of a phase.",
  archetype: "The Severed Link",
  energyCenter: "Heart",
  keywords: ["broken bridge", "separation", "fall", "disconnection"]
},
{
  symbol: "Tornado",
  meaning: "Represents inner chaos, emotional upheaval, or sudden transformation. A tornado suggests urgent change or instability.",
  archetype: "The Whirlwind",
  energyCenter: "Solar Plexus",
  keywords: ["tornado", "wind", "chaos", "storm"]
},
{
  symbol: "Wings",
  meaning: "Symbolize spiritual elevation, liberation, and transcendence. Wings can suggest freedom or angelic guidance.",
  archetype: "The Liberator",
  energyCenter: "Crown",
  keywords: ["wings", "flight", "freedom", "ascend"]
},
{
  symbol: "Wolf",
  meaning: "Represents instinct, loyalty, and the call of the wild. A wolf can indicate independence or a warning of hidden danger.",
  archetype: "The Lone Guide",
  energyCenter: "Root",
  keywords: ["wolf", "instinct", "wild", "pack"]
},
{
  symbol: "Fish",
  meaning: "Symbolizes spiritual insight, abundance, and the unconscious. Fish are tied to emotional depth and adaptability.",
  archetype: "The Swimmer",
  energyCenter: "Sacral",
  keywords: ["fish", "water", "abundance", "emotion"]
},
{
  symbol: "Planet",
  meaning: "Represents cosmic forces, destiny, and expansion. A planet in a dream can suggest a broader view or alignment with universal energy.",
  archetype: "The Cosmic Mind",
  energyCenter: "Crown",
  keywords: ["planet", "orbit", "universe", "destiny"]
},
{
  symbol: "Chainsaw",
  meaning: "Symbolizes forceful cutting away, aggression, or radical transformation. It may suggest destructive change.",
  archetype: "The Destroyer",
  energyCenter: "Solar Plexus",
  keywords: ["chainsaw", "cut", "force", "destruction"]
},
{
  symbol: "Treasure Chest",
  meaning: "Represents hidden potential, personal value, and discovery. It can symbolize something precious within you.",
  archetype: "The Hidden Gift",
  energyCenter: "Heart",
  keywords: ["treasure", "chest", "hidden", "value"]
},
{
  symbol: "Maze",
  meaning: "Symbolizes confusion, seeking answers, or feeling lost. A maze can reflect inner complexity or a difficult situation.",
  archetype: "The Seeker",
  energyCenter: "Third Eye",
  keywords: ["maze", "lost", "confusion", "search"]
},
{
  symbol: "Skeleton",
  meaning: "Represents death, truth, and the bare essentials. Skeletons may reveal fear of mortality or stripped-down truth.",
  archetype: "The Revealer",
  energyCenter: "Root",
  keywords: ["skeleton", "bones", "death", "truth"]
},
{
  symbol: "Crown",
  meaning: "Symbolizes authority, divine connection, and higher consciousness. A crown reflects achievement and spiritual sovereignty.",
  archetype: "The Monarch",
  energyCenter: "Crown",
  keywords: ["crown", "royalty", "divine", "authority"]
},
{
  symbol: "Clock (Stopped)",
  meaning: "Symbolizes a pause in time, loss, or being stuck. A stopped clock can reflect a critical moment or suspended progress.",
  archetype: "The Timeless",
  energyCenter: "Third Eye",
  keywords: ["stopped clock", "time", "pause", "suspended"]
},
{
  symbol: "Sword",
  meaning: "Represents truth, conflict, and decisive action. A sword may indicate clarity or the need for protection.",
  archetype: "The Blade of Truth",
  energyCenter: "Throat",
  keywords: ["sword", "cut", "truth", "action"]
},
{
  symbol: "River",
  meaning: "Symbolizes life’s flow, change, and emotional movement. A river can suggest ease or resistance in navigating life.",
  archetype: "The Flow",
  energyCenter: "Sacral",
  keywords: ["river", "flow", "water", "movement"]
},
{
  symbol: "Lantern (Out)",
  meaning: "Symbolizes loss of guidance, confusion, or darkness. An unlit lantern may reflect fear or feeling lost.",
  archetype: "The Dim Light",
  energyCenter: "Third Eye",
  keywords: ["lantern out", "dark", "lost", "unguided"]
},
{
  symbol: "Dragon",
  meaning: "Represents power, wisdom, and inner fire. Dragons can symbolize fearsome protection or deep energy.",
  archetype: "The Ancient Force",
  energyCenter: "Solar Plexus",
  keywords: ["dragon", "fire", "power", "wisdom"]
},
{
  symbol: "Window",
  meaning: "Symbolizes perspective, opportunity, and perception. A window may indicate openness or longing for something beyond.",
  archetype: "The Vision",
  energyCenter: "Heart",
  keywords: ["window", "view", "perspective", "opportunity"]
},
{
  symbol: "Road",
  meaning: "Represents direction, purpose, and life journey. A road may reflect decisions or upcoming changes.",
  archetype: "The Path",
  energyCenter: "Root",
  keywords: ["road", "path", "direction", "travel"]
},
{
  symbol: "Island",
  meaning: "Symbolizes isolation, self-reliance, or escape. An island may reflect separation or personal sanctuary.",
  archetype: "The Isolated Self",
  energyCenter: "Heart",
  keywords: ["island", "alone", "sanctuary", "separate"]
},
{
  symbol: "Veil",
  meaning: "Represents mystery, concealment, and spiritual secrecy. A veil may suggest hidden truth or sacred boundaries.",
  archetype: "The Hidden Veil",
  energyCenter: "Throat",
  keywords: ["veil", "hidden", "conceal", "mystery"]
},
{
  symbol: "Labyrinth",
  meaning: "Symbolizes a spiritual journey, deep introspection, and sacred complexity. It reflects growth through challenge.",
  archetype: "The Sacred Puzzle",
  energyCenter: "Crown",
  keywords: ["labyrinth", "journey", "complexity", "path"]
},
{
  symbol: "Skull",
  meaning: "Represents mortality, endings, and hidden wisdom. A skull may reflect the acceptance of impermanence.",
  archetype: "The Final Truth",
  energyCenter: "Root",
  keywords: ["skull", "death", "end", "mortality"]
},
{
  symbol: "Lighthouse (Dark)",
  meaning: "Symbolizes loss of direction, absence of guidance, or spiritual disconnection.",
  archetype: "The Abandoned Beacon",
  energyCenter: "Crown",
  keywords: ["lighthouse dark", "lost", "unguided", "searching"]
},
{
  symbol: "Stained Glass",
  meaning: "Represents spiritual beauty, divine light, and fractured wholeness. It may suggest finding meaning in imperfection.",
  archetype: "The Sacred Mosaic",
  energyCenter: "Heart",
  keywords: ["stained glass", "light", "beauty", "sacred"]
},
{
  symbol: "Ship",
  meaning: "Symbolizes journey, emotional navigation, and adventure. A ship can represent the voyage of life or inner quest.",
  archetype: "The Voyager",
  energyCenter: "Sacral",
  keywords: ["ship", "voyage", "journey", "sea"]
},
{
  symbol: "Tree (Falling)",
  meaning: "Represents loss of stability, sudden change, or ancestral disconnection.",
  archetype: "The Uprooted",
  energyCenter: "Root",
  keywords: ["falling tree", "collapse", "roots", "change"]
},
  {
  symbol: "Cave",
  meaning: "Represents the unconscious mind, inner retreat, and self-exploration. A cave symbolizes mystery, depth, or the need for introspection.",
  archetype: "The Inner Sanctuary",
  energyCenter: "Root",
  keywords: ["cave", "dark", "retreat", "depth"]
},
{
  symbol: "Feather",
  meaning: "Symbolizes lightness, spiritual messages, and divine connection. A feather may indicate freedom or presence of angels.",
  archetype: "The Messenger of Light",
  energyCenter: "Crown",
  keywords: ["feather", "light", "angel", "air"]
},
{
  symbol: "Ice",
  meaning: "Represents emotional coldness, stagnation, or the need to thaw repressed feelings.",
  archetype: "The Frozen State",
  energyCenter: "Heart",
  keywords: ["ice", "cold", "freeze", "stagnant"]
},
{
  symbol: "Gate",
  meaning: "Symbolizes transition, access, or new opportunities. A gate may represent a decision point or spiritual threshold.",
  archetype: "The Threshold",
  energyCenter: "Throat",
  keywords: ["gate", "entry", "opportunity", "threshold"]
},
{
  symbol: "Firefly",
  meaning: "Represents inspiration, fleeting insight, or a spark of inner light. Fireflies may guide during dark times.",
  archetype: "The Spark",
  energyCenter: "Third Eye",
  keywords: ["firefly", "light", "spark", "guidance"]
},
{
  symbol: "Broken Mirror",
  meaning: "Symbolizes fragmented self-perception, distorted truth, or bad luck. It may suggest an identity crisis.",
  archetype: "The Shattered Self",
  energyCenter: "Third Eye",
  keywords: ["broken mirror", "identity", "distortion", "fragment"]
},
{
  symbol: "Glass",
  meaning: "Represents clarity, fragility, and transparency. Glass may suggest the ability to see truth or the need for protection.",
  archetype: "The Fragile Vision",
  energyCenter: "Throat",
  keywords: ["glass", "clear", "see-through", "fragile"]
},
{
  symbol: "Balloon",
  meaning: "Symbolizes joy, elevation, or letting go. A balloon may reflect childhood memories or fleeting happiness.",
  archetype: "The Riser",
  energyCenter: "Heart",
  keywords: ["balloon", "float", "joy", "release"]
},
{
  symbol: "Thorns",
  meaning: "Represents pain, obstacles, or protection. Thorns may indicate emotional defense mechanisms or inner struggle.",
  archetype: "The Wounded Protector",
  energyCenter: "Heart",
  keywords: ["thorns", "pain", "barrier", "defense"]
},
{
  symbol: "Crown of Thorns",
  meaning: "Symbolizes sacrifice, suffering, and spiritual endurance. This may suggest martyrdom or deep emotional burden.",
  archetype: "The Martyr",
  energyCenter: "Crown",
  keywords: ["crown of thorns", "sacrifice", "pain", "burden"]
},
{
  symbol: "Web (Tangled)",
  meaning: "Represents entrapment, confusion, or overcomplication. A tangled web suggests being caught in a situation.",
  archetype: "The Snare",
  energyCenter: "Solar Plexus",
  keywords: ["web", "trap", "confusion", "entangled"]
},
{
  symbol: "Tunnel",
  meaning: "Symbolizes transition, uncertainty, or a search for clarity. A tunnel often reflects inner passage or spiritual journey.",
  archetype: "The Passage",
  energyCenter: "Third Eye",
  keywords: ["tunnel", "dark", "transition", "journey"]
},
{
  symbol: "Ashes",
  meaning: "Represents endings, transformation, and what remains after destruction. Ashes suggest rebirth or memory.",
  archetype: "The Remains",
  energyCenter: "Root",
  keywords: ["ashes", "burned", "remains", "end"]
},
{
  symbol: "Throne",
  meaning: "Symbolizes power, sovereignty, and self-authority. A throne reflects control over one's life or leadership qualities.",
  archetype: "The Ruler",
  energyCenter: "Crown",
  keywords: ["throne", "rule", "authority", "power"]
},
{
  symbol: "Rose",
  meaning: "Represents love, beauty, and vulnerability. A rose can also symbolize passion or spiritual unfolding.",
  archetype: "The Beloved",
  energyCenter: "Heart",
  keywords: ["rose", "love", "beauty", "flower"]
},
{
  symbol: "Helmet",
  meaning: "Symbolizes protection, strategy, and guarded thinking. A helmet may suggest defense mechanisms or mental preparedness.",
  archetype: "The Defender",
  energyCenter: "Third Eye",
  keywords: ["helmet", "protection", "armor", "head"]
},
{
  symbol: "Book",
  meaning: "Represents knowledge, wisdom, and spiritual learning. A book can symbolize lessons or guidance from the higher self.",
  archetype: "The Record Keeper",
  energyCenter: "Throat",
  keywords: ["book", "knowledge", "learning", "wisdom"]
},
{
  symbol: "Stairs",
  meaning: "Symbolize ascension, personal growth, or spiritual elevation. Stairs reflect progress or internal climbing.",
  archetype: "The Ascender",
  energyCenter: "Root",
  keywords: ["stairs", "climb", "growth", "rise"]
},
{
  symbol: "Glass Shards",
  meaning: "Symbolize emotional pain, broken truth, or vulnerability. Walking on shards may reflect inner wounds.",
  archetype: "The Fractured Path",
  energyCenter: "Heart",
  keywords: ["glass shards", "broken", "pain", "hurt"]
},
{
  symbol: "Paintbrush",
  meaning: "Represents creativity, expression, and personal vision. A paintbrush may signify the power to shape your reality.",
  archetype: "The Artist",
  energyCenter: "Throat",
  keywords: ["paintbrush", "create", "color", "art"]
},
{
  symbol: "Raven",
  meaning: "Symbolizes mystery, prophecy, and the unknown. A raven often indicates messages from the subconscious.",
  archetype: "The Omen",
  energyCenter: "Third Eye",
  keywords: ["raven", "dark bird", "mystery", "message"]
},
{
  symbol: "Cracked Wall",
  meaning: "Represents vulnerability, old wounds, or hidden truths emerging. A cracked wall symbolizes the breaking of facades.",
  archetype: "The Breakthrough",
  energyCenter: "Solar Plexus",
  keywords: ["crack", "wall", "truth", "exposed"]
},
{
  symbol: "Lantern",
  meaning: "Symbolizes guidance, spiritual light, and personal wisdom. A lantern helps illuminate your path.",
  archetype: "The Guiding Flame",
  energyCenter: "Third Eye",
  keywords: ["lantern", "light", "guide", "wisdom"]
},
{
  symbol: "Candle (Out)",
  meaning: "Represents extinguished hope, spiritual fatigue, or emotional depletion.",
  archetype: "The Fading Light",
  energyCenter: "Crown",
  keywords: ["candle out", "dark", "exhausted", "lost light"]
},
{
  symbol: "Map",
  meaning: "Symbolizes purpose, direction, and awareness of life’s journey. A map may indicate strategic planning or lost potential.",
  archetype: "The Planner",
  energyCenter: "Heart",
  keywords: ["map", "direction", "path", "route"]
},
{
  symbol: "Clock (Melting)",
  meaning: "Represents altered perception of time, anxiety, or the surreal. Inspired by dreams and subconscious warping.",
  archetype: "The Surrealist",
  energyCenter: "Third Eye",
  keywords: ["melting clock", "time", "distortion", "dreamlike"]
},
{
  symbol: "Seed",
  meaning: "Symbolizes potential, growth, and beginnings. A seed may reflect the start of a new journey or idea.",
  archetype: "The Origin",
  energyCenter: "Root",
  keywords: ["seed", "plant", "beginning", "grow"]
},
{
  symbol: "Mountain",
  meaning: "Represents challenges, aspirations, and spiritual pursuit. A mountain suggests the need for perseverance.",
  archetype: "The Climber",
  energyCenter: "Root",
  keywords: ["mountain", "climb", "goal", "obstacle"]
},
{
  symbol: "Eclipse",
  meaning: "Symbolizes temporary obscurity, transformation, and cosmic alignment. An eclipse may reflect hidden truths emerging.",
  archetype: "The Shadow Revealed",
  energyCenter: "Crown",
  keywords: ["eclipse", "sun", "moon", "obscure"]
},
{
  symbol: "Nest",
  meaning: "Represents safety, motherhood, and comfort. A nest reflects home, nurturing, or the start of something new.",
  archetype: "The Nurturer",
  energyCenter: "Heart",
  keywords: ["nest", "home", "egg", "nurture"]
},
  {
  symbol: "Mountain",
  meaning: "Symbolizes challenges, spiritual ascent, and personal growth. Climbing a mountain in a dream often reflects overcoming obstacles and striving for higher goals.",
  archetype: "The Ascent",
  energyCenter: "Crown",
  keywords: ["mountain", "climb", "peak", "summit"]
},
{
  symbol: "Bridge",
  meaning: "Represents transition, connection, and overcoming obstacles. A bridge in a dream may indicate a period of change or the need to connect disparate aspects of life.",
  archetype: "The Connector",
  energyCenter: "Heart",
  keywords: ["bridge", "crossing", "transition"]
},
{
  symbol: "Door",
  meaning: "Symbolizes opportunities, choices, and transitions. A door in a dream can represent new beginnings or the closing of a chapter.",
  archetype: "The Threshold",
  energyCenter: "Throat",
  keywords: ["door", "entry", "exit", "portal"]
},
{
  symbol: "Clock",
  meaning: "Represents the passage of time, urgency, and life's cycles. A clock in a dream may indicate time-related pressures or the importance of timing in one's life.",
  archetype: "The Timekeeper",
  energyCenter: "Third Eye",
  keywords: ["clock", "time", "alarm", "watch"]
},
{
  symbol: "Mask",
  meaning: "Symbolizes hidden aspects, deception, or the persona one presents to the world. A mask in a dream may suggest the need to uncover true feelings or identities.",
  archetype: "The Facade",
  energyCenter: "Throat",
  keywords: ["mask", "disguise", "identity"]
},
{
  symbol: "Labyrinth",
  meaning: "Represents a complex journey, confusion, or the search for self. Navigating a labyrinth in a dream may reflect life's complexities and the quest for clarity.",
  archetype: "The Seeker",
  energyCenter: "Solar Plexus",
  keywords: ["labyrinth", "maze", "path", "journey"]
},
{
  symbol: "Cave",
  meaning: "Symbolizes the subconscious mind, introspection, and hidden truths. A cave in a dream may indicate a retreat into oneself or the exploration of inner depths.",
  archetype: "The Inner Sanctum",
  energyCenter: "Root",
  keywords: ["cave", "darkness", "shelter", "depth"]
},
{
  symbol: "Feather",
  meaning: "Represents lightness, freedom, and spiritual messages. A feather in a dream may signify a connection to the spiritual realm or a sense of liberation.",
  archetype: "The Messenger",
  energyCenter: "Crown",
  keywords: ["feather", "lightness", "flight", "message"]
},
{
  symbol: "Chain",
  meaning: "Symbolizes restriction, connection, or bondage. A chain in a dream may reflect feelings of being held back or the ties that bind relationships.",
  archetype: "The Binder",
  energyCenter: "Root",
  keywords: ["chain", "link", "bond", "restraint"]
},
{
  symbol: "Lantern",
  meaning: "Represents guidance, enlightenment, and hope. A lantern in a dream may indicate the presence of insight or the need for illumination in a situation.",
  archetype: "The Illuminator",
  energyCenter: "Third Eye",
  keywords: ["lantern", "light", "guidance", "hope"]
},
  {
  symbol: "Anchor",
  meaning: "Symbolizes stability, grounding, and holding steady during emotional turbulence. An anchor may reflect a need to stay rooted.",
  archetype: "The Stabilizer",
  energyCenter: "Root",
  keywords: ["anchor", "ground", "hold", "stable"]
},
{
  symbol: "Owl",
  meaning: "Represents wisdom, intuition, and hidden knowledge. An owl may appear when you are being guided to deeper truths.",
  archetype: "The Seer",
  energyCenter: "Third Eye",
  keywords: ["owl", "wisdom", "night", "intuition"]
},
{
  symbol: "Chessboard",
  meaning: "Symbolizes strategy, duality, and conflict resolution. A chessboard suggests calculated decisions or mental challenges.",
  archetype: "The Strategist",
  energyCenter: "Solar Plexus",
  keywords: ["chess", "strategy", "game", "decision"]
},
{
  symbol: "Mirror Maze",
  meaning: "Represents confusion about identity and self-perception. A mirror maze suggests the need to find clarity among illusions.",
  archetype: "The Reflective Labyrinth",
  energyCenter: "Third Eye",
  keywords: ["mirror maze", "reflection", "identity", "confusion"]
},
{
  symbol: "Helmet",
  meaning: "Symbolizes protection of ideas, guarded thoughts, and strategic thinking.",
  archetype: "The Mind Shield",
  energyCenter: "Crown",
  keywords: ["helmet", "armor", "protection", "mind"]
},
{
  symbol: "Roots",
  meaning: "Represents ancestral connection, grounding, and personal foundation.",
  archetype: "The Rooted Self",
  energyCenter: "Root",
  keywords: ["roots", "grounded", "foundation", "ancestry"]
},
{
  symbol: "Chain Link Fence",
  meaning: "Symbolizes boundaries, protection, or restriction from freedom.",
  archetype: "The Barrier",
  energyCenter: "Root",
  keywords: ["fence", "barrier", "limit", "protection"]
},
{
  symbol: "Curtain",
  meaning: "Represents hidden truths or revelations waiting to be unveiled.",
  archetype: "The Veil",
  energyCenter: "Throat",
  keywords: ["curtain", "veil", "hidden", "reveal"]
},
{
  symbol: "Crescent Moon",
  meaning: "Symbolizes growth, cycles, and feminine intuition. The moon often reflects emotional tides.",
  archetype: "The Lunar Guide",
  energyCenter: "Sacral",
  keywords: ["crescent", "moon", "cycle", "emotion"]
},
{
  symbol: "Crystals",
  meaning: "Represents healing, clarity, and spiritual alignment.",
  archetype: "The Aligned Self",
  energyCenter: "Third Eye",
  keywords: ["crystal", "clarity", "healing", "energy"]
},
{
  symbol: "Ship",
  meaning: "Symbolizes life journey, exploration, and the emotional voyage across inner landscapes.",
  archetype: "The Voyager",
  energyCenter: "Heart",
  keywords: ["ship", "sail", "journey", "explore"]
},
{
  symbol: "Fog",
  meaning: "Represents confusion, obscured insight, or the need for patience.",
  archetype: "The Mist of Uncertainty",
  energyCenter: "Third Eye",
  keywords: ["fog", "unclear", "confusion", "mist"]
},
{
  symbol: "Wheel",
  meaning: "Symbolizes cycles, karma, and progress. A wheel may reflect ongoing lessons or the passage of time.",
  archetype: "The Spinner",
  energyCenter: "Solar Plexus",
  keywords: ["wheel", "cycle", "movement", "karma"]
},
{
  symbol: "Suitcase",
  meaning: "Represents emotional baggage, transition, or the need to let go.",
  archetype: "The Carrier",
  energyCenter: "Heart",
  keywords: ["suitcase", "baggage", "travel", "load"]
},
{
  symbol: "Ink",
  meaning: "Symbolizes expression, permanence, and creative imprint.",
  archetype: "The Scribe",
  energyCenter: "Throat",
  keywords: ["ink", "write", "mark", "expression"]
},
{
  symbol: "Nest of Eggs",
  meaning: "Represents potential, new beginnings, and fertility.",
  archetype: "The Birther",
  energyCenter: "Sacral",
  keywords: ["eggs", "nest", "birth", "potential"]
},
{
  symbol: "Dragon",
  meaning: "Represents raw power, fear, and transformation through challenge.",
  archetype: "The Guardian of Power",
  energyCenter: "Solar Plexus",
  keywords: ["dragon", "fire", "strength", "challenge"]
},
{
  symbol: "Hawk",
  meaning: "Symbolizes vision, perspective, and clarity. A hawk suggests rising above to gain insight.",
  archetype: "The Watcher",
  energyCenter: "Third Eye",
  keywords: ["hawk", "vision", "soar", "clarity"]
},
{
  symbol: "Tunnel of Light",
  meaning: "Represents spiritual awakening, transition, or near-death experience imagery.",
  archetype: "The Passage to Illumination",
  energyCenter: "Crown",
  keywords: ["light", "tunnel", "transition", "awakening"]
},
{
  symbol: "Mask Falling Off",
  meaning: "Represents truth being revealed or the collapse of false identity.",
  archetype: "The Unveiled",
  energyCenter: "Throat",
  keywords: ["mask", "truth", "identity", "exposed"]
},
{
  symbol: "Ink Spill",
  meaning: "Symbolizes loss of control, emotional overflow, or a mistake left a mark.",
  archetype: "The Stain",
  energyCenter: "Heart",
  keywords: ["ink", "spill", "mistake", "mess"]
},
{
  symbol: "Sunrise",
  meaning: "Represents hope, renewal, and the start of a new cycle.",
  archetype: "The New Dawn",
  energyCenter: "Crown",
  keywords: ["sunrise", "new", "beginning", "light"]
},
{
  symbol: "Crying Child",
  meaning: "Symbolizes neglected needs, inner child wounds, or emotional vulnerability.",
  archetype: "The Innocent",
  energyCenter: "Heart",
  keywords: ["child", "cry", "hurt", "inner child"]
},
{
  symbol: "Spider",
  meaning: "Represents creativity, fate, and the web of life. A spider may symbolize patience or entrapment.",
  archetype: "The Weaver",
  energyCenter: "Solar Plexus",
  keywords: ["spider", "web", "fate", "create"]
},
{
  symbol: "Telescope",
  meaning: "Symbolizes foresight, curiosity, and expanding vision.",
  archetype: "The Observer",
  energyCenter: "Third Eye",
  keywords: ["telescope", "vision", "future", "focus"]
},
{
  symbol: "Tornado",
  meaning: "Represents emotional chaos, sudden change, or internal destruction.",
  archetype: "The Whirlwind",
  energyCenter: "Solar Plexus",
  keywords: ["tornado", "storm", "chaos", "change"]
},
{
  symbol: "Icicle",
  meaning: "Symbolizes frozen emotions, danger, or the beauty of restraint.",
  archetype: "The Frozen Heart",
  energyCenter: "Heart",
  keywords: ["icicle", "cold", "emotion", "freeze"]
},
{
  symbol: "Island",
  meaning: "Represents isolation, retreat, or the self in solitude.",
  archetype: "The Hermit",
  energyCenter: "Heart",
  keywords: ["island", "solitude", "alone", "retreat"]
},
{
  symbol: "Shattered Clock",
  meaning: "Symbolizes time running out, disrupted routine, or a crisis of aging.",
  archetype: "The Broken Timekeeper",
  energyCenter: "Third Eye",
  keywords: ["clock", "broken", "time", "crisis"]
},
{
  symbol: "Golden Ring",
  meaning: "Represents commitment, unity, or eternal connection.",
  archetype: "The Sacred Bond",
  energyCenter: "Heart",
  keywords: ["ring", "gold", "marriage", "bond"]
},
  {
  symbol: "Train",
  meaning: "Represents life’s direction, momentum, and staying on track. A train may symbolize a journey or a decision already set in motion.",
  archetype: "The Journey",
  energyCenter: "Root",
  keywords: ["train", "track", "ride", "direction"]
},
{
  symbol: "Wolf",
  meaning: "Symbolizes instinct, loyalty, and the call of the wild. A wolf can represent both a protector and a threat.",
  archetype: "The Instinctual",
  energyCenter: "Solar Plexus",
  keywords: ["wolf", "pack", "howl", "instinct"]
},
{
  symbol: "Books",
  meaning: "Symbolize knowledge, learning, and wisdom. Books in dreams may reflect lessons to be learned or truths being revealed.",
  archetype: "The Scholar",
  energyCenter: "Throat",
  keywords: ["books", "reading", "knowledge", "study"]
},
{
  symbol: "Clock Tower",
  meaning: "Represents time’s visibility, structure, and awareness of mortality or deadlines.",
  archetype: "The Timekeeper",
  energyCenter: "Crown",
  keywords: ["clock tower", "time", "structure", "reminder"]
},
{
  symbol: "Treasure Chest",
  meaning: "Symbolizes hidden potential, wealth (material or spiritual), and rewards.",
  archetype: "The Hidden Gift",
  energyCenter: "Heart",
  keywords: ["treasure", "chest", "reward", "hidden"]
},
{
  symbol: "Thorns",
  meaning: "Represents emotional pain, defensiveness, or the presence of hidden difficulties.",
  archetype: "The Wounded Guard",
  energyCenter: "Heart",
  keywords: ["thorns", "pain", "barrier", "wound"]
},
{
  symbol: "Balloon",
  meaning: "Symbolizes hope, aspiration, and letting go. It may also reflect fleeting happiness.",
  archetype: "The Dreamer",
  energyCenter: "Heart",
  keywords: ["balloon", "air", "rise", "float"]
},
{
  symbol: "Chainsaw",
  meaning: "Represents raw power, aggressive change, or emotional overreaction.",
  archetype: "The Disruptor",
  energyCenter: "Solar Plexus",
  keywords: ["chainsaw", "cut", "power", "force"]
},
{
  symbol: "Crown",
  meaning: "Symbolizes authority, spiritual elevation, or a sense of purpose.",
  archetype: "The Sovereign",
  energyCenter: "Crown",
  keywords: ["crown", "royalty", "leadership", "power"]
},
{
  symbol: "Lock",
  meaning: "Represents restriction, mystery, or protection. It may symbolize something you’re not ready to face.",
  archetype: "The Guardian",
  energyCenter: "Throat",
  keywords: ["lock", "closed", "secret", "safe"]
},
{
  symbol: "Lantern Fish",
  meaning: "Symbolizes hidden guidance in darkness, deep emotion, or unexpected insight.",
  archetype: "The Deep Light",
  energyCenter: "Sacral",
  keywords: ["fish", "light", "deep", "guidance"]
},
{
  symbol: "Broken Mirror",
  meaning: "Symbolizes shattered identity, self-image issues, or distorted truth.",
  archetype: "The Fragmented Self",
  energyCenter: "Third Eye",
  keywords: ["broken mirror", "reflection", "self", "truth"]
},
{
  symbol: "Wings",
  meaning: "Represent freedom, spiritual ascension, and escape. Wings often indicate transformation or support from the divine.",
  archetype: "The Uplifted",
  energyCenter: "Crown",
  keywords: ["wings", "fly", "freedom", "ascend"]
},
{
  symbol: "Empty Room",
  meaning: "Symbolizes potential, loneliness, or the subconscious waiting to be filled.",
  archetype: "The Blank Space",
  energyCenter: "Heart",
  keywords: ["room", "empty", "space", "potential"]
},
{
  symbol: "Fireworks",
  meaning: "Symbolizes celebration, intense emotion, or sudden awareness. It may reflect release or a desire for recognition.",
  archetype: "The Reveler",
  energyCenter: "Solar Plexus",
  keywords: ["fireworks", "explosion", "celebration", "emotion"]
},
{
  symbol: "Staircase",
  meaning: "Represents spiritual or emotional progress, either ascending or descending through awareness.",
  archetype: "The Climb",
  energyCenter: "Root",
  keywords: ["staircase", "steps", "progress", "rise"]
},
{
  symbol: "Black Cat",
  meaning: "Symbolizes intuition, mystery, or superstition. It may reflect hidden luck or a magical aspect of life.",
  archetype: "The Familiar",
  energyCenter: "Third Eye",
  keywords: ["cat", "black", "mystery", "luck"]
},
{
  symbol: "Veil",
  meaning: "Represents mystery, spiritual concealment, or an impending revelation.",
  archetype: "The Hidden Truth",
  energyCenter: "Crown",
  keywords: ["veil", "cover", "mystery", "spirit"]
},
{
  symbol: "Sand",
  meaning: "Symbolizes time, impermanence, and shifting foundations.",
  archetype: "The Temporality",
  energyCenter: "Root",
  keywords: ["sand", "time", "foundation", "shifting"]
},
{
  symbol: "Quicksand",
  meaning: "Represents emotional entrapment, anxiety, or situations worsening with struggle.",
  archetype: "The Sinkhole",
  energyCenter: "Solar Plexus",
  keywords: ["quicksand", "trap", "danger", "struggle"]
},
{
  symbol: "Altar",
  meaning: "Symbolizes dedication, sacrifice, or divine communication. It may reflect spiritual rituals.",
  archetype: "The Sacred Space",
  energyCenter: "Crown",
  keywords: ["altar", "sacrifice", "ritual", "worship"]
},
{
  symbol: "Spider Eggs",
  meaning: "Symbolizes hidden creative ideas, potential, or things about to emerge from the subconscious.",
  archetype: "The Creator's Seed",
  energyCenter: "Sacral",
  keywords: ["spider", "eggs", "birth", "potential"]
},
{
  symbol: "Telescope",
  meaning: "Represents vision, anticipation, and far-reaching goals.",
  archetype: "The Farsighted",
  energyCenter: "Third Eye",
  keywords: ["telescope", "vision", "future", "goals"]
},
{
  symbol: "Tattoo",
  meaning: "Symbolizes identity, memory, or a desire for permanence.",
  archetype: "The Marked Self",
  energyCenter: "Heart",
  keywords: ["tattoo", "mark", "identity", "symbol"]
},
{
  symbol: "Forest Fire",
  meaning: "Symbolizes intense transformation, fear, or destruction of the old to make way for the new.",
  archetype: "The Purifier",
  energyCenter: "Solar Plexus",
  keywords: ["fire", "forest", "burn", "purge"]
},
{
  symbol: "Jellyfish",
  meaning: "Represents emotional sensitivity, hidden sting, or adaptability.",
  archetype: "The Flowing Defense",
  energyCenter: "Sacral",
  keywords: ["jellyfish", "emotion", "sting", "float"]
},
{
  symbol: "Windmill",
  meaning: "Symbolizes resourcefulness, transformation of energy, or repetitive cycles.",
  archetype: "The Converter",
  energyCenter: "Throat",
  keywords: ["windmill", "wind", "energy", "movement"]
},
{
  symbol: "Marionette",
  meaning: "Represents control, manipulation, or feeling powerless.",
  archetype: "The Puppet",
  energyCenter: "Solar Plexus",
  keywords: ["marionette", "control", "strings", "manipulate"]
},
{
  symbol: "Echo",
  meaning: "Symbolizes repetition, memory, or the call to listen within.",
  archetype: "The Resonator",
  energyCenter: "Throat",
  keywords: ["echo", "repeat", "voice", "memory"]
},
{
  symbol: "Geode",
  meaning: "Represents inner beauty, hidden potential, and the rewards of introspection.",
  archetype: "The Hidden Jewel",
  energyCenter: "Heart",
  keywords: ["geode", "crystal", "inside", "hidden"]
},
{
  symbol: "Hourglass",
  meaning: "Represents mortality, balance, and the perception of limited time.",
  archetype: "The Sands of Time",
  energyCenter: "Third Eye",
  keywords: ["hourglass", "time", "sand", "limit"]
},

{
  symbol: "Owl",
  meaning: "Symbolizes wisdom, intuition, and secrets revealed. An owl may signal clarity during darkness.",
  archetype: "The Nocturnal Seer",
  energyCenter: "Third Eye",
  keywords: ["owl", "wisdom", "night", "insight"]
},

  {
    symbol: "Rainbow",
    meaning: "Symbolizes hope, promise, and connection between the earthly and spiritual realms. A rainbow often signifies the harmony between opposites and a time of emotional healing.",
    archetype: "Bridge of Light",
    energyCenter: "Crown",
    keywords: ["rainbow", "colors", "promise"]
  },
  {
    symbol: "Snake",
    meaning: "Represents transformation, healing, and awakening of hidden power. A snake can symbolize the shedding of old layers or a call to address unresolved issues.",
    archetype: "The Healer",
    energyCenter: "Root",
    keywords: ["snake", "serpent", "transformation"]
  },
  {
    symbol: "Tree",
    meaning: "Represents growth, grounding, and connection to both the material and spiritual realms. A tree signifies stability, wisdom, and family roots.",
    archetype: "The Wise Ancestor",
    energyCenter: "Root",
    keywords: ["tree", "roots", "growth", "nature"]
  },
  {
    symbol: "Butterfly",
    meaning: "Symbolizes transformation, metamorphosis, and the potential for change. Butterflies represent the soul's journey and personal growth.",
    archetype: "The Transformer",
    energyCenter: "Solar Plexus",
    keywords: ["butterfly", "metamorphosis", "change"]
  },
  {
    symbol: "Fire",
    meaning: "Represents passion, purification, and destruction. Fire can symbolize intense emotions, the need for transformation, or a fiery spirit.",
    archetype: "The Flame of Rebirth",
    energyCenter: "Solar Plexus",
    keywords: ["fire", "flame", "heat", "passion"]
  },
  {
    symbol: "Storm",
    meaning: "Represents inner turmoil, emotional upheaval, or a warning of impending change. A storm may signify the need to weather emotional intensity.",
    archetype: "The Tempest",
    energyCenter: "Throat",
    keywords: ["storm", "rain", "winds", "chaos"]
  },
  {
    symbol: "Ocean",
    meaning: "Symbolizes the unconscious mind, vast emotions, and the depth of spiritual knowledge. The ocean represents the unknown and the mysteries of existence.",
    archetype: "The Deep Waters",
    energyCenter: "Sacral",
    keywords: ["ocean", "sea", "waves", "depth"]
  },
  {
    symbol: "Bird",
    meaning: "Represents freedom, higher perspective, and spiritual insight. Birds are often messengers, symbolizing communication from the divine or the soul's desire to soar.",
    archetype: "The Messenger",
    energyCenter: "Crown",
    keywords: ["bird", "flight", "freedom", "wing"]
  },
  {
    symbol: "Scales",
    meaning: "Symbolizes balance, justice, and weighing of decisions. Scales in a dream can indicate a need to find equilibrium in one's life or moral decisions to be made.",
    archetype: "The Judge",
    energyCenter: "Solar Plexus",
    keywords: ["scales", "balance", "justice"]
  },
  {
    symbol: "Mirror",
    meaning: "Represents self-reflection, truth, and facing one's own identity. A mirror in a dream can indicate the need to confront hidden aspects of the self.",
    archetype: "The Reflective Self",
    energyCenter: "Third Eye",
    keywords: ["mirror", "reflection", "truth"]
  },
  {
    symbol: "Candlelight",
    meaning: "Symbolizes enlightenment, insight, and the search for truth. A flickering candle signifies a soft illumination or the presence of a spiritual guide.",
    archetype: "Light of Truth",
    energyCenter: "Crown",
    keywords: ["candlelight", "illumination", "guidance"]
  },
  {
    symbol: "Key",
    meaning: "Represents access, opportunities, and the unlocking of hidden potential. A key can symbolize the answer to a problem or a new opportunity opening up.",
    archetype: "The Unlocker",
    energyCenter: "Throat",
    keywords: ["key", "unlock", "opportunity"]
  },
  {
    symbol: "Lighthouse",
    meaning: "Represents guidance, protection, and spiritual clarity in times of darkness. A lighthouse signals hope and direction during uncertain times.",
    archetype: "Beacon of Hope",
    energyCenter: "Heart",
    keywords: ["lighthouse", "guidance", "light"]
  },
  {
    symbol: "Bell",
    meaning: "Represents awakening, spiritual call, and a shift in consciousness. A ringing bell can symbolize a moment of clarity or an urgent message from the divine.",
    archetype: "The Divine Signal",
    energyCenter: "Throat",
    keywords: ["bell", "ring", "sound", "alert"]
  },
  {
    symbol: "Pyramid",
    meaning: "Symbolizes the pursuit of higher knowledge, spiritual awakening, and ascension. A pyramid represents a journey towards enlightenment or an accomplishment of personal goals.",
    archetype: "The Ascent",
    energyCenter: "Crown",
    keywords: ["pyramid", "structure", "elevation"]
  },
  {
    symbol: "Footprints",
    meaning: "Symbolize your path in life, the journey you're on, and the legacy you leave behind. Footprints can represent progress or the need to follow in another's steps.",
    archetype: "The Pathmaker",
    energyCenter: "Root",
    keywords: ["footprints", "journey", "steps"]
  },
  {
    symbol: "Ladder",
    meaning: "Represents progress, spiritual ascent, and the pursuit of goals. A ladder can symbolize overcoming obstacles or climbing to new heights of achievement.",
    archetype: "The Climber",
    energyCenter: "Root",
    keywords: ["ladder", "climb", "elevation"]
  },
  {
    symbol: "Glove",
    meaning: "Represents protection, control, and the ability to handle a situation. A glove can symbolize the need to protect oneself or take control of your life.",
    archetype: "The Protector",
    energyCenter: "Heart",
    keywords: ["glove", "protection", "covering"]
  },
  {
    symbol: "Waterfall",
    meaning: "Represents emotional release, cleansing, and the flow of life. A waterfall in a dream can indicate emotional overwhelm or a significant release of feelings.",
    archetype: "The Flow of Emotions",
    energyCenter: "Sacral",
    keywords: ["waterfall", "flow", "water", "cleansing"]
  },
  {
    symbol: "Dove",
    meaning: "Represents peace, love, and spiritual harmony. A dove is a symbol of reconciliation, purity, and divine presence.",
    archetype: "The Peacebringer",
    energyCenter: "Crown",
    keywords: ["dove", "peace", "love"]
  },
  {
    symbol: "Frog",
    meaning: "Symbolizes transformation, healing, and renewal. A frog can represent a significant change or a call to cleanse emotional baggage.",
    archetype: "The Healer",
    energyCenter: "Sacral",
    keywords: ["frog", "transformation", "change"]
  },
  {
    symbol: "Compass",
    meaning: "Represents direction, guidance, and finding one's way. A compass can symbolize the need for clarity or the pursuit of a meaningful path.",
    archetype: "The Navigator",
    energyCenter: "Heart",
    keywords: ["compass", "direction", "guidance"]
  },
  {
    symbol: "Spider Web",
    meaning: "Represents interconnectedness, creativity, and the complexity of life. A spider web signifies the intricate connections and paths we navigate.",
    archetype: "The Weaver",
    energyCenter: "Solar Plexus",
    keywords: ["spider web", "connections", "web"]
  },
  {
    symbol: "Phoenix",
    meaning: "Represents rebirth, transformation, and rising from the ashes. The phoenix symbolizes the ability to overcome hardships and emerge stronger.",
    archetype: "The Resurrected",
    energyCenter: "Solar Plexus",
    keywords: ["phoenix", "rebirth", "transformation"]
  }
];

function interpretDream() {
  const input = document.getElementById("dreamInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  let found = false;

  dreamData.forEach(symbol => {
    if (symbol.keywords.some(keyword => input.includes(keyword))) {
      found = true;
      resultsDiv.innerHTML += `
        <div class="result-box">
          <strong>🧠 Symbol:</strong> ${symbol.symbol}<br/>
          <strong>💬 Meaning:</strong> ${symbol.meaning}<br/>
          <strong>🔱 Archetype:</strong> ${symbol.archetype}<br/>
          <strong>🕉️ Energy Center:</strong> ${symbol.energyCenter}
        </div>
      `;
    }
  });

  if (!found) {
    resultsDiv.innerHTML = `
      <div class="result-box">
        <strong>⚠️ No direct match found.</strong><br/>
        Your dream may contain subtle archetypes or personal symbolism. Consider meditating or journaling on it for deeper insight.
      </div>
    `;
  }
}
