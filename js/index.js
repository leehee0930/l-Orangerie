document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".gnb li");
  const currentPath = window.location.pathname.split("/").pop(); // 현재 파일명 추출

  menuItems.forEach((item) => {
    const link = item.querySelector("a").getAttribute("href");
    if (link === currentPath) {
      item.classList.add("active"); // URL과 href가 일치하면 active 추가
    } else {
      item.classList.remove("active"); // URL과 href가 일치하지 않으면 active 제거
    }
  });
});