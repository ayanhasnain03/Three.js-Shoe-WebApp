import { Canvas } from "@react-three/fiber";
import { Jordan } from "./Jordan";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
const CanvasContainer = () => {
  return (
    <div className="h-[30rem] w-[20rem] bg-[#000000]">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
        <OrbitControls />
        <Jordan />
      </Canvas>
    </div>
  );
};
export default CanvasContainer;
