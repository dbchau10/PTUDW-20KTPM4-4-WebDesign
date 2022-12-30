const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const container = $(".container1");

const sidebarAccountInfo = $(".sidebar__item:nth-child(1)");
const sidebarMyTicket = $(".sidebar__item:nth-child(3)");
const sidebarComment = $(".sidebar__item:nth-child(6)");
let navItemList = $$(".ticket__nav__item");

const accountInfo = `
<div class="container__title">Thông tin tài khoản</div>
<div class="container__inner container--account-info flex">
  <div class="left">
    <div class="container__inner__title">Thông tin cá nhân</div>
    <div class="align-center">
      <img
        src="/static/Images/avaImg.png"
        alt="ava"
        class="container__inner__ava"
      />
      <div class="info-item">
        <div class="info-label">Họ và tên</div>
        <input
          class="info-input--text"
          type="text"
          value="Hồ Minh Thanh Tài"
        />
      </div>
    </div>
    <div class="info_list">
      <div class="info-item">
        <div class="info-label">Ngày sinh</div>
        <input class="info-input--date" type="date" name="" id="" />
      </div>
      <div class="info-item space-between">
        <div class="info-label">Giới tính</div>
        <div>
          <input
            class="info-input--radio"
            type="radio"
            name="gender"
            id="male"
          />
          <label class="info-label" for="male">Nam</label>
        </div>
        <div>
          <input
            class="info-input--radio"
            type="radio"
            name="gender"
            id="female"
          />
          <label class="info-label" for="female">Nữ</label>
        </div>
        <div>
          <input
            class="info-input--radio"
            type="radio"
            name="gender"
            id="non-binary"
          />
          <label class="info-label" for="non-binary">Non-binary</label>
        </div>
      </div>
      <div class="info-item">
        <div class="info-label">Quốc tịch</div>
        <select class="info-input--select" name="nation" id="nation">
          <option value="Vietnam">Việt Nam</option>
          <option value="Japan">Nhật bản</option>
        </select>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="title-medium">Số điện thoại & Email</div>
    <div class="right__info-item align-center border-bottom">
      <img
        class="info-item-icon"
        src="/static/Images/icon_ phone.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Số điện thoại</div>
        <div class="subtitle2">0938 452 980</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
    <div class="right__info-item align-center">
      <img
        class="info-item-icon"
        src="/static/Images/icon_ mail.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Địa chỉ email</div>
        <div class="subtitle2">Thêm địa chỉ email</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
    <div class="title-medium">Bảo mật</div>
    <div class="right__info-item align-center border-bottom">
      <img
        class="info-item-icon"
        src="/static/Images/icon_ mật khẩu.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Đổi mật khẩu</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
    <div class="right__info-item align-center">
      <img
        class="info-item-icon"
        src="/static/Images/icon_ check.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Thiết lập mã pin</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
    <div class="title-medium">Liên kết mạng xã hội</div>
    <div class="right__info-item align-center border-bottom">
      <img
        class="info-item-icon"
        src="/static/Images/Facebook icon.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Facebook</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
    <div class="right__info-item align-center">
      <img
        class="info-item-icon"
        src="/static/Images/Google icon.svg"
        alt=""
        class="icon"
      />
      <div class="inline-block">
        <div class="subtitle1">Google</div>
      </div>
      <button class="btn btn--update outline small">Cập nhật</button>
    </div>
  </div>
</div>
`;

const myTicket = `
<div class="container--ticket">
<div class="ticket__nav">
  <div
    class="ticket__nav__item active"
    onclick="handleNavTicketItem1()"
  >
    Hiện tại
  </div>
  <div class="ticket__nav__item" onclick="handleNavTicketItem2()">
    Đã đi
  </div>
  <div class="ticket__nav__item" onclick="handleNavTicketItem3()">
    Đã hủy
  </div>
</div>
<div class="ticket__content__container">
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

const comment = `<div class="container--comment">
<div class="comment__title">Nhận xết chuyến đi</div>
<div class="comment__list">
  <div class="comment__item">
    <div class="comment__left">
      <img
        src="/static/Images/commnet__img.png"
        alt=""
        class="comment__img"
      />
      <div class="comment__bus">Nhà xe: Hoàng Yến</div>
      <div class="comment__ticketId">Mã vé: 20H1127PD068</div>
    </div>
    <div class="comment__right">
      <div class="comment__date">Đăng ngày 12/10/2022</div>
      <div class="comment_para">
        Tài xế thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe
        chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng giờ. Tài xế
        thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng
        giờ.
      </div>
      <img
        src="/static/Images/stars.svg"
        alt=""
        class="comment__rates"
      />
    </div>
  </div>
  <div class="comment__item">
    <div class="comment__left">
      <img
        src="/static/Images/commnet__img.png"
        alt=""
        class="comment__img"
      />
      <div class="comment__bus">Nhà xe: Hoàng Yến</div>
      <div class="comment__ticketId">Mã vé: 20H1127PD068</div>
    </div>
    <div class="comment__right">
      <div class="comment__date">Đăng ngày 12/10/2022</div>
      <div class="comment_para">
        Tài xế thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe
        chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng giờ. Tài xế
        thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng
        giờ.
      </div>
      <img
        src="/static/Images/stars.svg"
        alt=""
        class="comment__rates"
      />
    </div>
  </div>
  <div class="comment__item">
    <div class="comment__left">
      <img
        src="/static/Images/commnet__img.png"
        alt=""
        class="comment__img"
      />
      <div class="comment__bus">Nhà xe: Hoàng Yến</div>
      <div class="comment__ticketId">Mã vé: 20H1127PD068</div>
    </div>
    <div class="comment__right">
      <div class="comment__date">Đăng ngày 12/10/2022</div>
      <div class="comment_para">
        Tài xế thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe
        chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng giờ. Tài xế
        thân thiện. Xe chạy đúng giờ. Tài xế thân thiện. Xe chạy đúng
        giờ.
      </div>
      <img
        src="/static/Images/stars.svg"
        alt=""
        class="comment__rates"
      />
    </div>
  </div>
</div>
<div class="pages">
  <div class="page">1</div>
  <div class="page">2</div>
  <div class="page active">3</div>
  <div class="page">4</div>
  <div class="page">5</div>
</div>
</div>`;

sidebarAccountInfo.onclick = () => {
  const curActive = $(".sidebar__item.active");
  curActive.classList.remove("active");
  sidebarAccountInfo.classList.add("active");
  container.innerHTML = accountInfo;
};

sidebarMyTicket.onclick = () => {
  const curActive = $(".sidebar__item.active");
  curActive.classList.remove("active");
  sidebarMyTicket.classList.add("active");
  container.innerHTML = myTicket;
  navItemList = $$(".ticket__nav__item");
};

sidebarComment.onclick = () => {
  const curActive = $(".sidebar__item.active");
  curActive.classList.remove("active");
  sidebarComment.classList.add("active");
  container.innerHTML = comment;
};

function handleNavTicketItem1() {
  const curActive = $(".ticket__nav__item.active");
  curActive.classList.remove("active");
  navItemList[0].classList.add("active");

  const ticketContentContainer = $(".ticket__content__container");
  ticketContentContainer.innerHTML = `
  <div class="ticket__content">
  <div class="ticket__head space-between align-center">
    <div class="">
      <div class="tiket__bus">Hoàng Yến</div>
      <div class="tiket__bus_type">Limouse 9 chỗ</div>
    </div>
    <div class="">
      <div class="quantity"><span>Số lượng vé:</span> 1</div>
      <div class="quantity"><span>Số ghế vé:</span> 1</div>
    </div>
  </div>

  <div class="ticket">
    <div class="tiket__left">
      <div class="info-detail">
        <img
          class="route-icon"
          src="/static/Images/route-icon.png"
          alt="route-icon"
        />
        <div class="route-info">
          <div class="depart-point">
            <span class="time">14:50</span>
            <span class="pos">Văn phòng Mỹ Đình</span>
          </div>
          <span class="duration">1h45m</span>
          <div class="desti-point">
            <span class="time">9:50</span>
            <span class="pos">728 Thiên Lôi</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ticket__right">
      <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
      <div class="ticket__user">
        <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
      </div>
      <div class="ticket__phone">
        <span>Số điện thoại:</span> (+84) 987654321
      </div>
      <div class="temp align-center mt-32">
        <div class="payed_label">Đã thanh toán</div>
        <div class="price"><span>Số tiền: </span>200.000đ</div>
      </div>
    </div>
  </div>
</div>
  `;
}

function handleNavTicketItem2() {
  const curActive = $(".ticket__nav__item.active");
  curActive.classList.remove("active");
  navItemList[1].classList.add("active");
  const ticketContentContainer = $(".ticket__content__container");
  ticketContentContainer.innerHTML = `
  <div class="ticket__content__container">
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

function handleNavTicketItem3() {
  const curActive = $(".ticket__nav__item.active");
  curActive.classList.remove("active");
  navItemList[2].classList.add("active");
  const ticketContentContainer = $(".ticket__content__container");
  ticketContentContainer.innerHTML = `
  <div class="ticket__content__container">
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
  <div class="ticket__content">
    <div class="ticket__head space-between align-center">
      <div class="">
        <div class="tiket__bus">Hoàng Yến</div>
        <div class="tiket__bus_type">Limouse 9 chỗ</div>
      </div>
      <div class="">
        <div class="quantity"><span>Số lượng vé:</span> 1</div>
        <div class="quantity"><span>Số ghế vé:</span> 1</div>
      </div>
    </div>

    <div class="ticket">
      <div class="tiket__left">
        <div class="info-detail">
          <img
            class="route-icon"
            src="/static/Images/route-icon.png"
            alt="route-icon"
          />
          <div class="route-info">
            <div class="depart-point">
              <span class="time">14:50</span>
              <span class="pos">Văn phòng Mỹ Đình</span>
            </div>
            <span class="duration">1h45m</span>
            <div class="desti-point">
              <span class="time">9:50</span>
              <span class="pos">728 Thiên Lôi</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket__right">
        <div class="ticket__id"><span>Mã vé:</span> 20H1127PD068</div>
        <div class="ticket__user">
          <span>Họ tên người đặt:</span> Hồ Minh thanh Tài
        </div>
        <div class="ticket__phone">
          <span>Số điện thoại:</span> (+84) 987654321
        </div>
        <div class="temp align-center mt-32">
          <div class="payed_label">Đã thanh toán</div>
          <div class="price"><span>Số tiền: </span>200.000đ</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

let offcanvas = $(".navbar-toggler");
// const $nav = $("nav");
// offcanvas.addEventListener("click", canvasHandling);

offcanvas.onclick = canvasHandling;

function canvasHandling(e) {
  let $nav = $("nav");
  $nav.classList.remove("navbar-light");
  $nav.classList.remove("bg-light");
  $nav.classList.remove("shadow");
  $nav.classList.add("navbar-dark");
}

let close = $(".btn-close");
// close.addEventListener("click", closeHandler);

close.onclick = closeHandler;

function closeHandler(e) {
  let $nav = $("nav");
  $nav.classList.remove("navbar-dark");
  $nav.classList.add("navbar-light");
  $nav.classList.add("bg-light");
  $nav.classList.add("shadow");
}
