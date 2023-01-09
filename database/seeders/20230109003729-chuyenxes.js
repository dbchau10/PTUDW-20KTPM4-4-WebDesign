'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const items=[{"idchuyenxe":1,"anhchuyenxe":"http://dummyimage.com/183x100.png/5fa2dd/ffffff","noikhoihanh":"41 Twin Pines Avenue","noiketthuc":"4900 Rigney Way","giokhoihanh":"8/1/2022","gioketthuc":"2/25/2022","loaixe":"2HNYD18843H523460","sochongoiconlai":13,"idnhaxe":14},
   {"idchuyenxe":2,"anhchuyenxe":"http://dummyimage.com/224x100.png/ff4444/ffffff","noikhoihanh":"4 Pawling Junction","noiketthuc":"3 Alpine Trail","giokhoihanh":"11/13/2022","gioketthuc":"9/20/2022","loaixe":"1GD312CG9EF353349","sochongoiconlai":3,"idnhaxe":28},
   {"idchuyenxe":3,"anhchuyenxe":"http://dummyimage.com/109x100.png/dddddd/000000","noikhoihanh":"852 Leroy Hill","noiketthuc":"351 Sachtjen Place","giokhoihanh":"5/23/2022","gioketthuc":"3/25/2022","loaixe":"WVWAP7ANXEE563330","sochongoiconlai":4,"idnhaxe":13},
   {"idchuyenxe":4,"anhchuyenxe":"http://dummyimage.com/199x100.png/ff4444/ffffff","noikhoihanh":"7 Bellgrove Circle","noiketthuc":"178 Merry Center","giokhoihanh":"8/25/2022","gioketthuc":"11/1/2022","loaixe":"JN1AZ4EH4EM857957","sochongoiconlai":3,"idnhaxe":14},
   {"idchuyenxe":5,"anhchuyenxe":"http://dummyimage.com/228x100.png/ff4444/ffffff","noikhoihanh":"53 Sage Junction","noiketthuc":"08315 Daystar Point","giokhoihanh":"11/15/2022","gioketthuc":"4/24/2022","loaixe":"JM1NC2PF6E0897951","sochongoiconlai":20,"idnhaxe":6},
   {"idchuyenxe":6,"anhchuyenxe":"http://dummyimage.com/196x100.png/dddddd/000000","noikhoihanh":"0 Boyd Terrace","noiketthuc":"5 Stone Corner Way","giokhoihanh":"9/26/2022","gioketthuc":"6/22/2022","loaixe":"1GYS3RKJXFR177065","sochongoiconlai":1,"idnhaxe":9},
   {"idchuyenxe":7,"anhchuyenxe":"http://dummyimage.com/152x100.png/cc0000/ffffff","noikhoihanh":"6 Graedel Crossing","noiketthuc":"68044 Kropf Place","giokhoihanh":"12/27/2022","gioketthuc":"4/19/2022","loaixe":"WBAPL5C52BA956536","sochongoiconlai":17,"idnhaxe":19},
   {"idchuyenxe":8,"anhchuyenxe":"http://dummyimage.com/226x100.png/dddddd/000000","noikhoihanh":"99 Linden Place","noiketthuc":"006 Crownhardt Plaza","giokhoihanh":"7/23/2022","gioketthuc":"1/17/2022","loaixe":"1FTFW1E84AF706560","sochongoiconlai":7,"idnhaxe":26},
   {"idchuyenxe":9,"anhchuyenxe":"http://dummyimage.com/178x100.png/cc0000/ffffff","noikhoihanh":"38 Anniversary Lane","noiketthuc":"9721 Manufacturers Crossing","giokhoihanh":"2/21/2022","gioketthuc":"1/5/2023","loaixe":"JM1NC2JF6E0683700","sochongoiconlai":25,"idnhaxe":27},
   {"idchuyenxe":10,"anhchuyenxe":"http://dummyimage.com/232x100.png/cc0000/ffffff","noikhoihanh":"5682 Fisk Center","noiketthuc":"37 Buhler Hill","giokhoihanh":"3/15/2022","gioketthuc":"2/28/2022","loaixe":"1G6AJ5S35E0988375","sochongoiconlai":13,"idnhaxe":11},
   {"idchuyenxe":11,"anhchuyenxe":"http://dummyimage.com/151x100.png/ff4444/ffffff","noikhoihanh":"3278 Hovde Crossing","noiketthuc":"7 Debra Terrace","giokhoihanh":"8/27/2022","gioketthuc":"10/20/2022","loaixe":"WA1DGAFE9DD057635","sochongoiconlai":9,"idnhaxe":6},
   {"idchuyenxe":12,"anhchuyenxe":"http://dummyimage.com/186x100.png/ff4444/ffffff","noikhoihanh":"1432 Westend Center","noiketthuc":"8059 Gale Trail","giokhoihanh":"11/21/2022","gioketthuc":"9/16/2022","loaixe":"1G4HR57Y27U989936","sochongoiconlai":15,"idnhaxe":17},
   {"idchuyenxe":13,"anhchuyenxe":"http://dummyimage.com/127x100.png/5fa2dd/ffffff","noikhoihanh":"728 Bunker Hill Drive","noiketthuc":"177 American Road","giokhoihanh":"1/27/2022","gioketthuc":"3/21/2022","loaixe":"5TDBM5G11AS005943","sochongoiconlai":18,"idnhaxe":28},
   {"idchuyenxe":14,"anhchuyenxe":"http://dummyimage.com/182x100.png/dddddd/000000","noikhoihanh":"19953 Bluestem Park","noiketthuc":"726 Garrison Terrace","giokhoihanh":"7/22/2022","gioketthuc":"12/24/2022","loaixe":"JTEBU5JR5E5898866","sochongoiconlai":23,"idnhaxe":27},
   {"idchuyenxe":15,"anhchuyenxe":"http://dummyimage.com/180x100.png/5fa2dd/ffffff","noikhoihanh":"183 Jenna Alley","noiketthuc":"57254 Schlimgen Court","giokhoihanh":"8/8/2022","gioketthuc":"1/1/2023","loaixe":"JN8AZ2KR0DT687023","sochongoiconlai":26,"idnhaxe":19},
   {"idchuyenxe":16,"anhchuyenxe":"http://dummyimage.com/179x100.png/dddddd/000000","noikhoihanh":"732 Mayfield Alley","noiketthuc":"90567 Tennyson Alley","giokhoihanh":"1/8/2023","gioketthuc":"3/19/2022","loaixe":"19UYA42703A255653","sochongoiconlai":20,"idnhaxe":14},
   {"idchuyenxe":17,"anhchuyenxe":"http://dummyimage.com/178x100.png/5fa2dd/ffffff","noikhoihanh":"99087 Sauthoff Alley","noiketthuc":"5299 Randy Way","giokhoihanh":"12/25/2022","gioketthuc":"12/22/2022","loaixe":"5J6TF2H58EL602782","sochongoiconlai":13,"idnhaxe":18},
   {"idchuyenxe":18,"anhchuyenxe":"http://dummyimage.com/240x100.png/5fa2dd/ffffff","noikhoihanh":"3 Esker Circle","noiketthuc":"2 Judy Street","giokhoihanh":"1/11/2022","gioketthuc":"1/26/2022","loaixe":"SCFAD01AX5G206703","sochongoiconlai":8,"idnhaxe":8},
   {"idchuyenxe":19,"anhchuyenxe":"http://dummyimage.com/178x100.png/5fa2dd/ffffff","noikhoihanh":"619 Birchwood Avenue","noiketthuc":"061 Crescent Oaks Pass","giokhoihanh":"1/14/2022","gioketthuc":"3/21/2022","loaixe":"WAUDH78E27A635063","sochongoiconlai":11,"idnhaxe":2},
   {"idchuyenxe":20,"anhchuyenxe":"http://dummyimage.com/138x100.png/ff4444/ffffff","noikhoihanh":"42893 Farmco Junction","noiketthuc":"54 Dennis Avenue","giokhoihanh":"7/16/2022","gioketthuc":"11/5/2022","loaixe":"WBAFR7C5XCC558101","sochongoiconlai":4,"idnhaxe":28},
   {"idchuyenxe":21,"anhchuyenxe":"http://dummyimage.com/196x100.png/ff4444/ffffff","noikhoihanh":"85777 Artisan Alley","noiketthuc":"8 Utah Avenue","giokhoihanh":"4/30/2022","gioketthuc":"7/1/2022","loaixe":"3MZBM1K73FM493821","sochongoiconlai":1,"idnhaxe":8},
   {"idchuyenxe":22,"anhchuyenxe":"http://dummyimage.com/171x100.png/ff4444/ffffff","noikhoihanh":"0899 Ridgeway Way","noiketthuc":"685 Michigan Center","giokhoihanh":"7/21/2022","gioketthuc":"2/22/2022","loaixe":"JTJBM7FX9D5060245","sochongoiconlai":9,"idnhaxe":9},
   {"idchuyenxe":23,"anhchuyenxe":"http://dummyimage.com/227x100.png/cc0000/ffffff","noikhoihanh":"03485 Redwing Terrace","noiketthuc":"3 Redwing Circle","giokhoihanh":"3/11/2022","gioketthuc":"3/6/2022","loaixe":"1G6DD67V590935508","sochongoiconlai":27,"idnhaxe":28},
   {"idchuyenxe":24,"anhchuyenxe":"http://dummyimage.com/102x100.png/dddddd/000000","noikhoihanh":"93924 Mosinee Plaza","noiketthuc":"8 Jay Trail","giokhoihanh":"2/5/2022","gioketthuc":"11/2/2022","loaixe":"1N6AD0CW2EN382001","sochongoiconlai":4,"idnhaxe":2},
   {"idchuyenxe":25,"anhchuyenxe":"http://dummyimage.com/174x100.png/ff4444/ffffff","noikhoihanh":"9009 Eastwood Street","noiketthuc":"90110 American Ash Alley","giokhoihanh":"7/18/2022","gioketthuc":"12/15/2022","loaixe":"5FRYD3H26EB568517","sochongoiconlai":3,"idnhaxe":5},
   {"idchuyenxe":26,"anhchuyenxe":"http://dummyimage.com/167x100.png/5fa2dd/ffffff","noikhoihanh":"1 Pierstorff Way","noiketthuc":"05 Anderson Avenue","giokhoihanh":"1/1/2023","gioketthuc":"2/18/2022","loaixe":"1G6DK1E32D0488381","sochongoiconlai":5,"idnhaxe":16},
   {"idchuyenxe":27,"anhchuyenxe":"http://dummyimage.com/235x100.png/dddddd/000000","noikhoihanh":"532 Porter Junction","noiketthuc":"8 Bunting Junction","giokhoihanh":"10/20/2022","gioketthuc":"8/18/2022","loaixe":"1ZVBP8AM5E5209116","sochongoiconlai":3,"idnhaxe":22},
   {"idchuyenxe":28,"anhchuyenxe":"http://dummyimage.com/153x100.png/5fa2dd/ffffff","noikhoihanh":"40 Anniversary Terrace","noiketthuc":"2 Buena Vista Circle","giokhoihanh":"1/16/2022","gioketthuc":"1/27/2022","loaixe":"4T1BF3EK9AU188316","sochongoiconlai":30,"idnhaxe":16},
   {"idchuyenxe":29,"anhchuyenxe":"http://dummyimage.com/124x100.png/ff4444/ffffff","noikhoihanh":"237 Hovde Court","noiketthuc":"182 Debra Plaza","giokhoihanh":"3/18/2022","gioketthuc":"7/2/2022","loaixe":"WAUEH78E78A779942","sochongoiconlai":1,"idnhaxe":14},
   {"idchuyenxe":30,"anhchuyenxe":"http://dummyimage.com/175x100.png/dddddd/000000","noikhoihanh":"8 Welch Hill","noiketthuc":"271 Twin Pines Road","giokhoihanh":"9/2/2022","gioketthuc":"11/10/2022","loaixe":"2B3CA3CVXAH726692","sochongoiconlai":22,"idnhaxe":5},
   {"idchuyenxe":31,"anhchuyenxe":"http://dummyimage.com/104x100.png/ff4444/ffffff","noikhoihanh":"315 Thackeray Circle","noiketthuc":"7715 Fulton Road","giokhoihanh":"11/15/2022","gioketthuc":"1/30/2022","loaixe":"WAUBF98E08A264527","sochongoiconlai":29,"idnhaxe":15},
   {"idchuyenxe":32,"anhchuyenxe":"http://dummyimage.com/148x100.png/dddddd/000000","noikhoihanh":"67552 Esch Way","noiketthuc":"1091 Sutteridge Crossing","giokhoihanh":"3/17/2022","gioketthuc":"6/8/2022","loaixe":"2C3CDXL98FH752283","sochongoiconlai":16,"idnhaxe":21},
   {"idchuyenxe":33,"anhchuyenxe":"http://dummyimage.com/145x100.png/ff4444/ffffff","noikhoihanh":"66 Bartelt Street","noiketthuc":"48520 Sutherland Pass","giokhoihanh":"11/8/2022","gioketthuc":"4/5/2022","loaixe":"1GD22XEG2FZ075946","sochongoiconlai":22,"idnhaxe":4},
   {"idchuyenxe":34,"anhchuyenxe":"http://dummyimage.com/139x100.png/cc0000/ffffff","noikhoihanh":"6 Prentice Street","noiketthuc":"122 Little Fleur Street","giokhoihanh":"4/27/2022","gioketthuc":"10/31/2022","loaixe":"WA1YD64B13N615437","sochongoiconlai":20,"idnhaxe":6},
   {"idchuyenxe":35,"anhchuyenxe":"http://dummyimage.com/202x100.png/cc0000/ffffff","noikhoihanh":"25 Waywood Point","noiketthuc":"22775 Armistice Way","giokhoihanh":"12/29/2022","gioketthuc":"6/1/2022","loaixe":"KMHTC6AD5EU444852","sochongoiconlai":2,"idnhaxe":8},
   {"idchuyenxe":36,"anhchuyenxe":"http://dummyimage.com/219x100.png/cc0000/ffffff","noikhoihanh":"80913 Rowland Hill","noiketthuc":"3721 Beilfuss Circle","giokhoihanh":"3/29/2022","gioketthuc":"5/11/2022","loaixe":"WA1EV74L88D853572","sochongoiconlai":11,"idnhaxe":3},
   {"idchuyenxe":37,"anhchuyenxe":"http://dummyimage.com/154x100.png/5fa2dd/ffffff","noikhoihanh":"994 Lake View Circle","noiketthuc":"25 Spaight Alley","giokhoihanh":"11/18/2022","gioketthuc":"9/9/2022","loaixe":"WBAEK13557C804622","sochongoiconlai":19,"idnhaxe":4},
   {"idchuyenxe":38,"anhchuyenxe":"http://dummyimage.com/101x100.png/dddddd/000000","noikhoihanh":"292 Petterle Junction","noiketthuc":"143 Springs Pass","giokhoihanh":"1/5/2023","gioketthuc":"9/12/2022","loaixe":"1VWAP7A34EC701855","sochongoiconlai":15,"idnhaxe":14},
   {"idchuyenxe":39,"anhchuyenxe":"http://dummyimage.com/228x100.png/5fa2dd/ffffff","noikhoihanh":"001 Gerald Center","noiketthuc":"13 Glendale Street","giokhoihanh":"7/17/2022","gioketthuc":"9/5/2022","loaixe":"WP1AA2AP1AL840180","sochongoiconlai":27,"idnhaxe":13},
   {"idchuyenxe":40,"anhchuyenxe":"http://dummyimage.com/214x100.png/5fa2dd/ffffff","noikhoihanh":"8193 Summer Ridge Road","noiketthuc":"4 Eastlawn Circle","giokhoihanh":"6/1/2022","gioketthuc":"3/11/2022","loaixe":"WBS3U9C54FP714316","sochongoiconlai":9,"idnhaxe":11},
   {"idchuyenxe":41,"anhchuyenxe":"http://dummyimage.com/198x100.png/dddddd/000000","noikhoihanh":"71 Troy Center","noiketthuc":"3 Bluestem Alley","giokhoihanh":"3/31/2022","gioketthuc":"6/23/2022","loaixe":"2T2BK1BA0EC972415","sochongoiconlai":12,"idnhaxe":16},
   {"idchuyenxe":42,"anhchuyenxe":"http://dummyimage.com/168x100.png/ff4444/ffffff","noikhoihanh":"54 Johnson Plaza","noiketthuc":"6949 Norway Maple Drive","giokhoihanh":"11/1/2022","gioketthuc":"4/12/2022","loaixe":"WAULC68E05A027057","sochongoiconlai":17,"idnhaxe":14},
   {"idchuyenxe":43,"anhchuyenxe":"http://dummyimage.com/133x100.png/cc0000/ffffff","noikhoihanh":"477 Ryan Terrace","noiketthuc":"6 Loeprich Pass","giokhoihanh":"3/15/2022","gioketthuc":"3/4/2022","loaixe":"WAUJFAFH7DN716275","sochongoiconlai":16,"idnhaxe":24},
   {"idchuyenxe":44,"anhchuyenxe":"http://dummyimage.com/105x100.png/cc0000/ffffff","noikhoihanh":"3492 Stephen Circle","noiketthuc":"99398 Clemons Road","giokhoihanh":"3/3/2022","gioketthuc":"5/4/2022","loaixe":"WBSDE93402B791121","sochongoiconlai":18,"idnhaxe":20},
   {"idchuyenxe":45,"anhchuyenxe":"http://dummyimage.com/172x100.png/5fa2dd/ffffff","noikhoihanh":"674 Barby Circle","noiketthuc":"81 Crest Line Point","giokhoihanh":"12/8/2022","gioketthuc":"1/28/2022","loaixe":"5GAKVCKD8DJ402622","sochongoiconlai":5,"idnhaxe":1},
   {"idchuyenxe":46,"anhchuyenxe":"http://dummyimage.com/197x100.png/ff4444/ffffff","noikhoihanh":"439 Lawn Court","noiketthuc":"439 Menomonie Drive","giokhoihanh":"9/8/2022","gioketthuc":"8/24/2022","loaixe":"1FAHP2D85DG987966","sochongoiconlai":29,"idnhaxe":18},
   {"idchuyenxe":47,"anhchuyenxe":"http://dummyimage.com/158x100.png/ff4444/ffffff","noikhoihanh":"84 International Road","noiketthuc":"9 Kinsman Alley","giokhoihanh":"3/27/2022","gioketthuc":"7/15/2022","loaixe":"1C3CDFCBXED832175","sochongoiconlai":16,"idnhaxe":13},
   {"idchuyenxe":48,"anhchuyenxe":"http://dummyimage.com/213x100.png/5fa2dd/ffffff","noikhoihanh":"4 Stephen Way","noiketthuc":"6 Clove Circle","giokhoihanh":"10/9/2022","gioketthuc":"12/5/2022","loaixe":"WBAYE8C59ED204187","sochongoiconlai":8,"idnhaxe":10},
   {"idchuyenxe":49,"anhchuyenxe":"http://dummyimage.com/236x100.png/ff4444/ffffff","noikhoihanh":"7 Loomis Center","noiketthuc":"887 Stone Corner Parkway","giokhoihanh":"5/20/2022","gioketthuc":"5/18/2022","loaixe":"WAUHFAFL9EA013756","sochongoiconlai":29,"idnhaxe":9},
   {"idchuyenxe":50,"anhchuyenxe":"http://dummyimage.com/196x100.png/cc0000/ffffff","noikhoihanh":"2 Oak Junction","noiketthuc":"18 Mandrake Place","giokhoihanh":"11/19/2022","gioketthuc":"11/8/2022","loaixe":"WAU3FAFR9CA649363","sochongoiconlai":19,"idnhaxe":10}]
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('chuyenxes',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkInsert('chuyenxes',items, {});

  }
};
