"use strict";
var FudgeSolarSystem;
(function (FudgeSolarSystem) {
    FudgeSolarSystem.f = FudgeCore;
    class Body extends FudgeSolarSystem.f.Node {
        constructor(_name, _size, _color, _distance, _speed) {
            super(_name);
            this.distance = 0;
            this.vRotation = 0;
            this.size = _size;
            this.vOrbit = _speed;
            const tempMtr = new FudgeSolarSystem.f.ComponentMaterial(Body.material);
            tempMtr.clrPrimary.setCSS(_color);
            this.addComponent(new FudgeSolarSystem.f.ComponentMesh(Body.mesh));
            this.addComponent(tempMtr);
            this.addComponent(new FudgeSolarSystem.f.ComponentTransform());
            this.mtxLocal.translateX(_distance);
            this.rotationNode = new FudgeSolarSystem.f.Node(_name + " Rotation Node");
            this.rotationNode.addComponent(new FudgeSolarSystem.f.ComponentTransform);
            this.rotationNode.addChild(this);
        }
        setTransforms(_distance, _vOrbit, _vRotation) {
            this.distance = _distance;
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
        }
        step() {
            console.log("steps taken");
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bn of c.getChildren()) {
                    bn.step();
                }
            }
        }
    }
    Body.mesh = new FudgeSolarSystem.f.MeshSphere("BodySphere");
    Body.material = new FudgeSolarSystem.f.Material("BodyMaterial", FudgeSolarSystem.f.ShaderLit);
    FudgeSolarSystem.Body = Body;
})(FudgeSolarSystem || (FudgeSolarSystem = {}));
//# sourceMappingURL=Body3D.js.map