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
    const items=[{"idnhaxe":1,"tennhaxe":"Mable O'Dunniom","noidunggioithieu":"Duis at velit eu est congue elementum.","anhnhaxe":"http://dummyimage.com/192x100.png/cc0000/ffffff","sdt":"8678175185","diachi":"31 Cambridge Plaza","email":"modunniom0@cargocollective.com","website":"http://tamu.edu","soSaoTB":3.4},
    {"idnhaxe":2,"tennhaxe":"Julieta Hegel","noidunggioithieu":"Aenean sit amet justo.","anhnhaxe":"http://dummyimage.com/133x100.png/dddddd/000000","sdt":"7752760370","diachi":"8 Alpine Court","email":"jhegel1@myspace.com","website":"https://hao123.com","soSaoTB":1.1},
    {"idnhaxe":3,"tennhaxe":"Joyann Hopfer","noidunggioithieu":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","anhnhaxe":"http://dummyimage.com/227x100.png/5fa2dd/ffffff","sdt":"9203291784","diachi":"5 Sutteridge Park","email":"jhopfer2@tinypic.com","website":"http://epa.gov","soSaoTB":4.9},
    {"idnhaxe":4,"tennhaxe":"Kial Crosse","noidunggioithieu":"Integer ac neque.","anhnhaxe":"http://dummyimage.com/185x100.png/5fa2dd/ffffff","sdt":"2844809006","diachi":"59 Grayhawk Drive","email":"kcrosse3@networkadvertising.org","website":"https://google.pl","soSaoTB":1.7},
    {"idnhaxe":5,"tennhaxe":"Josi Shelbourne","noidunggioithieu":"Proin at turpis a pede posuere nonummy.","anhnhaxe":"http://dummyimage.com/115x100.png/5fa2dd/ffffff","sdt":"9175233721","diachi":"597 Thackeray Plaza","email":"jshelbourne4@dyndns.org","website":"http://wikia.com","soSaoTB":2.5},
    {"idnhaxe":6,"tennhaxe":"Reena Foynes","noidunggioithieu":"Aenean auctor gravida sem.","anhnhaxe":"http://dummyimage.com/113x100.png/dddddd/000000","sdt":"2218769025","diachi":"79 Orin Hill","email":"rfoynes5@deviantart.com","website":"http://amazon.co.uk","soSaoTB":4.6},
    {"idnhaxe":7,"tennhaxe":"Merla Crann","noidunggioithieu":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","anhnhaxe":"http://dummyimage.com/120x100.png/cc0000/ffffff","sdt":"2173090785","diachi":"56192 Welch Alley","email":"mcrann6@tumblr.com","website":"http://unc.edu","soSaoTB":4.3},
    {"idnhaxe":8,"tennhaxe":"Bernie Spencock","noidunggioithieu":"Aliquam erat volutpat.","anhnhaxe":"http://dummyimage.com/166x100.png/cc0000/ffffff","sdt":"3117460410","diachi":"3 Waxwing Drive","email":"bspencock7@yellowbook.com","website":"https://ning.com","soSaoTB":1.8},
    {"idnhaxe":9,"tennhaxe":"Odelia Scotchbrook","noidunggioithieu":"Praesent id massa id nisl venenatis lacinia.","anhnhaxe":"http://dummyimage.com/243x100.png/cc0000/ffffff","sdt":"1996863890","diachi":"3 Heffernan Road","email":"oscotchbrook8@huffingtonpost.com","website":"http://census.gov","soSaoTB":1.8},
    {"idnhaxe":10,"tennhaxe":"Theodor Rigden","noidunggioithieu":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","anhnhaxe":"http://dummyimage.com/135x100.png/5fa2dd/ffffff","sdt":"4326058530","diachi":"81884 Fulton Hill","email":"trigden9@nhs.uk","website":"https://123-reg.co.uk","soSaoTB":3.6},
    {"idnhaxe":11,"tennhaxe":"Edita Dodd","noidunggioithieu":"Nulla ac enim.","anhnhaxe":"http://dummyimage.com/141x100.png/dddddd/000000","sdt":"5153302753","diachi":"35004 Schiller Avenue","email":"edodda@scientificamerican.com","website":"http://techcrunch.com","soSaoTB":4.9},
    {"idnhaxe":12,"tennhaxe":"Shannah Pala","noidunggioithieu":"Vivamus in felis eu sapien cursus vestibulum.","anhnhaxe":"http://dummyimage.com/162x100.png/ff4444/ffffff","sdt":"3134379969","diachi":"16418 Duke Avenue","email":"spalab@hc360.com","website":"https://sourceforge.net","soSaoTB":1.1},
    {"idnhaxe":13,"tennhaxe":"Estele Krolak","noidunggioithieu":"Morbi quis tortor id nulla ultrices aliquet.","anhnhaxe":"http://dummyimage.com/242x100.png/5fa2dd/ffffff","sdt":"2459093705","diachi":"4 Glacier Hill Street","email":"ekrolakc@trellian.com","website":"https://netscape.com","soSaoTB":1.4},
    {"idnhaxe":14,"tennhaxe":"Katee Everly","noidunggioithieu":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","anhnhaxe":"http://dummyimage.com/126x100.png/5fa2dd/ffffff","sdt":"1789632560","diachi":"91561 Nova Place","email":"keverlyd@ow.ly","website":"http://epa.gov","soSaoTB":1.6},
    {"idnhaxe":15,"tennhaxe":"Cornela Andrey","noidunggioithieu":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","anhnhaxe":"http://dummyimage.com/168x100.png/dddddd/000000","sdt":"6389294500","diachi":"01 Golf View Park","email":"candreye@jalbum.net","website":"https://businesswire.com","soSaoTB":3.7},
    {"idnhaxe":16,"tennhaxe":"Immanuel Strewthers","noidunggioithieu":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","anhnhaxe":"http://dummyimage.com/224x100.png/dddddd/000000","sdt":"8444862626","diachi":"41555 Namekagon Terrace","email":"istrewthersf@cam.ac.uk","website":"http://harvard.edu","soSaoTB":1.5},
    {"idnhaxe":17,"tennhaxe":"Tades Brideaux","noidunggioithieu":"Donec semper sapien a libero.","anhnhaxe":"http://dummyimage.com/144x100.png/cc0000/ffffff","sdt":"6834608223","diachi":"73498 Grasskamp Way","email":"tbrideauxg@webs.com","website":"http://ftc.gov","soSaoTB":1.2},
    {"idnhaxe":18,"tennhaxe":"Mariann McLenahan","noidunggioithieu":"Morbi ut odio.","anhnhaxe":"http://dummyimage.com/195x100.png/ff4444/ffffff","sdt":"9929669660","diachi":"50 Melody Parkway","email":"mmclenahanh@angelfire.com","website":"https://paginegialle.it","soSaoTB":4.3},
    {"idnhaxe":19,"tennhaxe":"Ambrose McLinden","noidunggioithieu":"Praesent blandit lacinia erat.","anhnhaxe":"http://dummyimage.com/190x100.png/dddddd/000000","sdt":"1402490690","diachi":"0842 Village Green Lane","email":"amclindeni@booking.com","website":"https://youtu.be","soSaoTB":4.8},
    {"idnhaxe":20,"tennhaxe":"Dionis Pottes","noidunggioithieu":"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.","anhnhaxe":"http://dummyimage.com/209x100.png/cc0000/ffffff","sdt":"9857323751","diachi":"26 Lakewood Gardens Crossing","email":"dpottesj@virginia.edu","website":"http://people.com.cn","soSaoTB":1.1},
    {"idnhaxe":21,"tennhaxe":"Dalt Townley","noidunggioithieu":"Vivamus in felis eu sapien cursus vestibulum.","anhnhaxe":"http://dummyimage.com/195x100.png/5fa2dd/ffffff","sdt":"4624158126","diachi":"82833 Oak Street","email":"dtownleyk@wikipedia.org","website":"https://printfriendly.com","soSaoTB":4.8},
    {"idnhaxe":22,"tennhaxe":"Franny Bewley","noidunggioithieu":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","anhnhaxe":"http://dummyimage.com/192x100.png/dddddd/000000","sdt":"9863352834","diachi":"02 Northview Drive","email":"fbewleyl@blogger.com","website":"http://mayoclinic.com","soSaoTB":1.1},
    {"idnhaxe":23,"tennhaxe":"Ruby Harwell","noidunggioithieu":"In sagittis dui vel nisl.","anhnhaxe":"http://dummyimage.com/153x100.png/ff4444/ffffff","sdt":"6906528332","diachi":"086 Lakewood Lane","email":"rharwellm@histats.com","website":"https://hp.com","soSaoTB":3.4},
    {"idnhaxe":24,"tennhaxe":"Merrill Leighfield","noidunggioithieu":"Morbi porttitor lorem id ligula.","anhnhaxe":"http://dummyimage.com/221x100.png/cc0000/ffffff","sdt":"2359530296","diachi":"87427 Riverside Avenue","email":"mleighfieldn@cmu.edu","website":"https://networksolutions.com","soSaoTB":2.1},
    {"idnhaxe":25,"tennhaxe":"Von Coppin","noidunggioithieu":"Maecenas tincidunt lacus at velit.","anhnhaxe":"http://dummyimage.com/146x100.png/5fa2dd/ffffff","sdt":"2168125418","diachi":"90 Boyd Crossing","email":"vcoppino@icio.us","website":"http://buzzfeed.com","soSaoTB":4.1},
    {"idnhaxe":26,"tennhaxe":"Clarey Dancey","noidunggioithieu":"Sed vel enim sit amet nunc viverra dapibus.","anhnhaxe":"http://dummyimage.com/168x100.png/cc0000/ffffff","sdt":"4622944896","diachi":"214 Boyd Junction","email":"cdanceyp@aol.com","website":"https://ebay.co.uk","soSaoTB":2.5},
    {"idnhaxe":27,"tennhaxe":"Monica Ambrogini","noidunggioithieu":"Duis ac nibh.","anhnhaxe":"http://dummyimage.com/241x100.png/cc0000/ffffff","sdt":"7417535942","diachi":"53 Stephen Drive","email":"mambroginiq@1und1.de","website":"https://stanford.edu","soSaoTB":4.6},
    {"idnhaxe":28,"tennhaxe":"Zara Akess","noidunggioithieu":"Nulla mollis molestie lorem.","anhnhaxe":"http://dummyimage.com/117x100.png/dddddd/000000","sdt":"2248397240","diachi":"68912 7th Avenue","email":"zakessr@unesco.org","website":"http://apache.org","soSaoTB":2.5},
    {"idnhaxe":29,"tennhaxe":"Bradford Janas","noidunggioithieu":"Nullam molestie nibh in lectus.","anhnhaxe":"http://dummyimage.com/185x100.png/ff4444/ffffff","sdt":"6763500057","diachi":"4 Gulseth Hill","email":"bjanass@si.edu","website":"http://nps.gov","soSaoTB":3.3},
    {"idnhaxe":30,"tennhaxe":"Bryanty Beaze","noidunggioithieu":"Donec posuere metus vitae ipsum.","anhnhaxe":"http://dummyimage.com/129x100.png/cc0000/ffffff","sdt":"1347003051","diachi":"60002 Beilfuss Court","email":"bbeazet@cbsnews.com","website":"https://guardian.co.uk","soSaoTB":3.9}]
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('nhaxes',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('nhaxes', null, {});
  }
};
