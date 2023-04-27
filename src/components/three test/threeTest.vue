<!-- <template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from "three";
import * as trois from "troisjs";

import SplineLoader from "@splinetool/loader";

export default {
  mounted() {
    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
      "https://prod.spline.design/pOgvDiXPr2gZs-s9/scene.splinecode",
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    this.$refs.container.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color("#2d2e32");
    renderer.setClearAlpha(0);

    // camera
    const camera = new Camera();
    camera.position.set(0, 0, 1000);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // orbit controls
    const controls = camera.controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    window.addEventListener("resize", onWindowResize);
    function onWindowResize() {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      controls.update();
      renderer.render(scene, camera);

      animate();
    }
  },
};
</script>

<style scoped></style> -->
