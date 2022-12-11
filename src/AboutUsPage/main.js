const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sidebarItems = $$(".sidebar__item");
const contentPara = $(".content__para");
const contentTitle = $(".content__title");

const contentList = [
  {
    title: "Giới thiệu",
    content: `Được thành lập từ năm 2013, Gobe đã xây dựng được tên tuổi hàng đầu với bề dày hoạt động trong lĩnh vực thương mại điện tử, công nghệ và du lịch. Gobe tự hào là đơn vị đi đầu trong sự nghiệp cách mạng ngành xe khách và du lịch Việt Nam bao gồm các giải pháp: đặt vé & phương tiện thông minh cho hành khách, phần mềm quản lý hiệu quả cho nhà xe (BMS - Bus Management System) và phần mềm hỗ trợ bán vé hiệu quả cho đại lý (AMS- Agent Management System).
    <br><br>
    Hiện tại, Gobe là một trong những hệ thống vé xe lớn nhất Việt Nam. Không chỉ mang đến cho người dùng đa dạng lựa chọn về hãng xe, dòng xe và giải pháp đặt vé nhanh chóng, tiện lợi, Gobe còn có rất nhiều ưu đãi hàng tháng, giúp khách hàng đặt được vé xe khách chất lượng cao với giá thấp nhất thị trường. Hành khách có thể dễ dàng lựa chọn trước chỗ ngồi yêu thích, thanh toán vé trực tuyến, hoặc bằng tiền mặt tại các cửa hàng tiện lợi trên cả nước.`,
  },
  {
    title: "Tầm nhìn",
    content: `Tất cả những gì bạn cần cho du lịch và vận tải.
    <br><br>
    Trải qua hàng nghìn năm, lịch sử nhân loại đã có những bước tiến nhảy vọt, chủ yếu do cải thiện năng suất lao động. Tin tưởng vào điều này, Gobe mong muốn có thể góp phần cải thiện và nâng cao đời sống người dân thông qua khả năng sáng tạo đổi mới và ứng dụng công nghệ, đáp ứng mọi nhu cầu trong mảng du lịch và vận tải.`,
  },
  {
    title: "Sứ mệnh",
    content: `Góp phần cho hành trình của bạn hạnh phúc hơn.
    <br><br>
    Mỗi chúng ta đều có những chuyến đi khởi đầu cho những hành trình thú vị và hạnh phúc, thay đổi cuộc đời của chính mình. Sứ mệnh mà Gobe hướng đến không chỉ gói gọn trong những chuyến đi, mà còn là hành trình cuộc đời của mỗi người. Gobe mong muốn đồng hành và góp phần cho mỗi hành trình ấy hạnh phúc trọn vẹn hơn. Đó có thể là những chuyến đi có giá tiết kiệm hơn tạo điều kiện cho nhiều người được đi du lịch hơn, hay nhiều người được tiếp cận với những dịch vụ tốt hơn, có nhiều trải nghiệm hạnh phúc và ý nghĩa hơn.`,
  },
  {
    title: "Giải thưởng",
    content: `Góp phần cho hành trình của bạn hạnh phúc hơn.
    <br><br>
    Mỗi chúng ta đều có những chuyến đi khởi đầu cho những hành trình thú vị và hạnh phúc, thay đổi cuộc đời của chính mình. Sứ mệnh mà Gobe hướng đến không chỉ gói gọn trong những chuyến đi, mà còn là hành trình cuộc đời của mỗi người. Gobe mong muốn đồng hành và góp phần cho mỗi hành trình ấy hạnh phúc trọn vẹn hơn. Đó có thể là những chuyến đi có giá tiết kiệm hơn tạo điều kiện cho nhiều người được đi du lịch hơn, hay nhiều người được tiếp cận với những dịch vụ tốt hơn, có nhiều trải nghiệm hạnh phúc và ý nghĩa hơn.`,
  },
  {
    title: "Báo chí",
    content: `Góp phần cho hành trình của bạn hạnh phúc hơn.
    <br><br>
    Mỗi chúng ta đều có những chuyến đi khởi đầu cho những hành trình thú vị và hạnh phúc, thay đổi cuộc đời của chính mình. Sứ mệnh mà Gobe hướng đến không chỉ gói gọn trong những chuyến đi, mà còn là hành trình cuộc đời của mỗi người. Gobe mong muốn đồng hành và góp phần cho mỗi hành trình ấy hạnh phúc trọn vẹn hơn. Đó có thể là những chuyến đi có giá tiết kiệm hơn tạo điều kiện cho nhiều người được đi du lịch hơn, hay nhiều người được tiếp cận với những dịch vụ tốt hơn, có nhiều trải nghiệm hạnh phúc và ý nghĩa hơn.`,
  },
  {
    title: "Nhà đầu tư",
    content: `Góp phần cho hành trình của bạn hạnh phúc hơn.
    <br><br>
    Mỗi chúng ta đều có những chuyến đi khởi đầu cho những hành trình thú vị và hạnh phúc, thay đổi cuộc đời của chính mình. Sứ mệnh mà Gobe hướng đến không chỉ gói gọn trong những chuyến đi, mà còn là hành trình cuộc đời của mỗi người. Gobe mong muốn đồng hành và góp phần cho mỗi hành trình ấy hạnh phúc trọn vẹn hơn. Đó có thể là những chuyến đi có giá tiết kiệm hơn tạo điều kiện cho nhiều người được đi du lịch hơn, hay nhiều người được tiếp cận với những dịch vụ tốt hơn, có nhiều trải nghiệm hạnh phúc và ý nghĩa hơn.`,
  },
];

Array.from(sidebarItems).forEach((item, index) => {
  item.onclick = () => {
    contentTitle.innerHTML = contentList[index].title;
    contentPara.innerHTML = contentList[index].content;
  };
});
