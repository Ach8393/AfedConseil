

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Room(props) {
  const matcapTexture = useTexture('AfedConseil/images/afed.png');
  const { nodes, materials } = useGLTF('AfedConseil/models/compressed_office_desk.glb')
  const bodyMaterial = new THREE.MeshPhongMaterial({ matcap: matcapTexture });
 
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.partition1228A4_StaticMeshComponent0_MI_Color_M06_1_0.geometry} material={materials.MI_Color_M06_1} position={[0.482, 0.004, -0.089]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.partition1228A4_StaticMeshComponent0_MI_Color_M03_0.geometry} material={materials.MI_Color_M03} position={[0.482, 0.004, -0.089]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.partition1228A4_StaticMeshComponent0_MI_Color_M05_1_0.geometry} material={materials.MI_Color_M05_1} position={[0.482, 0.004, -0.089]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.partition1228A4_StaticMeshComponent0_MI_Object_78_0.geometry} material={materials.MI_Object_78} position={[0.482, 0.004, -0.089]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.deskoffice1228A6_StaticMeshComponent0_MI_Object_73_0.geometry} material={materials.MI_Object_73} position={[-0.047, 0.004, -0.335]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.deskoffice1228A6_StaticMeshComponent0_MI_Color_C06_0.geometry} material={materials.MI_Color_C06} position={[-0.047, 0.004, -0.335]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.deskoffice1228A6_StaticMeshComponent0_MI_Object_51_0.geometry} material={materials.MI_Object_51} position={[-0.047, 0.004, -0.335]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.deskoffice1228A6_StaticMeshComponent0_MI_Object_62_1_0.geometry} material={materials.MI_Object_62_1} position={[-0.047, 0.004, -0.335]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.drawer1228C6_StaticMeshComponent0_MI_Default_0.geometry} material={materials.MI_Default} position={[-0.061, 0.004, 0.663]} rotation={[-Math.PI / 2, 0, -1.571]} scale={1.102} />
      <mesh geometry={nodes.drawer1228C6_StaticMeshComponent0_MI_Color_I05_1_0.geometry} material={materials.MI_Color_I05_1} position={[-0.061, 0.004, 0.663]} rotation={[-Math.PI / 2, 0, -1.571]} scale={1.102} />
      <mesh geometry={nodes.drawer1228C6_StaticMeshComponent0_MI_Color_A01_3_0.geometry} material={materials.MI_Color_A01_3} position={[-0.061, 0.004, 0.663]} rotation={[-Math.PI / 2, 0, -1.571]} scale={1.102} />
      <mesh geometry={nodes.monitor1228A6_StaticMeshComponent0_MI_plasticwhite03_0.geometry} material={materials.MI_plasticwhite03} position={[0.143, 0.864, 0.135]} rotation={[-Math.PI / 2, 0, -2.007]} scale={1.102} />
      <mesh geometry={nodes.monitor1228A6_StaticMeshComponent0_MI_Object_67_0.geometry} material={materials.MI_Object_67} position={[0.143, 0.864, 0.135]} rotation={[-Math.PI / 2, 0, -2.007]} scale={1.102} />
      <mesh geometry={nodes.monitor1228A6_StaticMeshComponent0_MI_Object_74_0.geometry} material={materials.MI_Object} position={[0.143, 0.864, 0.135]} rotation={[-Math.PI / 2, 0, -2.007]} scale={1.102} />
      <mesh geometry={nodes.keyboard1228A6_StaticMeshComponent0_MI_keyboadcolor_0.geometry} material={materials.MI_keyboadcolor} position={[-0.144, 0.864, -0.197]} rotation={[-Math.PI / 2, 0, -2.269]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_paper01_0.geometry} material={materials.MI_paper01} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_A05_0.geometry} material={materials.MI_Color_A05} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Metal_Aluminum_Anodized_0.geometry} material={materials.MI_Metal_Aluminum_Anodized} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_F06_0.geometry} material={materials.MI_Color_F06} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Chrome1_0.geometry} material={materials.MI_Chrome1} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Object_0137_Black__0.geometry} material={materials.MI_Object_0137_Black} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_B04_1_0.geometry} material={materials.MI_Color_B04_1} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_M04_0.geometry} material={materials.MI_Color_M04} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_G05_0.geometry} material={materials.MI_Color_G05} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_D01_0.geometry} material={materials.MI_Color_D01} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.documents1228H12_StaticMeshComponent0_MI_Color_008_0.geometry} material={materials.MI_Color_008} position={[0.305, 0.864, -0.345]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.Notepaper122bA2_StaticMeshComponent0_MI_0046_Gold_0.geometry} material={materials.MI_0046_Gold} position={[-0.46, 1.127, -1.129]} scale={1.102} />
      <mesh geometry={nodes.desktop1228A3_StaticMeshComponent0_MI_Color_L25_0.geometry} material={materials.MI_Color_L25} position={[0.076, 0.004, 0.198]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.desktop1228A3_StaticMeshComponent0_MI_Color_A05_2_0.geometry} material={materials.MI_Color_A05_2} position={[0.076, 0.004, 0.198]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.desktop1228A3_StaticMeshComponent0_MI_Color_B01_0.geometry} material={materials.MI_Color_B01} position={[0.076, 0.004, 0.198]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.102} />
      <mesh geometry={nodes.Ballpen1228A4_StaticMeshComponent0_MI_Object_103_0.geometry} material={materials.MI_Object_103} position={[-0.263, 0.864, -0.444]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.tissue1228A2_StaticMeshComponent0_MI_white_0.geometry} material={materials.MI_white} position={[-0.013, 0.864, -0.705]} rotation={[-Math.PI / 2, 0, 0]} scale={1.102} />
      <mesh geometry={nodes.Officechair1228C6_StaticMeshComponent0_MI_Color_M08_0.geometry} material={materials.MI_Color_M08} position={[-0.629, 0.004, -0.275]} rotation={[-Math.PI / 2, 0, 1.484]} scale={1.102} />
      <mesh geometry={nodes.Officechair1228C6_StaticMeshComponent0_MI_plasticGrey_0.geometry} material={materials.MI_plasticGrey} position={[-0.629, 0.004, -0.275]} rotation={[-Math.PI / 2, 0, 1.484]} scale={1.102} />
      <mesh geometry={nodes.documents1228F_455_StaticMeshComponent0_MI_Object_41_0.geometry} material={materials.MI_Object_41} position={[0.138, 0.777, 0.722]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={1.102} />
      <instancedMesh args={[nodes.drawer1228D16_StaticMeshComponent0_MI_plasticwhite03_0.geometry, materials.MI_plasticwhite03, 3]} instanceMatrix={nodes.drawer1228D16_StaticMeshComponent0_MI_plasticwhite03_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Default_2_0.geometry, materials.MI_Default_2, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Default_2_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Color_F06_1_0.geometry, materials.MI_Color_F06, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Color_F06_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Color_G05_1_0.geometry, materials.MI_Color_G05, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Color_G05_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Color_B04_1_1_0.geometry, materials.MI_Color_B04_1, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Color_B04_1_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Color_M04_1_0.geometry, materials.MI_Color_M04, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Color_M04_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_Object_131_0.geometry, materials.MI_Object_131, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_Object_131_0.instanceMatrix} />
      <instancedMesh args={[nodes.documents1228J2_StaticMeshComponent0_MI_W1_1_0.geometry, materials.MI_Color_A01_3, 2]} instanceMatrix={nodes.documents1228J2_StaticMeshComponent0_MI_W1_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.Notepaper1228D10_StaticMeshComponent0_MI_paper01_0.geometry, materials.MI_paper01, 7]} instanceMatrix={nodes.Notepaper1228D10_StaticMeshComponent0_MI_paper01_0.instanceMatrix} />
      <instancedMesh args={[nodes.Notepaper1228B8_464_StaticMeshComponent0_MI_0046_Gold_0.geometry, materials.MI_0046_Gold, 2]} instanceMatrix={nodes.Notepaper1228B8_464_StaticMeshComponent0_MI_0046_Gold_0.instanceMatrix} />
      <instancedMesh args={[nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M06_1_0.geometry, materials.MI_Color_M06_1, 2]} instanceMatrix={nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M06_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M03_0.geometry, materials.MI_Color_M03, 2]} instanceMatrix={nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M03_0.instanceMatrix} />
      <instancedMesh args={[nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M05_1_0.geometry, materials.MI_Color_M05_1, 2]} instanceMatrix={nodes.partition1228A4_StaticMeshComponent0001_MI_Color_M05_1_0.instanceMatrix} />
      <instancedMesh args={[nodes.partition1228A4_StaticMeshComponent0001_MI_Object_78_0.geometry, materials.MI_Object_78, 2]} instanceMatrix={nodes.partition1228A4_StaticMeshComponent0001_MI_Object_78_0.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('AfedConseil/models/compressed_office_desk.glb')
