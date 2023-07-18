const video = document.getElementById('video');

export const videoLoad = () => {
  video.addEventListener('click', () => {
    if (video.classList.contains('active')) {
      return;
    }
    let src = video.dataset.src;
    video.classList.add('active');
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
};
