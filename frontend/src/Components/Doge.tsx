/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import {
    useGLTF,

} from '@react-three/drei'


export default function Doge(props: any) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dogue/model.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Mesh001.geometry} material={materials.eyes} />
            <mesh geometry={nodes.Mesh001_1.geometry} material={materials.eyes_pupile} />
            <mesh geometry={nodes.Mesh002.geometry} material={materials['body_orange-light']} />
            <mesh geometry={nodes.Mesh002_1.geometry} material={materials.body_orange} />
            <mesh geometry={nodes.nose.geometry} material={materials.nose} />
        </group>
    )
}

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dogue/model.gltf')