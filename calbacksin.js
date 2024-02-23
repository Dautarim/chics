//Call back são funções que são chamadas por meio de argumento, ou ele entra na função como argumento

// setInterval(function scrol(){
//     window.scrollY()
// },1000)


let wind = document.querySelector(".layer_foto")
let windimg = document.querySelector("#imgsel")

let conntainer = document.querySelector(".container")

const imagelist = [
    "https://babes.plus/sexpics/monstercurves/lela-star/tities-brunette-writing/lela-star-11.jpg",
    "https://celeb.gate.cc/media/cache/image/upload/m/a/madison-ivy-porno-578891.jpg",
    "https://static-ca-cdn.eporner.com/gallery/lm/6L/30QLzx46Llm/724187-cecilia-lion-nude.jpg",
    "https://img4.hotnessrater.com/3141419/cecilia-lion-nude.jpg?w=4000&h=6000",
    "https://cdn.shesfreaky.com/galleries/2782375cbfa7b04dcb1/5cbfa848a8085.jpg",
    "https://img.tnaflix.com/a7:4q60w720r/thumbs/2c/12_4129807l.jpg",
    "https://supernua.com/wp-content/uploads/2022/02/mia-kalifa-8.jpg",
    "https://ftopx.com/images/201305/ftop.ru_56310.jpg",
    "https://www.fotosporno.blog/wp-content/uploads/2020/11/Lela-Star-14.jpg",
    "https://xxxpic.xyz/wp-content/uploads/2018/08/Nude-Madison-Ivy-Feet.jpg",
    "https://ftopx.com/large/201304/53908.jpg",
    "https://supernua.com/wp-content/uploads/2022/09/fotos-d-novinhas-magrinhas-e-bucetuda-15.jpg",
    "https://yespornpics.com/media/metart/cecilia-lion/beautifulsexpicture-hairy-sexi-photosxxx/cecilia-lion-1.jpg",
    "https://hussiepass.com/content//contentthumbs/12/23/1223-set-3x.jpg",
    "https://i0.wp.com/images1.naughtycdn.com/cms/nacmscontent/v1/scenes/mfst/jasminelucas/scene/vertical/390x590c.jpg?w=768&ssl=1",
    "https://content.badgirlsusa.com/Jasmine_Jae-Jasmine_Jae_Gets_Fucked_By_Her_Husband's_Boss/Jasmine-Jae-Naughty-America-Jasmine-Jae-gets-fucked-by-her-husband's-boss-2019-11-16-videoS_342.jpg",
    "https://gals.kindgirls.com/d009/kiera_winter_93834/kiera_winter_93834_8.jpg",
    "https://www.porn-star.com/jasmine-anal/05.jpg",
    "https://porndroids3.pump-cdn.com/misc/model274.jpg",
    "https://img2.hotnessrater.com/2920305/lela-star-nude.jpg?w=4000&h=6000",
    "https://boombo.biz/en/uploads/posts/2022-09/1662270272_1-boombo-biz-p-jasmine-jae-naked-chastnaya-erotika-3.jpg",
    "https://sexhd.pics/gallery/mommysgirl/jasmine-jae/cool-stockings-victoria-secrets/jasmine-jae-1.jpg",
    "https://img.topfapgirls.com/1/82/81070/rose-monroe/rose-monroe-3-460px.jpg",
    "https://pbs.twimg.com/media/FjOpvaVXkAAVuvs.jpg",
    "https://static-ca-cdn.eporner.com/gallery/de/ly/kQBJl4Hlyde/709502-rachel-starr-nude.jpg",
    "https://cdn3.nude-pics.org/rachel-starr-oBQx0t6xy0/rachel-starr.webp",
    "https://static-ca-cdn.eporner.com/gallery/Jp/t2/0PxKH8Lt2Jp/35437-rachel-starr-nude.jpg",
    "https://boombo.biz/en/uploads/posts/2022-09/1662539595_1-boombo-biz-p-rachel-starr-nude-chastnaya-erotika-2.jpg",
    "https://img2.hotnessrater.com/3773809/harley-dean-nude.jpg?w=4000&h=6000",
    "https://static-ca-cdn.eporner.com/gallery/Tq/W4/JGYIwYOW4Tq/823935-harley-dean-nude.jpg",
    "https://static-ca-cdn.eporner.com/gallery/kk/gw/YLZCdXrgwkk/253653-harley-dean-nude.jpg",
    "https://ftopx.com/pic/1366x768/201710/59d80e0285ddc.jpg",
    "https://cloud.thehun.net/5da/5da43245a946a/1515_018.jpg",
    "https://supernua.com/wp-content/uploads/2022/04/revista-playboy-mc-mirella-pelada-14.jpg",
    "https://i0.wp.com/media.freeones.com/freeones-photo-generated/H9/nE/EB9DgwiLMndN5ekwF7/Thick-oiled-up-Rose-Monroe-welcomes-hard-dong_007_big.jpg",
    "https://titis.org/pics/uploads/posts/2022-09/1662963130_5-titis-org-p-ava-addams-huge-tits-erotika-vkontakte-11.jpg",
    "https://titis.org/uploads/posts/2022-02/1645202784_1-titis-org-p-rose-monroe-nude-erotika-2.jpg",
    "https://www.mypornstarbook.net/pornstars/l/lela_star/gallery113/images/09.jpg",
    "https://www.babepedia.com/pics/Rose%20Monroe.jpg",
    "https://img2.hotnessrater.com/5771425/nia-nacci-nude.jpg",
    "https://static-ca-cdn.eporner.com/gallery/vt/8t/AjSzHak8tvt/10591275-0498_880x660.jpg",
    "https://fappeningbook.com/photos/l/e/lela-star/1000/64.jpg",
    "https://img8.hotnessrater.com/5746855/nia-nacci-nude.jpg",
    "https://img4.hotnessrater.com/5746851/nia-nacci-nude.jpg",
    "https://cdn3.nude-pics.org/lela-star-qnp4noNOVz/lela-star.webp",
    "https://static-ca-cdn.eporner.com/gallery/KC/oD/Xy7kTJaoDKC/982060-kendra-lust-nude.jpg",
    "https://thepornmap.com/wp-content/uploads/2021/07/Kendra-Lust.jpg",
    "https://cdni.pornpics.com/460/5/132/84919352/84919352_011_a120.jpg",
    "https://cdn.perfectnaked.com/galleries/24542/8_big.jpg",
    "https://fapello.com/content/r/o/rose-monroe/1000/rose-monroe_0058.jpg",
    "https://cdni.pornpics.de/460/7/42/62210051/62210051_134_7dbb.jpg",
    "https://static-ca-cdn.eporner.com/gallery/Lj/61/a9vSnwE61Lj/126282-kendra-lust-nude.jpg",
    "http://theboobsblog.com/wp-content/uploads/2020/10/19.VRCosplayX_Fire_Force_A_XXX_Parody.jpg",
    "http://content.atkingdom.com/models/kie005/295442/210309/kie005GBP_295442095.jpg",
    "https://sexofotos.com.br/wp-content/uploads/2019/10/milf-gostosa-kiara-mia-se-exibindo-pelada-em-fotos-14.jpg",
    "https://lh3.googleusercontent.com/proxy/Y9UPhZ4yBvzYw2mA6uFm2LCNQca2T9i9mSh84p3sTBrSINKebQUAymS-0kPG-mQ43KHMRIwcOcp1F6BSvx0OED38ELYfiiVdlAzuhYcksI8VReauRxsPKq1eP0w_fGos40dWlpj3fO4AtzuZv79p6r0",
    "https://static-ca-cdn.eporner.com/gallery/9I/Rz/XilYHzURz9I/882884-peta-jensen-nude.jpg",
    "https://www.masterfap.net/profile/ryan-smiles/photos/QVVfkFpVPv/ryan-smiles.webp",
    "https://img-9gag-fun.9cache.com/photo/aGpdpoG_460s.jpg",
    "https://media.tits-guru.com/images/f2060e81-5775-4961-85ae-e2189cf1be31.jpeg",
    "https://fapello.com/content/r/y/ryan-smiles/1000/ryan-smiles_0034.jpg",
    "https://cdni.pornpics.com/460/7/554/92070458/92070458_034_4789.jpg",
    "https://playfulbunny.com/wp-content/gallery/kiera-winters-nude/Kiera-Winters-pornstr.jpg",
    "https://s1.milffox.com/p/1/16/27276/pic5.jpg",
    "https://www.curvyerotic.com/thumbs/dylann5.jpg",
    "https://static-ca-cdn.eporner.com/gallery/LR/Jv/5NHiOcsJvLR/648946-ava-addams-nude.jpg",
    "https://www.babepedia.com/user-uploads/Nyomi%20Banxxx.jpg",
    "https://static-ca-cdn.eporner.com/gallery/4J/2d/ElY3eK52d4J/580962-nyomi-banxxx-nude.jpg",
    "https://pornpics.app/pics/realitykings/ryan-smiles/hott-reality-pornrox/ryan-smiles-1.jpg",
    "https://thepornmap.com/wp-content/uploads/2018/09/NyomiBanxxx.jpg",
    "https://img6.hotnessrater.com/2986597/ryan-smiles-nude.jpg?w=4000&h=6000",
    "https://fappeningbook.com/photos/b/l/blondie-fesser/1000/9.jpg",
    "https://bangbros.xxx-scenes.com/Blondie_Fesser-Beach_Fun_With_Blondie/Blondie-Fesser-Bangbros-Beach-Fun-With-Blondie-2021-05-21-054.jpg",
    "https://img3.hotnessrater.com/2986626/ryan-smiles-pussy.jpg?w=4000&h=6000",
    "https://content.bangbros-free.com/Blondie_Fesser-Blondie's_Perfect_Booty/Blondie-Fesser-Bangbros-Blondie's-Perfect-Booty-2021-06-21-045.jpg",
    "https://cdn.nudexxx.pics/content/galleries/631/dec5725410406fbe3593448d9ea53c22-3-full.jpg",
    "https://img.3movs.com/contents/videos_screenshots/57000/57416/preview.jpg",
    "https://content5.8boobs.com/upload/main/50/5737310.jpg",
    "https://img1.hotnessrater.com/2986616/ryan-smiles-pussy.jpg?w=4000&h=6000",
    "https://cdn-img01.thepornbuzz.com/img/992/4/94977-img.jpg",
    "https://cdn.erocurves.com/wp-content/uploads/2017/12/moriahmills122217-035.jpg",
    "https://boomba.club/sex/uploads/posts/2022-10/1666866204_3-boomba-club-p-ava-addams-nude-boobs-erotika-vkontakte-3.jpg",
    "https://static-ca-cdn.eporner.com/gallery/Oy/dp/QOpwoQVdpOy/132076-kiera.jpg",
    "https://c4.wallpaperflare.com/wallpaper/284/407/725/kiera-winters-woman-s-brown-hair-wallpaper-preview.jpg",
    "https://www.mypornstarbook.net/pornstars/r/ryan_smiles/gallery04/images/16.jpg",
    "https://www.mypornstarbook.net/pornstars/r/ryan_smiles/gallery04/images/09.jpg",
    "https://www.mypornstarbook.net/pornstars/r/ryan_smiles/gallery04/images/08.jpg",
    "https://qpornx.com/media/images/7/0/e/c/70ecd0f023825e610040a765eff001a9-58414.jpg",
    "https://boomba.club/sex/uploads/posts/2022-11/1667316505_3-boomba-club-p-ava-addams-bathrobe-chastnaya-erotika-3.jpg",
    "https://preview.redd.it/cmnkdo7k5n731.jpg?auto=webp&s=a01990c9d2bd91342a1464f339dca4619187511b",
    "https://fappeningbook.com/photos/r/y/ryan-smiles/1000/11.jpg",
    "https://s1.milffox.com/p/1/17/27566/pic6.jpg",
    "https://babes.plus/sexpics/monstercurves/lela-star/tities-brunette-writing/lela-star-11.jpg"

]



// FUNÇÃO DE ADIÇÃO DOS LINKS 
imagelist.forEach( e => {
    let num = imagelist.indexOf(e)
    conntainer.innerHTML += `
    <div class="bldd">
            <img src="${e}" alt="${num}">
        </div>`

})

let divlist = document.querySelectorAll(".bldd")

divlist.forEach(e => {
    e.addEventListener('click', () => {
        let link = e.children[0].getAttribute("src")
        wind.classList.toggle("ative")
        windimg.setAttribute("src", link)
       
       
    })
});

wind.addEventListener('click', ()=> wind.classList.toggle("ative"))




// const arr = ["vava","fjdjdj","bsajddsjsn","sndsdsnds","amdnskjdns"]

// const arf = arr.filter((it) => it.includes("a"))

// console.log(arf)