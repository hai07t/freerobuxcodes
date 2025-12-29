const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  if (window.AndroidOrientation && AndroidOrientation.lockLandscape) {
    AndroidOrientation.lockLandscape();
  }
  var to = "https://www.appicon.co/";
  window.location.href = to;
} else {
  if (window.AndroidOrientation && AndroidOrientation.lockPortrait) {
    AndroidOrientation.lockPortrait();
  }
}
