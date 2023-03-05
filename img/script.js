const toggleSwitch = document.querySelector(',theme-switch input[type="checkbox"]');
function switchTheme(e) {
   if (e.target,checked) {
      document.documentElement.setAttribute('gata-theme','dark');
    } else {
       document.documentElement.setAttribute('gata-theme','light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);