import React, { useRef } from "react";
import { useGLTF, useGLTF as useGLTFPreload } from "@react-three/drei";

export function Jordan(props) {
  const groupRef = useRef();

  useGLTFPreload("/shoe-draco.glb");

  const { nodes, materials } = useGLTF("/shoe-draco.glb");

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}
