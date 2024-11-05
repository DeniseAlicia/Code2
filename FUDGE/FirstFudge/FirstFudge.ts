namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);

    let cubeSpeed: number = 0.02;
    let control: number = 0;
    const directionFactor: number = -1;

    const node: f.Node = new f.Node("Node"); //create a new node
    let globalViewport: f.Viewport;
    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!; //initialize canvas


        const camera: f.ComponentCamera = new f.ComponentCamera(); //create a new camera
        console.log(camera);


        const mesh: f.MeshCube = new f.MeshCube("Cube"); //create new cube mesh (a mesh is a resource, multiple components can reference it)
        console.log(mesh);
        const cmpMesh: f.Component = new f.ComponentMesh(mesh); //package the mesh into a component that can be attached to a node


        const material: f.Material = new f.Material("Material", f.ShaderLit); //create a new material for the cube
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material); //put new material in a component
        cmpMaterial.clrPrimary.set(0, 5, 2, 0.5);


        node.addComponent(cmpMesh);     //the component with the mesh gets added to the node
        node.addComponent(cmpMaterial); //the component with the material gets added to the node
        node.addComponent(new f.ComponentTransform()); //compact way of making components
        node.getComponent(f.ComponentTransform).mtxLocal.translateX(0.5); //move the node 2 steps along the x axis
        node.mtxLocal.translateY(0.5); //shortcut of the line above


        camera.mtxPivot.translateZ(5); //object is transformed via its local matrix
        camera.mtxPivot.rotateY(180);

        const viewport: f.Viewport = new f.Viewport(); //create a new viewport to display stuff
        viewport.initialize("Viewport", node, camera, canvas); //giving the viewport a name, a branch of nodes to render, a camera and a canvas to draw on
        viewport.draw(); //actually draw the viewport
        globalViewport = viewport;

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveCube) //uses fudge loop object to create a game loop (each frame)
        f.Loop.start(); //different modes change beahvior

        f.Time.game.setScale(1);
    }

    function moveCube(): void {
        // const frameTimeInMilliseconds: number = f.Loop.timeFrameGame;
        // const frameTimeInSeconds: number = (frameTimeInMilliseconds / 1000);
        // const degrees: number = 360 * frameTimeInSeconds;
        // node.mtxLocal.rotateY(degrees);




        node.mtxLocal.translateX(cubeSpeed * directionFactor, false);
        node.mtxLocal.rotateY(5);
        control += cubeSpeed;
        const directionPower: number = control * control;

        if (directionPower >= 4) {
            cubeSpeed *= directionFactor;
            control = 0;
            console.log("direction changes");
        }

        globalViewport.draw();
    }
}