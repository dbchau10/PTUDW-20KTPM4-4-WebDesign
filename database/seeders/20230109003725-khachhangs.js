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
   const items=[{"idkhachhang":1,"hoten":"Minnaminnie Scannell","email":"mscannell0@bluehost.com","sdt":"1728604899","ngaysinh":"09/26/2000","password":"evjYVyT","admin":false},
   {"idkhachhang":2,"hoten":"Eustace Kane","email":"ekane1@addthis.com","sdt":"8973766441","ngaysinh":"09/17/2001","password":"kQF8jf8e","admin":true},
   {"idkhachhang":3,"hoten":"Eduardo Tratton","email":"etratton2@youku.com","sdt":"2155379245","ngaysinh":"02/28/2001","password":"WBe5egSkJL","admin":false},
   {"idkhachhang":4,"hoten":"Axe Romanini","email":"aromanini3@independent.co.uk","sdt":"9901490105","ngaysinh":"05/01/1999","password":"X3mIwY6kVKTS","admin":true},
   {"idkhachhang":5,"hoten":"Ashely Weafer","email":"aweafer4@weebly.com","sdt":"7066094448","ngaysinh":"08/12/2000","password":"MpRTKgXBWi","admin":true},
   {"idkhachhang":6,"hoten":"Roxanne Rookwell","email":"rrookwell5@illinois.edu","sdt":"1348174174","ngaysinh":"04/29/2001","password":"sohEl9","admin":true},
   {"idkhachhang":7,"hoten":"Ollie Marvelley","email":"omarvelley6@pinterest.com","sdt":"8231345046","ngaysinh":"10/23/1999","password":"uBAiTtM","admin":true},
   {"idkhachhang":8,"hoten":"Gawain Pitkeathley","email":"gpitkeathley7@archive.org","sdt":"8786318954","ngaysinh":"11/07/2001","password":"QNuyJBCkchR","admin":false},
   {"idkhachhang":9,"hoten":"Maury Alban","email":"malban8@ibm.com","sdt":"9312310898","ngaysinh":"07/06/2001","password":"krHUQzrv","admin":true},
   {"idkhachhang":10,"hoten":"Carolynn Arnson","email":"carnson9@acquirethisname.com","sdt":"6808261314","ngaysinh":"01/23/2000","password":"R94Cy5Cw","admin":true},
   {"idkhachhang":11,"hoten":"Sargent Pennetti","email":"spennettia@marriott.com","sdt":"9961655876","ngaysinh":"02/08/2001","password":"w4zPb3","admin":false},
   {"idkhachhang":12,"hoten":"Malachi Rolstone","email":"mrolstoneb@unicef.org","sdt":"6132911899","ngaysinh":"03/07/2001","password":"CkwyCc2qgaFe","admin":true},
   {"idkhachhang":13,"hoten":"Aprilette Amar","email":"aamarc@360.cn","sdt":"2648545620","ngaysinh":"03/17/2001","password":"r5OWvYf6w","admin":false},
   {"idkhachhang":14,"hoten":"Adella Clearley","email":"aclearleyd@csmonitor.com","sdt":"5156914286","ngaysinh":"12/24/1999","password":"WT45hI8p7Ebx","admin":true},
   {"idkhachhang":15,"hoten":"Cindy Morstatt","email":"cmorstatte@hhs.gov","sdt":"2945529108","ngaysinh":"09/13/2000","password":"4UyRozLcM2TL","admin":false},
   {"idkhachhang":16,"hoten":"Ximenez De Ruggiero","email":"xdef@nyu.edu","sdt":"8324220809","ngaysinh":"10/03/1999","password":"pxqTqmx","admin":true},
   {"idkhachhang":17,"hoten":"Marion Andersch","email":"manderschg@hc360.com","sdt":"4808016277","ngaysinh":"05/17/2000","password":"rEoGYkmmbh","admin":true},
   {"idkhachhang":18,"hoten":"Lammond Parades","email":"lparadesh@tuttocitta.it","sdt":"5154309025","ngaysinh":"09/05/2000","password":"4Bs2EBx","admin":true},
   {"idkhachhang":19,"hoten":"Judye Harrigan","email":"jharrigani@boston.com","sdt":"3429641613","ngaysinh":"01/09/1999","password":"jf4zvda9l","admin":true},
   {"idkhachhang":20,"hoten":"Adolpho Draijer","email":"adraijerj@jimdo.com","sdt":"8725216644","ngaysinh":"09/19/2000","password":"meI3pzMhEE","admin":false},
   {"idkhachhang":21,"hoten":"Efren Tatlow","email":"etatlowk@thetimes.co.uk","sdt":"9302484218","ngaysinh":"09/12/2000","password":"uGvJIhVP","admin":true},
   {"idkhachhang":22,"hoten":"Prudy Crocetto","email":"pcrocettol@webeden.co.uk","sdt":"6658642546","ngaysinh":"03/07/2000","password":"NbDv0yyyM","admin":false},
   {"idkhachhang":23,"hoten":"Deck McMurtyr","email":"dmcmurtyrm@time.com","sdt":"8689514492","ngaysinh":"06/23/1999","password":"g9hJTUExzx","admin":true},
   {"idkhachhang":24,"hoten":"Alma Tourry","email":"atourryn@japanpost.jp","sdt":"9145542628","ngaysinh":"09/11/2001","password":"yWo0LRVGR","admin":false},
   {"idkhachhang":25,"hoten":"Sarge Priter","email":"spritero@squidoo.com","sdt":"3275653066","ngaysinh":"08/27/2000","password":"1VyH1vX0C7iA","admin":true},
   {"idkhachhang":26,"hoten":"Gillian Palmar","email":"gpalmarp@columbia.edu","sdt":"8999603056","ngaysinh":"11/10/2000","password":"Pfd1dhNr8","admin":true},
   {"idkhachhang":27,"hoten":"Anne-marie Kirkwood","email":"akirkwoodq@spotify.com","sdt":"6536190904","ngaysinh":"10/14/1999","password":"x1E07SUs29","admin":true},
   {"idkhachhang":28,"hoten":"Tamera Gorham","email":"tgorhamr@mail.ru","sdt":"7249582055","ngaysinh":"10/08/2000","password":"n3oDeITNn","admin":true},
   {"idkhachhang":29,"hoten":"Kory Lorait","email":"kloraits@hud.gov","sdt":"4332970477","ngaysinh":"02/01/2001","password":"SjrslsZ5V3","admin":true},
   {"idkhachhang":30,"hoten":"Raimund Garman","email":"rgarmant@indiegogo.com","sdt":"6194232989","ngaysinh":"05/13/2000","password":"lTY94iQ2WgOq","admin":false}]
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('khachhangs',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('khachhangs', null, {});
  }
};
