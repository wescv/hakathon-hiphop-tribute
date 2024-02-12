class Artist {
  constructor(id, name, Album, bio, mainpic, video, influence, albumList, merchandise) {
    this.name = name;
    this.id = id;
    this.album = Album;
    this.bio = bio;
    this.mainpic = mainpic;
    this.video = video;
    this.influence = influence;
    this.albumList = albumList;
    this.merchandise = merchandise;
  }
}
class Album {
  constructor(id, albumName, songs) {
    this.id = id;
    this.albumName = albumName;
    this.songs = songs;
  }
}

class Influece {
  constructor(id, name, bio, image) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.image = image;
  }
}
var eminemBio = "Eminem, born Marshall Bruce Mathers III, is a Grammy-winning rapper and one of the most influential figures in the music industry. Known for his alter ego Slim Shady, Eminem gained fame with albums like 'The Slim Shady LP' and 'The Marshall Mathers LP.' His raw and emotional lyrics often reflect his challenging life experiences.";

var drDreBio = "Dr. Dre, born Andre Romelle Young, is a legendary rapper and producer. A founding member of N.W.A, Dre is credited for shaping the West Coast hip-hop scene. He produced iconic albums like 'The Chronic' and '2001' and co-founded Beats by Dre. His influence extends beyond music, making him a key figure in entertainment and business.";

var snoopDoggBio = "Snoop Dogg, born Calvin Cordozar Broadus Jr., is an iconic rapper and cultural figure. With a laid-back style and distinct voice, Snoop rose to fame with the album 'Doggystyle.' Beyond music, he has ventured into acting and entrepreneurship. Snoop Dogg is recognized for his enduring impact on hip-hop and popular culture.";

var kendrickLamarBio = "Kendrick Lamar, born Kendrick Lamar Duckworth, is a critically acclaimed rapper and songwriter known for his thought-provoking lyrics and storytelling. Hailing from Compton, California, Lamar gained widespread recognition with albums like 'good kid, m.A.A.d city' and 'To Pimp a Butterfly,' earning multiple Grammy Awards. His socially conscious themes and artistic innovation have solidified his place as one of the most influential figures in contemporary hip-hop.";

var maryJBligeBio = "Mary J. Blige, known as the 'Queen of Hip-Hop Soul,' is a Grammy-winning singer, songwriter, and actress. Her powerful voice and emotional performances have made her a standout in the R&B and soul genres. Mary J. Blige's career spans decades, and she has received acclaim for her authenticity and ability to connect with listeners.";

var jCole = "He's one of the greatest to ever do it, and his impact on the culture and the craft of rap is undeniable."

var logic =  "He's one of the greatest of all time, and his ability to tell stories and manipulate words is unparalleled."

var chance = "Eminem is a pure wordsmith. His lyrical ability is something every rapper looks up to."

var tyler =  "He's just himself all the time. That's something I strive for."

var wiz =  "He's someone I've always looked up to."

var lil = "Snoop Dogg is an innovator. His swag and his way with words have influenced so many in the game."

var anderson = "Working with him was a dream come true. He's a musical genius and an inspiration to me."

var vince = "Dr. Dre's legacy is untouchable. He's a pioneer who shaped the way we hear music today."

var nas = "Dr. Dre's contributions to hip-hop go beyond just beats. He's shaped the sound of an entire coast and influenced generations."

var drake = "His talent and skill level are unmatched."

var sza = "His impact on music and culture is enormous."

var travis = "His artistry, the way he tells stories in his music, is on another level. He's a visionary."

var jayz = "Her impact on music and culture is monumental."

var doja =  "Her music is so empowering, and she's shown that being true to yourself is key.";

var megan = "Her strength and authenticity have paved the way for women in music."


  var artistList = [
      new Artist(1, "Eminem", [
          new Album(1, "Infinite", ["Infinite", "W.E.G.O. (Interlude)", "It's Okay", "Tonite", "313", "Maxine", "Open Mic", "Never 2 Far", "Searchin'"], "November 12, 1996"),
          new Album(2, "The Slim Shady LP", ["My Name Is", "Guilty Conscience", "Brain Damage", "Paul (skit)", "If I Had", "'97 Bonnie & Clyde", "Bitch (skit)", "Role Model", "Lounge (skit)", "My Fault", "Ken Kaniff (skit)", "Cum On Everybody", "Rock Bottom", "Just Don't Give A Fuck", "Soap (skit)", "As The World Turns", "I'm Shady", "Bad Meets Evil", "Still Don't Give A Fuck"], "February 23, 1999"),
          new Album(3, "The Marshall Mathers LP", ["Public Service Announcement", "Kill You", "Stan", "Paul (skit)", "Who Knew", "Steve Berman (skit)", "The Way I Am", "The Real Slim Shady", "Remember Me?", "I'm Back", "Marshall Mathers", "Ken Kaniff (skit)", "Drug Ballad", "Amityville", "Bitch Please II", "Kim", "Under the Influence", "Criminal", "The Kids" ], "May 23, 2000"),
          new Album(4, "The Eminem Show", ["Curtains Up (Skit)", "White America", "Business", "Cleanin' Out My Closet", "Square Dance", "The Kiss (Skit)", "Soldier", "Say Goodbye Hollywood", "Drips", "Without Me", "Paul Rosenberg (Skit)", "Sing for the Moment", "Superman", "Hailie's Song", "Steve Berman (Skit)", "When the Music Stops", "Say What You Say", "Till I Collapse", 	"My Dad's Gone Crazy", "Curtains Close (Skit)"], "May 26, 2002"),
          new Album(5, "Encore", ["Evil Deeds", "Never Enough (feat. 50 Cent & Nate Dogg)", "Yellow Brick Road", "Like Toy Soldiers", "Mosh", "Puke", "My 1st Single", "Paul (Skit)", "Rain Man", "Big Weenie", "Em Calls Paul (Skit)", "Just Lose It", "Ass Like That", "Spend Some Time (feat. Obie Trice, Stat Quo & 50 Cent)", "Mockingbird", "Crazy in Love", "One Shot 2 Shot (feat. D12)", "Final Thought (Skit)", "Encore/Curtains Down (feat. Dr. Dre & 50 Cent)"], "November 12, 2004"),
          new Album(6, "Relapse", ["Dr. West (Skit)", "3 a.m.", "My Mom", "Insane", "Bagpipes from Baghdad", "Hello", "Tonya (Skit)", "Same Song & Dance", "We Made You", "Medicine Ball", "Paul (Skit)", "Stay Wide Awake", "Old Time's Sake (feat. Dr. Dre)", "Must Be the Ganja", "Mr. Mathers (Skit)", "Déjà Vu", "Beautiful", "Crack a Bottle (feat. Dr. Dre & 50 Cent)", "Steve Berman (Skit)", "Underground/Ken Kaniff"], "May 15, 2009"),
          new Album(7, "Recovery", ["Cold Wind Blows", "Talkin' 2 Myself (feat. Kobe)", "On Fire", "Won't Back Down (feat. Pink)", "W.T.P.", "Going Through Changes", "Not Afraid", "Seduction", "No Love (feat. Lil Wayne)", "Space Bound", "Cinderella Man", "25 to Life", "So Bad", "Almost Famous", "Love the Way You Lie (feat. Rihanna)", "You're Never Over", "Untitled (Hidden Track)"], "June 18, 2010"),
          new Album(8, "The Marshall Mathers LP 2", ["Bad Guy", "Parking Lot (Skit)", "Rhyme or Reason", "So Much Better", "Survival", "Legacy", 	"Asshole (featuring Skylar Grey)", "Berzerk", "Rap God", "Brainless", "Stronger Than I Was", "The Monsters (featuring Rihanna)", "So Far...", "Love Game (featuring Kendrick Lamar", "Headlights", "Evil Twin"], "November 5, 2013"),
          new Album(9, "Revival", ["Walk on Water (feat. Beyoncé)", "Believe", "Chloraseptic (feat. Phresher)", "Untouchable", "River (feat. Ed Sheeran)", "Remind Me (Intro)", "Remind Me", "Revival (Interlude)", "Like Home (feat. Alicia Keys)", "Bad Husband (feat. X Ambassadors)", "Tragic Endings (feat. Skylar Grey)", "Framed", "Nowhere Fast (feat. Kehlani)", "Heat", "Offended", "Need Me (feat. Pink)", "In Your Head", "Castle", "Arose"], "December 15, 2017"),
          new Album(10, "Kamikaze", ["The Ringer", "Greatest", "Lucky You (feat. Joyner Lucas)", "Paul - Skit", "Normal", "Em Calls Paul - Skit", "Stepping Stone", "Not Alike", "Fall", "Kamikaze", "Nice Guy (with Jessie Reyez)", "Good Guy (feat. Jessie Reyez)", "Venom - Music from the Motion Picture"], "August 31, 2018"),
          new Album(11, "Music to Be Murdered By", ["Premonition (Intro)", "Unaccommodating (feat. Young M.A)", "You Gon' Learn", "Alfred - Interlude", "Those Kinda Nights (feat. Ed Sheeran)", "In Too Deep", "Godzilla (feat. Juice WRLD)", "Darkness", "Leaving Heaven (feat. Skylar Grey)", "Yah Yah", "Stepdad - Intro", "Stepdad", "Marsh", "Never Love Again", "Little Engine", "Lock It Up (feat. Anderson .Paak)", "Farewell", "No Regrets (feat. Don Toliver)", "I Will"], "January 17, 2020"),
          new Album(12, "Music to Be Murdered By: Side B", ["Alfred's Theme", "Black Magic (feat. Skylar Grey)", "Tone Deaf", "Book of Rhymes (feat. DJ Premier)", "Favorite Bitch (feat. Ty Dolla $ign)", "Gnat", "Higher", "These Demons (feat. MAJ)", "Key - Skit", "She Loves Me", "Killer", "Zeus (feat. White Gold)", "Thus Far - Interlude", "Discombobulated"], "December 18, 2020"),
      ], eminemBio, "Resources/eminemtop.jpeg", "Resources/Eminem - Lose Yourself [HD].mp4", [new Influece(1, "J. Cole", jCole, "Resources/jcole.jpeg"), new Influece(2, "Logic", logic, "Resources/logic.jpg"), new Influece(3, "Chance the Rapper", chance, "Resources/chance.jpeg")],
      ["Resources/albums/eminem/eminem 1 Infinite.jpg","Resources/albums/eminem/eminem 2 the marshall matter lp.jpeg","Resources/albums/eminem/eminem 3 the slim shady lp jpg.jpg", "Resources/albums/eminem/eminem 4 The Eminem Show.jpg", "Resources/albums/eminem/eminem 5 Encore.jpeg", "Resources/albums/eminem/eminem 6 Relapse.jpeg", "Resources/albums/eminem/eminem 7 Recovery.jpg", "Resources/albums/eminem/eminem 8 The Marshall Mathers LP 2.jpeg","Resources/albums/eminem/eminem 9 Revival.jpeg","Resources/albums/eminem/eminem 10 Kamikaze.jpeg","Resources/albums/eminem/emiem 11 Music to Be Murdered By.jpg","Resources/albums/eminem/eminem 12 Music to Be Murdered By- Side B.jpeg"],"https://shop.eminem.com/?utm_campaign=nav&utm_medium=referral&utm_source=eminem.com"),
      new Artist(2, "Snoop Dogg", [
          new Album(1, "Doggystyle", ["Bathtub", "G Funk Intro", "Gin and Juice (feat. Dat Nigga Daz)", "Tha Shiznit", "Lodi Dodi (feat. Nancy Fletcher)", "Murder Was the Case (feat. Dat Nigga Daz)", "Serial Killa (feat. The D.O.C., RBX, and Tha Dogg Pound)", "Who Am I (What's My Name)?", "For All My Niggaz & Bitches (feat. Tha Dogg Pound and The Lady of Rage)", "Ain't No Fun (If the Homies Can't Have None) (feat. Nate Dogg, Warren G, and Kurupt)", "Doggy Dogg World (feat. Tha Dogg Pound and The Dramatics)", "Gz and Hustlas", "Pump Pump"], "November 23, 1993"),
          new Album(2, "Tha Doggfather", ["Snoop's Upside Ya Head", "Blueberry", "Traffic Jam", "Doggyland", "Downtown Assassins", "Outta Town Hoe", "Ghetto Walkin'", "Freestyle Conversation", "When I Grow Up", "Snoop Bounce", "Gold Rush", "Me and My Doggs", "You Thought", "Vapors", "Groupie", "2001", "Sixx Minutes", "Wake Up", "Snoop's Upside Ya Head (Remix)"], "November 12, 1996"),
          new Album(3, "Da Game Is to Be Sold, Not to Be Told", ["Snoop World", "Slow Down", "Gin and Juice II", "Show Me Love", "Hustle & Ball"], "August 4, 1996"),
          new Album(4, "No Limit Top Dogg", ["Intro", "Buck 'Em", "Trust Me", "Bitch Please (feat. Xzibit)", "Down 4 My N's (feat. C-Murder)"], "May 11, 1999"),
          new Album(5, "Tha Last Meal ", ["Intro", "Hennesey n Buddah", "Lay Low (feat. Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz)", "Wrong Idea (feat. Bad Azz, Kokane & Lil HD)", "Loosen' Control (feat. Butch Cassidy)"], "December 19, 2000"),
          new Album(6, "Paid tha Cost to Be da Boss", ["Don Doggy", "Da Bo$$ Would Like To See You", "Lollipop", "From tha Chuuuch to da Palace (feat. Pharrell Williams)", "Beautiful (feat. Pharrell Williams)"], "November 26, 2002"),
          new Album(7, "R&G (Rhythm & Gangsta): The Masterpiece", ["Intro", "Drop It Like It's Hot (feat. Pharrell Williams)", "Can I Get a Flicc Witchu (feat. Bootsy Collins)", "Ups & Downs (feat. The Bee Gees)", "The Bidness"], "November 16, 2004"),
          new Album(8, "Tha Blue Carpet Treatment", ["Intrology (feat. George Clinton)", "Think About It", "Crazy (feat. Nate Dogg)", "Vato (feat. B-Real)", "That's That (feat. R. Kelly)"], "November 21, 2006"),
          new Album(9, "Ego Trippin", ["A Word Witchya! (Intro)", "Press Play", "SD Is Out", "My Medicine", "Neva Have 2 Worry"], "March 11, 2008"),
          new Album(10, "Malice n Wonderland", ["Intro", "I Wanna Rock", "2 Minute Warning", "1800 (feat. Lil Jon)", "Different Languages (feat. Jazmine Sullivan)"], "December 8, 2009"),
          new Album(11, "Doggumentary", ["Toyz N Da Hood", "The Way Life Used to Be", "My Own Way (feat. Mr. Porter)", "Wonder What It Do", "Peer Pressure"], "March 29, 2011"),
          new Album(12, "Reincarnated", ["Here Comes the King (feat. Angela Hunte)", "Lighters Up (feat. Mavado & Popcaan)", "No Guns Allowed (feat. Drake & Cori B)", "Torn Apart (feat. Rita Ora)", "Ashtrays and Heartbreaks(feat. Miley Cyrus)"], "April 23, 2013"),
          new Album(13, "Bush", ["California Roll (feat. Stevie Wonder)", "So Many Pros", "Peaches N Cream (feat. Charlie Wilson)", "R U A Freak", "This City"], "May 12, 2015"),
          new Album(14, "Coolaid", ["Legend", "Ten Toes Down", "Don't Stop (feat. Too $hort)", "Super Crip", "Point Seen Money Gone (feat. Jeremih)"], "July 1, 2016"),
          new Album(15, "Neva Left", ["Mount Kushmore (feat. Redman, Method Man & B-Real)", "Trash Bags (feat. K Camp)", "Moment I Feared (feat. Rick Rock)", "Promise You This", "Go On (feat. October London)"], "May 19, 2017"),
          new Album(16, "Bible of Love", ["Words Are Few (feat. B Slade)", "Blessing Me Again (feat. Rance Allen)", "One More Day (feat. Charlie Wilson)", "Saved (feat. Faith Evans & 3rd Generation (Bereal Family))", "Come as You Are (feat. Marvin Sapp & Mary Mary)"], "March 16, 2018"),
          new Album(17, "I Wanna Thank Me", ["What U Talkin' Bout", "Let Bygones Be Bygones", "One Blood, One Cuzz (feat. DJ Battlecat)", "Countdown (feat. Swizz Beatz)", "I Wanna Thank Me"], "August 16, 2019")
      ], snoopDoggBio, "Resources/snooptpo2.avif", "resources/Snoop Dogg - Who Am I (What's My Name)_.mp4", [new Influece(1, "Tyler the Creator", tyler, "Resources/tyler.jpeg"), new Influece(2, "Wiz Khalifa", wiz, "Resources/wiz.jpeg"), new Influece(3,"Lil Wayne", lil, "Resources/lil.jpeg" )], ["Resources/albums/snoop/snoop 1 Doggystyle.jpg","Resources/albums/snoop/snoop 2 Tha Doggfather.jpeg","Resources/albums/snoop/snoop 3 Da Game Is to Be Sold, Not to Be Told.jpeg","Resources/albums/snoop/snoop 4 No Limit Top Dogg.jpeg","Resources/albums/snoop/snoop 5 Tha Last Meal.jpeg","Resources/albums/snoop/snoop 6 Paid tha Cost to Be da Boss.jpg","Resources/albums/snoop/snoop 7 R&G (Rhythm & Gangsta)- The Masterpiece.webp","Resources/albums/snoop/snoop 8 Tha Blue Carpet Treatment.jpeg","Resources/albums/snoop/snoop 9 Ego Trippin.jpeg","Resources/albums/snoop/snoop 10 Malice n Wonderland.jpeg","Resources/albums/snoop/snoop 11 Doggumentary.jpeg", "Resources/albums/snoop/snoop 12 Reincarnated.jpeg","Resources/albums/snoop/snoop 13 Bush.webp","Resources/albums/snoop/snoop 14 Coolaid.jpeg","Resources/albums/snoop/snoop 15 Neva Left.png", "Resources/albums/snoop/snoop 16 Bible of Love.webp","Resources/albums/snoop/snoop 17 I Wanna Thank Me.jpeg"], "https://www.snoopermarket.com/"),
      new Artist(3, "Dr. Dre", [
          new Album(1, "The Chronic", ["Nuthin' but a 'G' Thang", "Let Me Ride", "Fuck wit Dre Day (And Everybody's Celebratin')", "The Day the Niggaz Took Over", "Lil' Ghetto Boy"], "December 15, 1992"),
          new Album(2, "Dr. Dre Presents... The Aftermath", ["East Coast/West Coast Killas (feat. RBX, KRS-One, B-Real, Nas)", "Shittin' on the World", "Been There, Done That", "Fame", "Group Therapy"], "November 26, 1996"),
          new Album(3, "2001", ["Still D.R.E. (feat. Snoop Dogg)", "Forgot About Dre (feat. Eminem)", "The Next Episode (feat. Snoop Dogg, Kurupt, Nate Dogg)", "Xxplosive (feat. Hittman, Kurupt, Nate Dogg, Six-Two)", "What's the Difference (feat. Eminem, Xzibit)]"], "November 16, 1999"),
          new Album(4, "Compton", ["Talk About It (feat. King Mez & Justus)", "Genocide (feat. Kendrick Lamar, Marsha Ambrosius, & Candice Pillay)", "Deep Water (feat. Kendrick Lamar, Justus, & Anderson .Paak)", "Darkside/Gone (feat. King Mez, Marsha Ambrosius, & Kendrick Lamar)", "One Shot One Kill (feat. Snoop Dogg)]"], "August 7, 2015"),
      ], drDreBio,"Resources/drdre4.jpeg", "resources/Dr. Dre - Keep Their Heads Ringin' (Official Video) [Explicit].mp4", [new Influece(1, "Anderson Paak", anderson, "Resources/anderson.jpeg" ), new Influece(2, "Vince Staples", vince,"Resources/vince.jpeg"), new Influece(3, "Nas", nas, "Resources/nas.jpeg" )], ["Resources/albums/dre/dre1.jpeg","Resources/albums/dre/dre2.jpeg","Resources/albums/dre/dre3.jpeg","Resources/albums/dre/dre4.jpeg"], "https://www.merchbar.com/r-b-hiphop-rap/dr-dre"),
      new Artist(4, "Kendrick Lamar", [
          new Album(1, "Section.80", ["HiiiPoWeR", "A.D.H.D", "Hol' Up", "Ronald Reagan Era (His Evils)", "Rigamortus"], "July 2, 2011"),
          new Album(2, "Good kid, M.A.A.D city", ["Sherane a.k.a Master Splinter's Daughter", "Bitch, Don’t Kill My Vibe", "Backseat Freestyle", "The Art of Peer Pressure", "Money Trees (feat. Jay Rock)]"], "October 22, 2012"),
          new Album(3, "To Pimp a Butterfly", ["Wesley's Theory (feat. George Clinton & Thundercat)", "King Kunta", "Alright", "These Walls (feat. Bilal, Anna Wise & Thundercat)", "The Blacker the Berry"], "March 15, 2015"),
          new Album(4, "Damn", ["BLOOD.", "DNA.", "ELEMENT.", "LOYALTY. (feat. Rihanna)", "LOVE. (feat. Zacari)"], "April 14, 2017"),
          new Album(5, "Mr. Morale & the Big Steppers", ["United in Grief", "N95", "Die Hard", "We Cry Together", "Worldwide Steppers"], "May 13, 2022")
      ],kendrickLamarBio, "Resources/kendrick-lamar.jpeg", "resources/Kendrick Lamar - N95.mp4", [new Influece(1, "Drake", drake, "Resources/drake.webp"), new Influece(2, "SZA", sza,"Resources/sza.jpeg"), new Influece(3, "Travis Scott", travis,"Resources/travis.jpeg")], ["Resources/albums/kendrick/kendrick1.webp","Resources/albums/kendrick/kendrick 2 Good kid, M.A.A.D city.jpeg","Resources/albums/kendrick/kendrick 3 To Pimp a Butterfly.webp","Resources/albums/kendrick/kendrick 4 Damn.webp","Resources/albums/kendrick/kendrick5.webp"], "https://kendrick-lamar.shop/"),
      new Artist(5, "Mary J. Blige", [
          new Album(2, "What's the 411?", ["You Remind Me", "Real Love", "Reminisce", "Sweet Thing", "Love No Limit"], "July 28, 1992"),
          new Album(1, "My Life", ["Be Happy", "I'm Going Down", "My Life", "Mary Jane (All Night Long)", "You Bring Me Joy"], "November 29, 1994"),
          new Album(4, "Share My World", ["I Can Love You (feat. Lil' Kim)", "Love Is All We Need (feat. Nas)", "Not Gon' Cry", "Everything", "Missing You (feat. Faith Evans)"], "April 22, 1997"),
          new Album(5, "Mary", ["All That I Can Say", "Deep Inside", "Your Child", "Give Me You", "I'm in Love"], "August 17, 1999"),
          new Album(6, "No More Drama", ["Family Affair", "No More Drama", "Rainy Dayz (feat. Ja Rule)", "PMS", "Dance for Me"], "August 28, 2001"), 
          new Album(7, "Love & Life", ["Love @ 1st Sight (feat. Method Man)", "Ooh!", "Not Today (feat. Eve)", "Whenever I Say Your Name (feat. Sting)", "Press On"], "August 26, 2003"),
          new Album(8, "The Breakthrough", ["Be Without You", "Enough Cryin' (feat. Brook Lynn)", "Take Me as I Am", "One", "Good Woman Down"], "December 20, 2005"),
          new Album(9, "Growing Pains", ["Just Fine", "Work That", "Grown Woman (feat. Ludacris)", "Feel Like a Woman", "Stay Down"], "December 18, 2007"),
          new Album(10, "Stronger with Each Tear", ["The One", "I Am", "Good Love", "Each Tear (feat. Jay Sean)", "I Love U (Yes I Du)"], "December 21, 2009"),
          new Album(11, "My Life II... The Journey Continues (Act 1)", ["Mr. Wrong (feat. Drake)", "25/8", "Don't Mind", "Love a Woman (feat. Beyoncé)", "Feel Inside (feat. Nas)"], "November 21, 2011"),
          new Album(12, "A Mary Christmas", ["Have Yourself a Merry Little Christmas", "This Christmas", "Rudolph the Red-Nosed Reindeer (feat. Jessie J)", "My Favorite Things", "The Christmas Song (Chestnuts Roasting on an Open Fire)"], "October 15, 2013"),
          new Album(13, "The London Sessions", ["Therapy", "Whole Damn Year", "Nobody But You", "Not Loving You", "Doubt"], "December 2, 2014"),
          new Album(14, "Strength of a Woman", ["Thick of It", "U + Me (Love Lesson)", "Set Me Free", "Glow Up (feat. Quavo, DJ Khaled, & Missy Elliott)", "Indestructible"], "April 28, 2017")
      ], maryJBligeBio, "resources/marytop.jpeg", "resources/Mary J. Blige - No More Drama (Official Music Video).mp4", [new Influece(1,"Jay-Z", jayz,"Resources/jayz.webp"), new Influece(2,"Doja Cat", doja, "Resources/doja.webp"), new Influece(3, "Megan Thee Stallion", megan, "Resources/megan.jpeg")], ["Resources/albums/mary/mary 1.jpeg","Resources/albums/mary/mary 2.jpeg", "Resources/albums/mary/mary 3.jpg", "Resources/albums/mary/mary 4.jpeg","Resources/albums/mary/mary 5.jpeg","Resources/albums/mary/mary 6.jpeg","Resources/albums/mary/mary 7.jpeg","Resources/albums/mary/mary 8.jpeg","Resources/albums/mary/mary 9.jpg", "Resources/albums/mary/mary 10.jpeg","Resources/albums/mary/mary 11.jpeg", "Resources/albums/mary/mary 12.jpeg", "Resources/albums/mary/mary 13.jpg" ], "https://shop.maryjblige.com/" ),
      ];
        

export { artistList };