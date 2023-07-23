let video = document.getElementById('player');
let link = document.getElementById('link');

// const video = document.querySelector('.about__video-player');
// const link = document.querySelector('.about__button-video');

export const videoLoad = () => {
  link.addEventListener('click', () => {
    if (video.classList.contains('active')) {
      return;
    }
    let src = video.dataset.src;
    video.classList.add('active');
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
};
