import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Crystal.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CrystalOne_LP.geometry}
        material={materials["Material #1"]}
      />
    </group>
  );
}

useGLTF.preload("/Crystal.gltf");
