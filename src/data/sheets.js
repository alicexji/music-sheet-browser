// src/data/sheets.js
const sheets = [
  {
    id: '1',
    title: 'Canon in D',
    composer: 'Johann Pachelbel',
    countryOfOrigin: 'Germany',
    url: '/sheets/canon-in-d.pdf',
    period: 'Baroque (1680–1706)',
    historicalContext: `"Canon in D" is one of the most recognizable works by German Baroque composer Johann Pachelbel, written around 1680–1706. Originally composed for three violins and basso continuo, it features a repeating bass line (a ground bass) with overlapping melodic variations that build in harmonic richness. Rediscovered in the 20th century, the piece became a favorite at weddings and modern media, symbolizing calm beauty and elegant structure characteristic of Baroque music.`,
  },
  {
    id: '2',
    title: 'Für Elise',
    composer: 'Ludwig van Beethoven',
    countryOfOrigin: 'Germany',
    url: '/sheets/fur-elise.pdf',
    period: 'Classical / Early Romantic (1810)',
    historicalContext: `"Für Elise" (Bagatelle No. 25 in A minor) is one of Ludwig van Beethoven’s most beloved piano pieces, composed around 1810 but published posthumously. The piece blends lyrical charm with technical simplicity, making it accessible to pianists at many levels. Scholars believe the dedication was to Therese Malfatti or Elise Barensfeld, both acquaintances of Beethoven. Its graceful melody and romantic tone exemplify the composer’s gift for emotional intimacy in miniature form.`,
  },
  {
    id: '3',
    title: 'ONLY',
    composer: 'LeeHi',
    countryOfOrigin: 'South Korea',
    url: '/sheets/ONLY.pdf',
    level: 'Beginner',
    genre: ['R&B', 'Soul'],
    period: '2021 (Contemporary)',
    historicalContext: `"ONLY" is a soulful ballad by South Korean artist LeeHi, released in 2021 as part of her album *4 ONLY*. The song explores themes of enduring love and emotional vulnerability, blending modern R&B with LeeHi’s distinctive, expressive vocals. Produced by GRAY, its smooth harmonies and understated arrangement helped cement LeeHi’s reputation as one of Korea’s most emotive contemporary singers.`,
    lyrics: `You are my only one way
  Only one way
  I can never let you go...`
  },
  {
    id: '4',
    title: 'love.',
    composer: 'wave to earth',
    countryOfOrigin: 'South Korea',
    url: '/sheets/love.pdf',
    level: 'Beginner',
    genre: ['Indie Pop', 'R&B'],
    period: '2020 (Modern Indie Era)',
    historicalContext: `"love." is a 2020 release by the South Korean indie band wave to earth, known for their mellow fusion of jazz, pop, and R&B. The track expresses gentle affection through dreamy guitar textures and intimate vocals, reflecting the band’s minimalist yet emotive sound. It has become a signature piece for wave to earth, embodying their modern lo-fi aesthetic and introspective lyricism.`,
    lyrics: `Love, love, love
  I’ll be with you...`
  },
  {
    id: '5',
    title: 'Let Down',
    composer: 'Radiohead',
    countryOfOrigin: 'United Kingdom',
    url: '/sheets/Let Down.pdf',
    level: 'Beginner',
    genre: ['Alt Rock', 'Art Rock'],
    period: '1997 (Contemporary Rock)',
    historicalContext: `"Let Down" is a song by the English rock band Radiohead, released in 1997 on their landmark third album, *OK Computer*. Written primarily by Thom Yorke, the song captures feelings of alienation and emotional numbness in an increasingly mechanized, fast-moving world. Yorke has said it was inspired by observing people moving through modern life without connection—particularly in airports and public transit.

  Musically, "Let Down" is built around interlocking arpeggiated guitar lines and layered time signatures that create a hypnotic, fragile atmosphere. The band recorded the track live at St. Catherine’s Court, a 19th-century mansion whose natural acoustics added to the song’s spacious, reflective sound.

  Although never released as a single, "Let Down" has become one of Radiohead’s most beloved deep cuts, illustrating their shift from the guitar-driven Britpop of the mid-1990s to the more experimental, emotionally introspective style that defined their later work.`,
    lyrics: `Transport, motorways and tramlines
  Starting and then stopping
  Taking off and landing
  The emptiest of feelings...`
  },
  {
    id: '6',
    title: 'Bando',
    composer: 'Playboi Carti',
    countryOfOrigin: 'United States',
    url: '/sheets/Bando.pdf',
    level: 'Beginner',
    genre: ['Hip-Hop'],
    period: '2015 (Trap Era)',
    historicalContext: `"Bando" is an early track by American rapper Playboi Carti that reflects the raw, minimalist energy of Atlanta’s emerging trap scene in the mid-2010s. With repetitive beats and hypnotic flows, the song captures Carti’s signature style—emphasizing rhythm, ad-libs, and mood over lyrical complexity. It helped define the aesthetic that would later make him a pioneer of the "SoundCloud rap" movement.`,
    lyrics: `In the bando (bando)
  I'm whippin' up the dough (dough)...`
  },
  {
    id: '7',
    title: 'La Mentira (Se Te Olvida)',
    composer: 'Álvaro Carrillo / Popularized by Luis Miguel',
    countryOfOrigin: 'Mexico',
    url: '/sheets/La Mentira.pdf',
    level: 'Beginner',
    genre: ['Bolero'],
    period: '1960s (Bolero Revival)',
    historicalContext: `"La Mentira" (also known as "Se Te Olvida") is a classic bolero popularized by Mexican singer Luis Miguel. Originally written by Álvaro Carrillo in the 1960s, the song tells of heartbreak and emotional deception with poetic melancholy. Luis Miguel’s rendition, part of his celebrated *Romances* series, revived the golden age of Latin bolero for a new generation, highlighting his smooth, timeless vocal style.`,
    lyrics: `Se te olvida que me quieres a pesar de lo que dices
  Pues llevamos en el alma cicatrices...`
  },
  {
    id: '8',
    title: 'Pasilyo',
    composer: 'SunKissed Lola',
    countryOfOrigin: 'Philippines',
    url: '/sheets/Pasilyo.pdf',
    level: 'Beginner',
    genre: ['Pop Rock', 'Indie Rock'],
    period: '2022 (Modern OPM)',
    historicalContext: `"Pasilyo" (meaning "aisle" in Filipino) is a romantic hit by the Filipino band SunKissed Lola, released in 2022. The song became viral for its heartfelt lyrics comparing love to a wedding ceremony. Its uplifting melody, warm vocal harmonies, and celebratory tone made it one of the most beloved modern Filipino love songs, blending pop rock with soulful sincerity.`,
    lyrics: `Sa pasilyo ng simbahan tayo'y nagkatagpo
  Kay ganda ng iyong ngiti...`
  },

  {
    id: '89',
    title: '青花瓷 (Blue and White Porcelain)',
    composer: 'Traditional (China)',
    countryOfOrigin: 'China',
    url: '/sheets/青花瓷.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Chinese Classical', 'Instrumental'],
    period: 2011,
    historicalContext: `“青花瓷” (“Blue and White Porcelain”) is a modern composition inspired by the aesthetics of Yuan and Ming dynasty porcelain artistry. Though popularized in the 21st century, it draws heavily on traditional Chinese modal structures and timbres associated with instruments like the guzheng (Chinese harp) and erhu. The piece evokes the serene refinement and delicate brushwork of classical Chinese art, blending poetry and melody to reflect timeless elegance.`,
  },
  {
    id: '90',
    title: 'Londonderry Air (Danny Boy)',
    composer: 'Traditional (Irish)',
    countryOfOrigin: 'Northern Ireland',
    url: '/sheets/Londonderry-Air.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Ballad', 'Celtic'],
    period: 1855,
    historicalContext: `“Londonderry Air” is a traditional Irish melody first collected in County Londonderry around 1851–1855 by Jane Ross of Limavady. The tune later gained worldwide fame as “Danny Boy” after English lyrics were added by Frederic Weatherly in 1913. Its poignant melody, often arranged for cello or voice and piano, expresses longing, parting, and the enduring beauty of the Irish landscape. The air remains one of the most recognizable symbols of Irish musical heritage.`,
  },
  {
    id: '91',
    title: 'Amazing Grace',
    composer: 'John Newton (Traditional Melody)',
    countryOfOrigin: 'England / USA',
    url: '/sheets/Amazing-Grace.pdf',
    level: 'Beginner',
    genre: ['Hymn', 'Christian', 'Spiritual'],
    period: 1772,
    historicalContext: `“Amazing Grace” was written in 1772 by English clergyman John Newton, a former slave ship captain who underwent a profound spiritual conversion. Set to the American folk melody “New Britain” in the 1830s, the hymn became one of the most beloved expressions of redemption and faith across the English-speaking world. Often performed on organ, piano, or sung a cappella, it bridges English hymnody and American gospel traditions.`,
    submitter: 'charlotte'
  },
  {
    id: '92',
    title: 'Auld Lang Syne',
    composer: 'Traditional (Adapted by Robert Burns)',
    countryOfOrigin: 'Scotland',
    url: '',
    level: 'Beginner',
    genre: ['Folk', 'Ballad', 'New Year’s Song'],
    period: 1796,
    historicalContext: `“Auld Lang Syne” is a traditional Scots song that Robert Burns adapted and published in 1796 from earlier oral verses. Its title translates roughly to “old long since,” meaning “for old times’ sake.” Traditionally accompanied by smallpipes, fiddle, or voice, it became the universal anthem of parting and remembrance, sung at New Year’s gatherings around the world. The melody’s gentle pentatonic contour reflects the wistful sentiment of Scottish folk music.`,
    submitter: 'JDthe3rd'
  },
  {
    id: '93',
    title: 'Greensleeves',
    composer: 'Traditional (English Folk)',
    countryOfOrigin: 'England',
    url: '/sheets/Greensleeves.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Ballad', 'Renaissance'],
    period: 1580,
    historicalContext: `“Greensleeves” is a classic English broadside ballad from the Elizabethan era, first registered in 1580. Often performed on lute, recorder, or viol, it is characterized by its ground bass and modal melody. The tune was widely circulated in courtly and street settings alike, embodying the musical style of the late Renaissance. While once romantically attributed to King Henry VIII, scholars agree it was composed later, capturing the elegant melancholy of Tudor England.`,
    lyrics: `Alas, my love, you do me wrong,
  To cast me off discourteously,
  And I have loved you so long,
  Delighting in your company.

  Greensleeves was all my joy,
  Greensleeves was my delight,
  Greensleeves was my heart of gold,
  And who but my lady Greensleeves.`,
    submitter: 'sunsetkite'
  },
  {
    id: '94',
    title: 'What Shall We Do with a Drunken Sailor',
    composer: 'Traditional (Sea Shanty)',
    countryOfOrigin: 'Atlantic (Anglo–Irish Maritime)',
    url: '/sheets/What-Shall-We-Do-With-A-Drunken-Sailor.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Sea Shanty', 'Work Song'],
    period: '19th century',
    historicalContext: `“What Shall We Do with a Drunken Sailor” is one of the best-known sea shanties of the 19th century, traditionally sung by sailors aboard British and Irish merchant ships. Used as a capstan or halyard shanty, it helped synchronize physical labor during hoisting or anchor work. The tune’s call-and-response format and improvisational verses made it adaptable to different crews and voyages, reflecting the humor and resilience of maritime life.`,
    lyrics: `What shall we do with a drunken sailor,
  What shall we do with a drunken sailor,
  What shall we do with a drunken sailor,
  Early in the morning?

  Way hay and up she rises,
  Way hay and up she rises,
  Way hay and up she rises,
  Early in the morning!`
  },
  {
    id: '96',
    title: 'Loch Lomond',
    composer: 'Traditional (Scots Folk)',
    countryOfOrigin: 'Scotland',
    url: '/sheets/Loch-Lomond.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Ballad', 'Scottish Traditional'],
    period: '1840s',
    historicalContext: `“Loch Lomond” is a traditional Scottish song first published in the 1840s, though its origins are believed to trace back to the Jacobite era following the failed 1745 rising. The lyrics speak of love, loss, and the “high road” and “low road,” often interpreted as a farewell between two lovers separated by war or death. Performed on fiddle, pipes, or voice, it remains a cornerstone of Scottish folk tradition and national sentiment.`,
    lyrics: `By yon bonnie banks and by yon bonnie braes,
  Where the sun shines bright on Loch Lomond,
  Where me and my true love were ever wont to gae,
  On the bonnie, bonnie banks o’ Loch Lomond.

  Oh, ye’ll tak’ the high road, and I’ll tak’ the low road,
  And I’ll be in Scotland afore ye,
  For me and my true love will never meet again,
  On the bonnie, bonnie banks o’ Loch Lomond.`,
    submitter: 'David'
  },
  {
    id: '97',
    title: 'Skye Boat Song',
    composer: 'Traditional (Scots / Gaelic Air)',
    countryOfOrigin: 'Scotland (Hebrides)',
    url: '/sheets/Skye-Boat-Song.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Ballad', 'Scottish Traditional'],
    period: '1880s',
    historicalContext: `“The Skye Boat Song” is a traditional Scottish air collected in the late 19th century, based on an older Hebridean rowing song. The modern lyrics were written by Sir Harold Boulton around the 1880s, commemorating the escape of Bonnie Prince Charlie (“The Young Pretender”) to the Isle of Skye after the defeat at Culloden in 1746. Performed on harp or voice, it remains one of Scotland’s most iconic melodies of exile and hope.`,
  },
  {
    id: '98',
    title: 'Soma Trio 3 Book “PSALM 145 and His Love”',
    composer: 'David Ji',
    countryOfOrigin: 'Korea',
    url: '/sheets/psalm.pdf',
    level: 'Advanced',
    genre: ['Sacred', 'Classical', 'Chamber Music'],
    period: 1968,
    historicalContext: `Composed in 1968, “Soma Trio 3 Book: Psalm 145 and His Love” by David Ji is a contemporary Korean chamber work for violin, cello, and piano. The piece integrates Western classical structure with the devotional tone of biblical psalms, functioning as a musical meditation on divine love and praise. It reflects both Christian faith traditions and the growing postwar Korean engagement with sacred art music.`,
    submitter: 'David Ji'
  },
  {
    id: '99',
    title: 'Frère Jacques',
    composer: 'Traditional (French)',
    countryOfOrigin: 'France',
    url: '/sheets/Frere-Jacques.pdf',
    level: 'Beginner',
    genre: ['Nursery Song', 'Canon', 'Folk'],
    period: '18th century',
    historicalContext: `“Frère Jacques” is a traditional French nursery round dating from the 18th century. Sung in canon, it humorously tells of a sleepy monk being urged to ring the morning bells for matins. The song’s simplicity and repetition make it a staple in early music education worldwide. It has been translated into many languages and adapted into both classical and popular works.`,
    lyrics: `Frère Jacques, Frère Jacques,
  Dormez-vous? Dormez-vous?
  Sonnez les matines, sonnez les matines,
  Ding, dang, dong. Ding, dang, dong.`,
    submitter: 'Alvaro_1995'
  },
  {
    id: '100',
    title: 'Au clair de la lune',
    composer: 'Traditional (French Folk)',
    countryOfOrigin: 'France',
    url: '/sheets/lune.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Nursery Song', 'Children’s Music'],
    period: '18th century',
    historicalContext: `“Au clair de la lune” is one of the most familiar French children’s songs, dating from the 18th century. Its simple melody and gentle rhythm made it a favorite for early piano instruction and vocal teaching. The lyrics depict a humorous nocturnal visit involving a quill and a candle, evoking the charm of everyday village life in Old France.`,
    lyrics: `Au clair de la lune,
  Mon ami Pierrot,
  Prête-moi ta plume
  Pour écrire un mot.
  Ma chandelle est morte,
  Je n’ai plus de feu;
  Ouvre-moi ta porte,
  Pour l’amour de Dieu.`,
    submitter: 'bookimonkey'
  },
  {
    id: '101',
    title: 'Sakura, Sakura',
    composer: 'Traditional (Japanese Folk)',
    countryOfOrigin: 'Japan',
    url: '/sheets/sakura.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Traditional', 'Seasonal'],
    period: 'Edo period',
    historicalContext: `“Sakura, Sakura” is a traditional Japanese folk melody from the Edo period, often taught to children and performed during spring festivals. The piece evokes the image of cherry blossoms in full bloom, symbolizing renewal, beauty, and the fleeting nature of life. Typically played on the koto or shakuhachi, its pentatonic melody captures the serene elegance of Japanese classical aesthetics.`,
    lyrics: `さくら さくら  
  野山も里も  
  見わたすかぎり  
  霞か雲か  
  朝日ににおう  
  さくら さくら  
  花ざかり.`,
    submitter: 'bloom'
  },
  {
    id: '102',
    title: 'Mo Li Hua (Jasmine Flower)',
    composer: 'Traditional (Chinese Folk)',
    countryOfOrigin: 'China (Jiangsu)',
    url: '/sheets/mo-li-hua.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Traditional', 'Chinese Classical'],
    period: 1800,
    historicalContext: `“Mo Li Hua” (“Jasmine Flower”) is a beloved folk song from Jiangsu province, originating in the late Qing dynasty around 1800. The melody’s graceful pentatonic phrasing reflects classical Chinese aesthetics, celebrating purity and beauty through the imagery of jasmine blossoms. Performed on instruments such as the dizi and erhu, it became an enduring symbol of Chinese culture, featured in both ceremonial settings and international performances.`,
    lyrics: `茉莉花呀茉莉花，  
  满园花开香也香不过它，  
  我有心采一朵戴，  
  看花的人儿要将我骂，  
  茉莉花呀茉莉花。`,
    submitter: 'Emma'
  },
  {
    id: '103',
    title: 'Kalinka',
    composer: 'Ivan Larionov (Russian Folk Style)',
    countryOfOrigin: 'Russia',
    url: '/sheets/Kalinka.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Dance Song', 'Russian Traditional'],
    period: 1860,
    historicalContext: `“Kalinka” was composed in 1860 by Ivan Larionov, yet quickly entered the folk tradition through widespread public performance and popularization by Russian choirs. Its lively tempo and playful lyrics celebrate the kalinka (snowberry) and the exuberance of Russian peasant life. The song’s call-and-response form and accelerating rhythm make it a hallmark of Russian folk performance, often accompanied by balalaika and energetic dance.`,
    lyrics: `Калинка, калинка, калинка моя!  
  В саду ягода малинка, малинка моя!  

  Под сосною, под зелёною,  
  Спать положите вы меня!  

  Ай-люли, люли, ай-люли, люли,  
  Спать положите вы меня!`,
    submitter: 'Neha'
  },
  {
    id: '104',
    title: 'Home on the Range',
    composer: 'Traditional (Lyrics by Brewster M. Higley, Music by Daniel E. Kelley)',
    countryOfOrigin: 'United States (Great Plains)',
    url: '/sheets/Home-On-The-Range.pdf',
    level: 'Beginner',
    genre: ['Folk', 'Ballad', 'Cowboy Song'],
    period: '1870s',
    historicalContext: `“Home on the Range” originated as a frontier poem titled “My Western Home,” written by Brewster M. Higley in the early 1870s and later set to music by Daniel E. Kelley. It soon spread across the American West as a cowboy ballad celebrating open landscapes and rustic life. Adopted as the state song of Kansas, it embodies the spirit of the Great Plains and the ideal of freedom on the frontier.`,
    lyrics: `Oh, give me a home where the buffalo roam,  
  Where the deer and the antelope play,  
  Where seldom is heard a discouraging word,  
  And the skies are not cloudy all day.  

  Home, home on the range,  
  Where the deer and the antelope play,  
  Where seldom is heard a discouraging word,  
  And the skies are not cloudy all day.`,
    submitter: 'Karen Tepper'
  },
  {
    id: '105',
    title: 'Turkey in the Straw',
    composer: 'Traditional (American Folk)',
    countryOfOrigin: 'United States',
    url: '/sheets/Turkey.pdf',
    level: 'Intermediate',
    genre: ['Folk', 'Fiddle Tune', 'American Traditional'],
    period: 1900,
    historicalContext: `“Turkey in the Straw” is a classic American fiddle tune that traces its roots to 19th-century minstrel songs and older British folk melodies. By the early 20th century, it had become a staple of rural dance music and early country repertoire. Its lively melody, often played on fiddle, banjo, or guitar, embodies the upbeat character of frontier and barn-dance traditions while remaining a popular symbol of American folk heritage.`,
  },
  {
    id: '106',
    title: 'Understand',
    composer: 'Keshi',
    countryOfOrigin: 'United States',
    url: '/sheets/Understand-Keshi.pdf',
    level: 'Intermediate',
    genre: ['Pop', 'Vietnamese-American', 'Contemporary'],
    period: 2022,
    historicalContext: `“Understand” is a contemporary pop song by Vietnamese-American artist Keshi, released in 2022. Known for his emotive vocals and intimate production style, Keshi blends elements of R&B and lo-fi pop to create a deeply personal sound that reflects themes of love, loss, and self-discovery. The song represents the growing influence of Asian-American voices in modern popular music.`,
    submitter: 'Vincent'
  },
  {
    id: '107',
    title: 'Every Living Breathing Moment',
    composer: 'Vincent',
    countryOfOrigin: 'United States',
    url: '/sheets/Every-Living-Breathing-Moment.pdf',
    level: 'Intermediate',
    genre: ['Film Score', 'Orchestral', 'Contemporary'],
    period: 2025,
    historicalContext: `“Every Living Breathing Moment” is an original orchestral composition by Vincent, created in 2025 for a movie soundtrack. The piece embodies the emotional and cinematic qualities characteristic of modern film scores, blending rich orchestral textures with thematic development that enhances the storytelling experience.`,
    submitter: 'Vincent',
  },
  {
    id: '108',
    title: 'Battle with the Typhoon (Zhan Tai Feng) / 战台风',
    composer: 'Traditional (Han Chinese)',
    countryOfOrigin: 'China (Shanghai)',
    url: '/sheets/Battle-with-the-Typhoon.pdf',
    level: 'Advanced',
    genre: ['Traditional Chinese', 'Guzheng', 'Programmatic Work'],
    period: 20,
    historicalContext: `“Battle with the Typhoon” is a traditional Han Chinese guzheng solo that depicts harbor workers heroically battling a typhoon. Originating from Shanghai, the piece is an evocative example of modern guzheng programmatic music celebrating resilience and collective strength.`,
    submitter: 'Hannah',
  },
  {
      id: '109',
      title: 'Spring Dawn on Snowy Mountain (Xueshan Chunxiao) / 雪山春晓',
      composer: 'Traditional (Tibetan)',
      countryOfOrigin: 'China (Tibetan Regions)',
      url: '/sheets/Spring-Dawn-on-Snowy-Mountain.pdf',
      level: 'Intermediate',
      genre: ['Traditional Chinese', 'Tibetan', 'Guzheng'],
      period: 20,
      historicalContext: `“Spring Dawn on Snowy Mountain” is a Tibetan-influenced guzheng work that paints a serene picture of spring emerging over snow-capped peaks. Its lyrical melodies and flowing rhythms reflect natural renewal and harmony.`,
      submitter: 'Hannah',
  },
  {
      id: '110',
      title: 'General’s Command (Jiang Jun Ling) / 将军令',
      composer: 'Traditional (Jiangnan Sizhu)',
      countryOfOrigin: 'China (Jiangnan)',
      url: '/sheets/Generals-Command.pdf',
      level: 'Advanced',
      genre: ['Traditional Chinese', 'Guzheng', 'Martial'],
      period: 19,
      historicalContext: `“General’s Command” is a celebrated guzheng piece from the Jiangnan sizhu lineage, portraying the powerful march and discipline of ancient warriors. Its commanding rhythms and dramatic tone evoke the grandeur of the battlefield.`,
      submitter: 'Hannah',
  },
  {
      id: '111',
      title: 'High Mountains, Flowing Water (Gao Shan Liu Shui) / 高山流水',
      composer: 'Traditional (Guqin)',
      countryOfOrigin: 'China',
      url: '/sheets/High-Mountains-Flowing-Water.pdf',
      level: 'Advanced',
      genre: ['Traditional Chinese', 'Guqin', 'Guzheng Adaptation'],
      period: 'Ancient',
      historicalContext: `“High Mountains, Flowing Water” is one of the most revered works in the Chinese guqin and guzheng repertoire, symbolizing the friendship between Bo Ya and Zhong Ziqi. The piece evokes the vast beauty of mountains and the ceaseless flow of streams.`,
      submitter: 'Hannah',
  },
  {
      id: '112',
      title: 'Recuerdos de la Alhambra',
      composer: 'Francisco Tárrega',
      countryOfOrigin: 'Spain (Granada)',
      url: '/sheets/Recuerdos-de-la-Alhambra.pdf',
      level: 'Advanced',
      genre: ['Classical Guitar', 'Spanish Romantic', 'Tremolo Study'],
      period: 1899,
      historicalContext: `“Recuerdos de la Alhambra” is one of Francisco Tárrega’s most famous guitar works. Using the distinctive tremolo technique, it captures the reflective atmosphere of Granada’s Alhambra Palace, its fountains, and Moorish architecture.`,
      submitter: 'Jorge',
  },
  {
      id: '113',
      title: 'Asturias (Leyenda)',
      composer: 'Isaac Albéniz',
      countryOfOrigin: 'Spain',
      url: '/sheets/Asturias.pdf',
      level: 'Advanced',
      genre: ['Spanish Classical', 'Romantic Era', 'Guitar'],
      period: 1892,
      historicalContext: `Originally written for piano, “Asturias (Leyenda)” has become a cornerstone of the Spanish guitar repertoire. Its fiery rhythms and Moorish-inflected melodies embody the passion and rhythmic drive of Spanish folk traditions.`,
      submitter: 'Jorge',
  },
  {
      id: '114',
      title: 'Spanish Romance',
      composer: 'Anonymous (Spanish Traditional)',
      countryOfOrigin: 'Spain',
      url: '/sheets/Spanish-Romance.pdf',
      level: 'Intermediate',
      genre: ['Classical Guitar', 'Romantic', 'Spanish Traditional'],
      period: 19,
      historicalContext: `“Spanish Romance,” also known as “Romance Anónimo,” is a beloved traditional guitar piece of uncertain authorship. Its gentle melody and simple yet expressive structure have made it a universal favorite among classical guitarists.`,
      submitter: 'jorgedaboy',
  },
  {
      id: '115',
      title: 'Ambush from Ten Sides (Shi Mian Mai Fu) / 十面埋伏',
      composer: 'Traditional (Chinese Pipa Repertoire)',
      countryOfOrigin: 'China',
      url: '',
      audio:'/audio/Ambush-From-Ten-Sides.mp3',
      level: 'Advanced',
      genre: ['Traditional Chinese', 'Pipa', 'Battle Music'],
      period: 'Qing Dynasty',
      historicalContext: `“Ambush from Ten Sides” is a virtuosic traditional Chinese pipa composition that dramatizes the Battle of Gaixia, where the Chu army was encircled by Han forces. Known for its complex fingerwork and intense narrative power, it stands as a pinnacle of the pipa repertoire.`,
      submitter: 'finalzhao',
  },
  {
    id: '116',
    title: 'The Water Is Wide',
    composer: 'Traditional (British Isles)',
    countryOfOrigin: 'Scotland / England',
    url: '',
    level: 'Intermediate',
    genre: ['Folk', 'Ballad', 'British Traditional'],
    period: '17th–18th century',
    historicalContext: `“The Water Is Wide” is a traditional folk ballad from the British Isles, originating from older Scottish and English love songs. Its timeless melody and poignant lyrics reflect the enduring themes of love, distance, and emotional hardship that span generations of oral tradition.`,
    submitter: 'Joshua',
    audio: '/audio/The-Water-is-Wide.mp3', // optional audio preview link
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
    composer: 'Unknown',
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
  },
  {
    id: '24',
    title: "It’s Raining Tacos",
    composer: 'Parry Gripp',
    countryOfOrigin: 'USA',
    url: '',
    level: 'Beginner',
    genre: ['Children’s Song', 'Novelty Pop'],
    period: 2012,
    historicalContext: `"It’s Raining Tacos" is a viral children’s novelty song by American songwriter Parry Gripp, released in 2012. Known for its catchy melody and absurdist humor, the track spread widely through YouTube, classroom sing-alongs, and meme culture. Its simple harmonic motion and bright, repetitive hook make it easy to arrange for beginner musicians while retaining its playful charm.`,
    submitter: 'Rakan Ali'
  },
  {
    id: '25',
    title: 'Shenandoah',
    composer: 'Traditional',
    countryOfOrigin: 'United States',
    url: '',
    level: 'Beginner',
    genre: ['American Folk', 'Sea Shanty'],
    period: 'Early 19th century',
    historicalContext: `"Shenandoah" is an American folk song that likely originated among 19th-century traders and later became a capstan shanty for sailors on transatlantic journeys. The lyrics evoke longing for the Shenandoah River Valley and the bittersweet pull of travel and home. Its flowing melody and flexible verses have made it a staple of choral, folk, and instrumental arrangements.`,
    lyrics: `Oh Shenandoah, I long to see you,
  Away, you rolling river.
  Oh Shenandoah, I long to see you,
  Away, I'm bound away, 'cross the wide Missouri.`,
    submitter: 'Brandon'
  },
  {
    id: '26',
    title: 'The Parting Glass',
    composer: 'Traditional',
    countryOfOrigin: 'Ireland',
    url: '',
    level: 'Beginner',
    genre: ['Celtic', 'Folk Ballad'],
    period: '18th century',
    historicalContext: `"The Parting Glass" is a traditional Irish and Scottish farewell song often sung to close gatherings. With lyrics reflecting gratitude, regret, and goodwill, it carries a warm communal spirit. Its tuneful, modal melody adapts beautifully to unaccompanied voice, harp, or simple instrumental settings.`,
    lyrics: `Of all the money that e’er I had,
  I spent it in good company;
  And all the harm I’ve ever done,
  Alas, it was to none but me.`,
    submitter: 'Jane Goddell'
  },
  {
    id: '27',
    title: 'Auld Lang Syne',
    composer: 'Traditional (text by Robert Burns)',
    countryOfOrigin: 'Scotland',
    url: '',
    level: 'Beginner',
    genre: ['Scottish Folk'],
    period: 'Late 18th century',
    historicalContext: `"Auld Lang Syne" pairs Robert Burns’s 1780s Scots verse with a traditional melody and is now sung worldwide to mark the New Year. The phrase “auld lang syne” means “old long since,” celebrating friendship and shared memory. Its straightforward tune and resonant message have made it an enduring seasonal anthem across cultures.`,
    lyrics: `Should auld acquaintance be forgot,
  And never brought to mind?
  Should auld acquaintance be forgot,
  And days of auld lang syne?`,
    submitter: 'George F.'
  },
  {
    id: '28',
    title: 'Scarborough Fair',
    composer: 'Traditional',
    countryOfOrigin: 'England',
    url: '',
    level: 'Beginner',
    genre: ['English Ballad', 'Folk'],
    period: 'Traditional (collected 19th century)',
    historicalContext: `"Scarborough Fair" is a traditional English ballad linked to the medieval market town of Scarborough. Its poetic “impossible tasks” motif and the refrain “parsley, sage, rosemary and thyme” hint at older folk symbolism. The melody’s modal flavor and steady pacing make it ideal for lyrical voice or guitar arrangements.`,
    lyrics: `Are you going to Scarborough Fair?
  Parsley, sage, rosemary, and thyme;
  Remember me to one who lives there,
  She once was a true love of mine.`,
    submitter: 'Cal H.'
  },
  {
    id: '29',
    title: 'À la claire fontaine',
    composer: 'Traditional',
    countryOfOrigin: 'France',
    url: '',
    level: 'Beginner',
    genre: ['French Folk'],
    period: '17th–18th century',
    historicalContext: `"À la claire fontaine" is a beloved French folk song whose gentle melody and nostalgic text evoke youthful love and nature. Passed down through oral tradition and regional songbooks, it has been sung in homes, schools, and community gatherings for centuries. Its clear phrasing and diatonic melody suit simple instrumental or choral settings.`,
    lyrics: `À la claire fontaine,
  M’en allant promener,
  J’ai trouvé l’eau si belle
  Que je m’y suis baigné.`,
    submitter: 'Bergie S.'
  },
  {
    id: '30',
    title: 'El vito',
    composer: 'Traditional',
    countryOfOrigin: 'Spain',
    url: '',
    level: 'Beginner',
    genre: ['Flamenco', 'Folk Dance'],
    period: '19th century (traditional)',
    historicalContext: `"El vito" is a spirited Andalusian folk dance tune associated with Seville and flamenco tradition. Characterized by lively rhythm and castanet-like accents, it has been adapted for voice, guitar, and ensemble. Its infectious groove and straightforward harmonic motion make it popular in student and community performances.`,
    lyrics: `El vito, el vito, el vito,
  Se fue por la calle arriba,
  Y al son de su taconeo,
  Toda Sevilla se anima.`,
    submitter: 'Rambi'
  },
  {
    id: '31',
    title: 'Santa Lucia',
    composer: 'Traditional (popularized by Teodoro Cottrau)',
    countryOfOrigin: 'Italy',
    url: '',
    level: 'Beginner',
    genre: ['Neapolitan Song'],
    period: 'Mid-19th century',
    historicalContext: `"Santa Lucia" is a classic Neapolitan boatman’s serenade celebrating the calm beauty of the Bay of Naples. Popularized in the mid-19th century, notably through Teodoro Cottrau’s publication, it spread widely across Europe and the Americas. Its lilting melody and gentle accompaniment evoke moonlit waters and effortless vocal line.`,
    lyrics: `Sul mare luccica l’astro d’argento,
  Placida è l’onda, prospero è il vento.
  Venite all’agile barchetta mia,
  Santa Lucia, Santa Lucia.`,
    submitter: 'Fergio'
  },
  {
    id: '32',
    title: 'Du, du liegst mir im Herzen',
    composer: 'Traditional',
    countryOfOrigin: 'Germany',
    url: '',
    level: 'Beginner',
    genre: ['Folk Song'],
    period: 'Early 19th century',
    historicalContext: `"Du, du liegst mir im Herzen" is a well-known German Volkslied that gained popularity in the early 1800s. Its affectionate text and balanced, memorable melody made it a favorite among emigrant communities and singing societies. The tune adapts readily to voice, accordion, strings, and classroom ensembles.`,
    lyrics: `Du, du liegst mir im Herzen,
  Du, du liegst mir im Sinn;
  Du, du machst mir viel Schmerzen,
  Weißt nicht, wie gut ich dir bin.`,
    submitter: 'Franz'
  },
  {
    id: '33',
    title: 'Vem kan segla förutan vind?',
    composer: 'Traditional',
    countryOfOrigin: 'Sweden',
    url: '',
    level: 'Beginner',
    genre: ['Nordic Folk'],
    period: '18th–19th century (traditional)',
    historicalContext: `"Vem kan segla förutan vind?" (“Who can sail without the wind?”) is a Nordic folk song often associated with Sweden and the Åland Islands. Its plaintive, stepwise melody underscores a text about separation and tears. The song’s simplicity and emotional clarity have kept it alive in school music, choirs, and folk circles.`,
    lyrics: `Vem kan segla förutan vind?
  Vem kan ro utan åror?
  Vem kan skiljas från vännen sin
  Utan att fälla tårar?`,
    submitter: 'Vretten'
  },
  {
    id: '34',
    title: 'Cello Concerto in E minor, Op. 85 (I. Adagio – Moderato)',
    composer: 'Edward Elgar',
    countryOfOrigin: 'England',
    url: '',
    level: 'Beginner',
    genre: ['Classical', 'Concerto', 'Late Romantic'],
    period: 1919,
    historicalContext: `Elgar’s Cello Concerto—written in the aftermath of World War I—is an intimate, elegiac work that marked the composer’s late style. Premiered in 1919, the first movement opens with a stark cello recitative before unfolding into reflective, autumnal lyricism. Revitalized by Jacqueline du Pré’s iconic 1960s recordings, the concerto has become a touchstone of 20th-century cello repertoire for its restrained emotion and singing lines.`,
    submitter: 'Ava'
  },
  {
    id: '35',
    title: 'Sygyt',
    composer: 'Traditional',
    countryOfOrigin: 'Mongolia / Tuva',
    url: '',
    level: 'Beginner',
    genre: ['Throat Singing', 'Folk', 'Inner Asian'],
    period: 'Traditional',
    historicalContext: `Sygyt is a high-overtone style of throat singing (khöömei/xöömei) practiced across Inner Asia, notably Tuva and Mongolia. Singers produce a low fundamental while amplifying whistle-like overtones to trace pentatonic melodies that evoke wind, water, and open steppe landscapes. Rooted in nomadic herding and animist traditions, sygyt emphasizes resonance, breath control, and precise shaping of the vocal tract to sculpt harmonics.`,
    lyrics: `Three of us, four of us,
  But we’re strong as thirty... (trad. verse)`,
    submitter: 'Larry Wang'
  },
  {
    id: '36',
    title: 'Chan Mali Chan',
    composer: 'Traditional',
    countryOfOrigin: 'Malaysia / Singapore',
    url: '',
    level: 'Beginner',
    genre: ['Malay Folk', 'Children’s Song'],
    period: 'Pre-20th century (traditional)',
    historicalContext: `“Chan Mali Chan” is a lively Malay folk song widely sung in Malaysia and Singapore. Often performed in call-and-response, it blends playful wordplay with a lilting pentatonic tune, making it a favorite for classrooms and community events. Simple harmonies and a steady beat lend themselves to clapping games, Orff instruments, and beginner ensembles.`,
    lyrics: `Chan Mali Chan ooi Chan Mali Chan
  Chan Mali Chan ooi Chan Mali Chan
  Chan Mali Chan ooi Chan Mali Chan
  Oi oi Chan Mali Chan`
  },
  {
    id: '37',
    title: 'Rasa Sayang',
    composer: 'Traditional',
    countryOfOrigin: 'Malaysia / Indonesia',
    url: '',
    level: 'Beginner',
    genre: ['Malay Archipelago', 'Folk'],
    period: 'Pre-20th century (traditional)',
    historicalContext: `“Rasa Sayang” (“Feel the Love”) is a well-known folk song of the Malay Archipelago, shared across Malaysia and Indonesia. Its refrain and improvised pantun verses encourage communal singing, humor, and friendly exchange. The catchy melody and repetitive structure make it ideal for call-and-response and multi-part classroom arrangements.`,
    lyrics: `Rasa sayang eh, rasa sayang sayang eh
  Lihat dari jauh, rasa sayang sayang eh`
  },
  {
    id: '38',
    title: 'Wau Bulan',
    composer: 'Traditional',
    countryOfOrigin: 'Malaysia (Kelantan)',
    url: '',
    level: 'Beginner',
    genre: ['Malay Folk'],
    period: '20th century (traditional)',
    historicalContext: `“Wau Bulan” (“Moon Kite”) celebrates the crescent-shaped kite that is an emblem of Kelantanese culture. The song’s gentle melody and swaying rhythm mirror the kite’s graceful flight, while lyrics praise its beauty against the sky. Frequently taught in schools and cultural programs, it’s a staple of Malaysian folk repertoire.`,
    lyrics: `Wau bulan, wau bulan, terbang melayang
  Indah nampak di atas awan
  Pabila angin membawa bertiup
  Bunyinya merdu menenangkan hati`
  },
  {
    id: '39',
    title: 'Chakrulo',
    composer: 'Traditional',
    countryOfOrigin: 'Georgia (Kakheti)',
    url: '',
    level: 'Beginner',
    genre: ['Georgian Polyphony', 'Folk'],
    period: 'Traditional; noted 20th century',
    historicalContext: `“Chakrulo” is a Georgian toast song from Kakheti, showcasing three-part polyphony: a sustained bass (drone), a mobile inner voice, and an ornamented lead. Performed at supra feasts to honor courage and hospitality, it epitomizes Georgia’s rich vocal traditions. Recognized by UNESCO as intangible heritage (2001), “Chakrulo” was included on NASA’s Voyager Golden Record (1977) as a symbol of human musical diversity.`,
    submitter: 'polyphony_path'
  },
  {
    id: '40',
    title: 'Izlel e Delyo Haydutin',
    composer: 'Traditional',
    countryOfOrigin: 'Bulgaria (Rhodope)',
    url: '',
    level: 'Beginner',
    genre: ['Bulgarian Folk', 'Rhodope'],
    period: 'Traditional (popularized 20th century)',
    historicalContext: `A heroic folk song from the Rhodope region, “Izlel e Delyo Haydutin” tells of the rebel leader Delyo. Its expansive, modal melody—often accompanied by gaida (bagpipe)—is famed for its powerful, open-throated singing. The piece achieved global renown via Valya Balkanska’s recording, which was launched aboard the Voyager Golden Record (1977), emblematic of Balkan vocal traditions.`,
    lyrics: `Izlel e Delyo haydutin, Delyo voivoda...
  s’bralo mu se momčeta, momčeta i momi...`,
    submitter: 'jobe_ridge'
  },
  {
    id: '41',
    title: 'Sakura Sakura',
    composer: 'Traditional',
    countryOfOrigin: 'Japan',
    url: '',
    level: 'Beginner',
    genre: ['Japanese Folk'],
    period: 1888,
    historicalContext: `“Sakura Sakura” is a quintessential Japanese spring song associated with cherry blossoms and the Meiji-era school repertoire. Typically set in a pentatonic mode and arranged for koto or voice, its serene melody paints images of blooming trees and clear skies. The tune’s simplicity and cultural resonance make it a favorite for learners and festivals.`,
    lyrics: `Sakura, sakura, yayoi no sora wa
  Mi-watasu kagiri`,
  },
  {
    id: '42',
    title: 'Kalinka',
    composer: 'Ivan Larionov',
    countryOfOrigin: 'Russia',
    url: '',
    level: 'Beginner',
    genre: ['Russian Folk-Style', 'Dance Song'],
    period: 1860,
    historicalContext: `Composed by Ivan Larionov in 1860 and absorbed into folk tradition, “Kalinka” became a hallmark of Russian concert folk ensembles. Its call-and-response refrains and accelerating tempo evoke festive village dancing. The memorable “Kalinka, Kalinka” refrain and bright major harmonies lend themselves to choral and instrumental arrangements at all levels.`,
    lyrics: `Kalinka, kalinka, kalinka moya...`
  },
  {
    id: '43',
    title: 'Greensleeves',
    composer: 'Traditional (English)',
    countryOfOrigin: 'England',
    url: '',
    level: 'Beginner',
    genre: ['English Renaissance', 'Folk'],
    period: 'c. 1580',
    historicalContext: `“Greensleeves” is an English tune of the late Renaissance, widely circulated in the 16th century and later adapted as the Christmas carol “What Child Is This.” Its plaintive, ground-bass-like pattern and modal inflections support a melody of courtly longing. The piece endures in lute, harp, and voice arrangements, bridging early music and folk traditions.`,
    submitter: 'g'
  },
  {
    id: '44',
    title: 'Aloha ʻOe',
    composer: 'Queen Liliʻuokalani',
    countryOfOrigin: 'Hawaiʻi (USA)',
    url: '',
    level: 'Beginner',
    genre: ['Hawaiian', 'Folk'],
    period: 1878,
    historicalContext: `Composed by Queen Liliʻuokalani, “Aloha ʻOe” (“Farewell to Thee”) quickly became Hawaiʻi’s best-known song. Written in the late Hawaiian Kingdom era, it mingles courtly melody with the islands’ hula and himeni song traditions. Over time it has come to symbolize parting, affection, and the resilience of Hawaiian culture amid profound political change.`,
    lyrics: '“Aloha ʻOe, farewell to thee / Until we meet again”',
  },
  {
    id: '45',
    title: 'Frère Jacques',
    composer: 'Traditional',
    countryOfOrigin: 'France',
    url: '',
    level: 'Beginner',
    genre: ['Children’s Song', 'Canon', 'French Folk'],
    period: 'c. 18th century',
    historicalContext: `“Frère Jacques” is a French nursery rhyme and round (canon) used for music learning across the world. Its simple stepwise melody and four short phrases make it ideal for part-singing, call-and-response, or instrumental imitation. The text humorously urges a sleepy friar to wake and ring the morning bells—an enduring classroom classic.`,
    lyrics: '“Frère Jacques, Frère Jacques / Dormez-vous? Dormez-vous?”',
  },
  {
    id: '46',
    title: 'Guantanamera',
    composer: 'Joséíto Fernández (lyrics adapted from José Martí)',
    countryOfOrigin: 'Cuba',
    url: '',
    level: 'Beginner',
    genre: ['Cuban', 'Guajira', 'Folk'],
    period: 1929,
    historicalContext: `“Guantanamera” began as a guajira by Joséíto Fernández and grew into Cuba’s most recognizable song. Many versions set verses from José Martí’s *Versos Sencillos*, pairing patriotic feeling with an easy, swaying groove. Its memorable refrain and I–V–IV style harmony suit guitars, choirs, and classroom ensembles alike.`,
    lyrics: '“Guantanamera, guajira Guantanamera / Yo soy un hombre sincero”',
  },
  {
    id: '47',
    title: 'Zajdi, zajdi, jasno sonce',
    composer: 'Aleksandar Sarievski (popularized)',
    countryOfOrigin: 'North Macedonia',
    url: '',
    level: 'Beginner',
    genre: ['Macedonian Folk', 'Ballad'],
    period: 'Mid-20th century',
    historicalContext: `Popularized by Aleksandar Sarievski, “Zajdi, zajdi” is a modern classic in a traditional idiom. Using sunset as a metaphor for time and loss, it blends modal melody with flexible folk rhythm and ornamentation. Now sung by choirs and soloists alike, it functions like an older lament—shared between villages, families, and generations.`,
    lyrics: '“Zajdi, zajdi, jasno sonce, zajdi polagano…”',
    submitter: 'emi.glow'
  },
  {
    id: '48',
    title: 'Shosholoza',
    composer: 'Traditional',
    countryOfOrigin: 'Southern Africa (Zimbabwe / South Africa)',
    url: '',
    level: 'Beginner',
    genre: ['Zulu/Ndebele', 'Work Song', 'Chant'],
    period: 'Early 20th century (traditional)',
    historicalContext: `“Shosholoza” is a miners’ work song associated with Ndebele and Zulu speakers who traveled to South African goldfields. The call-and-response structure and driving pulse coordinated labor while building solidarity. Today it is sung at sporting events and ceremonies as an anthem of perseverance and collective strength.`,
    lyrics: '“Shosholoza, ku lezontaba / Stimela si phume South Africa”'
  },
  {
    id: '49',
    title: 'La Cucaracha',
    composer: 'Traditional',
    countryOfOrigin: 'Mexico',
    url: '',
    level: 'Beginner',
    genre: ['Mexican Folk', 'Corrido'],
    period: 'Early 20th century',
    historicalContext: `“La Cucaracha” is a witty corrido whose floating verses were reshaped during the Mexican Revolution. Its bouncy, repetitive melody supports topical, humorous, or satirical lyrics, making it endlessly adaptable. The tune’s simple progression and steady rhythm are perfect for beginners on guitar, strings, or classroom instruments.`,
    lyrics: '“La cucaracha, la cucaracha / Ya no puede caminar”',
  },
  {
    id: '50',
    title: 'Arirang',
    composer: 'Traditional',
    countryOfOrigin: 'Korea',
    url: '',
    level: 'Beginner',
    genre: ['Korean Folk'],
    period: 'Traditional (19th–20th century)',
    historicalContext: `“Arirang” is Korea’s most iconic folk song, with countless regional variants. A bittersweet pentatonic melody floats over a lilting rhythm, expressing longing, resilience, and the beauty of the landscape. Sung at festivals and family gatherings, it remains a core symbol of Korean identity at home and across the diaspora.`,
    lyrics: '“Arirang, Arirang, Arariyo / Arirang gogaero neomeoganda”'
  },
  {
    id: '51',
    title: 'Dle Yaman',
    composer: 'Komitas (after traditional sources)',
    countryOfOrigin: 'Armenia',
    url: '',
    level: 'Beginner',
    genre: ['Armenian', 'Lament'],
    period: 'c. 1911 (arr. Komitas)',
    historicalContext: `Arranged and canonized by Komitas around 1911 from earlier lament traditions, “Dle Yaman” bears the weight of Armenian communal memory. Its spacious vocal line and modal turns are often supported by duduk and kanun, creating a breathy, meditative timbre. Embraced by diaspora communities, the song resonates with themes of grief, endurance, and ancestral connection.`,
    lyrics: '“Dle yaman, dle, dle yaman, sirt im yare, dle yaman”',
    submitter: '@its.marcelo.bt'
  },
  {
    id: '52',
    title: 'Sí Bheag, Sí Mhór',
    composer: 'Turlough O’Carolan',
    countryOfOrigin: 'Ireland',
    url: '',
    level: 'Beginner',
    genre: ['Irish Traditional', 'Harp Air'],
    period: 'c. 1700',
    historicalContext: `Attributed to the blind harper Turlough O’Carolan, “Sí Bheag, Sí Mhór” (“Small Fairy Mound, Big Fairy Mound”) weaves folklore of rival fairy hills into a graceful air. Its balanced phrases and gentle ornamentation suit harp, fiddle, whistle, or guitar. The tune endures as an entry point into Irish traditional style and O’Carolan’s lyrical craft.`,
    submitter: 'luna_cirrus'
  },
  {
    id: '53',
    title: 'Frère Jacques (Alt. Listing)',
    composer: 'Traditional',
    countryOfOrigin: 'France',
    url: '',
    level: 'Beginner',
    genre: ['Children’s Song', 'Canon', 'French Folk'],
    period: 'c. 18th century',
    historicalContext: `Alternate listing consolidated with the main “Frère Jacques” entry above. This canonical nursery rhyme remains a staple for teaching part-singing and rhythm across languages and classrooms.`,
  },
  {
    id: '54',
    title: 'Se Canta',
    composer: 'Traditional',
    countryOfOrigin: 'Occitania (southern France)',
    url: '',
    level: 'Beginner',
    genre: ['Occitan Folk', 'Regional Anthem'],
    period: '16th–17th century (traditional)',
    historicalContext: `“Se Canta” (“If I Sing”) is the best-known song of Occitania and often treated as an unofficial anthem. Passed through shepherd traditions, civic stages, and family gatherings, it unites a region of many dialects under one melody. To sing it in Occitan is an act of love and quiet cultural assertion—celebrating the endurance of a peripheral language in a centralized nation.`,
    lyrics: `“Se canta, que cante,
  yo no digo que no;
  a la Virgen del Pilar
  le canto yo.”`,
    submitter: '@tori.pixelz'
  },
  {
    id: '55',
    title: 'Dio vi salvi Regina',
    composer: 'Traditional',
    countryOfOrigin: 'Corsica (France)',
    url: '',
    level: 'Beginner',
    genre: ['Corsican Hymn', 'Paghjella Polyphony'],
    period: '18th century',
    historicalContext: `“Dio vi salvi Regina” (“God Save You, Queen”) was adopted by Corsican patriots in the 18th century and remains the island’s most emblematic hymn. Sung in the rich, overtone-filled paghjella style, it balances devotion and rugged vocal power. Through churches and village squares, its communal performance embodies Corsican faith and independence.`,
    lyrics: `“Dio vi salvi, Regina,
  madre di misericordia;
  vita, dolcezza, speranza nostra, Dio vi salvi.”`,
    submitter: '@leon_ritmo'
  },
  {
    id: '56',
    title: 'La rosa enflorece',
    composer: 'Traditional',
    countryOfOrigin: 'Sephardic diaspora (Eastern Mediterranean)',
    url: '',
    level: 'Beginner',
    genre: ['Ladino', 'Sephardic Romance'],
    period: '19th–20th century (collected)',
    historicalContext: `“La rosa enflorece” (“The Rose Blooms”) survives from Judeo-Spanish families scattered after the 1492 expulsion from Iberia. Passed down through generations in Salonika, Sarajevo, Izmir, and beyond, its haunting melody and text of springtime longing reflect love and exile. Sung in Ladino with oud or guitar, it continues to link dispersed communities through a shared ancestral language of song.`,
    lyrics: `“La rosa florece en el mes de mayo,
  mi alma se oscurece, sufriendo desmayos.
  La belleza de las flores impregna el aire.”`,
    submitter: '@ivy.kimura'
  },
  {
    id: '57',
    title: 'Agur Jaunak',
    composer: 'Traditional',
    countryOfOrigin: 'Basque Country',
    url: '',
    level: 'Beginner',
    genre: ['Basque', 'Folk Hymn'],
    period: '1918 arrangement (José Olaizola Gabarain)',
    historicalContext: `“Agur Jaunak” (“Farewell, Gentlemen”) is a Basque song of greeting and farewell, sung collectively to honor guests and departures. Its stepwise melody and unison declamation evoke a musical bow of respect. Commonly performed a cappella or with txistu and trikitixa accompaniment, it conveys the dignity and warmth central to Basque social gatherings.`,
    lyrics: `“Agur jaunak, jaunak agur,
  agur t’erdi jaun andreok,
  guk hemen gaude eta zuek joan,
  ondo ibili denok.”`,
    submitter: 'rafequiet'
  },
  {
    id: '58',
    title: 'Korobeiniki (Korobushka)',
    composer: 'Traditional (lyrics by Nikolay Nekrasov, 1861)',
    countryOfOrigin: 'Russia',
    url: '',
    level: 'Beginner',
    genre: ['Russian Folk', 'Dance Song'],
    period: 1861,
    historicalContext: `“Korobeiniki” began as an 1861 poem by Nikolay Nekrasov about a flirtatious market exchange between a peddler and a young woman. The tune entered popular circulation through dance halls and folk ensembles, with its accelerating tempo symbolizing bargaining and courtship. In the 20th century it found a second life as the “Tetris Theme,” showing how folk melody can travel between oral tradition and global media.`,
    lyrics: `“Oy, polna, polna korobushka,
  Est’ i sitets’ i parcha…”`,
    submitter: 'micacloudwalk'
  },
  {
    id: '59',
    title: 'Oy u luzi chervona kalyna',
    composer: 'Stepan Charnetsky (after folk sources)',
    countryOfOrigin: 'Ukraine',
    url: '',
    level: 'Beginner',
    genre: ['Ukrainian Folk', 'Patriotic Song'],
    period: 1914,
    historicalContext: `Written in 1914 for the Sich Riflemen and inspired by older folk motifs, “Oy u luzi chervona kalyna” (“Oh, the Red Viburnum in the Meadow”) links pastoral imagery with national resilience. Suppressed during Soviet years and revived in moments of crisis, it has become a modern emblem of unity. The bandura and choral settings sustain its proud, mournful timbre.`,
    lyrics: `“Oy u luzi chervona kalyna pokhylylasya,
  chohos’ nasha slavna Ukrayina zhurylasya.”`,
    submitter: 'zaya.turns'
  },
  {
    id: '60',
    title: 'Anoj pusėj Dunojėlio',
    composer: 'Traditional',
    countryOfOrigin: 'Lithuania',
    url: '',
    level: 'Beginner',
    genre: ['Lithuanian Folk', 'Sutartinės'],
    period: '19th–20th century (traditional)',
    historicalContext: `Linked to the Baltic polyphonic genre *sutartinės*, “Anoj pusėj Dunojėlio” represents one of Lithuania’s rare multipart singing traditions. Its interlocking rhythms, parallel seconds, and spiraling repetition create a hypnotic sound unique to northern Europe. Once sung by small groups of women, these pieces preserve communal coordination and ancient modal color.`,
    submitter: 'lynxsor0a'
  },
  {
    id: '61',
    title: 'Pūt, vējiņi',
    composer: 'Traditional',
    countryOfOrigin: 'Latvia',
    url: '',
    level: 'Beginner',
    genre: ['Latvian Folk', 'Choral Song'],
    period: 'Early 19th century',
    historicalContext: `“Pūt, vējiņi” (“Blow, Winds”) began as a simple boat song but grew into a cornerstone of Latvia’s choral culture. Its yearning melody and sea imagery lent themselves to massed choirs during national song festivals, becoming symbolic of the Baltic Singing Revolution. Performances with kokle accompaniment link personal memory to collective identity.`,
    submitter: 'mila_auric'
  },
  {
    id: '62',
    title: 'Tinsagu nu Hana',
    composer: 'Traditional',
    countryOfOrigin: 'Okinawa (Japan)',
    url: '',
    level: 'Beginner',
    genre: ['Ryukyuan', 'Children’s Song'],
    period: 'Traditional (20th century)',
    historicalContext: `An Okinawan moral song, “Tinsagu nu Hana” (“Balsam Flowers”) teaches filial piety and gratitude through poetic couplets. The title refers to flower dye once used to color children’s fingernails. Sung with sanshin accompaniment, its gentle pentatonic contour carries the rhythm of spoken wisdom passed from parents to children.`,
    lyrics: `ティンサグヌ花や　チミニスミティ
  ウヤヌユシグトゥヤ　チムニハミティ`,
    submitter: 'animelover421'
  },
  {
    id: '63',
    title: 'Jeongseon Arirang',
    composer: 'Traditional',
    countryOfOrigin: 'Korea (Jeongseon, Gangwon)',
    url: '',
    level: 'Beginner',
    genre: ['Korean Folk'],
    period: 'Traditional (unknown)',
    historicalContext: `One of the oldest regional variants of “Arirang,” the Jeongseon melody is freer and more melismatic than the Seoul form. Rooted in the speech patterns of Gangwon Province, it drifts in tempo like mountain conversation. Carried by migrants to markets and mines, it remains a living symbol of longing tied to Korea’s highland culture.`,
    lyrics: `Arirang, arirang, arariyo,
  Arirang gogaero neomeoganda.`,
    submitter: 'Realoves99'
  },
  {
    id: '64',
    title: 'Iyomante Upopo',
    composer: 'Traditional',
    countryOfOrigin: 'Hokkaidō / Sakhalin (Ainu)',
    url: '',
    level: 'Beginner',
    genre: ['Ainu', 'Ritual Song'],
    period: 'Traditional (recorded 2003)',
    historicalContext: `“Iyomante Upopo” belongs to the Ainu bear-sending ceremony (*iomante*), in which the spirit of a bear—considered a visiting deity—is returned to the kamuy world through song and dance. The *upopo* (women’s circle song) uses repeating rhythmic patterns, glottal ornaments, and communal breathing to fuse reverence, release, and social unity. Modern recordings preserve what was once a sacred, seasonal rite.`,
    submitter: 'IslaVortexJR'
  },
  {
    id: '65',
    title: 'Người ơi người ở đừng về',
    composer: 'Traditional',
    countryOfOrigin: 'Vietnam (Bắc Ninh / Bắc Giang)',
    url: '',
    level: 'Beginner',
    genre: ['Quan họ', 'Vietnamese Folk Duet'],
    period: '19th century',
    historicalContext: `A classic *quan họ* duet from northern Vietnam, “Người ơi người ở đừng về” (“Dear one, please do not go home”) features alternating male-female voices engaged in antiphonal love poetry. Performed during spring festivals, it expresses courtesy, flirtation, and improvisation. The flexible melody and pentatonic phrasing accompany delicate ornamentation on *đàn bầu* or *đàn nguyệt* lutes.`,
    submitter: 'NeelSageX'
  },
  {
    id: '66',
    title: 'Lam Saravane',
    composer: 'Traditional',
    countryOfOrigin: 'Laos (Saravane Province)',
    url: '',
    level: 'Beginner',
    genre: ['Lao Folk', 'Dance Song'],
    period: '19th century',
    historicalContext: `“Lam Saravane” is among Laos’s most celebrated circle-dance songs, accompanied by the bamboo mouth-organ *khene*. Its call-and-response verses invite spontaneous poetry, laughter, and courtship. The melody rides the *khene*’s droning harmonics, merging individual improvisation with group rhythm—a sonic image of communal joy still heard at weddings and village fêtes.`,
    submitter: 'TashiTrails_'
  },
  {
    id: '67',
    title: 'Gundhul Pacul',
    composer: 'Traditional',
    countryOfOrigin: 'Java (Indonesia)',
    url: '',
    level: 'Beginner',
    genre: ['Javanese', 'Children’s Song', 'Tembang Dolanan'],
    period: 'Traditional (unknown)',
    historicalContext: `“Gundhul Pacul” is a Javanese *tembang dolanan*—a children’s play song—whose lyrics about a headless hoe carry lessons in humility and leadership. Sung with clapping or gamelan accompaniment, it uses gentle humor to remind rulers to carry their duties wisely. Its simplicity disguises proverbial wisdom deeply rooted in Javanese ethics.`,
    submitter: 'kairosdawnTV'
  },
  {
    id: '68',
    title: 'Bubuy Bulan',
    composer: 'Benny Corda (1950s)',
    countryOfOrigin: 'West Java (Indonesia)',
    url: '',
    level: 'Beginner',
    genre: ['Sundanese Pop', 'Folk Ballad'],
    period: '1950s',
    historicalContext: `“Bubuy Bulan” (“Fading Moon”) became a mid-century Sundanese hit that blended radio-era sentimentality with regional ornamentation. Its gentle triple meter and *kacapi–suling* texture evoke quiet longing and distance between lovers. Today it bridges urban nostalgia and traditional West Javanese aesthetics, performed by students and professionals alike.`,
    submitter: 'NoemiAstroPRO'
  },
  {
    id: '69',
    title: 'Atin Ku Pung Singsing',
    composer: 'Traditional',
    countryOfOrigin: 'Central Luzon (Philippines)',
    url: '',
    level: 'Beginner',
    genre: ['Kapampangan Folk', 'Love Song'],
    period: '18th century',
    historicalContext: `A Kapampangan folk classic, “Atin Ku Pung Singsing” (“I Have a Ring”) tells of affection symbolized by a small golden ring. Usually accompanied by guitar or rondalla, it shifts from slow waltz to lively dance. Passed through kitchens and family gatherings, the song is both a domestic memory and a cultural emblem of Pampanga’s lyrical tradition.`,
    lyrics: 'Atin ku pung singsing, malati ya ing sukat, metung yang daling maragul…',
    submitter: 'juniperinkco'
  },
  {
    id: '70',
    title: 'Resham Firiri',
    composer: 'Traditional',
    countryOfOrigin: 'Nepal',
    url: '',
    level: 'Beginner',
    genre: ['Nepali Folk', 'Travel Song'],
    period: '1969–1970',
    historicalContext: `“Resham Firiri” (“Silk Thread”) is a cheerful trekking-song from Nepal’s mid-20th-century folk revival. Its bouncy *madal* rhythm and repeating chorus invite communal singing among travelers and porters. Easy to learn and endlessly adaptable, it remains an unofficial anthem of hospitality on Himalayan trails.`,
    submitter: 'DevonLilt_2'
  },
  {
    id: '71',
    title: 'Kesariya Balam',
    composer: 'Traditional (Manganiyar / Langa)',
    countryOfOrigin: 'India (Rajasthan)',
    url: '',
    level: 'Beginner',
    genre: ['Rajasthani Folk', 'Mand Style'],
    period: 'Early 19th century',
    historicalContext: `“Kesariya Balam Aavo Ni Padharo Mhare Desh” (“Saffron-clad Beloved, Welcome to My Land”) embodies Rajasthan’s desert hospitality. Sung in the Mand style by hereditary Manganiyar and Langa musicians, it greets travelers with grace and pride. Its modal turns and bowed-string ornamentation carried it from royal courts to film and radio, where it endures as the state’s musical signature.`,
    lyrics: `Kesariya balam, aavo ni,
  padharo mhare desh — welcome guest.`,
    submitter: '4rens'
  },
  {
    id: '72',
    title: 'Nazugum',
    composer: 'Traditional',
    countryOfOrigin: 'Xinjiang (China)',
    url: '',
    level: 'Beginner',
    genre: ['Uyghur Folk', 'Ballad'],
    period: 'Collected 1998',
    historicalContext: `“Nazugum” recounts the tragic fate of a young heroine defying oppression—an archetype in Uyghur oral poetry. Its minor-mode melody and free rhythm showcase the expressive phrasing of *dutar* and *rawap* lutes. Versions differ across regions, but all preserve the balance of lament and courage central to Uyghur musical storytelling.`,
    submitter: 'miko.orbit'
  },
  {
    id: '73',
    title: 'Ülemjiin Chanar',
    composer: 'Traditional',
    countryOfOrigin: 'Mongolia',
    url: '',
    level: 'Beginner',
    genre: ['Mongolian Long Song (Urtyn Duu)'],
    period: 'Traditional',
    historicalContext: `“Ülemjiin Chanar” (“The Finest Beauty”) is a hallmark of Mongolian *urtyn duu*—the long-song tradition that stretches syllables across vast melodic space. The singer’s elongated vowels glide with the horse-head fiddle (*morin khuur*), mirroring travel across open steppe. Its soaring intervals and slow tempo evoke the horizon itself, uniting rider, voice, and landscape.`,
    lyrics: `“Ülemjiin chanar aa,
  tenger tengeriin öngö.”`,
    submitter: 'selah-north'
  },
  {
    id: '74',
    title: 'Ciuri Ciuri',
    composer: 'Traditional',
    countryOfOrigin: 'Italy (Sicily)',
    url: '',
    level: 'Beginner',
    genre: ['Sicilian Folk', 'Festival Song'],
    period: 1946,
    historicalContext: `“Ciuri Ciuri” (“Flowers, Flowers”) is a bright Sicilian song celebrating life and courtship. First printed in the mid-20th century but rooted in older harvest celebrations, it became a staple of village fiestas and Italian-American community gatherings. The lively tamburello rhythm and guitar accompaniment invite dance and spontaneous call-and-response.`,
    lyrics: 'Ciuri, ciuri… ciuri di tuttu l’annu, amuri, amuri',
    submitter: 'paperFawn'
  },
  {
    id: '75',
    title: 'Deus ti salvet Maria',
    composer: 'Traditional',
    countryOfOrigin: 'Italy (Sardinia)',
    url: '',
    level: 'Beginner',
    genre: ['Sardinian Hymn', 'Cantu a Cuncordu'],
    period: 1829,
    historicalContext: `A devotional Marian hymn from Sardinia, “Deus ti salvet Maria” unites the island’s Campidanese and Logudorese dialect zones through *cantu a cuncordu*—a resonant male-voice polyphony. Sung in churches and processions, it intertwines folk ornamentation with liturgical text, embodying Sardinia’s blend of village piety and rugged choral sonority.`,
    lyrics: 'Deus ti salvet Maria, mamma de su Segnore',
    submitter: '0ero2Hero_91'
  },
  {
    id: '76',
    title: 'Milomou Kokkino',
    composer: 'Traditional',
    countryOfOrigin: 'Greece',
    url: '',
    level: 'Beginner',
    genre: ['Greek Folk', 'Aegean Urban Song'],
    period: 'Late 19th century',
    historicalContext: `“Milomou Kokkino” (“My Red Apple”) is a love song that circulated through Aegean tavernas and island festivities in the late 1800s. Typical of *rebetiko*-era urban folk, it combines Eastern Mediterranean scales with relaxed dance rhythms. Its lyric simplicity and emotive ornaments made it a favorite at family gatherings across the Greek diaspora.`,
    submitter: 'jrwithabadie'
  },
  {
    id: '77',
    title: 'Çanakkale Türküsü',
    composer: 'Traditional',
    countryOfOrigin: 'Turkey',
    url: '',
    level: 'Beginner',
    genre: ['Anatolian Türkü', 'Lament'],
    period: 1949,
    historicalContext: `“Çanakkale Türküsü” (“The Ballad of Çanakkale”) memorializes Ottoman soldiers who fell in the 1915 Gallipoli Campaign. Collected and popularized mid-century, its *bağlama* accompaniment supports a modal melody tinged with mourning and pride. The song’s endurance reflects both local grief and national remembrance within the Turkish *türkü* repertoire.`,
    submitter: 'citygirlmayabae'
  },
  {
    id: '78',
    title: 'Kara Jorga',
    composer: 'Traditional',
    countryOfOrigin: 'Kazakhstan',
    url: '',
    level: 'Beginner',
    genre: ['Kazakh Folk Dance', 'Instrumental'],
    period: 1989,
    historicalContext: `“Kara Jorga” (“Black Horse Dance”) is a modern revival of a Kazakh folk dance accompanied by the two-stringed *dombra*. Its galloping rhythm and bodily gestures imitate horseback movement, symbolizing freedom on the steppe. Revived in the late Soviet era, it became a marker of Kazakh national identity and festival celebration.`,
    submitter: 'northstar2658'
  },
  {
    id: '79',
    title: 'Mash Botoi',
    composer: 'Traditional',
    countryOfOrigin: 'Kyrgyzstan',
    url: '',
    level: 'Beginner',
    genre: ['Kyrgyz Folk', 'Festival Song'],
    period: '1980s',
    historicalContext: `“Mash Botoi” accompanies Kyrgyz horse-racing festivals where riders, musicians, and onlookers merge in rhythmic shouting and *komuz* playing. The tune’s brisk triple meter and improvisatory calls create an atmosphere of celebration and friendly competition—embodying Kyrgyz communal energy and equestrian heritage.`,
    submitter: 'mariam'
  },
  {
    id: '80',
    title: 'Badakhshan Lament',
    composer: 'Traditional',
    countryOfOrigin: 'Tajikistan / Afghan Pamir',
    url: '',
    level: 'Beginner',
    genre: ['Pamiri Folk', 'Falak Style'],
    period: 'Traditional (unknown)',
    historicalContext: `Songs in the “Badakhshan Lament” style belong to the high-mountain *falak* tradition, in which soloists improvise lines of fatalism and endurance. Sung with *ghijak* or *dambura* accompaniment, each version varies in text and ornament but maintains the free rhythm and emotional intensity that define Pamiri devotional music.`,
    submitter: 'not Arminn..'
  },
  {
    id: '81',
    title: 'Tizita',
    composer: 'Traditional',
    countryOfOrigin: 'Ethiopia',
    url: '',
    level: 'Beginner',
    genre: ['Ethiopian Folk', 'Amhara Song'],
    period: 'Traditional (20th century)',
    historicalContext: `“Tizita” means “memory” or “nostalgia” in Amharic and names both a song and a modal scale used for reflection and longing. Accompanied by *krar* or *masenqo*, the singer bends pitches within the *tizita qenet*, creating a shimmering lament. It remains a beloved Ethiopian standard conveying personal and collective remembrance.`,
    submitter: 'AyoChiTown'
  },
  {
    id: '82',
    title: 'Shenandoah',
    composer: 'Traditional',
    countryOfOrigin: 'United States',
    url: '',
    level: 'Beginner',
    genre: ['American Folk', 'River Ballad'],
    period: '19th century',
    historicalContext: `“Shenandoah” is an American river ballad that originated among traders and later became a sea shanty. Its flowing melody and flexible verses evoke longing for the Shenandoah Valley and separation from home. Passed through oral tradition and adopted by sailors, it remains a symbol of the American folk canon’s mixture of land and water imagery.`,
    lyrics: `Oh, Shenandoah, I long to see you,
  Away, you rolling river…
  (Abridged)`,
    submitter: 'sage'
  },
  {
    id: '83',
    title: 'Un Canadien Errant',
    composer: 'Antoine Gérin-Lajoie',
    countryOfOrigin: 'Canada (Quebec)',
    url: '',
    level: 'Beginner',
    genre: ['French-Canadian Folk', 'Patriotic Song'],
    period: 1842,
    historicalContext: `Written by Antoine Gérin-Lajoie after the 1837–38 Patriote uprisings, “Un Canadien Errant” (“The Wandering Canadian”) became a touchstone of exile and remembrance. Its plaintive minor melody and simple strophic form made it easy to memorize, spreading through Quebec schools and emigrant communities as a symbol of endurance and nostalgia.`,
    lyrics: `Un Canadien errant,
  banni de ses foyers…
  (Abridged)`,
    submitter: 'nyccellist1'
  },
  {
    id: '84',
    title: 'Suo Gân',
    composer: 'Traditional',
    countryOfOrigin: 'Wales',
    url: '',
    level: 'Beginner',
    genre: ['Welsh Lullaby', 'Folk'],
    period: '19th century',
    historicalContext: `“Suo Gân” (“Lullaby”) is a 19th-century Welsh cradle song cherished for its gentle melody and emotional warmth. Typically accompanied by harp or voice alone, it captures the domestic intimacy of Welsh musical life. Widely arranged for choir and film, it remains one of the most recognizable lullabies in the Celtic tradition.`,
    lyrics: 'Huna blentyn yn fy mynwes, Clyd a chynnes ydyw hon…',
    submitter: 'pixarfein'
  },
  {
    id: '85',
    title: 'Ach, du lieber Augustin',
    composer: 'Traditional',
    countryOfOrigin: 'Austria',
    url: '',
    level: 'Beginner',
    genre: ['Viennese Street Song', 'Folk'],
    period: 1785,
    historicalContext: `“O du lieber Augustin” arose from Vienna’s 17th-century plague lore and was printed in the late 18th century as a humorous street tune. Its catchy refrain “Alles ist hin!” (“All is gone!”) turned tragedy into resilient wit. The song’s simplicity and accordion accompaniment keep it alive in beer-hall and school repertoires alike.`,
    lyrics: 'O du lieber Augustin, Augustin, alles ist hin…',
    submitter: 'abbybane'
  },
  {
    id: '86',
    title: 'Tavaszi szél vizet áraszt',
    composer: 'Traditional (Hungarian Folk)',
    countryOfOrigin: 'Hungary',
    url: '',
    level: 'Intermediate',
    genre: ['Folk', 'Hungarian Traditional'],
    period: '19th century',
    historicalContext: `“Tavaszi szél vizet áraszt” (“Spring Wind Brings Water”) is a beloved Hungarian folk song that symbolizes renewal and the cycles of nature. Although often dated to the 19th century, its melodic structure and modal tone echo much older Magyar traditions, typically accompanied by violin or cimbalom. The song gained renewed fame when performed by Queen’s Freddie Mercury in Hungarian during the band’s 1986 Budapest concert, highlighting its enduring national resonance.`,
    lyrics: `tavaszi szél vizet áraszt,
  virágom, virágom,
  minden madár társat választ,
  virágom, virágom.

  hát én immár kit válasszak,
  virágom, virágom?
  te engemet, én tégedet,
  virágom, virágom.

  zöld pántlika könnyű szellő,
  virágom, virágom,
  felkapta a szűröm mellő’,
  virágom, virágom.

  ha felkapta, hadd vigye,
  virágom, virágom,
  mert én utána nem megyek,
  virágom, virágom.`,
    submitter: 'joey'
  },
  {
    id: '87',
    title: 'Hej Sokoły',
    composer: 'Traditional (Polish–Ukrainian)',
    countryOfOrigin: 'Poland / Ukraine',
    url: '',
    level: 'Intermediate',
    genre: ['Folk', 'Ballad', 'Borderlands Song'],
    period: '19th century',
    historicalContext: `“Hej, Sokoły” (“Hey, Falcons”) is a spirited folk song of the Polish–Ukrainian borderlands, evoking themes of longing, separation, and migration. Its origin lies in 19th-century soldier songs, later popularized across Eastern Europe after World War II. With accordion and violin accompaniment, it embodies the shared cultural landscape of Galicia and Volhynia. The falcons symbolize freedom and nostalgia for one’s homeland.`,
    lyrics: `Hej, sokoły, omijajcie góry, lasy, doły,
  dzwoń, dzwoń, dzwoń dzwoneczku,
  mój stepowy skowroneczku.

  Wina, wina, wina dajcie,
  a jak umrę pochowajcie,
  na zielonej Ukrainie,
  przy kochanej mej dziewczynie.

  Hej, sokoły

  Tam pod lasem, przy strumieniu,
  dziewczę żegna się ze mną;
  siadłam sobie na kamieniu,
  łzy płynęły wielką rzeką.

  Hej, sokoły

  Już mi, jasna, wszystko jedno,
  bo daleko stąd do nieba,
  tylko jedno będzie trzeba:
  o tobie pamiętać trzeba.

  Hej, sokoł`,
    submitter: 'sebastian'
  },
  {
    id: '88',
    title: 'Tamo daleko',
    composer: 'Traditional (Serbian Folk)',
    countryOfOrigin: 'Serbia',
    url: '',
    level: 'Intermediate',
    genre: ['Folk', 'Patriotic', 'War Song'],
    period: 1916,
    historicalContext: `“Tamo daleko” (“There, Far Away”) emerged during World War I as a song of Serbian soldiers exiled on the Greek island of Corfu after the tragic retreat through Albania in 1915–1916. Sung to the haunting accompaniment of the gusle, it became an emblem of Serbian endurance and mourning for a lost homeland. The song is considered a cornerstone of modern Serbian national identity and continues to be performed at remembrance ceremonies.`,
    lyrics: `Tamo daleko, daleko od mora,
  Tamo je selo moje, tamo je Srbija.
  Tamo je selo moje, tamo je Srbija.

  Tamo je kuća moja, tamo je ljubav moja,
  Tamo je srce moje, tamo je Srbija.
  Tamo je srce moje, tamo je Srbija.

  Tamo daleko, gde cveta cvet u polju,
  Tamo me čeka majka, stara i na molitvu.
  Tamo me čeka majka, stara i na molitvu.`,
    submitter: 'sebastian'
  },
  
];


export default sheets;
