namespace FudgeSolarSystem {

    export class Body3D {

        private static mesh: f.MeshSphere = new f.MeshSphere("BodySphere");
        private static material: f.Material = new f.Material("Base", f.ShaderLit);

        public position: f.Vector3;
        public name: string;

        private size: number;
        private distance: number;
        private vOrbit: number;
        private vRotation: number;
        private cmpMesh: f.ComponentMesh;
        private cmpMtr: f.ComponentMaterial;
        private cmpTransform: f.ComponentTransform;


        public constructor(_position: f.Vector3, _name: string, _size: number) {

            this.position = _position;
            this.name = _name;

            this.size = _size

            this.cmpMesh = new f.ComponentMesh(Body3D.mesh);
            this.cmpMtr = new f.ComponentMaterial(Body3D.material);
            this.cmpTransform = new f.ComponentTransform();
        }

        public setTransforms(_distance: number, _vOrbit: number, _vRotation: number): void {

            this.distance = _distance;
            this.vOrbit = _vOrbit;
            this.vRotation = _vRotation;
        }

            


}
}