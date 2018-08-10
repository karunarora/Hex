function adSetter(){
alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-8445604951136736/1726497870',
        interstitial: 'ca-app-pub-8445604951136736/7062585032'
    };
} 

if(AdMob) AdMob.createBanner( {
    //isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

}
  function onDeviceReady(){
  alert("device ready");
      adSetter();
  }


window.load=function(){
 document.addEventListener("deviceready", onDeviceReady, false);
}