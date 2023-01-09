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
   const items=[{"ngaydanhgia":"11/11/2022","sosao":3.3,"noidung":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","idnhaxe":9,"idkhachhang":23},
   {"ngaydanhgia":"12/28/2022","sosao":3.4,"noidung":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","idnhaxe":19,"idkhachhang":9},
   {"ngaydanhgia":"3/23/2022","sosao":2.8,"noidung":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.","idnhaxe":19,"idkhachhang":27},
   {"ngaydanhgia":"1/5/2023","sosao":2.1,"noidung":"Fusce posuere felis sed lacus.","idnhaxe":3,"idkhachhang":10},
   {"ngaydanhgia":"2/11/2022","sosao":3.8,"noidung":"Nunc purus.","idnhaxe":27,"idkhachhang":3},
   {"ngaydanhgia":"1/29/2022","sosao":1.4,"noidung":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.","idnhaxe":10,"idkhachhang":28},
   {"ngaydanhgia":"11/21/2022","sosao":4.6,"noidung":"Etiam pretium iaculis justo.","idnhaxe":7,"idkhachhang":7},
   {"ngaydanhgia":"3/22/2022","sosao":3.1,"noidung":"Nulla mollis molestie lorem.","idnhaxe":15,"idkhachhang":11},
   {"ngaydanhgia":"12/15/2022","sosao":2.7,"noidung":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","idnhaxe":28,"idkhachhang":29},
   {"ngaydanhgia":"2/8/2022","sosao":3.7,"noidung":"Quisque id justo sit amet sapien dignissim vestibulum.","idnhaxe":19,"idkhachhang":30},
   {"ngaydanhgia":"12/2/2022","sosao":4.3,"noidung":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","idnhaxe":7,"idkhachhang":27},
   {"ngaydanhgia":"4/20/2022","sosao":2.9,"noidung":"Proin risus.","idnhaxe":3,"idkhachhang":28},
   {"ngaydanhgia":"6/16/2022","sosao":1.0,"noidung":"Proin interdum mauris non ligula pellentesque ultrices.","idnhaxe":17,"idkhachhang":30},
   {"ngaydanhgia":"1/19/2022","sosao":1.9,"noidung":"Curabitur in libero ut massa volutpat convallis.","idnhaxe":30,"idkhachhang":13},
   {"ngaydanhgia":"7/19/2022","sosao":4.4,"noidung":"Nunc nisl.","idnhaxe":19,"idkhachhang":22},
   {"ngaydanhgia":"7/17/2022","sosao":1.9,"noidung":"Integer a nibh.","idnhaxe":13,"idkhachhang":6},
   {"ngaydanhgia":"6/8/2022","sosao":3.7,"noidung":"Aenean lectus.","idnhaxe":27,"idkhachhang":12},
   {"ngaydanhgia":"12/22/2022","sosao":3.3,"noidung":"Vestibulum rutrum rutrum neque.","idnhaxe":7,"idkhachhang":17},
   {"ngaydanhgia":"1/1/2023","sosao":2.5,"noidung":"Proin at turpis a pede posuere nonummy.","idnhaxe":25,"idkhachhang":2},
   {"ngaydanhgia":"1/28/2022","sosao":1.2,"noidung":"In hac habitasse platea dictumst.","idnhaxe":26,"idkhachhang":12},
   {"ngaydanhgia":"9/6/2022","sosao":2.4,"noidung":"Maecenas ut massa quis augue luctus tincidunt.","idnhaxe":30,"idkhachhang":20},
   {"ngaydanhgia":"4/22/2022","sosao":3.2,"noidung":"Donec ut dolor.","idnhaxe":26,"idkhachhang":18},
   {"ngaydanhgia":"2/3/2022","sosao":3.4,"noidung":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","idnhaxe":15,"idkhachhang":12},
   {"ngaydanhgia":"9/23/2022","sosao":3.5,"noidung":"Ut at dolor quis odio consequat varius.","idnhaxe":8,"idkhachhang":27},
   {"ngaydanhgia":"11/26/2022","sosao":1.6,"noidung":"Donec ut mauris eget massa tempor convallis.","idnhaxe":9,"idkhachhang":24},
   {"ngaydanhgia":"6/17/2022","sosao":4.9,"noidung":"Suspendisse potenti.","idnhaxe":1,"idkhachhang":2},
   {"ngaydanhgia":"8/9/2022","sosao":3.0,"noidung":"In hac habitasse platea dictumst.","idnhaxe":29,"idkhachhang":25},
   {"ngaydanhgia":"3/16/2022","sosao":3.1,"noidung":"Sed vel enim sit amet nunc viverra dapibus.","idnhaxe":3,"idkhachhang":25},
   {"ngaydanhgia":"1/1/2023","sosao":1.8,"noidung":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","idnhaxe":9,"idkhachhang":9},
   {"ngaydanhgia":"2/2/2022","sosao":2.7,"noidung":"Cras in purus eu magna vulputate luctus.","idnhaxe":22,"idkhachhang":16},
   {"ngaydanhgia":"9/20/2022","sosao":4.3,"noidung":"Curabitur gravida nisi at nibh.","idnhaxe":22,"idkhachhang":2},
   {"ngaydanhgia":"1/12/2022","sosao":3.6,"noidung":"Curabitur in libero ut massa volutpat convallis.","idnhaxe":29,"idkhachhang":13},
   {"ngaydanhgia":"4/30/2022","sosao":1.6,"noidung":"Duis ac nibh.","idnhaxe":1,"idkhachhang":14},
   {"ngaydanhgia":"3/17/2022","sosao":3.0,"noidung":"Quisque ut erat.","idnhaxe":27,"idkhachhang":19},
   {"ngaydanhgia":"10/3/2022","sosao":3.9,"noidung":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","idnhaxe":7,"idkhachhang":21},
   {"ngaydanhgia":"1/7/2023","sosao":4.0,"noidung":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","idnhaxe":30,"idkhachhang":22},
   {"ngaydanhgia":"4/7/2022","sosao":1.8,"noidung":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","idnhaxe":15,"idkhachhang":13},
   {"ngaydanhgia":"10/3/2022","sosao":1.9,"noidung":"Duis ac nibh.","idnhaxe":25,"idkhachhang":28},
   {"ngaydanhgia":"6/27/2022","sosao":4.9,"noidung":"Sed accumsan felis.","idnhaxe":4,"idkhachhang":30},
   {"ngaydanhgia":"2/4/2022","sosao":4.5,"noidung":"Nullam porttitor lacus at turpis.","idnhaxe":2,"idkhachhang":13},
   {"ngaydanhgia":"5/10/2022","sosao":4.0,"noidung":"Integer non velit.","idnhaxe":28,"idkhachhang":29},
   {"ngaydanhgia":"7/13/2022","sosao":1.4,"noidung":"Donec quis orci eget orci vehicula condimentum.","idnhaxe":29,"idkhachhang":1},
   {"ngaydanhgia":"8/29/2022","sosao":1.3,"noidung":"In hac habitasse platea dictumst.","idnhaxe":28,"idkhachhang":22},
   {"ngaydanhgia":"11/15/2022","sosao":5.0,"noidung":"Suspendisse potenti.","idnhaxe":5,"idkhachhang":3},
   {"ngaydanhgia":"5/14/2022","sosao":3.5,"noidung":"Maecenas pulvinar lobortis est.","idnhaxe":21,"idkhachhang":4},
   {"ngaydanhgia":"10/11/2022","sosao":2.1,"noidung":"Suspendisse potenti.","idnhaxe":11,"idkhachhang":27},
   {"ngaydanhgia":"12/31/2022","sosao":4.1,"noidung":"Cras pellentesque volutpat dui.","idnhaxe":24,"idkhachhang":20},
   {"ngaydanhgia":"9/3/2022","sosao":4.9,"noidung":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","idnhaxe":7,"idkhachhang":10},
   {"ngaydanhgia":"6/4/2022","sosao":2.9,"noidung":"Aliquam sit amet diam in magna bibendum imperdiet.","idnhaxe":15,"idkhachhang":17},
   {"ngaydanhgia":"2/7/2022","sosao":3.2,"noidung":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","idnhaxe":20,"idkhachhang":17}];
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('danhgia',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('danhgia', null, {});
  }
};
