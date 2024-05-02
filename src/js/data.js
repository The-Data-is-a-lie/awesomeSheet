var data = (function() {

  var _all_spellsObject = null;
  var _all_spellsName = [
    "Abadar's Truthtelling", "Abeyance", "Ablative Barrier", "Ablative Sphere", "Aboleth's Lung", "Absolution", "Absorb Rune I", "Absorb Rune II", "Absorb Rune III", "Absorb Toxicity", "Absorbing Inhalation", "Absorbing Touch", "Abstemiousness", "Absurdity", "Abundant Ammunition", "Abyssal Vermin", "Accelerate Poison", "Accept Affliction", "Accursed Glare", "Acid Arrow", "Acid Fog", "Acid Maw", "Acid Pit", "Acid Splash", "Acidic Spray", "Acute Senses", "Adhesive Blood", "Adhesive Spittle", "Adjuring Step", "Adjustable Disguise", "Adjustable Polymorph", "Adoration", "Adroit Retrieval", "Advanced Scurvy", "Aerial Tracks", "Age Resistance", "Age Resistance, Greater", "Age Resistance, Lesser", "Aggravate Affliction", "Aggressive Thundercloud", "Aggressive Thundercloud, Greater", "Agonize", "Agonizing Rebuke", "Aid", "Air Breathing", "Air Bubble", "Air Geyser", "Air Of Authority", "Air Step", "Air Walk", "Air Walk, Communal", "Akashic Communion", "Akashic Form", "Alarm", "Alaznist's Jinx", "Alchemical Allocation", "Alchemical Tinkering", "Aldori Alacrity", "Align Weapon", "Align Weapon, Communal", "Allegro", "Alleviate Addiction", "Alleviate Corruption", "Allfood", "Allied Cloak", "Alluring Spores", "Ally Across Time", "Alter Musical Instrument", "Alter River", "Alter Self", "Alter Summoned Monster", "Alter Winds", "Amnesia", "Amplify Elixir", "Amplify Stench", "Analyze Aura", "Analyze Dweomer", "Ancestral Communion", "Ancestral Gift", "Ancestral Memory", "Ancestral Regression", "Anchored Step", "Angelic Aspect", "Angelic Aspect, Greater", "Angelic Aspect, Lesser", "Animal Ambassador", "Animal Aspect", "Animal Aspect, Greater", "Animal Growth", "Animal Messenger", "Animal Purpose Training", "Animal Shapes", "Animal Trance", "Animate Dead", "Animate Dead, Lesser", "Animate Objects", "Animate Plants", "Animate Rope", "Animus Mine", "Animus Mine, Greater", "Anonymous Interaction", "Ant Haul", "Ant Haul, Communal", "Anthropomorphic Animal", "Anti-Incorporeal Shell", "Anti-Summoning Shield", "Anticipate Peril", "Anticipate Thoughts", "Antilife Shell", "Antimagic Field", "Antipathy", "Antiplant Shell", "Antitech Field", "Antithetical Constraint", "Apathy", "Ape Walk", "Aphasia", "Apparent Treachery", "Appearance Of Life", "Appearance Of Life, Greater", "Apport Animal", "Apport Object", "Apsu's Shining Scales", "Aquatic Trail", "Aqueous Orb", "Aram Zey's Focus", "Aram Zey's Trap Ward", "Arbitrament", "Arboreal Hammer", "Arcana Theft", "Arcane Cannon", "Arcane Concordance", "Arcane Disruption", "Arcane Eye", "Arcane Lock", "Arcane Mark", "Arcane Pocket", "Arcane Reinforcement", "Arcane Sight", "Arcane Sight, Greater", "Archon's Aura", "Archon's Trumpet", "Ardor's Onslaught", "Army Across Time", "Aroden's Magic Army", "Aroden's Spellbane", "Aroden's Spellsword", "Arrow Eruption", "Arrow of Law", "Artificer's Curse", "Ascension", "Ash Storm", "Aspect of the Bear", "Aspect of the Falcon", "Aspect of the Nightingale", "Aspect of the Stag", "Aspect of the Wolf", "Assume Appearance", "Assume Appearance, Greater", "Assumed Likeness", "Astral Projection", "Astral Projection, Lesser", "Atavism", "Atavism, Mass", "Atonement", "Audiovisual Hallucination", "Auditory Hallucination", "Augmenting Wall", "Augury", "Aura Alteration", "Aura Of Cannibalism", "Aura Of Distraction", "Aura of Doom", "Aura of Greater Courage", "Aura Of Inviolate Ownership", "Aura Of The Unremarkable", "Aura Sight", "Authenticating Gaze", "Aversion", "Awaken", "Awaken Construct", "Awaken the Devoured", "Babble", "Badger's Ferocity", "Balance Of Suffering", "Baleful Polymorph", "Baleful Shadow Transmutation", "Ball Lightning", "Ban Corruption", "Bane", "Banish Seeming", "Banishing Blade", "Banishment", "Banshee Blast", "Baphomet's Blessing", "Barbed Chains", "Bard's Escape", "Barghest Feast", "Barkskin", "Barrow Haze", "Batrachian Surge", "Battering Blast", "Battle Trance", "Battlemind Link", "Beacon Of Guilt", "Beacon Of Luck", "Beanstalk", "Bear's Endurance", "Bear's Endurance, Mass", "Beast Shape I", "Beast Shape II", "Beast Shape III", "Beast Shape IV", "Beastspeak", "Bed Of Iron", "Befuddled Combatant", "Beguiling Gift", "Beloved Of The Forge", "Bereave", "Besmara's Grasping Depths", "Bestow Auras", "Bestow Curse", "Bestow Curse, Greater", "Bestow Grace", "Bestow Grace of the Champion", "Bestow Insight", "Bestow Weapon Proficiency", "Betraying Sting", "Billowing Skirt", "Bilocation", "Bind Sage", "Binding", "Binding Earth", "Binding Earth, Mass", "Bit Of Luck", "Bite the Hand", "Bite the Hand, Mass", "Biting Words", "Black Mark", "Black Spot", "Black Sword Of War", "Black Tentacles", "Blade Barrier", "Blade Lash", "Blade of Bright Victory", "Blade of Dark Triumph", "Blade Of Light", "Blade Snare", "Blade Tutor's Spirit", "Bladed Dash", "Bladed Dash, Greater", "Blasphemy", "Blast Barrier", "Blaze of Glory", "Blazing Rainbow", "Bleaching Resistance", "Bleed", "Bleed For Your Master", "Bleed Glory", "Bleeding Strike", "Blend", "Blend With Surroundings", "Bless", "Bless Army", "Bless Water", "Bless Weapon", "Blessed Fist", "Blessing of Courage and Life", "Blessing Of Fervor", "Blessing Of Liberty", "Blessing Of Luck And Resolve", "Blessing Of Luck And Resolve, Mass", "Blessing of the Mole", "Blessing of the Salamander", "Blessing Of The Watch", "Blight", "Blightburn Weapon", "Blinding Ray", "Blindness/Deafness", "Blink", "Blistering Invective", "Bloatbomb", "Blood Armor", "Blood Biography", "Blood Blaze", "Blood Boil", "Blood Crow Strike", "Blood In The Water", "Blood Mist", "Blood Money", "Blood Of The Martyr", "Blood Rage", "Blood Salvation", "Blood Scent", "Blood Sentinel", "Blood Song", "Blood Tentacles", "Blood Ties", "Blood Transcription", "Bloodbath", "Bloodhound", "Bloody Arrows", "Bloody Claws", "Bloody Tears And Jagged Smile", "Blot", "Blur", "Blurred Movement", "Body Capacitance", "Body Double", "Boiling Blood", "Bomber's Eye", "Bone Fists", "Bone Flense", "Boneshaker", "Boneshatter", "Book Ward", "Borrow Corruption", "Borrow Fortune", "Borrow Skill", "Borrowed Time", "Bouncing Bomb Admixture", "Bouncy Body", "Bountiful Banquet", "Bow Spirit", "Bowstaff", "Brand", "Brand Of Conformity", "Brand Of Hobbling", "Brand Of Tracking", "Brand, Greater", "Break", "Break Enchantment", "Break, Greater", "Breath Of Life", "Breeze", "Brightest Light", "Brilliant Inspiration", "Bristle", "Brittle Portal", "Brow Gasher", "Build Trust", "Bull's Strength", "Bull's Strength, Mass", "Bullet Shield", "Bullet Ward", "Bungle", "Buoyancy", "Burdened Thoughts", "Burn Corruption", "Burning Arc", "Burning Disarm", "Burning Entanglement", "Burning Gaze", "Burning Hands", "Burning Sands", "Burrow", "Burst Bonds", "Burst Of Adrenaline", "Burst Of Force", "Burst Of Glory", "Burst Of Insight", "Burst of Nettles", "Burst Of Radiance", "Burst of Speed", "Burst With Light", "Business Booms", "Cackling Skull", "Cacophonous Call", "Cacophonous Call, Mass", "Caging Bomb Admixture", "Calcific Touch", "Calculated Luck", "Calistria's Guardian Wasps", "Call Animal", "Call Construct", "Call Lightning", "Call Lightning Storm", "Call Spirit", "Call the Void", "Call Weapon", "Callback", "Callback, Greater", "Calm Air", "Calm Animals", "Calm Emotions", "Calm Spirit", "Campfire Wall", "Canopic Conversion", "Cape Of Wasps", "Carrion Compass", "Carry Companion", "Cast Out", "Castigate", "Castigate, Mass", "Cat's Grace", "Cat's Grace, Mass", "Catatonia", "Cause Fear", "Caustic Blood", "Caustic Eruption", "Caustic Safeguard", "Cauterizing Weapon", "Celestial Healing", "Celestial Healing, Greater", "Ceremony", "Certain Grip", "Chain Lightning", "Chain of Perdition", "Chains Of Fire", "Chains Of Light", "Challenge Evil", "Chameleon Scales", "Chameleon Stride", "Chameleon Stride, Greater", "Champion's Bout", "Changestaff", "Channel The Gift", "Channel Vigor", "Chaos Hammer", "Charge Object", "Charitable Impulse", "Charm Animal", "Charm Fey", "Charm Monster", "Charm Monster, Mass", "Charm Person", "Charm Person, Mass", "Charnel House", "Charon's Dispensation", "Chastise", "Cheetah's Sprint", "Chill Metal", "Chill Touch", "Chord Of Shards", "Circle Of Clarity", "Circle Of Death", "Claim Identity", "Claim Identity, Greater", "Clairaudience/Clairvoyance", "Clarion Call", "Clashing Rocks", "Cleanse", "Cleansing Fire", "Clear Grove", "Clenched Fist", "Cleromancy", "Climbing Beanstalk", "Cloak of Chaos", "Cloak of Dreams", "Cloak Of Secrets", "Cloak of Shade", "Cloak Of Shadows", "Cloak of Winds", "Clone", "Cloud Of Seasickness", "Cloud Shape", "Cloudkill", "Codespeak", "Cognitive Block", "Coin Shot", "Cold Ice Strike", "Cold Iron Fetters", "Collaborative Thaumaturgy", "Color Spray", "Command", "Command Plants", "Command Undead", "Command, Greater", "Commune", "Commune With Birds", "Commune with Nature", "Commune With Texts", "Companion Life Link", "Companion Mind Link", "Compassionate Ally", "Compel Hostility", "Compel Tongue", "Compel Tongue, Mass", "Compelling Rant", "Complex Hallucination", "Comprehend Languages", "Compulsive Liar", "Concealed Breath", "Condensed Ether", "Conditional Curse", "Conditional Favor", "Cone of Cold", "Confess", "Confusion", "Confusion, Lesser", "Conjuration Foil", "Conjure Black Pudding", "Conjure Carriage", "Conjure Deadfall", "Consecrate", "Constricting Coils", "Contact Entity I", "Contact Entity II", "Contact Entity III", "Contact Entity IV", "Contact High", "Contact Nalfeshnee", "Contact Other Plane", "Contagion", "Contagion, Greater", "Contagious Flame", "Contagious Suggestion", "Contagious Zeal", "Contest Of Skill", "Contingency", "Contingent Action", "Contingent Scroll", "Contingent Venom", "Continual Flame", "Control Construct", "Control Plants", "Control Summoned Creature", "Control Undead", "Control Vermin", "Control Water", "Control Weather", "Control Winds", "Controlled Fireball", "Conversing Wind", "Coordinated Effort", "Corpse Hammer", "Corpse Lanterns", "Corrosive Consumption", "Corrosive Touch", "Corruption Resistance", "Cosmic Ray", "Counterbalancing Aura", "Countless Eyes", "Covetous Aura", "Covetous Urge", "Coward's Cowl", "Coward's Lament", "Crafter's Curse", "Crafter's Fortune", "Crafter's Nightmare", "Create Armaments", "Create Demiplane", "Create Demiplane, Greater", "Create Demiplane, Lesser", "Create Drug", "Create Food and Water", "Create Greater Undead", "Create Holds", "Create Mindscape", "Create Mindscape, Greater", "Create Pit", "Create Soul Gem", "Create Treasure Map", "Create Undead", "Create Variant Mummy", "Create Water", "Creeping Doom", "Creeping Ice", "Crime Of Opportunity", "Crime Wave", "Crimson Breath", "Crimson Confession", "Cruel Jaunt", "Crusader's Edge", "Crushing Despair", "Crushing Hand", "Cultural Adaptation", "Cup Of Dust", "Curative Distillation", "Cure Critical Wounds", "Cure Critical Wounds, Mass", "Cure Light Wounds", "Cure Light Wounds, Mass", "Cure Moderate Wounds", "Cure Moderate Wounds, Mass", "Cure Serious Wounds", "Cure Serious Wounds, Mass", "Curse Item", "Curse Of Befouled Fortune", "Curse Of Burning Sleep", "Curse Of Disgust", "Curse Of Fell Seasons", "Curse Of Keeping", "Curse of Magic Negation", "Curse Of Night", "Curse Of The Outcast", "Curse Of Unexpected Death", "Curse Terrain", "Curse Terrain, Greater", "Curse Terrain, Lesser", "Curse Terrain, Supreme", "Curse Water", "Curse, Major", "Cursed Earth", "Cursed Treasure", "Cushioning Bands", "Cyclic Reincarnation", "Daemon Ward", "Daggermark's Exchange", "Dahak's Release", "Damnation", "Damnation Of Memory", "Damnation Stride", "Damp Powder", "Dance of a Hundred Cuts", "Dance of a Thousand Cuts", "Dancing Darkness", "Dancing Lantern", "Dancing Lights", "Dark Whispers", "Dark-Light", "Darkness", "Darkvault", "Darkvision", "Darkvision, Communal", "Darkvision, Greater", "Darting Duplicate", "Daybreak Arrow", "Daylight", "Daywalker", "Daze", "Daze Monster", "Daze, Mass", "Dazzling Blade", "Dazzling Blade, Mass", "Dead Eye's Arrow", "Deadeye's Lore", "Deadly Finale", "Deadly Juggernaut", "Deadman's Contingency", "Deafening Song Bolt", "Death Candle", "Death Clutch", "Death From Below", "Death Knell", "Death Knell Aura", "Death Knell Aura, Greater", "Death Pact", "Death Ward", "Deathless", "Deathwatch", "Deathwine", "Debilitating Pain", "Debilitating Pain, Mass", "Debilitating Portent", "Decapitate", "Deceitful Veneer", "Deceptive Redundancy", "Decollate", "Decompose Corpse", "Decrepit Disguise", "Deep Slumber", "Deeper Darkness", "Defending Bone", "Defensive Shock", "Defile Armor", "Deflect Blame", "Deflection", "Defoliate", "Deft Digits", "Deivon's Parry", "Deja Vu", "Delay Disease", "Delay Pain", "Delay Poison", "Delay Poison, Communal", "Delayed Blast Fireball", "Delayed Consumption", "Delusional Pride", "Demand", "Demand Offering", "Demanding Message", "Demanding Message, Mass", "Denounce", "Depilate", "Desecrate", "Desperate Weapon", "Destabilize Powder", "Destroy Robot", "Destruction", "Detect Aberration", "Detect Animals or Plants", "Detect Anxieties", "Detect Chaos", "Detect Charm", "Detect Demon", "Detect Desires", "Detect Evil", "Detect Fiendish Presence", "Detect Good", "Detect Law", "Detect Magic", "Detect Magic, Greater", "Detect Metal", "Detect Mindscape", "Detect Poison", "Detect Psychic Significance", "Detect Radiation", "Detect Relations", "Detect Scrying", "Detect Secret Doors", "Detect Snares and Pits", "Detect The Faithful", "Detect Thoughts", "Detect Undead", "Determine Depth", "Detonate", "Detoxify", "Devil Snare", "Devolution", "Diagnose Disease", "Dictum", "Die For Your Master", "Dimension Door", "Dimensional Anchor", "Dimensional Blade", "Dimensional Bounce", "Dimensional Lock", "Diminish Plants", "Diminish Resistance", "Diminished Detection", "Dirge Of The Victorious Knights", "Disable Construct", "Discern Lies", "Discern Location", "Discern Next Of Kin", "Discern Value", "Discharge", "Discharge, Greater", "Discordant Blast", "Discovery Torch", "Disfiguring Touch", "Disguise Other", "Disguise Self", "Disguise Weapon", "Disintegrate", "Dismissal", "Dispel Balance", "Dispel Chaos", "Dispel Evil", "Dispel Good", "Dispel Law", "Dispel Magic", "Dispel Magic, Greater", "Displacement", "Display Aversion", "Disrupt Link", "Disrupt Silence", "Disrupt Undead", "Disrupting Weapon", "Dissolution", "Distracting Cacophony", "Distressing Tone", "Divide Mind", "Divination", "Divine Arrow", "Divine Favor", "Divine Power", "Divine Pursuit", "Divine Transfer", "Divine Vessel", "Dominate Animal", "Dominate Monster", "Dominate Person", "Domination Link", "Dongun Shaper's Touch", "Doom", "Dousing Rain", "Draconic Ally", "Draconic Malice", "Draconic Reservoir", "Draconic Suppression", "Dragon Turtle Shell", "Dragon's Breath", "Dragonvoice", "Drain Poison", "Dread Bolt", "Dreadscape", "Dream", "Dream Council", "Dream Dalliance", "Dream Feast", "Dream Reality", "Dream Scan", "Dream Shield", "Dream Travel", "Dream Voyage", "Drench", "Dress Corpse", "Dungeonsight", "Duplicate Familiar", "Dust Form", "Dust Of Twilight", "Dust Ward", "Dweomer Retaliation", "Eagle Aerie", "Eagle Eye", "Eagle's Splendor", "Eagle's Splendor, Mass", "Eaglesoul", "Ear-Piercing Scream", "Early Judgment", "Ears Of The City", "Earsend", "Earth Glide", "Earthquake", "Echean's Excellent Enclosure", "Echolocation", "Ectoplasmic Eruption", "Ectoplasmic Hand", "Ectoplasmic Snare", "Effortless Armor", "Ego Whip I", "Ego Whip II", "Ego Whip III", "Ego Whip IV", "Ego Whip V", "Egorian Diplomacy", "Eldritch Conduit", "Eldritch Conduit, Greater", "Eldritch Fever", "Elemental Assessor", "Elemental Aura", "Elemental Body I", "Elemental Body II", "Elemental Body III", "Elemental Body IV", "Elemental Bombardment", "Elemental Mastery", "Elemental Speech", "Elemental Swarm", "Elemental Touch", "Elude Time", "Emblazon Crest", "Emblem Of Greed", "Embrace Destiny", "Emergency Force Sphere", "Emotive Block", "Empathy Conduit", "Empower Holy Water", "Enchantment Foil", "Enchantment Sight", "Endothermic Touch", "Endure Elements", "Endure Elements, Communal", "Enemy Hammer", "Enemy Insight", "Enemy's Heart", "Energy Drain", "Energy Hack", "Energy Siege Shot", "Energy Siege Shot, Greater", "Enervation", "Enhance Water", "Enlarge Person", "Enlarge Person, Mass", "Enlarge Tail", "Enlightened Step", "Enshroud Thoughts", "Entangle", "Enter Image", "Enthrall", "Entice Fey", "Entice Fey, Greater", "Entice Fey, Lesser", "Enticing Adulation", "Entomb", "Entrap Spirit", "Entropic Shield", "Envious Urge", "Epidemic", "Erase", "Erase Impressions", "Erode Defenses", "Eruptive Pustules", "Escape Alarm", "Escaping Ward", "Ethereal Envelope", "Ethereal Envelopment", "Ethereal Fists", "Ethereal Jaunt", "Etherealness", "Etheric Shards", "Euphoric Cloud", "Euphoric Tranquility", "Evaluator's Lens", "Evolution Surge", "Evolution Surge, Greater", "Evolution Surge, Lesser", "Excruciating Deformation", "Expeditious Construction", "Expeditious Excavation", "Expeditious Retreat", "Expend", "Explode Head", "Explosion Of Rot", "Explosive Runes", "Exquisite Accompaniment", "Extreme Buoyancy", "Extreme Flexibility", "Eyebite", "Eyes Of The Void", "Fable Tapestry", "Fabricate", "Fabricate Bullets", "Fabricate Disguise", "Face Of The Devourer", "Faerie Fire", "Fairness", "Fairy Ring Retreat", "Fallback Strategy", "False Alibi", "False Belief", "False Face", "False Future", "False Life", "False Life, Greater", "False Resurrection", "False Resurrection, Greater", "False Vision", "False Vision, Greater", "Familiar Double", "Familiar Figment", "Familiar Melding", "Fear", "Fear The Sun", "Fearsome Duplicate", "Feast Of Ashes", "Feast On Fear", "Feather Fall", "Feather Step", "Feather Step, Mass", "Feeblemind", "Ferment", "Fester", "Fester, Mass", "Fey Gate", "Fickle Winds", "Fiery Body", "Fiery Runes", "Fiery Shuriken", "Film Of Filth", "Final Sacrifice", "Find Fault", "Find Quarry", "Find the Path", "Find Traps", "Finger Of Death", "Fins To Feet", "Fire Breath", "Fire of Entanglement", "Fire of Judgment", "Fire of Vengeance", "Fire Seeds", "Fire Shield", "Fire Snake", "Fire Sneeze", "Fire Storm", "Fire Trail", "Fire Trap", "Fire's Friend", "Fireball", "Firebelly", "Firebrand", "Firefall", "Firestream", "Firewalker's Meditation", "First World Revisions", "Flame Arrow", "Flame Blade", "Flame Strike", "Flames Of The Faithful", "Flaming Aura", "Flaming Sphere", "Flaming Sphere, Greater", "Flare", "Flare Burst", "Flash Fire", "Flash Forward", "Fleeting Defect", "Fleeting Memory", "Fleeting Memory, Mass", "Flesh Puppet", "Flesh Puppet Horde", "Flesh to Stone", "Flesh Wall", "Fleshcurdle", "Fleshwarping Swarm", "Fleshworm Infestation", "Fleshy Facade", "Flexible Fury", "Flexile Curse", "Flickering Lights", "Floating Disk", "Fluid Form", "Flurry Of Snowballs", "Fly", "Fly, Mass", "Focused Scrutiny", "Foe to Friend", "Fog Cloud", "Follow Aura", "Font Of Spirit Magic", "Fool's Forbiddance", "Fool's Gold", "Fool's Teleport", "Forbid Action", "Forbid Action, Greater", "Forbiddance", "Force Anchor", "Force Hook Charge", "Force Punch", "Force Sword", "Forcecage", "Forced Quiet", "Forced Repentance", "Forceful Hand", "Forceful Strike", "Foresight", "Forest Friend", "Foretell Failure", "Forgetful Slumber", "Form Of The Alien Dragon I", "Form Of The Alien Dragon II", "Form Of The Alien Dragon III", "Form of the Dragon I", "Form of the Dragon II", "Form of the Dragon III", "Form Of The Exotic Dragon I", "Form Of The Exotic Dragon II", "Form Of The Exotic Dragon III", "Foster Hatred", "Fox's Cunning", "Fox's Cunning, Mass", "Fractions Of Heal And Harm", "Free Spirit", "Free Swim", "Freedom", "Freedom of Movement", "Freedom's Toast", "Freezing Sphere", "Frightful Aspect", "Frigid Souls", "Frigid Touch", "Frost Fall", "Frost Mammoth", "Frostbite", "Frosthammer", "Frosty Aura", "Frozen Note", "Full Pouch", "Fumblestep", "Fumbletongue", "Funereal Weapon", "Fungal Blisters", "Fungal Infestation", "Furious Fire Barrage", "Fury Of The Sun", "Gallant Inspiration", "Garden Of Peril", "Garrulous Grin", "Gaseous Form", "Gate", "Geas, Lesser", "Geas/Quest", "Geb's Hammer", "Geniekind", "Genius Avaricious", "Gentle Breeze", "Gentle Repose", "Geomessage", "Getaway", "Geyser", "Ghost Brand", "Ghost Sound", "Ghost Whip", "Ghost Wolf", "Ghostbane Dirge", "Ghostbane Dirge, Mass", "Ghostly Disguise", "Ghoul Hunger", "Ghoul touch", "Giant Form I", "Giant Form II", "Giant Vermin", "Gift Of The Deep", "Gilded Whispers", "Gird Ally", "Glibness", "Glide", "Glimpse Of The Akashic", "Glimpse Of Truth", "Glitterdust", "Globe Of Invulnerability", "Globe of Invulnerability, Lesser", "Globe Of Tranquil Water", "Gloomblind Bolts", "Glue Seal", "Glyph Of Warding", "Glyph of Warding, Greater", "Golden Guise", "Good Hope", "Goodberry", "Gorum's Armor", "Gozreh's Trident", "Grace", "Grand Destiny", "Grappling Scarf", "Grasp", "Grasping Corpse", "Grasping Hand", "Grasping Tentacles", "Grave Words", "Gravel Vortex", "Gravity Bow", "Gravity Sphere", "Gravity Well", "Grease", "Grease, Greater", "Green Caress", "Greensight", "Grim Stalker", "Groundswell", "Grove of Respite", "Guardian Armor", "Guardian Monument, Greater", "Guardian Monument, Lesser", "Guardian Of Faith", "Guarding Knowledge", "Guards and Wards", "Guidance", "Guiding Star", "Gullibility", "Gust Of Wind", "Gusting Sphere", "Hairline Fractures", "Half-Blood Extraction", "Hallow", "Hallucinatory Terrain", "Hallucinogenic Smoke", "Halt Undead", "Hammer Of Mending", "Handy Grapnel", "Hanspur's Flotsam Vessel", "Harm", "Harmless Form", "Harrowing", "Harrowing, Greater", "Harvest Knowledge", "Harvest Season", "Haste", "Haunted Fey Aspect", "Haunting Choir", "Haunting Mists", "Haunting Reminder", "Haze Of Dreams", "Heal", "Heal Mount", "Heal, Mass", "Healing Flames", "Healing Thief", "Healing Token", "Healing Warmth", "Heart Of The Mammoth", "Heart Of The Metal", "Heat Metal", "Heatstroke", "Heavy Water", "Heckle", "Hedging Weapons", "Heightened Awareness", "Heightened Reflexes", "Hellfire Ray", "Hellmouth Lash", "Helping Hand", "Heretic's Tongue", "Hermean Potential", "Hero's Defiance", "Heroes' Feast", "Heroic Finale", "Heroic Fortune", "Heroic Fortune, Mass", "Heroic Invocation", "Heroism", "Heroism, Greater", "Hex Glyph", "Hex Glyph, Greater", "Hex Vulnerability", "Hex Ward", "Hibernate", "Hidden Blades", "Hidden Knowledge", "Hidden Presence", "Hidden Speech", "Hide Bruises", "Hide Campsite", "Hide from Animals", "Hide from Undead", "Hide Weapon", "Hideous Laughter", "Hobble", "Hobbling Bomb Admixture", "Hold Animal", "Hold Fey", "Hold Monster", "Hold Monster, Mass", "Hold Person", "Hold Person, Mass", "Hold Portal", "Hollow Blades", "Hollow Heroism", "Hollow Heroism, Greater", "Holy Aura", "Holy Ice", "Holy Ice Weapon", "Holy Javelin", "Holy Shield", "Holy Smite", "Holy Sword", "Holy Whisper", "Holy Word", "Honeyed Tongue", "Hoodwink", "Horn of Pursuit", "Horrid Wilting", "Horrific Doubles", "Horrifying Visage", "Hostile Juxtaposition", "Hostile Juxtaposition, Greater", "Hostile Levitation", "Howling Agony", "Human Potential", "Human Potential, Mass", "Hunger For Flesh", "Hunger For Flesh, Mass", "Hungry Darkness", "Hungry Earth", "Hungry Pit", "Hunter's Blessing", "Hunter's Eye", "Hunter's Friend", "Hunter's Howl", "Hunter's Lore", "Huntmaster's Spear", "Hydraulic Push", "Hydraulic Torrent", "Hydrophobia", "Hymn Of Mercy", "Hymn Of Peace", "Hypercognition", "Hypnotic Pattern", "Hypnotism", "Hypnotism, Greater", "Ice Armor", "Ice Body", "Ice Crystal Teleport", "Ice Slick", "Ice Spears", "Ice Storm", "Icicle Dagger", "Icy Prison", "Icy Prison, Mass", "Id Insinuation I", "Id Insinuation II", "Id Insinuation III", "Id Insinuation IV", "Identify", "Ignoble Form", "Ill Omen", "Illusion of Calm", "Illusion Of Treachery", "Illusion Of Treachery, Greater", "Illusory Crowd", "Illusory Hoard", "Illusory Maze", "Illusory Poison", "Illusory Script", "Illusory Wall", "Imbue Army Special Ability", "Imbue Hex", "Imbue With Addiction", "Imbue with Aura", "Imbue With Elemental Might", "Imbue With Flight", "Imbue with Spell Ability", "Impart Mind", "Impenetrable Veil", "Implant False Reading", "Implant Urge", "Implanted Projection", "Implosion", "Impossible Angles", "Imprisonment", "Improve Trap", "Incendiary Cloud", "Incendiary Runes", "Incessant Buzzing", "Incorporeal Chains", "Infernal Challenger", "Infernal Healing", "Infernal Healing, Greater", "Inflict Critical Wounds", "Inflict Critical Wounds, Mass", "Inflict Light Wounds", "Inflict Light Wounds, Mass", "Inflict Moderate Wounds", "Inflict Moderate Wounds, Mass", "Inflict Pain", "Inflict Pain, Mass", "Inflict Serious Wounds", "Inflict Serious Wounds, Mass", "Infuse Decay", "Infuse Robot", "Inheritor's Smite", "Inner Focus", "Innocence", "Innocuous Shape", "Insanity", "Insect Plague", "Insect Scouts", "Insect Spies", "Insect Spies, Greater", "Inspiring Recovery", "Instant Armor", "Instant Enemy", "Instant Fake", "Instant Portrait", "Instant Restoration", "Instant Summons", "Instant Summons, Greater", "Instant Weapon", "Instigate Psychic Duel", "Instrument of Agony", "Intellect Fortress I", "Intellect Fortress II", "Intellect Fortress III", "Intensify Psyche", "Interplanetary Teleport", "Interposing Hand", "Interrogation", "Interrogation, Greater", "Inveigle Monster", "Inveigle Person", "Investigative Mind", "Invigorate", "Invigorate, Mass", "Invigorating Poison", "Invisibility", "Invisibility Alarm", "Invisibility Bubble", "Invisibility Bubble, Giant", "Invisibility Bubble, Mass", "Invisibility Purge", "Invisibility Sphere", "Invisibility, Greater", "Invisibility, Mass", "Invoke Primal Power", "Iron Body", "Iron Spine", "Iron Stake", "Ironbeard", "Ironbloom Sprouts", "Ironskin", "Ironwood", "Irradiate", "Irregular Size", "Irresistible Dance", "Irriseni Mirror Sight", "Isolate", "Itching Curse", "Ja Noi Aspect", "Janni's Jaunt", "Jatembe's Ire", "Jealous Rage", "Jester's Jaunt", "Jitterbugs", "Jolt", "Jolting Portent", "Joyful Rapture", "Judgment Light", "Jump", "Jungle Mind", "Jury-Rig", "Kalistocrat's Nightmare", "Karmic Blessing", "Keen Edge", "Keen Senses", "Keep Watch", "Khain's Army", "Ki Arrow", "Ki Leech", "Ki Shout", "Kinetic Reverberation", "King's Castle", "Kiss of the First World", "Knight's Calling", "Knock", "Knock, Mass", "Know Direction", "Know Peerage", "Know The Enemy", "Kreighton's Perusal", "Lament Of Summer's Last Breath", "Languid Bomb Admixture", "Languid Venom", "Lash of the Astradaemon", "Last Azlanti's Defending Sword", "Last Azlanti's Defending Sword, Mass", "Lay Of The Land", "Lead Anchor", "Lead Blades", "Lead Plating", "Leashed Shackles", "Legend Lore", "Legendary Proportions", "Lend Judgment", "Lend Judgment, Greater", "Lend Path", "Levitate", "Liberating Comand", "Liberating Command", "Life Blast", "Life Bubble", "Life Channel", "Life Conduit", "Life Conduit, Greater", "Life Conduit, Improved", "Life Current", "Life Of Crime", "Life Pact", "Life Shield", "Light", "Light Lance", "Light of Iomedae", "Light Prison", "Lighten Object", "Lighten Object, Mass", "Lightfingers", "Lightning Arc", "Lightning Bolt", "Lightning Lash", "Lightning Lash Bomb Admixture", "Lily Pad Stride", "Limited Wish", "Limp Lash", "Line In The Sand", "Linebreaker", "Linked Legacy", "Lipstitch", "Liquefy", "Lissalan Snake Sigil", "Litany of Defense", "Litany Of Eloquence", "Litany of Entanglement", "Litany Of Escape", "Litany Of Madness", "Litany Of Righteousness", "Litany of Sight", "Litany of Sloth", "Litany of Thunder", "Litany Of Truth", "Litany Of Vengeance", "Litany of Warding", "Litany of Weakness", "Liveoak", "Loathsome Veil", "Locate Creature", "Locate Gate", "Locate Object", "Locate Portal", "Locate Weakness", "Lock Gaze", "Lockjaw", "Locksight", "Long Arm", "Longshot", "Longstrider", "Longstrider, Greater", "Lose The Trail", "Lost Legacy", "Lost Locale", "Lost Passage", "Lover's Vengeance", "Lucky Number", "Lullaby", "Lunar Veil", "Mad Hallucination", "Mad Monkeys", "Mad Sultan's Melody", "Maddening Oubliette", "Mage Armor", "Mage Hand", "Mage's Crawl Space", "Mage's Decree", "Mage's Disjunction", "Mage's Faithful Hound", "Mage's Lucubration", "Mage's Magnificent Mansion", "Mage's Private Sanctum", "Mage's Sword", "Magic Aura", "Magic Aura, Greater", "Magic Boulder", "Magic Circle against Chaos", "Magic Circle against Evil", "Magic Circle against Good", "Magic Circle against Law", "Magic Circle Against Technology", "Magic Fang", "Magic Fang, Greater", "Magic Jar", "Magic Missile", "Magic Mouth", "Magic Siege Engine", "Magic Siege Engine, Greater", "Magic Stone", "Magic Vestment", "Magic Weapon", "Magic Weapon, Greater", "Magnetic Field", "Magnifying Chime", "Majestic Image", "Major Creation", "Major Image", "Major Phantom Object", "Make Lost", "Make Whole", "Make Whole, Greater", "Malediction", "Malfunction", "Malicious Spite", "Mantle Of Calm", "Mantle Of Doubt", "Mantle Of The Magic Warriors", "Marching Chant", "Marid's Mastery", "Marionette Possession", "Mark Of Blood", "Mark of Justice", "Mark Of Obvious Ethics", "Mark Of The Reptile God", "Marks Of Forbiddance", "Martial Marionette", "Martial Telekinesis", "Martyr's Bargain", "Martyr's Last Blessing", "Mask Dweomer", "Mask Dweomer, Communal", "Mask From Divination", "Masochistic Shadow", "Massacre", "Master's Escape", "Master's Mutation", "Masterwork Transformation", "Matchmaker", "Mathematical Curse", "Maw Of Chaos", "Maze", "Maze Of Madness And Suffering", "Medusa's Bane", "Meld into Stone", "Memorize Page", "Memory Lapse", "Memory Of Function", "Mending", "Mental Barrier I", "Mental Barrier II", "Mental Barrier III", "Mental Barrier IV", "Mental Barrier V", "Mental Block", "Merge With Familiar", "Message", "Metabolic Molting", "Meteor Swarm", "Meticulous Match", "Miasmal Dread", "Miasmatic Form", "Microcosm", "Mighty Fist Of The Earth", "Mind Blank", "Mind Blank, Communal", "Mind Fog", "Mind Maze", "Mind Over Matter", "Mind Probe", "Mind Swap", "Mind Swap, Major", "Mind Thrust I", "Mind Thrust II", "Mind Thrust III", "Mind Thrust IV", "Mind Thrust V", "Mind Thrust VI", "Mindlink", "Mindlocked Messenger", "Mindscape Door", "Mindshock", "Mindwipe", "Minor Creation", "Minor Dream", "Minor Image", "Minor Phantom Object", "Miracle", "Mirage Arcana", "Mirror Hideaway", "Mirror Image", "Mirror Mantis", "Mirror Polish", "Mirror Strike", "Mirror Transport", "Mischievous Shadow", "Misdirection", "Miserable Pity", "Mislead", "Mnemonic Enhancer", "Modify Memory", "Molten Orb", "Moment of Greatness", "Moment of Prescience", "Monkey Fish", "Monstrous Extremities", "Monstrous Physique I", "Monstrous Physique II", "Monstrous Physique III", "Monstrous Physique IV", "Moonstruck", "Morning Sun", "Mortal Terror", "Motes Of Dusk And Dawn", "Mount", "Mount, Communal", "Move Earth", "Mud Buddy", "Mudball", "Muffle Sound", "Murderous Command", "Murderous Crow", "Music of the Spheres", "Mutagenic Touch", "Mydriatic Spontaneity", "Mydriatic Spontaneity, Mass", "Mythic Severance", "Naga Shape I", "Naga Shape II", "Naga Shape III", "Named Bullet", "Named Bullet, Greater", "Nap Stack", "Natural Rhythm", "Nature's Exile", "Nature's Paths", "Nature's Ravages", "Nature's Ravages, Greater", "Nauseating Dart", "Nauseating Trail", "Necromantic Burden", "Necrostasis", "Negate Aroma", "Negative Reaction", "Nereid's Grace", "Neutral Buoyancy", "Neutralize Poison", "Neutralize Poison, Greater", "Nex's Secret Workshop", "Night Blindness", "Night Of Blades", "Night Terrors", "Nightmare", "Nine Lives", "Nixie's Lure", "Node Of Blasting", "Nondetection", "Nondetection, Communal", "Nondetection, Lesser", "Numerological Evocation", "Numerological Resistance", "Oasis", "Oath Of Anonymity", "Oath Of Justice", "Oath Of Peace", "Object Possession", "Object Possession, Greater", "Object Possession, Lesser", "Object Reading", "Obscure Object", "Obscure Poison", "Obscured Script", "Obscuring Mist", "Obsidian Flow", "Old Salt's Curse", "Oneiric Horror", "Oneiric Horror, Greater", "Open And Shut", "Open Arms", "Open Book", "Open/Close", "Opportunistic Loyalty", "Oppressive Boredom", "Oracle's Burden", "Oracle's Vessel", "Orb Of The Void", "Orchid's Drop", "Order's Wrath", "Out Of Sight", "Outbreak", "Overland Flight", "Overlook", "Overstimulate", "Overwhelming Grief", "Overwhelming Poison", "Overwhelming Presence", "Owl's Wisdom", "Owl's Wisdom, Mass", "Pack Empathy", "Page-Bound Epiphany", "Pain Strike", "Pain Strike, Mass", "Painful Revelation", "Paladin's Sacrifice", "Pale Flame", "Paragon Surge", "Paranoia", "Parasitic Soul", "Parchment Swarm", "Particulate Form", "Pass without Trace", "Passing Fancy", "Passing Fancy, Mass", "Passwall", "Path Of Glory", "Path Of Glory, Greater", "Path Of The Winds", "Peace Bond", "Peacebond", "Peacebond, Greater", "Peasant Armaments", "Peerless Integrity", "Pellet Blast", "Penumbra", "Penumbral Disguise", "Perceive Betrayal", "Perceive Cues", "Perfect Placement", "Permanency", "Permanent Hallucination", "Permanent Image", "Pernicious Poison", "Persistent Image", "Persistent Vigor", "Persuasive Goad", "Pesh Vigor", "Pessimism", "Petulengro's Validation", "Phantasmal Affliction", "Phantasmal Asphyxiation", "Phantasmal Killer", "Phantasmal Putrefaction", "Phantasmal Reminder", "Phantasmal Revenge", "Phantasmal Web", "Phantom Blood", "Phantom Chariot", "Phantom Driver", "Phantom Hunt", "Phantom Limb", "Phantom Steed", "Phantom Steed, Communal", "Phantom Trap", "Phase Door", "Phasic Challenge", "Phobia", "Pick Your Poison", "Pied Piping", "Pierce Disguise", "Pierce Facade", "Piercing Shriek", "Pilfering Hand", "Pillar Of Life", "Pillow Talk", "Placebo Effect", "Plague Bearer", "Plague Carrier", "Plague Storm", "Planar Adaptation", "Planar Adaptation, Mass", "Planar Ally", "Planar Ally, Greater", "Planar Ally, Lesser", "Planar Binding", "Planar Binding, Greater", "Planar Binding, Lesser", "Planar Inquiry", "Planar Orientation", "Planar Refuge", "Plane Shift", "Planeslayer's Call", "Planetarium", "Planetary Adaptation", "Planetary Adaptation, Mass", "Plant Growth", "Plant Shape I", "Plant Shape II", "Plant Shape III", "Plant Voice", "Play Instrument", "Plundered Power", "Pocketful Of Vipers", "Poison", "Poison Breath", "Poisoned Egg", "Poisonous Balm", "Polar Midnight", "Polar Ray", "Polymorph", "Polymorph Any Object", "Polymorph Familiar", "Polymorph, Greater", "Polypurpose Panacea", "Possess Object", "Possession", "Possession Trap", "Possession, Greater", "Pouncing Fury", "Power Word Blind", "Power Word Kill", "Power Word Stun", "Pox Of Rumors", "Pox Pustules", "Prayer", "Prediction of Failure", "Prehensile Pilfer", "Preserve", "Preserve Grace", "Pressure Adaptation", "Prestidigitation", "Primal Regression", "Primal Scream", "Prismatic Sphere", "Prismatic Spray", "Prismatic Wall", "Probe History", "Produce Flame", "Profane Nimbus", "Prognostication", "Programmed Image", "Project Image", "Project Weakness", "Prosperous Room", "Protection From Arrows", "Protection from Arrows, Communal", "Protection From Chaos", "Protection from Chaos, Communal", "Protection from Energy", "Protection from Energy, Communal", "Protection From Evil", "Protection from Evil, Communal", "Protection From Good", "Protection from Good, Communal", "Protection From Law", "Protection from Law, Communal", "Protection From Natural Attacks", "Protection From Outsiders", "Protection from Spells", "Protection From Spores", "Protection From Technology", "Protective Penumbra", "Protective Spirit", "Prying Eyes", "Prying Eyes, Greater", "Psychic Asylum", "Psychic Crush I", "Psychic Crush II", "Psychic Crush III", "Psychic Crush IV", "Psychic Crush V", "Psychic Image", "Psychic Leech", "Psychic Reading", "Psychic Surgery", "Psychonaut Manifestation", "Pugwampi's Grace", "Punishing Armor", "Pup Shape", "Purge Spirit", "Purging Finale", "Purified Calling", "Purify Body", "Purify Food and Drink", "Putrefy Food and Drink", "Puzzle Box", "Pyrotechnic Eruption", "Pyrotechnics", "Qualm", "Quell Energy", "Quench", "Questing Stone", "Quick Change", "Quick Throwing", "Quieting Weapons", "Quintessence", "Radiation Ward", "Rage", "Raging Rubble", "Rags To Riches", "Rain Of Arrows", "Rain of Frogs", "Rainbow Pattern", "Raise Animal Companion", "Raise Dead", "Rally Point", "Rampart", "Rapid Repair", "Raven's Flight", "Ray Of Enfeeblement", "Ray of Exhaustion", "Ray of Frost", "Ray of Sickening", "Read Magic", "Read Weather", "Reaper's Coterie", "Reboot", "Rebuke", "Rebuke Technology", "Recentering Drone", "Recharge", "Recharge Innate Magic", "Reckless Infatuation", "Recoil Fire", "Recorporeal Incarnation", "Red Hand Of The Killer", "Reduce Animal", "Reduce Person", "Reduce Person, Mass", "Refine Improvised Weapon", "Reflexive Barrier", "Refuge", "Regenerate", "Reincarnate", "Reincarnate Spy", "Reinforce Armaments", "Reinforce Armaments, Communal", "Reinvigorating Wind", "Rejuvenate Eidolon", "Rejuvenate Eidolon, Greater", "Rejuvenate Eidolon, Lesser", "Release The Hounds", "Reloading Hands", "Remarkable Legerdemain", "Remote Viewing", "Remove Blindness/Deafness", "Remove Curse", "Remove Disease", "Remove Fear", "Remove Paralysis", "Remove Radioactivity", "Remove Radioactivity, Greater", "Remove Sickness", "Rend Body I", "Rend Body II", "Rend Body III", "Rend Body IV", "Renovation", "Repair Undead", "Repair Undead, Mass", "Repel Metal or Stone", "Repel Vermin", "Repel Wood", "Replenish Ki", "Repress Memory", "Reprobation", "Repugnant Taste", "Repulsion", "Residual Tracking", "Resilient Reservoir", "Resilient Sphere", "Resinous Skin", "Resist Energy", "Resist Energy, Communal", "Resist Starvation", "Resistance", "Resonating Word", "Resounding Blow", "Resounding Clang", "Respectful Quiet", "Resplendent Mansion", "Rest Eternal", "Restful Cloak", "Restful Sleep", "Restoration", "Restoration, Greater", "Restoration, Lesser", "Restore Corpse", "Restore Eidolon", "Restore Eidolon, Lesser", "Restore Mythic Power", "Resurgent Transformation", "Resurrection", "Retribution", "Retributive Reparations", "Retrieve Item", "Retrocognition", "Returning Weapon", "Returning Weapon, Communal", "Reveal Emotions", "Reveal Mirage", "Reveal Secrets", "Revelation", "Revenant Armor", "Reverse Gravity", "Reviving Finale", "Ricochet Shot", "Ride the Lightning", "Ride The Waves", "Riding Possession", "Rift of Ruin", "Righteous Blood", "Righteous Might", "Righteous Vigor", "Rigor Mortis", "Rite Of Bodily Purity", "Rite Of Centered Mind", "River of Wind", "River Whip", "Riversight", "Roaming Pit", "Rock Whip", "Root", "Rope Trick", "Rotgut", "Rotting Alliance", "Rovagug's Fury", "Rubberskin", "Rumormonger", "Rune of Durability", "Rune Of Jandelay", "Rune Of Ruin", "Rune Of Rule", "Rune of Warding", "Rune Trace", "Runic Overload", "Rusting Grasp", "Sabotage Construct", "Sacramental Seal", "Sacred Bond", "Sacred Nimbus", "Sacred Space", "Sacrifice", "Sacrificial Oath", "Saddle Surge", "Sadomasochism", "Salvage", "Sanctify Armor", "Sanctify Corpse", "Sanctify Weapons", "Sanctuary", "Sand Table", "Sands of Time", "Sarzari Shadow Memory", "Savage Maw", "Saving Finale", "Sawtooth Terrain", "Scale Spikes", "Scale Spikes, Greater", "Scales Of Deflection", "Scamper", "Scare", "Scarify", "Scent Trail", "Scintillating Pattern", "Scoop", "Scorching Ash Form", "Scorching Ray", "Scourge of the Horsemen", "Scouring Winds", "Screaming Flames", "Screech", "Screen", "Scribe's Binding", "Scripted Hallucination", "Scrivener's Chant", "Scrying", "Scrying, Greater", "Sculpt Corpse", "Sculpt Simulacrum", "Sculpt Sound", "Sculpted Cape", "Sea Stallion", "Sea Steed", "Sealed Life", "Sealed Life, Greater", "Sealed Sending", "Seamantle", "Searching Shadows", "Searing Light", "Sebaceous Twin", "Secluded Grimoire", "Secret Chest", "Secret Coffer", "Secret Page", "Secret Sign", "Secret Speech", "Secret Vault", "Secure Shelter", "Seducer's Eyes", "See Alignment", "See Beyond", "See Invisibility", "See Through Stone", "Seeds Of Influence", "Seeds Of Influence, Greater", "Seek Shelter", "Seek Thoughts", "Seeming", "Seer's Bane", "Selective Alarm", "Selective Invisibility", "Semblance Of Flesh", "Sending", "Sense Fear", "Sense Madness", "Sense Spirit Magic", "Sense Vitals", "Sensory Amplifier", "Sensory Overload", "Sentry Skull", "Sepia Snake Sigil", "Sequester", "Sequester Thoughts", "Serenity", "Serren's Armor Lock", "Serren's Swift Girding", "Sessile Spirit", "Severed Fate", "Shackle", "Shades", "Shadow Anchor", "Shadow Barbs", "Shadow Body", "Shadow Bomb Admixture", "Shadow Claws", "Shadow Conjuration", "Shadow Conjuration, Greater", "Shadow Dragon Aspect", "Shadow Enchantment", "Shadow Enchantment, Greater", "Shadow Endurance", "Shadow Evocation", "Shadow Evocation, Greater", "Shadow Jaunt", "Shadow Of Doubt", "Shadow Projection", "Shadow Step", "Shadow Transmutation", "Shadow Transmutation, Greater", "Shadow Trap", "Shadow Walk", "Shadow Weapon", "Shadowbard", "Shadowfade", "Shadowform", "Shadowmind", "Shadowy Haven", "Shambler", "Shamefully Overdressed", "Shapechange", "Shard of Chaos", "Share Glory", "Share Language", "Share Language, Communal", "Share Memory", "Share Senses", "Share Shape", "Share Skin", "Share Skin, Greater", "Shared Sacrifice", "Shared Suffering", "Shared Wrath", "Sharesister", "Shatter", "Sheet Lightning", "Shield", "Shield Companion", "Shield Of Darkness", "Shield Of Faith", "Shield Of Fortification", "Shield Of Fortification, Greater", "Shield of Law", "Shield Of Shards", "Shield Of The Dawnflower", "Shield Of The Dawnflower, Greater", "Shield Of Wings", "Shield Other", "Shield the Banner", "Shifted Steps", "Shifting Sand", "Shifting Shadows", "Shillelagh", "Shining Cord", "Shock Shield", "Shocking Grasp", "Shocking Image", "Shout", "Shout, Greater", "Shrink Item", "Shroud Of Darkness", "Shroud Of Innocuity", "Sickening Entanglement", "Sickening Strikes", "Siege Of Trees", "Siege of Trees, Greater", "Siege Scatter", "Sift", "Sign Of Wrath", "Signifer's Rally", "Silence", "Silent Image", "Silent Table", "Silk To Steel", "Silver Darts", "Simulacrum", "Simulacrum, Lesser", "Siphon Magic", "Siphon Might", "Sirocco", "Skeleton Crew", "Skin Tag", "Skinsend", "Sky Steed", "Sky Swim", "Skyshroud", "Slave To Sin", "Slay Living", "Sleep", "Sleepwalk", "Sleepwalking Suggestion", "Sleet Storm", "Slipstream", "Slough", "Slow", "Slowing Mud", "Smite Abomination", "Smug Narcissism", "Snake Staff", "Snapdragon Fireworks", "Snare", "Snow Shape", "Snowball", "Soften Earth and Stone", "Solid Fog", "Solid Note", "Song of Discord", "Song of Kyonin", "Sonic Form", "Sonic Scream", "Sonic Thrust", "Soothe Construct", "Soothing Word", "Sotto Voce", "Soul Bind", "Soul Transfer", "Soul Vault", "Soulreaver", "Soulswitch", "Sound Burst", "Source Severance", "Sow Thought", "Spark", "Spawn Calling", "Spawn Ward", "Speak Local Language", "Speak with Animals", "Speak with Dead", "Speak With Haunt", "Speak with Plants", "Spear Of Purity", "Spectral Hand", "Spectral Saluqi", "Spectral Scout", "Speechreader's Sight", "Spell Absorption", "Spell Absorption, Greater", "Spell Gauge", "Spell Immunity", "Spell Immunity, Communal", "Spell Immunity, Greater", "Spell Immunity, Greater Communal", "Spell Resistance", "Spell Scourge", "Spell Turning", "Spellcasting Contract", "Spellcasting Contract, Greater", "Spellcasting Contract, Lesser", "Spellcrash", "Spellcrash, Greater", "Spellcrash, Lesser", "Spellcurse", "Spellscar", "Spellstaff", "Spellsteal", "Sphere Of Warding", "Spherescry", "Spider Climb", "Spider Climb, Communal", "Spike Growth", "Spike Stones", "Spiked Pit", "Spiral Ascent", "Spiral Descent", "Spirit Bonds", "Spirit Call", "Spirit Share", "Spirit-Bound Blade", "Spiritual Ally", "Spiritual Squire", "Spiritual Weapon", "Spit Venom", "Spite", "Splinter Spell Resistance", "Spontaneous Immolation", "Spore Burst", "Spotlight", "Squeeze", "Stabilize", "Stabilize Powder", "Stabilize Pressure", "Stage Fright", "Staggering Fall", "Stalwart Resolve", "Starsight", "Statue", "Status", "Stave Off Corruption", "Stay the Hand", "Steady Saddle", "Steal Book", "Steal Breath", "Steal Power", "Steal Size", "Steal Voice", "Steal Years", "Steal Years, Greater", "Steam Ray Fusillade", "Stench Of Prey", "Stinking Cloud", "Stoke The Inner Fire", "Stolen Light", "Stone Call", "Stone Discus", "Stone Fist", "Stone Shape", "Stone Shield", "Stone Tell", "Stone Throwing", "Stone to Flesh", "Stoneskin", "Stoneskin, Communal", "Storm Of Blades", "Storm Of Vengeance", "Storm Sight", "Storm Step", "Stormbolts", "Straitjacket", "Strand Of The Tangled Knot", "Strangling Hair", "Stricken Heart", "Strip Scales", "Strong Jaw", "Strong Wings", "Stumble Gap", "Stunning Barrier", "Stunning Barrier, Greater", "Stunning Finale", "Subjective Reality", "Submerge Ship", "Substitute Trail", "Suffocation", "Suffocation, Mass", "Suggestion", "Suggestion, Mass", "Summon Accuser", "Summon Ancestral Guardian", "Summon Cacodaemon", "Summon Cacodaemon, Greater", "Summon Ceustodaemon", "Summon Derghodaemon", "Summon Eidolon", "Summon Elder Worm", "Summon Elemental Steed", "Summon Erodaemon", "Summon Flight Of Eagles", "Summon Froghemoth", "Summon Genie", "Summon Genie, Greater", "Summon Genie, Lesser", "Summon Giant Ally I", "Summon Giant Ally II", "Summon Giant Ally III", "Summon Greater Demon", "Summon Infernal Host", "Summon Instrument", "Summon Kami", "Summon Laborers", "Summon Lesser Demon", "Summon Lesser Psychopomp", "Summon Meladaemon", "Summon Minor Ally", "Summon Minor Monster", "Summon Monster I", "Summon Monster II", "Summon Monster III", "Summon Monster IV", "Summon Monster IX", "Summon Monster V", "Summon Monster VI", "Summon Monster VII", "Summon Monster VIII", "Summon Nature's Ally I", "Summon Nature's Ally II", "Summon Nature's Ally III", "Summon Nature's Ally IV", "Summon Nature's Ally IX", "Summon Nature's Ally V", "Summon Nature's Ally VI", "Summon Nature's Ally VII", "Summon Nature's Ally VIII", "Summon Stampede", "Summon Swarm", "Summon Thanadaemon", "Summon Totem Creature", "Summon Vanth", "Summoner Conduit", "Sun Metal", "Sun's Disdain", "Sun's Disdain, Mass", "Sunbeam", "Sunburst", "Sunder Breaker", "Sundered Serpent Coil", "Sundering Shards", "Sunstalker", "Suppres Charms and Compulsions", "Suppress Charms And Compulsions", "Suppress Primal Magic", "Suppressing Stone", "Sure Casting", "Surefoot Boots", "Surface Excursion", "Surmount Affliction", "Sustaining Legend", "Swallow Poison", "Swallow Your Fear", "Swarm Of Fangs", "Swarm Skin", "Sweat Poison", "Swipe", "Sword To Snake", "Sylvan Hideaway", "Symbol of Death", "Symbol Of Debauchery", "Symbol Of Dispelling", "Symbol Of Distraction", "Symbol Of Exsanguination", "Symbol of Fear", "Symbol of Healing", "Symbol of Insanity", "Symbol Of Laughter", "Symbol of Mirroring", "Symbol of Pain", "Symbol of Persuasion", "Symbol of Revelation", "Symbol of Scrying", "Symbol of Sealing", "Symbol of Sleep", "Symbol of Slowing", "Symbol of Strife", "Symbol Of Striking", "Symbol of Stunning", "Symbol of Vulnerability", "Symbol Of Weakness", "Sympathetic Aura", "Sympathetic Vibration", "Sympathy", "Synapse Overload", "Synaptic Pulse", "Synaptic Pulse, Greater", "Synaptic Scramble", "Synesthesia", "Synesthesia, Mass", "Tactical Acumen", "Tactical Adaptation", "Tactical Formation", "Tactical Insight", "Tactical Miscalculation", "Tail Strike", "Talismanic Implement", "Tap Inner Beauty", "Tar Ball", "Tar Pool", "Targeted Bomb Admixture", "Tattoo Potion", "Tears To Wine", "Technomancy", "Tectonic Communion", "Telekinesis", "Telekinetic Assembly", "Telekinetic Charge", "Telekinetic Maneuver", "Telekinetic Projectile", "Telekinetic Sphere", "Telekinetic Storm", "Telekinetic Strikes", "Telekinetic Volley", "Telempathic Projection", "Telepathic Bond", "Telepathic Censure", "Telepathy", "Teleport", "Teleport Object", "Teleport Structure", "Teleport Trap", "Teleport, Greater", "Teleportation Circle", "Temporal Divergence", "Temporal Regression", "Temporal Stasis", "Temporary Graft", "Temporary Resurrection", "Terraform", "Terrain Bond", "Terrible Remorse", "Thanatotic Fury", "Thaumaturgic Circle", "Theft Ward", "They Know", "Thirsting Entanglement", "Thorn Body", "Thorn Javelin", "Thorny Entanglement", "Thought Echo", "Thought Shield I", "Thought Shield II", "Thought Shield III", "Thought Shield IV", "Thought Shield V", "Thought Worm I", "Thought Worm II", "Thought Worm III", "Thought Worm IV", "Thoughtsense", "Threefold Aspect", "Threefold Face", "Threefold Form", "Threefold Sight", "Thunder Fire", "Thundering Drums", "Thunderous Footfalls", "Thunderstomp", "Thunderstomp, Greater", "Tieldlara's Feint", "Time Shudder", "Time Stop", "Timely Inspiration", "Tiny Hut", "Tireless Pursuers", "Tireless Pursuit", "Titanic Anchoring", "Toilsome Chant", "Tomb Legion", "Tongues", "Tongues, Communal", "Torpid Reanimation", "Touch Injection", "Touch Of Blindness", "Touch Of Bloodletting", "Touch Of Combustion", "Touch of Fatigue", "Touch of Gracelessness", "Touch of Idiocy", "Touch Of Mercy", "Touch of Slime", "Touch Of Slumber", "Touch of the Sea", "Tough Crowd", "Tower Of Iron Will I", "Tower Of Iron Will II", "Tower Of Iron Will III", "Tower Of Iron Will IV", "Tower Of Iron Will V", "Toxic Gift", "Toxic Rupture", "Trace Teleport", "Track Ship", "Tracking Mark", "Trade Items", "Trail of the Rose", "Transfer Familiar", "Transfer Regeneration", "Transfer Tattoo", "Transfiguring Touch", "Transformation", "Transmogrify", "Transmute Blood To Acid", "Transmute Golem", "Transmute Metal to Wood", "Transmute Mud to Rock", "Transmute Potion to Poison", "Transmute Rock to Mud", "Transmute Wine To Blood", "Transplant Visage", "Transport via Plants", "Trap the Soul", "Treacherous Teleport", "Treasure Stitching", "Tree Shape", "Tree Stride", "Trial By Fire", "Trial Of Fire And Acid", "Triggered Hallucination", "Triggered Suggestion", "Tripvine", "True Appraisal", "True Form", "True Prognostication", "True Resurrection", "True Seeing", "True Skill", "True Strike", "Truespeak", "Tsunami", "Twilight Haze", "Twilight Knife", "Twin Form", "Twine Double", "Twisted Futures", "Twisted Innards", "Twisted Space", "Umbral Infusion", "Umbral Infusion, Mass", "Umbral Strike", "Umbral Weapon", "Unadulterated Loathing", "Unbearable Brightness", "Unbreakable Construct", "Unbreakable Heart", "Unconscious Agenda", "Undead Anatomy I", "Undead Anatomy II", "Undead Anatomy III", "Undead Anatomy IV", "Undeath Inversion", "Undeath to Death", "Undeath Ward", "Underbrush Decoy", "Undetectable Alignment", "Undetectable Trap", "Undine's Curse", "Unerring Tracker", "Unerring Weapon", "Unfetter", "Unhallow", "Unholy Aura", "Unholy Blight", "Unholy Ice", "Unholy Ice Weapon", "Unholy Sword", "Unholy Ward", "Universal Formula", "Unleash Pandemonium", "Unlife Current", "Unliving Rage", "Unlock Flesh", "Unnatural Lust", "Unprepared Combatant", "Unravel Destiny", "Unseen Crew", "Unseen Engineers", "Unseen Servant", "Unsettling Presence", "Unshakable Chill", "Unshakable Zeal", "Unwelcome Halo", "Unwilling Shield", "Unwitting Ally", "Urban Grace", "Urban Step", "Urgathoa's Beacon", "Utter Contempt", "Vacuous Vessel", "Vampiric Hunger", "Vampiric Shadow Shield", "Vampiric Touch", "Vanish", "Veil", "Veil Of Heaven", "Veil of Positive Energy", "Vengeful Comets", "Vengeful Outrage", "Vengeful Stinger", "Venomous Bite", "Venomous Bolt", "Venomous Promise", "Ventriloquism", "Vermicious Assumption", "Vermin Shape I", "Vermin Shape II", "Verminous Transformation", "Versatile Weapon", "Vestment of the Champion", "Vex Giant", "Vexing Miscalculation", "Vicarious View", "Vigor", "Vile Dog Transformation", "Village Veil", "Vine Strike", "Vinetrap", "Violent Accident", "Viper Bomb Admixture", "Virtue", "Virtuoso Performance", "Virulence", "Virulent Miasma", "Vision", "Vision of Hell", "Vision of Lamashtu", "Visualization Of The Body", "Visualization Of The Mind", "Vitriolic Mist", "Vocal Alteration", "Volcanic Storm", "Voluminous Vocabulary", "Vomit Swarm", "Vomit Twin", "Vortex", "Wail of the Banshee", "Wake of Light", "Walk The Plank", "Walk Through Space", "Wall Of Blindness/Deafness", "Wall Of Bone", "Wall Of Brine", "Wall Of Clockwork", "Wall Of Ectoplasm", "Wall Of Fire", "Wall Of Force", "Wall Of Ice", "Wall of Iron", "Wall of Lava", "Wall Of Light", "Wall Of Nausea", "Wall Of Silver", "Wall of Sound", "Wall Of Split Illumination", "Wall Of Stone", "Wall of Suppression", "Wall Of Thorns", "Wandering Star Motes", "Wandering Trail", "Ward Of The Season", "Ward Shield", "Ward the Faithful", "Warding Weapon", "Warp Metal", "Warp Wood", "Wartrain Mount", "Watchful Animal", "Water Breathing", "Water Walk", "Water Walk, Communal", "Waters Of Lamashtu", "Wave Form", "Wave Shield", "Waves Of Blood", "Waves of Ecstasy", "Waves of Exhaustion", "Waves of Fatigue", "Weaken Powder", "Weapon of Awe", "Weapons Against Evil", "Weaponwand", "Web", "Web Bolt", "Web Cloud", "Web Shelter", "Weird", "What Grows Within", "Whip Of Ants", "Whip Of Centipedes", "Whip Of Spiders", "Whirlwind", "Whispering Lore", "Whispering Wind", "Wicker Horse", "Widen Auras", "Wild Instinct", "Wilderness Soldiers", "Wind Blades", "Wind Walk", "Wind Wall", "Winds of Vengeance", "Windy Escape", "Winged Sword", "Winter Feathers", "Winter's Grasp", "Wish", "Withdraw Affliction", "Wither Limb", "Witness", "Wizened Appearance", "Wood Shape", "Wooden Phalanx", "Word Of Chaos", "Word of Recall", "Word of Resolve", "World Wave", "Wracking Ray", "Wrath", "Wrathful Mantle", "Wrathful Weapon", "Wreath of Blades", "Yellow Sign", "Youthful Appearance", "Zephyr's Fleetness", "Zone of Foul Flames", "Zone of Silence", "Zone of Truth"
  ];

  var _all_featsObject = null;
  var _all_featsName = [
    "Ability Focus", "Abundant Revelations", "Accursed", "Accursed Critical", "Accursed Hex", "Accursed Hex", "Acrobatic", "Acrobatic", "Acrobatic Steps", "Adaptive Fortune", "Adder Strike", "Additional Traits", "Adept Champion", "Adept Channel", "Advanced Defensive Combat Training", "Advanced Ranger Trap", "Agile Maneuvers", "Agile Tongue", "Airy Step", "Aldori Dueling Mastery", "Alertness", "Alertness", "Alignment Channel", "Alignment Channel", "Allied Spellcaster", "Altitude Affinity", "Amateur Gunslinger", "Ammo Drop", "Amplified Rage", "Ancestral Scorn", "Ancient Draconic", "Andoren Falconry", "Angel Wings", "Angelic Blood", "Angelic Flesh", "Animal Affinity", "Animal Affinity", "Animal Ally", "Ankle Biter", "Antagonize", "Apotheosis", "Aquatic Ancestry", "Arc Slinger", "Arcane Armor Mastery", "Arcane Armor Training", "Arcane Armor Training", "Arcane Blast", "Arcane Blast", "Arcane Insight", "Arcane School Spirit", "Arcane Shield", "Arcane Shield", "Arcane Strike", "Arcane Strike", "Arcane Talent", "Arcane Trap Suppressor", "Arcane Vendetta", "Archon Diversion", "Archon Justice", "Archon Style", "Arisen", "Armor of the Pit", "Artifact Hunter", "Ascendant Spell", "Aspect of the Beast", "Aspect Of The Beast", "Atheist Abjurations", "Athletic", "Athletic", "Attuned to the Wild", "Augment Summoning", "Augment Summoning", "Aversion Tolerance", "Awesome Blow", "Babau Rogue Talent", "Babble-Peddler", "Back to Back", "Banishing Critical", "Banner of Doom", "Bashing Finish", "Bat Shape", "Battle Singer", "Battlefield Healer", "Bear Hug", "Beartrap Bite", "Beast Rider", "Belier's Bite", "Bend With The Wind", "Bestow Hope", "Bestow Luck", "Betrayer", "Betraying Blow", "Bewildering Koan", "Binding Throw", "Black Cat", "Blazing Aura", "Bleeding Critical", "Bleeding Critical", "Blessed", "Blighted Critical", "Blighted Critical Mastery", "Blind-Fight", "Blind-Fight", "Blinding Critical", "Blinding Flash", "Blinding Light", "Blinding Sneak Attack", "Blistering Feint", "Bloatmage Initiate", "Blood Beak", "Blood Drinker", "Blood Feaster", "Blood Of Heroes", "Blood Salvage", "Blood Ties", "Blood Vengeance", "Blood Vengeance", "Bloodletting", "Bloodmarked Flight", "Bloodstone Manhunter", "Bloody Assault", "Bloody Vengeance", "Blowout Shot Deed", "Bludgeoner", "Blundering Defense", "Boar Ferocity", "Boar Shred", "Boar Style", "Body Control", "Body Mastery", "Body Shield", "Bodyguard", "Bolstered Resilience", "Bonebreaker", "Boon Companion", "Born Alone", "Bouncing Spell", "Bounding Hammer", "Branded for Retribution", "Breadth of Experience", "Break Guard", "Brew Potion", "Brewmaster", "Broken Wing Gambit", "Brutal Grappler", "Bull Rush Strike", "Bullseye Shot", "Bullying Blow", "Burn! Burn! Burn!", "Burning Spell", "Burrowing Teeth", "Butterfly's Sting", "Calm Disposition", "Careful Speaker", "Carrion Feeder", "Cartwheel Dodge", "Casual Illusionist", "Catch Off-Guard", "Catch Off-Guard", "Catfolk Exemplar", "Caustic Slur", "Cautious Fighter", "Cavalry Formation", "Celestial Obedience", "Celestial Servant", "Center Of Power", "Chainbreaker", "Champion", "Channel Force", "Channel Smite", "Channel Smite", "Channeled Revival", "Channeled Shield Wall", "Channeling Scourge", "Charge of the Righteous", "Charge Through", "Charge Through", "Charging Hurler", "Childlike", "Chokehold", "Circling Offense", "Claw Pounce", "Cleave", "Cleave", "Cleave Through", "Cleaving Finish", "Close Call", "Close-Quarters Thrower", "Cloud Gazer", "Cloud Step", "Cloven Helm", "Clustered Shots", "Coaxing Spell", "Cockatrice Strike", "Cold Celerity", "Collective Recollection", "Combat Casting", "Combat Distraction", "Combat Expertise", "Combat Expertise", "Combat Medic", "Combat Meditation", "Combat Patrol", "Combat Reflexes", "Combat Reflexes", "Combat Style Master", "Command Undead", "Command Undead", "Concussive Spell", "Consecrate Spell", "Consume Undeath", "Contingent Channeling", "Conviction", "Cooperative Crafting", "Coordinated Charge", "Coordinated Defense", "Coordinated Distraction", "Coordinated Maneuvers", "Cornugon Shield", "Cornugon Smash", "Cornugon Stun", "Cornugon Trip", "Cosmopolitan", "Courage In Numbers", "Courageous Resolve", "Covering Defense", "Covering Shield", "Craft Construct", "Craft Magic Arms and Armor", "Craft Rod", "Craft Staff", "Craft Wand", "Craft Wondrous Item", "Crane Riposte", "Crane Style", "Crane Wing", "Create Reliquary Arms and Shields", "Create Sanguine Elixir", "Crippling Critical", "Crisis Of Conscience", "Critical Conduit", "Critical Focus", "Critical Focus", "Critical Mastery", "Critical Mastery", "Critical Versatility", "Crossbow Mastery", "Crusader's Fist", "Crusader's Flurry", "Crushing Blow", "Cursed Item Detection", "Cut Your Losses", "Cypher Magic", "Cypher Script", "Damned", "Damned", "Dampen Presence", "Dark Sight", "Darting Viper", "Dastardly Finish", "Dastardly Finish", "Dauntless Destiny", "Dazing Assault", "Dazing Spell", "Dazzling Display", "Dazzling Display", "Deadly Aim", "Deadly Aim", "DEADLY DEALER", "Deadly Finish", "Deadly Stroke", "Deadly Stroke", "Deafening Critical", "Deafening Explosion", "Death from Above", "Death From Above", "Death Frombelow", "Death or Glory", "Death's Suitor", "Deathless Initiate", "Deathless Master", "Deathless Zealot", "Deceitful", "Deceitful", "Deceptive Exchange", "Deep Drinker", "Deepsight", "Deepsight", "Defending Eidolon", "Defensive Combat Training", "Defensive Combat Training", "Defensive Weapon Training", "Defiant Luck", "Deflect Arrows", "Deflect Arrows", "Deft Hands", "Deft Hands", "Deft Shootist Deed", "Demon Grafter", "Demon Hunter", "Demonic Nemesis", "Demonic Obedience", "Demonic Possession", "Demonologist", "Demoralizing Lash", "Dented Helm", "Deny Death", "Deny The Reaper", "Dervish Dance", "Desert Dweller", "Desperate Battler", "Desperate Swing", "Destroy Identity", "Destroyer's Blessing", "Destroyer's Blessing", "Destructive Dispel", "Detect Expertise", "Detect Expertise", "Devastating Strike", "Devil's Foe", "Die for Your Master", "Diehard", "Dimensional Agility", "Dimensional Assault", "Dimensional Dervish", "Dimensional Maneuvers", "Dimensional Savant", "Dire Bat Shape", "Dirty Trick Master", "Disarming Strike", "Disassemble Magic Item", "Discerning Eye", "Discordant Voice", "Disengaging Feint", "Disengaging Flourish", "Disengaging Shot", "Disorienting Blow", "Disorienting Maneuver", "Dispel Synergy", "Dispelling Critical", "Dispelling Fist", "Disposable Weapon", "Disrupting Shot", "Disruptive", "Disruptive", "Disruptive Recall", "Disruptive Spell", "Distance Thrower", "Distance Thrower", "Diverse Palate", "Divert Harm", "Divination Guide", "Divine Deception", "Divine Defiance", "Divine Denouncer", "Divine Interference", "Divine Interference", "Diviner's Delving", "Djinni Spin", "Djinni Spirit", "Djinni Style", "Dodge", "Dodge", "Dog Killer, Horse Hunter", "Dog-Sniff-Hate", "Domain Strike", "Dorn-Dergar Master", "Double Bane", "Double Slice", "Draconic Aspect", "Draconic Breath", "Draconic Glide", "Draconic Paragon", "Drag Down", "Dragon Ferocity", "Dragon Roar", "Dragon Style", "Dragonbane Aura", "Dragoncrafting", "Dragonheart", "Dragonslayer", "Dramatic Display", "Dreadful Carnage", "Dreadful Carnage", "Drink Is Life", "Drow Nobility", "Druidic Decoder", "Drunken Brawler", "Dual Path", "Duck and Cover", "Dwarf Blooded", "Dynasty Founder", "Eagle Eyes", "Eagle Eyes", "Eagle Knight Candidate", "Earth Child Binder", "Earth Child Style", "Earth Child Topple", "Echoes of Stone", "Echoing Spell", "Eclectic", "Ectoplasmic Spell", "Efreeti Stance", "Efreeti Style", "Efreeti Touch", "Eldritch Claws", "Eldritch Heritage", "Eldritch Heritage", "Eldritch Researcher", "Elemental Channel", "Elemental Channel", "Elemental Fist", "Elemental Fist", "Elemental Focus", "Elemental Focus", "Elemental Jaunt", "Elemental Spell", "Elephant Stomp", "Elusive Redirection", "Elven Accuracy", "Elven Accuracy", "Elven Battle Training", "Elven Spirit", "Emergency Attunement", "Empower Spell", "Empower Spell-Like Ability", "Endurance", "Endurance", "Enfilading Fire", "Enforcer", "Enhanced Ki Throw", "Enlarge Spell", "Ensemble", "Equipment Trick", "Escape Route", "Eschew Materials", "Eschew Materials", "Esoteric Advantage", "Evolved Familiar", "Exhausting Critical", "Exile's Path", "Exorcist's Rebuttal", "Exotic Weapon Proficiency", "Expanded Arcana", "Expanded Fiendish Resistance", "Expanded Resistance", "Expert Driver", "Expert Trainer", "Exploit Lore", "Explorer", "Extend Spell", "Extend The Bulwark", "Extended Bane", "Extra Arcana", "Extra Arcane Pool", "Extra Bane", "Extra Bombs", "Extra Cantrips or Orisons", "Extra Channel", "Extra Discovery", "Extra Elemental Assault", "Extra Evolution", "Extra Feature", "Extra Grit", "Extra Hex", "Extra Item Slot", "Extra Ki", "Extra Lay On Hands", "Extra Mercy", "Extra Mythic Power", "Extra Path Ability", "Extra Performance", "Extra Rage", "Extra Rage Power", "Extra Ranger Trap", "Extra Revelation", "Extra Rogue Talent", "Extra Summons", "Eye of the Arclord", "Eyes of Judgment", "Fabulist", "Fabulous Figments", "False Casting", "False Focus", "False Opening", "Familiar Focus", "Familiar Spell", "Famine Tolerance", "Far Shot", "Far Shot", "Fast Change", "Fast Crawl", "Fast Drinker", "Fast Empathy", "Fast Empathy", "Fast Healer", "Fast Learner", "Favored Defense", "Favored Judgment", "Fearless Aura", "Fearless Curiosity", "Fearless Zeal", "Fearsome Barricade", "Fearsome Finish", "Feint Partner", "Feinting Flurry", "Feline Grace", "Felling Escape", "Felling Smash", "Feral Combat Training", "Feral Heart", "Ferocious Action", "Ferocious Loyalty", "Ferocious Resolve", "Ferocious Summons", "Ferocious Tenacity", "Ferocious Tenacity", "Ferocious Tenacity", "Fey Foundling", "Field Repair", "Fiend Sight", "Fiendish Darkness", "Fiendish Facade", "Fiendish Resilience", "Fight On", "Final Embrace", "Final Embrace Horror", "Final Embrace Master", "Fire God's Blessing", "Fire Hand", "Fire Music", "Fire Music", "Fire Tamer", "Firebrand", "Firesight", "Flagbearer", "Flame Heart", "Flanking Foil", "Flaring Spell", "Flaying Critical", "Fleet", "Fleet", "Flensing Strike", "Flyby Attack", "Focused Disbelief", "Focused Discipline", "Focused Eidolon", "Focused Overseer", "Focused Shot", "Focused Spell", "Focused Worker", "Focusing Blow", "Foeslayer", "Foeslayer", "Following Step", "Foment the Blood", "Footslasher", "Forge Ring", "Forgotten Past", "Fortified Armor Training", "Fortunate Manager", "Fortunate One", "Fortunate Ruler", "Fortune Teller", "Free Spirit", "Friend To Animals", "Furious Finish", "Furious Focus", "Furious Focus", "Fury of the Tainted", "Fury's Fall", "Fury's Snare", "Gang Up", "Giant Killer", "Giant Steps", "Gliding Steps", "Glimpse Beyond", "Gloom Sight", "Gloom Strike", "Glorious Heat", "Gnome Trickster", "Gnome Trickster", "Gnome Weapon Focus", "Go Unnoticed", "Goblin Cleaver", "Goblin Gunslinger", "Godless Healing", "Gore Fiend", "Gore Fiend", "Gorgon's Fist", "Gorgon's Fist", "Gory Finish", "Grand Master Performer", "Grant Initiative", "Grasping Tail", "Great Cleave", "Great Fortitude", "Great Fortitude", "Great Hatred", "Greater Blighted Critical", "Greater Blind-Fight", "Greater Bull Rush", "Greater Channel Force", "Greater Channel Smite", "Greater Dirty Trick", "Greater Disarm", "Greater Drag", "Greater Drow Nobility", "Greater Eldritch Heritage", "Greater Elemental Focus", "Greater Feint", "Greater Grapple", "Greater Mercy", "Greater Overrun", "Greater Penetrating Strike", "Greater Rending Fury", "Greater Reposition", "Greater Serpent Lash", "Greater Shield Focus", "Greater Shield Specialization", "Greater Snap Shot", "Greater Spell Focus", "Greater Spell Penetration", "Greater Spell Specialization", "Greater Steal", "Greater Sunder", "Greater Trip", "Greater Two-Weapon Fighting", "Greater Vital Strike", "Greater Weapon Focus", "Greater Weapon Specialization", "Greater Whip Mastery", "Greater Wild Empathy", "Green Faith Acolyte", "Groundling", "Grudge Fighter", "Guardian of the Wild", "Guided Hand", "Guided Hand", "Gun Twirling", "Gunsmithing", "Half-Drow Paragon", "Halfling Slinger", "Hamatula Grasp", "Hamatula Strike", "Hamatulatsu", "Hammer the Gap", "Hard-Headed", "Harmonic Sage", "Harmonic Spell", "Harrowed", "Haunted Gnome", "Haunted Gnome Assault", "Haunted Gnome Shroud", "Heavenly Radiance", "Heavy Armor Proficiency", "Heighten Spell", "Hellcat Pounce", "Hellcat Stealth", "Helpless Prisoner", "Hermean Blood", "Hero's Display", "Hero's Fortune", "Heroic Defiance", "Heroic Defiance", "Heroic Recovery", "Heroic Recovery", "Heroic Will", "Hex Strike", "Hobgoblin Discipline", "Hold the Blade", "Horde Charge", "Horn Of The Criosphinx", "Horse Master", "Hover", "Human Spirit", "Huntmaster", "Hydraulic Maneuver", "Hymn Singer", "Iconoclast", "Impact Critical Shot", "Impaling Critical", "Implant Bomb", "Improved Back to Back", "Improved Blind-Fight", "Improved Bull Rush", "Improved Bull Rush", "Improved Channel", "Improved Channel", "Improved Channel Force", "Improved Charging Hurler", "Improved Cleaving Finish", "Improved Counterspell", "Improved Counterspell", "Improved Critical", "Improved Critical", "Improved Dark Sight", "Improved Day Job", "Improved Death-Stealing", "Improved Devastating Strike", "Improved Dirty Trick", "Improved Dirty Trick", "Improved Disarm", "Improved Disarm", "Improved Drag", "Improved Drag", "Improved Drow Nobility", "Improved Eldritch Heritage", "Improved Familiar", "Improved Familiar", "Improved Feint", "Improved Feint Partner", "Improved Feinting Flurry", "Improved Fiendish Darkness", "Improved Fiendish Sorcery", "Improved Fury of the Tainted", "Improved Grapple", "Improved Grapple", "Improved Great Fortitude", "Improved Impaling Critical", "Improved Improvisation", "Improved Infuse Weapon", "Improved Initiative", "Improved Initiative", "Improved Iron Will", "Improved Ki Throw", "Improved Learn Ranger Trap", "Improved Lightning Reflexes", "Improved Low Blow", "Improved Monster Lore", "Improved Natural Armor", "Improved Natural Attack", "Improved Overrun", "Improved Overrun", "Improved Possession", "Improved Precise Shot", "Improved Rending Fury", "Improved Reposition", "Improved Reposition", "Improved Second Chance", "Improved Share Spells", "Improved Shield Bash", "Improved Sidestep", "Improved Snap Shot", "Improved Stalwart", "Improved Steal", "Improved Steal", "Improved Stench", "Improved Stonecunning", "Improved Stonecunning", "Improved Sunder", "Improved Sunder", "Improved Surprise Follow-Through", "Improved Trip", "Improved Trip", "Improved Two-Weapon Feint", "Improved Two-Weapon Fighting", "Improved Umbral Scion", "Improved Unarmed Strike", "Improved Unarmed Strike", "Improved Underhanded Teamwork", "Improved Vital Strike", "Improved Whip Mastery", "Improvisation", "Improvised Weapon Mastery", "In Harm's Way", "Incremental Elemental Assault", "Inexplicable Luck", "Inner Breath", "Inner Flame", "Inner Light", "Innocent Blood", "Inscribe Magical Tattoo", "Insightful Gaze", "Inspirational Commander", "Instant Judgment", "Intensified Spell", "Intimidating Bane", "Intimidating Confidence", "Intimidating Gaze", "Intimidating Prowess", "Intimidating Prowess", "Invoke Primal Instinct", "Iron Will", "Iron Will", "Ironguts", "Ironhide", "Jackal Heritage", "Jaguar Pounce", "Janni Rush", "Janni Style", "Janni Tempest", "Jawbreaker", "Judgment Surge", "Juggle Load", "Jumper", "Keen Scent", "Ki Diversity", "Ki Stand", "Ki Throw", "Kirin Path", "Kirin Strike", "Kirin Style", "Knockout Artist", "Knockout Artist", "Kobold Ambusher", "Kobold Confidence", "Kobold Flood", "Kobold Groundling", "Kobold Sniper", "Kobold Style", "Landing Roll", "Large Target", "Lastwall Phalanx", "LastwallPhalanx", "Lead from the Back", "Leadership", "Leaf Singer", "Leaping Shot Deed", "Learn Ranger Trap", "Learn Ranger Trap", "Ledge Walker", "Legacy of Ozem", "Legendary Teamwork", "Let Them Come", "Letter Fury", "Liberator", "Liberator", "Life Lure", "Life-Dominant Soul", "Life's Blood", "Light Armor Proficiency", "Light Step", "Lightning Reflexes", "Lightning Reflexes", "Lightning Stance", "Lingering Invisibility", "Lingering Performance", "Lingering Spell", "Lithe Attacker", "Long-Nose Form", "Lookout", "Lost Legacy", "Low Profile", "Luck Of Heroes", "Lucky Halfling", "Lucky Halfling", "Lucky Healer", "Lucky Strike", "Lucky Surge", "Lunge", "Lunge", "Mage of the Wild", "Magical Aptitude", "Magical Aptitude", "Magical Tail", "Magnum Opus", "Major Spell Expertise", "Mantis Style", "Mantis Torment", "Mantis Wisdom", "Manyshot", "Manyshot", "Marid Coldsnap", "Marid Spirit", "Marid Style", "Marked For Glory", "Martial Mastery", "Martial Versatility", "Martial Weapon Proficiency", "Master Alchemist", "Master Combat Performer", "Master Craftsman", "Master ofYour Kind", "Master Performer", "Master Siege Engineer", "Masterful Display", "Maximize Spell", "Maximize Surge", "Maximized Spellstrike", "Measured Response", "Meditation Master", "Meditative Concentration", "Medium Armor Proficiency", "Medusa's Wrath", "Medusa's Wrath", "Menacing Bane", "Merciful Bane", "Merciful Spell", "Merciless Magic", "Merciless Precision", "Merciless Rush", "Metallic Wings", "Minor Spell Expertise", "Missile Shield", "Missile Shield", "Mixed Scales", "Mobility", "Mobility", "Mocking Dance", "Monastic Legacy", "Monastic Legacy", "Monkey Lunge", "Monkey Moves", "Monkey Shine", "Monkey Style", "Monstrous Mask", "Monument Builder", "Moonlight Stalker", "Moonlight Stalker Feint", "Moonlight Stalker Master", "Moonlight Summons", "Mother's Gift", "Motivating Display", "Mounted Archery", "Mounted Archery", "Mounted Blade", "Mounted Combat", "Mounted Combat", "Mounted Shield", "Mounted Skirmisher", "Multiattack", "Multitalented Mastery", "Multiweapon Defense", "Multiweapon Fighting", "Multiweapon Specialist", "Murderer's Circle", "Murmurs of Earth", "Mystic Stride", "Mythic Companion", "Mythic Crafter", "Mythic Paragon", "Mythic Spell Lore", "Named Bullet", "Nameless Servitor", "Narrow Frame", "Nation Builder", "Natural Charmer", "Natural Jouster", "Natural Ruler", "Natural Spell", "Natural Spell", "Nature Soul", "Neckbreaker", "Necromantic Affinity", "Neither Elf nor Human", "Nemesis", "Net Adept", "Net and Trident", "Net Maneuvering", "Net Trickery", "Nightmare Fist", "Nightmare Striker", "Nightmare Weaver", "Nimble Moves", "Nimble Moves", "Nimble Natural Summons", "Nimble Striker", "No Name", "Noble Scion", "Noble Spell Resistance", "Object Of Legend", "Old Cults Awakener", "Ominous Mien", "Opening Volley", "Oracular Intuition", "Orc Hewer", "Orc Weapon Expertise", "Ordered Mind", "Oread Burrower", "Oread Earth Glider", "Osirionology", "Ostentatious Display", "Osyluth Guile", "Out Of The Sun", "Outer Planes Traveler", "Outflank", "Overwhelm", "Pack Attack", "Painful Anchor", "Paired Opportunists", "Panther Claw", "Panther Parry", "Panther Style", "Parry Spell", "Parting Shot", "Pass For Human", "Passing Trick", "Patient Strike", "Peacemaker", "Penetrating Possession", "Penetrating Strike", "Penetrating Strike", "Perfect Awareness", "Perfect Center", "Perfect Strike", "Performance Weapon Mastery", "Performing Combatant", "Persistent Spell", "Persuasive", "Persuasive", "Piercing Spell", "Pin Down", "Pinning Knockout", "Pinning Rend", "Pinpoint Poisoner", "Pinpoint Targeting", "Pinpoint Targeting", "Piranha Strike", "Planar Hunter", "Planar Preservationist", "Planar Traveler", "Planar Wild Shape", "Planned Spontaneity", "Point Blank Master", "Point-Blank Shot", "Point-Blank Shot", "Porcupine Defense", "Potent HolySymbol", "Potent Surge", "Power Attack", "Power Attack", "Powerful Shape", "Powerful Shape", "Practiced Leadership", "Practiced Tactician", "Precise Shot", "Precise Strike", "Precocious Youth", "Preferred Spell", "Prodigy", "Prone Shooter", "Prone Slinger", "Prophet", "Prophet", "Prophetic Visionary", "Prophetic Visionary", "Protector's Strike", "Punch Through", "Pungent Stench", "Punishing Kick", "Pure Faith", "Pushing Assault", "Quarterstaff Master", "Quick Bull Rush", "Quick Channel", "Quick Dirty Trick", "Quick Drag", "Quick Draw", "Quick Draw", "Quick Preparation", "Quick Reposition", "Quick Steal", "Quick Wild Shape", "Quicken Spell", "Quicken Spell-Like Ability", "Quillbreaker Defense", "Quivering Palm Adept", "Quivering Palm Versatility", "Racial Heritage", "Racial Heritage", "Radiant Charge", "Raging Brutality", "Raging Deathblow", "Raging Hurler", "Raging Throw", "Raging Vitality", "Rapid Grappler", "Rapid Reload", "Rapid Reload", "Rapid Shot", "Rapid Shot", "Ray Shield", "Razortusk", "Reach Defense", "Reach Spell", "Realistic Likeness", "Rebounding Leap", "Rebuffing Reduction", "Reckless Aim", "Redeemed Kobold", "Redemption", "Reject Poison", "Remote Bomb", "Rending Claws", "Rending Fury", "Renown", "Repositioning Strike", "Resilient Brute", "Resilient Eidolon", "Resolute Rager", "Revelation Strike", "Revered Guidance", "Reverse-Feint", "Reward of Grace", "Reward of Life", "Rhetorical Flourish", "Rhetorical Flourish", "Rhino Charge", "Ricochet Shot Deed", "Ricochet Splash Weapon", "Ride-By Attack", "Ride-By Attack", "Righteous Healing", "Rime Spell", "Riptide Attack", "Risky Striker", "Roll With It", "Rugged Northerner", "Run", "Run", "Sacred Summons", "Saddle Shrieker", "Sap Adept", "Sap Master", "Savage Display", "Saving Shield", "Saving Shield", "Scaled Disciple", "Scavenger's Eye", "Scholar", "School Strike", "SchooledResolve", "Scorching Weapons", "Scorpion Style", "Scorpion Style", "Scribe Scroll", "Sea Hunter", "Sea Legs", "Second Chance", "Secret Signs", "Secret Stash Deed", "Seeds Ofdoubt", "Seen and Unseen", "Seize the Moment", "Selective Channeling", "Selective Channeling", "Selective Spell", "Self-Sufficient", "Self-Sufficient", "Sense Link", "Serpent Lash", "Shade of the Uskwood", "Shadow Caster", "Shadow Dodge", "Shadow Gambit", "Shadow Ghost", "Shadow Grasp", "Shadow Strike", "Shadow Walker", "Shadowy Dash", "Shaitan Earthblast", "Shaitan Skin", "Shaitan Style", "Shake It Off", "Shamed", "Shapeshifter Foil", "Shapeshifting Hunter", "Shaping Focus", "Shared Insight", "Shared Judgment", "Shared Manipulation", "Sharp Senses", "Sharpclaw", "Shatter Defenses", "Shatter Defenses", "Shatter Resolve", "Shatterspell", "Shield Focus", "Shield Focus", "Shield Master", "Shield of Swings", "Shield Proficiency", "Shield Slam", "Shield Slam", "Shield Snag", "Shield Specialization", "Shield Wall", "Shielded Caster", "Shot on the Run", "Shot On The Run", "Shrewd Tactician", "Sickening Critical", "Sickening Spell", "Sidestep", "Siege Commander", "Siege Engineer", "Siege Gunner", "Signature Deed", "Silent Performer", "Silent Spell", "Simple Weapon Proficiency", "Sin Seer", "Siphon Poison", "Skeleton Summoner", "Skill Focus", "Skill Focus", "Skilled Driver", "Slayer's Knack", "Slaying Sprint", "Sleep Venom", "Sleeper Hold", "Sliding Axe Throw", "Sling Flail", "Slow Time", "Small But Deadly", "Smash", "Smell Fear", "Snake Fang", "Snake Style", "Snap Shot", "Snapping Turtle Clutch", "Snapping Turtle Shell", "Snapping Turtle Style", "Snatch", "Snatch Arrows", "Snatch Arrows", "Sneaking Precision", "Snoutgrip", "Sociable", "Sociable", "Solo Maneuvers", "Sorcerous Bloodstrike", "Sorcerous Strike", "Spear Dancer", "Spell Bane", "Spell Bluff", "Spell Chain", "Spell Focus", "Spell Focus", "Spell Hex", "Spell Mastery", "Spell Mastery", "Spell Penetration", "Spell Penetration", "Spell Perfection", "Spell Specialization", "Spell Sponge", "Spellbreaker", "Spellbreaker", "Spellsong", "Spider Step", "Spider Step", "Spider Summoner", "Spiked Destroyer", "Spinning Throw", "Spirit of the Wild", "Spirit Vision", "Spirited Charge", "Spirited Charge", "Spit Venom", "Splintering Weapon", "Split Hex", "Split Major Hex", "Spontaneous Metafocus", "Spontaneous Metafocus", "Spring Attack", "Spring Attack", "Squash Flat", "Stabbing Shot", "Stable Gallop", "Stable Spell", "Stage Combatant", "Staggering Critical", "Stalwart", "Stance of the Xorn", "Stand Still", "Starlight Summons", "Steadfast Mind", "Steady Engagement", "Stealth Synergy", "Stealthy", "Stealthy", "Steam Caster", "Steel Soul", "Step Up", "Step Up and Strike", "Still Spell", "Stoic", "Stoic Pose", "Stone Read", "Stone Sense", "Stone Singer", "Stone-Faced", "Stony Step", "Storm-Lashed", "Strangler", "Stretched Wings", "Strike Back", "Strike Back", "Strong Comeback", "Strong Comeback", "Stronghold", "Stunning Assault", "Stunning Critical", "Stunning Fist", "Stunning Fist", "Stunning Fist Adept", "Stunning Pin", "Summoner's Call", "Sundering Strike", "Sunlight Summons", "Sunlit Strike", "Superior Summoning", "Supernal Feast", "Sure and Fleet", "Sure Grasp", "Sure-Footed", "Surge of Success", "Surprise Follow-Through", "Surprise Strike", "Surprising Combatant", "Survivor", "Swap Places", "Swarm Scatter", "Swarm Strike", "Swift Aid", "Sword and Pistol", "Sympathetic Rage", "Sympathetic Rage", "Tactical Reposition", "Tail Terror", "Taldan Duelist", "Talmandor's Lifting", "Tandem Trip", "Tandemevasion", "Tangle Feet", "Tantrum", "Tapestry Traveler", "Target of Opportunity", "Taskmaster", "Taunt", "Team Pickpocketing", "Team Up", "Teleport Tactician", "Tenacious Survivor", "Tenacious Transmutation", "Tenebrous Spell", "Tengu Raven Form", "Tengu Wings", "Terrifying Mask", "Terrorizing Display", "Thanatopic Spell", "Theurgy", "Thief Of Legend", "Thoughtful Discernment", "Threnodic Spell", "Thrill of the Kill", "Thrill of the Kill", "Throw Anything", "Throw Anything", "Thunder And Fang", "Thundering Spell", "Thuvian Grenadier", "Tiger Claws", "Tiger Pounce", "Tiger Style", "Tiring Critical", "Titan Strike", "Topple Foe", "Toppling Spell", "TORCH HANDLING", "Totem Spirit", "Touch of Serenity", "Touched By Sacred Fire", "Toughness", "Toughness", "Tower Shield Proficiency", "Town Tamer", "Toxic Recovery", "Toxic Stench", "Trample", "Trample", "Trap Wrecker", "Trapper's Setup", "Tree Hanger", "Tribal Scars", "Tribe Mentality", "Trick Riding", "Tripping Staff", "Tripping Staff", "Tripping Strike", "Tripping Twirl", "Triton Portal", "True Love", "Truth-Seeker", "Tunnel Rat", "Turn Undead", "Twin Thunders", "Twin Thunders Flurry", "Twin Thunders Master", "Two-Fisted Drinker", "Two-Handed Thrower", "Two-Weapon Defense", "Two-Weapon Defense", "Two-Weapon Feint", "Two-Weapon Fighting", "Two-Weapon Fighting", "Two-Weapon Rend", "Two-Weapon Rend", "Ultimate Mercy", "Ultimate Resolve", "Umbral Scion", "Umbral Spell", "Uncanny Activation", "Uncanny Alertness", "Uncanny Concentration", "Uncanny Defense", "Undead Master", "Undead Master", "Under and Over", "Underfoot", "Underhanded Teamwork", "Undermine", "Undermining Exploit", "Unforgotten", "Unsanctioned Detection", "Unsanctioned Knowledge", "Unseat", "Unseat", "Valiant Steed", "Valiant Vault", "VampiricCompanion", "Vandal", "Variant Prayer Scroll", "Varisian Tattoo", "Vast Hatred", "Vengeance", "Vengeful Banisher", "Verbose Performer", "Vermin Heart", "Versatile Channeler", "Versatile Spontaneity", "Vicious Stomp", "Vigilant Eidolon", "Violent Display", "Vital Strike", "Vital Strike", "Voice of the Sibyl", "Voice Of The Sibyl", "Wall Offlesh", "Wand Dancer", "War Singer", "Warleader's Rage", "Warrior Priest", "Warrior Priest", "Water Skinned", "Wave Strike", "Weapon Finesse", "Weapon Finesse", "Weapon Focus", "Weapon Focus", "Weapon Specialization", "Weapon Specialization", "Weather Eye", "Well-Prepared", "Whip Mastery", "Whip-Shot Deed", "Whip-Slinger", "Whirlwind Attack", "Whispered Knowledge", "Wicked Valor", "Widen Spell", "Wild Speech", "Wind Stance", "Wingclipper", "Wingover", "Wings of Air", "Wings Of The Androsphinx", "Witch Knife", "Witch Knife", "Witchbreaker", "Witty Feint", "Wolf Savage", "Wolf Style", "Wolf Trip", "Word of Healing", "Worldwound Walker"
  ];

  var _all_traitsObject = null;
  var _all_traitsName = [
    "A Shining Beacon", "A Sure Thing", "Aballonian Resilience", "Abendego Spellpiercer", "Aberration Hunter", "Absalom Hotspur", "Absolute Loyalty", "Accelerated Drinker", "Acolyte of Razmir", "Acrobat", "Acupuncturist", "Adaptable Flatterer", "Adopted", "Adrift", "Adroit", "Advantageous Distraction", "Adventurous Explorer", "Advocate for the Empire", "Aerial Observer", "Affable", "Affinity of the Elements", "Agent of Chance", "Agent of Dusk", "Agent of the Sultana (Plane of Earth)", "Aid Allies", "Air-Touched", "Airship Captain (Plane of Air)", "Akitonian Ferocity", "Alabaster Odalisque", "Alabaster Outcast", "Alchemical Adept", "Alchemical Breath", "Alchemical Intuition", "Alchemical Prodigy", "Alchemical Prodigy", "Alchemists Apprentice", "Alert", "Alien Origins", "Alkenstar Defender", "Alluring", "Almost Human", "Altruistic Diplomat", "Ambassador", "Ambitious", "Ambush Training", "Amiable Blunder", "Anatomist", "Ancient Explorer", "Andoren Freedom Fighter", "Animal Friend", "Animalistic Affliction", "Anticipate Evil", "Antiquities Smuggler", "Aquatic Survivalist (Plane of Water)", "Arcane Dabbler", "Arcane Dabbler", "Arcane Depth", "Arcane Revitalization", "Arcane Student", "Arcane Temper", "Armor Expert", "Arms Master", "Artifact Hunter", "Artisan", "Artistic Dilettante", "Ascendant Recollection", "Asmodean Demon Hunter", "Aspiring Bard", "Aspiring Hellknight", "Assimilated Native", "Attuned to the Ancestors", "Augmented Disguise", "Auspicious Tattoo", "Authoritarian", "Avid Reader", "Awakened from Stasis", "Axe to Grind", "Azlant Fanatic", "Backstabber", "Bad Reputation", "Balancer's Banishing", "Balloon Headed", "Bandit", "Barroom Talespinner", "Bastard", "Bastard", "Battlefield Caster", "Battlefield Disciple", "Battlefield Surgeon", "Beacon of Faith", "Beast Bond", "Beast Bully", "Beast of the Society", "Bellflower Tiller", "Beneficient Touch", "Bent Body", "Berserker of the Society", "Best Friend", "Betrayed Ex-Noble (City of Brass)", "Big Boned", "Big Ears", "Birthmark", "Black Powder Bravado", "Black Powder Fortune", "Black Powder Interjection", "Black Sheep", "Blade Bravado", "Blade of Mercy", "Blade of the Society", "Bladed Magic", "Blessed", "Blessed Touch", "Blessing of Darkness", "Blessing of the Feast", "Blood of Dragons", "Blood of Pharaohs", "Blood Stalker", "Blood Steed", "Blooded", "Bloodthirsty", "Bloody-Minded", "Boar Resilience", "Boarded in Cheliax", "Boarded in Mediogalti", "Boarded in the Mwangi Expanse", "Boarded in the Shackles", "Boarded in Varisia", "Bog Scamp", "Border Guard", "Born Damned", "Born in the Light", "Born to the Water", "Born under the Green Star", "Born under the Stranger", "Bouncy", "Bounty Hunter", "Bralani's Step", "Brastlewark Businessman", "Bred for War", "Brewmaster", "Briar Bandit", "Brigand", "Broken Mind", "Bruising Intellect", "Brute", "Buccaneer's Blood", "Bullied", "Bully", "Buried Anxiety", "Burnished Skin", "Calculated Bribe", "Calistrian Courtesan", "Call for Help", "Called", "Candidate for Perfection", "Canter", "Captain's Blade", "Caravan Drover", "Caravan Guard", "Careful Combatant", "Carefully Hidden", "Caretaker", "Carnation Scales", "Celestial Tracker", "Cellular Match", "Centaur Vengeance", "Centered", "Chain Master", "Chance Savior", "Channel the Earth (Plane of Earth)", "Charlatan", "Charming", "Cheap to Feed", "Cheat Death", "Child of Infamy", "Child of Nature", "Child of the Crusades", "Child of the Moon", "Child of the Necropolis", "Child of the Streets", "Child of the Temple", "Child of Zolurket", "Childhood Crush", "Chip on the Shoulder", "Chivalrous", "Chosen Child", "Chosen One", "Citizen of Eleder", "Citizen of Kalabuto", "Civilized", "Clan Artisan", "Classically Schooled", "Cleansing Light", "Cleansing the Twisted", "Clearheaded", "Clergy Member", "Clever Wordplay", "Cliff Jumper", "Cliff-Master", "Clumsy Slave", "Coherent Rage", "Coin Hoarder", "Coincunning", "Cold and Calculating", "Cold Fortitude", "Cold Heart", "Collector", "Colonial", "Colonial Entitlement", "Colonial Sympathizer", "Color Thief", "Commercial Savvy", "Community-Minded", "Comparative Religion", "Competitive", "Confidante to the Oppressed", "Conscientious Miner", "Conspiracy Hunter", "Contagious Mettle", "Contract Master", "Convincing Liar", "Cooperative Combatant", "Corpse Cannibal", "Corpse Dodger", "Corpse Hunter", "Cosmopolitan", "Courageous", "Covenant of Abaddon", "Creative Manipulator", "Criminal", "Crocodile Swim", "Cross-Disciplined", "Cross-Knowledge", "Crowd Dodger", "Crusader Tactician", "Curse in the Blood", "Cynic", "Cynical Ear", "Cypher Resistance", "Dangerously Curious", "Dark Magic Affinity", "Darklands Delver", "Dawn Renewal", "Deadly Rush", "Dealer", "Dealmaker", "Death’s Deputy", "Deathkeeper", "Deathspeaker", "Deathtouched", "Deck Fighter", "Dedicated Defender", "Deep Guardian", "Deep Marker", "Deepsea Native", "Defender of the Society", "Defensive Strategist", "Deformed", "Deft Dodger", "Defy Madness", "Demon Eradicator", "Demon Slayer", "Demon Smiter", "Demonic Persuasion", "Dervish", "Desert Child", "Desert Nomad", "Desert Shadow", "Desperate Resolve", "Desperate Speed", "Destined Diplomat", "Destined For Greatness", "Destructive Blows", "Detect Disobedience", "Devil's Mark", "Devoted Healer", "Devotee of a Dead God", "Devotee of Kalistrade", "Devotee of the Green", "Devotee of the Old Gods", "Diabolical Dabbler", "Diabolist Raised", "Dilettante Artist", "Dim Seer", "Dirty Fighter", "Discerning Beliefs", "Disdainful Defender", "Disease Resistant", "Disillusioned", "Dismantle Order", "Dispelled Battler", "Distance Aptitude", "Divine Deceiver", "Divine Warrior", "Dockside Brawler", "Dog-Sniff-Hate", "Dominator", "Domineering", "Doublespeak", "Dowsing", "Draconic Echo", "Draconic Vigil", "Dragonslayer", "Drug Addict", "Dtang Ma Bloodline", "Dualborn (Suli)", "Dueling Cloak Adept", "Dunewalker", "Dungeon Dweller", "Durable Change", "Dusk Dancer", "Duskwalker Agent", "Ear for Music", "Earning Your Freedom", "Earth-Touched", "Earthbound", "Earthsense (Oread)", "Ease of Faith", "Eastern Mysteries", "Easy Way or the Hard Way", "Egorian School Apprentice", "Elaborate Trapper", "Eldritch Delver", "Eldritch Smith", "Elemental Endowment", "Elemental Pupil", "Elven Pantheist", "Elven Reflexes", "Elven Serenity", "Emissary", "Empty Heart~~~ Full Heart", "Empyreal Focus", "Enduring Mutagen", "Enemy of Slavers", "Enemy of the Undead", "Enlightened Warrior", "Eoxian Experiment", "Equality for All", "Erastil's Speaker", "Ethical Leader", "Etymologist", "Evasive Sting", "Ever Home", "Ever Wary", "Evident Supporter", "Exalted of the Society", "Exchange Agent", "Excitable", "Exiled Scholar", "Expert Boarder", "Expert Distractor (Ifrit)", "Expert Duelist", "Expert Smuggler", "Explorer", "Extremely Fashionable", "Eye for Plunder", "Eye of the Falcon", "Eye of the Father", "Eyes and Ears of the City", "Eyes of the Sun", "Eyes of the Wild", "Failed Apprentice", "Faith Healer", "Faith's Hunter", "Faithful Arodenite", "Faithful Artist", "Faithful Feedback", "Famed Performer", "Family Connections", "Fanatic", "Fangwood Diplomat", "Fashionable", "Fast-Talker", "Fatal Trapper", "Fate's Favored", "Favored Child", "Fearless Defiance", "Feline Instinct", "Fencer", "Fey Protection", "Fiend Blood", "Fiendish Confidence", "Fiendish Presence", "Fiery Dominance (Plane of Fire)", "Fiery Glare", "Fight with the Flock", "Final Embrace", "Finding Haleen", "Finish the Fight", "Fire-Tongued", "Firebug", "Firebug", "Fires of Hell", "First Memories", "Flair for Destruction", "Flame of the Dawnflower", "Flame-Touched", "Flames of Hell", "Flotsam", "Flounderer", "Focused Burn", "Focused Disciple", "Focused Mind", "Following Breeze", "Fools for Friends", "Forbidden Knowledge", "Force For Good", "Foreign Opportunist", "Forlorn", "Former Assassin", "Fortified", "Fortified Drinker", "Fortunate", "Foster Child", "Foul Belch", "Framed", "Free Spirit", "Freed Slave", "Freed Slave", "Freed Slave", "Freedom Fighter", "Freedom Fighter", "Freedom Fighter", "Freedom Fighter", "Friend in Every Town", "Friend of the Dead", "Friend of the Family", "Friend of the Fey", "Friendless", "Friends in High Places", "Friends in Low Places", "Frightening Speed", "Frontier-Forged", "Frost Spitter", "Frostborn", "Fury", "Gallant Imposter", "Garbage Picker", "Genie Blood", "Genie-Caller", "Get the Cargo Through", "Ghost Sight", "Ghost Survivor", "Ghoulish Affinity", "Gifted Adept", "Glib Barrister", "Glory of Old", "Gnoll Killer", "Goblin Foolhardiness", "Goblin Pirate", "God Scorn", "Golden Scales", "Goldfinger", "Goldsniffer", "Good Dreams", "Good Influence", "Good Natured", "Gravelwalker", "Greasy Palm", "Greater Adept of the Society", "Greater Link", "Greater Purpose", "Gregarious", "Grief-Filled", "Grim Optimism", "Grit Goggles", "Grounded", "Group Fighter", "Guardian of the Forge", "Guerilla", "Half-Forgotten Secrets", "Hard to Kill", "Hardly a Fool", "Harrow Born", "Harrow Chosen", "Harvester", "Hatred of the Gods", "Havoc of the Society", "Heart of Clay", "Heat Fortitude", "Heavenly Touch", "Hedge Magician", "Heirloom Weapon", "Hellknight Ancestry", "Helpful", "Helpful", "Hermean Paragon", "Hero Worship", "Hidden Hand", "Highlander", "Hill Fighter", "Historian", "History of Heresy", "Hobgoblin Slayer", "Holdout", "Holy Schemer", "Holy Tattoo", "Honest", "Honey-Tongued", "Honeyed Tongue", "Honeyed Words", "Hongal Bloodrider", "Honored Fist of the Society", "Horrifying Mind", "Horse Lord", "Horse Lord", "Humble Beginnings", "Hunter's Blood", "Hunter's Eye", "Hunter's Knack", "Hwan Artist", "I Know a Guy", "Iadaran Illusionist", "Ice Walker", "Icy Mementos", "Illuminator", "Imperial Soldier", "Imposing Scion", "Impressive Presence", "Improvisational Equipment", "Improvised Defense", "Inciter", "Indelible Ire", "Indentured Blacksmith", "Indomitable", "Indomitable Faith", "Inexorable Authority", "Infernal Bastard", "Infernal Influence", "Influence", "Inheritor", "Inheritor", "Inner Beauty", "Innocent", "Inoculated", "Inquisitive Archaeologist", "Insider Knowledge", "Insistent Benefactor", "Inspired", "Inspired by Greatness", "Inspiring", "Inspiring Rush", "Inspiring Speaker", "Instant Friendship (Suli)", "Instigator of Rebellion", "Intense Artist", "Into Enemy Territory", "Intrepid Delver", "Inured to Death", "Inured to Disease", "Iron Control", "Iron Grip", "Iron Liver", "Iron Lungs", "Iron Mind", "Irrepressible", "Isger Fixer", "Isgeri Orphan", "Issian", "Issian Noble", "Jenivere Crew", "Jungle Diplomat", "Jungle Fighter", "Jungle Guide", "Jungle Resilience", "Jungle Walker", "Just Like New", "Justiciar", "Kami Talker", "Keen Appraiser", "Keeper of the Ancestral Scrolls", "Keeper of the Veil", "Killer", "Kin Bond", "Kin Guardian", "Know the Land", "Knowing the Enemy", "Knowledgeable Caster", "Kobold Faith", "Kobold Herbalist", "Kobold's Neighbor", "Kuthite Caster", "Kwanlai Believer", "Kyonin Gatekeeper", "Lair Snake", "Lantern Spirit", "Lapsed Faith", "Larger Than Life", "Lastwall Cavalry Rider", "Latent Psion", "Law Enforcer", "Left Behind", "Legacy of Sand", "Legalistic Liberation", "Lessons of Chaldira", "Lettered", "Life of Toil", "Light Sleeper", "Lightning-Blessed", "Lillend's Harp", "Linebreaker", "Lingshen's Finest", "Linguistic Genius", "Linked Surge", "Liquid-Tongued", "Local Know-It-All", "Long Jumper", "Looking for Work", "Loreseeker", "Lost Nobility", "Lost Role Model", "Love Lost", "Lover of the Law", "Loyalty", "Loyalty across Lifetimes", "Lucid Dreamer", "Lucky Turnabout", "Lunar Birth ", "Lycanthropic Bloodlust", "Maestro of the Society", "Magic Crafter", "Magic is Life", "Magical Flair", "Magical Knack", "Magical Lineage", "Magical Talent", "Making Good on Promises", "Malleable Magic", "Mammoth Master", "Mana Wastes Survivalist", "Marid's Fury (Undine)", "Marked by Unknown Forces", "Market Rat", "Martial Manuscript", "Martial Performer", "Martyr's Blood", "Master of Peaks", "Master of Pentacles", "Master of the Sudden Strike", "Masterful Demeanor", "Mastery of Form", "Mathematical Prodigy", "Mediator", "Medic", "Memorable", "Mentored", "Mercenary", "Merchant", "Merchant of Katheer", "Merchant's Child", "Meridian Strike", "Meticulous Artisan", "Meticulous Concoction", "Militant Merchant", "Militia Veteran", "Mind Over Matter", "Mind Trapper", "Miner", "Missing Child", "Missionary", "Monkey Goblin", "Monument Scholar", "Mordant Heritage", "Mother's Rage", "Mother’s Teeth", "Motherless", "Mountain Guide", "Mummy-Cursed", "Mummy-Touched", "Muscle of the Society", "Mutabi-qi Explorer", "Mwangi Scholar", "Mystery Initiate", "Nanite Revival", "Narrows Survivor", "Native", "Natural Born Sailor", "Natural-Born Leader", "Naturally Gifted", "Nature's Mimic", "Necropolis Native", "Necrotic Aura", "Never Stop Shooting", "Nidalese Shadowcaster", "Nightstall Urchin", "Nimble Fingers~~~ Keen Mind", "No Escape", "Noble Born", "Noble Savage", "Nomadic", "Nonchalant Thuggery", "Nontraditional Native", "Numerological Gift", "Numerologist", "Oagan Diver", "Oathbound", "Obsequious Morsel", "Observant", "Oenopion Alchemist", "Offspring of the Ascension", "Old Before Your Time", "Omen", "On the Payroll", "Ooze Defense", "Open Hand and Mind", "Open-Minded Explorer", "Opener of Doors", "Operatic", "Opportunistic", "Optimistic Gambler", "Orc Impaler", "Ordinary", "Orphaned", "Osirionologist", "Outcast", "Outcast's Intuition", "Outlander", "Overwhelming Beauty", "Pain Artist", "Pain Is Pleasure", "Partial Protege", "Passionate Believer", "Passionate Inertia", "Pathfinder's Focus", "Patient Calm", "Patient Optimist", "Pearl Diver", "Pearl Diver", "Peg Leg", "Perfect Servant", "Perfectionist's Brew", "Performance Artist", "Perpetual Companion", "Perseverance", "Persuasive", "Pesh Addict", "Pesh Dealer", "Pillager", "Pioneer", "Pirate", "Plainsman", "Planar Historian (Plane of Water)", "Planar Negotiator", "Planar Savant", "Planar Scholar (Plane of Air)", "Planetar's Visions", "Pomp and Pageantry", "Possessed", "Potent Concoctions", "Poverty-Stricken", "Power of Suggestion", "Practiced Deception", "Practiced Impression", "Pragmatic Activator", "Prayer Breaker", "Precise Treatment", "Precision Hearing", "Precocious Spellcaster", "Prehensile Whip", "Pride of the Diamond Empire", "Prideful Temper", "Prince/Princess", "Principled", "Prismati Player", "Privileged Slave", "Prolong Magic", "Proper Training", "Prophesied", "Propitiation", "Proud Tribesman", "Providential Passenger", "Provider", "Punish Insurrection", "Purchased Loyalty", "Pure Legion Recruit", "Purity of Faith", "Purple Scales", "Pustular", "Pyromancer", "Quain Martial Artist", "Quantium University Graduate", "Quick Learner", "Rabble Rebel", "Rahadoumi Cultist", "Rahadoumi Disbeliever", "Rapscallion", "Rat Squeeze", "Reactionary", "Rebel Leader", "Reckless", "Reckless Contempt", "Reclaiming Your Roots", "Redeemer", "Regional Influence", "Regional Recluse", "Reincarnated", "Relic Hunter", "Relic-Proof", "Reluctant Apprentice", "Repel Sin", "Repulsive", "Rescued", "Researching the Blot", "Resigned", "Resilient", "Resilient Caster", "Resolve of the Rejected", "Rest for the Wicked", "Restless Hunger", "Resurrected", "Reviving Rest", "Rice Runner", "Rich Parents", "Rider of Paresh", "River Fighter", "River Freedom", "River Rat", "Riverfolk", "Rostlander", "Rough and Ready", "Rude Songs", "Ruin Raider", "Ruthless", "Sacred Avenger", "Sacred Conduit", "Sacred Smasher", "Sacred Touch", "Sandy Ambush", "Sargavan Guard", "Savage", "Savage Breaker", "Savanna Hunter", "Savannah Child", "Savant", "Scaly Ally", "Scarred by Space Pirates", "Scarred Descendant", "Scholar of Ruins", "Scholar of the Great Beyond", "Schooled Inquisitor", "Scorned by Magic", "Scouting for Fiends", "Scrapper", "Scrounger", "Sea-Souled", "Searing Beacon", "Seasoned Climber", "Second Tongue", "Secret Knowledge", "Secret of the Impossible Kingdom", "Secret Revolutionary", "Secret-Keeper", "Secrets of the Sphinx", "Seeker", "Seeker of Brightness", "Seeking Adventure", "Seer of Reality", "Selective Health", "Self-Sacrifice", "Self-Taught Scholar", "Sense of Order", "Sensing Imperfection", "Sensual Graces", "Serpent Runner", "Serpentine Squeeze", "Shackles Seafarer", "Shadow Child", "Shadow Diplomat", "Shadow Stabber", "Shadow Whispers", "Shadowsight", "Shared Curse", "Sharkchild", "Shenmen Prospector", "Shield Bearer", "Shift the Blame", "Ship's Surgeon", "Shiv", "Shoanti Tribesman", "Shoreline Skirmisher", "Shrouded Casting", "Signaler", "Signature Moves", "Silent Watcher", "Silvertongued Eunuch", "Simple Disciple", "Skater's Balance", "Skeptic", "Skilled Telepath", "Sky Spirit Worshiper", "Skymetal Affinity", "Slave Smuggler", "Slaver", "Slayer of the Deep", "Slippery", "Slippery Step", "Slithering Stride", "Smoke Resistant", "Snake Bleeder", "Snake Hater", "Snap Ignition", "Sneaky Swimmer", "Snowbound", "Snowstride", "Soaring Sprinter", "Soldier of the Faith", "Solidarity (City of Brass)", "Soul Eater", "Soul-Drinker", "Sound of Mind", "Sovyrian Pantheist", "Spark of Creation", "Speech of the Wilds", "Spell Duel Prodigy", "Spell Intuition", "Sphinx Riddler", "Sphinxfriend", "Spidery Climber ", "Spirit Guide", "Spirit Sense", "Spirit Talker", "Spirits in the Stone", "Spiritual Forester", "Sprint", "St. Clydwell's Ward", "Stable", "Stage Magic", "Stalwart of the Society", "Starchild", "Stargazer", "Startling Report", "Statuesque (Oread)", "Stealthy Escape", "Steel Skin", "Stoic Dignity", "Stoic Optimism", "Storm Hunter", "Storm Pilot", "Storm-Touched", "Stormrunner", "Storyteller", "Stowaway", "Stream Nomad", "Strength Foretold", "Strength of Body", "Strength of the Barghest", "Strength of the Land", "Strength of the Sun", "Strip the Veils", "Strong Arm~~~ Supple Wrist", "Strong Heart", "Strong Swimmer", "Strong Willed", "Student of Philosophy", "Student Survivalist", "Style Sage", "Subject of Study", "Subjective Truth", "Successful Shirker", "Suck In Your Gut", "Suicidal", "Sun Orchid Harvester", "Sun-Blessed ", "Superior Clutch", "Superstitious", "Superstitious", "Superstitious Ward", "Supportive", "Surface Stranger", "Surprise Weapon", "Survivor", "Suspicious", "Swamp Rebel", "Swamp Survivor", "Sword Scion", "Swordlord's Page", "Sworn Enemy", "Tactician", "Tactile Telekinesis", "Talented", "Talented Organizer", "Tar-Baphon's Whisper / Sotto Voce", "Tattooed Mystic", "Teacher’s Pet", "Teaching Mistake", "Technic Tinkerer", "Tempter's Tongue", "Tenacious Shifting", "Terrifying Lunge", "The City Protects", "The Flexing Arm", "The Pathfinder's Exile", "Theoretical Magician", "Third Eye", "Thoroughbred", "Thoughtful Wish-Maker (Plane of Fire)", "Thrall Spotter", "Threatening Defender", "Thrown-Together Fashion", "Thunderborn (Sylph)", "Thuvian Merchant", "Tianjing Temple Guard", "Tiger Brigadier", "Tiger's Claw", "Tireless Avenger", "Tireless Logic", "Toilcrafter", "Tomb Raider", "Tongue of Many Towns", "Touched by the Sea", "Touched by the Sky", "Tough Skin", "Town Gossip", "Toxophilite", "Tracker of the Society", "Trade Talk", "Trailblazer", "Transitional", "Transmuter", "Trap Finder", "Trap Savvy", "Traumatic Shift", "Treerazer’s Bane", "Trench Navigator", "Triaxian Dragonslayer ", "Triaxian Tradition", "Trickster", "Trifler", "Tropical Botanist", "Tropical Upbringing", "Trouper", "Trustworthy", "Truth's Agent", "Tundra Child", "Tunnel Fighter", "Twilight Zeal", "Twinned Presence", "Two-World Magic", "Ugly Swine", "Unabashed Gall", "Unblemished Barrel", "Undead Crusader", "Undead Slayer", "Undead Slayer", "Under Siege", "Underling", "Underlying Principals", "Undermarket Smuggler", "Underworld Explorer", "Undine Loyalty", "Unearth Secrets", "Unflappable Arrogance (Ifrit)", "Unflinching Faith", "Unhappy Childhood", "Unhinged Mentality", "Unidentifiable Appeal", "Unintentional Linguist", "Unnatural Presence", "Unnatural Revenge", "Unorthodox Strategy", "Unpredictable", "Unpredictable Reactions", "Unscathed", "Unseen but Not Undone", "Unspeakable Bond", "Unstable Mutagen", "Uskwood Hunter", "Ustalavic Noble", "Uwaga Highlander", "Vagabond Child", "Valashmai Veteran", "Varisian Wanderer", "Veiled Disciple", "Vengeful", "Venicaan Medic", "Venom-Drenched", "Vermin Wrangler", "Veteran of Battle", "Vigilant Battler", "Viking Blood", "Vile Kiss", "Vindictive", "Vindictive Strike", "Voice of Monsters", "Voice of Velvet", "Void Child", "Volatile Conduit", "Walking Ward", "Wanderer's Shroud", "Wanderlust", "Wardbreaker", "Warrior of Old", "Warrior Poet", "Warsmith", "Wary", "Wasp Whisperer", "Watchdog", "Watching Taldor", "Water-Touched", "Wayang Spellhunter", "Weapon of Peace", "Weapon Style", "Weathered Emissary", "Well Bred", "Well-Informed", "Westcrown Firebrand", "Wharf Rat", "Whisper Woods Hunter", "Whiteout (Undine)", "Whole-Hearted", "Wicked Leader", "Wind-Carried Voices (Sylph)", "Winter Warrior", "Winter's Soul", "Wisdom in the Flesh", "Wise Teacher", "Without a Past", "Witty Repartee", "Wolf Cub", "World Traveler", "Worldly", "Xa Hoi Soldier", "Younger Sibling", "Youthful Mischief", "Zealot", "Zealous Striker", "Zest for Battle"
  ];

  var _all_abilitiesObject = null;
  var _all_abilitiesName = [
"alchemy_alchemist",
"bomb_alchemist",
"brew potion_alchemist",
"mutagen_alchemist",
"throw anything_alchemist",
"discovery_alchemist",
"poison resistance_alchemist",
"poison use_alchemist",
"swift alchemy_alchemist",
"swift poisoning_alchemist",
"persistent mutagen_alchemist",
"instant alchemy_alchemist",
"grand discovery_alchemist",
"aura of evil_antipaladin",
"detect good (sp)_antipaladin",
"smite good_antipaladin",
"unholy resilience_antipaladin",
"touch of corruption_antipaladin",
"aura of cowardice_antipaladin",
"plague bringer_antipaladin",
"cruelty_antipaladin",
"channel negative energy_antipaladin",
"spells_antipaladin",
"fiendish boon (sp)_antipaladin",
"aura of despair_antipaladin",
"aura of vengeance_antipaladin",
"aura of sin_antipaladin",
"aura of depravity_antipaladin",
"unholy champion_antipaladin",
"code of conduct_antipaladin",
"associates_antipaladin",
"spells_arcanist",
"spellbooks_arcanist",
"arcane reservoir_arcanist",
"cantrips_arcanist",
"consume spells_arcanist",
"greater exploits_arcanist",
"magical supremacy_arcanist",
"fast movement_barbarian",
"rage_barbarian",
"rage powers_barbarian",
"uncanny dodge_barbarian",
"trap sense_barbarian",
"improved uncanny dodge_barbarian",
"damage reduction_barbarian",
"greater rage_barbarian",
"indomitable will_barbarian",
"tireless rage_barbarian",
"mighty rage_barbarian",
"fast movement_barbarian (unchained)",
"rage_barbarian (unchained)",
"rage powers_barbarian (unchained)",
"barbarian (unchained) rage power_barbarian (unchained)",
"uncanny dodge_barbarian (unchained)",
"danger sense_barbarian (unchained)",
"improved uncanny dodge_barbarian (unchained)",
"damage reduction_barbarian (unchained)",
"greater rage_barbarian (unchained)",
"indomitable will_barbarian (unchained)",
"tireless rage_barbarian (unchained)",
"mighty rage_barbarian (unchained)",
"spells_bard",
"bardic knowledge_bard",
"bardic performance_bard",
"cantrips_bard",
"versatile performance_bard",
"well-versed_bard",
"lore master_bard",
"jack-of-all-trades_bard",
"bloodline_bloodrager",
"bloodrage_bloodrager",
"fast movement_bloodrager",
"uncanny dodge_bloodrager",
"blood sanctuary_bloodrager",
"blood casting_bloodrager",
"eschew materials_bloodrager",
"spells_bloodrager",
"improved uncanny dodge_bloodrager",
"damage reduction_bloodrager",
"greater bloodrage_bloodrager",
"indomitable will_bloodrager",
"tireless bloodrage_bloodrager",
"mighty bloodrage_bloodrager",
"brawler's cunning_brawler",
"martial flexibility_brawler",
"martial training_brawler",
"unarmed strike_brawler",
"bonus combat feats_brawler",
"brawler's flurry_brawler",
"maneuver training_brawler",
"ac bonus_brawler",
"knockout_brawler",
"brawler's strike_brawler",
"close weapon mastery_brawler",
"awesome blow_brawler",
"improved awesome blow_brawler",
"challenge_cavalier",
"mount_cavalier",
"medium cavaliers_cavalier",
"small cavaliers_cavalier",
"order_cavalier",
"tactician_cavalier",
"cavalier's charge_cavalier",
"expert trainer_cavalier",
"banner_cavalier",
"bonus feat_cavalier",
"greater tactician_cavalier",
"mighty charge_cavalier",
"demanding challenge_cavalier",
"greater banner_cavalier",
"master tactician_cavalier",
"supreme charge_cavalier",
"aura_cleric",
"spells_cleric",
"channel energy_cleric",
"domains_cleric",
"orisons_cleric",
"spontaneous casting_cleric",
"chaotic, evil, good, and lawful spells_cleric",
"bonus languages_cleric",
"spells_druid",
"spontaneous casting_druid",
"chaotic, evil, good, and lawful spells_druid",
"orisons_druid",
"bonus languages_druid",
"nature bond_druid",
"nature sense_druid",
"wild empathy_druid",
"woodland stride_druid",
"trackless step_druid",
"resist nature's lure_druid",
"wild shape_druid",
"venom immunity_druid",
"a thousand faces_druid",
"timeless body_druid",
"bonus feats_fighter",
"bravery_fighter",
"armor training_fighter",
"weapon training_fighter",
"armor mastery_fighter",
"weapon mastery_fighter",
"gunsmith_gunslinger",
"grit_gunslinger",
"deeds_gunslinger",
"nimble_gunslinger",
"bonus feats_gunslinger",
"gun training_gunslinger",
"true grit_gunslinger",
"daring act_gunslinger",
"spells_hunter",
"orisons_hunter",
"chaotic, evil, good, and lawful spells_hunter",
"animal companion_hunter",
"animal focus_hunter",
"hunter animal focuses_hunter",
"nature training_hunter",
"wild empathy_hunter",
"precise companion_hunter",
"track_hunter",
"hunter tactics_hunter",
"teamwork feat_hunter",
"improved empathic link_hunter",
"woodland stride_hunter",
"bonus tricks_hunter",
"second animal focus_hunter",
"swift tracker_hunter",
"raise animal companion (sp)_hunter",
"speak with master_hunter",
"greater empathic link_hunter",
"one with the wild_hunter",
"master hunter_hunter",
"spells_inquisitor",
"domain_inquisitor",
"judgment_inquisitor",
"monster lore_inquisitor",
"orisons_inquisitor",
"stern gaze_inquisitor",
"cunning initiative_inquisitor",
"detect alignment (sp)_inquisitor",
"track_inquisitor",
"solo tactics_inquisitor",
"teamwork feat_inquisitor",
"bane_inquisitor",
"discern lies (sp)_inquisitor",
"second judgment_inquisitor",
"stalwart_inquisitor",
"greater bane_inquisitor",
"exploit weakness_inquisitor",
"third judgment_inquisitor",
"slayer_inquisitor",
"true judgment_inquisitor",
"chaotic, evil, good, and lawful spells_inquisitor",
"alchemy_investigator",
"inspiration_investigator",
"trapfinding_investigator",
"poison lore_investigator",
"poison resistance_investigator",
"investigator talent (ex or su)_investigator",
"investigator talents_investigator",
"keen recollection_investigator",
"trap sense_investigator",
"studied combat_investigator",
"studied strike_investigator",
"swift alchemy_investigator",
"true inspiration_investigator",
"elemental focus_kineticist",
"wild talents_kineticist",
"burn_kineticist",
"kinetic blast (sp)_kineticist",
"gather power_kineticist",
"infusion_kineticist",
"elemental defense_kineticist",
"elemental overflow_kineticist",
"infusion specialization_kineticist",
"metakinesis_kineticist",
"internal buffer_kineticist",
"expanded element_kineticist",
"supercharge_kineticist",
"composite specialization_kineticist",
"metakinetic master_kineticist",
"omnikinesis_kineticist",
"spells_magus",
"spellbooks_magus",
"arcane pool_magus",
"cantrips_magus",
"spell combat_magus",
"spellstrike_magus",
"magus arcana_magus",
"spell recall_magus",
"bonus feats_magus",
"knowledge pool_magus",
"medium armor_magus",
"improved spell combat_magus",
"fighter training_magus",
"improved spell recall_magus",
"heavy armor_magus",
"greater spell combat_magus",
"counterstrike_magus",
"greater spell access_magus",
"true magus_magus",
"spells_medium",
"knacks_medium",
"spirit_medium",
"spirit bonus_medium",
"spirit surge_medium",
"shared seance_medium",
"taboo_medium",
"haunt channeler_medium",
"location channel (sp)_medium",
"connection channel (sp)_medium",
"propitiation_medium",
"ask the spirits (sp)_medium",
"astral journey (sp)_medium",
"trance of three_medium",
"spacious soul_medium",
"spirit mastery_medium",
"astral beacon_medium",
"spells_mesmerist",
"consummate liar_mesmerist",
"hypnotic stare_mesmerist",
"knacks_mesmerist",
"mesmerist tricks_mesmerist",
"painful stare_mesmerist",
"towering ego_mesmerist",
"bold stare_mesmerist",
"touch treatment_mesmerist",
"manifold tricks_mesmerist",
"mental potency_mesmerist",
"glib lie_mesmerist",
"masterful tricks_mesmerist",
"rule minds_mesmerist",
"ac bonus_monk",
"flurry of blows_monk",
"unarmed strike_monk",
"bonus feat_monk",
"stunning fist_monk",
"evasion_monk",
"fast movement_monk",
"maneuver training_monk",
"still mind_monk",
"ki pool_monk",
"slow fall_monk",
"high jump_monk",
"purity of body_monk",
"wholeness of body_monk",
"improved evasion_monk",
"diamond body_monk",
"abundant step_monk",
"diamond soul_monk",
"quivering palm_monk",
"timeless body_monk",
"tongue of the sun and moon_monk",
"empty body_monk",
"perfect self_monk",
"ac bonus_monk (unchained)",
"bonus feat_monk (unchained)",
"flurry of blows_monk (unchained)",
"stunning fist_monk (unchained)",
"unarmed strike_monk (unchained)",
"evasion_monk (unchained)",
"fast movement_monk (unchained)",
"ki pool_monk (unchained)",
"ki powers_monk (unchained)",
"still mind_monk (unchained)",
"purity of body_monk (unchained)",
"style strike_monk (unchained)",
"improved evasion_monk (unchained)",
"tongue of the sun and moon_monk (unchained)",
"timeless body_monk (unchained)",
"flawless mind_monk (unchained)",
"perfect self_monk (unchained)",
"poison use_ninja",
"sneak attack_ninja",
"ki pool_ninja",
"ninja tricks_ninja",
"no trace_ninja",
"uncanny dodge_ninja",
"light steps_ninja",
"improved uncanny dodge_ninja",
"master tricks_ninja",
"hidden master_ninja",
"spells_occultist",
"focus powers_occultist",
"implements_occultist",
"knacks_occultist",
"mental focus_occultist",
"magic item skill_occultist",
"object reading_occultist",
"shift focus_occultist",
"aura sight_occultist",
"magic circles_occultist",
"outside contact_occultist",
"binding circles_occultist",
"fast circles_occultist",
"implement mastery_occultist",
"spells_oracle",
"mystery_oracle",
"oracle's curse_oracle",
"orisons_oracle",
"revelation_oracle",
"final revelation_oracle",
"aura of good_paladin",
"detect evil (sp)_paladin",
"smite evil_paladin",
"divine grace_paladin",
"lay on hands_paladin",
"aura of courage_paladin",
"divine health_paladin",
"mercy_paladin",
"channel positive energy_paladin",
"spells_paladin",
"divine bond (sp)_paladin",
"medium paladins_paladin",
"small paladins_paladin",
"aura of resolve_paladin",
"aura of justice_paladin",
"aura of faith_paladin",
"aura of righteousness_paladin",
"holy champion_paladin",
"code of conduct_paladin",
"associates_paladin",
"spells_psychic",
"knacks_psychic",
"phrenic pool_psychic",
"phrenic amplifications_psychic",
"psychic discipline (ex or sp)_psychic",
"detect thoughts (sp)_psychic",
"telepathic bond (sp)_psychic",
"major amplifications_psychic",
"telepathy_psychic",
"remade self (sp)_psychic",
"favored enemy_ranger",
"track_ranger",
"wild empathy_ranger",
"combat style feat_ranger",
"endurance_ranger",
"favored terrain_ranger",
"hunter's bond_ranger",
"spells_ranger",
"woodland stride_ranger",
"swift tracker_ranger",
"evasion_ranger",
"quarry_ranger",
"camouflage_ranger",
"improved evasion_ranger",
"hide in plain sight_ranger",
"improved quarry_ranger",
"master hunter_ranger",
"sneak attack_rogue",
"trapfinding_rogue",
"evasion_rogue",
"rogue talents_rogue",
"trap sense_rogue",
"uncanny dodge_rogue",
"improved uncanny dodge_rogue",
"advanced talents_rogue",
"master strike_rogue",
"sneak attack_rogue (unchained)",
"trapfinding_rogue (unchained)",
"finesse training_rogue (unchained)",
"evasion_rogue (unchained)",
"rogue talents_rogue (unchained)",
"danger sense_rogue (unchained)",
"debilitating injury_rogue (unchained)",
"uncanny dodge_rogue (unchained)",
"rogue's edge_rogue (unchained)",
"improved uncanny dodge_rogue (unchained)",
"advanced talents_rogue (unchained)",
"master strike_rogue (unchained)",
"challenge_samurai",
"mount_samurai",
"order_samurai",
"resolve_samurai",
"weapon expertise_samurai",
"mounted archer_samurai",
"banner_samurai",
"bonus feat_samurai",
"greater resolve_samurai",
"honorable stand_samurai",
"demanding challenge_samurai",
"greater banner_samurai",
"true resolve_samurai",
"last stand_samurai",
"spells_shaman",
"orisons_shaman",
"spirit_shaman",
"spirit animal_shaman",
"spirit magic_shaman",
"hex_shaman",
"shaman hexes_shaman",
"wandering spirit_shaman",
"wandering hex_shaman",
"manifestation_shaman",
"bonus languages_shifter",
"shifter aspect_shifter",
"shifter claws_shifter",
"wild empathy_shifter",
"defensive instinct_shifter",
"track_shifter",
"woodland stride_shifter",
"wild shape_shifter",
"trackless step_shifter",
"shifter's fury_shifter",
"chimeric aspect_shifter",
"greater chimeric aspect_shifter",
"a thousand faces_shifter",
"timeless body_shifter",
"final aspect_shifter",
"bat_shifter",
"bear_shifter",
"bull_shifter",
"boar_shifter",
"crocodile_shifter",
"dinosaur, deinonychus_shifter",
"dolphin/orca_shifter",
"dragon (dragonblood shifter archetype)_shifter",
"dragonfly_shifter",
"electric eel_shifter",
"falcon_shifter",
"fey (feyform shifter archetype)_shifter",
"frog_shifter",
"lizard_shifter",
"mantis_shifter",
"monkey_shifter",
"mouse_shifter",
"octopus_shifter",
"owl_shifter",
"scorpion_shifter",
"snake_shifter",
"spider_shifter",
"stag_shifter",
"swarm (swarm shifter archetype)_shifter",
"tiger_shifter",
"wolf_shifter",
"wolverine_shifter",
"bardic knowledge_skald",
"cantrips_skald",
"spells_skald",
"raging song_skald",
"scribe scroll_skald",
"versatile performance_skald",
"well-versed_skald",
"rage powers_skald",
"uncanny dodge_skald",
"spell kenning_skald",
"lore master_skald",
"improved uncanny dodge_skald",
"damage reduction_skald",
"master skald_skald",
"studied target_slayer",
"track_slayer",
"slayer talents_slayer",
"sneak attack_slayer",
"stalker_slayer",
"advanced talents_slayer",
"swift tracker_slayer",
"slayer's advance_slayer",
"quarry_slayer",
"improved quarry_slayer",
"master slayer_slayer",
"spells_sorcerer",
"bloodline_sorcerer",
"cantrips_sorcerer",
"eschew materials_sorcerer",
"spells_spiritualist",
"knacks_spiritualist",
"phantom_spiritualist",
"shared consciousness_spiritualist",
"etheric tether_spiritualist",
"bonded senses_spiritualist",
"bonded manifestation_spiritualist",
"spiritual interference (ex or su)_spiritualist",
"detect undead (sp)_spiritualist",
"phantom recall_spiritualist",
"calm spirit (sp)_spiritualist",
"see invisibility (sp)_spiritualist",
"fused consciousness_spiritualist",
"greater spiritual interference (ex or su)_spiritualist",
"spiritual bond_spiritualist",
"call spirit (sp)_spiritualist",
"dual bond_spiritualist",
"empowered consciousness_spiritualist",
"spells_summoner",
"cantrips_summoner",
"eidolon_summoner",
"life link_summoner",
"summon monster i (sp)_summoner",
"bond senses_summoner",
"shield ally_summoner",
"maker's call_summoner",
"transposition_summoner",
"aspect_summoner",
"greater shield ally_summoner",
"life bond_summoner",
"merge forms_summoner",
"greater aspect_summoner",
"twin eidolon_summoner",
"spells_summoner (unchained)",
"cantrips_summoner (unchained)",
"eidolon_summoner (unchained)",
"life link_summoner (unchained)",
"summon monster i (sp)_summoner (unchained)",
"bond senses_summoner (unchained)",
"shield ally_summoner (unchained)",
"maker's call_summoner (unchained)",
"transposition_summoner (unchained)",
"aspect_summoner (unchained)",
"greater shield ally_summoner (unchained)",
"life bond_summoner (unchained)",
"merge forms_summoner (unchained)",
"greater aspect_summoner (unchained)",
"twin eidolon_summoner (unchained)",
"panache_swashbuckler",
"deeds_swashbuckler",
"swashbuckler finesse_swashbuckler",
"charmed life_swashbuckler",
"nimble_swashbuckler",
"bonus feats_swashbuckler",
"swashbuckler weapon training_swashbuckler",
"swashbuckler weapon mastery_swashbuckler",
"dual identity_vigilante",
"seamless guise_vigilante",
"social talent_vigilante",
"vigilante specialization_vigilante",
"vigilante talent_vigilante",
"unshakable_vigilante",
"startling appearance_vigilante",
"frightening appearance_vigilante",
"stunning appearance_vigilante",
"vengeance strike_vigilante",
"spells_warpriest",
"aura_warpriest",
"blessings_warpriest",
"focus weapon_warpriest",
"orisons_warpriest",
"sacred weapon_warpriest",
"spontaneous casting_warpriest",
"chaotic, evil, good, and lawful spells_warpriest",
"bonus languages_warpriest",
"fervor_warpriest",
"bonus feats_warpriest",
"channel energy_warpriest",
"sacred armor_warpriest",
"aspect of war_warpriest",
"spells_witch",
"cantrips_witch",
"hex_witch",
"here_witch",
"witch's familiar_witch",
"patron spells_witch",
"major hex_witch",
"grand hex_witch",
"spells gained at a new level_witch",
"familiar teaching familiar_witch",
"learn from a scroll_witch",
"spells_wizard",
"bonus languages_wizard",
"arcane bond (ex or sp)_wizard",
"arcane school_wizard",
"cantrips_wizard",
"scribe scroll_wizard",
"bonus feats_wizard",
"spellbooks_wizard",
"maneuvers_harbinger",
"discipline exchanges_harbinger",
"surging shark_harbinger",
"unquiet grave_harbinger",
"maneuvers readied_harbinger",
"stances known_harbinger",
"dark claim (su)_harbinger",
"accursed will (ex)_harbinger",
"ill tidings (ex)_harbinger",
"dark focus (ex)_harbinger",
"grim news (su)_harbinger",
"massacre (ex)_harbinger",
"elusive shadow (ex)_harbinger",
"sorcerous deception (sp)_harbinger",
"ill intentions (su)_harbinger",
"black omen (su)_harbinger",
"bleak prophecy (su)_harbinger",
"dark murmur (su)_harbinger",
"rumors of war (ex)_harbinger",
"voices in the dark (ex)_harbinger",
"whispers of atrocity (su)_harbinger",
"maneuvers_mystic",
"discipline exchanges_mystic",
"surging shark_mystic",
"unquiet grave_mystic",
"maneuvers readied/granted_mystic",
"stances known_mystic",
"animus (su)_mystic",
"elemental attunement (su)_mystic",
"blade meditation (su)_mystic",
"bonus feat_mystic",
"arcane defense (ex)_mystic",
"elemental glyph (su)_mystic",
"mystic artifice (su)_mystic",
"withstand spell (su)_mystic",
"instant enlightenment (ex)_mystic",
"quell magic (su)_mystic",
"font of animus (su)_mystic",
"glyph mastery (su)_mystic",
"maneuvers_stalker",
"discipline exchanges_stalker",
"surging shark_stalker",
"unquiet grave_stalker",
"maneuvers readied_stalker",
"stances known_stalker",
"ki pool (su)_stalker",
"deadly strike (ex)_stalker",
"stalker arts_stalker",
"combat insight (su)_stalker",
"dodge bonus (ex)_stalker",
"blending (su)_stalker",
"dual strike (ex)_stalker",
"retributive ki (su)_stalker",
"maneuvers_warder",
"discipline exchanges_warder",
"surging shark_warder",
"brutal crocodile_warder",
"leaden hyena_warder",
"maneuvers readied_warder",
"stances known_warder",
"defensive focus (ex)_warder",
"aegis (ex)_warder",
"armiger's mark (ex)_warder",
"bonus feat_warder",
"tactical acumen (ex)_warder",
"extended defense (ex)_warder",
"clad in steel (ex)_warder",
"adaptive tactics (ex)_warder",
"stalwart (ex)_warder",
"steel defense (ex)_warder",
"born of steel (ex)_warder",
"deathless defenses (ex)_warder",
"maneuvers_warlord",
"discipline exchanges_warlord",
"surging shark_warlord",
"brutal crocodile_warlord",
"leaden hyena_warlord",
"unquiet grave_warlord",
"maneuvers readied_warlord",
"stances known_warlord",
"warlord's gambit (ex)_warlord",
"bonus feat_warlord",
"tactical presence (ex)_warlord",
"new tactical presences_warlord",
"warleader_warlord",
"force of personality (ex)_warlord",
"tactical flanker (ex)_warlord",
"battle prowess (ex)_warlord",
"dual boost (ex)_warlord",
"tactical assistance (ex)_warlord",
"dual tactical presence (ex)_warlord",
"improved warleader_warlord",
"warlord's presence (ex)_warlord",
"master warleader_warlord",
"dual stance (ex)_warlord",
"maneuvers_zealot",
"discipline exchanges_zealot",
"surging shark_zealot",
"leaden hyena_zealot",
"maneuvers readied_zealot",
"stances known_zealot",
"power points_zealot",
"collective (su)_zealot",
"compartmentalized aid (ex)_zealot",
"zeal (su)_zealot",
"burning contemplation (ex)_zealot",
"conviction_zealot",
"martyrdom (su)_zealot",
"commitment (su)_zealot",
"telepathy (su)_zealot",
"echoes of steel (su)_zealot",
"mission (su)_zealot",
"zealot active energy types_zealot",
"defiance (su)_zealot",
"unshakable will (su)_zealot",
"stalwart (su)_zealot",
"metaphysical transcendence (su)_zealot"

  ];

  var _all_languagesObject = null;
  var _all_languagesName = [
    "Abyssal", "Aklo", "Aquan", "Auran", "Celestial", "Common", "Draconic", "Druidic", "Dwarven", "Drow Sign Lanugage", "Elven", "Giant", "Gnome", "Goblin", "Gnoll", "Halfling", "Ignan", "Infernal", "Orc", "Sylvan", "Terran", "Undercommon"
  ];

  function get(options) {
    var defaultOptions = {
      type: null,
      all: null,
      name: null,
      index: null,
      full: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var results = [];

    var _checkForName = function() {
      if (defaultOptions.type == "spells") {
        _all_spellsName.forEach(function(arrayItem, index) {
          if (arrayItem.toLowerCase().includes(defaultOptions.name.toLowerCase())) {
            results.push({
              index: index,
              description: _all_spellsObject[index].description.short,
              school: _all_spellsObject[index].school.base,
              name: arrayItem
            });
          };
        });
      } else if (defaultOptions.type == "feats") {
        _all_featsName.forEach(function(arrayItem, index) {
          if (arrayItem.toLowerCase().includes(defaultOptions.name.toLowerCase())) {
            results.push({
              index: index,
              type: _all_featsObject[index].type.string,
              name: arrayItem
            });
          };
        });
      } else if (defaultOptions.type == "traits") {
        _all_traitsName.forEach(function(arrayItem, index) {
          if (arrayItem.toLowerCase().includes(defaultOptions.name.toLowerCase())) {
            results.push({
              index: index,
              type: _all_traitsObject[index].type,
              name: arrayItem
            });
          };
        });
      } else if (defaultOptions.type == "languages") {
        _all_languagesName.forEach(function(arrayItem, index) {
          if (arrayItem.toLowerCase().includes(defaultOptions.name.toLowerCase())) {
            results.push({
              index: index,
              race: _all_languagesObject[index].race,
              name: arrayItem
            });
          }
        });
      } else if (defaultOptions.type == "abilities") {
        _all_abilitiesName.forEach(function(arrayItem, index) {
          if (arrayItem.toLowerCase().includes(defaultOptions.name.toLowerCase())) {
            results.push({
              index: index,
              description: _all_abilitiesObject[index].description,
              name: arrayItem
            });
          }
        });
      }
    };
    

    // if type is defined
    if (defaultOptions.type != null) {
      // if name or index or all is asked for
      if (defaultOptions.name != null || defaultOptions.index != null || defaultOptions.all != null) {

        // if name is given
        if (defaultOptions.name != null) {
          // look for matches to name
          _checkForName();
          // if results found
          if (results.length > 0) {
            // if full object is asked for
            if (defaultOptions.full != null) {
              return _get_object({
                type: defaultOptions.type,
                array: results
              });
            } else {
              // or return array of matching names
              return results;
            };
          } else {
            // or return false
            return false;
          };
          // if index is given
        } else if (defaultOptions.index != null) {
          // return exact object
          return _get_object({
            type: defaultOptions.type,
            index: defaultOptions.index
          });
          // if all is given
        } else if (defaultOptions.all != null) {
          if (defaultOptions.type == "spells") {
            // return all sells
            return _all_spellsObject;
          } else if (defaultOptions.type == "feats") {
            // return all feats
            return _all_featsObject;
          } else if (defaultOptions.type == "traits") {
            // return all traits
            return _all_traitsObject;
          } else if (defaultOptions.type == "languages") {
            // return all languages
            return _all_languagesObject;
          } else if (defaultOptions.type == "abilities") {
            // return all abilities
            return _all_abilitiesObject;          
          };
        };

      } else {
        return false;
      };
    } else {
      return false;
    };

  };

  function _get_object(options) {
    var defaultOptions = {
      type: null,
      array: null,
      index: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.array != null) {
      if (defaultOptions.type == "spells") {
        var results = [];
        defaultOptions.array.forEach(function(arrayItem) {
          results.push(_all_spellsObject[arrayItem.index]);
        });
        return results;
      } else if (defaultOptions.type == "feats") {
        var results = [];
        defaultOptions.array.forEach(function(arrayItem) {
          results.push(_all_featsObject[arrayItem.index]);
        });
        return results;
      } else if (defaultOptions.type == "traits") {
        var results = [];
        defaultOptions.array.forEach(function(arrayItem) {
          results.push(_all_traitsObject[arrayItem.index]);
        });
        return results;
      } else if (defaultOptions.type == "languages") {
        var results = [];
        defaultOptions.array.forEach(function(arrayItem) {
          results.push(_all_languagesObject[arrayItem.index]);
        });
        return results;
      } else if (defaultOptions.type == "abilities") {
        var results = [];
        defaultOptions.array.forEach(function(arrayItem) {
          results.push(_all_abilitiesObject[arrayItem.index]);
        });
        return results;        
      } else {
        return false;
      };
    } else if (defaultOptions.index != null) {
      if (defaultOptions.type == "spells") {
        return _all_spellsObject[defaultOptions.index];
      } else if (defaultOptions.type == "feats") {
        return _all_featsObject[defaultOptions.index];
      } else if (defaultOptions.type == "traits") {
        return _all_traitsObject[defaultOptions.index];
      } else if (defaultOptions.type == "languages") {
        return _all_languagesObject[defaultOptions.index];
      } else if (defaultOptions.type == "abilities") {
        return _all_abilitiesObject[defaultOptions.index];        
      } else {
        return false;
      };
    } else {
      return false;
    };
  };

  function _orginiseSpellsObject(object) {
    // school
    var tempSchool = {};
    tempSchool.base = object.school;
    tempSchool.subschool = object.subschool;
    // add
    object.school = tempSchool;
    // remove
    delete object.subschool;

    // descriptors
    var tempDescriptor = {};
    tempDescriptor.acid = Boolean(Number(object.acid));
    tempDescriptor.air = Boolean(Number(object.air));
    tempDescriptor.chaotic = Boolean(Number(object.chaotic));
    tempDescriptor.cold = Boolean(Number(object.cold));
    tempDescriptor.curse = Boolean(Number(object.curse));
    tempDescriptor.darkness = Boolean(Number(object.darkness));
    tempDescriptor.death = Boolean(Number(object.death));
    tempDescriptor.disease = Boolean(Number(object.disease));
    tempDescriptor.earth = Boolean(Number(object.earth));
    tempDescriptor.electricity = Boolean(Number(object.electricity));
    tempDescriptor.emotion = Boolean(Number(object.emotion));
    tempDescriptor.evil = Boolean(Number(object.evil));
    tempDescriptor.fear = Boolean(Number(object.fear));
    tempDescriptor.fire = Boolean(Number(object.fire));
    tempDescriptor.force = Boolean(Number(object.force));
    tempDescriptor.good = Boolean(Number(object.good));
    tempDescriptor.language_dependent = Boolean(Number(object.language_dependent));
    tempDescriptor.lawful = Boolean(Number(object.lawful));
    tempDescriptor.light = Boolean(Number(object.light));
    tempDescriptor.mind_affecting = Boolean(Number(object.mind_affecting));
    tempDescriptor.pain = Boolean(Number(object.pain));
    tempDescriptor.poison = Boolean(Number(object.poison));
    tempDescriptor.shadow = Boolean(Number(object.shadow));
    tempDescriptor.sonic = Boolean(Number(object.sonic));
    tempDescriptor.water = Boolean(Number(object.water));
    tempDescriptor.ruse = Boolean(Number(object.ruse));
    tempDescriptor.meditative = Boolean(Number(object.meditative));
    tempDescriptor.string = object.descriptor;
    // add
    object.descriptor = tempDescriptor;
    // remove
    delete object.acid;
    delete object.air;
    delete object.chaotic;
    delete object.cold;
    delete object.curse;
    delete object.darkness;
    delete object.death;
    delete object.disease;
    delete object.earth;
    delete object.electricity;
    delete object.emotion;
    delete object.evil;
    delete object.fear;
    delete object.fire;
    delete object.force;
    delete object.good;
    delete object.language_dependent;
    delete object.lawful;
    delete object.light;
    delete object.mind_affecting;
    delete object.pain;
    delete object.poison;
    delete object.shadow;
    delete object.sonic;
    delete object.water;
    delete object.ruse;
    delete object.meditative;

    // description
    var tempDescription = {};
    tempDescription.effect = object.effect;
    tempDescription.short = object.short_description;
    tempDescription.plain = object.description;
    tempDescription.formated = object.description_formated;
    // add
    object.description = tempDescription;
    // remove
    delete object.effect;
    delete object.description_formated;
    delete object.short_description;

    // mythic
    var tempMythic = {};
    tempMythic.mythic = Boolean(Number(object.mythic));
    tempMythic.text = object.mythic_text;
    tempMythic.augmented = object.augmented;
    // add
    object.mythic = tempMythic;
    // remove
    delete object.mythic_text;
    delete object.augmented;

    // level
    var tempLevel = {};
    tempLevel.sla = object.SLA_Level;
    tempLevel.sorcerer = object.sorcerer;
    tempLevel.wizard = object.wizard;
    tempLevel.cleric = object.cleric;
    tempLevel.druid = object.druid;
    tempLevel.ranger = object.ranger;
    tempLevel.bard = object.bard;
    tempLevel.paladin = object.paladin;
    tempLevel.alchemist = object.alchemist;
    tempLevel.summoner = object.summoner;
    tempLevel.witch = object.witch;
    tempLevel.inquisitor = object.inquisitor;
    tempLevel.oracle = object.oracle;
    tempLevel.antipaladin = object.antipaladin;
    tempLevel.magus = object.magus;
    tempLevel.adept = object.adept;
    tempLevel.bloodrager = object.bloodrager;
    tempLevel.shaman = object.shaman;
    tempLevel.psychic = object.psychic;
    tempLevel.medium = object.medium;
    tempLevel.mesmerist = object.mesmerist;
    tempLevel.occultist = object.occultist;
    tempLevel.spiritualist = object.spiritualist;
    tempLevel.skald = object.skald;
    tempLevel.investigator = object.investigator;
    tempLevel.hunter = object.hunter;
    for (var key in tempLevel) {
      if (!isNaN(parseInt(tempLevel[key], 10))) {
        tempLevel[key] = parseInt(tempLevel[key], 10);
      } else {
        tempLevel[key] = null;
      };
    };
    tempLevel.string = object.spell_level;
    // add
    object.level = tempLevel;
    // remove
    delete object.spell_level;
    delete object.SLA_Level;
    delete object.sorcerer;
    delete object.wizard;
    delete object.cleric;
    delete object.druid;
    delete object.ranger;
    delete object.bard;
    delete object.paladin;
    delete object.alchemist;
    delete object.summoner;
    delete object.witch;
    delete object.inquisitor;
    delete object.oracle;
    delete object.antipaladin;
    delete object.magus;
    delete object.adept;
    delete object.bloodrager;
    delete object.shaman;
    delete object.psychic;
    delete object.medium;
    delete object.mesmerist;
    delete object.occultist;
    delete object.spiritualist;
    delete object.skald;
    delete object.investigator;
    delete object.hunter;

    // components
    var tempComponents = {};
    tempComponents.verbal = Boolean(Number(object.verbal));
    tempComponents.somatic = Boolean(Number(object.somatic));
    tempComponents.material = Boolean(Number(object.material));
    tempComponents.focus = Boolean(Number(object.focus));
    tempComponents.divine_focus = Boolean(Number(object.divine_focus));
    tempComponents.costly = Boolean(Number(object.costly_components));
    if (object.material_costs != "NULL") {
      tempComponents.cost = parseInt(object.material_costs, 10);
    } else {
      tempComponents.cost = 0;
    };
    tempComponents.string = object.components;
    // add
    object.components = tempComponents
    // remove
    delete object.verbal;
    delete object.somatic;
    delete object.material;
    delete object.focus;
    delete object.divine_focus;
    delete object.costly_components;
    delete object.material_costs;

    // casting
    var tempCasting = {};
    tempCasting.dismissible = Boolean(Number(object.dismissible));
    tempCasting.shapeable = Boolean(Number(object.shapeable));
    tempCasting.saving = object.saving_throw;
    tempCasting.spell_resistence = object.spell_resistence;
    tempCasting.targets = object.targets;
    tempCasting.time = object.casting_time;
    tempCasting.range = object.range;
    tempCasting.area = object.area;
    tempCasting.duration = object.duration;
    // add
    object.casting = tempCasting
    // remove
    delete object.spell_resistence;
    delete object.targets;
    delete object.shapeable;
    delete object.dismissible;
    delete object.saving_throw;
    delete object.casting_time;
    delete object.range;
    delete object.area;
    delete object.duration;

    // groups
    var tempGroups = {};
    tempGroups.domain = object.domain;
    tempGroups.patron = object.patron;
    tempGroups.bloodline = object.bloodline;
    // add
    object.groups = tempGroups
    // remove
    delete object.domain;
    delete object.patron;
    delete object.bloodline;
  };

  function _orginiseFeatsObject(object) {
    // description
    var tempDescription = {};
    tempDescription.base = object.description;
    tempDescription.normal = object.normal;
    tempDescription.special = object.special;
    tempDescription.note = object.note;
    tempDescription.benefit = object.benefit;
    tempDescription.goal = object.goal;
    tempDescription.completion = object.completion_benefit;
    tempDescription.suggested_traits = object.suggested_traits;
    // add
    object.description = tempDescription;
    // remove
    delete object.normal;
    delete object.benefit;
    delete object.special;
    delete object.note;
    delete object.goal;
    delete object.completion_benefit;
    delete object.suggested_traits;
    // type
    var tempType = {};
    tempType.string = object.type;
    tempType.companion_familiar = Boolean(Number(object.companion_familiar));
    tempType.critical = Boolean(Number(object.critical));
    tempType.grit = Boolean(Number(object.grit));
    tempType.multiples = Boolean(Number(object.multiples));
    tempType.performance = Boolean(Number(object.performance));
    tempType.style = Boolean(Number(object.style));
    tempType.teamwork = Boolean(Number(object.teamwork));
    tempType.racial = {};
    tempType.racial.name = object.race_name;
    tempType.racial.base = Boolean(Number(object.racial));
    // add
    object.type = tempType;
    // remove
    delete object.companion_familiar;
    delete object.critical;
    delete object.grit;
    delete object.multiples;
    delete object.performance;
    delete object.racial;
    delete object.race_name;
    delete object.style;
    delete object.teamwork;

    // prerequisites
    var tempPrerequisites = {};
    tempPrerequisites.string = object.prerequisites;
    tempPrerequisites.feats = object.prerequisite_feats;
    // add
    object.prerequisites = tempPrerequisites;
    // remove
    delete object.prerequisite_feats;

    // console.log(object);
  };

  function _orginiseTraitsObject(object) {
    // description
    var tempDescription = {};
    tempDescription.base = object.description;
    tempDescription.list = object.description_list;
    // add
    object.description = tempDescription;
    // remove
    delete object.description_list;
    // description
    var tempRequirement = {};
    tempRequirement.alignment = object.requirement_alignment;
    tempRequirement.class = object.requirement_class;
    tempRequirement.faith = object.requirement_faith;
    tempRequirement.other = object.requirement_other;
    tempRequirement.place = object.requirement_place;
    tempRequirement.race = object.requirement_race;
    tempRequirement.subrace = object.requirement_subrace;
    // add
    object.requirement = tempRequirement;
    // remove
    delete object.requirement_alignment
    delete object.requirement_class
    delete object.requirement_faith
    delete object.requirement_other
    delete object.requirement_place
    delete object.requirement_race
    delete object.requirement_subrace
  };

  function load() {
    var _get_data = function(data, type) {
      if (type == "spells") {
        _all_spellsObject = helper.csvToJSON(data);
        _all_spellsObject.forEach(function(arrayItem, index) {
          _orginiseSpellsObject(arrayItem);
          arrayItem.index = index;
        });
        // console.log(_all_spellsObject);
      } else if (type == "feats") {
        _all_featsObject = helper.csvToJSON(data);
        _all_featsObject.forEach(function(arrayItem, index) {
          _orginiseFeatsObject(arrayItem);
          arrayItem.index = index;
        });
        // console.log(_all_featsObject);
      } else if (type == "traits") {
        _all_traitsObject = helper.csvToJSON(data);
        _all_traitsObject.forEach(function(arrayItem, index) {
          _orginiseTraitsObject(arrayItem);
          arrayItem.index = index;
        });
        // console.log(_all_traitsObject);
      } else if (type == "languages") {
        _all_languagesObject = helper.csvToJSON(data);
        _all_languagesObject.forEach(function(arrayItem, index) {
          arrayItem.index = index;
        });
      } else if (type == "abilities") {
        _all_abilitiesObject = helper.csvToJSON(data);
        _all_abilitiesObject.forEach(function(arrayItem, index) {
          // _orginiseabilitiesObject(arrayItem);
          arrayItem.index = index;
        });        
        // console.log("this is your all_abilitiesObject", _all_abilitiesObject);
        // console.log("this is your all_languagesObject", _all_languagesObject);
        // console.log("this is your all_traitsObject",  _all_traitsObject);        
      };
    };
    helper.loadCsv("db/spells.csv", function(data) {
      _get_data(data, "spells");
      // console.log("Spells data loaded:", data);
    });
    
    helper.loadCsv("db/feats.csv", function(data) {
      _get_data(data, "feats");
      // console.log("Feats data loaded:", data);
    });
    
    helper.loadCsv("db/traits.csv", function(data) {
      _get_data(data, "traits");
      // console.log("Traits data loaded:", data);
    });
    
    helper.loadCsv("db/languages.csv", function(data) {
      _get_data(data, "languages");
      // console.log("Languages data loaded:", data);
    });
    
    helper.loadCsv("db/abilities.csv", function(data) {
      _get_data(data, "abilities");
      // console.log("Abilities data loaded:", data);
    });
     
  };

  // exposed methods
  return {
    load: load,
    get: get
  };

})();