namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);

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
  
        const node: f.Node = new f.Node("Node"); //create a new node
        node.addComponent(cmpMesh);     //the component with the mesh gets added to the node
        node.addComponent(cmpMaterial); //the componen with the material gets added to the node

        camera.mtxPivot.translateZ(-5);

        const viewport: f.Viewport = new f.Viewport(); //create a new viewport to display stuff
        viewport.initialize("Viewport", node, camera, canvas); //giving the viewport a name, a branch of nodes to render, a camera and a canvas to draw on
        viewport.draw(); //actually draw the viewport
    }
}