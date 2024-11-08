namespace FudgeSolarSystem {

    export import f = FudgeCore;

    export class Body extends f.Node {

        private static mesh: f.MeshSphere = new f.MeshSphere("BodySphere");
        private static material: f.Material = new f.Material("BodyMaterial", f.ShaderLit);

        // public position: f.Vector3;
        public rotationNode: f.Node;

        private size: number;
        private distance: number = 0;
        private vOrbit: number;
        private vRotation: number = 0;
 
        


        public constructor(_name: string, _size: number, _color: string, _distance: number, _speed: number) {

            super(_name);

            this.size = _size;
            this.vOrbit = _speed;

            const tempMtr: f.ComponentMaterial = new f.ComponentMaterial(Body.material);
            tempMtr.clrPrimary.setCSS(_color);

            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(tempMtr);
            this.addComponent(new f.ComponentTransform()) ;

            this.mtxLocal.translateX(_distance);

            this.rotationNode = new f.Node(_name + " Rotation Node");
            this.rotationNode.addComponent(new f.ComponentTransform);
            this.rotationNode.addChild(this);
        }

        public setTransforms(_distance: number, _vOrbit: number, _vRotation: number): void {

            this.distance = _distance;
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
        }

        public step(): void {
            console.log("steps taken");
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);

            const c: f.Node = this.getChild(0);

            if (c) {
                for (const bn of c.getChildren()) {
                    (bn as Body).step(); 
                }
            }

        }   


}
}