import * as THREE from 'three';

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const planeGeometry = new THREE.PlaneGeometry( 10, 10 );
    const planeMaterial = new THREE.MeshBasicMaterial( {color: '#0000ff', side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.rotateX(90);
    scene.add( plane );


    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;

    renderer.render(scene, camera);
}

init();