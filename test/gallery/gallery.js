
console.log('gallery js');


class YukiGallery{
    constructor(id){
        this.id = id;
        this.element = $(`#${id}`);
    }


    appendLink(link){
        var element = $(`<div class="img_content"><img class='gimg' src="${link}"/></div>`);
        this.element.append(element);
    }

}


let someGallery = new YukiGallery("mygallery");

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")
someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")

someGallery.appendLink("https://practicaltyping.com/wp-content/uploads/2020/06/yukinoshita-oregairu.jpg");
someGallery.appendLink("https://i.pinimg.com/originals/3c/39/c1/3c39c118db77d10965a307a164c74f23.jpg");
someGallery.appendLink("https://i.redd.it/ksm3428wt5251.png")
someGallery.appendLink("https://preview.redd.it/u0jf0vqi9ma51.png?auto=webp&s=940b78a2c63576d1f9303d673e3f78963a7ba44e")
someGallery.appendLink("https://static.zerochan.net/Yukinoshita.Yukino.full.2937437.png")
someGallery.appendLink("https://i.pinimg.com/236x/55/a9/16/55a916498fd8e084553aa66d0a05a101.jpg")
someGallery.appendLink("https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/My-Teen-Romantic-Comedy-SNAFU-Yukino-Yui.jpg?q=50&fit=crop&w=740&h=370")
someGallery.appendLink("https://i.pinimg.com/originals/37/2b/83/372b8301a64f75985555b247ef1772d0.jpg")
someGallery.appendLink("http://pm1.narvii.com/6709/9b10f5b662f083c665b8e6e9c157c839437f1cd2_00.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/70/b1/03/70b1033a77795d6b8b31bd1d20543e48.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/de/bb/36/debb368d668c7373c80166e38726d685.jpg")
someGallery.appendLink("https://i.pinimg.com/474x/72/d8/73/72d873f44ce50e3ceeee77fe88156d6a.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/5c/c8/77/5cc8772854ed99907d1638f0c1253af6.jpg")
someGallery.appendLink("https://steamuserimages-a.akamaihd.net/ugc/868488441788210144/5E71172B923CFFCC31800472A24E17DE66325314/")
someGallery.appendLink("https://i.pinimg.com/236x/cd/76/42/cd7642e9b7c6496472b6832318663af4.jpg")
someGallery.appendLink("https://i.pinimg.com/originals/02/00/e8/0200e862e11a9eabf60c6da65b7bbb04.jpg")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsEYIZrlM5JRWZ0nuH3TmOQgFOOkigMcYlw&usqp=CAU")
someGallery.appendLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1cgLwyoBsbQAVSi-TVy2_60xxdkMchAgg&usqp=CAU")







$("img").click(function(handler){
    $("#popup").toggle();
})


$("#btnClose").click(function(){
    $("#popup").hide();
});