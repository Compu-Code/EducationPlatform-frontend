<template>
  <canvas ref="canvas3d" class="w-fit"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";
import { Application } from "@splinetool/runtime";
import { ref } from "vue";
export default {
  setup() {
    // // camera
    // const camera = new THREE.OrthographicCamera(
    //   window.innerWidth / -2,
    //   window.innerWidth / 2,
    //   window.innerHeight / 2,
    //   window.innerHeight / -2,
    //   -100000,
    //   100000
    // );
    // camera.position.set(0, 0, 1000);
    // camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
    // // scene
    // const scene = new THREE.Scene();
    // // spline scene
    // const loader = new SplineLoader();
    // loader.load(
    //   "https://prod.spline.design/pOgvDiXPr2gZs-s9/scene.splinecode",
    //   (splineScene) => {
    //     scene.add(splineScene);
    //   }
    // );
    // // renderer
    // const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setAnimationLoop(animate);
    // document.body.appendChild(renderer.domElement);
    // // scene settings
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFShadowMap;
    // scene.background = new THREE.Color("#2d2e32");
    // renderer.setClearAlpha(1);
    // // orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.125;
    // window.addEventListener("resize", onWindowResize);
    // function onWindowResize() {
    //   camera.left = window.innerWidth / -2;
    //   camera.right = window.innerWidth / 2;
    //   camera.top = window.innerHeight / 2;
    //   camera.bottom = window.innerHeight / -2;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // }
    // function animate(time) {
    //   controls.update();
    //   renderer.render(scene, camera);
    // }
    // animate();
  },
  mounted() {
    const canvas = this.$refs.canvas3d;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/pOgvDiXPr2gZs-s9/scene.splinecode");
  },
};
</script>

<style scoped></style>
