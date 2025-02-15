//Call back são funções que são chamadas por meio de argumento, ou ele entra na função como argumento

let wind = document.querySelector(".layer_foto")
let windimg = document.querySelector("#imgsel")
let control = document.querySelector(".controler")
let botaEs = control.querySelector(".es")
let botadir = control.querySelector(".dir")
let conntainer = document.querySelector(".container")

function embaralharArray(list){
    for(let i = list.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * ( i + 1 ))
        if(list[i]!== list[j]){
        [list[i], list[j]] = [list[j], list[i]] }
    }
    return list
}
const imagelista = [
"https://cdni.pornpics.com/460/1/307/51263249/51263249_010_b352.jpg",
"https://cdni.pornpics.com/460/1/306/65714729/65714729_004_f2ea.jpg",
"https://cdni.pornpics.com/460/7/90/90513323/90513323_012_3fbe.jpg",
"https://cdni.pornpics.com/460/1/308/97179619/97179619_002_4b1a.jpg",
"https://cdni.pornpics.com/460/7/107/29267033/29267033_066_97a7.jpg",
"https://cdni.pornpics.com/460/1/308/63725753/63725753_002_a3f6.jpg",
"https://cdni.pornpics.com/460/5/244/79197896/79197896_009_1a2d.jpg",
"https://cdni.pornpics.com/460/5/180/26078800/26078800_010_cee6.jpg",
"https://cdni.pornpics.com/460/1/307/55287641/55287641_008_b514.jpg",
"https://cdni.pornpics.com/460/5/170/78865594/78865594_008_86e0.jpg",
"https://cdni.pornpics.com/460/1/306/48620897/48620897_002_7ad8.jpg",
"https://cdni.pornpics.com/460/7/107/14664617/14664617_086_f8b3.jpg",
"https://cdni.pornpics.com/460/5/30/91403621/91403621_012_c915.jpg",
"https://cdni.pornpics.com/460/5/114/36618843/36618843_004_0f1b.jpg",
"https://cdni.pornpics.com/460/7/94/79587211/79587211_027_bbb9.jpg",
"https://cdni.pornpics.com/460/7/88/67994374/67994374_036_7263.jpg",
"https://cdni.pornpics.com/460/7/95/25761794/25761794_001_c20d.jpg",
"https://cdni.pornpics.com/460/7/86/27185343/27185343_126_135d.jpg",
"https://cdni.pornpics.com/460/5/31/11050993/11050993_002_2c60.jpg",
"https://cdni.pornpics.com/460/5/30/17501903/17501903_016_afc7.jpg",
"https://cdni.pornpics.com/460/5/135/38440640/38440640_010_5266.jpg",
"https://cdni.pornpics.com/460/1/308/40984355/40984355_002_01e6.jpg",
"https://cdni.pornpics.com/460/5/240/18049102/18049102_005_0ce2.jpg",
"https://cdni.pornpics.com/460/1/306/35759341/35759341_003_18db.jpg",
"https://cdni.pornpics.com/460/7/107/50378723/50378723_011_f823.jpg",
"https://cdni.pornpics.com/460/5/220/71011223/71011223_001_fc33.jpg",
"https://cdni.pornpics.com/460/5/219/24281513/24281513_005_375b.jpg",
"https://cdni.pornpics.com/460/5/156/18029278/18029278_004_a2d8.jpg",
"https://cdni.pornpics.com/460/5/93/80847068/80847068_005_2d52.jpg",
"https://cdni.pornpics.com/460/5/75/97287655/97287655_006_ba15.jpg",
"https://cdni.pornpics.com/460/7/746/86726067/86726067_042_0877.jpg",
"https://cdni.pornpics.com/460/7/547/88568819/88568819_055_a13d.jpg",
"https://cdni.pornpics.com/460/5/237/46804399/46804399_008_d8d0.jpg",
"https://cdni.pornpics.com/460/7/746/89091281/89091281_008_727c.jpg",
"https://cdni.pornpics.com/460/5/236/76976988/76976988_016_11ae.jpg",
"https://cdni.pornpics.com/460/5/241/49690582/49690582_001_e951.jpg",
"https://cdni.pornpics.com/460/5/237/15880582/15880582_002_a04e.jpg",
"https://cdni.pornpics.com/460/1/29/64457373/64457373_002_23af.jpg",
"https://cdni.pornpics.com/460/5/92/19350520/19350520_015_3829.jpg",
"https://cdni.pornpics.com/460/5/27/60256500/60256500_001_6190.jpg",
"https://cdni.pornpics.com/460/7/95/73473241/73473241_014_400b.jpg",
"https://cdni.pornpics.com/460/1/40/69790805/69790805_001_7e7e.jpg",
"https://cdni.pornpics.com/460/5/239/28010357/28010357_006_aafd.jpg",
"https://cdni.pornpics.com/460/5/238/75719077/75719077_004_d0e1.jpg",
"https://cdni.pornpics.com/460/1/99/56177851/56177851_016_669a.jpg",
"https://cdni.pornpics.com/460/7/591/14538679/14538679_051_521d.jpg",
"https://cdni.pornpics.com/460/1/271/85801915/85801915_001_41a2.jpg",
"https://cdni.pornpics.com/460/5/60/51780491/51780491_001_f525.jpg",
"https://cdni.pornpics.com/460/5/238/96012045/96012045_007_db23.jpg",
"https://cdni.pornpics.com/460/5/237/95016836/95016836_010_df90.jpg",
"https://cdni.pornpics.com/460/1/184/87147421/87147421_001_f1ca.jpg",
"https://cdni.pornpics.com/460/5/82/81930646/81930646_002_f2ce.jpg",
"https://cdni.pornpics.com/460/5/83/92610050/92610050_008_2b6e.jpg",
"https://cdni.pornpics.com/460/1/306/58588559/58588559_010_9fa7.jpg",
"https://cdni.pornpics.com/460/5/79/82797650/82797650_006_0aa4.jpg",
"https://cdni.pornpics.com/460/5/239/22184671/22184671_016_2f1d.jpg",
"https://cdni.pornpics.com/460/7/741/66427734/66427734_031_f45e.jpg",
"https://cdni.pornpics.com/460/5/242/15175787/15175787_001_b29c.jpg",
"https://cdni.pornpics.com/460/1/271/31255964/31255964_003_680f.jpg",
"https://cdni.pornpics.com/460/1/99/54161431/54161431_009_ba7d.jpg",
"https://cdni.pornpics.com/460/5/240/80362682/80362682_001_19c5.jpg",
"https://cdni.pornpics.com/460/5/238/70582950/70582950_010_d34c.jpg",
"https://cdni.pornpics.com/460/5/237/33899371/33899371_012_f34e.jpg",
"https://cdni.pornpics.com/460/5/238/11511131/11511131_003_d840.jpg",
"https://cdni.pornpics.com/460/7/160/87819905/87819905_010_5a6c.jpg",
"https://cdni.pornpics.com/460/1/59/42959505/42959505_006_44a1.jpg",
"https://cdni.pornpics.com/460/7/163/68310844/68310844_041_ce02.jpg",
"https://cdni.pornpics.com/460/5/237/88572772/88572772_003_0ab8.jpg",
"https://cdni.pornpics.com/460/1/175/69175452/69175452_010_f590.jpg",
"https://cdni.pornpics.com/460/5/3/23856755/23856755_001_0788.jpg",
"https://cdni.pornpics.com/460/7/37/84285773/84285773_366_0557.jpg",
"https://cdni.pornpics.com/460/7/47/76745908/76745908_167_2602.jpg",
"https://cdni.pornpics.com/460/7/37/11260027/11260027_117_d776.jpg",
"https://cdni.pornpics.com/460/7/74/33333019/33333019_041_9f2d.jpg",
"https://cdni.pornpics.com/460/5/97/50809198/50809198_016_0bd0.jpg",
"https://cdni.pornpics.com/460/5/179/83098378/83098378_016_751f.jpg",
"https://cdni.pornpics.com/460/7/38/73216293/73216293_071_1e94.jpg",
"https://cdni.pornpics.com/460/7/37/88045258/88045258_126_a2a8.jpg",
"https://cdni.pornpics.com/460/7/47/77633758/77633758_180_b0f8.jpg",
"https://cdni.pornpics.com/460/7/38/86166522/86166522_036_3df4.jpg",
"https://cdni.pornpics.com/460/7/37/39988001/39988001_084_19c3.jpg",
"https://cdni.pornpics.com/460/7/100/17484895/17484895_042_6417.jpg",
"https://cdni.pornpics.com/460/7/89/92136984/92136984_449_ea16.jpg",
"https://cdni.pornpics.com/460/7/79/72461760/72461760_196_43ae.jpg",
"https://cdni.pornpics.com/460/7/34/77464401/77464401_057_8d37.jpg",
"https://cdni.pornpics.com/460/7/38/15489668/15489668_227_1b89.jpg",
"https://cdni.pornpics.com/460/7/47/62893374/62893374_618_de8e.jpg",
"https://cdni.pornpics.com/460/7/100/86820282/86820282_016_2bce.jpg",
"https://cdni.pornpics.com/460/5/158/57489322/57489322_013_27f0.jpg",
"https://cdni.pornpics.com/460/7/88/25465609/25465609_087_3df9.jpg",
"https://cdni.pornpics.com/460/5/143/73708891/73708891_009_ad0e.jpg",
"https://cdni.pornpics.com/460/5/125/72377580/72377580_008_f96c.jpg",
"https://cdni.pornpics.com/460/5/134/98083402/98083402_009_6990.jpg",
"https://cdni.pornpics.com/460/7/47/16270387/16270387_101_5a7a.jpg",
"https://cdni.pornpics.com/460/7/38/51047516/51047516_025_a2ae.jpg",
"https://cdni.pornpics.com/460/7/105/29999816/29999816_123_8c14.jpg",
"https://cdni.pornpics.com/460/7/38/97365211/97365211_036_7b99.jpg",
"https://cdni.pornpics.com/460/7/107/10337767/10337767_121_4568.jpg",
"https://cdni.pornpics.com/460/7/47/66143549/66143549_230_07cc.jpg",
"https://cdni.pornpics.com/460/5/183/81733306/81733306_006_3c56.jpg",
"https://cdni.pornpics.com/460/7/53/45487863/45487863_006_67fb.jpg",
"https://cdni.pornpics.com/460/7/37/76052963/76052963_241_5e28.jpg",
"https://cdni.pornpics.com/460/5/166/60193970/60193970_011_8579.jpg",
"https://cdni.pornpics.com/460/7/47/63725559/63725559_025_4993.jpg",
"https://cdni.pornpics.com/460/5/180/92255349/92255349_009_dbf5.jpg",
"https://cdni.pornpics.com/460/7/37/56357384/56357384_192_a534.jpg",
"https://cdni.pornpics.com/460/7/90/71790627/71790627_060_1572.jpg",
"https://cdni.pornpics.com/460/5/16/29186844/29186844_014_e09a.jpg",
"https://cdni.pornpics.com/460/7/106/87113991/87113991_135_efc7.jpg",
"https://cdni.pornpics.com/460/7/37/30349462/30349462_066_08fa.jpg",
"https://cdni.pornpics.com/460/5/125/28799627/28799627_012_fcda.jpg",
"https://cdni.pornpics.com/460/5/84/50529182/50529182_013_18c7.jpg",
"https://cdni.pornpics.com/460/7/38/59826277/59826277_064_b374.jpg",
"https://cdni.pornpics.com/460/5/108/65294490/65294490_015_2bd6.jpg",
"https://cdni.pornpics.com/460/7/38/23272627/23272627_019_1066.jpg",
"https://cdni.pornpics.com/460/5/111/90524646/90524646_013_99ce.jpg",
"https://cdni.pornpics.com/460/7/80/70411710/70411710_124_7fd6.jpg",
"https://cdni.pornpics.com/460/7/98/24248361/24248361_044_ff70.jpg",
"https://cdni.pornpics.com/460/7/65/14468819/14468819_226_025a.jpg",
"https://cdni.pornpics.com/460/7/38/55410739/55410739_047_29f4.jpg",
"https://cdni.pornpics.com/460/7/686/56387814/56387814_121_cb42.jpg",
"https://cdni.pornpics.com/460/5/23/75457174/75457174_001_b619.jpg",
"https://cdni.pornpics.com/460/7/100/41936461/41936461_197_2246.jpg",
"https://cdni.pornpics.com/460/7/296/85665824/85665824_014_9b5d.jpg",
"https://cdni.pornpics.com/460/7/763/13331005/13331005_041_d360.jpg",
"https://cdni.pornpics.com/460/1/306/58588559/58588559_010_9fa7.jpg",
"https://cdni.pornpics.com/460/7/272/84888892/84888892_090_8b33.jpg",
"https://cdni.pornpics.com/460/7/233/53286442/53286442_016_a71e.jpg",
"https://cdni.pornpics.com/460/1/371/48082326/48082326_003_e613.jpg",
"https://cdni.pornpics.com/460/1/308/46572500/46572500_002_b930.jpg",
"https://cdni.pornpics.com/460/7/258/86240033/86240033_037_3623.jpg",
"https://cdni.pornpics.com/460/5/220/71011223/71011223_001_fc33.jpg",
"https://cdni.pornpics.com/460/1/356/62108439/62108439_009_7b17.jpg",
"https://cdni.pornpics.com/460/7/652/35456558/35456558_023_3be0.jpg",
"https://cdni.pornpics.com/460/7/736/13384043/13384043_083_5bd1.jpg",
"https://cdni.pornpics.com/460/1/200/49379157/49379157_005_7935.jpg",
"https://cdni.pornpics.com/460/5/239/28010357/28010357_006_aafd.jpg",
"https://cdni.pornpics.com/460/5/239/73914763/73914763_011_9635.jpg",
"https://cdni.pornpics.com/460/5/27/59912181/59912181_015_7345.jpg",
"https://cdni.pornpics.com/460/7/651/79812837/79812837_079_1b1d.jpg",
"https://cdni.pornpics.com/460/7/101/15166976/15166976_001_4c81.jpg",
"https://cdni.pornpics.com/460/5/97/65208991/65208991_008_2038.jpg",
"https://cdni.pornpics.com/460/7/96/28660422/28660422_081_3b97.jpg",
"https://cdni.pornpics.com/460/7/113/97715573/97715573_067_03dc.jpg",
"https://cdni.pornpics.com/460/1/306/65714729/65714729_004_f2ea.jpg",
"https://cdni.pornpics.com/460/7/48/96753572/96753572_104_8b87.jpg",
"https://cdni.pornpics.com/460/5/240/53757448/53757448_016_ede5.jpg",
"https://cdni.pornpics.com/460/7/740/73433836/73433836_100_fe06.jpg",
"https://cdni.pornpics.com/460/7/736/95450783/95450783_041_93aa.jpg",
"https://cdni.pornpics.com/460/7/434/65894897/65894897_157_b5a8.jpg",
"https://cdni.pornpics.com/460/7/763/62765530/62765530_025_f903.jpg",
"https://cdni.pornpics.com/460/7/764/64084335/64084335_027_1fd4.jpg",
"https://cdni.pornpics.com/460/7/487/33105460/33105460_052_264c.jpg",
"https://cdni.pornpics.com/460/7/767/34309889/34309889_006_d051.jpg",
"https://cdni.pornpics.com/460/7/728/33369143/33369143_003_f51c.jpg",
"https://cdni.pornpics.com/460/1/387/25367882/25367882_016_e190.jpg",
"https://cdni.pornpics.com/460/7/721/14041093/14041093_013_f93b.jpg",
"https://cdni.pornpics.com/460/5/114/36618843/36618843_004_0f1b.jpg",
"https://cdni.pornpics.com/460/7/770/91926114/91926114_059_58dd.jpg",
"https://cdni.pornpics.com/460/5/148/66222275/66222275_002_6741.jpg",
"https://cdni.pornpics.com/460/7/770/21204956/21204956_040_6ae6.jpg",
"https://cdni.pornpics.com/460/7/686/13734412/13734412_001_c15d.jpg",
"https://cdni.pornpics.com/460/7/748/46808385/46808385_108_5344.jpg",
"https://cdni.pornpics.com/460/3/2/71732718/71732718_008_c809.jpg",
"https://cdni.pornpics.com/460/7/746/47727722/47727722_031_cf6e.jpg",
"https://cdni.pornpics.com/460/7/771/16175319/16175319_060_beef.jpg",
"https://cdni.pornpics.com/460/7/757/25816352/25816352_030_cc98.jpg",
"https://cdni.pornpics.com/460/7/491/50945408/50945408_278_0f0a.jpg",
"https://cdni.pornpics.com/460/1/387/13994242/13994242_008_e965.jpg",
"https://cdni.pornpics.com/460/7/692/38084117/38084117_028_af31.jpg",
"https://cdni.pornpics.com/460/7/763/62765530/62765530_025_f903.jpg",
"https://cdni.pornpics.com/460/7/764/64084335/64084335_027_1fd4.jpg",
"https://cdni.pornpics.com/460/7/487/33105460/33105460_052_264c.jpg",
"https://cdni.pornpics.com/460/7/767/34309889/34309889_006_d051.jpg",
"https://cdni.pornpics.com/460/7/728/33369143/33369143_003_f51c.jpg",
"https://cdni.pornpics.com/460/1/387/25367882/25367882_016_e190.jpg",
"https://cdni.pornpics.com/460/7/721/14041093/14041093_013_f93b.jpg",
"https://cdni.pornpics.com/460/5/114/36618843/36618843_004_0f1b.jpg",
"https://cdni.pornpics.com/460/7/770/91926114/91926114_059_58dd.jpg",
"https://cdni.pornpics.com/460/5/148/66222275/66222275_002_6741.jpg",
"https://cdni.pornpics.com/460/7/770/21204956/21204956_040_6ae6.jpg",
"https://cdni.pornpics.com/460/7/686/13734412/13734412_001_c15d.jpg",
"https://cdni.pornpics.com/460/7/748/46808385/46808385_108_5344.jpg",
"https://cdni.pornpics.com/460/3/2/71732718/71732718_008_c809.jpg",
"https://cdni.pornpics.com/460/7/746/47727722/47727722_031_cf6e.jpg",
"https://cdni.pornpics.com/460/7/771/16175319/16175319_060_beef.jpg",
"https://cdni.pornpics.com/460/7/757/25816352/25816352_030_cc98.jpg",
"https://cdni.pornpics.com/460/7/491/50945408/50945408_278_0f0a.jpg",
"https://cdni.pornpics.com/460/1/387/13994242/13994242_008_e965.jpg",
"https://cdni.pornpics.com/460/7/692/38084117/38084117_028_af31.jpg",
"https://cdni.pornpics.com/460/7/768/78421172/78421172_007_d9ff.jpg",
"https://cdni.pornpics.com/460/7/746/69203999/69203999_018_dea1.jpg",
"https://cdni.pornpics.com/460/7/768/17397468/17397468_068_c78f.jpg",
"https://cdni.pornpics.com/460/7/725/72799541/72799541_767_ad0d.jpg",
"https://cdni.pornpics.com/460/7/707/20491556/20491556_256_9f54.jpg",
"https://cdni.pornpics.com/460/7/616/18120017/18120017_094_3c8b.jpg",
"https://cdni.pornpics.com/460/7/707/29834297/29834297_018_d314.jpg",
"https://cdni.pornpics.com/460/7/564/11798032/11798032_021_e133.jpg",
"https://cdni.pornpics.com/460/7/636/56058551/56058551_008_b831.jpg",
"https://cdni.pornpics.com/460/1/345/91399381/91399381_020_ac86.jpg",
"https://cdni.pornpics.com/460/7/633/71714245/71714245_119_3da3.jpg",
"https://cdni.pornpics.com/460/7/693/25365999/25365999_136_6688.jpg",
"https://cdni.pornpics.com/460/1/374/68181254/68181254_015_6577.jpg",
"https://cdni.pornpics.com/460/7/554/45571548/45571548_007_8b1d.jpg",
"https://cdni.pornpics.com/460/7/709/70554213/70554213_031_da3c.jpg",
"https://cdni.pornpics.com/460/7/769/11514785/11514785_063_7fdb.jpg",
"https://cdni.pornpics.com/460/7/707/17508286/17508286_066_c7ea.jpg",
"https://cdni.pornpics.com/460/7/714/10841026/10841026_012_7e9e.jpg",
"https://cdni.pornpics.com/460/7/552/60224357/60224357_003_bbbf.jpg",
"https://cdni.pornpics.com/460/7/712/30482440/30482440_017_5e62.jpg",
"https://cdni.pornpics.com/460/7/607/57198477/57198477_046_0401.jpg",
"https://cdni.pornpics.com/460/7/724/99198022/99198022_176_4e5d.jpg",
"https://cdni.pornpics.com/460/1/318/94009671/94009671_013_699f.jpg",
"https://cdni.pornpics.com/460/7/672/32414364/32414364_095_0ec8.jpg",
"https://cdni.pornpics.com/460/7/685/42251808/42251808_003_cbda.jpg",
"https://cdni.pornpics.com/460/1/358/13000878/13000878_012_6ef0.jpg",
"https://cdni.pornpics.com/460/7/517/91929490/91929490_028_6fbe.jpg",
"https://cdni.pornpics.com/460/7/555/56601547/56601547_100_9cf7.jpg",
"https://cdni.pornpics.com/460/7/574/43349030/43349030_031_4e12.jpg",
"https://cdni.pornpics.com/460/7/556/19222678/19222678_019_79c8.jpg",
"https://cdni.pornpics.com/460/7/527/98318897/98318897_040_1d01.jpg",
"https://cdni.pornpics.com/460/1/383/48949224/48949224_011_f8cd.jpg",
"https://cdni.pornpics.com/460/7/552/24981705/24981705_015_f08f.jpg",
"https://cdni.pornpics.com/460/7/474/39764587/39764587_041_07a3.jpg",
"https://cdni.pornpics.com/460/7/577/60999880/60999880_059_4584.jpg",
"https://cdni.pornpics.com/460/1/297/61728594/61728594_001_1fd5.jpg",
"https://cdni.pornpics.com/460/7/621/71298819/71298819_004_a02f.jpg",
"https://cdni.pornpics.com/460/1/357/34219878/34219878_002_3f31.jpg",
"https://cdni.pornpics.com/460/7/556/92979511/92979511_184_0c21.jpg",
"https://cdni.pornpics.com/460/1/343/74463138/74463138_010_ec36.jpg",




]
// FUNÇÃO DE ADIÇÃO DOS LINKS 
let imagelist = embaralharArray(imagelista)
for(let link of imagelist){
    let num = imagelist.indexOf(link)
    conntainer.innerHTML += `
    <div class="bldd">
            <img src="${link}" alt="${num}">
        </div>`
    }

let divlist = document.querySelectorAll(".bldd")
divlist.forEach(e => {
    e.addEventListener('click', () => {
        let link = e.children[0].getAttribute("src")
        wind.classList.toggle("ative")
        control.classList.toggle("active")
        windimg.setAttribute("src", link)
        let index = e.querySelector("img").getAttribute("alt")

            botaEs.addEventListener("click",()=>{
                index = index - 1
                if(index >= 0 && index <= divlist.length) {
                    windimg.setAttribute("src", imagelist[index])
                    windimg.setAttribute("alt", index)}
                if(index < 0 ){
                    index = divlist.length - 1
                    windimg.setAttribute("src", imagelist[index])
                    windimg.setAttribute("alt", index)
                }
            })  
            botadir.addEventListener("click",()=>{
                index = index + 1
                if(index >= 0 && index <= divlist.length) {
                    windimg.setAttribute("src", imagelist[index])
                    windimg.setAttribute("alt", index)}
                if(index > divlist.length ){
                    index = 1
                    windimg.setAttribute("src", imagelist[index])
                    windimg.setAttribute("alt", index)
                }
            })  
    })
});


wind.addEventListener('click', ()=> wind.classList.toggle("ative"))



// document.addEventListener("click",()=>{
// const imgs = document.querySelectorAll(".rel-link .ll-loaded")
// let formatado = ""
// for(var idx = 10; idx < 30; idx++){
//  formatado += `"${imgs[idx].src}",\n`
// }
// console.log(formatado)
// navigator.clipboard.writeText(formatado)
//   .then(() => console.log("Copiado!"))
//   .catch(err => console.error("Erro ao copiar:", err));

// })

// const arr = ["vava","fjdjdj","bsajddsjsn","sndsdsnds","amdnskjdns"]

// const arf = arr.filter((it) => it.includes("a"))

// console.log(arf)