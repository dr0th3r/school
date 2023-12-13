const lectionContainer = document.querySelector(".lection");

texts = {
  1: "",
  2: "",
  5: "dusil sil, klid klidu, dusil sil, dusili dusil dusil sil, klasik klasik, radil jsi laik, laiků, dusili sili, laik, laiků, klasik, klasiků, radil jsi, klid klidu, lidu, radil jsi, lid lidu, dusili dusil sil, klid klidu, dali ji, dusil",
  14: `úhrady dluhů, útoky tisku, údaje o skladu, túry do hor, sklidili úrodu, dostal úroky, úklid parku, hledali úspory, úkoly politika, úloha kritiky, starty letadel, start rakety, dostal úkoly, podepsal dopisy, podepsal úpis, platil útratu, odeslali úhradu tohoto dluhu, dodali údaje pro statistiku, dostali jste údaje o odletu letadla, starali se o úsek lesů, urgujete tapety, pojistil úspory, urgujete laky a pasty, dopsali jste údaje do tiskopisu, prodali jste úrodu okurek, úhrady dluhů, útoky tisku, údaje o skladu, túry do hor, sklidili úrodu, dostal úroky, úklid parku, hledali úspory, úkoly politika, úloha kritiky, starty letadel, start rakety, dostal úkoly, podepsal dopisy, podepsal úpis, platil útratu, odeslali úhradu tohoto dluhu, dodali údaje pro statistiku, dostali jste údaje o odletu letadla, starali se o úsek lesů, urgujete tapety, pojistil úspory, urgujete laky a pasty, dopsali jste údaje do tiskopisu, prodali jste úrodu okurek, úhrady dluhů, útoky tisku, údaje o skladu, túry do hor, sklidili úrodu, dostal úroky, úklid parku, hledali úspory, úkoly politika, úloha kritiky, starty letadel, start rakety, dostal úkoly, podepsal dopisy, podepsal úpis, platil útratu, odeslali úhradu tohoto dluhu, dodali údaje pro statistiku, dostali jste údaje o odletu letadla, starali se o úsek lesů, urgujete tapety, pojistil úspory, urgujete laky a pasty, dopsali jste údaje do tiskopisu, prodali jste úrodu okurek,`,
  16: `trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury, úlomek skla, usilujeme o růst jakosti motorů, usilujeme o růst jakosti motorů, platili jsme tyto faktury, trik reklamy, reklamujeme sto kilogramů medu, trysky motoru, trosky letadla, mimo dům, platili jsme tyto faktury,`,
  17: `hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter, odeslali jste faktury do Mostu, hledali Persea a Hada, psal do Lokte, hledali Persea a Hada, hledali Persea a Hada, podepsali jsme dohodu o koupi domku u Prahy, hledali dalekohledem Mars a Jupiter,`,
  18: `Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti. Motory jsme odeslali do Lokte. Hledali jsme hotel. Prodej stoupl s růstem jakosti. Petr Kala studuje matematiku. Jeli jsme trajektem. Hledali jsme hotel. Psali jsme majitelům domků. Prodej stoupl s růstem jakosti.`,
  19: `Posoudili jste vady motorků. Psali jste omluvu do Jihlavy. Upustili jste od úmyslu jet do Opavy. Import strojů v listopadu poklesl. Koupili jste domek u Kralup. Posoudili jste vady motorků. Import strojů v listopadu poklesl. Posoudili jste vady motorků. Katalog pro galerii tiskla firma Kotek, Plumlov. Posoudili jste vady motorků. Psali jste omluvu do Jihlavy. Upustili jste od úmyslu jet do Opavy. Import strojů v listopadu poklesl. Koupili jste domek u Kralup. Posoudili jste vady motorků. Import strojů v listopadu poklesl. Posoudili jste vady motorků. Katalog pro galerii tiskla firma Kotek, Plumlov. Posoudili jste vady motorků. Psali jste omluvu do Jihlavy. Upustili jste od úmyslu jet do Opavy. Import strojů v listopadu poklesl. Koupili jste domek u Kralup. Posoudili jste vady motorků. Import strojů v listopadu poklesl. Posoudili jste vady motorků. Katalog pro galerii tiskla firma Kotek, Plumlov. Posoudili jste vady motorků. Psali jste omluvu do Jihlavy. Upustili jste od úmyslu jet do Opavy. Import strojů v listopadu poklesl. Koupili jste domek u Kralup. Posoudili jste vady motorků. Import strojů v listopadu poklesl. Posoudili jste vady motorků. Katalog pro galerii tiskla firma Kotek, Plumlov. Posoudili jste vady motorků. Psali jste omluvu do Jihlavy. Upustili jste od úmyslu jet do Opavy. Import strojů v listopadu poklesl. Koupili jste domek u Kralup. Posoudili jste vady motorků. Import strojů v listopadu poklesl.`,
  20: `V diskusi vystoupil p. Sudek. Sledujeme programy divadel. Sledujeme programy divadel. Spory se vyhrotily. Tolerovali jsme postoj kolegů. Sledujeme vliv reklamy v tisku. Studovali jsme status tohoto spolku. Veslovali jsme proti proudu Svitavy. Spory se vyhrotily. Tolerovali jsme postoj kolegů. V diskusi vystoupil p. Sudek. Sledujeme programy divadel. Sledujeme programy divadel. Spory se vyhrotily. Tolerovali jsme postoj kolegů. Sledujeme vliv reklamy v tisku. Studovali jsme status tohoto spolku. Veslovali jsme proti proudu Svitavy. Spory se vyhrotily. Tolerovali jsme postoj kolegů. V diskusi vystoupil p. Sudek. Sledujeme programy divadel. Sledujeme programy divadel. Spory se vyhrotily. Tolerovali jsme postoj kolegů. Sledujeme vliv reklamy v tisku. Studovali jsme status tohoto spolku. Veslovali jsme proti proudu Svitavy. Spory se vyhrotily. Tolerovali jsme postoj kolegů. V diskusi vystoupil p. Sudek. Sledujeme programy divadel. Sledujeme programy divadel. Spory se vyhrotily. Tolerovali jsme postoj kolegů. Sledujeme vliv reklamy v tisku. Studovali jsme status tohoto spolku. Veslovali jsme proti proudu Svitavy. Spory se vyhrotily. Tolerovali jsme postoj kolegů. V diskusi vystoupil p. Sudek. Sledujeme programy divadel. Sledujeme programy divadel. Spory se vyhrotily. Tolerovali jsme postoj kolegů. Sledujeme vliv reklamy v tisku. Studovali jsme status tohoto spolku. Veslovali jsme proti proudu Svitavy. Spory se vyhrotily.`,
  22: `Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Dostal jste dopis od kolegy z Polska. Rozhodli jste se pro odjezd do Rakouska. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Dostal jste dopis od kolegy z Polska. Rozhodli jste se pro odjezd do Rakouska. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Dostal jste dopis od kolegy z Polska. Rozhodli jste se pro odjezd do Rakouska. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Dostal jste dopis od kolegy z Polska. Rozhodli jste se pro odjezd do Rakouska. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Odeslali jsme dopis, dva vzorky, prospekty a katalog. Rozprodali jste stoly. Dostal jste dopis od kolegy z Polska. Rozhodli jste se pro odjezd do Rakouska.`,
  23: `Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Setkali jsme se tady u mostu. Setkali jsme se tady umostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Sledujeme programy divadel. Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Setkali jsme se tady u mostu. Setkali jsme se tady umostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Sledujeme programy divadel. Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Setkali jsme se tady u mostu. Setkali jsme se tady umostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Sledujeme programy divadel. Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Setkali jsme se tady u mostu. Setkali jsme se tady umostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Sledujeme programy divadel. Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Setkali jsme se tady u mostu. Setkali jsme se tady umostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku. Sledujeme programy divadel. Setkali jsme se tady u mostu. Veslovali jsme proti proudu Svitavy. Studovali jsme status tohoto spolku.`,
  24: `vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy - poskytli jsme slevu - rozprodali stolky - poskytli jsme slevu - hledali jsme důkazy - vklady vzrostly - hledali jsme důkazy - rozprodali stolky - hledali vklady vzrostly - poskytli jsme slevu - vklady vzrostly - dali rozkazy`,
  25: `Pokud chcete partnera zaujmout dopisem, je nutno ho promyslit. Poznamenejte si osnovu. Myslete na stanovisko partnera a jeho argumenty hned vyvracejte. Stylizaci volte úspornou, logickou, srozumitelnou a pravdivou. Neopakujte slova. Svou velkou roli hraje i úprava a pravopis. Podtrhuje to dojem z dopisu. Pokud chcete partnera zaujmout dopisem, je nutno ho promyslit. Poznamenejte si osnovu. Myslete na stanovisko partnera a jeho argumenty hned vyvracejte. Stylizaci volte úspornou, logickou, srozumitelnou a pravdivou. Neopakujte slova. Svou velkou roli hraje i úprava a pravopis. Podtrhuje to dojem z dopisu. Pokud chcete partnera zaujmout dopisem, je nutno ho promyslit. Poznamenejte si osnovu. Myslete na stanovisko partnera a jeho argumenty hned vyvracejte. Stylizaci volte úspornou, logickou, srozumitelnou a pravdivou. Neopakujte slova. Svou velkou roli hraje i úprava a pravopis. Podtrhuje to dojem z dopisu. Pokud chcete partnera zaujmout dopisem, je nutno ho promyslit. Poznamenejte si osnovu. Myslete na stanovisko partnera a jeho argumenty hned vyvracejte. Stylizaci volte úspornou, logickou, srozumitelnou a pravdivou. Neopakujte slova. Svou velkou roli hraje i úprava a pravopis. Podtrhuje to dojem z dopisu. Pokud chcete partnera zaujmout dopisem, je nutno ho promyslit. Poznamenejte si osnovu. Myslete na stanovisko partnera a jeho argumenty hned vyvracejte. Stylizaci volte úspornou, logickou, srozumitelnou a pravdivou.`,
  26: `Vypracovali jsme program pro obnovu Brodu. Zavedeme plynovod a kabelovou televizi. Objednali jsme projekt rekonstrukce bytů. Bude se renovovat kostel a sochy z doby baroka. V centru budou prostory pro obchody. Turisty ubytuje hotel Beseda nebo hotel U Jelena. Bude postaven objezd pro automobilovou dopravu. Vypracovali jsme program pro obnovu Brodu. Zavedeme plynovod a kabelovou televizi. Objednali jsme projekt rekonstrukce bytů. Bude se renovovat kostel a sochy z doby baroka. V centru budou prostory pro obchody. Turisty ubytuje hotel Beseda nebo hotel U Jelena. Bude postaven objezd pro automobilovou dopravu. Vypracovali jsme program pro obnovu Brodu. Zavedeme plynovod a kabelovou televizi. Objednali jsme projekt rekonstrukce bytů. Bude se renovovat kostel a sochy z doby baroka. V centru budou prostory pro obchody. Turisty ubytuje hotel Beseda nebo hotel U Jelena. Bude postaven objezd pro automobilovou dopravu. Vypracovali jsme program pro obnovu Brodu. Zavedeme plynovod a kabelovou televizi. Objednali jsme projekt rekonstrukce bytů. Bude se renovovat kostel a sochy z doby baroka. V centru budou prostory pro obchody. Turisty ubytuje hotel Beseda nebo hotel U Jelena. Bude postaven objezd pro automobilovou dopravu. Vypracovali jsme program pro obnovu Brodu. Zavedeme plynovod a kabelovou televizi. Objednali jsme projekt rekonstrukce bytů. Bude se renovovat kostel a sochy z doby baroka. V centru budou prostory pro obchody.`,
  27: `Na veletrhu jsme dnes sjednali kontrakt pro export cementu. Expedovali jsme ze skladu sedm tun vlny a deset tun bavlny. Dovolujeme si upozornit na novou kolekci tkanin pro export. Tyto druhy textilu by firma ihned prodala za uvedenou cenu. Budeme vytrvale prosazovat, aby podniky omezovaly exhalace. Na veletrhu jsme dnes sjednali kontrakt pro export cementu. Expedovali jsme ze skladu sedm tun vlny a deset tun bavlny. Dovolujeme si upozornit na novou kolekci tkanin pro export. Tyto druhy textilu by firma ihned prodala za uvedenou cenu. Budeme vytrvale prosazovat, aby podniky omezovaly exhalace. Na veletrhu jsme dnes sjednali kontrakt pro export cementu. Expedovali jsme ze skladu sedm tun vlny a deset tun bavlny. Dovolujeme si upozornit na novou kolekci tkanin pro export. Tyto druhy textilu by firma ihned prodala za uvedenou cenu. Budeme vytrvale prosazovat, aby podniky omezovaly exhalace. Na veletrhu jsme dnes sjednali kontrakt pro export cementu. Expedovali jsme ze skladu sedm tun vlny a deset tun bavlny. Dovolujeme si upozornit na novou kolekci tkanin pro export. Tyto druhy textilu by firma ihned prodala za uvedenou cenu. Budeme vytrvale prosazovat, aby podniky omezovaly exhalace. Na veletrhu jsme dnes sjednali kontrakt pro export cementu. Expedovali jsme ze skladu sedm tun vlny a deset tun bavlny. Dovolujeme si upozornit na novou kolekci tkanin pro export. Tyto druhy textilu by firma ihned prodala za uvedenou cenu.`,
  28: `Odeslali jsme obratem potvrzenou smlouvu. Obaly odebereme. Bude-li kvalita obalů vyhovovat, budeme je trvale kupovat. Nebudete-li moci obaly dodat do ledna, smlouvu stornujeme. Fakturu za jablka je nutno poslat do dvou dnů po expedici. Krabice a bedny dodejte do konce ledna do skladu v Brodku. V Praze jsou v provozu trasy metra A, B a C. Metro je skryto do tunelů, ale na okraji Prahy jsou trasy vedeny i na povrchu. Metro disponuje velkou kapacitou, je schopno zajistit hromadnou dopravu osob z centra ven a naopak. Vizitkou metra jsou jeho stanice. Jsou zdobeny obklady z keramiky, skla, mramoru, kovu. Odeslali jsme obratem potvrzenou smlouvu. Obaly odebereme. Bude-li kvalita obalů vyhovovat, budeme je trvale kupovat. Nebudete-li moci obaly dodat do ledna, smlouvu stornujeme. Fakturu za jablka je nutno poslat do dvou dnů po expedici. Krabice a bedny dodejte do konce ledna do skladu v Brodku. V Praze jsou v provozu trasy metra A, B a C. Metro je skryto do tunelů, ale na okraji Prahy jsou trasy vedeny i na povrchu. Metro disponuje velkou kapacitou, je schopno zajistit hromadnou dopravu osob z centra ven a naopak. Vizitkou metra jsou jeho stanice. Jsou zdobeny obklady z keramiky, skla, mramoru, kovu. Odeslali jsme obratem potvrzenou smlouvu. Obaly odebereme. Bude-li kvalita obalů vyhovovat, budeme je trvale kupovat. Nebudete-li moci obaly dodat do ledna, smlouvu stornujeme. Fakturu za jablka je nutno poslat do dvou dnů po expedici.`
};

letters = {
  1: [],
  2: [],
  5: ["i", ","],
  14: ["ú"],
  16: ["m"],
  17: ["p"],
  18: ["."],
  19: ["K"],
  20: ["K"], //truly shift left to reimplement later
  21: ["K"], //truly it is testing but left to reimplement later
  22: ["z", "-"],
  23: ["c"],
  24: ["-"], //opak
  25: ["n"],
  26: ["b"],
  27: ["x"],
  28: ["x"],
};

console.log(texts);

function renderLectionList() {
  const lections = Object.keys(texts);

  const lastLection = lections[lections.length - 1];

  for (const lection of lections) {
    const lectionEl = document.createElement("option");
    lectionEl.value = lection;
    lectionEl.textContent = `Lekce ${lection} {${letters[lection]}}`;
    lection === lastLection && (lectionEl.selected = true);

    console.log(lection === lastLection);

    lectionContainer.append(lectionEl);
  }
}

function getRandomArrayEl(array) {
  console.log(array);

  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function setWrongTexts(lectionId, wrongChar) {
  const baseText = texts[lectionId];

  const finalTexts = [];
  let tmpText = "";

  baseText.split(" ").forEach((text) => {
    if (tmpText.length + text.length < 75) {
      tmpText += ` ${text}`;
    } else {
      finalTexts.push(tmpText.trim());
      tmpText = text;
    }
  });

  const wrongCharPlace = [finalTexts[2].indexOf(wrongChar), 2];

  const textDiv = document.createElement("div");

  let charCount = 0;
  finalTexts.forEach((text, id) => {
    const wrongText = document.createElement("p");
    const wrongCountEl = document.createElement("p");
    wrongCountEl.textContent = "1";
    wrongCountEl.id = "wrong__count__bottom";

    if (id == wrongCharPlace[1]) {
      const leadingSpace = document.createElement("span");
      leadingSpace.style.color = "transparent";
      leadingSpace.textContent = "a".repeat(wrongCharPlace[0] - 1);
      wrongText.appendChild(leadingSpace);
      wrongText.innerHTML += wrongChar;
    } else {
      wrongText.textContent = "";
    }
    const correctText = document.createElement("p");
    correctText.textContent = text;
    wrongText.id = "cur__text";
    correctText.id = "cur__text";

    charCount += correctText.textContent.length;

    const charCountEl = document.createElement("p");
    charCountEl.textContent = charCount;
    charCountEl.id = "char__count__bottom";

    textDiv.appendChild(wrongText);
    if (id == wrongCharPlace[1]) {
      textDiv.appendChild(wrongCountEl);
    }
    textDiv.appendChild(charCountEl);
    textDiv.appendChild(correctText);
  });

  const bottomDiv = document.getElementById("bottom");
  bottomDiv.innerHTML = textDiv.innerHTML;
}

function setCorrectTexts(lectionId) {
  const baseText = texts[lectionId];

  const bottomDiv = document.getElementById("bottom");
  bottomDiv.innerHTML = "";

  let tmpText = "";
  let charCount = 0;

  baseText.split(" ").forEach((text) => {
    if (tmpText.length + text.length < 75) {
      tmpText += ` ${text}`;
    } else {
      const textEl = document.createElement("p");
      textEl.textContent = tmpText.trim();
      textEl.id = "cur__text";

      charCount += textEl.textContent.length;

      const charCountEl = document.createElement("p");
      charCountEl.textContent = charCount;
      charCountEl.id = "char__count__bottom";

      const emptyEl = document.createElement("p");
      emptyEl.id = "cur__text";

      bottomDiv.appendChild(emptyEl);
      bottomDiv.appendChild(charCountEl);
      bottomDiv.appendChild(textEl);

      tmpText = text;
    }
  });
}

function generateResults() {
  const lection = document.querySelector(".lection");
  const lectionId = parseInt(lection.value);

  console.log(lectionId);

  const wrongCountEl = document.getElementById("wrong__count");
  const speedEl = document.getElementById("speed");
  const wrongnessEl = document.getElementById("wrongness");
  const wrongCharsEl = document.getElementById("wrong__chars");
  const slowestCharsEl = document.getElementById("slowest__chars");

  const wrongCount = getRandomInt(0, 2);
  const speed = getRandomInt(100, 250);
  //const wrongness = (speed * 3) / wrongCount;

  wrongCountEl.textContent = `Počet chyb: ${wrongCount}`;
  speedEl.textContent = `Rychlost: ${speed} [úh/min]`;
  if (wrongCount > 0) {
    const wrongness = (wrongCount / (speed * 3)) * 90;
    const wrongChar = getRandomArrayEl(letters[lectionId]);
    wrongnessEl.textContent = `Chybovost: ${wrongness.toFixed(2)}`;
    wrongCharsEl.textContent = `Chybné znaky: ${wrongChar}`;
    setWrongTexts(14, "ú");
  } else {
    wrongnessEl.textContent = `Chybovost: 0.00`;
    wrongCharsEl.textContent = `Chybné znaky: `;
    setCorrectTexts(14);
  }
  slowestCharsEl.textContent = `Nejpomalejší znaky: ${getRandomArrayEl(
    letters[lectionId]
  )}`;
}

renderLectionList();
generateResults();

console.log(" ".repeat(15) + "test");
