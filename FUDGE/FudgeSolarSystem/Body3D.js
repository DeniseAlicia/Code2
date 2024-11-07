"use strict";
var FudgeSolarSystem;
(function (FudgeSolarSystem) {
    class Body3D {
        constructor(_position, _name, _size) {
            this.position = _position;
            this.name = _name;
            this.size = _size;
            this.cmpMesh = new FudgeSolarSystem.f.ComponentMesh(Body3D.mesh);
            this.cmpMtr = new FudgeSolarSystem.f.ComponentMaterial(Body3D.material);
            this.cmpTransform = new FudgeSolarSystem.f.ComponentTransform();
        }
        setTransforms(_distance, _vOrbit, _vRotation) {
            this.distance = _distance;
            this.vOrbit = _vOrbit;
            this.vRotation = _vRotation;
        }
    }
    Body3D.mesh = new FudgeSolarSystem.f.MeshSphere("BodySphere");
    Body3D.material = new FudgeSolarSystem.f.Material("Base", FudgeSolarSystem.f.ShaderLit);
    FudgeSolarSystem.Body3D = Body3D;
})(FudgeSolarSystem || (FudgeSolarSystem = {}));
//# sourceMappingURL=Body3D.js.map