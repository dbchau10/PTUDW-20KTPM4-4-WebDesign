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
   const items=[{"idvexe":1,"giatien":465907,"thoigiandatve":"12/7/2022","trangthaive":true,"idchuyenxe":48,"idkhachhang":17},
   {"idvexe":2,"giatien":396229,"thoigiandatve":"10/5/2022","trangthaive":true,"idchuyenxe":15,"idkhachhang":19},
   {"idvexe":3,"giatien":532877,"thoigiandatve":"2/18/2022","trangthaive":false,"idchuyenxe":17,"idkhachhang":6},
   {"idvexe":4,"giatien":406630,"thoigiandatve":"6/28/2022","trangthaive":false,"idchuyenxe":8,"idkhachhang":21},
   {"idvexe":5,"giatien":552719,"thoigiandatve":"2/7/2022","trangthaive":false,"idchuyenxe":32,"idkhachhang":30},
   {"idvexe":6,"giatien":574360,"thoigiandatve":"12/4/2022","trangthaive":false,"idchuyenxe":31,"idkhachhang":3},
   {"idvexe":7,"giatien":485529,"thoigiandatve":"10/14/2022","trangthaive":true,"idchuyenxe":6,"idkhachhang":2},
   {"idvexe":8,"giatien":492137,"thoigiandatve":"11/18/2022","trangthaive":true,"idchuyenxe":19,"idkhachhang":2},
   {"idvexe":9,"giatien":355781,"thoigiandatve":"3/3/2022","trangthaive":false,"idchuyenxe":19,"idkhachhang":26},
   {"idvexe":10,"giatien":407678,"thoigiandatve":"7/26/2022","trangthaive":false,"idchuyenxe":7,"idkhachhang":9},
   {"idvexe":11,"giatien":495701,"thoigiandatve":"2/23/2022","trangthaive":false,"idchuyenxe":5,"idkhachhang":21},
   {"idvexe":12,"giatien":339033,"thoigiandatve":"10/14/2022","trangthaive":false,"idchuyenxe":48,"idkhachhang":7},
   {"idvexe":13,"giatien":315175,"thoigiandatve":"9/9/2022","trangthaive":true,"idchuyenxe":9,"idkhachhang":3},
   {"idvexe":14,"giatien":455449,"thoigiandatve":"4/16/2022","trangthaive":false,"idchuyenxe":6,"idkhachhang":20},
   {"idvexe":15,"giatien":536859,"thoigiandatve":"3/27/2022","trangthaive":true,"idchuyenxe":44,"idkhachhang":18},
   {"idvexe":16,"giatien":511540,"thoigiandatve":"3/1/2022","trangthaive":true,"idchuyenxe":24,"idkhachhang":3},
   {"idvexe":17,"giatien":398837,"thoigiandatve":"10/22/2022","trangthaive":false,"idchuyenxe":10,"idkhachhang":24},
   {"idvexe":18,"giatien":383398,"thoigiandatve":"7/20/2022","trangthaive":false,"idchuyenxe":7,"idkhachhang":9},
   {"idvexe":19,"giatien":332402,"thoigiandatve":"1/17/2022","trangthaive":true,"idchuyenxe":10,"idkhachhang":3},
   {"idvexe":20,"giatien":541230,"thoigiandatve":"5/29/2022","trangthaive":false,"idchuyenxe":9,"idkhachhang":20},
   {"idvexe":21,"giatien":369407,"thoigiandatve":"4/14/2022","trangthaive":true,"idchuyenxe":11,"idkhachhang":11},
   {"idvexe":22,"giatien":596068,"thoigiandatve":"8/29/2022","trangthaive":true,"idchuyenxe":40,"idkhachhang":14},
   {"idvexe":23,"giatien":581213,"thoigiandatve":"9/20/2022","trangthaive":true,"idchuyenxe":23,"idkhachhang":16},
   {"idvexe":24,"giatien":373752,"thoigiandatve":"3/28/2022","trangthaive":true,"idchuyenxe":39,"idkhachhang":25},
   {"idvexe":25,"giatien":328303,"thoigiandatve":"2/21/2022","trangthaive":true,"idchuyenxe":31,"idkhachhang":11},
   {"idvexe":26,"giatien":519924,"thoigiandatve":"11/17/2022","trangthaive":false,"idchuyenxe":26,"idkhachhang":22},
   {"idvexe":27,"giatien":400118,"thoigiandatve":"1/23/2022","trangthaive":false,"idchuyenxe":4,"idkhachhang":9},
   {"idvexe":28,"giatien":477028,"thoigiandatve":"7/15/2022","trangthaive":true,"idchuyenxe":46,"idkhachhang":3},
   {"idvexe":29,"giatien":502635,"thoigiandatve":"5/27/2022","trangthaive":true,"idchuyenxe":50,"idkhachhang":27},
   {"idvexe":30,"giatien":436521,"thoigiandatve":"11/7/2022","trangthaive":true,"idchuyenxe":41,"idkhachhang":9},
   {"idvexe":31,"giatien":482251,"thoigiandatve":"4/12/2022","trangthaive":true,"idchuyenxe":19,"idkhachhang":14},
   {"idvexe":32,"giatien":363725,"thoigiandatve":"9/16/2022","trangthaive":false,"idchuyenxe":11,"idkhachhang":30},
   {"idvexe":33,"giatien":500594,"thoigiandatve":"3/25/2022","trangthaive":false,"idchuyenxe":15,"idkhachhang":16},
   {"idvexe":34,"giatien":550799,"thoigiandatve":"9/12/2022","trangthaive":false,"idchuyenxe":20,"idkhachhang":23},
   {"idvexe":35,"giatien":397801,"thoigiandatve":"4/22/2022","trangthaive":false,"idchuyenxe":2,"idkhachhang":20},
   {"idvexe":36,"giatien":372105,"thoigiandatve":"4/14/2022","trangthaive":true,"idchuyenxe":3,"idkhachhang":27},
   {"idvexe":37,"giatien":458902,"thoigiandatve":"5/11/2022","trangthaive":true,"idchuyenxe":44,"idkhachhang":15},
   {"idvexe":38,"giatien":543354,"thoigiandatve":"1/28/2022","trangthaive":false,"idchuyenxe":29,"idkhachhang":4},
   {"idvexe":39,"giatien":570560,"thoigiandatve":"12/14/2022","trangthaive":true,"idchuyenxe":45,"idkhachhang":3},
   {"idvexe":40,"giatien":520523,"thoigiandatve":"5/11/2022","trangthaive":false,"idchuyenxe":41,"idkhachhang":20},
   {"idvexe":41,"giatien":338369,"thoigiandatve":"9/19/2022","trangthaive":false,"idchuyenxe":33,"idkhachhang":18},
   {"idvexe":42,"giatien":407280,"thoigiandatve":"10/15/2022","trangthaive":true,"idchuyenxe":35,"idkhachhang":17},
   {"idvexe":43,"giatien":387284,"thoigiandatve":"12/28/2022","trangthaive":false,"idchuyenxe":49,"idkhachhang":4},
   {"idvexe":44,"giatien":464550,"thoigiandatve":"5/12/2022","trangthaive":false,"idchuyenxe":43,"idkhachhang":19},
   {"idvexe":45,"giatien":407614,"thoigiandatve":"10/17/2022","trangthaive":true,"idchuyenxe":44,"idkhachhang":5},
   {"idvexe":46,"giatien":415392,"thoigiandatve":"1/26/2022","trangthaive":true,"idchuyenxe":21,"idkhachhang":3},
   {"idvexe":47,"giatien":383149,"thoigiandatve":"7/16/2022","trangthaive":false,"idchuyenxe":3,"idkhachhang":8},
   {"idvexe":48,"giatien":307336,"thoigiandatve":"7/21/2022","trangthaive":false,"idchuyenxe":39,"idkhachhang":11},
   {"idvexe":49,"giatien":345416,"thoigiandatve":"4/9/2022","trangthaive":true,"idchuyenxe":23,"idkhachhang":2},
   {"idvexe":50,"giatien":576857,"thoigiandatve":"5/27/2022","trangthaive":false,"idchuyenxe":26,"idkhachhang":17},
   {"idvexe":51,"giatien":321542,"thoigiandatve":"3/12/2022","trangthaive":true,"idchuyenxe":37,"idkhachhang":28},
   {"idvexe":52,"giatien":492676,"thoigiandatve":"6/13/2022","trangthaive":true,"idchuyenxe":48,"idkhachhang":21},
   {"idvexe":53,"giatien":523868,"thoigiandatve":"5/27/2022","trangthaive":true,"idchuyenxe":45,"idkhachhang":18},
   {"idvexe":54,"giatien":492374,"thoigiandatve":"10/19/2022","trangthaive":false,"idchuyenxe":10,"idkhachhang":12},
   {"idvexe":55,"giatien":353829,"thoigiandatve":"1/23/2022","trangthaive":true,"idchuyenxe":12,"idkhachhang":21},
   {"idvexe":56,"giatien":360585,"thoigiandatve":"4/5/2022","trangthaive":false,"idchuyenxe":6,"idkhachhang":22},
   {"idvexe":57,"giatien":391731,"thoigiandatve":"5/2/2022","trangthaive":false,"idchuyenxe":26,"idkhachhang":16},
   {"idvexe":58,"giatien":379741,"thoigiandatve":"5/11/2022","trangthaive":true,"idchuyenxe":34,"idkhachhang":19},
   {"idvexe":59,"giatien":433255,"thoigiandatve":"5/31/2022","trangthaive":false,"idchuyenxe":38,"idkhachhang":22},
   {"idvexe":60,"giatien":406555,"thoigiandatve":"3/4/2022","trangthaive":true,"idchuyenxe":6,"idkhachhang":3},
   {"idvexe":61,"giatien":565166,"thoigiandatve":"4/19/2022","trangthaive":true,"idchuyenxe":45,"idkhachhang":10},
   {"idvexe":62,"giatien":437156,"thoigiandatve":"8/12/2022","trangthaive":true,"idchuyenxe":38,"idkhachhang":2},
   {"idvexe":63,"giatien":541528,"thoigiandatve":"7/22/2022","trangthaive":false,"idchuyenxe":19,"idkhachhang":11},
   {"idvexe":64,"giatien":439175,"thoigiandatve":"1/6/2023","trangthaive":false,"idchuyenxe":27,"idkhachhang":25},
   {"idvexe":65,"giatien":472367,"thoigiandatve":"3/22/2022","trangthaive":false,"idchuyenxe":30,"idkhachhang":10},
   {"idvexe":66,"giatien":377347,"thoigiandatve":"8/22/2022","trangthaive":true,"idchuyenxe":6,"idkhachhang":10},
   {"idvexe":67,"giatien":551019,"thoigiandatve":"9/9/2022","trangthaive":false,"idchuyenxe":21,"idkhachhang":18},
   {"idvexe":68,"giatien":533288,"thoigiandatve":"6/21/2022","trangthaive":true,"idchuyenxe":1,"idkhachhang":16},
   {"idvexe":69,"giatien":541832,"thoigiandatve":"8/5/2022","trangthaive":true,"idchuyenxe":24,"idkhachhang":3},
   {"idvexe":70,"giatien":332252,"thoigiandatve":"1/21/2022","trangthaive":false,"idchuyenxe":6,"idkhachhang":10},
   {"idvexe":71,"giatien":355663,"thoigiandatve":"7/7/2022","trangthaive":false,"idchuyenxe":9,"idkhachhang":24},
   {"idvexe":72,"giatien":474969,"thoigiandatve":"5/6/2022","trangthaive":false,"idchuyenxe":23,"idkhachhang":21},
   {"idvexe":73,"giatien":572490,"thoigiandatve":"11/23/2022","trangthaive":true,"idchuyenxe":23,"idkhachhang":21},
   {"idvexe":74,"giatien":352755,"thoigiandatve":"8/14/2022","trangthaive":true,"idchuyenxe":38,"idkhachhang":6},
   {"idvexe":75,"giatien":499318,"thoigiandatve":"2/19/2022","trangthaive":false,"idchuyenxe":22,"idkhachhang":12},
   {"idvexe":76,"giatien":452083,"thoigiandatve":"9/21/2022","trangthaive":false,"idchuyenxe":43,"idkhachhang":9},
   {"idvexe":77,"giatien":548253,"thoigiandatve":"10/15/2022","trangthaive":true,"idchuyenxe":43,"idkhachhang":14},
   {"idvexe":78,"giatien":555735,"thoigiandatve":"4/4/2022","trangthaive":true,"idchuyenxe":43,"idkhachhang":9},
   {"idvexe":79,"giatien":320489,"thoigiandatve":"2/21/2022","trangthaive":false,"idchuyenxe":29,"idkhachhang":21},
   {"idvexe":80,"giatien":329524,"thoigiandatve":"11/12/2022","trangthaive":true,"idchuyenxe":39,"idkhachhang":4},
   {"idvexe":81,"giatien":454759,"thoigiandatve":"9/23/2022","trangthaive":false,"idchuyenxe":36,"idkhachhang":2},
   {"idvexe":82,"giatien":543831,"thoigiandatve":"3/13/2022","trangthaive":true,"idchuyenxe":50,"idkhachhang":1},
   {"idvexe":83,"giatien":501692,"thoigiandatve":"7/22/2022","trangthaive":true,"idchuyenxe":22,"idkhachhang":24},
   {"idvexe":84,"giatien":448921,"thoigiandatve":"8/8/2022","trangthaive":false,"idchuyenxe":23,"idkhachhang":2},
   {"idvexe":85,"giatien":580431,"thoigiandatve":"3/26/2022","trangthaive":false,"idchuyenxe":5,"idkhachhang":14},
   {"idvexe":86,"giatien":513508,"thoigiandatve":"5/23/2022","trangthaive":true,"idchuyenxe":45,"idkhachhang":18},
   {"idvexe":87,"giatien":454872,"thoigiandatve":"6/17/2022","trangthaive":true,"idchuyenxe":14,"idkhachhang":25},
   {"idvexe":88,"giatien":322011,"thoigiandatve":"5/15/2022","trangthaive":false,"idchuyenxe":3,"idkhachhang":27},
   {"idvexe":89,"giatien":471173,"thoigiandatve":"10/19/2022","trangthaive":false,"idchuyenxe":37,"idkhachhang":9},
   {"idvexe":90,"giatien":312777,"thoigiandatve":"6/30/2022","trangthaive":true,"idchuyenxe":45,"idkhachhang":29},
   {"idvexe":91,"giatien":413364,"thoigiandatve":"9/9/2022","trangthaive":false,"idchuyenxe":42,"idkhachhang":15},
   {"idvexe":92,"giatien":399883,"thoigiandatve":"7/30/2022","trangthaive":false,"idchuyenxe":32,"idkhachhang":20},
   {"idvexe":93,"giatien":340115,"thoigiandatve":"2/17/2022","trangthaive":false,"idchuyenxe":17,"idkhachhang":16},
   {"idvexe":94,"giatien":569248,"thoigiandatve":"9/30/2022","trangthaive":false,"idchuyenxe":45,"idkhachhang":29},
   {"idvexe":95,"giatien":341931,"thoigiandatve":"8/4/2022","trangthaive":false,"idchuyenxe":38,"idkhachhang":26},
   {"idvexe":96,"giatien":464575,"thoigiandatve":"2/18/2022","trangthaive":false,"idchuyenxe":5,"idkhachhang":25},
   {"idvexe":97,"giatien":457624,"thoigiandatve":"3/27/2022","trangthaive":true,"idchuyenxe":31,"idkhachhang":16},
   {"idvexe":98,"giatien":447164,"thoigiandatve":"6/6/2022","trangthaive":false,"idchuyenxe":5,"idkhachhang":13},
   {"idvexe":99,"giatien":572535,"thoigiandatve":"2/13/2022","trangthaive":false,"idchuyenxe":11,"idkhachhang":29},
   {"idvexe":100,"giatien":504847,"thoigiandatve":"11/3/2022","trangthaive":true,"idchuyenxe":14,"idkhachhang":9}]
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('vexes',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('vexes', null, {});
  }
};
