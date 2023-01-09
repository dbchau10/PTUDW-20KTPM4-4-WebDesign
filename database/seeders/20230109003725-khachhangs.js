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
   const items=[{"idkhachhang":1,"hoten":"Paxton Cleall","email":"pcleall0@wikia.com","sdt":"1615038375","ngaysinh":"05/15/2001","password":"AzYar1OXIE"},
   {"idkhachhang":2,"hoten":"Nevil Tiptaft","email":"ntiptaft1@ehow.com","sdt":"1666790551","ngaysinh":"07/06/2000","password":"WDiuRAMH"},
   {"idkhachhang":3,"hoten":"Susanetta Uman","email":"suman2@ibm.com","sdt":"9794615718","ngaysinh":"09/26/1999","password":"SDKVJE"},
   {"idkhachhang":4,"hoten":"Zulema Brownill","email":"zbrownill3@dropbox.com","sdt":"6507688436","ngaysinh":"09/03/2000","password":"ESvnAaVlg"},
   {"idkhachhang":5,"hoten":"Paulette MacEllen","email":"pmacellen4@quantcast.com","sdt":"8986482684","ngaysinh":"06/21/2001","password":"yq9ezYsCimC"},
   {"idkhachhang":6,"hoten":"Estel Sturley","email":"esturley5@pbs.org","sdt":"2609690901","ngaysinh":"12/30/2001","password":"2E8gwfuPbulO"},
   {"idkhachhang":7,"hoten":"Micah Moxley","email":"mmoxley6@people.com.cn","sdt":"4564612058","ngaysinh":"05/10/2001","password":"N3f0B9N"},
   {"idkhachhang":8,"hoten":"Roger Cowton","email":"rcowton7@paypal.com","sdt":"8688661673","ngaysinh":"09/20/1999","password":"pKQ1C7s"},
   {"idkhachhang":9,"hoten":"Vivienne Skewis","email":"vskewis8@businesswire.com","sdt":"5447024166","ngaysinh":"04/05/1999","password":"uZNZqQCvC8A3"},
   {"idkhachhang":10,"hoten":"Cleon Corragan","email":"ccorragan9@cocolog-nifty.com","sdt":"6734007105","ngaysinh":"01/09/2001","password":"EqlLWfc8"},
   {"idkhachhang":11,"hoten":"Nikolaus Horick","email":"nhoricka@slate.com","sdt":"1237094979","ngaysinh":"07/03/2001","password":"2PYFhArnVMG"},
   {"idkhachhang":12,"hoten":"Mikael Gaunter","email":"mgaunterb@reuters.com","sdt":"2466053829","ngaysinh":"01/01/2002","password":"uF8c6R"},
   {"idkhachhang":13,"hoten":"Constancia Hawkslee","email":"chawksleec@umn.edu","sdt":"7559191576","ngaysinh":"01/07/2001","password":"OQWGhkhYT"},
   {"idkhachhang":14,"hoten":"Bettine Gleeton","email":"bgleetond@go.com","sdt":"2982307022","ngaysinh":"08/29/2001","password":"qoVXmntQ"},
   {"idkhachhang":15,"hoten":"Kara-lynn Pee","email":"kpeee@mysql.com","sdt":"4436687230","ngaysinh":"11/29/1999","password":"q46pMavc"},
   {"idkhachhang":16,"hoten":"Alejandra Moore","email":"amooref@illinois.edu","sdt":"5049605729","ngaysinh":"07/22/1999","password":"0jHufRJ1"},
   {"idkhachhang":17,"hoten":"Alex Dunbleton","email":"adunbletong@mapy.cz","sdt":"9442017463","ngaysinh":"02/17/1999","password":"SaoiLqHf"},
   {"idkhachhang":18,"hoten":"Gilberte Wayne","email":"gwayneh@about.com","sdt":"8602108732","ngaysinh":"07/07/2001","password":"AEPdyQPP"},
   {"idkhachhang":19,"hoten":"Abie Pancoust","email":"apancousti@miibeian.gov.cn","sdt":"5357927977","ngaysinh":"10/24/2000","password":"LoHpvdr"},
   {"idkhachhang":20,"hoten":"Dasha Robertot","email":"drobertotj@senate.gov","sdt":"3722996162","ngaysinh":"05/04/1999","password":"5txngvgSh"},
   {"idkhachhang":21,"hoten":"Tisha Packer","email":"tpackerk@google.com.hk","sdt":"3163002341","ngaysinh":"10/01/2000","password":"Lz66oJa"},
   {"idkhachhang":22,"hoten":"Luz Grimoldby","email":"lgrimoldbyl@cocolog-nifty.com","sdt":"3576231601","ngaysinh":"03/09/2001","password":"TVHZT9KbpXkj"},
   {"idkhachhang":23,"hoten":"Delphine Dot","email":"ddotm@a8.net","sdt":"3741654468","ngaysinh":"11/17/2000","password":"9XHp5wA6"},
   {"idkhachhang":24,"hoten":"Abbott Heeney","email":"aheeneyn@umich.edu","sdt":"5748144860","ngaysinh":"07/30/2001","password":"fplXFOawQP"},
   {"idkhachhang":25,"hoten":"Amery Hadlington","email":"ahadlingtono@privacy.gov.au","sdt":"1246900303","ngaysinh":"09/14/2001","password":"tY8xd1"},
   {"idkhachhang":26,"hoten":"Barbabas Tournay","email":"btournayp@pen.io","sdt":"5118756109","ngaysinh":"10/16/2000","password":"tBokLk4mNUFT"},
   {"idkhachhang":27,"hoten":"Brewer Really","email":"breallyq@behance.net","sdt":"9137617033","ngaysinh":"05/10/1999","password":"H7QSwoYwy"},
   {"idkhachhang":28,"hoten":"Keefer Shipman","email":"kshipmanr@webnode.com","sdt":"3492898962","ngaysinh":"12/04/2001","password":"tkyNNOVXP"},
   {"idkhachhang":29,"hoten":"Adriane Hayball","email":"ahayballs@360.cn","sdt":"7934814684","ngaysinh":"08/07/2001","password":"9u5HUcw8k"},
   {"idkhachhang":30,"hoten":"Cathie Treagust","email":"ctreagustt@geocities.jp","sdt":"1816908920","ngaysinh":"01/03/2002","password":"4jNr9qnDWox"}]
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
