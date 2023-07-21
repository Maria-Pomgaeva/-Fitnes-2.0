export const videoLoad = () => {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.getElementById('player');
  let link = document.getElementById('link');

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    player.classList.add('active');
    new YT.Player(player, {
      videoId: '9TZXsZItgdw',
      events: {
        onReady: (e) => e.target.playVideo()
      }
    });
    evt.stopPropagation();
  });
};
