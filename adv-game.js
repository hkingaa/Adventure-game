let readline = require('readline-sync');
console.log('Üdvözöllek a játékban. Jó túlélést kívánok!');

let secondGood = '2. Be sietsz a tanárnőd után a lakásba. Kiderült, hogy bár ostoba voltál matekból de valamiért mégis te voltál a kedvence, ezért neked adja a megboldogult férje egyik kocsijának a kulcsát, hogy elhagyhasd a várost. Az egyik egy régi kis Polski a másik egy BMW. Melyiket választod? [1] Kis Polski [2] BMW';
let secondBad = '2.Eszedbe jut mennyire gyűlölted ezt a banyát, ezért inkább úgy döntesz futsz tovább, befordulsz egy háztömb végén de egy kiálló cső felnyársal. Utolsó gondolatod, hogy még mindig nem tudod, hogy kell felírni egy másodfokú függvény megoldóképletét. GAME OVER';
let thirdGood = '3. Kihajtasz a leharcolt kisPolskiddal a garázsból, lassan döcög de legalább megy.  Annyira jelentéktelenül furikálsz vele az utcákon hogy, senki nem figyel fel rád, így sikeresen kijutsz a városból. Útelágazáshoz érsz, választhatsz, hogy az Erdő felé veszed az irányt vagy kimész a repülőtérre. [1] Erdő [2] Repülőtér';
let thirdBad = '3. A BMW-t választod, azt hiszed jól döntöttél de mikor a gettó negyedbe hajtasz a helyi kubai banda felfigyel a puccos kocsidra, nagyon felidegesítetted őket így betörik a szélvédődet, kirángatnak a kocsidból és megsimogatnak az öklükkel. GAME OVER';
let fourthGood = '4. Befordultál az erdei útra, de kifogyott a benzined. Úgy emlékszel van a közelben egy benzinkút elmehetnél oda gyalog. Az is eszedbe jut, hogy az unokatesód Igor erre felé lakik , talán segíthetne. Merre mész? [1] Benzinkút [2] Unokatesó';
let fourthBad = '4. A repülőtérre mész, hirtelen egy helikopter közeledik feléd, a maffia megtalált. A helikopter ajtaja kivágódik és a fegyveres pasasok kilövik a kerekedet. Elveszted az uralmat a kocsi felett és a szemközti sávba sodródsz. Az utolsó gondolatod, az hogy milyen finom nagyanyád húslevese mielőtt elcsap egy kamion. GAME OVER';
let fifthGood = '5. Egy földúton az unokatesód háza felé veszed az irányt. Épségben odaérsz hozzá. Bekopogsz a faháza ajtaján. Igor nem örül neked mert egyszer régen jól átvágtad, ami miatt elvesztette az összes pénzét, ezért kell most ebben lepukkant erdei kunyhóban laknia. Most az ajtóban áll és puskát fog a fejedhez. Megpróbálod vele megbeszélni a dolgot vagy megpróbálod puszta kézzel leszerelni? [1] Megbeszéled vele [2] Harcolsz';
let fifthBad = '5. Kezded azt hinni, hogy rosszul emlékszel mert már vagy egy órája koptatod a föld utat, de benzinkútnak nyoma sincs. Már épp arra gondolsz, hogy visszafordulsz, mikor a bokrok közül eléd ugrik egy hegyi oroszlán. Próbálod magad halottnak tettetni, de ezeket az okos jószágokat nehéz átverni. Hamar lerágja az arcod. GAME OVER';
let sixthGood = '6. Felveted az ötletet, hogy beszéljétek meg a dolgot egy üveg vodka mellett. Remek húzás, Igor nagyon szereti a piát, ezért hajlandó tárgyalni veled, bár szíve szerint még mindig lelőne. Épp a konyhában áll neked háttal, igyekszik megtölteni a poharakat a vodkával, jó lehetőségnek kívánkozik, hogy hátba támadd. Mit teszel? [1] Megtámadod hátulról [2] Megpróbálod leitatni ';
let sixthBad = '6. A meglepetés erejével kiütöd Igor kezéből a puskát, az a földre esik, megpróbálsz utána nyúlni de alábecsülted Igort, elfelejtetted, hogy a szibériai katonaság egyik elit tisztje volt, a társai csak Csontzúzónak becézték, mert puszta kézzel ölte az embereket. Most pedig a te gerincedet töri ketté egy kézzel. Utolsó gondolatod, hogy jól esne most egy kis vodka. GAME OVER';
let seventhGood = '7. Már a 9. kör vodkánál tartotok. Igor ellenszenve ugyan nem csillapodott irántad, de az alkohol hatására kicsit háttérbe szorult. Látod rajta, hogy az érzékszervei kezdenek betompulni és mindjárt elalszik. Úgy gondolod ez megfelelő alkalom a sietősen távozásra. Kilépsz a viskóból amikor a hold derengő fényénél meglátod, hogy a ház mögött az erdőnél egy folyó csordogál. A parton észreveszel egy aprócska kikötőt és egy csónakot. Borzasztóan buta voltál földrajzból, nem tudod melyik irányba folyik a folyó, de ha szerencséd van eljuthatsz rajta egy közeli városba, ahol vannak barátaid. Mit teszel [1] Elkötöd a csónakot [2] Megpróbálsz a ház körül benzint találni és visszamész a kocsihoz';
let seventhBad = '7. Megpróbálod megtámadni őt hátulról, de mindig elfelejted, hogy Igor egy elit katona a szibériai frontról, ráadásul olyan élesek az ösztönei mint egy macskának, egyből észleli, hogy közeledsz felé és egy mozdulattal kitöri a nyakadat. Utolsó gondolatod az, hogy ez ma nem a te napod. GAME OVER';
let eightGood = '8. Sikerült elkötnöd a csónakot, és szerencsédre a folyó is jó irányba folyik. Néhány órán belül eljutsz rajta egy városba ahol meglátogatod Paolo barátodat. Mindig segít neked okmányokat hamisítani meg új kinézetet adni, hogy új életet kezdhess. Miután kopaszra nyírta a fejbőrödet és megkaptad tőle az új iratokat azt tanácsolja menj Firenzébe, a családja befogad és ott majd tiszta lappal indulhatsz. Segít felszállni a vonatra, te pedig egyedül maradsz reményekkel telve, és az újra kezdés bíztató gondolatával. VÉGE';
let eightBad = '8. Körbeszaglászol a ház körül, találsz is egy benzin feliratú flaskát. Ám ekkor megjelenik a küszöbnél a részeg Igor, azt ordibálja, hogy elárultad. Szaladni kezdesz de még részegen a sötétben is simán fejbe lő a puskájával. GAME OVER';

const ujra = () => {
  let uj = readline.keyIn('Szeretnéd újra kezdeni? y/n');
  if (uj === 'y') {
    game();
  } else if (uj === 'n') {
    console.log('Köszi, hogy játszottál. Viszlát!');
    process.exit();
  }
};

const game = () => {
  let first = readline.keyIn('1. Magadra haragítottad az orosz maffiát és a barom társad Boris miatt már a nyomodban vannak, épp egy sikátorba menekülsz előlük. Egyszercsak egy idős hölgy kipisszeg neked az egyik földszinti lakás ajtaja mögül. Felismered őt, a volt matektanárod az. Hevesen integet hogy menj utána. Megbízol benne és követed őt a lakásába vagy inkább menekülsz tovább? [1] Követed a nőt [2] Futsz tovább');
  if (first === '1') {
    let second = readline.keyIn(secondGood);
    if (second === '1') {
      let third = readline.keyIn(thirdGood);
      if (third === '1') {
        let fourth = readline.keyIn(fourthGood);
        if (fourth === '2') {
          let fifth = readline.keyIn(fifthGood);
          if (fifth === '1') {
            let sixth = readline.keyIn(sixthGood);
            if (sixth === '2') {
              let seventh = readline.keyIn(seventhGood);
              if (seventh === '1') {
                console.log(eightGood);
                console.log('Gratulálok, végigjátszottad a játékot!');
              } else if (seventh === '2') {
                console.log(eightBad);
                ujra();
              }
            } else if (sixth === '1') {
              console.log(seventhBad);
              ujra();
            }
          } else if (fifth === '2') {
            console.log(sixthBad);
            ujra();
          }
        } else if (fourth === '1') {
          console.log(fifthBad);
          ujra();
        }
      } else if (third === '2') {
        console.log(fourthBad);
        ujra();
      }
    } else if (second === '2') {
      console.log(thirdBad);
      ujra();
    }
  } else if (first === '2') {
    console.log(secondBad);
    ujra();
  }
};

game();
