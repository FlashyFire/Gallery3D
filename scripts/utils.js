function makeSlide(n) {
    var geometry = new THREE.PlaneBufferGeometry(60, 45);
    const loader = new THREE.TextureLoader();
    var material = new THREE.MeshBasicMaterial({
        map: loader.load(`./images/image${n.toString().padStart(3, "0")}.jpg`),
        side: THREE.DoubleSide,
    });
    material.map.magFilter = THREE.NearestFilter;
    material.map.minFilter = THREE.LinearFilter;
    return new THREE.Mesh(geometry, material);
}

function makeButton(r, n) {
    var geometry = new THREE.CircleBufferGeometry(r, 42);
    var material = new THREE.MeshBasicMaterial({color: 0xa0a0a0 });
    var background = new THREE.Mesh(geometry, material);
    var icon = makeIcon(r, n);
    icon.position.set(0, 0, 0.02);
    var button = new THREE.Group();
    button.add(background);
    button.add(icon);
    return button;
}

function makeIcon(r, n) {
    var shape = n == 1 ? makeArrowShape(r) : makeCrossShape(r); 
    var geometry = new THREE.ShapeBufferGeometry(shape);
    var material = new THREE.MeshBasicMaterial({color: 0xffffff});
    return new THREE.Mesh(geometry, material);
}

function makeCrossShape(r) {
    const d1 = 0.125 * r;
    const d2 = 0.5 * r;
    var shape = new THREE.Shape();
    shape.moveTo(d1, d2);
    shape.lineTo(-d1, d2);
    shape.lineTo(-d1, d1);
    shape.lineTo(-d2, d1);
    shape.lineTo(-d2, -d1);
    shape.lineTo(-d1, -d1);
    shape.lineTo(-d1, -d2);
    shape.lineTo(d1, -d2);
    shape.lineTo(d1, -d1);
    shape.lineTo(d2, -d1);
    shape.lineTo(d2, d1);
    shape.lineTo(d1, d1);
    shape.lineTo(d1, d2);
    return shape;
}

function makeArrowShape(r) {
    const d1 = 0.3 * r;
    const d2 = 0.5 * r;
    var shape = new THREE.Shape();
    shape.moveTo(-d2 / 2 - d1 / 3, d2);
    shape.lineTo(d2 / 2 - d1 / 3, 0);
    shape.lineTo(-d2 / 2 - d1 / 3, -d2);
    shape.lineTo(-d2 / 2 + d1 * 2 / 3, -d2);
    shape.lineTo(d2 / 2 + d1  * 2 / 3, 0);
    shape.lineTo(-d2 / 2 + d1 * 2 / 3, d2);
    shape.lineTo(-d2 / 2 - d1 / 3, d2);
    return shape;
}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}
