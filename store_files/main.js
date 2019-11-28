$(function () {

  $(".btn-install").on("click", function (e) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var currentOs = "PC";
    if (/windows phone/i.test(userAgent)) {
        currentOs = "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      currentOs = "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      currentOs = "iOS";
    }

    if(currentOs == "PC")
      location.href = "https://biggergames.net";

    

    var camp_ios = "https://track.tenjin.io/v0/click/cuhMk6jWxJ9vxlcYxb6tl3";
    var camp_a_ios = "https://track.tenjin.io/v0/click/dIYPvW4kE4N5c71N2GLcjJ";
    var camp_b_ios = "https://track.tenjin.io/v0/click/doeGJEuZNBMNQyUQkKl5u3";
    var camp_c_ios = "https://track.tenjin.io/v0/click/dM59ughYbjzE3reDeHDQAH";

    var params = {};
    location.search.substr(1).split("&").forEach(function(item) { params[item.split("=")[0]] = item.split("=")[1] });
    var utm_source = params.site_source_name;
    //var utm_medium = params.placement;
    var utm_campaign = params.name;
    var ad_id = params.adid;
    var site_id = "BiggerGit";
    var os = params.os;
    var campType = params.camp;
    
    var _camp = "";
    if(campType == "a")       { _camp = camp_a_ios; }    
    else if(campType == "b")  { _camp = camp_b_ios; }    
    else if(campType == "c")  { _camp = camp_c_ios; }    
    else                      { _camp = camp_ios; }
    
    var red_URL = `${_camp}?advertising_id=${ad_id}&site_id=${site_id}&ad_network=${utm_source}&campaign_name=${utm_campaign}`;

    var register = window.localStorage.getItem(fbPixelId);
    if (register) {
      var elapsed = Date.now() - register;
      console.log(elapsed);
      if (Math.floor(elapsed / 1000) < 10) {
        location.href = red_URL
        return
      }
    }
  
    fbq('track', 'Lead');
    window.localStorage.setItem(fbPixelId, Date.now());
    location.href = red_URL;
  })
  
  $(".btn-install-sc").on("click", function (e) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var currentOs = "PC";
    if (/windows phone/i.test(userAgent)) {
        currentOs = "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      currentOs = "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      currentOs = "iOS";
    }

    if(currentOs == "PC")
      location.href = "https://biggergames.net";

    

    var camp_ios = "https://track.tenjin.io/v0/click/cuhMk6jWxJ9vxlcYxb6tl3";
    var camp_a_ios = "https://track.tenjin.io/v0/click/dIYPvW4kE4N5c71N2GLcjJ";
    var camp_b_ios = "https://track.tenjin.io/v0/click/doeGJEuZNBMNQyUQkKl5u3";
    var camp_c_ios = "https://track.tenjin.io/v0/click/dM59ughYbjzE3reDeHDQAH";

    var params = {};
    location.search.substr(1).split("&").forEach(function(item) { params[item.split("=")[0]] = item.split("=")[1] });
    var utm_source = params.site_source_name;
    //var utm_medium = params.placement;
    var utm_campaign = params.name;
    var ad_id = params.adid;
    var site_id = "BiggerGitSC";
    var os = params.os;
    var campType = params.camp;
    
    var _camp = "";
    if(campType == "a")       { _camp = camp_a_ios; }    
    else if(campType == "b")  { _camp = camp_b_ios; }    
    else if(campType == "c")  { _camp = camp_c_ios; }    
    else                      { _camp = camp_ios; }
    
    var red_URL = `${_camp}?advertising_id=${ad_id}&site_id=${site_id}&ad_network=${utm_source}&campaign_name=${utm_campaign}`;

    var register = window.localStorage.getItem(pixelSent);
    console.log("tracking? " + register);
    if (register == false) {
      snaptr('track', 'VIEW_CONTENT');
      window.localStorage.setItem(pixelSent, true);
      console.log('tracked');
    }

    location.href = red_URL;

	})

	var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 50) {
  	document.getElementById("topnav-center").style.opacity = 1;
  	document.getElementById("topnav-right").style.opacity = 1;
  	document.getElementById("topnav-center").style.display = "block";
  	document.getElementById("topnav-right").style.display = "block";
  } else {
  	document.getElementById("topnav-center").style.opacity = 0;
  	document.getElementById("topnav-right").style.opacity = 0;
  }

  $("#btn-more a").on("click", function (e) {
  	$(this).remove()
  	$("#txt-more").removeClass("txt-fadeout")

  })

  $(".gallery-img").on("click", function (e) {
  	// $("html, body").css("overflow", "hidden")
  	bodyScrollLock.disableBodyScroll(document.getElementById("panel"));
  	$("#gallery").removeClass('slide-down').addClass("slide-up")
  })

  $("#nav-gallery").on("click", function (e) {
  	// $("html, body").css("overflow", "auto")
  	bodyScrollLock.enableBodyScroll(document.getElementById("panel"));
  	$("#gallery").removeClass('slide-up').addClass("slide-down")
  })

  $("h2").on("click", function (e) {
  	$("#txt-publisher").show()
  	$("#txt-subtitle").toggleClass("fade-out-06").toggleClass("fade-in-06");
  	$("#txt-publisher").toggleClass("fade-out-06").toggleClass("fade-in-06");
  })
})


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
var onScroll = function () {
	var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 110) {
    // document.getElementById("topnav-center").style.display = "block";
    // document.getElementById("topnav-right").style.display = "block";
    document.getElementById("topnav-center").className = "fade-in"
    document.getElementById("topnav-right").className = "fade-in"
    document.getElementById("topnav-center").style.display = "block";
  	document.getElementById("topnav-right").style.display = "block";
  } else {
    // document.getElementById("topnav-center").style.display = "none";
    // document.getElementById("topnav-right").style.display = "none";
    document.getElementById("topnav-center").className = "fade-out"
    document.getElementById("topnav-right").className = "fade-out"
  }
}

window.onscroll = onScroll;