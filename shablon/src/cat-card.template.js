import image from '../static/image/icon_3.jpg'

export default `
<div class="blog-post">
<img class="blog-post__image" src=${image} alt="">
<div class="blog-post__title"> {{title}}</div>
<div class="blog-post__text">{{text}}</div>
</div>
`