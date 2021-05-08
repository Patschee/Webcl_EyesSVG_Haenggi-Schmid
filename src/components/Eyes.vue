<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: "Eyes",
  props: {
    msg: String,
  },

};

const eyeView = id => `
    <svg  id="${id}" viewBox="0 0 120 120">

      <filter id="shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset      dx="0" dy="8" />
        <feColorMatrix  type="matrix"
                        values="0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 .5 0"/>
        <feBlend        in="SourceGraphic" mode="normal"/>
      </filter>

      <radialGradient id="gradient1" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
        <stop offset= "38%" stop-color="#000000" stop-opacity="1" />
        <stop offset= "46%" stop-color="#073F80" stop-opacity="1" />
        <stop offset= "90%" stop-color="#8EC0DD" stop-opacity="1" />
        <stop offset="100%" stop-color="#2F3A46" stop-opacity="1" />
      </radialGradient>
      <g id="${id}_iris">
        <ellipse cx="60" cy="60" rx="30" ry="30" opacity="1" fill="url(#gradient1)" />
        <ellipse cx="50" cy="50" rx="7"  ry="7"  opacity="1" fill="#FFFFFF" fill-opacity="0.8"/>
      </g>
      <g id="${id}_openLids">
        <path d="M0 60 A60,60 0 0,1 120,60 A60,30 0 0,0 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" filter="url(#shadow)" />
        <path d="M0 60 A60,60 0 0,0 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#F4CB76" fill-opacity="1" />
      </g>
      <g id="${id}_closeLid">
        <path d="M0 60 A60,60 0 0,1 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" />
      </g>
    </svg>
    `;

document.writeln(eyeView('leftEye'));
document.writeln(eyeView('rightEye'));

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0;
  box-sizing: border-box;
  width:  100%;
  height: 100%;
}
svg {
  width:  100px;
  height: 80px;
  position: absolute;
}
#leftEye {
  top:  100px;
  left: 100px;
}
#rightEye {
  top:  100px;
  left: 250px;
}
</style>
