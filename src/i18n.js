/* i18n.js — English / Traditional Chinese */

const TRANSLATIONS = {
  en: {
    /* ── Nav ─────────────────────────────── */
    'nav.about':            'About Me',
    'nav.belgrade':         'Belgrade',
    'nav.berlin':           'Berlin',
    'nav.london':           'London',
    'nav.chisinau':         'Chișinău',
    'nav.bucharest':        'Bucharest',
    'nav.tiraspol':         'Transnistria',
    'nav.poland':           'Poland',
    'nav.support':          'Support',
    'nav.contact':          'Contact',
    'nav.region.western':   'Western Europe',
    'nav.region.balkans':   'Balkans',
    'nav.region.central':   'Central Europe',
    'nav.region.eastern':   'Eastern Europe',

    /* ── Back links ──────────────────────── */
    'back.belgrade':  '← Belgrade Buildings',
    'back.berlin':    '← Berlin Locations',
    'back.london':    '← London Buildings',
    'back.chisinau':  '← Chișinău Buildings',
    'back.bucharest': '← Bucharest Buildings',
    'back.tiraspol':  '← Transnistria Sites',
    'back.poland':    '← Poland Sites',

    /* ── Section headings ────────────────── */
    'section.gallery':   'Gallery',
    'section.video':     'Video',
    'section.cities':    'Cities',
    'section.buildings': 'Buildings',

    /* ── Meta labels ─────────────────────── */
    'meta.architect':  'Architect',
    'meta.architects': 'Architects',
    'meta.completed':  'Completed',
    'meta.function':   'Function',
    'meta.location':   'Location',
    'meta.style':      'Style',
    'meta.photos':     'Photos',
    'meta.period':     'Period',
    'meta.context':    'Context',
    'meta.type':       'Type',
    'meta.active':     'Active',

    /* ── Index / hero ────────────────────── */
    'home.hero.label':           'A photography project',
    'home.hero.sub':             'HWC Travel · Brutalism · Socialist Modernism · Belgrade · Berlin · London · Chișinău · Bucharest · Tiraspol · Poland',
    'home.next.label':           'Next journeys',
    'home.next.cta':             'Support the next trip →',
    'home.city.belgrade.sub':    'Serbia',
    'home.city.berlin.sub':      'Germany',
    'home.city.london.sub':      'United Kingdom',
    'home.city.chisinau.sub':    'Moldova',
    'home.city.bucharest.sub':   'Romania',
    'home.city.tiraspol.sub':    'Transnistria',

    /* ── City pages ──────────────────────── */
    'belgrade.hero.label':   'Serbia · Socialist Yugoslavia',
    'belgrade.hero.sub':     'Brutalist Architecture · 1960–1985',
    'berlin.hero.label':     'Germany · DDR Modernism & Cold War',
    'berlin.hero.sub':       'Socialist Architecture · 1950–1990 · East & West',
    'london.hero.label':     'United Kingdom · British Brutalism',
    'london.hero.sub':       'Brutalist Architecture · 1950–1980',
    'chisinau.hero.label':   'Moldova · Soviet Modernism',
    'chisinau.hero.sub':     'Socialist Architecture · 1950–1990',
    'bucharest.hero.label':  'Romania · Ceaușescu-Era Modernism',
    'bucharest.hero.sub':    'Socialist Architecture · 1950–1989',
    'tiraspol.hero.label':   'Transnistria · The Last Soviet State',
    'tiraspol.hero.sub':     'Soviet Architecture · Frozen in Time',
    'poland.hero.label':     'Poland · Warsaw & Wroclaw',
    'poland.hero.sub':       'Brutalism & Communist-era Architecture · 1950–1989',

    /* ── Index / home city sub-labels ─────── */
    'home.city.poland.sub':  'Poland',

    /* ── About ───────────────────────────── */
    'about.label':          'About Me',
    'about.title':          'Documenting<br>Concrete<br>Utopias',
    'about.p1':             'A Chinese-speaking travel content creator based in the UK. Long-focused on Eastern Europe, the Balkans, the former Yugoslav territories, Soviet architecture, brutalism, urban culture, and historical spaces.',
    'about.p2':             'Using images and words to document the places that don\'t get much attention — but hold enormous power. If you also love architecture, urban wandering, history, and off-the-beaten-path travel, follow along.',
    'about.p3':             'All photographs are shot on an iPhone. The imperfect optics, the flat overcast light, the rain — these are features, not bugs. Brutalism was always at its best under grey skies.',
    'about.stat.buildings': 'Buildings',
    'about.stat.cities':    'Cities',
    'about.stat.countries': 'Countries',
    'about.supportLink':    'Support my work →',

    /* ── Support ─────────────────────────── */
    'support.label':    'Support My Work',
    'support.title':    'FUEL<br>THE NEXT<br>JOURNEY',
    'support.p1':       'This project is entirely self-funded. Every building here was reached on foot, by train, or by bus — photographed with an iPhone and edited late at night in hotel rooms. There are no agencies, no press trips, no sponsors. Just a curiosity about the places most people skip.',
    'support.p2':       'If you find value in this work — whether as a fellow architecture enthusiast, a traveller, or someone who just likes looking at brutalist concrete — you can support the next trip. Every contribution goes directly toward travel costs: trains, accommodation, and more time in cities worth documenting.',
    'support.p3':       '<strong>Next destinations being planned:</strong> Skopje, Sarajevo, Prishtina, Sofia. More Yugoslav modernism. More forgotten landmarks. More photographs.',
    'support.opt1.label': 'Ko-fi',
    'support.opt1.text':  'A one-time or recurring contribution via Ko-fi. No account needed — any amount helps.',
    'support.opt1.btn':   'Buy me a coffee →',
    'support.opt2.label': 'Instagram',
    'support.opt2.text':  'Follow and share the work. Visibility costs nothing and helps more people find these places.',
    'support.opt3.label': 'TikTok',
    'support.opt3.text':  'Short-form urban exploration and architecture — follow for video from the same journeys.',
    'support.opt4.label': 'Email',
    'support.opt4.text':  'For collaboration, licensing, or anything else — get in touch directly.',
    'support.opt4.btn':   'Get in touch →',

    /* ── Belgrade building descriptions ─── */
    'belgrade.genex.desc': '<p>The Genex Tower — formally the Western City Gate of Belgrade — is one of the most striking pieces of late Yugoslav architecture and the defining landmark of New Belgrade\'s skyline. Designed by Mihajlo Mitrović and completed in 1980, the building consists of two unequal residential and hotel towers joined at the top by a revolving restaurant, forming a colossal gateway arch visible from kilometers away.</p><p>The structural logic is raw and legible: the connecting bridge between the two towers carries the load and creates the drama. New Belgrade itself is the context — a vast socialist planned city of concrete blocks built on reclaimed marshland after World War II, intended to embody the new Yugoslavia. The Genex Tower was its most monumental gesture: not just a building but a threshold, a statement that you were entering something designed from scratch with maximum ambition.</p>',

    'belgrade.muskatirovic.desc': '<p>The Milan Muškatirović Sports Centre is a compact yet powerful piece of Yugoslav modernism — a swimming and sports complex in central Belgrade whose exposed concrete structure and angular massing place it firmly within the brutalist tradition of the 1970s. The building\'s exterior presents raw concrete volumes with deep-set openings, the geometry of the roof and the envelope speaking to the functional logic within.</p><p>Named after a Yugoslav sporting figure, the centre represents the socialist state\'s investment in public sport and physical culture. These facilities were built across Yugoslavia\'s cities as expressions of civic health and collectivity — publicly funded, accessible by design, material in their honesty. The weathering of the concrete over five decades has only deepened its character.</p>',

    'belgrade.toblerone.desc': '<p>The Karaburma Residential Housing block — popularly known as the Toblerone Building for its distinctive triangular cross-section — is one of the most formally inventive pieces of Yugoslav mass housing. The angled profile of the facade creates a serrated silhouette that reads as a continuous mountain ridge when viewed from the street, each unit\'s balcony stepping in a diagonal rhythm across the full length of the building.</p><p>The nickname reflects the affection Belgraders have for their socialist-era architecture — names that humanise the monumental, that claim the concrete as local rather than abstract. Built in the residential district of Karaburma during the height of Yugoslav housing construction, the building represents the moment when socialist urbanism pushed beyond mere functionality toward genuine formal ambition.</p>',

    'belgrade.eastern.desc': '<p>The Eastern City Gates (Istočna kapija Beograda) is a pair of residential skyscrapers flanking the E75 motorway as it enters Belgrade from the east — forming a literal gateway to the city. Designed by Mihajlo Mitrović and completed in 1977, the two towers rise 26 floors each, their facades articulated with a bold horizontal banding of concrete and glazing that creates a rhythmic texture visible from the highway.</p><p>The concept of the city gate — a monumental threshold marking the entry into urban territory — is as old as the city itself. What Mitrović understood was that the motorway was the new approach, the new processional route into Belgrade, and that architecture could still respond to that procession with ambition. The towers are both sign and symbol: they tell you that you have arrived somewhere that took its own presence seriously.</p>',

    'belgrade.block2223.desc': '<p>Blocks 22 and 23 are part of the vast residential grid of New Belgrade — the socialist planned city built on reclaimed marshland across the Sava River from old Belgrade. The "blocks" are not individual buildings but urban units: entire neighbourhoods defined by number, each containing apartment towers, green space, schools, and commercial ground floors arranged according to the modernist planning principles of the time.</p><p>New Belgrade was conceived as a tabula rasa, an opportunity to build the new socialist city from scratch without the constraints of inherited urban fabric. The results were extraordinary in their ambition and contradictory in their outcomes: vast open spaces between towers that were meant to be democratic parkland but often became difficult voids, and a scale of concrete repetition that was simultaneously impressive and alienating. Walking through the blocks today is to inhabit the residue of a particular ideological moment — one that took density and equality seriously, even if it did not always achieve them.</p>',

    'belgrade.block6263.desc': '<p>Blocks 62 and 63 sit in the southern section of New Belgrade, part of the same numbered-grid urbanism that defines the entire district. Like their counterparts throughout New Belgrade, these blocks house thousands of residents in a landscape of open green space and concrete towers that simultaneously promises and withholds the city.</p><p>What makes New Belgrade\'s blocks worth looking at is not any individual building but the aggregate: the repetition, the scale, the logic of the plan made visible. The number system is itself a kind of architecture — an administrative naming that strips away neighbourhood identity in favour of coordinate logic. That so many Belgraders identify strongly with their block, that "where are you from?" often means "which block?", suggests that identity survives and adapts even within the most rationalist of built environments.</p>',

    'belgrade.palace.desc': '<p>The Palace of Serbia in New Belgrade is one of the most important state buildings of postwar Yugoslavia — a massive governmental complex housing federal ministries and state organs, built on the emerging territory of New Belgrade at the moment when that city was being invented. Completed in 1961, the building sits at the junction of several major axes in the New Belgrade grid, commanding the surrounding flat landscape with a horizontal mass of stone and glass.</p><p>The architecture sits at the intersection of socialist classicism and early modernism: the scale and symmetry of the former, the materials and fenestration of the latter. It is a building that needed to project authority and permanence, and it does so — the stone cladding, the long horizontal lines, the monumental proportions all speak of a state that had decided to build for centuries. The Yugoslavia that commissioned it is gone; the building remains.</p>',

    'belgrade.siv3.desc': '<p>SIV 3 — the third building of the Savezno Izvršno Veće (Federal Executive Council) complex — is one of the most formally compelling administrative buildings in New Belgrade. A long, raised slab lifted on pilotis above an open ground floor, it presents a continuous horizontal facade of prefabricated concrete panels and deep-set windows that reads as a single unbroken surface of grey.</p><p>The Federal Executive Council buildings were the operational heart of socialist Yugoslavia\'s government — the buildings from which the country was administered. SIV 3\'s architecture embodies the technocratic confidence of Yugoslav self-management: rational, ordered, clean. The pilotis raise it from the ground in a gesture that owes everything to Le Corbusier but has absorbed it completely into a local idiom. Today the building houses various ministries of the Republic of Serbia, its purpose changed but its presence unchanged.</p>',

    'belgrade.cityhall.desc': '<p>The New Belgrade City Hall (Skupština opštine Novi Beograd) is the municipal administrative centre for the New Belgrade district — a compact modernist building that anchors local government within the largely residential urban fabric of this planned city. Its architecture is characteristic of the Yugoslav municipal buildings of the 1970s: concrete, direct, and scaled to function rather than grandeur.</p><p>New Belgrade was always a city within a city, administratively distinct from old Belgrade across the Sava. The city hall gave it a civic focal point — a place where the abstraction of the numbered-block grid could be translated into local government and community life. The building\'s modesty relative to the scale of the district it serves reflects the Yugoslav ideal of decentralised administration: governance close to the people, in buildings that do not overawe.</p>',

    'belgrade.sava.desc': '<p>The Sava Centre is one of Belgrade\'s premier congress and cultural facilities — a large-scale modernist complex on the Sava riverfront in New Belgrade that was built to host international conferences, exhibitions, and performances at a moment when Yugoslavia was a significant player in the Non-Aligned Movement and hosted major international events.</p><p>Designed by Stojan Maksimović and completed in 1979, the building combines a congress hall, hotel, and cultural spaces within a single massed structure on the riverside. The architecture is characteristically Yugoslav in its ambitions: large, confident, technically sophisticated, and entirely free of the ideological timidity that constrained architecture in Warsaw Pact countries. Yugoslavia\'s non-alignment gave its architects the freedom to borrow from anywhere, and the Sava Centre shows it — this could be a building from almost any confident modernist tradition of the period.</p>',

    'belgrade.urban.desc': '<p>The Urban Planning Institute of Belgrade (Urbanistički zavod Beograda) is the institution that planned New Belgrade — a recursive situation in which the building that housed the planners of a city sits within the city they planned. The institute\'s own building, a modernist slab in the New Belgrade fabric, is an administrative companion to the grand visions its occupants drew on paper.</p><p>Yugoslav urban planning was a serious discipline, supported by the state and given genuine resources. The institutes designed not just individual buildings but entire districts, cities-from-scratch, the infrastructure of a planned economy. Their architecture reflected their function: orderly, systematic, rational. The Urban Institute Belgrade is itself a product of the planning culture it represents — modest in scale, rigorous in construction, unmistakably of its time.</p>',

    /* ── Berlin building descriptions ────── */
    'berlin.alex.desc': '<p>Alexanderplatz was the socialist showcase of East Berlin — the DDR\'s answer to the question of what the modern socialist city should look like. The vast open square, surrounded by towers of prefabricated concrete panels, was rebuilt after wartime destruction according to the principles of socialist modernism: wide pedestrian space, vertical accents, a scale designed to speak of collective ambition rather than individual experience.</p><p>The Fernsehturm (TV Tower), completed in 1969, rises 368 metres above the square and remains the tallest structure in Germany. Built by the East German state as a symbol of socialist technological achievement, it was intended to be visible from West Berlin — a provocation and a statement. Around it, Haus des Lehrers (the Teachers\' House, designed by Hermann Henselmann) with its wraparound frieze, Haus des Reisens (the Travellers\' House), and the World Time Clock create a coherent ensemble of DDR civic ambition. Walking through Alexanderplatz today is to walk through the residue of a state that no longer exists but left its mark in concrete.</p>',

    'berlin.cafemoskau.desc': '<p>Café Moskau on Karl-Marx-Allee is one of the finest surviving examples of DDR modernism — a purpose-built restaurant and cultural space that opened in 1964 as a symbol of Soviet-East German friendship and socialist internationalism. Designed by Josef Kaiser, the building\'s distinctive low horizontal massing, the deep roof canopy, and the monumental globe on its facade make it immediately recognisable: a building that understood its role as backdrop to socialist street life and played it fully.</p><p>Karl-Marx-Allee itself was the showpiece boulevard of East Berlin — a monumental axis lined first with Stalinist wedding-cake architecture and then, further east, with the modernist social housing blocks of the late DDR period. Café Moskau anchored its section of the street as a gathering point, a place of collective consumption and public culture. It was always for showing as much as for eating. Now a club and event space, it occupies its history with characteristic East German seriousness.</p>',

    'berlin.jewishmuseum.desc': '<p>The Jewish Museum Berlin, designed by Daniel Libeskind and completed in 1999, is one of the most charged pieces of architecture built in the twentieth century\'s final decade. The building\'s zinc-clad exterior is a jagged, lightning-bolt form of slashed windows and acute angles — a plan derived, according to Libeskind, from a deformed Star of David and from addresses of Berlin Jews who were killed or forced to emigrate. The exterior gives nothing away easily. It demands that you look at it differently from every angle.</p><p>Inside, the Voids — empty spaces of raw concrete that cut through the building from basement to roof but cannot be entered — are the most powerful architectural device. They represent what cannot be exhibited, what cannot be replaced, what was destroyed. The Garden of Exile, the Holocaust Tower, the tilted floors of the axes: the building uses architecture to produce disorientation, incompleteness, the sensation of a history that cannot be fully accommodated. It is a building that understands what museums are for and pushes that understanding to its limit.</p>',

    'berlin.wallmemorial.desc': '<p>The Window of Remembrance (Fenster des Gedenkens) at the Berlin Wall Memorial on Bernauer Strasse is a steel installation in which portrait photographs of people killed attempting to cross the Berlin Wall are set into panels, each face visible through a rust-coloured aperture. The Wall ran directly through Bernauer Strasse — the street itself was in the West, the apartment buildings on one side were in the East, and people died jumping from their windows in the days after August 1961.</p><p>The memorial complex preserves a section of the Wall\'s death strip in its full spatial reality — the inner wall, the control strip, the watchtower, the outer wall — and the Window of Remembrance places individual faces against this architecture. It is an act of counter-monumentalism: where the Wall\'s builders used scale to reduce individual life to an abstraction, the memorial insists on specificity. Each face is someone. The rust and steel, the industrial materiality, speak of the Wall\'s own language but turned to a different purpose.</p>',

    'berlin.sovietmemorial.desc': '<p>The Soviet War Memorial in Tiergarten was built in 1945, within months of the end of the Second World War, by Soviet forces using marble salvaged from the demolished Reich Chancellery. The central figure — a Soviet soldier in bronze — stands on a curved colonnade of marble columns, flanked by two T-34 tanks that were among the first to enter Berlin. It is, literally, built from the ruins of the Nazi state using the tools of its destruction.</p><p>The memorial sits in what was West Berlin during the Cold War — an anomaly, a Soviet monument maintained by Soviet soldiers in the middle of Western territory. Red Army troops guarded it throughout the division of the city, a bizarre and tense arrangement that persisted until 1990. The site buries 2,500 Soviet soldiers. It is a monument built at the moment of complete Soviet military power, using materials stripped from the most powerful symbol of the regime they had just defeated. The political weight of its construction materials is inseparable from what it means.</p>',

    'berlin.stagnes.desc': '<p>St. Agnes in Kreuzberg is one of the finest brutalist churches in Europe — a monolithic concrete cube with a cylindrical bell tower, designed by Werner Düttmann and consecrated in 1967. The exterior is deliberately austere: raw concrete, minimal openings, a mass that sits in its urban block with the solidity of something much older. The comparison to a fortress or a bunker is inevitable and was probably intended — postwar German Catholicism rebuilding its presence in a bombed-out city, using the materials of reconstruction.</p><p>The interior resolves the exterior\'s severity into something genuinely meditative: the concrete walls glow with diffused light, the proportions are generous, and the absence of ornament concentrates attention on the space itself. In 2012, after the parish merged with others, the building was converted into a gallery and art space by König Galerie — who understood correctly that they had been given one of the best-proportioned modernist spaces in Berlin. The conversion is among the most successful repurposings of sacred brutalism in recent European architecture.</p>',

    'berlin.berlinwall.desc': '<p>The Berlin Wall was not architecture in any conventional sense but it was a built form that shaped the city more fundamentally than any building. Erected overnight on 12–13 August 1961 by East German forces on Soviet orders, the Wall sealed the border between East and West Berlin that had been haemorrhaging the DDR\'s population — more than 3.5 million East Germans had emigrated West through Berlin since 1949. The Wall stopped that.</p><p>What remained in 1989, when it fell, was a double wall with a death strip between — watchtowers, patrol roads, tripwires, anti-vehicle trenches. At least 140 people died attempting to cross. The sections that survive today are fragments of the outer wall, the side that faced West Berlin and was accessible for graffiti. The inner wall, which East Germans faced and could not touch, is almost entirely gone. The surviving concrete is architecture only in retrospect — material that now carries the entire weight of what the Cold War was.</p>',

    'berlin.charlie.desc': '<p>Checkpoint Charlie was the most famous crossing point between East and West Berlin during the Cold War — the only crossing available to Allied military personnel, foreign diplomats, and Western foreigners. The name came from the NATO phonetic alphabet: Alpha was the first checkpoint, Bravo the second, Charlie the third. In October 1961, just weeks after the Wall went up, American and Soviet tanks faced each other here for sixteen hours in a standoff that brought the two superpowers closer to direct military confrontation than at any point since Korea.</p><p>The checkpoint booth that stands here today is a reconstruction — the original was removed in 1990 when the crossing became irrelevant. What makes Checkpoint Charlie uncomfortable is precisely this reconstruction: the area around it has become tourist infrastructure, the solemnity replaced by costumed actors and overpriced museums. The real memorial weight sits elsewhere — at the documentation centre, in the nearby street signs marking where the Wall ran. But the site\'s history is impossible to fully displace: this is where the Iron Curtain had its most visible, most theatrical, most photographed address.</p>',

    'berlin.spitteleck.desc': '<p>Haus Spitteleck at Spittelmarkt is a curved commercial and office building in what was East Berlin — a prefabricated concrete structure whose distinctive rounded form responds to the corner site at the Spittelmarkt square. The DDR\'s Plattenbau (panel construction) system, usually associated with monotonous residential blocks, here takes on an urban inflection: a curved facade of repeated concrete panels wrapping a corner, acknowledging the street geometry while remaining entirely within the industrial logic of prefabrication.</p><p>Buildings like Haus Spitteleck are among the most overlooked pieces of DDR architecture — not the grand showcase projects of Alexanderplatz or Karl-Marx-Allee, but the everyday commercial and administrative fabric of the socialist city. They survive in diminishing numbers as Berlin redevelops, their concrete and aluminium systems no longer economical to maintain. Each one that disappears takes with it a piece of the spatial memory of the divided city.</p>',

    'berlin.brandgate.desc': '<p>The Brandenburg Gate is the only surviving city gate of Berlin\'s former 18 gates, completed in 1791 and carrying two and a half centuries of German history on its sandstone columns. Built as a symbol of peace by Carl Gotthard Langhans in the Doric order, it has been used since as a triumphal arch for Prussian military processions, a backdrop to Nazi rallies, and, during the Cold War, the most photographed symbol of German division.</p><p>For 28 years, from 1961 to 1989, the Gate stood in the death strip between the two Berlins — inaccessible from either side, visible from both. It was the image that everyone saw when they thought of Berlin: this neoclassical arch standing alone in a no-man\'s land of concrete and wire. When the Wall fell in November 1989, the first thing crowds from both sides did was climb on the Gate. The photograph of that moment — people on the columns, on the quadriga, the Gate suddenly freed from its concrete frame — remains one of the defining images of the twentieth century\'s end.</p>',

    /* ── London building descriptions ────── */
    'london.barbican.desc': '<p>The Barbican is the largest brutalist complex in Europe — a self-contained residential city of 2,000 flats, a concert hall, two theatres, three cinemas, two art galleries, a conservatory, a school, and an ornamental lake. Designed by Chamberlin, Powell & Bon and built between 1965 and 1982, it was conceived as a response to the devastation of the Blitz: a complete urban neighbourhood built from scratch on bombed-out ground in the City of London.</p><p>The architecture is relentlessly consistent — bush-hammered concrete used everywhere, the same aggregate, the same texture, the same colour. The raised walkways, the water terraces, the cylindrical towers, the dense interlocking of residential and cultural functions — all of it was meant to demonstrate that density and urban life were not incompatible. After decades of critical neglect, the Barbican is now Grade II listed and one of the most sought-after addresses in London.</p>',

    'london.trellick.desc': '<p>Trellick Tower is one of the most celebrated — and once most reviled — pieces of social housing in Britain. Designed by the Hungarian-born architect Ernő Goldfinger, it stands 98 metres tall in North Kensington with a detached service tower connected to the main block by enclosed bridges at every third floor. The separation of the lift shaft and services into a distinct vertical element was both structurally logical and architecturally bold — the gap between the two towers is the building\'s most memorable detail.</p><p>Built as council housing for the London Borough of Kensington and Chelsea, Trellick Tower suffered a difficult reputation in the 1970s and 80s — crime, neglect, and the failure of the management that Goldfinger had assumed would care for it. Now Grade II* listed and privately owned by many of its residents, it has been fully rehabilitated. The brutalism that was once blamed for social failure is now an asset.</p>',

    'london.nationaltheatre.desc': '<p>The National Theatre on the South Bank is Denys Lasdun\'s most complex and debated work. Three auditoriums — the Olivier, the Lyttelton, and the Dorfman — are stacked and interlocked within a composition of cascading horizontal terraces that Lasdun called \'strata\'. The building was designed to read as an extension of the Thames riverbank, its layers of concrete stepping up from the water\'s edge.</p><p>Prince Charles famously described it as \'a way of building a nuclear power station in the middle of London\'. The building was Grade II* listed in 1994. Its public terraces, open to all whether they have tickets or not, embody a particular ideal of the civic: a building that is genuinely used, inhabited, and worn. The concrete has accumulated four decades of weathering, and it looks better for it.</p>',

    'london.hayward.desc': '<p>The Hayward Gallery occupies the upper level of the Southbank Centre complex, adjacent to the Royal Festival Hall. Designed by the Greater London Council\'s architects\' department and completed in 1968, it was from the beginning the most aggressively brutalist of the South Bank buildings — a sequence of low, heavy, top-lit gallery spaces connected by ramps and stairs and crowned by a series of pyramidal roof lights and the famous neon sculpture towers on the terrace.</p><p>The gallery\'s exterior geometry — angular, interlocking, absolutely indifferent to conventional beauty — made it a lightning rod for anti-brutalist criticism. But inside, the sequence of interlocking spaces, the natural light filtering through concrete coffering, and the material honesty of the construction create one of the most architecturally interesting gallery environments in London.</p>',

    'london.alexandra.desc': '<p>The Alexandra Road Estate — also known as the Alexandra & Ainsworth Estate — is Neave Brown\'s masterpiece, a dense low-rise social housing scheme in Camden that contains 520 homes in two long terraces stepping down toward a park. Every dwelling has a private outdoor space, and the ground level is entirely pedestrianised. Brown\'s ambition was to create the density of a tower block without the isolation of vertical living.</p><p>The scheme is extraordinary in its consistency of detail: the same board-marked concrete throughout, the same section repeated and varied, the terraces stepping and bridging above the mainline railway that runs beneath them. Grade II* listed since 1993, it was recognised by the Stirling Prize committee in 2018 when Neave Brown received a special award for lifetime achievement. One of the great unbuilt cities of postwar British architecture.</p>',

    'london.brunswick.desc': '<p>The Brunswick Centre in Bloomsbury is one of the most unusual housing schemes in London: two long megastructure blocks facing each other across a pedestrian shopping street, each stepping back in section like open books, their terraced residential floors overlooking the central arcade below. Patrick Hodgkinson designed it as a direct challenge to the point-block orthodoxy of the time — density achieved through section rather than height.</p><p>The centre was completed in a compromised form after years of negotiations, and the concrete was originally left unpainted, producing the raw grey exterior familiar from decades of photographs. A 2006 refurbishment painted the concrete cream, which divided opinion sharply. The spatial idea — the sheltered pedestrian street overlooked by housing — remains powerful regardless of the colour.</p>',

    'london.cottongarden.desc': '<p>The Cotton Garden Estate in Westminster is a low-rise housing scheme that demonstrates a different face of London brutalism: rather than the vertical drama of the towers, a dense, interlocking arrangement of maisonettes and flats in a compact urban block. The architecture uses exposed concrete and brick with the same material directness as the larger schemes, but at a human scale that sits within its surrounding streetscape.</p><p>The estate represents a strand of British social housing that has largely been forgotten in favour of the more photogenic towers — but which may represent a more successful model of dense urban living. The outdoor spaces between the blocks, the shared circulation, and the variety of unit types speak of a planning culture that understood housing as community infrastructure.</p>',

    'london.lambeth.desc': '<p>A single photograph of the Lambeth Towers — a residential block in south London that represents the mass housing programme that defined British council architecture through the 1960s and 70s. The tower stands at the intersection of the A-road network, its concrete face marked by decades of weathering, the window pattern a regular grid interrupted by the irregularities of lived occupation.</p><p>Buildings like this one were built in their thousands across postwar Britain. They were simultaneously the most ambitious social project in British history and, when stripped of adequate maintenance budgets and management, the site of enormous human difficulty. The photograph captures a building at rest between those two readings.</p>',

    'london.moj.desc': '<p>The Ministry of Justice building on Petty France in Westminster is a large government complex that exemplifies the institutional brutalism of the postwar British state: long, horizontal, purposeful, and completely uninterested in charm. Its concrete and glass facades present a blunt face to the surrounding streets, the window grids and service elements articulated with the characteristic directness of the period.</p><p>Government buildings of this type — designed to house large bureaucracies, to process people and paperwork efficiently, to last — represent a civic confidence that has since retreated. The material language was expensive to maintain and easy to resent; the buildings often outlasted the institutions they were designed to project.</p>',

    'london.soas.desc': '<p>The SOAS building on Thornhaugh Street is part of the Bloomsbury campus cluster that includes Lasdun\'s Institute of Education nearby. A concrete and glass academic building designed with the same structural directness as Lasdun\'s other institutional work — the frame expressed, the floor plates readable, the materials undecorated.</p><p>Academic buildings of this type defined the physical expansion of British universities in the 1960s and 70s, as student numbers tripled and new faculties required new space quickly. The architecture was consequential: cheap concrete, universal plan, adaptable interior. That most of these buildings have aged poorly is partly a reflection of how quickly they were built and how little money was budgeted for their maintenance.</p>',

    'london.swisscottage.desc': '<p>The Swiss Cottage Library by Basil Spence is a striking piece of civic modernism — a public library wrapped in a dramatic folded concrete canopy that overhangs the pavement on Swiss Cottage High Road. The canopy\'s angular geometry and the exposed structural frame signal the building\'s public purpose from a distance, making it one of the most recognisable small civic buildings in North London.</p><p>Spence, better known for Coventry Cathedral, designed the library as part of a larger civic complex that included a swimming pool and youth centre. The relationship between the overhanging canopy, the transparency of the glazed facade behind it, and the solidity of the concrete structure creates a building that is generous to the public realm in a way that much civic architecture of the period failed to be.</p>',

    /* ── Chisinau building descriptions ──── */
    'chisinau.circus.desc': '<p>The Chisinau State Circus is one of the most architecturally remarkable buildings in the former Soviet Union — a circular brutalist structure whose exterior is defined by a dramatic ring of angled concrete fins, each one a massive blade of white stone splaying outward from the cylindrical body of the building. Completed in 1981 and designed by Semyon Fridlin, the building seats 1,900 and has been in continuous operation since opening, making it both an architectural and cultural landmark of the Moldovan capital.</p><p>The formal language is pure late Soviet: the structural elements are made expressive, the concrete treated as sculpture rather than mere enclosure. The bronze relief above the entrance depicts circus performers — acrobats, clowns, equestrians — in the confident Soviet tradition of monumental public art. The entire building seems to be in motion, the fins suggesting the rotating top of a circus tent translated into permanent, load-bearing concrete. In a city that lost much of its Soviet-era fabric to post-independence renovation, the Circus stands largely unaltered and all the more powerful for it.</p>',

    'chisinau.cosmos.desc': '<p>Hotel Cosmos is the most formally inventive building on Chișinău\'s central boulevard — a nine-storey hotel block whose entire facade is covered in a repeating diamond grid of precast concrete elements, each unit tilted at an angle to catch the light differently depending on the time of day. The effect is hypnotic: a surface that appears to shift and breathe as you move past it, the shadow pattern changing continuously across the grid of hundreds of identical concrete lozenges.</p><p>Built in 1967 during the height of Soviet modernist experimentation, the building represents the moment when Soviet architecture broke free from the Stalinist wedding-cake style and began exploring the formal possibilities of prefabrication. The diamond pattern is not ornamental — it is structural, each element a repeated unit produced at scale and assembled into a facade that becomes its own architectural statement.</p>',

    'chisinau.mosaics.desc': '<p>The Soviet Union produced more public mosaic art than any state in history. Between the 1960s and the collapse of the USSR in 1991, tens of thousands of monumental mosaics were installed across the Soviet republics — on the facades of factories, sports halls, bus stations, universities, and apartment blocks. Chișinău, as the capital of the Moldavian SSR, received its full share. Several dozen major works survive in the city today, in varying states of preservation.</p><p>The mosaics documented here represent two distinct traditions. The outdoor building mosaics — executed in smalt and ceramic tile — typically depicted subjects drawn from Moldovan folk culture, agricultural abundance, and socialist labour. The interior mosaic at the Central Bus Station is a large-scale fresco in a public waiting space, intended to be read at length by passengers. Both traditions understood something that has since been forgotten: that functional public space deserves ambitious art.</p>',

    /* ── Bucharest building descriptions ─── */
    'bucharest.parliament.desc': '<p>The Palace of the Parliament — known during construction as Casa Poporului, the House of the People — is the largest administrative building in the world and the heaviest building on Earth. At 270 metres wide, 240 metres deep, and 86 metres tall above ground, with a further eight basement floors extending another 92 metres below, it contains 1,100 rooms, 480 chandeliers, and 35 million cubic feet of marble. It took 700 architects, 20,000 construction workers operating around the clock in shifts, and thirteen years to build.</p><p>Nicolae Ceaușescu commissioned it in 1984 as the centrepiece of his grand urban replanning of Bucharest — a project that required the demolition of a fifth of the historic city centre, including churches, synagogues, and neighbourhoods that had stood for centuries. The building faces down the Boulevard of the Victory of Socialism (now Bulevardul Unirii), an axis 3.5 kilometres long and 90 metres wide designed to be wider than the Champs-Élysées. Ceaușescu never saw it finished: he was executed on Christmas Day 1989, eight years before the building was completed.</p>',

    'bucharest.tehnoimport.desc': '<p>The Tehnoimport Building on Calea Victoriei is one of Bucharest\'s most formally startling structures — a cylindrical office tower whose entire surface is wrapped in horizontal concrete bands separated by deep recessed windows, giving it the appearance of an enormous stacked barrel or a coil of concrete rope. Built in 1965 for the state foreign trade enterprise Tehnoimport, it was among the first major modernist office buildings in communist Romania, an early signal of the architectural liberalisation that would follow under Ceaușescu\'s relatively open cultural policy of the late 1960s.</p><p>The building occupies a corner site at one of central Bucharest\'s busiest intersections, and its circular form is a direct response to that condition: rather than presenting a flat face to one street and a flank to the other, it faces all directions equally, the curve eliminating the corner entirely. Viewed from below, the horizontal banding creates a powerful rhythm that tightens toward the top, the concrete rings becoming progressively more compressed as the tower rises.</p>',

    'bucharest.intercontinental.desc': '<p>The Hotel Intercontinental Bucharest — now operating as the Grand Hotel Bucharest — is the tallest building in central Bucharest and among the most elegant modernist towers built in communist Romania. Designed by architects Dinu Hariton and Romeo Belea and completed in 1971, the 25-storey tower rises 84 metres above Piața Universității in a composition that is genuinely international in its sophistication: the curved top floors, the regular grid of the facade, and the proportioning of the whole speak the same architectural language as contemporary hotel towers in Western Europe.</p><p>Its construction was possible because Romania\'s communist leadership in the late 1960s actively sought foreign currency and Western business connections, making international hotel standards a state priority. The building sits at what became one of the most politically charged intersections in Romanian history: Piața Universității was the centre of the student and intellectual protests of 1990, the occupation of the square that followed the revolution, and the violent suppression that came with the miners\' march.</p>',

    /* ── Tiraspol site descriptions ───────── */
    'tiraspol.domsovetov.desc': '<p>The Dom Sovetov — House of Soviets — is the seat of the Supreme Soviet of the Pridnestrovian Moldavian Republic, the unrecognised state that declared independence from Moldova in 1990 and has operated in a legal and political limbo ever since. The building itself was completed in 1987, four years before the Soviet Union collapsed. Its facade is now painted in the red-green-red bands of the Transnistrian flag, with ДОМСОВЕТОВ mounted above the entrance alongside a functioning clock tower whose spire is topped with a Soviet star.</p><p>What makes this building unlike any other in Europe is the statue in front of it. Lenin stands here as he does throughout the former Soviet Union. But in Tiraspol he has never been removed. Transnistria is the last territory in Europe where Lenin statues remain as official state monuments in their original positions, where Soviet-era symbols appear on the state flag, and where the Soviet aesthetic of governance has been preserved not as nostalgia or irony but as ideology. To stand in this square is to stand in a place that has genuinely not moved on.</p>',

    'tiraspol.cinema.desc': '<p>Cinema Tiraspol is a Soviet-era public cinema of the type built in towns and cities across the USSR from the 1950s through the 1970s — a single-screen hall raised on pilotis above an open ground floor, its facade defined by a large horizontal concrete relief frieze depicting a procession of Soviet citizens in the heroic-realist tradition. Workers, soldiers, women, and children move across the frieze in the ideological grammar of socialist culture: collective, purposeful, joyful in their labour and civic life.</p><p>The cinema remains in operation. In Transnistria, where the Soviet cultural infrastructure was never dismantled or privatised in the way it was across the post-Soviet world, many institutions of this type have simply continued functioning under the same roof, with the same name, serving the same communities they were built for. The frieze above the entrance has not been painted over or recontextualised as historical artifact. It is still the face of a working cinema.</p>',

    'tiraspol.memorial.desc': '<p>Tiraspol\'s war memorial commemorates the soldiers who died in the Transnistrian War of 1992 — the short, brutal armed conflict between Transnistrian separatists backed by Russian forces and the Republic of Moldova, which ended with a ceasefire that has held ever since without any final political resolution. The memorial\'s central sculpture — massive granite heads emerging from a shared plinth, rising above steel columns — is formally powerful in a tradition that connects Soviet monumental sculpture to the broader language of postwar European memorialisation.</p><p>The granite faces are individual and generic at once: recognisable as human, as soldiers, as young men, but not as specific persons. The monument commemorates a war that, for most of the world, officially never happened — fought in a state that, for most of the world, officially does not exist.</p>',

    'tiraspol.cantine.desc': '<p>The USSR Cantine in Tiraspol is a surviving Soviet-era public canteen of the type that fed factory workers, office staff, and residents across the entire USSR — a stolovaya, a communal dining hall where meals were subsidised and standardised, available to anyone for a few kopecks. The interior retains its original Soviet character: tiled walls, long tables, serving counters, metal trays. It operates today much as it did in 1980, serving inexpensive hot food to workers and pensioners.</p><p>In most of the former Soviet Union, the stolovaya has either been replaced by private restaurants or converted beyond recognition. In Transnistria, many have simply continued. The cantine is not preserved as a museum piece or themed for nostalgia: it is working infrastructure, a functional reminder that the basic spatial and social arrangements of Soviet daily life continue in this particular corner of Europe. To eat here is to participate in something that has not yet become historical.</p>',

    'tiraspol.republicpalace.desc': '<p>The Palace of the Republic in Tiraspol is the main state cultural venue of the Pridnestrovian Moldavian Republic — a large Soviet ceremonial hall built to host official state events, congresses, performances, and public gatherings. Its architecture follows the established Soviet typology for such institutions: a broad columned facade facing a public square, interiors scaled for collective ceremony.</p><p>The Palace hosts official state events, artistic performances, and the formal rituals of a state that the international community does not recognise. It is the venue where Transnistrian statehood is performed in public: the state that exists in practice if not in law, which holds elections and issues passports and runs courts, celebrates itself in a building whose architecture says that this is a permanent, serious place. Which is, depending on how you look at it, either completely absurd or the most accurate thing about it.</p>',

    'tiraspol.government.desc': '<p>The Pridnestrovian Government Building houses the ministries and administrative offices of the unrecognised republic — a Soviet-era administrative block that has continued to function as a seat of government since 1990, when Transnistria declared independence from Moldova in the final years of the Soviet Union. The building\'s institutional Soviet architecture makes no concession to the political situation: it looks like a government building because it functions as one.</p><p>Transnistria operates a full set of state institutions — a president, a parliament, ministries, a police force, a customs service, a currency, and a military. All of this happens in buildings like this one, using Soviet-era infrastructure adapted to the purposes of a state that most of the world pretends does not exist. The government building is perhaps the most ordinary and most revealing site in Tiraspol: normalcy as political statement.</p>',

    'tiraspol.suvorovsq.desc': '<p>Suvorov Square in Tiraspol commemorates Alexander Suvorov, the 18th-century Russian military commander who founded the city in 1792 after Russia\'s victory over the Ottoman Empire in the Russo-Turkish War. Suvorov built the first fortress on the left bank of the Dniester here, establishing what would become one of the westernmost outposts of the Russian Empire. The square bearing his name remains the geographic and symbolic centre of the city.</p><p>The equestrian statue of Suvorov that dominates the square has stood since the late Soviet period and remains an official monument. In Transnistria, Suvorov functions as a founding figure for the state\'s claim to historical legitimacy — the Russian general whose military action created this city is invoked as evidence of the region\'s Russian cultural and historical identity, separate from Moldova. The square is carefully maintained: formal plantings, clean paving, the statue prominent and well-lit. It is a public space that takes its symbolism seriously.</p>',

    'tiraspol.cityhall.desc': '<p>Tiraspol City Hall is the administrative centre of the city\'s municipal government — a Soviet-era institutional building set on one of the main avenues, its facade maintaining the formal language of Soviet civic architecture: symmetrical composition, regular windows, decorative elements that signal the building\'s official function. Municipal government was never small in the Soviet model: the city was administered through multiple overlapping party and state institutions, all of which required buildings of appropriate weight.</p><p>The city hall continues to function as Tiraspol\'s municipal administration. Its continued operation within Transnistrian state structures — which are unrecognised internationally but function in practice — means the building carries the same administrative authority it always did, simply in the service of a different political formation than the one it was built for. The calendar on the wall may have changed; the institutional weight of the building has not.</p>',

    'tiraspol.gagarinmonument.desc': '<p>The Gagarin Monument in Tiraspol honours Yuri Gagarin, the Soviet cosmonaut who in 1961 became the first human to travel into outer space. Gagarin was one of the most celebrated figures in Soviet history — his achievement was used as evidence of the superiority of the socialist system, proof that the USSR could reach places capitalism could not. Monuments to Gagarin were built across the Soviet Union, and in Transnistria, unlike the rest of the post-Soviet world, the monumental culture of the USSR has been maintained rather than dismantled.</p><p>The monument commemorates a genuine human achievement — the flight of Vostok 1 on 12 April 1961. But in Tiraspol it also functions as a statement of continuity: this is a state that honours the same heroes, maintains the same monuments, and organises its public space according to the same hierarchy of values as the Soviet Union. Cosmonaut Day — 12 April — is still officially celebrated here. Gagarin looks up, the way he always did.</p>',

    'tiraspol.greenmarket.desc': '<p>The Green Market in Tiraspol is an open-air market of the type that existed throughout the Soviet Union and has continued with minimal change in Transnistria — a space where produce, household goods, clothing, and a miscellany of items are sold from stalls and tables by vendors who are often the producers themselves. Soviet cities maintained these markets as a sanctioned space where collective farm output could be sold directly, at prices set by supply and demand rather than by the state procurement system.</p><p>In post-Soviet Transnistria, the market continues in much the same form. The vendors are older, the goods sometimes imported, but the spatial arrangement, the social dynamics, and the physical infrastructure are recognisably continuous with the Soviet original. It is one of the most ordinary and most telling sites in the city: commerce conducted in the same way it always was, in a state that has preserved more of the Soviet economic texture than almost anywhere else in the former USSR.</p>',

    'tiraspol.university.desc': '<p>The Transdniestrian State University (TSU) is the main institution of higher education in Transnistria, a Soviet-era university that has continued to operate as the republic\'s primary academic institution since the establishment of the state in 1990. The university building is a characteristic Soviet academic structure — a functional modernist block designed for the practical requirements of mass higher education.</p><p>TSU operates in an unusual international context: its degrees are recognised in Russia and some other post-Soviet states but not in most of the world, a consequence of Transnistria\'s unrecognised status. Yet the university continues to train doctors, teachers, engineers, and administrators who run the state\'s institutions. The building\'s Soviet architecture reflects an educational philosophy that has been maintained with greater continuity here than almost anywhere else in the former Soviet space.</p>',

    'tiraspol.comsomolpark.desc': '<p>Comsomol Park in Tiraspol is a public green space named after the Young Communist League — the Soviet youth organisation whose name attached itself to parks, streets, and public spaces across the entire USSR. The park\'s Lenin Monument is one of several Lenin statues that remain standing in Tiraspol as official state monuments, a situation unique in contemporary Europe.</p><p>In Transnistria, Lenin statues were not removed after 1991 as they were across the rest of the post-Soviet space. They remain in their original positions, maintained by the state, officially commemorated on Lenin\'s birthday and other Soviet anniversaries. The Lenin monument in Comsomol Park is not a museum piece or a subject of political controversy — it is simply part of the landscape of a city that has not formally broken with the Soviet past.</p>',

    'tiraspol.benderfortress.desc': '<p>Bender Fortress (also known as Tighina Fortress) is a 16th-century Ottoman fortification that dominates the left bank of the Dniester River at Bender, a city that now falls within Transnistria\'s administered territory. Built under Suleiman the Magnificent, the fortress was a major strategic military installation controlling the crossing of the river — a position contested by Ottomans, Russians, Swedes, and later the Soviet Union.</p><p>Charles XII of Sweden sheltered here after his defeat at the Battle of Poltava in 1709. The fortress passed to Russia in 1812. Today the fortress sits within military territory still controlled by Russian troops — the 14th Guards Army that has remained in Transnistria since 1992. Access is restricted, and the crumbling towers and walls are visible from outside the perimeter. Few fortresses in Europe carry such a density of competing empires in their stonework.</p>',

    'tiraspol.benderstation.desc': '<p>Bender Train Station is a Soviet-era railway terminal serving the city of Bender (Tighina) on the western edge of Transnistria, a city that remains a contested point between Moldova and the self-declared republic. The station building, with its characteristic Soviet institutional architecture, continues to serve regular rail traffic — including the peculiar administrative situation where trains pass through both Moldovan and Transnistrian territory.</p><p>The station exists within a complicated zone of authority: Bender is administered by Transnistria but lies on the western bank of the Dniester, making it a geographic anomaly surrounded by Moldovan-administered territory. The 1992 war saw heavy fighting in and around Bender. The train station stood through that conflict, and today operates in an eerie normalcy — a functioning Soviet building in a city that remains technically at ceasefire.</p>',

    'tiraspol.monumentpowerplant.desc': '<p>Situated near the Cuciurgan power plant complex on the outskirts of Tiraspol, this Soviet-era monument commemorates the workers and builders associated with the city\'s industrial infrastructure. Soviet monumental sculpture frequently glorified industrial labour and the workers who built the economic foundations of the state — power plants, factories, and collective farms were understood as acts of political will made concrete.</p><p>The Cuciurgan plant remains one of the largest electricity generators in the region, supplying power not only to Transnistria but also to Moldova and Ukraine. The plant\'s continued operation gives Transnistria unusual leverage — energy dependency has been a recurring factor in negotiations between Chisinau and Tiraspol. The monument beside it carries a different weight than it once did: no longer a celebration of socialist construction, but a marker at the edge of a statehood dispute conducted partly in kilowatts.</p>',

    'tiraspol.residential.desc': '<p>Across Tiraspol and Bender, the streets are lined with Soviet residential blocks — the khrushchyovki and later brezhnevki that were the dominant form of mass housing built across the USSR from the 1960s through the 1980s. These prefabricated concrete panel buildings were constructed at enormous scale as the Soviet state attempted to solve the urban housing crisis, moving millions of families out of communal apartments into private flats.</p><p>In Transnistria, these buildings remain the primary housing stock, largely unchanged since construction. The absence of major investment or redevelopment means the landscape of the city looks remarkably close to how it did in the late Soviet period. Facades show their age — streaked concrete, rusting balcony railings — but the buildings continue to house the population of a state that the world does not officially recognise. They are the most ordinary and most revealing architecture of Tiraspol: not monuments, just where people live.</p>',

    'tiraspol.leninstreet.desc': '<p>On Lenin Street — Tiraspol\'s main boulevard, still carrying its Soviet name — this small guesthouse occupies a Soviet-era building that has been adapted into modest accommodation for the rare visitor who passes through. Tiraspol does not receive many tourists: the unrecognised state, the requirement to pass through border controls, and the limited international connections all conspire to keep visitor numbers extremely low.</p><p>Lenin Street itself is one of the most photogenic avenues in the post-Soviet world — wide, tree-lined, with the unchanged institutional buildings of the Soviet state on either side. Government ministries, the Supreme Soviet building, and the ornate Tiraspol Drama Theatre face the boulevard. To walk Lenin Street is to experience a city that chose preservation over transition, Soviet street furniture and all. The guesthouse on this street is a functional footnote to that decision: somewhere to sleep in a city that time, by design, has not quite left.</p>',

    'london.ucl.desc': '<p>The UCL Institute of Education building on Bedford Way is one of Denys Lasdun\'s most rigorous works — a long horizontal slab of lecture theatres and seminar rooms stacked in interlocking section behind a continuous facade of exposed concrete and glass. Lasdun used the same \'strata\' language here as in the National Theatre, though more austerely: the building reads as a pure section made vertical.</p><p>The street-facing facade is controlled and formal, each floor reading as a distinct concrete band, the glazing recessed behind the structure. The interiors follow the same logic: raw concrete walls and ceilings, natural light filtered through the structural frame. The building has aged well, its material consistency becoming more apparent and more valuable as surrounding buildings are replaced.</p>',

    /* ── Chisinau new spot descriptions ─── */
    'chisinau.guguta.desc': '<p>Cafenea Guguta is a Soviet-era café in the Botanica district named after Guguță — the mischievous boy with a magic hat from Spiridon Vangheli\'s 1967 children\'s story, one of the most cherished works of Moldovan literature. The building is a compact modernist structure whose decorative elements reference the story\'s rural Moldovan world, making it an unusual intersection of Soviet commercial architecture and local folk culture.</p><p>The café has continued to operate through independence and successive economic upheavals, its name and identity intact. In a city where Soviet-era commercial architecture has largely been replaced or refaced, Cafenea Guguta retains something rare: a specific, local character that the more anonymous modernism of the period never attempted. The building is inseparable from its name, and the name is inseparable from the literary imagination of an entire generation of Moldovan children.</p>',

    'chisinau.govhouse.desc': '<p>The Government House of the Republic of Moldova occupies the most prominent position in Chișinău — directly facing the Great National Assembly Square, the symbolic heart of the Moldovan capital. Completed in 1964, it served as the seat of the Soviet Moldavian SSR\'s government and now houses the Cabinet of Ministers and the Prime Minister\'s office.</p><p>The architecture belongs to the transition between late Stalinist grandiosity and the more restrained Soviet modernism that followed: the colonnaded facade retains ceremonial weight while the overall composition moves toward the cleaner lines of the Khrushchev era. The building anchors the square that witnessed the most significant events of Moldova\'s modern history — including the massive 1989 rallies that led to the declaration of Moldovan sovereignty.</p>',

    'chisinau.hotelnational.desc': '<p>Hotel National is one of Chișinău\'s central modernist hotels — a mid-rise block on the main boulevard representing the Soviet approach to visitor accommodation in a regional capital. The building\'s architecture is characteristic of Soviet hotel construction from the 1960s and 1970s: a functional facade of regular bays, horizontal emphasis, and prefabricated concrete cladding that prioritised replicability over individual character.</p><p>Hotels of this type served a specific function within the Soviet travel economy: accommodation for party officials, enterprise delegates, and approved tourists moving through the internal Soviet system. The building has changed ownership since independence but retains its original form, a piece of street architecture that defines the boulevard even as the activity inside has been transformed beyond recognition.</p>',

    'chisinau.liberation.desc': '<p>The Liberation Composition is a monumental sculptural ensemble on Chișinău\'s central boulevard, erected in 1969 to commemorate the liberation of Soviet Moldova from Nazi occupation during the Great Patriotic War. The composition features bronze figures in the confident heroic-realist style of Soviet war memorials — soldiers and civilians in postures of struggle and determination, unified by the ideological grammar of socialist public art.</p><p>The memorial\'s placement on the central boulevard reflects the Soviet understanding of public space as an inherently political and commemorative environment. History was not sequestered but displayed, integrated into the daily movement of citizens through their city. The 1969 date places this work at the height of the Brezhnev era\'s investment in war commemoration — a period when the memory of the Second World War was becoming the central mythology of Soviet legitimacy.</p>',

    'chisinau.komsomol.desc': '<p>The Komsomol Monument in Chișinău commemorates the Young Communist League — the Soviet youth organisation that functioned simultaneously as a political formation, a social network, and a rite of passage for generations of Soviet youth. The monument uses the visual language of Soviet heroic sculpture: dynamic figures, upward movement, the composition embodying youth, energy, and ideological commitment.</p><p>The Komsomol\'s role in Soviet society was pervasive — almost every young person was a member, and the organisation coordinated everything from construction brigades to cultural events. Monuments to the Komsomol encoded that pervasiveness in public space. In post-Soviet Chișinău, the monument remains but its meaning has been hollowed out: the organisation it celebrates no longer exists, and the bronze figures continue to gesture toward a future that never arrived.</p>',

    'chisinau.flowerfountain.desc': '<p>The Flower Fountain mosaic is one of Chișinău\'s most charming examples of Soviet public decorative art — a mosaic installation in the city centre whose imagery is drawn from the floral and botanical vocabulary that characterised the more optimistic strand of Soviet public art. Flowers, in the Soviet decorative tradition, carried specific connotations: abundance, spring, the promise of a beautiful collective future.</p><p>Soviet mosaic artists working in the 1960s and 70s developed a sophisticated visual language drawing on folk art traditions, Byzantine decorative patterns, and Western modernism — absorbed and domesticated into something distinctly Soviet. The Flower Fountain mosaic represents this tradition at its most accessible: colour, pattern, and a subject that required no ideological decoding to enjoy.</p>',

    'chisinau.powerplantmosaic.desc': '<p>The mosaic at Chișinău\'s power plant is one of the most assertively industrial examples of Soviet public art in Moldova — a large-format mosaic applied to the exterior of an energy infrastructure building, depicting turbines, workers, electricity, and the transformation of natural resources into the power that lights a socialist city.</p><p>Industrial buildings in the Soviet Union were frequently decorated with public art as a statement of the dignity of labour and the beauty of socialist production. The mosaic format, with its durable ceramic and glass tiles capable of surviving decades of weather, was the preferred medium for exteriors. This example has survived well, its imagery as direct and unambiguous as the building it decorates.</p>',

    'chisinau.countrymosaic.desc': '<p>The Country Mosaic is one of the thematic mosaics distributed across Chișinău\'s public buildings, its imagery rooted in the agricultural and folk traditions of Moldova — a republic whose Soviet-era identity was built substantially on the celebration of its wine-growing, farming, and village culture. The motifs — rural scenes, stylised natural forms, the patterns of traditional Moldovan weaving translated into tile — represent the officially sanctioned version of Moldovan national identity under Soviet rule.</p><p>This strand of Soviet mosaic art occupied an ideologically useful position: it celebrated local culture while firmly framing that culture within the Soviet collective. The mosaic has outlasted the ideology that commissioned it and now reads differently — less as propaganda than as a record of what was understood to be worth preserving.</p>',

    'chisinau.termoelectrica.desc': '<p>The mosaic at the Termoelectrica facility is a large-format work on the exterior of one of Chișinău\'s thermal electricity infrastructure buildings — a mosaic whose imagery addresses the themes of energy, heat, and industrial transformation directly appropriate to the building\'s function. Soviet architectural doctrine held that industrial and utility buildings deserved public art as much as cultural or governmental ones.</p><p>The Termoelectrica complex sits in the industrial south of Chișinău, removed from the central boulevard culture of the city\'s more celebrated mosaics. Its mosaic is a less-visited but equally remarkable example of the Soviet conviction that the built environment of socialist labour should be aesthetically ambitious throughout — that the workers who spent their days inside these buildings deserved beautiful exteriors.</p>',

    'chisinau.trainmosaic.desc': '<p>The mosaic at Chișinău Central Railway Station is one of the most publicly visible examples of Soviet decorative art in Moldova — a large-format work installed in the station\'s primary public space, designed to be seen by the thousands of passengers moving through one of the most heavily used transit buildings in the country. Railway stations in the Soviet Union were understood as gateways, and their decoration was proportionally important.</p><p>The imagery draws on the vocabulary of movement, connection, and the landscape of Moldova — thematic content that speaks to a traveller departing or arriving, locating them within a specific republic and a specific cultural moment. The mosaic medium, with its ability to produce large areas of vivid colour that survive the heavy foot traffic of a railway environment, was ideally suited to the purpose.</p>',

    'chisinau.writersmosaic.desc': '<p>The mosaic at the Writers\' Union building in Chișinău is placed at the institutional home of the republic\'s literary establishment — a work whose imagery naturally reflects the themes of language, culture, and creative labour that the organisation officially embodied.</p><p>The Writers\' Union of the Moldavian SSR was a complex institution: simultaneously a state instrument of censorship and ideological control, and the professional home of the writers who preserved and developed Moldovan literary culture under Soviet rule. The mosaic on its building occupies this ambiguity — commissioned by the state for an institution that served the state, yet also serving a community whose relationship to that state was never simple.</p>',

    'chisinau.feroviarilor.desc': '<p>The Palatul Feroviarilor — Palace of the Railway Workers — is a Soviet-era cultural and social centre built for the employees of the Moldovan railway system. It reflects the Soviet practice of constructing dedicated cultural palaces for specific worker categories and professional groups: institutions that combined performance halls, libraries, and social spaces in buildings more formally ambitious than a typical workplace canteen.</p><p>The architecture speaks of the seriousness with which the Soviet state regarded the cultural life of its railway workers — a seriousness that can seem at once patronising and genuinely committed to the idea that working people deserve beautiful spaces. The building stands near the central train station, its proximity to the infrastructure it served a logical expression of the Soviet system of enterprise-based cultural provision.</p>',

    'chisinau.plowmancosmos.desc': '<p>The Plowman and Cosmos mosaic is a striking juxtaposition of two central themes in Soviet public iconography — the agricultural and the cosmic. In the visual vocabulary of the Soviet state, these two domains were not contradictory: the plowman working the earth and the cosmonaut reaching for the stars were equally heroic workers serving the collective, their labour different in scale but identical in dignity.</p><p>The mosaic was almost certainly installed in proximity to the Hotel Cosmos, whose name announced the same space-age optimism. The Soviet space programme had been a defining achievement of the Khrushchev era, and its imagery permeated public art throughout the 1960s and 70s. To place the cosmonaut alongside the plowman was to assert that Moldova\'s agricultural republic was part of the same forward movement as the technological achievement of space exploration.</p>',

    'chisinau.busstation.desc': '<p>The Central Bus Station mosaic in Chișinău is a large-format interior work in the city\'s main intercity bus terminal — a painted and tiled composition designed for a space where thousands of passengers pass each day. Bus stations connected the cities to the countryside, the republic\'s capital to its villages, and their architecture often reflected specifically local and national themes.</p><p>The Central Bus Station mosaic draws on the visual traditions of Moldovan folk art — the patterns, colours, and motifs of the region\'s craft culture — to create a welcoming image for travellers arriving in or departing from Chișinău. Its scale and ambition reflect the Soviet conviction that public transit buildings deserved artistic investment, that the experience of waiting for a bus was worth beautifying.</p>',

    'chisinau.telecommunosaic.desc': '<p>The mosaic at the Moldovan Telecom building is an exterior work applied to the facade of one of Chișinău\'s telecommunications infrastructure buildings. Communication, in the Soviet ideological system, was understood as a means of collective connection and socialist unity, and its infrastructure buildings were treated as worthy of artistic celebration.</p><p>The imagery of telecommunications mosaics typically drew on themes of connection, wave forms, the technology of signal transmission, and the human relationships that communication makes possible. This example, applied to a building that served the practical function of connecting Moldova\'s telephone network, makes the invisible infrastructure of Soviet communication visible and beautiful.</p>',

    'chisinau.deportees.desc': '<p>The Monument to the Deportees in Chișinău commemorates the victims of the Soviet deportations from Moldova — the mass forced transfers of Moldovan civilians to Siberia and Central Asia carried out in June 1941 and again in June 1949. In these two operations, tens of thousands of Moldovans were classified as enemies of the Soviet state: entire families loaded onto cattle cars and transported thousands of kilometres from their homes.</p><p>The monument, erected in the 1990s after Moldovan independence made such memorialisation politically possible for the first time, acknowledges a category of Soviet violence that was officially denied for decades. Its sculptural form — figures of grief, displacement, and loss rendered in stone — uses the language of commemoration against the system that committed the acts being commemorated.</p>',

    'chisinau.triumpharch.desc': '<p>The Triumphal Arch in Chișinău\'s Great National Assembly Square was completed in 1840 during the period when Bessarabia was part of the Russian Empire, erected to commemorate the Russo-Turkish War of 1828–1829 and the Russian victories that led to the acquisition of the territory. A classical stone structure in the tradition of European triumphal arches, it is the dominant vertical accent in the city\'s ceremonial space.</p><p>The arch carries the largest bell from a demolished cathedral, which rings during important civic occasions. Its position at the head of the square that has since become the symbolic centre of Moldovan public life — where the 1989 independence demonstrations took place — makes it an inadvertent witness to the full sweep of Moldovan history from Russian imperialism through Soviet rule to independent statehood.</p>',

    /* ── Bucharest new spot descriptions ─── */
    'bucharest.grandhotel.desc': '<p>The Grand Hotel Bucharest — built as the Hotel Intercontinental and completed in 1971 — is the tallest building in central Bucharest and among the most elegant modernist towers built in communist Romania. Designed by architects Dinu Hariton and Romeo Belea, the 25-storey tower rises 84 metres above Piața Universității in a composition of genuine international sophistication: the curved crown, the regular facade grid, and the proportioning of the whole speak the same architectural language as contemporary hotel towers in Western Europe.</p><p>Its construction was made possible because Romania\'s communist leadership in the late 1960s actively sought foreign currency and Western business connections, making international hotel standards a state priority. The building sits at one of the most politically charged intersections in Romanian history: Piața Universității was the centre of the 1990 student protests, the square occupation that followed the revolution, and the violent suppression during the miners\' march.</p>',

    'bucharest.arcdetriumph.desc': '<p>Bucharest\'s Arcul de Triumf was completed in 1936 to a design by architect Petre Antonescu, replacing a temporary wooden arch that had stood since 1922 to commemorate the Romanian army following the First World War. The permanent arch is a limestone structure modelled explicitly on the Arc de Triomphe in Paris — 27 metres tall, with bas-relief sculptures celebrating Romanian military victories and national unification.</p><p>The arch stands at the intersection of major radiating avenues in the northern residential district, part of a planned Parisian-style urban composition that Bucharest\'s interwar planners envisioned. Romania\'s completion of national unification in 1918 — bringing Transylvania, Bessarabia, and Bukovina into the country — gave the triumphal arch its historical justification. The iconography carved into its stone records a specific moment of national self-definition.</p>',

    'bucharest.blocrotund.desc': '<p>Blocul Rotund — the Round Block — is a circular residential tower in the Lujerului neighbourhood of western Bucharest, built in the 1970s to 1980s during Ceaușescu\'s massive housing industrialisation campaign. The circular plan is unusual within Romanian communist housing, where the standard was the rectangular slab or linear block; this tower represents one of the more formally adventurous departures from the standard typology.</p><p>The housing districts of western Bucharest were built rapidly to accommodate the population transferred from demolished historic neighbourhoods — part of the same urban programme that destroyed much of old Bucharest to make way for the Boulevard of the Victory of Socialism. Blocul Rotund now stands in a landscape of standardised housing, its cylindrical form distinctive precisely because everything around it is straight.</p>',

    'bucharest.brutalistslide.desc': '<p>The concrete playground structure in Parcul Floreasca — known locally as the Brutalist Slide — is an object of considerable formal ambition for what is, functionally, a piece of play equipment. Built in the 1970s to 1980s as part of the park\'s public infrastructure, it is a multi-level concrete structure with stairways, platforms, and slides integrated into a unified sculptural composition that belongs to the tradition of Soviet-influenced concrete playground design.</p><p>The structure has acquired legendary status among Bucharest\'s urban enthusiasts for the sheer incongruity of its ambition: a brutalist monument at the scale of a child\'s slide. The concrete has weathered into a satisfying roughness, the geometry more visible now than when it was new. It survives in a park substantially redesigned in the post-communist period, making it one of the more improbable survivals of communist-era public design.</p>',

    'bucharest.rebirth.desc': '<p>The Memorial of Rebirth in Piața Revoluției was unveiled in 2005 to commemorate the Romanian Revolution of December 1989 — the popular uprising that ended 42 years of communist rule and resulted in the execution of Nicolae and Elena Ceaușescu on Christmas Day. The memorial occupies the square that was the geographical centre of the revolution, where the most intense fighting occurred.</p><p>The square is surrounded by buildings that bear the marks of the event: the Central Committee building from whose balcony Ceaușescu gave his final public speech, the Royal Palace (now the National Museum of Art), and the University Library whose facade still shows repair work from bullet damage. The Memorial of Rebirth was controversial at its unveiling but has become a fixed point in the city\'s landscape of memory.</p>',

    'bucharest.obor.desc': '<p>The Obor district in northeastern Bucharest is one of the most intact examples of communist-era residential urban fabric built across Romanian cities during the 1960s through 1980s. The neighbourhood centres on the Obor market and is surrounded by the characteristic panel-construction apartment blocks of the period — prefabricated concrete slab buildings produced from standardised moulds and assembled at industrial pace across the entire country.</p><p>The Obor blocks are not individual architectural statements but an urban system: streets lined with near-identical buildings, the scale of the neighbourhood determined by the planning grid of the communist period. The market at the centre, where Romanians have traded for centuries across successive regimes, gives the district a continuity the surrounding architecture, relatively recently built, cannot. Walking through Obor is to see the communist housing programme in its urban context: ordinary, worn, and inhabited.</p>',

    'bucharest.politehnica.desc': '<p>Politehnica station on Bucharest\'s Metro M1 line opened in 1979 as part of the first phase of the Romanian capital\'s underground railway — a project of extraordinary ambition for a country of Romania\'s size and economic resources. The station\'s architecture follows the Soviet metro model: vaulted platforms, decorative tiling, and an attention to the aesthetic experience of underground travel that Western metro systems rarely attempted.</p><p>Stations on this section of the line were each given a distinct decorative scheme while maintaining a common formal vocabulary, creating a coherent underground environment maintained with notable care. The Romanian metro remains one of the underappreciated examples of socialist infrastructure design in Eastern Europe — a system that understood its passengers deserved beautiful spaces even underground.</p>',

    'bucharest.freepresshouse.desc': '<p>The House of the Free Press on Piața Presei Libere is one of Bucharest\'s most imposing Stalinist buildings — a 104-metre tower completed in 1956 to a design by architect Horia Maicu in conscious imitation of the Soviet High Gothic style developed in Moscow\'s Seven Sisters skyscrapers. The building was conceived as the centre of Romania\'s state press apparatus, housing newspaper editorial offices, printing facilities, and the administrative infrastructure of communist media control.</p><p>The name — House of the Free Press — was an Orwellian inversion characteristic of the period: the building housed an entirely state-controlled media system. The Aripi (Wings) monument at its base, erected in 1983, adds two wing-like bronze structures flanking the tower\'s entrance. The tower remains one of Bucharest\'s most distinctive silhouettes, visible from much of the northern city.</p>',

    'bucharest.metropcircus.desc': '<p>The Metropolitan Circus of Bucharest, completed in 1960, is a purpose-built permanent circus venue in the tradition of circular circus buildings that the Soviet cultural model promoted throughout its sphere of influence. The building\'s circular plan, with the performance ring at its centre and tiered seating rising around it, creates the spatial logic of the circus in permanent architecture.</p><p>Romanian circus had deep roots in the socialist cultural programme: public entertainment, accessible to all, brought under state management and organised to serve the mass audience. The Metropolitan Circus was the central venue for this tradition in Bucharest and remains in use as a circus venue today — one of the few purpose-built circular circus buildings in Europe still fulfilling its original function.</p>',

    'bucharest.tombunknown.desc': '<p>The Tomb of the Unknown Soldier in Carol Park has a complex history that reflects Romania\'s twentieth century in miniature. The first monument on the site was erected in 1923 to honour the dead of the First World War; it was demolished in 1958 by the communist authorities and replaced with a new monument framed to serve the ideological requirements of the socialist state.</p><p>The current monument — a flame above a stone plinth, set within the formal landscape of Carol I Park — stands at a place that has seen multiple reformulations of national memory. The park contains layers of Romanian history: a nineteenth-century royal park, communist-era modifications, and the National Pantheon nearby. The Tomb makes the park\'s commemorative character explicit, anchoring it to the dead of multiple wars and multiple regimes.</p>',

    /* ── Poland building descriptions ──────── */
    'poland.warsawuprising.desc': '<p>The Warsaw Uprising Monument, unveiled in 1989, commemorates the Warsaw Uprising of 1944 — the 63-day armed insurrection in which the Polish Home Army rose against the Nazi German occupation of Warsaw, only to be crushed in one of the most devastating battles of the Second World War. Approximately 200,000 Polish civilians died. The city was subsequently razed to the ground by German forces.</p><p>The sculpture by Wincenty Kućma and architect Jacek Budyn depicts two groups of fighters: one surging upward in attack from the surface, the other descending into the sewers through which the insurgents escaped and retreated. The monument was unveiled on the 45th anniversary of the uprising, a date that coincided with the end of communist rule in Poland. The timing was not accidental: the uprising had been politically awkward during the communist period, as the Armia Krajowa was associated with the London exile government rather than the Soviet-backed movement.</p>',

    'poland.facultyelectronics.desc': '<p>The Faculty of Electronics and Information Technology building at Warsaw University of Technology is one of the most distinctive examples of late communist-era Brutalism in Warsaw — a heavy, assertive structure whose exposed concrete surfaces and bold geometric massing make it immediately legible as a product of the architectural culture of the 1970s and 1980s. The Warsaw University of Technology campus accumulated several buildings in this idiom during that period, each asserting the importance of technical and scientific education in the late communist state.</p><p>The building belongs to the tradition of Polish Brutalism given considerable latitude during the Gierek era — a period in the 1970s when Poland borrowed heavily from the West and invested in prestige construction. University buildings, cultural centres, and public facilities from this period often pushed architectural form further than their Soviet counterparts, reflecting the relative openness of Polish cultural policy.</p>',

    'poland.smolna8.desc': '<p>Smolna 8 is a modernist building in central Warsaw, part of the postwar urban reconstruction that reshaped the Polish capital after its near-total destruction during the Second World War. Warsaw was rebuilt from rubble beginning in the late 1940s under communist direction, who used reconstruction as an opportunity to reorganise the city according to socialist urban planning principles — wider boulevards, collective housing, monumental public buildings, and a deliberate erasure of the bourgeois urban fabric that had preceded the war.</p><p>The building\'s modernist character reflects the architectural transition that took place in Poland in the late 1950s, as the Stalin-era Socialist Realist style was officially abandoned in favour of a more functionalist modernism. Buildings from this moment often combine traces of the earlier monumental approach with the cleaner lines of international modernism — an architectural seam visible across Warsaw wherever the reconstruction era left its mark.</p>',

    'poland.palaceculture.desc': '<p>The Palace of Culture and Science (Pałac Kultury i Nauki) is the tallest building in Poland — a 231-metre Soviet skyscraper designed by the Soviet architect Lev Rudnev and constructed between 1952 and 1955 as a gift from the Soviet Union to the Polish people. It is one of the seven Stalinist skyscrapers known as the Seven Sisters, of which six were built in Moscow; the Warsaw Palace is the only one built outside the Soviet Union.</p><p>The building was deeply controversial from the start. The Poles were given a gift they had not asked for, constructed in a style that made its origins unmistakably Soviet, on a site in the centre of a city that had just been destroyed. There were calls to demolish it after 1989, but it survived — too large and too embedded in Warsaw\'s skyline to remove. It now houses cinemas, theatres, universities, and an observation deck, and has been grudgingly adopted as part of the city\'s identity.</p>',

    'poland.ochota.desc': '<p>Warszawa Ochota Station is a suburban railway station on the Warsaw commuter rail network, serving the Ochota district. The station building, a mid-century modernist structure, is a product of the postwar reconstruction of Warsaw\'s transport infrastructure — a period when the city was being systematically rebuilt under communist urban planning, with railways and public transport given priority as the arteries of a workers\' city.</p><p>The station\'s architecture is functional and precise in its unpretentiousness: exposed concrete, clean geometries, a building that makes no claim to grandeur but succeeds in its primary purpose. This type of transport infrastructure — modest, well-designed, built to serve everyday needs — represents one of the more durable achievements of communist-era urban planning in Poland.</p>',

    'poland.sovietcemetery.desc': '<p>The Soviet Military Cemetery in Warsaw is the burial site of over 21,000 Soviet soldiers who died during the liberation of Warsaw from German occupation in January 1945. The Mausoleum Park at its centre is a formal ceremonial structure in the tradition of Soviet commemorative architecture: a processional space with a central mausoleum, flanked by rows of graves marked with red stars, the whole composition organised around the rituals of official grief and collective memory.</p><p>The cemetery occupies a politically complex position in contemporary Polish culture. The Soviet soldiers buried here did die in the liberation of Warsaw — but the question of whether the Soviet arrival represented liberation or the beginning of a new occupation has shaped the way Poles remember this period. The cemetery continues to be maintained and officially recognised, though the meanings attached to it have shifted substantially since the end of communist rule in 1989.</p>',

    'poland.pomnik.desc': '<p>The Monument to the Constitution of May 3rd in Wroclaw commemorates the Polish-Lithuanian Commonwealth Constitution of May 3, 1791 — one of the first modern constitutions in the world, adopted four years before the French Directorial Constitution. The monument honours a foundational moment in Polish legal and political history, and by extension the tradition of Polish constitutional government.</p><p>The Constitution of May 3rd was also the pretext for the Second Partition of Poland in 1793 — the neighbouring powers used the constitutional reform as justification for territorial intervention, and within a few years Poland had ceased to exist as an independent state. Wroclaw itself was a German city (Breslau) until 1945, when its German population was expelled and replaced with Poles. The decision to erect this monument here connects the city to a Polish national identity that has its own layers of historical complexity.</p>',

    'poland.audytorium.desc': '<p>The Audytorium Wydziału Chemii at the University of Wroclaw is a striking example of late modernist academic architecture in Poland — a building whose exterior geometry breaks from the flat-faced functionalism of most university construction of its era into something more sculptural and self-conscious. The auditorium\'s bold massing and textured concrete surfaces situate it in the tradition of Polish Brutalism that reached its high point in the 1970s.</p><p>Wroclaw\'s university underwent significant expansion during the communist period as the city was rebuilt and repopulated after 1945. The chemistry faculty building represents the ambition of that expansion: a purpose-built lecture and research facility designed to serve a university in a city entirely rebuilt from scratch in the postwar period. Its architectural confidence reflects the relative latitude that Polish architects enjoyed during the 1970s under the Gierek regime\'s more internationally-oriented cultural policy.</p>',

    'poland.manhattan.desc': '<p>Wrocławski Manhattan — Wroclaw\'s Manhattan — is a cluster of tall residential tower blocks built in the 1970s on Świdnicka Street, one of the city\'s main thoroughfares. The nickname was given by locals who saw in the cluster of towers rising above the low historic fabric a skyline that suggested, at least in silhouette, the towers of New York. The irony was not lost on the residents of a city in communist Poland: this was their Manhattan, built in prefabricated concrete panels under a system that officially regarded capitalism as the enemy.</p><p>What distinguishes the Wroclaw Manhattan from typical panel housing estates is its location: instead of being placed in a peripheral new district, the towers were inserted into the historic centre, creating a juxtaposition of eras and scales that remains one of the most striking urban moments in the city. The towers have been partially renovated since 1989 but retain their essential character: a communist-era skyline that the city has made its own.</p>',
  },

  /* ═══════════════════════════════════════════════════════════
     TRADITIONAL CHINESE
  ══════════════════════════════════════════════════════════════ */
  zh: {
    /* ── Nav ─────────────────────────────── */
    'nav.about':          '關於我',
    'nav.belgrade':       '貝爾格勒',
    'nav.berlin':         '柏林',
    'nav.london':         '倫敦',
    'nav.chisinau':       '基希訥烏',
    'nav.bucharest':      '布加勒斯特',
    'nav.tiraspol':       '德涅斯特河沿岸',
    'nav.poland':         '波蘭',
    'nav.support':        '支持',
    'nav.contact':        '聯絡',
    'nav.region.western': '西歐',
    'nav.region.balkans': '巴爾幹',
    'nav.region.central': '中歐',
    'nav.region.eastern': '東歐',

    /* ── Back links ──────────────────────── */
    'back.belgrade': '← 貝爾格勒建築',
    'back.berlin':   '← 柏林地點',
    'back.london':   '← 倫敦建築',
    'back.chisinau': '← 基希訥烏建築',
    'back.bucharest':'← 布加勒斯特建築',
    'back.tiraspol': '← 德涅斯特河沿岸地點',
    'back.poland':   '← 波蘭地點',

    /* ── Section headings ────────────────── */
    'section.gallery':   '相簿',
    'section.video':     '影片',
    'section.cities':    '城市',
    'section.buildings': '建築',

    /* ── Meta labels ─────────────────────── */
    'meta.architect':  '建築師',
    'meta.architects': '建築師',
    'meta.completed':  '建成年份',
    'meta.function':   '用途',
    'meta.location':   '地點',
    'meta.style':      '風格',
    'meta.photos':     '照片',
    'meta.period':     '年代',
    'meta.context':    '背景',
    'meta.type':       '類型',
    'meta.active':     '運作期間',

    /* ── Index / hero ────────────────────── */
    'home.hero.label':          '攝影計劃',
    'home.hero.sub':            'HWC Travel · 粗野主義 · 社會主義現代主義 · 貝爾格勒 · 柏林 · 倫敦 · 基希訥烏 · 布加勒斯特 · 蒂拉斯波爾 · 波蘭',
    'home.next.label':          '下一段旅程',
    'home.next.cta':            '支持下一趟旅程 →',
    'home.city.belgrade.sub':   '塞爾維亞',
    'home.city.berlin.sub':     '德國',
    'home.city.london.sub':     '英國',
    'home.city.chisinau.sub':   '摩爾多瓦',
    'home.city.bucharest.sub':  '羅馬尼亞',
    'home.city.tiraspol.sub':   '德涅斯特河沿岸',
    'home.city.poland.sub':     '波蘭',

    /* ── City pages ──────────────────────── */
    'belgrade.hero.label': '塞爾維亞 · 社會主義南斯拉夫',
    'belgrade.hero.sub':   '粗野主義建築 · 1960–1985',
    'berlin.hero.label':   '德國 · 東德現代主義與冷戰',
    'berlin.hero.sub':     '社會主義建築 · 1950–1990 · 東西柏林',
    'london.hero.label':   '英國 · 英式粗野主義',
    'london.hero.sub':     '粗野主義建築 · 1950–1980',
    'chisinau.hero.label': '摩爾多瓦 · 蘇聯現代主義',
    'chisinau.hero.sub':   '社會主義建築 · 1950–1990',
    'bucharest.hero.label':'羅馬尼亞 · 齊奧塞斯庫時代現代主義',
    'bucharest.hero.sub':  '社會主義建築 · 1950–1989',
    'tiraspol.hero.label': '德涅斯特河沿岸 · 最後的蘇聯國度',
    'tiraspol.hero.sub':   '蘇聯建築 · 時間靜止之地',
    'poland.hero.label':   '波蘭 · 華沙與弗羅茨瓦夫',
    'poland.hero.sub':     '粗野主義與共產時代建築 · 1950–1989',

    /* ── About ───────────────────────────── */
    'about.label':          '關於我',
    'about.title':          '記錄<br>混凝土<br>烏托邦',
    'about.p1':             '旅遊內容創作者，以中文為主要創作語言，現居英國。長期關注東歐、巴爾幹半島、前南斯拉夫地區、蘇聯建築、粗野主義、城市文化及歷史空間。',
    'about.p2':             '用照片和文字記錄那些少有人注意、卻蘊含巨大力量的地方。如果你也熱愛建築、城市漫遊、歷史，以及偏離主流的旅行，歡迎追蹤。',
    'about.p3':             '所有照片均以 iPhone 拍攝。不完美的鏡頭、平淡的陰天光線、雨水——這些都是特質，不是缺陷。粗野主義建築在灰色天空下永遠最美。',
    'about.stat.buildings': '建築',
    'about.stat.cities':    '城市',
    'about.stat.countries': '國家',
    'about.supportLink':    '支持我的創作 →',

    /* ── Support ─────────────────────────── */
    'support.label':    '支持我的創作',
    'support.title':    '支持<br>下一趟<br>旅程',
    'support.p1':       '這個項目完全自費。這裡的每一棟建築，都是靠步行、火車或巴士抵達——用 iPhone 拍攝，深夜在酒店房間裡整理。沒有經紀公司，沒有媒體行程，沒有贊助商。只有對那些被大多數人略過的地方，抱有的一份好奇。',
    'support.p2':       '如果這些作品對你有價值——無論你是建築愛好者、旅行者，還是單純喜歡看粗野主義混凝土的人——你可以支持下一趟旅程。每一份贊助都直接用於旅費：火車票、住宿，以及在值得記錄的城市裡多停留的時間。',
    'support.p3':       '<strong>下一批正在規劃的目的地：</strong>斯科普里、薩拉熱窩、普里什蒂納、索菲亞。更多南斯拉夫現代主義。更多被遺忘的地標。更多照片。',
    'support.opt1.label': 'Ko-fi',
    'support.opt1.text':  '透過 Ko-fi 進行一次性或定期贊助，無需帳戶，任何金額都有幫助。',
    'support.opt1.btn':   '請我喝杯咖啡 →',
    'support.opt2.label': 'Instagram',
    'support.opt2.text':  '追蹤並分享這些作品。曝光不需要成本，卻能讓更多人找到這些地方。',
    'support.opt3.label': 'TikTok',
    'support.opt3.text':  '短片形式的城市探索與建築記錄——追蹤以獲取同一趟旅程的影片內容。',
    'support.opt4.label': '電郵',
    'support.opt4.text':  '如有合作、授權或其他事宜，歡迎直接聯繫。',
    'support.opt4.btn':   '聯絡我 →',

    /* ── Belgrade building descriptions ─── */
    'belgrade.genex.desc': '<p>西城門——正式名稱為貝爾格勒西大門——是南斯拉夫晚期建築中最震撼的作品之一，亦是新貝爾格勒天際線的標誌性地標。由米哈伊洛·米特羅維奇設計，建於1980年，由兩座高低不等的住宅與酒店塔樓組成，頂部以旋轉餐廳相連，形成一道宏偉的弧形門廊，在數公里外清晰可見。</p><p>建築的結構邏輯清晰震撼：連接雙塔的橋體承載荷重，亦製造了張力。新貝爾格勒是它的城市背景——一座在二戰後填海造陸、從零開始建設的社會主義規劃城市，承載著新南斯拉夫的宏大抱負。而這座塔樓，正是這座城市最壯闊的姿態：不僅是一棟建築，更是一道門檻，宣告著你正踏入一個從無到有、滿懷理想的地方。</p>',

    'belgrade.muskatirovic.desc': '<p>米蘭·穆什卡提羅維奇體育中心是南斯拉夫現代主義的精緻之作——貝爾格勒市中心的游泳及體育綜合設施，其裸露的混凝土結構與稜角分明的體量，鮮明地呈現了1970年代粗野主義的美學特質。建築外牆以生混凝土構成，開口深陷，屋頂與立面的幾何形態忠實呼應內部的功能邏輯。</p><p>中心以一位南斯拉夫體育人物命名，象徵著社會主義國家對公共體育與身體文化的投入。全南斯拉夫各城市均建有此類設施，以展現集體健康與公民精神——由公共資金興建，為公眾設計，在材料上追求誠實。混凝土歷經五十年的風化，反而愈見深沉的性格。</p>',

    'belgrade.toblerone.desc': '<p>卡拉布爾瑪住宅大樓——因其獨特的三角形截面而俗稱「三角朱古力大樓」——是南斯拉夫集體住宅中形式最富創意的作品之一。立面的斜切輪廓形成鋸齒狀的天際線，從街道望去如連綿的山脊，每戶陽台以對角節奏貫穿建築全長，構成一種輕盈的韻律。</p><p>這個暱稱反映了貝爾格勒市民對社會主義時代建築的那份親切感——以人性化的名字為宏偉的建築物賦予地方歸屬感，讓冷冰冰的混凝土成為自己的。這棟樓建於南斯拉夫住宅建設高峰時期的卡拉布爾瑪住宅區，代表著當時的社會主義城市規劃在實用功能之外，也嘗試追求真正的形式創意。</p>',

    'belgrade.eastern.desc': '<p>東城門（Istočna kapija Beograda）是一對矗立於E75高速公路兩側的住宅摩天樓，以象徵門戶的姿態迎接從東部進入貝爾格勒的車輛。由米哈伊洛·米特羅維奇設計，建於1977年，兩座塔樓各高26層，立面以粗獷的橫向混凝土帶與玻璃相互交替，形成在高速公路上遠遠即可看到的韻律感。</p><p>城市入口的概念——標誌進入城市領域的紀念性門廊——古已有之。米特羅維奇所理解的，是高速公路已成為通往貝爾格勒的新路徑、新儀式路線，而建築依然可以以宏大的姿態回應這條路線。兩座塔樓既是標誌，也是象徵：告訴你，你正在抵達一個認真對待自身存在的地方。</p>',

    'belgrade.block2223.desc': '<p>22至23街區是新貝爾格勒廣闊住宅網格的一部分——這座社會主義規劃城市建於薩瓦河對岸、舊貝爾格勒對面填海而成的土地上。「街區」並非單棟建築，而是城市單元：以數字命名的整個社區，各自包含公寓塔樓、綠地、學校，以及根據當代現代主義規劃原則設計的商業裙樓。</p><p>新貝爾格勒被構想為一塊白板，一個無需受制於既有城市肌理、可以從頭打造理想社會主義城市的機會。成果既宏偉又矛盾：塔樓之間本應成為民主公園的廣闊空間，有時卻淪為難以激活的虛空；大規模重複的混凝土既令人嘆服，又帶來一種疏離感。今日漫步其間，是置身於某一特定意識形態時刻的殘留之中——那個時刻嚴肅地對待密度與平等，即便並非總能實現。</p>',

    'belgrade.block6263.desc': '<p>62至63街區位於新貝爾格勒南部，是定義這整個區域的編號網格城市主義的一部分。如同整個新貝爾格勒的其他街區，這裡住著數千名居民，生活在開闊的綠地與混凝土塔樓構成的景觀之中——一種同時承諾城市生活、又似乎始終保持距離的空間。</p><p>新貝爾格勒的街區之所以值得凝視，不在於任何一棟具體的建築，而在於整體：重複、尺度、規劃邏輯的視覺化呈現。這套編號系統本身就是一種建築——一種行政命名，以坐標邏輯取代鄰里身份。然而，貝爾格勒人普遍對自己的街區有著強烈的認同感，「你住哪裡？」往往意味著「你住第幾街區？」——這說明，即便在最理性化的建成環境中，身份認同依然能夠生存和演化。</p>',

    'belgrade.palace.desc': '<p>位於新貝爾格勒的塞爾維亞宮殿是戰後南斯拉夫最重要的國家建築之一——一座龐大的政府綜合設施，容納聯邦各部委與國家機關，在這座城市尚在誕生之際便已成為新貝爾格勒版圖的核心。建於1961年，坐落於新貝爾格勒幾條主要軸線的交匯點，以其水平延伸的石材與玻璃體量，統領著周圍平坦的城市景觀。</p><p>其建築語言游走於社會主義古典主義與早期現代主義之間：前者的規模與對稱，後者的材料與開窗方式。這是一棟需要投射權威與永恆感的建築，而它做到了——石材飾面、綿長的水平線條、宏大的比例，無不訴說著一個打算建造可以延續數百年之物的國家的決心。委託建造它的南斯拉夫已不復存在；而建築依然屹立。</p>',

    'belgrade.siv3.desc': '<p>SIV 3——聯邦執行委員會建築群的第三棟樓——是新貝爾格勒形式上最引人入勝的行政建築之一。一條修長的板式樓體架高於底層柱廊之上，呈現出一道連續的水平立面，預製混凝土板與深陷的窗洞構成一層不間斷的灰色表面。</p><p>聯邦執行委員會建築群是南斯拉夫社會主義政府運作的核心——這個國家從這裡被管理。SIV 3的建築體現了南斯拉夫自主管理模式的技術官僚自信：理性、有序、純粹。底層柱廊將建築從地面托起，這一姿態源自柯比意，卻已被完全內化為一種本地表達。今日，這棟樓容納著塞爾維亞共和國的多個部門，用途已變，但存在感從未改變。</p>',

    'belgrade.cityhall.desc': '<p>新貝爾格勒市政廳是該區的市政行政中心——一棟緊湊的現代主義建築，在這座規劃城市以住宅為主的城市肌理中，扮演著錨定地方政府的角色。其建築語言與1970年代南斯拉夫市政建築的典型特徵一脈相承：混凝土、直接、以功能而非宏偉為尺度。</p><p>新貝爾格勒在行政上始終獨立於薩瓦河對岸的舊貝爾格勒。市政廳賦予這座城市一個公民焦點——一個讓抽象的編號街區網格得以轉化為地方治理與社區生活的場所。相對於其所服務的龐大城區，這棟建築的謙遜體現了南斯拉夫去中心化行政的理念：治理貼近人民，建築不令人敬畏。</p>',

    'belgrade.sava.desc': '<p>薩瓦中心是貝爾格勒最重要的會議與文化設施之一——一座坐落於新貝爾格勒薩瓦河畔的大型現代主義建築群，建造之初是為了在南斯拉夫作為不結盟運動重要成員的時期，承辦國際會議、展覽及演出活動。</p><p>由斯托揚·馬克西莫維奇設計，建於1979年，將會議廳、酒店及文化空間整合為一座緊鄰河岸的大體量建築。其建築風格帶有鮮明的南斯拉夫色彩：宏大、自信、技術精湛，完全不受制於華沙條約國家那種意識形態上的束縛。南斯拉夫的不結盟地位賦予了建築師自由地借鑒任何傳統的空間，而薩瓦中心正是這種自由的體現——這棟建築可以歸屬於那個時代任何一個充滿自信的現代主義傳統。</p>',

    'belgrade.urban.desc': '<p>貝爾格勒城市規劃研究所是規劃新貝爾格勒的機構——一個奇妙的遞歸情境：規劃者工作的建築，坐落於他們所規劃的城市之中。研究所的建築本身是新貝爾格勒肌理中的一棟現代主義板樓，是繪出城市宏圖的人們的行政棲居之所。</p><p>南斯拉夫的城市規劃是一門嚴肅的學科，獲得國家支持並享有充裕的資源。這些研究所不僅設計個別建築，更規劃整個區域、從無到有的城市，以及計劃經濟的基礎設施。其建築語言反映其功能：有序、系統、理性。貝爾格勒城市規劃研究所本身便是它所代表的規劃文化的產物——體量適中、建造嚴謹、毫無疑問地屬於那個時代。</p>',

    /* ── Berlin building descriptions ────── */
    'berlin.alex.desc': '<p>亞歷山大廣場是東柏林的社會主義展示舞台——東德對現代社會主義城市應有面貌的回答。這片廣闊的廣場四周環繞著預製混凝土板樓，在戰後廢墟上依據社會主義現代主義原則重建：寬闊的步行空間、垂直的視覺焦點，以及一種旨在彰顯集體抱負而非個體體驗的宏大尺度。</p><p>電視塔（Fernsehturm）於1969年建成，高聳368米，至今仍是德國最高的建築。這座塔樓由東德國家作為社會主義技術成就的象徵而建，刻意設計成從西柏林也能看見——一種挑釁，也是一種宣言。圍繞其周，由赫爾曼·亨澤爾曼設計、帶有環形壁畫的教師之家，以及旅行者之家和世界時鐘，共同構成了一組東德公民雄心的建築群落。今日漫步亞歷山大廣場，是在穿越一個已不復存在的國家所留下的混凝土遺跡。</p>',

    'berlin.cafemoskau.desc': '<p>卡爾-馬克思大道上的莫斯科咖啡館是東德現代主義保存最完好的傑作之一——一棟於1964年開幕、作為蘇德友誼與社會主義國際主義象徵而建的專用餐廳及文化空間。由約瑟夫·凱澤設計，建築獨特的低矮水平形態、深挑的屋篷，以及立面上那顆標誌性的巨型地球，令人一眼難忘——這棟建築深知自己的角色是社會主義街道生活的背景板，並將這一角色演繹得淋漓盡致。</p><p>卡爾-馬克思大道本身是東柏林的展示大道——一條宏偉的軸線，兩側先是史達林式的婚禮蛋糕建築，再往東則是東德晚期的現代主義社會住宅街區。莫斯科咖啡館在其所在的路段扮演著聚集點的角色：集體消費與公共文化的場所，展示的成分不亞於飲食。如今改作夜總會與活動場地，這裡以典型的東德認真態度繼續承載著它的歷史。</p>',

    'berlin.jewishmuseum.desc': '<p>由丹尼爾·里伯斯金設計、建於1999年的柏林猶太博物館，是二十世紀最後十年最具張力的建築之一。鋅板包覆的外牆呈鋸齒狀、閃電形，斜切的窗洞與銳角從每個角度都呈現不同面貌——根據里伯斯金的說法，建築平面源自一顆扭曲的大衛之星，以及柏林猶太人遇害或被迫流亡的住址。外表從不輕易透露自身，它要求你用一種不同的眼光去看它。</p><p>內部那些「虛空」——從地下室直達屋頂、以生混凝土圍合的空間，任何人都無法進入——是最震撼的建築語言。它們所代表的，是無法展示、無法取代、已被摧毀的一切。放逐花園、大屠殺塔、各軸線上傾斜的地面：整棟建築以空間製造迷失感、不完整感，那種歷史無法被完整收容的感覺。這是一棟深刻理解博物館使命並將其推向極限的建築。</p>',

    'berlin.wallmemorial.desc': '<p>柏林圍牆紀念館（貝爾瑙爾大街）的「記憶之窗」，是一組將試圖越牆逃亡者遺照嵌入鏽色鋼板框格中的裝置——每張面孔透過一個方形開口清晰可見。圍牆曾沿貝爾瑙爾大街穿行而過：街道本身屬於西柏林，街道一側的公寓樓屬於東柏林，1961年8月的數日之間，曾有人在此從窗口跳下，以求逃亡。</p><p>紀念館保留了圍牆死亡地帶的完整空間現實——內牆、控制帶、瞭望塔、外牆——而「記憶之窗」則將一張張臉孔置於這片建築之前。這是一種反紀念碑的姿態：在圍牆建造者以宏大尺度將個體生命化為抽象的地方，紀念館堅持具體性。每張臉，都是一個人。鏽鐵與鋼材、工業的材料語言，使用的是圍牆的語言，卻服務於截然不同的目的。</p>',

    'berlin.sovietmemorial.desc': '<p>蒂爾加滕的蘇聯戰爭紀念碑建於1945年——二戰結束後數月之內，由蘇聯軍隊使用拆除帝國總理府所得的大理石建造而成。中央的青銅蘇聯士兵雕像矗立於弧形大理石廊柱之上，兩側各停放一輛率先進入柏林的T-34坦克。這座紀念碑，從字面意義上說，是以納粹國家的廢墟、用摧毀它的工具所建造的。</p><p>冷戰期間，這座紀念碑坐落於西柏林境內——一個奇異的存在，蘇聯士兵在西方領土的中心守護著這座蘇聯紀念碑。紅軍士兵在這座城市分裂的整個期間一直駐守於此，這種詭異而緊張的安排一直持續到1990年。紀念碑地下長眠著2500名蘇聯士兵。它建於蘇聯軍事力量最為鼎盛的時刻，使用的材料來自他們剛剛擊敗的政權最有力的象徵。其建造材料的政治分量，與它所代表的意義，無法分割。</p>',

    'berlin.stagnes.desc': '<p>克羅伊茨貝格的聖阿格尼絲教堂是歐洲最出色的粗野主義教堂之一——一座整體的混凝土立方體，附設圓柱形鐘樓，由維爾納·迪特曼設計，於1967年祝聖啟用。外觀刻意嚴峻：生混凝土、最少的開窗、一種令人聯想到更古老時代的沉穩體量，在其所在的城市街區中以要塞或碉堡的姿態屹立——這種聯想大概是刻意為之，戰後德國天主教在一座滿目瘡痍的城市中以重建所用的材料重建自身的存在。</p><p>內部以截然不同的方式化解了外觀的嚴肅：混凝土牆壁在漫射光中微微發亮，比例慷慨，裝飾的缺席將注意力集中在空間本身。2012年，教區合併後，柯尼希藝廊將其改建為藝廊與藝術空間——他們正確地認識到，這裡給了他們柏林比例最完美的現代主義空間之一。這次改造是近年歐洲建築中對粗野主義神聖空間最成功的再利用案例之一。</p>',

    'berlin.berlinwall.desc': '<p>柏林圍牆從任何傳統意義上來說都不是建築，但作為一種建成形式，它對這座城市的塑造比任何單棟建築都要根本。1961年8月12至13日，東德軍隊奉蘇聯之命在一夜之間封鎖了東西柏林之間的邊界——自1949年以來，已有超過350萬東德人取道柏林出走西方，而圍牆終止了這一切。</p><p>1989年圍牆倒塌時，殘存的是雙層結構與其間的死亡地帶——瞭望塔、巡邏通道、絆線、反車輛壕溝。至少140人在試圖越境時遇難。今日倖存的那些牆段，是外牆的片段——面向西柏林、可以隨意塗鴉的那一側。面向東德人、觸碰即死的內牆，幾乎已蕩然無存。殘存的混凝土，只有在事後回望時，才成為建築——一種如今承載著整個冷戰重量的材料。</p>',

    'berlin.charlie.desc': '<p>查理檢查站是冷戰期間東西柏林之間最著名的通行點——唯一開放給盟軍軍事人員、外國外交官及西方外國人使用的口岸。名稱來自北約音標字母：阿爾法是第一個檢查站，布拉沃是第二個，查理是第三個。1961年10月，就在圍牆建立後數週，美蘇坦克在此對峙長達十六小時——這是自韓戰以來兩個超級大國最接近直接軍事衝突的時刻。</p><p>今日矗立於此的崗哨是複製品——原版於1990年圍牆失去意義後已被移除。查理檢查站令人不安之處，恰恰在於這個複製：周圍區域已成旅遊基礎設施，莊嚴已被穿著戲服的演員和高價的博物館所取代。真正的紀念重量在別處——在記錄中心、在附近標示圍牆走線的街道路牌之中。然而這個地點的歷史終究無法被完全驅散：這裡，曾是鐵幕最可見、最戲劇性、最多人拍照的地址。</p>',

    'berlin.spitteleck.desc': '<p>施皮特爾馬克廣場的施皮特爾角大樓是東柏林一棟弧形商業及辦公建築——一座預製混凝土建築，其獨特的圓弧形態回應了廣場角地的基地條件。東德的板式建築體系（Plattenbau，預製板材建造系統）通常與單調的住宅街區相關聯，但在這裡，它呈現出一種城市向度：一道重複的混凝土板材曲面包裹著街角，呼應街道幾何，同時完全在工業預製的邏輯之內。</p><p>施皮特爾角大樓這類建築是東德建築中最容易被忽視的部分——不是亞歷山大廣場或卡爾-馬克思大道那樣的旗艦展示項目，而是社會主義城市日常商業與行政肌理的組成部分。隨著柏林持續重新開發，這類建築愈來愈稀少，其混凝土與鋁製系統已不再符合維護成本。每一棟消失的建築，都帶走了這座分裂城市一片空間記憶。</p>',

    'berlin.brandgate.desc': '<p>勃蘭登堡門是柏林昔日十八道城門中唯一倖存的一座，建成於1791年，其砂岩柱廊承載著兩個半世紀的德國歷史。由卡爾·戈特哈德·朗漢斯以多立克柱式建造，以和平為象徵，此後卻先後成為普魯士軍事凱旋的通道、納粹集會的背景，以及冷戰期間德國分裂的標誌性符號。</p><p>從1961年到1989年的28年間，城門矗立於兩個柏林之間的死亡地帶——兩側皆無法接近，卻兩側皆清晰可見。這是所有人想到柏林時眼前浮現的畫面：一道古典拱門，孤零零地立在混凝土與鐵絲網圍成的無人地帶。1989年11月柏林圍牆倒塌，兩側湧來的人群做的第一件事，就是爬上城門。那一刻的照片——人們站在柱廊上、站在勝利女神像上，城門從混凝土框架中重獲自由——至今仍是二十世紀終結最具代表性的歷史影像之一。</p>',

    /* ── London building descriptions ────── */
    'london.barbican.desc': '<p>巴比肯是歐洲最大的粗野主義建築群——一座自給自足的住宅城市，擁有2000套公寓、一個音樂廳、兩座劇院、三家電影院、兩個藝廊、一個溫室、一所學校及一個觀賞湖。由錢伯林、鮑威爾與邦事務所設計，建於1965年至1982年間，其構想源自對二戰閃電戰破壞的回應：在倫敦金融城一片戰時廢墟上，從頭建造一個完整的城市社區。</p><p>建築語言始終如一——研磨混凝土遍及每個角落，相同的骨料、相同的質感、相同的色調。架高的步行天橋、水上露台、圓柱形塔樓，以及住宅與文化功能的高度交融——一切都旨在證明密度與城市生活並非不相容。在數十年的批評與冷落之後，巴比肯如今已被列為二級保護建築，成為倫敦最受追捧的居住地址之一。</p>',

    'london.trellick.desc': '<p>崔利克塔是英國最受讚譽——也曾最受詬病——的社會住宅之一。由匈牙利裔建築師埃爾諾·戈德芬格設計，樓高98米，矗立於北肯辛頓，一座獨立的服務塔以每隔三層的封閉橋廊與主體相連。將電梯井及服務設施獨立設置為一個垂直構件，既是結構上的理性選擇，也是建築上的大膽之舉——兩塔之間的間距，成為這棟建築最令人印象深刻的細節。</p><p>作為肯辛頓與切爾西倫敦自治市的公共住宅而建，崔利克塔在1970至80年代聲名狼藉——犯罪、疏於維護，以及戈德芬格原本寄望能悉心照料的管理體制的失敗。如今它已被列為二級保護建築，許多住戶以業主身份居住於此，完成了全面的聲譽修復。曾被歸咎於社會問題的粗野主義，如今已成為一種資產。</p>',

    'london.nationaltheatre.desc': '<p>南岸的國家劇院是丹尼斯·拉斯頓最複雜也最受爭議的作品。奧利弗、萊特頓與多福曼三個劇場在拉斯頓所稱之「地層」的構圖中相互疊置交織——一系列向泰晤士河傾瀉而下的水平露台層疊而成。建築的設計理念是成為泰晤士河岸的自然延伸，其混凝土層次從水邊逐步升起。</p><p>查爾斯王子曾著名地形容它是「在倫敦中心建一座核電廠的方式」。這棟建築於1994年被列為二級*保護建築。其面向公眾開放的露台——無論是否持票，任何人皆可進入——體現了一種特定的公民理想：一棟真正被使用、被佔據、被磨損的建築。混凝土歷經四十年的風化，愈見美好。</p>',

    'london.hayward.desc': '<p>海沃德藝廊位於南岸中心建築群的上層，毗鄰皇家節日音樂廳。由大倫敦議會建築師部門設計，建於1968年，從一開始便是南岸建築中最激進的粗野主義代表——一系列低矮、厚重、頂部採光的展覽空間，以坡道和階梯相連，並在露台上架設著棱錐形天窗和著名的霓虹雕塑塔。</p><p>藝廊的外部幾何——稜角分明、相互咬合、對傳統美學完全漠然——使其成為反粗野主義批評的眾矢之的。但在內部，相互交錯的展覽空間序列、透過混凝土格板過濾的自然光，以及建築材料的誠實性，共同創造了倫敦最具建築趣味的藝廊環境之一。</p>',

    'london.alexandra.desc': '<p>亞歷山德拉路社區（又稱亞歷山德拉與安斯沃思社區）是尼夫·布朗的傑作：一個坐落於卡姆登的低層高密度社會住宅項目，兩列長形露台向一個公園逐層退台，共容納520套住宅。每戶皆有私人戶外空間，地面層完全步行化。布朗的抱負，是在不依賴垂直生活孤立感的前提下，實現塔樓式建築的密度。</p><p>這個項目在細節上的一致性令人嘆服：全程相同的木模板紋混凝土，相同的截面不斷重複與變奏，露台在地面下方穿越的幹線鐵路上方橋接跨越。自1993年被評定為二級*保護建築，英國建築最高榮譽斯特靈獎評審委員會於2018年向尼夫·布朗頒發終身成就特別獎。這是戰後英國建築中最偉大的「未建成城市」之一。</p>',

    'london.brunswick.desc': '<p>布倫瑞克中心是倫敦最獨特的住宅項目之一：兩座巨構建築街區面對面矗立，中間是一條步行購物街，兩側截面如同展開的書頁層層退台，各層住宅的露台俯瞰著下方的拱廊。帕特里克·霍奇金森將這個設計作為對當時點式塔樓主流的直接挑戰——以截面而非高度來達到密度。</p><p>這個中心在多年談判之後以一種妥協的形式建成，混凝土原本保持裸露，呈現出數十年照片中熟悉的原始灰色外觀。2006年的翻新工程將混凝土塗成奶白色，在業界引發截然不同的評價。然而這個空間概念本身——有住宅俯瞰的有遮蔽步行街道——無論顏色如何，依然有力量。</p>',

    'london.cottongarden.desc': '<p>西敏的棉花花園社區是一個低層住宅項目，展示了倫敦粗野主義的另一個面向：有別於塔樓的垂直戲劇性，這裡以緊湊的複式公寓和單元在城市街區中密集交錯排列。建築語言以裸露的混凝土與磚材呈現出與大型項目相同的材料誠實性，但以一種融入周邊街景的人性尺度呈現。</p><p>這個社區代表著英國社會住宅中一個被遺忘的面向——在更具視覺張力的塔樓之外，這種模式或許才是更成功的高密度城市生活模型。街區間的戶外空間、共用的動線，以及多樣化的戶型，訴說著一種將住宅理解為社區基礎設施的規劃文化。</p>',

    'london.lambeth.desc': '<p>蘭貝斯塔——南倫敦的一棟住宅大樓——代表著1960至70年代定義英國公共住宅的大規模建設浪潮。塔樓矗立於幹道交匯處，混凝土外牆歷經數十年的風化，窗格以規整的網格排列，偶爾被居住的不規則狀態所打斷。</p><p>這類建築在戰後英國被建造了數以千計。它們同時是英國歷史上最宏大的社會工程，以及在缺乏維護預算與管理的情況下，帶來巨大人間困境的場所。這張照片所捕捉的，是一棟在這兩種解讀之間暫時靜止的建築。</p>',

    'london.moj.desc': '<p>位於西敏佩蒂弗蘭斯的司法部大樓是一棟大型政府建築群，集中體現了戰後英國國家的機構性粗野主義：修長、水平、以功能為先，完全不在意讓人討喜。其混凝土與玻璃立面以直白的姿態面對周邊街道，窗格與設備元素以那個時代特有的直接性加以呈現。</p><p>這類政府建築——為容納龐大官僚體制、高效處理人員與文書工作、追求持久而設計——代表著一種此後已然消退的公民自信。這種材料語言維護成本高昂，也容易引發反感；而建築往往比它所展示的機構活得更長。</p>',

    'london.soas.desc': '<p>索亞斯大學（亞非學院）的桑哈爾頓街建築是布盧姆斯伯里校園群的一部分，毗鄰拉斯頓在附近設計的教育學院。這是一棟混凝土與玻璃的學術建築，延續了拉斯頓其他機構建築的結構誠實性：框架外露、樓板可讀、材料不加修飾。</p><p>這類學術建築定義了1960至70年代英國大學的擴張——學生人數激增、新院系迫切需要新空間。建築的結果是深遠的：廉價的混凝土、通用的平面、可適應的室內。這些建築大多老化不良，部分原因正在於建造的速度以及預留維護預算的微薄。</p>',

    'london.swisscottage.desc': '<p>由巴西爾·斯彭斯設計的瑞士小屋圖書館是一件引人注目的公民現代主義作品——一座以戲劇性折疊混凝土雨篷包裹的公共圖書館，雨篷懸挑至瑞士小屋高街的人行道上方。雨篷的稜角幾何與裸露的結構框架在遠處已明確宣示建築的公共性格，使之成為北倫敦最具辨識度的小型公共建築之一。</p><p>斯彭斯以考文垂大教堂更為人所知，但他將圖書館設計為一個更大公共設施群的組成部分，包括游泳池與青年中心。懸挑雨篷、其後方透明玻璃立面，以及混凝土結構的厚重之間的關係，造就了一棟對公共領域慷慨相待的建築——這是同期許多公共建築未能做到的。</p>',

    'london.ucl.desc': '<p>位於貝德福德路的倫敦大學教育學院大樓是丹尼斯·拉斯頓最嚴謹的作品之一——一條長形的水平板樓，以相互咬合的截面將演講廳與研討室疊置，以一道連續的裸露混凝土與玻璃立面呈現。拉斯頓在這裡使用了與國家劇院相同的「地層」語言，但更為簡潔：整棟建築如同一個截面被豎向立起。</p><p>面街立面有節制、有章法，每層樓板以獨立的混凝土橫帶呈現，玻璃退縮於結構框架之後。室內延續同樣的邏輯：裸露的混凝土牆面與天花、透過結構框架過濾的自然光。隨著周邊建築被逐一取代，這棟樓的材料一致性愈來愈突出，也愈來愈珍貴。</p>',

    /* ── Chisinau building descriptions ──── */
    'chisinau.circus.desc': '<p>基希訥烏國家馬戲場是前蘇聯最具建築震撼力的建築之一——一座圓形的粗野主義結構，外牆由一圈戲劇性的斜角混凝土翼片所定義，每一片巨大的白色石材翼板從圓柱形主體向外斜展。建成於1981年，由謝苗·弗里德林設計，可容納1900名觀眾，自開幕以來持續運作至今，使其成為摩爾多瓦首都兼具建築與文化意義的地標。</p><p>其形式語言是純粹的蘇聯晚期風格：結構元素被賦予表現性，混凝土被視為雕塑而非單純的圍護材料。入口上方的青銅浮雕描繪著馬戲表演者——特技演員、小丑、騎手——延續著蘇聯紀念性公共藝術的傳統。整棟建築彷彿在運動之中，翼片猶如一頂旋轉的馬戲帳篷頂，以永恆的、承重的混凝土呈現。在一座蘇聯時代建築大多已被後獨立時代翻新改造的城市中，馬戲場幾乎保持原貌，也因此愈加動人。</p>',

    'chisinau.cosmos.desc': '<p>宇宙酒店是基希訥烏中央大道上形式最富創意的建築——一座九層酒店大樓，整個立面覆蓋著重複的菱形預製混凝土單元，每個單元以一定角度傾斜，在一天中的不同時刻以不同方式捕捉光線。效果令人著迷：一個隨著你的移動而似乎在移動、在呼吸的立面，數百個相同的混凝土菱形單元上的陰影圖案持續變換。</p><p>建成於1967年，正值蘇聯現代主義實驗的巔峰，這棟建築代表著蘇聯建築掙脫史達林婚禮蛋糕風格、開始探索預製化形式可能性的歷史時刻。菱形圖案並非裝飾——它是結構性的，每個單元是大規模生產的重複單元，組裝成一個自身即成為建築宣言的立面。</p>',

    'chisinau.mosaics.desc': '<p>蘇聯生產的公共馬賽克藝術比歷史上任何一個國家都要多。從1960年代到1991年蘇聯解體，數以萬計的紀念性馬賽克被安裝在蘇聯各加盟共和國——工廠、體育館、巴士站、大學和公寓樓的立面上。基希訥烏作為摩爾達維亞蘇維埃社會主義共和國的首都，獲得了充足的份額。時至今日，城市中仍保存著數十件重要作品，保存狀況參差不齊。</p><p>這裡記錄的馬賽克代表著兩種不同的傳統。室外建築馬賽克——以搪瓷玻璃和陶瓷磚拼製——通常以摩爾多瓦民間文化、農業豐收和社會主義勞動為題材。中央巴士站內部的馬賽克是一幅大型壁畫，設置於公共候車空間，供旅客長時間駐足欣賞。兩種傳統都理解一件如今已被遺忘的事：功能性公共空間值得有雄心的藝術。</p>',

    /* ── Bucharest building descriptions ─── */
    'bucharest.parliament.desc': '<p>羅馬尼亞國會宮——建造期間稱為「人民之家」（Casa Poporului）——是世界上最大的行政建築，也是地球上最重的建築。寬270米、深240米、地上高86米，地下另有八層延伸至92米深，共有1100個房間、480盞吊燈、3500萬立方英尺的大理石。耗費700名建築師、2萬名輪班施工的建築工人，歷時十三年建造。</p><p>齊奧塞斯庫於1984年委託建造它，作為其大規模重新規劃布加勒斯特的核心——這一工程拆毀了歷史城區的五分之一，包括幾個世紀以來矗立的教堂、猶太會堂和街區。建築面朝社會主義勝利大道（現稱聯合大道），一條長3.5公里、寬90米的軸線，設計上比香榭麗舍大道更寬。齊奧塞斯庫沒有看到它完工：1989年聖誕節，他被處決，距建築完工尚有八年。</p>',

    'bucharest.tehnoimport.desc': '<p>勝利大道上的特赫諾因波特大樓是布加勒斯特最具形式衝擊力的建築之一——一座圓柱形辦公塔樓，整個外表面以水平混凝土帶包裹，帶間以深凹的窗洞分隔，外觀如同一個巨大的疊放木桶或一圈混凝土繩索。建於1965年，服務於國有外貿企業特赫諾因波特，是羅馬尼亞共產黨時期最早的重要現代主義辦公建築之一，是1960年代晚期齊奧塞斯庫相對開放的文化政策所帶來的建築自由化的早期信號。</p><p>這棟建築佔據布加勒斯特市中心最繁忙交叉口之一的角地，其圓形平面是對這一基地條件的直接回應：與其以平面正對一條街道、側面對另一條街道，不如以圓弧完全消除街角，讓建築平等地面向所有方向。從下方仰望，水平帶狀構成強烈的韻律感，混凝土環圈在塔樓升高的過程中逐漸收緊。</p>',

    'bucharest.intercontinental.desc': '<p>布加勒斯特洲際酒店——現以大布加勒斯特酒店名義運營——是布加勒斯特市中心最高的建築，也是羅馬尼亞共產黨時期建造的最優雅的現代主義塔樓之一。由建築師迪努·哈里頓和羅梅奧·貝萊亞設計，1971年竣工，這座25層、高84米的塔樓矗立於大學廣場，其複雜程度在國際上完全不落下風：頂部幾層的弧線、立面規整的網格，以及整體的比例，與同時期西歐的酒店塔樓使用的是同一種建築語言。</p><p>其建造之所以可能，是因為羅馬尼亞共產黨領導層在1960年代末積極尋求外匯和西方商業聯繫，使國際酒店標準成為國家優先事項。這棟建築所在的大學廣場，後來成為羅馬尼亞歷史上政治色彩最濃烈的交叉口：1990年，它是學生和知識分子抗議的中心，是廣場佔領運動的所在地，也是礦工遊行暴力鎮壓事件的發生地。</p>',

    /* ── Tiraspol site descriptions ───────── */
    'tiraspol.domsovetov.desc': '<p>蘇維埃之家是德涅斯特河沿岸摩爾達維亞共和國最高蘇維埃的所在地——這個不被承認的國家於1990年宣佈脫離摩爾多瓦獨立，此後一直在法律與政治的灰色地帶中運作。這棟建築本身完成於1987年，距蘇聯解體尚有四年。其立面現已漆上德涅斯特河沿岸國旗的紅綠紅色帶，入口上方以字母標注「ДОМСОВЕТОВ」，旁邊是一座頂部裝有蘇聯五角星的鐘塔。</p><p>令這棟建築在歐洲獨一無二的，是其前方的雕像。列寧至今仍屹立於此。德涅斯特河沿岸是歐洲最後一個列寧雕像作為官方國家紀念碑保留在原始位置的地區，蘇聯時代的鎚子與鐮刀符號出現在國旗上，蘇聯式的治理美學不是作為懷舊或反諷，而是作為意識形態被保存下來。站在這個廣場上，是站在一個真正沒有前行的地方——而理解這一點，遠比初看之下複雜得多。</p>',

    'tiraspol.cinema.desc': '<p>蒂拉斯波爾電影院是蘇聯時代公共電影院的典型——這類建築從1950年代到1970年代遍佈蘇聯各城鎮：一個架高於開放底層之上的單廳放映廳，立面以一幅大型水平混凝土浮雕橫幅為特徵，描繪著一列以英雄現實主義傳統行進的蘇聯公民。工人、士兵、女性和兒童在社會主義文化的意識形態語法中移動：集體、有目標、在勞動和公民生活中充滿喜悅。</p><p>電影院至今仍在運營。在德涅斯特河沿岸，蘇聯的文化基礎設施從未像在後蘇聯世界其他地方那樣被拆除或私有化，許多此類機構就這樣繼續在同一屋簷下運作，沿用同一個名字，服務著它們當初被建造時所服務的同一群社區。入口上方的浮雕沒有被塗覆、拆除或重新詮釋為歷史文物。它仍然是一家正在運作的電影院的面孔——也就是說，它尚未成為自身的紀念碑。</p>',

    'tiraspol.memorial.desc': '<p>蒂拉斯波爾戰爭紀念碑紀念在1992年德涅斯特河沿岸戰爭中陣亡的士兵——這場短暫而殘酷的武裝衝突發生在得到俄羅斯力量支持的德涅斯特河沿岸分裂主義者與摩爾多瓦共和國之間，以一份迄今未有最終政治解決的停火協議告終。紀念碑的核心雕塑——從共同基座中升起的巨大花崗岩人頭，矗立於鋼柱之上——在一個將蘇聯紀念性雕塑與更廣泛的戰後歐洲哀悼建築語言相連接的傳統中，具有真正的形式力量。</p><p>花崗岩面孔既是個體的，又是集體的：可辨識為人、為士兵、為年輕男性，卻不是具體的某人。這座紀念碑悼念的是一場對世界大多數人來說從未官方發生過的戰爭——在一個對世界大多數人來說從未官方存在過的國家中進行的。</p>',

    'tiraspol.cantine.desc': '<p>蒂拉斯波爾的蘇聯食堂是那種曾遍佈整個蘇聯、為工廠工人、辦公室員工和居民提供飲食的公共食堂——一間stolovaya，一個公共餐廳，餐食受國家補貼且標準統一，任何人只需幾個戈比便可用餐。室內保留了原始的蘇聯特色：瓷磚牆面、長桌、供餐台、金屬托盤。如今的運作方式與1980年時幾乎無異，為工人和退休人員提供廉價熱食。</p><p>在蘇聯的大多數前加盟共和國，stolovaya早已被私人餐廳取代或改造得面目全非。在德涅斯特河沿岸，許多食堂就這樣延續了下來。這間食堂不是作為博物館展品保存的，也不是為懷舊情緒而主題化的：它是運作中的基礎設施，是蘇聯日常生活基本空間與社會安排在歐洲這個特定角落延續至今的有形明證。在這裡用餐，是在參與一件尚未成為歷史的事情。</p>',

    'tiraspol.republicpalace.desc': '<p>蒂拉斯波爾共和國宮是德涅斯特河沿岸摩爾達維亞共和國的主要國家文化場館——一座大型蘇聯禮儀大廳，用於舉辦官方國家活動、代表大會、演出和公眾集會。其建築遵循蘇聯此類機構的既定類型：面向公共廣場的寬闊柱廊立面，為集體儀式而規模化的室內空間。</p><p>共和國宮舉辦官方國家活動、藝術演出，以及一個國際社會不予承認的國家所舉行的正式儀式。它是德涅斯特河沿岸國家性在公共場合被演繹的場所：這個在實踐中存在、在法理上卻並不存在的國家，在一座建築語言宣告「這是一個永久、嚴肅的地方」的建築中慶祝自身。這，取決於你如何看待，要麼完全荒誕，要麼是關於它最準確的陳述。</p>',

    'tiraspol.government.desc': '<p>德涅斯特河沿岸政府大樓是這個不被承認的共和國的各部委和行政辦公室所在地——一棟蘇聯時代的行政大樓，自1990年德涅斯特河沿岸在蘇聯最後幾年宣佈脫離摩爾多瓦獨立以來，一直作為政府所在地運作。這棟建築的蘇聯機構式建築語言對政治處境毫不妥協：它看起來像政府大樓，因為它就是一座政府大樓。</p><p>德涅斯特河沿岸運作著完整的國家機構——總統、議會、各部委、警察、海關、貨幣和軍隊。這一切都在這樣的建築中進行，使用著適應不被承認的國家需求的蘇聯時代基礎設施。政府大樓也許是蒂拉斯波爾最平凡也最能說明問題的地點：平常即政治聲明。</p>',

    'tiraspol.suvorovsq.desc': '<p>蒂拉斯波爾的蘇沃洛夫廣場紀念亞歷山大·蘇沃洛夫——18世紀俄羅斯軍事統帥，1792年在俄土戰爭俄國勝利後建立了這座城市。蘇沃洛夫在德涅斯特河左岸修建了第一座要塞，奠定了後來成為俄羅斯帝國最西端前哨之一的城市基礎。以他命名的廣場至今仍是城市的地理與象徵中心。</p><p>廣場上矗立的蘇沃洛夫騎馬雕像自蘇聯晚期以來一直屹立於此，作為官方紀念碑保留至今。在德涅斯特河沿岸，蘇沃洛夫作為建城者的形象被用來支撐國家的歷史合法性宣示——那位以軍事行動創建了這座城市的俄羅斯將軍，被援引為該地區俄羅斯文化和歷史身份的明證，有別於摩爾多瓦。廣場維護整潔，正式種植，雕像突出而照明充足。這是一個認真對待自身象徵意義的公共空間。</p>',

    'tiraspol.cityhall.desc': '<p>蒂拉斯波爾市政廳是城市市政行政中心——一棟蘇聯時代的機構建築，坐落在主幹道之一，其立面保持著蘇聯公民建築的正式語言：對稱構圖、規整開窗、標誌建築官方功能的裝飾元素。在蘇聯模式中，市政府從不是小事：城市通過多個相互交疊的黨政機構進行管理，所有這些機構都需要具有相應分量的建築。</p><p>市政廳繼續作為蒂拉斯波爾的市政行政機構運作。其在德涅斯特河沿岸國家結構——在國際上不被承認但在實踐中運作——中的延續運作，意味著這棟建築承載著它一直以來所具有的相同行政權威，只是服務於一個不同於它建造之初所為之服務的政治形態。牆上的日曆或許換了；建築的機構分量沒有。</p>',

    'tiraspol.gagarinmonument.desc': '<p>蒂拉斯波爾的加加林紀念碑紀念尤里·加加林——1961年成為首位進入太空的人類的蘇聯航天員。加加林是蘇聯歷史上最受頌揚的人物之一——他的成就被用作社會主義制度優越性的明證，證明蘇聯能夠抵達資本主義無法企及的地方。加加林紀念碑遍佈整個蘇聯，而在德涅斯特河沿岸，與後蘇聯世界其他地方不同，蘇聯的紀念碑文化得到維護而非拆除。</p><p>這座紀念碑紀念一項真實的人類成就——1961年4月12日東方一號的飛行。但在蒂拉斯波爾，它也作為一種延續性聲明發揮功能：這是一個頌揚同樣英雄、維護同樣紀念碑、按照與蘇聯相同的價值觀等級組織公共空間的國家。航天員日——4月12日——在這裡仍然被官方慶祝。加加林仰望著，一如既往。</p>',

    'tiraspol.greenmarket.desc': '<p>蒂拉斯波爾的綠色市場是一個露天市場，屬於曾存在於整個蘇聯、在德涅斯特河沿岸幾乎未有變化地延續下來的那種形式——一個由攤販和桌台出售農產品、家居用品、服裝及各類雜物的空間，攤販往往就是生產者本身。蘇聯城市將這些市場作為一個獲批准的空間加以維護，集體農場的產品可以在此直接出售，價格由供需決定而非由國家採購體系制定。</p><p>在後蘇聯的德涅斯特河沿岸，市場基本以同樣的形式延續。攤販更老了，商品有時是進口的，但空間安排、社會動態和實體基礎設施都與蘇聯原型保持著可辨識的連續性。這是城市中最平凡也最能說明問題的地點之一：商業以一貫的方式進行，在一個比前蘇聯幾乎任何其他地方都更多地保留了蘇聯經濟紋理的國家裡。</p>',

    'tiraspol.university.desc': '<p>德涅斯特河沿岸國立大學（TSU）是德涅斯特河沿岸的主要高等教育機構——一所蘇聯時代的大學，自1990年該共和國建立以來，作為共和國的主要學術機構繼續運作。大學建築是典型的蘇聯學術建築結構——一棟為大眾高等教育的實際需求而設計的功能性現代主義大樓。</p><p>德涅斯特河沿岸國立大學在一個不尋常的國際背景下運作：其學位在俄羅斯和一些其他後蘇聯國家被承認，但在大多數國家不被承認，這是德涅斯特河沿岸不被承認地位的後果。然而，大學繼續培訓著醫生、教師、工程師和行政人員，他們運作著這個國家的各項機構。建築的蘇聯建築語言反映了一種比前蘇聯幾乎任何其他地方都更具連續性地被維持的教育哲學。</p>',

    'tiraspol.comsomolpark.desc': '<p>蒂拉斯波爾的共青團公園是一個以蘇聯青年組織——共青團——命名的公共綠地，共青團的名字曾附著於整個蘇聯的公園、街道和公共空間之上。公園內的列寧紀念碑是蒂拉斯波爾作為官方國家紀念碑保留的幾座列寧雕像之一，這種情況在當代歐洲是獨一無二的。</p><p>在德涅斯特河沿岸，列寧雕像不像後蘇聯世界其他地方那樣在1991年後被移除。它們保留在原始位置，由國家維護，在列寧誕辰和其他蘇聯紀念日期間受到官方紀念。共青團公園的列寧紀念碑不是博物館藏品，也不是政治爭議的對象——它只是一座在形式上尚未與蘇聯過去決裂的城市的景觀的一部分。</p>',

    'tiraspol.benderfortress.desc': '<p>本德爾要塞（又稱蒂吉納要塞）是一座16世紀奧斯曼堡壘，矗立於德涅斯特河本德爾段的左岸，俯瞰著這座現屬德涅斯特河沿岸管轄領土的城市。建於蘇萊曼大帝時期，要塞是控制河流渡口的主要戰略軍事裝置——一個曾被奧斯曼人、俄羅斯人、瑞典人以及後來的蘇聯爭奪的戰略要地。</p><p>瑞典國王查理十二世在1709年波爾塔瓦戰役失敗後曾在此避難。要塞於1812年移交俄羅斯。如今，要塞位於仍由俄羅斯軍隊——自1992年以來一直留在德涅斯特河沿岸的第14近衛軍——控制的軍事領土之內。進入受限，殘破的塔樓和城牆從圍界外可見。歐洲幾乎沒有哪座要塞的石工中凝聚著如此密度的帝國競爭歷史。</p>',

    'tiraspol.benderstation.desc': '<p>本德爾火車站是德涅斯特河沿岸西緣本德爾城（蒂吉納）的蘇聯時代鐵路終端站——本德爾是摩爾多瓦與這個自我宣告的共和國之間持續爭議的節點。車站建築帶有典型的蘇聯機構式建築風格，繼續服務著定期鐵路交通，包括列車穿越摩爾多瓦和德涅斯特河沿岸領土的奇特行政情況。</p><p>車站存在於一個複雜的管轄地帶：本德爾由德涅斯特河沿岸管理，但位於德涅斯特河西岸，使其成為一個被摩爾多瓦管轄領土包圍的地理異常。1992年的戰爭在本德爾及其周圍爆發了激烈戰鬥。火車站在那場衝突中屹立下來，如今在一種詭異的平常中運作——一座功能齊全的蘇聯建築，坐落在一座技術上仍處於停火狀態的城市中。</p>',

    'tiraspol.monumentpowerplant.desc': '<p>位於蒂拉斯波爾郊區庫丘爾甘電廠附近，這座蘇聯時代的紀念碑紀念與城市工業基礎設施相關的工人和建設者。蘇聯紀念性雕塑頻繁頌揚工業勞動和建設國家經濟基礎的工人——電廠、工廠和集體農場被視為用混凝土實現的政治意志行為。</p><p>庫丘爾甘電廠仍是該地區最大的發電廠之一，不僅向德涅斯特河沿岸供電，也向摩爾多瓦和烏克蘭供電。電廠的持續運作賦予德涅斯特河沿岸罕見的槓桿——能源依賴一直是基希訥烏與蒂拉斯波爾談判中的反覆出現的因素。旁邊的紀念碑如今承載著不同於昔日的分量：不再是慶祝社會主義建設，而是一個部分以千瓦時為單位進行的國家存在爭議邊緣的標記。</p>',

    'tiraspol.residential.desc': '<p>在蒂拉斯波爾和本德爾的街道上，林立著蘇聯住宅大樓——赫魯雪夫樓和後來的勃列日涅夫樓，這是從1960年代到1980年代在整個蘇聯大規模建造的主要大眾住宅形式。這些預製混凝土板式建築以龐大規模建造，因為蘇聯國家試圖解決城市住房危機，將數百萬家庭從集體公寓遷入私人套房。</p><p>在德涅斯特河沿岸，這些建築仍是主要的住房存量，自建造以來幾乎未有改變。缺乏重大投資或再開發意味著城市景觀看起來與蘇聯晚期相當接近。立面顯示出歲月的痕跡——條紋混凝土、生銹的陽台欄杆——但這些建築繼續安置著一個世界不予官方承認的國家的人口。它們是蒂拉斯波爾最平凡也最能說明問題的建築：不是紀念碑，只是人們居住的地方。</p>',

    'tiraspol.leninstreet.desc': '<p>在列寧街——蒂拉斯波爾至今仍保留蘇聯名稱的主幹道——這家小型招待所佔據著一棟蘇聯時代的建築，被改造為供偶爾路過的旅客使用的簡樸住宿。蒂拉斯波爾接待的旅客並不多：不被承認的國家地位、需要通過邊境管制的要求，以及有限的國際交通，共同造就了極低的旅客人數。</p><p>列寧街本身是後蘇聯世界最具攝影感的大道之一——寬闊、樹木成行，兩側是未曾改變的蘇聯國家機構建築。政府部委、最高蘇維埃大樓和裝飾華麗的蒂拉斯波爾戲劇院面向大道。漫步列寧街，是體驗一座選擇保存而非過渡的城市，連同蘇聯街道設施一起。這條街上的招待所，是那個選擇的一個功能性注腳：在一座時間由設計而未曾真正離開的城市裡，一個可以睡覺的地方。</p>',

    /* ── Chisinau new spot descriptions ─── */
    'chisinau.guguta.desc': '<p>古古察咖啡館（Cafenea Guguta）是一座位於博塔尼卡區的蘇聯時代咖啡館，以摩爾多瓦兒童文學角色古古察命名——他是斯皮里頓·旺蓋利1967年小說中那個戴著魔法帽子的頑皮男孩，是摩爾多瓦文學最珍貴的作品之一。建築是一棟緊湊的現代主義結構，裝飾元素呼應故事中的摩爾多瓦鄉村世界，形成蘇聯商業建築與本地民間文化罕見的交匯。</p><p>這家咖啡館歷經獨立與多次經濟動盪，至今仍在運營，名字與身份完整保留。在一座蘇聯時代商業建築大多已被取代或翻新的城市中，古古察咖啡館保留了一種難得的特質：一個在那個年代的匿名現代主義從未嘗試過的、具體而在地的性格。這棟建築與其名字不可分割，而這個名字又與整整一代摩爾多瓦孩子的文學記憶不可分割。</p>',

    'chisinau.govhouse.desc': '<p>摩爾多瓦共和國政府大廈佔據基希訥烏最顯要的位置——直面大國民議會廣場，摩爾多瓦首都的象徵性中心。建成於1964年，曾作為蘇聯摩爾達維亞蘇維埃社會主義共和國政府所在地，現為內閣和總理辦公室。</p><p>建築語言介於史達林晚期的宏偉與其後更為克制的蘇聯現代主義之間：柱廊式立面保留了儀式感，而整體構圖向赫魯雪夫時代更簡潔的線條靠攏。這棟樓錨定了廣場——那個見證摩爾多瓦現代史最重要時刻的廣場，包括1989年引發摩爾多瓦主權宣言的大規模集會。</p>',

    'chisinau.hotelnational.desc': '<p>國家酒店是基希訥烏中心區的現代主義酒店之一——位於主幹道的中層建築，代表著蘇聯對地區首府訪客住宿的處理方式。建築風格是1960至1970年代蘇聯酒店建設的典型：規整的開窗節奏、橫向的重點強調，以及以可複製性而非個性為優先的預製混凝土外牆。</p><p>這類酒店在蘇聯旅行體系中擔任特定角色：服務黨政幹部、企業代表和獲批准的旅客在內部蘇聯體系中的流動。建築自獨立以來已更換業主，但保留了原始形態，是即便內部活動已面目全非、仍定義著大道街景的一件建築作品。</p>',

    'chisinau.liberation.desc': '<p>解放紀念雕塑群是基希訥烏中央大道上的紀念性雕塑，建於1969年，以紀念蘇聯摩爾多瓦在衛國戰爭中從納粹佔領下獲得解放。雕塑群以自信的英雄現實主義風格呈現青銅人物——士兵與平民以鬥爭與決心的姿態矗立，統一於社會主義公共藝術的意識形態語法之中。</p><p>紀念雕塑設置於中央大道而非墓地或專屬紀念公園，體現了蘇聯將公共空間視為天然政治與紀念環境的理解：歷史不被隔離，而是展示於市民日常穿行的城市之中。1969年的時間節點將這件作品置於勃列日涅夫時代大規模投資戰爭紀念的高峰——那個時代，二戰的記憶正成為蘇聯合法性的核心神話。</p>',

    'chisinau.komsomol.desc': '<p>基希訥烏的共青團紀念碑紀念列寧共產主義青年聯盟——這個蘇聯青年組織同時扮演著政治組織、社會網絡和一代代蘇聯青年成長儀式的角色。紀念碑使用蘇聯英雄主義雕塑的視覺語言：動感的人物、向上的姿態，整個構圖體現青春、能量與意識形態承諾。</p><p>共青團在蘇聯社會中無處不在——幾乎每個年輕人都是成員，組織協調從建設旅到文化活動的一切。對共青團的紀念碑將這種無處不在編碼入公共空間。在後蘇聯的基希訥烏，紀念碑依然存在，但其意義已被掏空：它所紀念的組織早已不復存在，而青銅人物繼續向一個從未到來的未來揮手致意。</p>',

    'chisinau.flowerfountain.desc': '<p>花卉噴泉馬賽克是基希訥烏最迷人的蘇聯公共裝飾藝術之一——一件位於市中心的馬賽克裝置，圖像取材於花卉與植物學的視覺詞彙，代表了蘇聯公共藝術中較為樂觀的那一支。在蘇聯的裝飾傳統中，花卉承載著特定的含義：豐盛、春天、美好集體未來的承諾。</p><p>1960至70年代工作的蘇聯馬賽克藝術家發展出一套精緻的視覺語言，汲取民間藝術傳統、拜占庭裝飾圖案和西方現代主義——被消化並本土化為一種鮮明的蘇聯風格。花卉噴泉馬賽克代表著這一傳統最易於親近的一面：色彩、圖案，以及一個無需意識形態解碼即可欣賞的題材。</p>',

    'chisinau.powerplantmosaic.desc': '<p>基希訥烏發電廠的馬賽克是摩爾多瓦最具工業性格的蘇聯公共藝術之一——一件應用於能源基礎設施建築外牆的大幅馬賽克，題材直接呼應建築功能：渦輪機、工人、電力，以及將自然資源轉化為照亮社會主義城市之能量的過程。</p><p>在蘇聯，工業建築常以公共藝術裝飾，以彰顯勞動的尊嚴與社會主義生產的美學。馬賽克形式以其耐用的陶瓷和玻璃磚能夠承受數十年的風吹日曬，成為外牆裝飾的首選媒介。這件作品歷經歲月保存完好，圖像與它所裝飾的建築一樣直接而清晰。</p>',

    'chisinau.countrymosaic.desc': '<p>鄉村馬賽克是散佈於基希訥烏各公共建築的主題性馬賽克之一，圖像植根於摩爾多瓦的農業與民俗傳統——這個共和國的蘇聯時代身份，在很大程度上建立在對其葡萄種植、農耕和村莊文化的頌揚之上。圖案——鄉村場景、程式化的自然形態、轉化為瓷磚的傳統摩爾多瓦編織紋樣——代表了蘇聯統治下官方認可的摩爾多瓦民族身份版本。</p><p>這一路線的蘇聯馬賽克藝術佔據了一個意識形態上有用的位置：它頌揚地方文化，同時將這種文化牢牢框定於蘇聯集體之內。馬賽克已比委託它的意識形態活得更長，現在以不同的方式被閱讀——與其說是宣傳，不如說是對曾被認為值得保存的東西的記錄。</p>',

    'chisinau.termoelectrica.desc': '<p>熱電廠馬賽克是基希訥烏熱電基礎設施建築外牆上的大幅作品——圖像直接呼應建築功能，以能量、熱力與工業轉化為題材。蘇聯建築理念認為，工業和公用事業建築與文化或政府建築同樣值得公共藝術裝飾。</p><p>熱電廠建築群位於基希訥烏的工業南部，遠離市中心大道文化與城市著名馬賽克的熱鬧地帶。這件馬賽克是一個較少人知的但同樣傑出的例子，體現了蘇聯的信念：社會主義勞動的建成環境應當在任何地方都保持美學的雄心——那些在這些建築中度過工作時光的工人，值得擁有美麗的外牆。</p>',

    'chisinau.trainmosaic.desc': '<p>基希訥烏中央火車站的馬賽克是摩爾多瓦最具公眾能見度的蘇聯裝飾藝術之一——一件安裝於車站主要公共空間的大幅作品，供每日穿越這座全國最繁忙交通建築之一的數千名旅客觀看。蘇聯的鐵路站被理解為門戶，其裝飾的重要性也與此相稱。</p><p>圖像取材於移動、聯繫與摩爾多瓦風景的視覺詞彙——這些主題能夠對出發或抵達的旅客說話，將他們定位於一個特定的共和國與特定的文化時刻之中。馬賽克媒介能夠呈現大面積鮮豔色彩，且能承受鐵路環境的繁重人流，是這一用途的理想選擇。</p>',

    'chisinau.writersmosaic.desc': '<p>基希訥烏作家聯盟大樓的馬賽克置於共和國文學機構的所在地——一件圖像自然反映語言、文化與創作勞動主題的作品，而這些恰恰是這個組織官方所體現的。</p><p>摩爾達維亞蘇聯社會主義共和國作家聯盟是一個複雜的機構：既是國家審查與意識形態管控的工具，又是在蘇聯統治下保存和發展摩爾多瓦文學文化的作家們的職業家園。其建築上的馬賽克佔據著這種矛盾——由服務於國家的機構所委託，卻也服務於一個與這個國家的關係從不簡單的群體。</p>',

    'chisinau.feroviarilor.desc': '<p>鐵路工人宮殿（Palatul Feroviarilor）是為摩爾多瓦鐵路系統員工所建的蘇聯時代文化與社交中心，體現了蘇聯為特定工人類別和職業群體建造專屬文化宮殿的做法：融合演出廳、圖書館和社交空間的建築，比一般工廠食堂或工會大廳更具形式雄心。</p><p>建築語言體現了蘇聯國家對鐵路工人文化生活的認真態度——這種認真可以同時被解讀為帶有家長式作風，也可以被理解為真正相信工人值得擁有美麗空間的承諾。建築緊鄰中央火車站，鄰近它所服務的基礎設施，是蘇聯以企業為基礎的文化供應體系的邏輯呈現。</p>',

    'chisinau.plowmancosmos.desc': '<p>耕者與宇宙馬賽克是蘇聯公共圖像志兩大核心主題的鮮明並置——農業的與宇宙的。在蘇聯國家的視覺詞彙中，這兩個領域並不矛盾：耕耘土地的農夫與飛向星際的航天員同樣是為集體服務的英雄工人，其勞動在規模上不同，但在尊嚴與意義上完全相等。</p><p>這件馬賽克幾乎可以確定是安裝在宇宙酒店附近的，而後者的名字宣告了同樣的太空時代樂觀主義。蘇聯太空計劃是赫魯雪夫時代的決定性成就，其圖像在整個1960至70年代滲透進公共藝術之中。將航天員置於農夫身旁，是在宣告摩爾多瓦這個農業共和國與太空探索的技術成就屬於同一個前進的運動。</p>',

    'chisinau.busstation.desc': '<p>基希訥烏中央巴士站的馬賽克是城市主要城際巴士樞紐中的大幅室內作品——一件供每日數千名旅客觀看的彩繪與瓷磚合成構圖。在蘇聯的城市等級體系中，巴士站連接城市與鄉村、共和國首都與各村鎮，其建築與裝飾往往反映鮮明的地方與民族主題。</p><p>中央巴士站馬賽克汲取摩爾多瓦民間藝術的視覺傳統——該地區工藝文化的圖案、色彩與紋樣——為抵達或離開基希訥烏的旅客創造一個溫暖的形象。其規模與雄心體現了蘇聯的信念：公共交通建築值得藝術投入，等候巴士的體驗值得被美化。</p>',

    'chisinau.telecommunosaic.desc': '<p>摩爾多瓦電信大樓的馬賽克是應用於基希訥烏電信基礎設施建築外牆的作品。在蘇聯的意識形態體系中，通信被理解為集體聯繫與社會主義統一的手段，其基礎設施建築因此被視為值得藝術頌揚的對象。</p><p>電信馬賽克的圖像通常取材於聯繫、波形、信號傳輸技術，以及通信所使能的人際關係等主題。這件作品應用於一棟服務於連接摩爾多瓦電話網絡這一現實功能的建築外牆，將蘇聯通信的無形基礎設施變得可見而美麗。</p>',

    'chisinau.deportees.desc': '<p>基希訥烏被驅逐者紀念碑紀念蘇聯驅逐摩爾多瓦人的受難者——1941年6月和1949年6月兩次大規模強制遷移，將摩爾多瓦平民轉移至西伯利亞和中亞。在這兩次行動中，數以萬計的摩爾多瓦人被劃定為蘇維埃國家的敵人：整個家庭被裝上牛車廂，運送至距家鄉數千公里之外的地方。</p><p>這座紀念碑建於1990年代，在摩爾多瓦獨立後，這樣的紀念活動首次成為政治上可行之事。它承認了數十年來被官方否認的一類蘇聯暴行。其雕塑形式——以石材呈現悲傷、流離與失落的人物——以紀念的語言對抗實施了所紀念之行為的制度。</p>',

    'chisinau.triumpharch.desc': '<p>基希訥烏大國民議會廣場的凱旋門建成於1840年，彼時比薩拉比亞隸屬俄羅斯帝國，以紀念1828至1829年俄土戰爭及導致俄國獲得該領土的軍事勝利。這是一座歐洲凱旋門傳統中的古典石材建築，是城市儀式空間最主要的垂直焦點。</p><p>凱旋門承載著被拆除的主顯聖容大教堂最大的一口鐘，在重要的公民紀念日敲響。其位置——廣場的首端，而這個廣場此後成為摩爾多瓦公共生活的象徵中心，1989年獨立示威的發生地——使它成為摩爾多瓦從俄羅斯帝國主義到蘇聯統治再到獨立建國的完整歷史的無意間見證者。</p>',

    /* ── Bucharest new spot descriptions ─── */
    'bucharest.grandhotel.desc': '<p>大布加勒斯特酒店——建造時名為洲際酒店，建成於1971年——是布加勒斯特市中心最高的建築，也是羅馬尼亞共產黨時期建造的最優雅的現代主義塔樓之一。由建築師迪努·哈里頓和羅梅奧·貝萊亞設計，這座25層、高84米的塔樓矗立於大學廣場，呈現出真正的國際視野：弧形頂部、規整的立面網格，以及整體的比例，與同期西歐的酒店塔樓使用同一種建築語言。</p><p>其建造之所以可能，是因為羅馬尼亞共產黨領導層在1960年代末積極尋求外匯和西方商業聯繫，使國際酒店標準成為國家優先事項。這棟建築所在的大學廣場，後來成為羅馬尼亞歷史上政治色彩最濃烈的交叉口：1990年，它是學生和知識分子抗議的中心，廣場佔領運動的所在地，也是礦工遊行暴力鎮壓事件的發生地。</p>',

    'bucharest.arcdetriumph.desc': '<p>布加勒斯特的凱旋門建成於1936年，由建築師彼得·安東內斯庫設計，取代了1922年以來豎立的臨時木製拱門，以紀念第一次世界大戰後羅馬尼亞軍隊的凱旋。永久性拱門以巴黎凱旋門為明確模本，以石灰岩建造，高27米，裝飾著頌揚羅馬尼亞軍事勝利和民族統一的浮雕。</p><p>凱旋門矗立於北部住宅區放射形大道的交叉口，是布加勒斯特戰間期城市規劃師所設想的巴黎式城市構圖的組成部分。羅馬尼亞1918年完成民族統一——將特蘭西瓦尼亞、比薩拉比亞和布科維納首次納入版圖——賦予了凱旋門其歷史依據。刻入石材的圖像記錄了一個特定的民族自我定義時刻。</p>',

    'bucharest.blocrotund.desc': '<p>圓形公寓樓（Blocul Rotund）是布加勒斯特西部盧耶魯盧區的一棟圓形住宅塔樓，建於1970至1980年代齊奧塞斯庫大規模住宅工業化運動期間。圓形平面在羅馬尼亞共產主義住宅中屬於異數——標準形式是矩形板樓或線形街區；這座塔樓代表了對標準類型學更富形式創意的偏離。</p><p>布加勒斯特西部的住宅區建設迅速，用以安置從市中心歷史街區拆遷而來的居民——同一個城市項目的一部分，那個項目摧毀了舊布加勒斯特的大部分，為社會主義勝利大道和國會宮讓路。圓形公寓樓現在矗立於標準化住宅的景觀之中，其圓柱形態正因周圍一切皆是筆直而顯得格外醒目。</p>',

    'bucharest.brutalistslide.desc': '<p>弗洛雷亞斯卡公園的混凝土遊樂設施——俗稱「粗野主義滑梯」——對一件功能上屬於遊樂設備的東西而言，具有相當大的形式雄心。建於1970至1980年代，是公園公共設施的一部分，是一個多層混凝土結構，將樓梯、平台和滑道整合為一個統一的雕塑構圖，屬於受蘇聯影響的混凝土遊樂場設計傳統。</p><p>這個設施在布加勒斯特城市愛好者中享有傳奇地位，因為它的雄心與現實之間的強烈反差：一個兒童滑梯規模的粗野主義紀念碑。混凝土已風化出令人滿意的粗糙感，幾何形態比新建時更加清晰可見。它在一個後共產主義時期大幅重新設計的公園中倖存下來，成為共產主義時代公共設計中最出人意料的遺存之一。</p>',

    'bucharest.rebirth.desc': '<p>革命廣場的重生紀念碑於2005年揭幕，以紀念1989年12月的羅馬尼亞革命——這場終結了42年共產黨統治、並導致尼古拉和埃列娜·齊奧塞斯庫在聖誕節當天被處決的人民起義。紀念碑佔據了革命的地理中心——戰鬥最為激烈的廣場。</p><p>廣場四周是留有歷史痕跡的建築：齊奧塞斯庫發表最後一次公開講話的中央委員會大樓、皇家宮殿（現國家藝術博物館），以及立面至今仍留有彈痕修復痕跡的大學圖書館。重生紀念碑在揭幕時曾引發爭議，但如今已成為城市記憶景觀中一個固定的座標。</p>',

    'bucharest.obor.desc': '<p>布加勒斯特東北部的奧博爾區是1960至1980年代羅馬尼亞城市共產主義時代住宅肌理保存最完整的例子之一。社區以奧博爾市場為中心，四周是那個時期典型的板式公寓樓——用標準化模具預製、以工業速度在全國各地組裝的混凝土板材建築。</p><p>奧博爾的公寓樓不是個別的建築聲明，而是一個城市系統：由近乎相同的建築排列成的街道，社區的尺度由共產主義時期的規劃網格決定。中心的市場——幾個世紀以來羅馬尼亞人歷經多個政權在此交易與社交的地方——賦予了這個地區一種周圍建築所不具備的歷史連續性。漫步奧博爾，是在城市語境中觀看共產主義住宅計劃：平凡、磨損，而充滿生活。</p>',

    'bucharest.politehnica.desc': '<p>布加勒斯特地鐵M1線的理工大學站於1979年作為羅馬尼亞首都地下鐵路第一期的一部分開通——本身就是一個對羅馬尼亞這樣規模和經濟資源的國家而言極具雄心的項目。車站建築遵循蘇聯地鐵模式：拱頂站台、裝飾性瓷磚，以及對地下旅行美學體驗的重視，這是西方地鐵系統極少嘗試的。</p><p>這一段線路的各個站點都有獨特的裝飾方案，同時保持共同的形式詞彙，創造出一個保存完好的統一地下環境。羅馬尼亞地鐵至今仍是東歐最被低估的社會主義基礎設施設計範例之一——一個理解乘客即便在地下也值得擁有美麗空間的系統。</p>',

    'bucharest.freepresshouse.desc': '<p>自由新聞廣場的自由新聞大廈是布加勒斯特最雄偉的史達林式建築之一——一座由建築師霍里亞·麥庫設計、於1956年建成的104米高塔，有意模仿莫斯科七姐妹摩天樓所發展的蘇聯高哥特風格。這棟建築被構想為羅馬尼亞國家新聞機構的中心，容納報紙編輯部、印刷設施和共產主義媒體管控的行政基礎設施。</p><p>「自由新聞大廈」這個名字是那個時代特有的奧威爾式顛倒：建築裡容納的是一個完全由國家管控的媒體系統。1983年建於建築底部的「翅膀」紀念碑（Aripi），由兩件翼狀青銅結構組成，側立於塔樓入口兩旁。這座塔樓至今仍是布加勒斯特最具辨識度的天際線元素之一，從北部城區許多地方皆可遠眺。</p>',

    'bucharest.metropcircus.desc': '<p>布加勒斯特大都會馬戲場建成於1960年，是蘇聯文化模式在其影響圈內大力推廣的圓形馬戲場建築傳統的代表——圓形平面、中央表演場地、四周環繞的分層座位，以永久性建築呈現馬戲表演的空間邏輯，這一形式自十九世紀第一批專用馬戲場以來幾乎未變。</p><p>羅馬尼亞馬戲在社會主義文化計劃中有深厚的根基：對全體公眾開放的公共娛樂，在國家管理下組織起來服務大眾觀眾。大都會馬戲場是這一傳統在布加勒斯特的核心場館，至今仍作為馬戲場地使用——歐洲少數幾個仍在履行其原始功能的專用圓形馬戲場建築之一。</p>',

    'bucharest.tombunknown.desc': '<p>布加勒斯特卡羅爾公園的無名戰士墓擁有一段複雜的歷史，折射出羅馬尼亞二十世紀的縮影。遺址上的第一座紀念碑建於1923年，以紀念第一次世界大戰的陣亡者；1958年被共產主義當局拆除，以一座新的紀念碑取代，以符合社會主義國家的意識形態需求。</p><p>現在的紀念碑——公園正式景觀中石基上燃燒的火焰——所在之地，見證了民族記憶的多次重新闡釋。公園本身承載著羅馬尼亞歷史的多個層次：十九世紀的王室公園、共產主義時代的改造，以及附近的國家先賢祠。無名戰士墓使公園的紀念性格得以清晰呈現，將這個空間錨定於多次戰爭、多個政權的逝者之上。</p>',

    /* ── Poland building descriptions ──────── */
    'poland.warsawuprising.desc': '<p>華沙起義紀念碑於1989年揭幕，紀念1944年的華沙起義——波蘭本土軍（Armia Krajowa）對納粹德國佔領軍發起的長達63天的武裝起義，最終在二戰最具毀滅性的戰鬥之一中遭到鎮壓。約二十萬波蘭平民喪生，城市隨後被德國軍隊夷為平地。</p><p>由文琴蒂·庫奇馬和建築師雅傑克·布丁設計的雕塑描繪了兩組戰士：一組從地面奮力向上突圍，另一組下沉進入下水道——起義者曾藉此逃脫和撤退。紀念碑在起義45周年揭幕，恰逢波蘭共產主義統治結束。這個時機並非偶然：起義在共產時期一直是政治上令人尷尬的話題，因為本土軍與倫敦流亡政府而非蘇聯支持的運動相關聯。</p>',

    'poland.facultyelectronics.desc': '<p>華沙理工大學電子與資訊技術學院大樓是華沙晚期共產時代粗野主義最具代表性的範例之一——一座厚重、強勢的建築，其裸露混凝土表面和大膽的幾何體量，使其立即可辨識為1970至1980年代建築文化的產物。華沙理工大學校園在這一時期積累了數棟此風格的建築，每一棟都在宣示技術與科學教育在晚期共產國家中的重要性。</p><p>這棟建築屬於在吉瑞克時代（1970年代波蘭大量向西方借貸並投資於一波形象建設的時期）被給予相當自由度的波蘭粗野主義傳統。這一時期的大學建築、文化中心和公共設施，往往比其蘇聯對應物更進一步推進建築形式，反映了波蘭文化政策相對開放的特點。</p>',

    'poland.smolna8.desc': '<p>斯莫爾納8號是華沙市中心的一棟現代主義建築，是二戰後城市重建的組成部分——華沙在二戰中幾乎被夷為平地，從1940年代末起在共產主義當局的主導下從廢墟中重建，將重建作為按照社會主義城市規劃原則重組城市的機會：更寬的大道、集體住宅、宏偉的公共建築，以及對戰前資產階級城市肌理的刻意抹除。</p><p>這棟建築的現代主義特質反映了1950年代末波蘭發生的建築轉型，史達林時代的社會主義現實主義風格被官方廢棄，取而代之的是更具功能主義色彩的現代主義。這一時期的建築往往將早期宏偉風格的痕跡與國際現代主義更簡潔的線條相結合——這一建築接縫在重建時代留下印記的華沙各處清晰可見。</p>',

    'poland.palaceculture.desc': '<p>文化科學宮（Pałac Kultury i Nauki）是波蘭最高的建築——一座231米高的蘇聯摩天大樓，由蘇聯建築師列夫·魯德涅夫設計，1952至1955年間建造，作為蘇聯送給波蘭人民的禮物。它是被稱為「七姐妹」的七座史達林式摩天大樓之一，其中六座建於莫斯科；華沙文化宮是唯一一座建於蘇聯境外的。</p><p>這棟建築從一開始就充滿爭議。波蘭人收到了一份他們未曾要求的禮物，以一種使其蘇聯起源無可置疑的風格建造，坐落在一座剛剛被摧毀並正在重建的城市中心。1989年後有人呼籲拆除它，但它存活下來——太龐大、太深嵌於華沙天際線而無法移除。它現在容納著電影院、劇院、大學和頂部的觀景台，並被勉強接納為這座城市身份的一部分。</p>',

    'poland.ochota.desc': '<p>華沙沃霍塔站是華沙城市鐵路網上的一個郊區車站，服務沃霍塔區。車站建築是一座中世紀現代主義結構，是戰後重建華沙交通基礎設施的產物——在那個年代，城市在共產主義城市規劃下被系統性重建，鐵路和公共交通作為工人城市的動脈被置於優先地位。</p><p>車站的建築在其毫不張揚中是功能性的、精確的：裸露混凝土、簡潔幾何，一棟不尋求宏偉但在其主要目的——高效地移動人們穿越城市——上獲得成功的建築。這類交通基礎設施——樸素、設計良好、為服務日常需求而建——代表了波蘭共產時代城市規劃更為持久的成就之一。</p>',

    'poland.sovietcemetery.desc': '<p>華沙蘇聯軍事公墓是1945年1月解放華沙德國佔領期間陣亡的逾21,000名蘇聯士兵的安葬地。其中心的陵園公園是蘇聯紀念建築傳統中的正式禮儀性建築：一個帶有中央陵墓的遊行空間，兩側是一排排以紅星標記的墳墓，整個構圖圍繞著官方哀悼和集體記憶的儀式而組織。</p><p>在當代波蘭文化中，這座公墓佔據著政治上複雜的位置。這裡安葬的蘇聯士兵確實死於解放華沙——但蘇聯的到來究竟代表解放還是新佔領的開始，這一問題塑造了波蘭人記憶這段歷史的方式。公墓繼續得到維護和官方認可，但附著於其上的意涵自1989年共產主義統治結束以來已大幅轉變。</p>',

    'poland.pomnik.desc': '<p>弗羅茨瓦夫的5月3日憲法紀念碑（Pomnik Konstytucji 3 Maja）紀念1791年5月3日的波蘭-立陶宛聯邦憲法——世界上最早的現代憲法之一，比法國督政府憲法早四年、比美國憲法生效晚兩年。這座紀念碑紀念波蘭法律和政治史上的奠基性時刻，以及波蘭憲政政府的傳統。</p><p>5月3日憲法也是1793年波蘭第二次瓜分的藉口——鄰國俄羅斯和普魯士以憲制改革為由進行領土干預，波蘭在幾年內便作為獨立國家不復存在。弗羅茨瓦夫本身直到1945年才成為波蘭城市——此前它是德國城市布雷斯勞，其德意志居民隨後被驅逐並由波蘭人取而代之。在這裡樹立這座紀念碑，將這座城市與波蘭民族認同相連接，而這一身份本身也有著複雜的歷史層次。</p>',

    'poland.audytorium.desc': '<p>弗羅茨瓦夫大學化學系禮堂是波蘭晚期現代主義學術建築的傑出範例——其外部幾何形態突破了同時代大多數大學建設的平面功能主義，進入更具雕塑感和自覺意識的領域。禮堂大膽的體量和紋理混凝土表面，將其置於1970年代達到頂峰的波蘭粗野主義傳統之中。</p><p>弗羅茨瓦夫大學在共產時期經歷了顯著擴張，因為這座城市在1945年後被重建並重新安置居民。化學系大樓代表了那一擴張的雄心：一座為服務一所大學而建的專用講學和研究設施，而那所大學則服務於一座在戰後從零開始重建的城市。其建築上的自信——願意成為城市中一個獨特的物體而非背景建築——反映了波蘭建築師在吉瑞克政權更具國際導向的文化政策下於1970年代享有的相對自由度。</p>',

    'poland.manhattan.desc': '<p>弗羅茨瓦夫曼哈頓——弗羅茨瓦夫的曼哈頓——是1970年代建於施維德尼卡街（城市主幹道之一）的一組高層住宅塔樓。這個綽號由當地居民賦予，他們在那組聳立於城市低矮歷史肌理之上的塔樓中看到了一種——至少在輪廓上——令人聯想到紐約高樓的天際線。這種諷刺意味並未被共產波蘭這座城市的居民所忽視：這是他們的曼哈頓，以預製混凝土板建造，由一個官方將資本主義視為敵人的制度所建造。</p><p>弗羅茨瓦夫曼哈頓有別於典型板式住宅區的地方在於其位置：這些塔樓不是被安置在外圍的新區，而是插入歷史中心，製造出一種至今仍是這座城市最引人注目的城市時刻之一的時代與尺度並置。這些塔樓自1989年後經過部分翻新，但保留了其本質特徵：一個共產時代天際線，這座城市已將其視為己有。</p>',
  }
};

let currentLang = localStorage.getItem('howah-lang') || 'en';

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? '繁中' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('howah-lang', currentLang);
  applyLang(currentLang);
}

document.addEventListener('DOMContentLoaded', function() {
  applyLang(currentLang);

  /* Mobile hamburger toggle */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { nav.classList.remove('open'); });
    });
  }

  /* Dropdown click-to-open (desktop) */
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var dropdown = this.closest('.nav-dropdown');
      var wasOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
      if (!wasOpen) dropdown.classList.add('open');
    });
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
  });

  /* Auto-set active nav link based on current page */
  (function() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    var dir  = path.split('/').slice(-2, -1)[0] || '';
    var dirMap = {
      'buildings': 'belgrade', 'berlin': 'berlin', 'london': 'london',
      'chisinau': 'chisinau', 'bucharest': 'bucharest',
      'tiraspol': 'tiraspol', 'poland': 'poland'
    };
    var cityFile = dirMap[dir] ? (dirMap[dir] + '.html') : null;
    document.querySelectorAll('.site-nav a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      var linkFile = href.split('/').pop();
      if (linkFile === file || (cityFile && linkFile === cityFile)) {
        a.classList.add('active');
      }
    });
  })();
});
