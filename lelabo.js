
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
// }



window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


document.querySelector("#btn_scrollStart").addEventListener('click',()=>{
    window.scrollTo(   {left:0, top:0, behavior: "smooth"}   );
});


const select = document.querySelector("select");
const para = document.querySelector(".box-3 p");

select.addEventListener("change", setBrand);

function setBrand() {
    const choice = select.value;

    if (choice === "ga") {
    para.textContent =
        "갈리마드(Galimard), 겔랑(Guerlain), 겐조(KENZO), 구딸 파리(GOUTAL Paris), 구찌(GUCCI), 끌로에(Chloe), 까르띠에(Cartier) ";
    } else if (choice === "na") {
    para.textContent =
        "나르시소 로드리게즈(Narciso Rodriguez), 니샤네(Nishane), 논픽션(Nonfiction) ";
    } else if (choice === "da") {
    para.textContent =
        "다니스 (Dani's), 다비도프(Davidoff), 대니멕켄지(Dani Mackenzie), 더 디퍼런트 컴퍼니(The Different Company), 더바디샵(The Body Shop), 데메테르(Demeter), 도르세(D'Orsay), 돌체 앤 가바나(Dolce & Gabbana), 디에스앤더가(DS&DURGA), 디올(Dior), 딥티크(Diptyque) ";
    } else if (choice === "la") {
    para.textContent =
        "라몬모네갈(RAMON MONEGAL), 레르드사봉(L'AIR DE SAVON), 라코스테(Lacoste), 라티잔 파퓨미에르(L'artisan Parfumeur), 랑방(Lanvin), 랑세(Rance 1795), 랑콤(Lancome), LUSH, 로샤스(Rochas), 로에베(LOEWE), 로자 퍼퓸(ROJA Parfums), 록시땅, 루뱅(Lubin), 루이비통(Louis Vuitton), 르 라보(LE LABO) ";
    } else if (choice === "ma") {
    para.textContent =
        "마크 제이콥스(Marc Jacobs), 메모(MEMO Paris), 모멘센트(momenscent), 몽블랑(Montblanc), 몽클레르(MONCLER), 메종 마르지엘라(Maison Margiela), 메종 비올레(Maison Violet), 메종 프란시스 커정(Maison Francis Kurkdjian), 미르코 부피니 피렌체(Mirko Buffini Firenze), 밀러 해리스(Miller Harris)";
    } else if (choice === "ba") {
    para.textContent =
        "바이 킬리안(By Kilian), 반 클리프 앤 아펠(Van Cleef & Arpels), 발렌티노, 버버리(Burberry), 보테가 베네타(Bottega Veneta), 불가리(Bvlgari), 베라 왕(Vera Wang), 베르사체(Versace), 바이레도(BYREDO), 부쉐론(Boucheron), 불리 1803(Buly 1803), 빅터앤롤프(Viktor&Rolf)";
    } else if (choice === "sa") {
    para.textContent =
        "산타 마리아 노벨라(Santa Maria Novella), 샤넬(CHANEL), 쇼파드(Chopard), 스쿠데리아 페라리(Scuderia Ferrari), 세르주루텐(SERGE LUTENS)";
    } else if (choice === "a") {
    para.textContent =
        "아뜰리에 마테리(Atelier Materi), 아르마니(Armani), 아무아쥬(Amouage), 아베크롬비 & 피치(Abercrombie & Fitch), 아쿠아 디 파르마(Acqua di Parma), 아틀리에 코롱(Atelier Cologne), 안나수이(Anna Sui), 앳킨슨(ATKINSONS), 에따 리브르 도랑쥬(Etat Libre d'Orange), 에르메스(HERMES), 에스티 로더(Estée Lauder), 에어린(Aerin), 에이본(Avon), 에트로(ETRO), 엑스니힐로(EX NIHILO), 엘리자베스 아덴(Elizabeth Arden), 엘티 피버(LT Piver), 옛새(YETSAE), 오리자 L. 르그랑(Oriza L. Legrand), 우비강(Houbigant), 이솝(Aēsop), 이니시오(INITIO perfume prives), 이세이 미야케(Issey Miyake), 이스뜨와 드 퍼퓸(Histoires de Parfums), 어 랩 온 파이어(A LAB ON FIRE), 이브 생 로랑(Yves Saint Laurent)";
    } else if (choice === "za") {
    para.textContent =
        "장 폴 고티에(Jean Paul Gaultier), 제르조프(Xerjoff), 조 말론 런던(Jo Malone London), 조 러브스(Jo Loves), 존 바바토스(John Varvatos), 지미추(Jimmy Choo), 질 스튜어트(Jill Stuart)";
    } else if (choice === "ka") {
    para.textContent =
        "크리드(Creed), 캘빈 클라인(Calvin Klein), 케네스 콜(Kenneth Cole), 클린(Clean)";
    } else if (choice === "ta") {
    para.textContent =
        "타미 힐피거(Tommy Hilfiger), 토스코밧(Toskovat') , 톰 포드(Tom Ford), 트루동(TRUDON)";
    } else if (choice === "p") {
    para.textContent =
        "파코 라반(Paco Rabanne), 퍼퓸 드 말리(Parfums de Marly), 페라가모(Ferragamo), 페레 퍼퓨머(Féret Parfumeur), 펜할리곤스(Penhaligon's), 폴 스미스(Paul Smith), 폴로 랄프 로렌(Polo Ralph Lauren), 푸에그아(Fueguia), 푸이그(Puig), 프라고나르(Fragonard), 프라다(PRADA), 프레쉬(Fresh), 프레데릭 말(Frederic Malle), 플러(PHLUR), 플로리스(Floris), 피에르 기욤(Pierre Guillaume), 필로소피(Philosophy)";
    } else if (choice === "h") {
    para.textContent =
        "휴고 보스(Hugo Boss)";
    }else {
    para.textContent = "";
    }
}