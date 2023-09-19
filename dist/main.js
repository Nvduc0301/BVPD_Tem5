const toggleMenu = () => {
    const topMenu = document.getElementById('top-menu')
    const toggleMenuIcon = document.getElementById('toggle-top-menu-icon')
    const toggleMenuIcon2 = document.getElementById('toggle-top-menu-icon2')
    
    topMenu.classList.toggle('topmenu-expanded')
    topMenu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('hidden')
    toggleMenuIcon2.classList.toggle('hidden')
}

const hidePhoneText = () => {
    const phoneText = document.getElementById("phone-text");    
  
    if (window.innerWidth < 1024) {
      phoneText.innerText = "1900 1806";
    } else {
      phoneText.innerText = "Gọi 1900 1806";
    }
  }
window.addEventListener("resize", hidePhoneText);
document.addEventListener("DOMContentLoaded", hidePhoneText);


// check send price
const sendPhonePrice = () => {
  var phone = document.querySelector(".phone-price").value;
  if (!phone) {
      alert("Vui lòng nhập số điện thoại");
    } else if (isNaN(phone)) {
      alert("Số điện thoại phải là số");
    } else {
      alert("Gửi thông tin thành công");
      
    }
}

//chech send modal

const sendModal = () => {
  var name = document.querySelector(".name-modal").value;
  var phone = document.querySelector(".phone-modal").value;
  var email = document.querySelector(".email-modal").value;
  var content = document.querySelector(".content-modal").value;
  

  if (!name || !phone || !email || !content) {
    alert("Vui lòng nhập đủ thông tin");
  } else if (isNaN(phone)) {
    alert("Số điện thoại phải là số");
    document.querySelector(".phone-modal").value = "";
  } else {
    alert("Đăng ký thành công");
    document.querySelector(".name-modal").value = "";
    document.querySelector(".phone-modal").value = "";
    document.querySelector(".email-modal").value = "";
    document.querySelector(".content-modal").value = "";
  }
}

// sign footer
const sendFooter = () => {
  var name = document.querySelector(".name-footer").value;
  var phone = document.querySelector(".phone-footer").value;
  var email = document.querySelector(".email-footer").value;
  var content = document.querySelector(".content-footer").value;

  if (!name || !phone || !email || !content) {
    alert("Vui lòng nhập đủ thông tin");
  } else if (isNaN(phone)) {
    alert("Số điện thoại phải là số");
    document.querySelector(".phone-footer").value = "";
  } else {
    alert("Đăng ký thành công");
    document.querySelector(".name-footer").value = "";
    document.querySelector(".phone-footer").value = "";
    document.querySelector(".email-footer").value = "";
    document.querySelector(".content-footer").value = "";
  }
  }


// modal click sign

const setupModal = () => {
  const buyBtns = document.querySelectorAll('.btn-sign');
  const modal = document.querySelector('.js-modal');
  const modalcontainer = document.querySelector('.js-modal-container');
  const modalclose = document.querySelector('.js-modal-close');

  const showBuyTickets = () => {
    modal.classList.add('flex');
    modal.classList.remove('hidden')
  };

  const hideBuyTickets = () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');

  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  buyBtns.forEach((buyBtn) => {
    buyBtn.onclick = showBuyTickets;
  });

  modalclose.onclick = hideBuyTickets;
  modal.onclick = hideBuyTickets;
  modalcontainer.onclick = stopPropagation; 
};

setupModal();