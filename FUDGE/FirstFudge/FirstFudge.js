"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore; //optional, html already loads FudgeCore, but is nicer to look at
    console.log(f);
    // let cubeSpeed: number = 0.02;
    // let control: number = 0;
    // const directionFactor: number = -1;
    const groundNode = new f.Node("Ground");
    const cubeNode = new f.Node("Cube"); //create a new node
    let viewport;
    window.addEventListener("load", start); //add an event Listener to the window to load the canvas before executing the script 
    function start() {
        const canvas = document.querySelector("canvas"); //initialize canvas
        const camera = new f.ComponentCamera(); //create a new camera
        console.log(camera);
        //groundNode
        const groundMesh = new f.MeshQuad("Ground");
        const cmpGroundMesh = new f.ComponentMesh(groundMesh);
        cmpGroundMesh.mtxPivot.rotateX(-90);
        cmpGroundMesh.mtxPivot.scaleX(50);
        cmpGroundMesh.mtxPivot.scaleY(50);
        cmpGroundMesh.mtxPivot.scaleZ(10);
        const mtrGround = new f.Material("mtrGround", f.ShaderLitTextured);
        const cmpMtrGround = new f.ComponentMaterial(mtrGround);
        groundNode.addComponent(cmpGroundMesh);
        groundNode.addComponent(cmpMtrGround);
        groundNode.addChild(cubeNode);
        //cubeNode
        const cubeMesh = new f.MeshCube("Cube"); //create new cube mesh (a mesh is a resource, multiple components can reference it)
        const cmpMesh = new f.ComponentMesh(cubeMesh); //package the mesh into a component that can be attached to a node
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(2);
        const material = new f.Material("Material", f.ShaderLit); //create a new material for the cube
        const cmpMaterial = new f.ComponentMaterial(material); //put new material in a component
        cmpMaterial.clrPrimary.set(5, 2, 0, 0.5);
        cubeNode.addComponent(cmpMesh); //the component with the mesh gets added to the node
        cubeNode.addComponent(cmpMaterial); //the component with the material gets added to the node
        cubeNode.addComponent(new f.ComponentTransform()); //compact way of making components
        cubeNode.getComponent(f.ComponentTransform).mtxLocal.translateX(0.5); //move the node 2 steps along the x axis
        cubeNode.mtxLocal.translateX(-0.5); //shortcut of the line above
        //camera & viewport
        camera.mtxPivot.translateZ(15); //object is transformed via its local matrix
        camera.mtxPivot.translateY(15);
        camera.mtxPivot.lookAt(new f.Vector3(0, 0, 0));
        viewport = new f.Viewport();
        viewport.initialize("Viewport", groundNode, camera, canvas); //giving the viewport a name, a branch of nodes to render, a camera and a canvas to draw on
        viewport.draw(); //actually draw the viewport
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveCube); //uses fudge loop object to create a game loop (each frame)
        f.Loop.start(); //different modes change beahvior
        f.Time.game.setScale(1);
    }
    function moveCube() {
        const tSpeed = 3 / 1;
        const rSpeed = 360 / 3;
        const frameTimeInMilliseconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliseconds / 1000);
        // const degrees: number = 360 * frameTimeInSeconds;
        // node.mtxLocal.rotateY(degrees);
        // node.mtxLocal.translateX(cubeSpeed * directionFactor, false); //cube moves in the global coord system, not its own, local one (rotation is not factored in)
        // control += cubeSpeed;
        // const directionPower: number = control * control; //check if cube has moved 2 units in any direction on the x axis
        // if (directionPower >= 4) {
        //     cubeSpeed *= directionFactor;
        //     control = 0;
        //     console.log("direction changes");
        // }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            cubeNode.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            cubeNode.mtxLocal.translateZ(tSpeed * frameTimeInSeconds * -1);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            cubeNode.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            cubeNode.mtxLocal.rotateY(rSpeed * frameTimeInSeconds * -1);
        viewport.camera.mtxPivot.lookAt(cubeNode.mtxWorld.translation, f.Vector3.Y());
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map