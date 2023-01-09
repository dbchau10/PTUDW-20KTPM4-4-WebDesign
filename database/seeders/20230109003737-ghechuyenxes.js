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
   const items=[{"idghechuyenxe":1,"vitri":"LBU","trangthai":false,"idchuyenxe":15},
   {"idghechuyenxe":2,"vitri":"LUQ","trangthai":true,"idchuyenxe":29},
   {"idghechuyenxe":3,"vitri":"AWK","trangthai":false,"idchuyenxe":8},
   {"idghechuyenxe":4,"vitri":"KCZ","trangthai":true,"idchuyenxe":22},
   {"idghechuyenxe":5,"vitri":"CWI","trangthai":false,"idchuyenxe":9},
   {"idghechuyenxe":6,"vitri":"HPV","trangthai":false,"idchuyenxe":46},
   {"idghechuyenxe":7,"vitri":"TNI","trangthai":true,"idchuyenxe":3},
   {"idghechuyenxe":8,"vitri":"WSR","trangthai":false,"idchuyenxe":9},
   {"idghechuyenxe":9,"vitri":"SCV","trangthai":false,"idchuyenxe":48},
   {"idghechuyenxe":10,"vitri":"MLO","trangthai":false,"idchuyenxe":36},
   {"idghechuyenxe":11,"vitri":"TKT","trangthai":true,"idchuyenxe":19},
   {"idghechuyenxe":12,"vitri":"ZHI","trangthai":false,"idchuyenxe":23},
   {"idghechuyenxe":13,"vitri":"CKW","trangthai":true,"idchuyenxe":19},
   {"idghechuyenxe":14,"vitri":"LAZ","trangthai":true,"idchuyenxe":23},
   {"idghechuyenxe":15,"vitri":"NIS","trangthai":false,"idchuyenxe":29},
   {"idghechuyenxe":16,"vitri":"SJD","trangthai":true,"idchuyenxe":38},
   {"idghechuyenxe":17,"vitri":"ISW","trangthai":true,"idchuyenxe":19},
   {"idghechuyenxe":18,"vitri":"RVT","trangthai":false,"idchuyenxe":25},
   {"idghechuyenxe":19,"vitri":"ISS","trangthai":true,"idchuyenxe":44},
   {"idghechuyenxe":20,"vitri":"HUJ","trangthai":true,"idchuyenxe":4},
   {"idghechuyenxe":21,"vitri":"AKB","trangthai":true,"idchuyenxe":19},
   {"idghechuyenxe":22,"vitri":"RDM","trangthai":true,"idchuyenxe":20},
   {"idghechuyenxe":23,"vitri":"YCH","trangthai":false,"idchuyenxe":28},
   {"idghechuyenxe":24,"vitri":"PUU","trangthai":false,"idchuyenxe":14},
   {"idghechuyenxe":25,"vitri":"BRX","trangthai":false,"idchuyenxe":4},
   {"idghechuyenxe":26,"vitri":"BRL","trangthai":false,"idchuyenxe":44},
   {"idghechuyenxe":27,"vitri":"COQ","trangthai":true,"idchuyenxe":18},
   {"idghechuyenxe":28,"vitri":"OIR","trangthai":true,"idchuyenxe":23},
   {"idghechuyenxe":29,"vitri":"GRQ","trangthai":true,"idchuyenxe":17},
   {"idghechuyenxe":30,"vitri":"NBN","trangthai":true,"idchuyenxe":4},
   {"idghechuyenxe":31,"vitri":"AYG","trangthai":true,"idchuyenxe":37},
   {"idghechuyenxe":32,"vitri":"NGZ","trangthai":false,"idchuyenxe":10},
   {"idghechuyenxe":33,"vitri":"MTL","trangthai":true,"idchuyenxe":22},
   {"idghechuyenxe":34,"vitri":"LDA","trangthai":false,"idchuyenxe":4},
   {"idghechuyenxe":35,"vitri":"EHT","trangthai":true,"idchuyenxe":42},
   {"idghechuyenxe":36,"vitri":"UKB","trangthai":false,"idchuyenxe":10},
   {"idghechuyenxe":37,"vitri":"BGX","trangthai":false,"idchuyenxe":1},
   {"idghechuyenxe":38,"vitri":"KIB","trangthai":false,"idchuyenxe":26},
   {"idghechuyenxe":39,"vitri":"AOU","trangthai":false,"idchuyenxe":45},
   {"idghechuyenxe":40,"vitri":"TGR","trangthai":false,"idchuyenxe":32},
   {"idghechuyenxe":41,"vitri":"IAL","trangthai":false,"idchuyenxe":32},
   {"idghechuyenxe":42,"vitri":"HAX","trangthai":false,"idchuyenxe":40},
   {"idghechuyenxe":43,"vitri":"VJQ","trangthai":true,"idchuyenxe":17},
   {"idghechuyenxe":44,"vitri":"AOD","trangthai":true,"idchuyenxe":19},
   {"idghechuyenxe":45,"vitri":"SNZ","trangthai":true,"idchuyenxe":48},
   {"idghechuyenxe":46,"vitri":"PTH","trangthai":false,"idchuyenxe":44},
   {"idghechuyenxe":47,"vitri":"ADS","trangthai":false,"idchuyenxe":17},
   {"idghechuyenxe":48,"vitri":"DIG","trangthai":true,"idchuyenxe":7},
   {"idghechuyenxe":49,"vitri":"NOJ","trangthai":false,"idchuyenxe":41},
   {"idghechuyenxe":50,"vitri":"VAG","trangthai":true,"idchuyenxe":42},
   {"idghechuyenxe":51,"vitri":"JIP","trangthai":false,"idchuyenxe":20},
   {"idghechuyenxe":52,"vitri":"XAU","trangthai":false,"idchuyenxe":23},
   {"idghechuyenxe":53,"vitri":"HGO","trangthai":true,"idchuyenxe":1},
   {"idghechuyenxe":54,"vitri":"KMN","trangthai":false,"idchuyenxe":16},
   {"idghechuyenxe":55,"vitri":"BNG","trangthai":true,"idchuyenxe":29},
   {"idghechuyenxe":56,"vitri":"FKS","trangthai":false,"idchuyenxe":14},
   {"idghechuyenxe":57,"vitri":"ATS","trangthai":false,"idchuyenxe":40},
   {"idghechuyenxe":58,"vitri":"QPS","trangthai":false,"idchuyenxe":21},
   {"idghechuyenxe":59,"vitri":"JJG","trangthai":true,"idchuyenxe":1},
   {"idghechuyenxe":60,"vitri":"NUE","trangthai":true,"idchuyenxe":3},
   {"idghechuyenxe":61,"vitri":"FUB","trangthai":true,"idchuyenxe":44},
   {"idghechuyenxe":62,"vitri":"YHA","trangthai":true,"idchuyenxe":28},
   {"idghechuyenxe":63,"vitri":"PRZ","trangthai":false,"idchuyenxe":50},
   {"idghechuyenxe":64,"vitri":"BMY","trangthai":true,"idchuyenxe":14},
   {"idghechuyenxe":65,"vitri":"SQV","trangthai":false,"idchuyenxe":8},
   {"idghechuyenxe":66,"vitri":"MID","trangthai":false,"idchuyenxe":28},
   {"idghechuyenxe":67,"vitri":"BVW","trangthai":true,"idchuyenxe":49},
   {"idghechuyenxe":68,"vitri":"YCT","trangthai":true,"idchuyenxe":8},
   {"idghechuyenxe":69,"vitri":"LCA","trangthai":true,"idchuyenxe":35},
   {"idghechuyenxe":70,"vitri":"NUX","trangthai":true,"idchuyenxe":18},
   {"idghechuyenxe":71,"vitri":"DHA","trangthai":true,"idchuyenxe":16},
   {"idghechuyenxe":72,"vitri":"JIJ","trangthai":true,"idchuyenxe":14},
   {"idghechuyenxe":73,"vitri":"BLT","trangthai":false,"idchuyenxe":45},
   {"idghechuyenxe":74,"vitri":"BNS","trangthai":true,"idchuyenxe":10},
   {"idghechuyenxe":75,"vitri":"TDT","trangthai":false,"idchuyenxe":6},
   {"idghechuyenxe":76,"vitri":"VTE","trangthai":true,"idchuyenxe":32},
   {"idghechuyenxe":77,"vitri":"GLX","trangthai":false,"idchuyenxe":32},
   {"idghechuyenxe":78,"vitri":"ARF","trangthai":false,"idchuyenxe":27},
   {"idghechuyenxe":79,"vitri":"CUC","trangthai":true,"idchuyenxe":33},
   {"idghechuyenxe":80,"vitri":"ZOS","trangthai":true,"idchuyenxe":16},
   {"idghechuyenxe":81,"vitri":"HVN","trangthai":false,"idchuyenxe":43},
   {"idghechuyenxe":82,"vitri":"LLU","trangthai":false,"idchuyenxe":30},
   {"idghechuyenxe":83,"vitri":"YBL","trangthai":false,"idchuyenxe":20},
   {"idghechuyenxe":84,"vitri":"DEI","trangthai":true,"idchuyenxe":13},
   {"idghechuyenxe":85,"vitri":"HZL","trangthai":false,"idchuyenxe":50},
   {"idghechuyenxe":86,"vitri":"SHS","trangthai":true,"idchuyenxe":31},
   {"idghechuyenxe":87,"vitri":"VBG","trangthai":true,"idchuyenxe":50},
   {"idghechuyenxe":88,"vitri":"YPO","trangthai":true,"idchuyenxe":2},
   {"idghechuyenxe":89,"vitri":"LIY","trangthai":true,"idchuyenxe":29},
   {"idghechuyenxe":90,"vitri":"YZV","trangthai":true,"idchuyenxe":32},
   {"idghechuyenxe":91,"vitri":"THH","trangthai":true,"idchuyenxe":16},
   {"idghechuyenxe":92,"vitri":"HUW","trangthai":false,"idchuyenxe":1},
   {"idghechuyenxe":93,"vitri":"UGI","trangthai":false,"idchuyenxe":10},
   {"idghechuyenxe":94,"vitri":"CFQ","trangthai":true,"idchuyenxe":47},
   {"idghechuyenxe":95,"vitri":"PXH","trangthai":true,"idchuyenxe":6},
   {"idghechuyenxe":96,"vitri":"JAQ","trangthai":false,"idchuyenxe":15},
   {"idghechuyenxe":97,"vitri":"MIP","trangthai":false,"idchuyenxe":27},
   {"idghechuyenxe":98,"vitri":"YFA","trangthai":false,"idchuyenxe":39},
   {"idghechuyenxe":99,"vitri":"SCY","trangthai":true,"idchuyenxe":2},
   {"idghechuyenxe":100,"vitri":"CJH","trangthai":false,"idchuyenxe":42}];
    items.forEach(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
    })
   await queryInterface.bulkInsert('ghechuyenxes',items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ghechuyenxes', null, {});
  }
};
