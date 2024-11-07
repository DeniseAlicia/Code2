namespace FudgeSolarSystem {

    export import f = FudgeCore;

    export class Body3D extends f.Node {

        private static mesh: f.MeshSphere = new f.MeshSphere("BodySphere");
        private static material: f.Material = new f.Material("BodyMaterial", f.ShaderLit);

        // public position: f.Vector3;

        private size: number;
        private distance: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;
 
        


        public constructor(_name: string, _size: number, _color: string) {

            super(_name);

            this.size = _size;

            this.addComponent(new f.ComponentMesh(Body3D.mesh));
            this.addComponent(new f.ComponentMaterial(Body3D.material));
            super.addComponent(new f.ComponentTransform()) ;
        }

        public setTransforms(_distance: number, _vOrbit: number, _vRotation: number): void {

            this.distance = _distance;
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
        }

            


}
}