  function onDeviceReady(){
 admob.createBannerView({publisherId:'ca-app-pub-8445604951136736/1726497870'});
  }

 document.addEventListener("deviceready", onDeviceReady, false);


admob.requestInterstitialAd({
  publisherId:          "ca-app-pub-8445604951136736/1726497870",
  interstitialAdId:     "ca-app-pub-8445604951136736/7062585032",
  autoShowInterstitial: true
});