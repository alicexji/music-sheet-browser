// src/data/sheets.js
const sheets = [
  {
    id: '1',
    title: 'Canon in D',
    composer: 'Pachelbel',
    url: '/sheets/canon-in-d.pdf',
    historicalContext: `"Canon in D" is one of the most recognizable works by German Baroque composer Johann Pachelbel, written around 1680–1706. Originally composed for three violins and basso continuo, it features a repeating bass line (a ground bass) with overlapping melodic variations that build in harmonic richness. Rediscovered in the 20th century, the piece became a favorite at weddings and modern media, symbolizing calm beauty and elegant structure characteristic of Baroque music.`
  },
  {
    id: '2',
    title: 'Fur Elise',
    composer: 'Beethoven',
    url: '/sheets/fur-elise.pdf',
    historicalContext: `"Für Elise" (Bagatelle No. 25 in A minor) is one of Ludwig van Beethoven’s most beloved piano pieces, composed around 1810 but published posthumously. The piece blends lyrical charm with technical simplicity, making it accessible to pianists at many levels. Scholars believe the dedication was to Therese Malfatti or Elise Barensfeld, both acquaintances of Beethoven. Its graceful melody and romantic tone exemplify the composer’s gift for emotional intimacy in miniature form.`
  },
  {
    id: '3',
    title: 'ONLY',
    composer: 'LeeHi',
    url: '/sheets/ONLY.pdf',
    level: 'Beginner',
    genre: ['R&B', 'Soul'],
    historicalContext: `"ONLY" is a soulful ballad by South Korean artist LeeHi, released in 2021 as part of her album *4 ONLY*. The song explores themes of enduring love and emotional vulnerability, blending modern R&B with LeeHi’s distinctive, expressive vocals. Produced by GRAY, its smooth harmonies and understated arrangement helped cement LeeHi’s reputation as one of Korea’s most emotive contemporary singers.`
  },
  {
    id: '4',
    title: 'love.',
    composer: 'wave to earth',
    url: '/sheets/love.pdf',
    level: 'Beginner',
    genre: ['Indie Pop', 'R&B'],
    historicalContext: `"love." is a 2020 release by the South Korean indie band wave to earth, known for their mellow fusion of jazz, pop, and R&B. The track expresses gentle affection through dreamy guitar textures and intimate vocals, reflecting the band’s minimalist yet emotive sound. It has become a signature piece for wave to earth, embodying their modern lo-fi aesthetic and introspective lyricism.`
  },
  {
    id: '5',
    title: 'Let Down',
    composer: 'Radiohead',
    url: '/sheets/Let Down.pdf',
    level: 'Beginner',
    genre: ['Alt Rock', 'Art Rock'],
    countryOfOrigin: 'United Kingdom',
    period: '1997',
    historicalContext: `"Let Down" is a song by the English rock band Radiohead, released in 1997 on their landmark third album, *OK Computer*. Written primarily by Thom Yorke, the song captures feelings of alienation and emotional numbness in an increasingly mechanized, fast-moving world. Yorke has said it was inspired by observing people moving through modern life without connection—particularly in airports and public transit.

Musically, "Let Down" is built around interlocking arpeggiated guitar lines and layered time signatures that create a hypnotic, fragile atmosphere. The band recorded the track live at St. Catherine’s Court, a 19th-century mansion whose natural acoustics added to the song’s spacious, reflective sound.

Although never released as a single, "Let Down" has become one of Radiohead’s most beloved deep cuts, illustrating their shift from the guitar-driven Britpop of the mid-1990s to the more experimental, emotionally introspective style that defined their later work.`
  },
  {
    id: '6',
    title: 'Bando',
    composer: 'Playboi Carti',
    url: '/sheets/Bando.pdf',
    level: 'Beginner',
    genre: ['Hip-Hop'],
    historicalContext: `"Bando" is an early track by American rapper Playboi Carti that reflects the raw, minimalist energy of Atlanta’s emerging trap scene in the mid-2010s. With repetitive beats and hypnotic flows, the song captures Carti’s signature style—emphasizing rhythm, ad-libs, and mood over lyrical complexity. It helped define the aesthetic that would later make him a pioneer of the "SoundCloud rap" movement.`
  },
  {
    id: '7',
    title: 'La Mentira',
    composer: 'Luis Miguel',
    url: '/sheets/La Mentira.pdf',
    level: 'Beginner',
    genre: ['Bolero'],
    historicalContext: `"La Mentira" (also known as "Se Te Olvida") is a classic bolero popularized by Mexican singer Luis Miguel. Originally written by Álvaro Carrillo in the 1960s, the song tells of heartbreak and emotional deception with poetic melancholy. Luis Miguel’s rendition, part of his celebrated *Romances* series, revived the golden age of Latin bolero for a new generation, highlighting his smooth, timeless vocal style.`
  },
  {
    id: '8',
    title: 'Pasilyo',
    composer: 'SunKissed Lola',
    url: '/sheets/Pasilyo.pdf',
    level: 'Beginner',
    genre: ['Pop Rock', 'Indie Rock'],
    historicalContext: `"Pasilyo" (meaning "aisle" in Filipino) is a romantic hit by the Filipino band SunKissed Lola, released in 2022. The song became viral for its heartfelt lyrics comparing love to a wedding ceremony. Its uplifting melody, warm vocal harmonies, and celebratory tone made it one of the most beloved modern Filipino love songs, blending pop rock with soulful sincerity.`
  },

  // All items from here (id >= 9) have url set to ''
    {
    id: '9',
    title: 'Journey to The West Theme Song',
    composer: 'Xu Jingqing',
    countryOfOrigin: 'China',
    url: '',
    level: 'Beginner',
    genre: ['Classical', 'Traditional'],
    period: 1982,
    historicalContext: `Composed by Xu Jingqing for the 1986 Chinese television adaptation of *Journey to the West*, this theme song is one of the most recognizable melodies in Chinese popular culture. Adapted from Wu Cheng’en’s 16th-century novel, the score blends traditional pentatonic motifs with orchestral grandeur, symbolizing the spiritual adventure of the Monkey King and his companions. It remains a nostalgic cultural touchstone for generations of viewers.`,
    submitter: 'Jason'
  },
  {
    id: '10',
    title: 'Mojito',
    composer: 'Jay Chou',
    countryOfOrigin: 'Taiwan',
    url: '',
    level: 'Beginner',
    genre: ['Mandopop', 'Latin'],
    period: 2020,
    historicalContext: `"Mojito" is a 2020 single by Taiwanese singer-songwriter Jay Chou that fuses Cuban rhythms with Mandopop sensibility. Inspired by Havana’s vibrant streets, the song’s arrangement features live brass, Latin percussion, and Chou’s signature melodic phrasing. Lyrically, it evokes a romantic, carefree summer mood. Its fusion of East-Asian pop and Latin jazz highlighted Chou’s reputation for inventive cross-cultural experimentation.`
  },
  {
    id: '11',
    title: '沉溺（你让我的心不再结冰）',
    composer: 'Unknown',
    countryOfOrigin: 'China',
    url: '',
    level: 'Beginner',
    genre: ['Chinese'],
    period: 2023,
    historicalContext: `"沉溺" (translated as "Indulgence" or "You Make My Heart No Longer Frozen") gained popularity on Chinese social-media platforms in 2023 for its emotional lyrics and melancholic melody. Though its origins are uncertain, the song reflects the new wave of independently produced Chinese pop emphasizing introspective, internet-native expression and minimalist electronic accompaniment.`
  },
  {
    id: '12',
    title: '好一朵美丽的茉莉花',
    composer: 'Folk Song',
    countryOfOrigin: 'China - Jiangnan',
    url: '',
    level: 'Beginner',
    genre: ['Chinese Folk'],
    period: '16th–18th century',
    historicalContext: `"Jasmine Flower" (好一朵美丽的茉莉花) is one of China’s most famous traditional folk songs, originating from the Jiangnan region during the Ming or Qing dynasty. Its graceful melody and simple lyrics celebrate purity, beauty, and kindness through the image of a jasmine blossom. The song has been arranged in countless classical and modern versions, even featured in international events such as the 2008 Beijing Olympics.`,
    lyrics: `What a pretty Jasmine flower,
What a pretty Jasmine flower,
Nice to see and nice to smell!
Praiseworthy scent, and white as well!
You are what I'd like to pluck,
Giving other people luck.
Oh so pretty, Jasmine Flower!`
  },
  {
    id: '13',
    title: '李建復-龍的傳人',
    composer: 'Li Jiefu',
    countryOfOrigin: 'Taiwan',
    url: '',
    level: 'Beginner',
    genre: ['Mandopop'],
    period: 1978,
    historicalContext: `"The Descendants of the Dragon" (龍的傳人) was released in 1978, written by Li Jiefu and performed by Hou Dejian and Lee Jian-fu. The song became an anthem of Chinese identity and pride during a period of cultural awakening in Taiwan. With its folk-inspired melody and patriotic lyrics, it expressed unity among Chinese people worldwide and remains a staple of modern Chinese pop history.`
  },
  {
    id: '14',
    title: '內山姑娘要出嫁/福爾摩沙合唱團',
    composer: '谢丽燕',
    countryOfOrigin: 'Taiwan',
    url: '',
    level: 'Beginner',
    genre: ['Folk'],
    period: 1966,
    historicalContext: `"內山姑娘要出嫁" ("The Girl from the Mountain is Getting Married") was written and composed by Hsieh Liyan (谢丽燕) in 1966 and performed by the Formosa Choir. Adapted from the Japanese song "The Girl of the Sea" by Saburō Kitajima, it combines Taiwanese folk charm with sentimental lyrics about love and departure. The tune reflects post-war cultural exchange between Taiwan and Japan.`
  },
  {
    id: '15',
    title: '阿里山的姑娘',
    composer: 'Unknown',
    countryOfOrigin: 'Taiwan',
    url: '',
    level: 'Beginner',
    genre: ['Folk'],
    period: 1949,
    historicalContext: `"The Girl from Alishan" (阿里山的姑娘) is one of Taiwan’s best-known folk songs, composed around 1949. It celebrates the beauty and hospitality of the Tsou Indigenous people from the Alishan mountain region. With its bright melody and simple lyrics, the song has become a symbol of Taiwanese identity and is frequently performed at cultural and tourism events.`
  },
  {
    id: '16',
    title: '潘安邦 外婆的澎湖灣',
    composer: 'Pan Anbang',
    countryOfOrigin: 'Taiwan',
    url: '',
    level: 'Beginner',
    genre: ['Mandopop'],
    period: 1979,
    historicalContext: `"Grandma’s Penghu Bay" (外婆的澎湖灣) was released in 1979 by Taiwanese singer Pan Anbang. The nostalgic song reminisces about childhood memories and the peaceful coastal life of Penghu, a small island group off Taiwan. Its gentle melody and heartfelt lyrics captured the essence of 1970s Taiwanese folk-pop, evoking themes of family, innocence, and longing for home.`
  },
  {
    id: '17',
    title: '在希望的田野上 彭丽媛演唱',
    composer: 'Unknown',
    countryOfOrigin: 'China',
    url: '',
    level: 'Beginner',
    genre: ['Chinese'],
    period: 2001,
    historicalContext: `"On the Hopeful Fields" (在希望的田野上) is a patriotic Chinese song often associated with optimism and agricultural progress. It gained renewed attention through performances by celebrated soprano Peng Liyuan. The song’s uplifting melody and lyrics reflect China’s post-reform spirit and national pride at the turn of the 21st century.`
  },
  {
    id: '18',
    title: 'Akaza’s love theme demon slayer infinity castle',
    composer: 'Go Shiina',
    countryOfOrigin: 'Japan',
    url: '',
    level: 'Beginner',
    genre: ['Anime Soundtrack'],
    period: 2025,
    historicalContext: `"Akaza’s Love Theme" is part of the *Demon Slayer: Infinity Castle* soundtrack, composed by Go Shiina. Known for his cinematic orchestral writing, Shiina blends strings, piano, and Japanese percussion to underscore the emotional complexity of Akaza’s tragic character arc. The piece exemplifies the series’ ability to merge traditional Japanese musical elements with modern film scoring.`,
    submitter: 'Elise'
  },
  {
    id: '19',
    title: 'Lao Duang Deun',
    composer: 'Prince Benbadhanabongse',
    countryOfOrigin: 'Thailand',
    url: '',
    level: 'Beginner',
    genre: ['Classical Thai'],
    period: 1909,
    historicalContext: `"Lao Duang Deun" ("The Moon’s Reflection") was composed in 1909 by Prince Benbadhanabongse of Siam. This Thai classical love song features elegant melodic phrasing inspired by traditional Thai court music. Its poetic lyrics and graceful rhythm symbolize refinement and romance, and the piece remains a cherished part of Thailand’s cultural repertoire.`,
    submitter: 'Preme'
  },
  {
    id: '20',
    title: 'Liz on top of the world',
    composer: 'Dario Marianelli',
    countryOfOrigin: 'UK',
    url: '',
    level: 'Beginner',
    genre: ['Film Score'],
    period: 2005,
    historicalContext: `"Liz on Top of the World" is a piano theme by Italian composer Dario Marianelli, written for Joe Wright’s 2005 adaptation of *Pride & Prejudice*. The piece accompanies the film’s sweeping countryside scenes, capturing Elizabeth Bennet’s emotional awakening and freedom. Its lyrical simplicity and romantic harmonies made it one of Marianelli’s most acclaimed film cues.`,
    submitter: 'Jourdan'
  },
  {
    id: '21',
    title: 'Shyne - Travis Scott',
    composer: 'Travis Scott',
    countryOfOrigin: 'USA',
    url: '',
    level: 'Beginner',
    genre: ['Hip-Hop'],
    period: 2025,
    historicalContext: `"Shyne" is a 2025 track by American rapper Travis Scott, continuing his atmospheric trap-influenced sound. Characterized by layered production, auto-tuned vocals, and moody tonality, the song explores themes of fame and isolation. It reflects Scott’s ongoing evolution from high-energy club music toward introspective, cinematic soundscapes.`
  },
  {
    id: '22',
    title: 'Ram Ranch',
    composer: 'Grant MacDonald',
    countryOfOrigin: 'Canada',
    url: '',
    level: 'Beginner',
    genre: ['Heavy Metal'],
    period: 2012,
    historicalContext: `"Ram Ranch" is a 2012 track by Canadian artist Grant MacDonald that began as a provocative protest song and later became an internet meme. Its explicit lyrics and exaggerated metal style turned it into a viral anthem used in online activism and satire. The piece embodies the unpredictable intersection of internet culture and musical parody.`
  },
  {
    id: '23',
    title: 'Baby Shark Instrumental',
    composer: 'Traditional',
    countryOfOrigin: 'South Korea',
    url: '',
    level: 'Beginner',
    genre: ['Children’s Song'],
    period: 2015,
    historicalContext: `"Baby Shark" is a children’s song that originated as a traditional campfire chant and was popularized globally by South Korea’s educational brand Pinkfong in 2015. The upbeat rhythm, repetitive melody, and playful lyrics made it a worldwide phenomenon among children and parents alike. The instrumental version preserves its cheerful simplicity and universal appeal.`,
    submitter: 'Ben'
  }
];


export default sheets;
