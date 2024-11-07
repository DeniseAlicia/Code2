"use strict";
var FudgeSolarSystem;
(function (FudgeSolarSystem) {
    FudgeSolarSystem.f = FudgeCore;
    class Body3D extends FudgeSolarSystem.f.Node {
        constructor(_name, _size, _color) {
            super(_name);
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.size = _size;
            this.addComponent(new FudgeSolarSystem.f.ComponentMesh(Body3D.mesh));
            this.addComponent(new FudgeSolarSystem.f.ComponentMaterial(Body3D.material));
            super.addComponent(new FudgeSolarSystem.f.ComponentTransform());
        }
        setTransforms(_distance, _vOrbit, _vRotation) {
            this.distance = _distance;
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
        }
    }
    Body3D.mesh = new FudgeSolarSystem.f.MeshSphere("BodySphere");
    Body3D.material = new FudgeSolarSystem.f.Material("BodyMaterial", FudgeSolarSystem.f.ShaderLit);
    FudgeSolarSystem.Body3D = Body3D;
})(FudgeSolarSystem || (FudgeSolarSystem = {}));
//# sourceMappingURL=Body3D.js.map